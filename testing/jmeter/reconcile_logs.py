"""
Reconcile JMeter .jtl results with the service's request log (logs/service.log).

The assignment requires the raw .jtl files to "reconcile with your service logs".
For every run in a runs.csv manifest this script checks:

  1. Ticket IDs (exact, if the log lines carry "ticket_id"):
       every successful JMeter sample's ticket id appears in the service log as a
       POST /tickets with status 200, and vice versa within the run.
  2. Request counts and status codes in the run's time window:
       JMeter samples vs log POST /tickets entries, broken down by status code.
       JMeter timeouts (no HTTP status) usually appear in the log as 200s that
       finished after JMeter gave up - these are listed separately, not as errors.
  3. Model: every matched log entry was served by the model the run claims
       (if the log lines carry "model").
  4. Latency: median of (JMeter elapsed - server duration_ms) = network + client
       overhead per request.
  5. Clock offset between the two machines, estimated from matched requests.

Warm-up requests sent by run_load_tests.py are in the log but deliberately not
in the .jtl; they fall just before the run window and are excluded.

Cascade runs: if the log lines carry an escalation flag (default field name
"escalated"; change with --escalation-field), each run also gets its escalation
fraction = escalated / completed tickets in the run, and the final-model counts.
The brief requires this figure to come from the service logs.

Usage (copy logs/service.log from the service machine first):
    python reconcile_logs.py results/llama3.2-1b/runs.csv --log results/llama3.2-1b/service.log
    python reconcile_logs.py results/*/runs.csv --log service.log --clock-offset-s 1.5

Output: reconciliation.csv next to each manifest, plus a console report.
Standard library only.
"""

import argparse
import csv
import json
import statistics
import sys
from collections import Counter
from pathlib import Path

csv.field_size_limit(min(sys.maxsize, 2**31 - 1))


def load_log(paths):
    entries, bad = [], 0
    for p in paths:
        with open(p, encoding="utf-8", errors="replace") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    e = json.loads(line)
                except json.JSONDecodeError:
                    bad += 1
                    continue
                if e.get("method") == "POST" and e.get("path") == "/tickets":
                    entries.append(e)
    entries.sort(key=lambda e: e["timestamp"])
    return entries, bad


def load_jtl(path):
    rows = []
    with open(path, newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            if r.get("label") != "POST /tickets":
                continue
            start = int(r["timeStamp"]) / 1000.0
            r["_start"] = start
            r["_end"] = start + int(r["elapsed"]) / 1000.0
            r["_ok"] = r["success"].strip().lower() == "true"
            tid = (r.get("ticket_id") or "-1").strip()
            r["_id"] = int(tid) if tid.lstrip("-").isdigit() and int(tid) >= 0 else None
            code = (r.get("responseCode") or "").strip()
            r["_code"] = code if code.isdigit() else "no-response"
            rows.append(r)
    return rows


def _is_end_timestamp(pairs):
    """Is the log timestamp written at the end of the request (vs the start)?
    Decide by which interpretation gives the more consistent offset."""
    end_diffs = [e["timestamp"] - r["_end"] for r, e in pairs]
    start_diffs = [e["timestamp"] - r["_start"] for r, e in pairs]
    if len(pairs) < 2:
        return True
    return statistics.pstdev(end_diffs) <= statistics.pstdev(start_diffs)


def reconcile_run(run, jtl_rows, log, args):
    out = {"model": run["model"], "rate_per_min": run["rate_per_min"], "rep": run["rep"],
           "jtl": Path(run["jtl"]).name}
    if not jtl_rows:
        out["verdict"] = "NO JTL SAMPLES"
        return out

    has_ids = any("ticket_id" in e for e in log)
    # Ticket ids can repeat in a long-lived service.log (e.g. tickets.db was reset between test
    # sessions while the log kept the old entries). For each id, use the entry closest in time
    # to this run, so old entries with the same id are never matched.
    run_mid = (min(r["_start"] for r in jtl_rows) + max(r["_end"] for r in jtl_rows)) / 2
    log_by_id = {}
    if has_ids:
        for e in log:
            tid = e.get("ticket_id")
            if tid is None:
                continue
            cur = log_by_id.get(tid)
            if cur is None or abs(e["timestamp"] - run_mid) < abs(cur["timestamp"] - run_mid):
                log_by_id[tid] = e
    ok_rows = [r for r in jtl_rows if r["_ok"]]
    ok_ids = [r["_id"] for r in ok_rows if r["_id"] is not None]

    # --- clock offset (log clock - JMeter clock) ---
    offset = args.clock_offset_s
    ts_is_end = True
    pairs = [(r, log_by_id[r["_id"]]) for r in ok_rows if r["_id"] in log_by_id]
    if pairs and args.clock_offset_s is None:
        ts_is_end = _is_end_timestamp(pairs)
        key = "_end" if ts_is_end else "_start"
        offset = statistics.median(e["timestamp"] - r[key] for r, e in pairs)
    offset = offset or 0.0
    out["clock_offset_s"] = round(offset, 3)

    # --- time window in log clock ---
    t0 = min(r["_start"] for r in jtl_rows) + offset
    t1 = max(r["_end"] for r in jtl_rows) + offset
    win_lo = t0 - args.tol_s
    win_hi = t1 + args.tol_s + args.late_s
    # Exact window recorded by run_load_tests.py (after warm-up .. after drain), if available.
    if run.get("window_start_epoch") and run.get("window_end_epoch"):
        # No slack before the start: JMeter's first arrival comes >= ~1 s after this (JVM start-up),
        # while the last warm-up request ends just before it.
        win_lo = float(run["window_start_epoch"]) + offset
        win_hi = float(run["window_end_epoch"]) + offset
    # Assign each logged request to a run by when it STARTED (log timestamp is written at the end),
    # so requests still queued from an earlier overloaded run aren't counted against this one.
    def started(e):
        return e["timestamp"] - float(e.get("duration_ms", 0)) / 1000.0 if ts_is_end else e["timestamp"]
    in_window = [e for e in log if win_lo <= started(e) <= win_hi]
    out["jmeter_samples"] = len(jtl_rows)
    out["log_entries_in_window"] = len(in_window)

    jm_codes = Counter(r["_code"] for r in jtl_rows)
    log_codes = Counter(str(e.get("status_code")) for e in in_window)
    out["jmeter_codes"] = "; ".join(f"{k} x{v}" for k, v in sorted(jm_codes.items()))
    out["log_codes"] = "; ".join(f"{k} x{v}" for k, v in sorted(log_codes.items()))

    problems = []

    # --- exact ID reconciliation ---
    if has_ids:
        jm_id_set = set(ok_ids)
        log_ok_ids = {e["ticket_id"] for e in in_window
                      if e.get("ticket_id") is not None and e.get("status_code") == 200}
        missing_in_log = sorted(jm_id_set - set(log_by_id))
        not_ok_in_log = sorted(i for i in jm_id_set if i in log_by_id and log_by_id[i].get("status_code") != 200)
        extra_in_log = sorted(log_ok_ids - jm_id_set)
        out["ids_matched"] = len(jm_id_set) - len(missing_in_log)
        out["ids_missing_in_log"] = len(missing_in_log)
        out["log_200_not_success_in_jmeter"] = len(extra_in_log)
        timeouts = sum(1 for r in jtl_rows if r["_code"] == "no-response")
        if missing_in_log:
            problems.append(f"{len(missing_in_log)} JMeter successes missing from log (e.g. ids {missing_in_log[:5]})")
        if not_ok_in_log:
            problems.append(f"{len(not_ok_in_log)} ids logged with non-200 status")
        if len(extra_in_log) > timeouts:
            problems.append(f"{len(extra_in_log) - timeouts} logged 200s not explained by JMeter timeouts")
        if ok_rows and len(ok_ids) < len(ok_rows):
            problems.append(f"{len(ok_rows) - len(ok_ids)} JMeter successes without ticket_id in .jtl")
    else:
        out["ids_matched"] = "n/a (no ticket_id in log)"

    # --- count / status-code reconciliation (works without ids) ---
    http_jm = Counter({k: v for k, v in jm_codes.items() if k != "no-response"})
    timeouts = jm_codes.get("no-response", 0)
    for code, n in http_jm.items():
        if log_codes.get(code, 0) < n:
            problems.append(f"JMeter has {n} x {code} but log window has {log_codes.get(code, 0)}")
    surplus = len(in_window) - sum(http_jm.values())
    if surplus > timeouts:
        problems.append(f"log window has {surplus - timeouts} more POSTs than JMeter sent "
                        f"(warm-ups or other clients? try --tol-s smaller / check clock offset)")
    out["jmeter_timeouts"] = timeouts

    # --- escalation (cascade): fraction of this run's completed tickets that were escalated ---
    # Definition (escalation_rule.md): escalated = true / all cascade rows in the run's log,
    # including requests that later failed. Also reported over completed (HTTP 200) rows only.
    casc = [e for e in in_window if args.escalation_field in e]
    is_cascade = bool(casc)
    if is_cascade:
        esc = sum(1 for e in casc if _truthy(e.get(args.escalation_field)))
        ok_c = [e for e in casc if e.get("status_code") == 200]
        esc_ok = sum(1 for e in ok_c if _truthy(e.get(args.escalation_field)))
        out["escalated"] = esc
        out["completed_in_log"] = len(casc)          # all cascade rows (column name kept for compatibility)
        out["escalation_fraction"] = round(esc / len(casc), 4)
        out["escalation_fraction_completed"] = round(esc_ok / len(ok_c), 4) if ok_c else ""
        reasons = Counter(str(e.get("decision_reason", "")) for e in casc if e.get("decision_reason"))
        out["decision_reasons"] = "; ".join(f"{k} x{v}" for k, v in reasons.most_common())
        finals = Counter(str(e.get(args.final_model_field, e.get("model"))) for e in ok_c)
        out["final_models"] = "; ".join(f"{k} x{v}" for k, v in finals.most_common())

    # --- model check (single-model configs only) ---
    models = Counter(e.get("model") for e in (pairs and [e for _, e in pairs] or in_window) if e.get("model"))
    out["log_models"] = "; ".join(f"{k} x{v}" for k, v in models.items())
    if not (args.no_model_check or is_cascade):
        wrong = [m for m in models if m != run["model"]]
        if wrong:
            problems.append(f"log shows model(s) {wrong}, run is labelled '{run['model']}'")

    # --- latency overhead ---
    if pairs:
        overhead = [float(r["elapsed"]) - float(e.get("duration_ms", 0)) for r, e in pairs]
        out["overhead_p50_ms"] = round(statistics.median(overhead), 1)

    out["verdict"] = "RECONCILED" if not problems else "CHECK: " + " | ".join(problems)
    return out


def _truthy(v):
    if isinstance(v, bool):
        return v
    if isinstance(v, (int, float)):
        return v != 0
    return str(v).strip().lower() in ("true", "yes", "y", "1", "escalated")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("manifests", nargs="+", help="runs.csv file(s) from run_load_tests.py")
    ap.add_argument("--log", nargs="+", required=True, help="service.log file(s) copied from the service machine")
    ap.add_argument("--clock-offset-s", type=float, default=None,
                    help="service clock minus load-generator clock; estimated from ticket ids if omitted")
    ap.add_argument("--tol-s", type=float, default=1.0, help="slack around the run window (s)")
    ap.add_argument("--late-s", type=float, default=15.0,
                    help="for manifests without recorded windows: extra time after the last sample "
                         "for requests JMeter timed out on (s)")
    ap.add_argument("--escalation-field", default="escalated",
                    help="log field that is true when the cascade escalated the ticket")
    ap.add_argument("--final-model-field", default="final_model",
                    help="log field naming the model that produced the final answer")
    ap.add_argument("--no-model-check", action="store_true",
                    help="don't compare the logged model with the run label")
    args = ap.parse_args()

    log, bad = load_log(args.log)
    print(f"Service log: {len(log)} POST /tickets entries" + (f" ({bad} unparsable lines skipped)" if bad else ""))
    if log and not any("ticket_id" in e for e in log):
        print("Note: log lines have no ticket_id - reconciling by time window and status code only.")

    any_problem = False
    for m in args.manifests:
        mpath = Path(m)
        with mpath.open(newline="", encoding="utf-8") as f:
            runs = list(csv.DictReader(f))
        results = []
        for run in runs:
            jtl = Path(run["jtl"])
            if not jtl.is_absolute():
                jtl = mpath.parent / jtl
            rows = load_jtl(jtl) if jtl.exists() else []
            res = reconcile_run(run, rows, log, args)
            results.append(res)
            flag = "OK " if res["verdict"] == "RECONCILED" else "!! "
            any_problem |= flag == "!! "
            print(f"{flag}{res['jtl']}: JMeter {res.get('jmeter_samples', 0)} samples [{res.get('jmeter_codes', '')}] | "
                  f"log {res.get('log_entries_in_window', 0)} [{res.get('log_codes', '')}] | "
                  f"ids matched {res.get('ids_matched', '-')} | offset {res.get('clock_offset_s', '-')} s | "
                  f"{res['verdict']}"
                  + (f" | escalated {res['escalated']}/{res['completed_in_log']} = {res['escalation_fraction']}"
                     if "escalated" in res else ""))
        fields = ["model", "rate_per_min", "rep", "jtl", "jmeter_samples", "log_entries_in_window",
                  "jmeter_codes", "log_codes", "jmeter_timeouts", "ids_matched", "ids_missing_in_log",
                  "log_200_not_success_in_jmeter", "log_models", "escalated", "completed_in_log",
                  "escalation_fraction", "escalation_fraction_completed", "decision_reasons", "final_models", "overhead_p50_ms", "clock_offset_s", "verdict"]
        out = mpath.parent / "reconciliation.csv"
        with out.open("w", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
            w.writeheader()
            w.writerows(results)
        print(f"Wrote {out}\n")
    sys.exit(1 if any_problem else 0)


if __name__ == "__main__":
    main()
