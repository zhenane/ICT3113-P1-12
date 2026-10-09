"""
Accuracy test: send every golden-set ticket through POST /tickets for one model,
then score the predictions against the golden labels.

    python run_accuracy.py --host 192.168.0.10 --model llama3.2:1b

What it does
  1. Sends the 196 golden tickets ONE AT A TIME (this is not a load test - no
     concurrency, so latency/queueing can't affect the answers). Each prediction
     is saved to results/<model>/predictions.csv as soon as it arrives, so an
     interrupted run resumes where it stopped (just run the same command again).
  2. Scores the predictions:
       - overall accuracy
       - per-category precision / recall / F1 / support
       - macro-F1 over the gated categories (support >= --min-support, default 20)
         and, for reference, over all categories
       - confusion matrix (rows = golden label, columns = predicted)
  3. Checks C's requirements (requirements/README.md):
       overall_accuracy >= 75%, macro_f1 >= 0.65,
       per-category recall >= 55% for categories with >= 20 golden examples.

Requests that fail (HTTP error / timeout) are counted as wrong, shown in an
"(error)" column of the confusion matrix, and reported - they are not dropped.

Re-score saved predictions without calling the service:
    python run_accuracy.py --model llama3.2:1b --score-only

Outputs in results/<model>/:
    predictions.csv        row, golden label, predicted, correct, latency, ticket id
    metrics.csv            per-category precision/recall/F1/support
    confusion_matrix.csv   counts
    accuracy_report.md     everything above as tables + requirement pass/fail

Before running: switch the service to the model (OLLAMA_MODEL + restart) and
don't run this at the same time as load tests. Standard library only.
"""

import argparse
import csv
import datetime as dt
import json
import re
import sys
import time
import urllib.error
import urllib.request
from collections import Counter, OrderedDict
from pathlib import Path

csv.field_size_limit(min(sys.maxsize, 2**31 - 1))
HERE = Path(__file__).resolve().parent
DEFAULT_GOLDEN = HERE.parent.parent / "golden-test-set" / "final" / "golden_test_set.csv"
ERROR = "(error)"
PRED_FIELDS = ["row", "human_label", "predicted", "correct", "http_status", "client_latency_ms",
               "server_latency_ms", "ticket_id", "timestamp"]


def safe_name(s):
    return re.sub(r"[^A-Za-z0-9._-]+", "-", s)


def load_golden(path):
    with open(path, newline="", encoding="utf-8-sig") as f:
        rows = list(csv.DictReader(f))
    for col in ("row", "narrative", "human_label"):
        if rows and col not in rows[0]:
            sys.exit(f"Golden set {path} has no '{col}' column")
    return rows


def classify(base, narrative, timeout):
    body = json.dumps({"narrative": narrative}).encode("utf-8")
    req = urllib.request.Request(f"{base}/tickets", data=body,
                                 headers={"Content-Type": "application/json"}, method="POST")
    t0 = time.perf_counter()
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            d = json.load(r)
            return r.status, d.get("category"), d.get("latency_ms"), d.get("id"), (time.perf_counter() - t0) * 1000
    except urllib.error.HTTPError as e:
        return e.code, None, None, None, (time.perf_counter() - t0) * 1000
    except Exception:  # timeout / connection error
        return "no-response", None, None, None, (time.perf_counter() - t0) * 1000


def run_predictions(args, golden, pred_path):
    done = {}
    if pred_path.exists():
        with pred_path.open(newline="", encoding="utf-8") as f:
            for r in csv.DictReader(f):
                if r["predicted"] != ERROR or not args.retry_errors:
                    done[r["row"]] = r
    todo = [g for g in golden if g["row"] not in done]
    if not todo:
        print(f"All {len(golden)} tickets already have predictions in {pred_path}")
        return
    print(f"{len(done)} already done, {len(todo)} to send (one at a time)...")

    base = f"http://{args.host}:{args.port}"
    # Warm-up so the model-loading delay doesn't hit the first ticket (not scored).
    for _ in range(args.warmup):
        classify(base, golden[0]["narrative"], args.timeout_s)

    rewrite = args.retry_errors and pred_path.exists()
    kept = list(done.values())
    with pred_path.open("w" if rewrite or not pred_path.exists() else "a", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=PRED_FIELDS)
        if rewrite or f.tell() == 0:
            w.writeheader()
            if rewrite:
                w.writerows(kept)
        for i, g in enumerate(todo, 1):
            status, cat, srv, tid, cli = classify(base, g["narrative"], args.timeout_s)
            pred = cat if status == 200 and cat else ERROR
            w.writerow({"row": g["row"], "human_label": g["human_label"], "predicted": pred,
                        "correct": pred == g["human_label"], "http_status": status,
                        "client_latency_ms": round(cli, 1), "server_latency_ms": srv if srv is not None else "",
                        "ticket_id": tid if tid is not None else "",
                        "timestamp": dt.datetime.now().isoformat(timespec="seconds")})
            f.flush()
            mark = "ok " if pred == g["human_label"] else ("ERR" if pred == ERROR else "-- ")
            print(f"  [{i:>3}/{len(todo)}] {mark} row {g['row']}: golden '{g['human_label']}' -> '{pred}' "
                  f"({cli / 1000:.1f}s)")


def score(pred_path, golden, min_support):
    with pred_path.open(newline="", encoding="utf-8") as f:
        preds = {r["row"]: r for r in csv.DictReader(f)}
    missing = [g["row"] for g in golden if g["row"] not in preds]
    pairs = [(g["human_label"], preds[g["row"]]["predicted"]) for g in golden if g["row"] in preds]

    gold_counts = Counter(t for t, _ in pairs)
    labels = [l for l, _ in gold_counts.most_common()]
    extra_pred = sorted({p for _, p in pairs if p not in gold_counts and p != ERROR})
    columns = labels + extra_pred + ([ERROR] if any(p == ERROR for _, p in pairs) else [])

    cm = OrderedDict((t, Counter()) for t in labels)
    for t, p in pairs:
        cm[t][p] += 1

    metrics = []
    for lab in labels:
        tp = cm[lab][lab]
        support = gold_counts[lab]
        predicted = sum(1 for _, p in pairs if p == lab)
        prec = tp / predicted if predicted else 0.0
        rec = tp / support if support else 0.0
        f1 = 2 * prec * rec / (prec + rec) if prec + rec else 0.0
        metrics.append({"category": lab, "support": support, "predicted": predicted, "correct": tp,
                        "precision": prec, "recall": rec, "f1": f1, "gated": support >= min_support})

    n = len(pairs)
    acc = sum(1 for t, p in pairs if t == p) / n if n else 0.0
    gated = [m for m in metrics if m["gated"]]
    macro_gated = sum(m["f1"] for m in gated) / len(gated) if gated else 0.0
    macro_all = sum(m["f1"] for m in metrics) / len(metrics) if metrics else 0.0
    errors = sum(1 for _, p in pairs if p == ERROR)
    return {"n": n, "missing": missing, "accuracy": acc, "macro_f1_gated": macro_gated,
            "macro_f1_all": macro_all, "metrics": metrics, "cm": cm, "columns": columns, "errors": errors,
            "extra_pred": extra_pred}


def write_outputs(out, model, s, args):
    with (out / "metrics.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["category", "support", "predicted", "correct", "precision", "recall", "f1", "gated"])
        for m in s["metrics"]:
            w.writerow([m["category"], m["support"], m["predicted"], m["correct"],
                        f"{m['precision']:.4f}", f"{m['recall']:.4f}", f"{m['f1']:.4f}", m["gated"]])
        w.writerow([])
        w.writerow(["overall_accuracy", f"{s['accuracy']:.4f}"])
        w.writerow([f"macro_f1 (categories with >= {args.min_support} examples)", f"{s['macro_f1_gated']:.4f}"])
        w.writerow(["macro_f1 (all categories)", f"{s['macro_f1_all']:.4f}"])
        w.writerow(["failed_requests", s["errors"]])

    with (out / "confusion_matrix.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["golden \\ predicted"] + s["columns"] + ["total"])
        for t, row in s["cm"].items():
            w.writerow([t] + [row.get(c, 0) for c in s["columns"]] + [sum(row.values())])

    checks = [
        ("Overall accuracy >= 75%", s["accuracy"] >= 0.75, f"{s['accuracy']:.1%}"),
        (f"Macro-F1 >= 0.65 (categories with >= {args.min_support} examples)",
         s["macro_f1_gated"] >= 0.65, f"{s['macro_f1_gated']:.3f}"),
    ]
    for m in s["metrics"]:
        if m["gated"]:
            checks.append((f"Recall >= 55%: {m['category']}", m["recall"] >= 0.55, f"{m['recall']:.1%}"))

    L = [f"# Accuracy test: `{model}`", "",
         f"Golden set: `{args.golden}` - {s['n']} tickets scored"
         + (f", **{len(s['missing'])} not yet predicted**" if s["missing"] else "")
         + f". Failed requests (counted as wrong): {s['errors']}.", "",
         f"Generated {dt.datetime.now().isoformat(timespec='seconds')}.", "",
         "## Requirements", "", "| Requirement | Result | Value |", "|---|---|---|"]
    L += [f"| {name} | {'PASS' if ok else '**FAIL**'} | {val} |" for name, ok, val in checks]
    L += ["", f"Overall: **{'PASS' if all(ok for _, ok, _ in checks) else 'FAIL'}**", "",
          "## Per-category metrics", "",
          "| Category | Support | Precision | Recall | F1 | Gated |", "|---|---:|---:|---:|---:|---|"]
    L += [f"| {m['category']} | {m['support']} | {m['precision']:.1%} | {m['recall']:.1%} | {m['f1']:.3f} | "
          f"{'yes' if m['gated'] else f'no (< {args.min_support} examples)'} |" for m in s["metrics"]]
    L += ["", f"Overall accuracy **{s['accuracy']:.1%}**; macro-F1 **{s['macro_f1_gated']:.3f}** over gated "
          f"categories ({s['macro_f1_all']:.3f} over all categories).", ""]
    if s["extra_pred"]:
        L += [f"Predicted labels outside the golden label set: {', '.join(s['extra_pred'])}.", ""]
    L += ["## Confusion matrix", "", "Rows = golden label, columns = predicted label.", "",
          "| golden \\ predicted | " + " | ".join(s["columns"]) + " | total |",
          "|---|" + "---:|" * (len(s["columns"]) + 1)]
    for t, row in s["cm"].items():
        cells = [f"**{row.get(c, 0)}**" if c == t else str(row.get(c, 0) or "") for c in s["columns"]]
        L.append(f"| {t} | " + " | ".join(cells) + f" | {sum(row.values())} |")
    (out / "accuracy_report.md").write_text("\n".join(L) + "\n", encoding="utf-8")
    return checks


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--host", default="localhost")
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--model", required=True, help="label for the model the service is running")
    ap.add_argument("--golden", default=str(DEFAULT_GOLDEN))
    ap.add_argument("--out", default=str(HERE / "results"))
    ap.add_argument("--timeout-s", type=float, default=300)
    ap.add_argument("--warmup", type=int, default=2, help="unscored warm-up requests")
    ap.add_argument("--min-support", type=int, default=20, help="minimum examples for a category to be a gate")
    ap.add_argument("--score-only", action="store_true", help="score saved predictions, don't call the service")
    ap.add_argument("--retry-errors", action="store_true", help="re-send tickets whose earlier request failed")
    args = ap.parse_args()

    golden = load_golden(args.golden)
    out = Path(args.out) / safe_name(args.model)
    out.mkdir(parents=True, exist_ok=True)
    pred_path = out / "predictions.csv"

    if not args.score_only:
        try:
            with urllib.request.urlopen(f"http://{args.host}:{args.port}/stats", timeout=10):
                pass
        except Exception as e:  # noqa: BLE001
            sys.exit(f"Service not reachable at http://{args.host}:{args.port}: {e}")
        print(f"Model '{args.model}': {len(golden)} golden tickets from {args.golden}")
        print("Reminder: the service must already be running this model.\n")
        run_predictions(args, golden, pred_path)
    elif not pred_path.exists():
        sys.exit(f"No predictions at {pred_path}")

    s = score(pred_path, golden, args.min_support)
    checks = write_outputs(out, args.model, s, args)

    print(f"\n{args.model}: accuracy {s['accuracy']:.1%}, macro-F1 {s['macro_f1_gated']:.3f} "
          f"({s['n']} scored, {s['errors']} failed requests)")
    print(f"{'category':<28}{'support':>8}{'prec':>8}{'recall':>8}{'f1':>7}")
    for m in s["metrics"]:
        print(f"{m['category']:<28}{m['support']:>8}{m['precision']:>8.1%}{m['recall']:>8.1%}{m['f1']:>7.3f}"
              + ("" if m["gated"] else "  (not gated)"))
    print()
    for name, ok, val in checks:
        print(f"  {'PASS' if ok else 'FAIL'}  {name}: {val}")
    if s["missing"]:
        print(f"\nWARNING: {len(s['missing'])} golden tickets have no prediction yet - rerun to finish.")
    print(f"\nWrote {out / 'accuracy_report.md'}, metrics.csv, confusion_matrix.csv, predictions.csv")


if __name__ == "__main__":
    main()
