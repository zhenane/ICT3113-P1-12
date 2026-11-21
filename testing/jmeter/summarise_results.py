"""
Summarise JMeter .jtl results (Assignment 2 reporting rules).

Per run (summary_runs.csv):
    sent        requests JMeter sent
    completed   successful responses (HTTP 200 with a category)
    errored     failed with an HTTP response (e.g. 502, 500, 422)
    unfinished  no HTTP response at all (response timeout, connection cut)
    error_rate  (errored + unfinished) / sent
    throughput  completed requests per second over the run
    p50         median end-to-end latency of the successful requests
    server p50  latency_ms reported by the service (time inside classify, incl. Ollama queue)
    overhead p50  end-to-end minus server time (network + FastAPI + SQLite)
    /stats cross-check (increase in GET /stats total vs completed)

Per configuration (summary_configs.csv), over its runs:
    p50 mean, standard deviation, min-max across runs
    p95 POOLED over all runs' successful requests, with the number it is based on
      (a ~30-request run is too small for a per-run p95; the brief asks for the
       pooled figure and says not to report p99, so p99 is not produced)
    throughput and error rate, mean across runs; totals of sent/completed/errored/unfinished

Inputs: runs.csv manifest(s) from run_load_tests.py, or .jtl files named
<model>_r<rate>_rep<n>.jtl.

    python summarise_results.py results/qwen3-1.7b/runs.csv
    python summarise_results.py results/*/runs.csv --out results     # all configs in one table

Standard library only.
"""

import argparse
import csv
import math
import re
import statistics
import sys
from collections import Counter, defaultdict
from pathlib import Path

csv.field_size_limit(min(sys.maxsize, 2**31 - 1))


def percentile(values, p):
    """Linear-interpolated percentile (same method as numpy's default)."""
    if not values:
        return float("nan")
    s = sorted(values)
    k = (len(s) - 1) * p / 100.0
    lo, hi = math.floor(k), math.ceil(k)
    return s[lo] + (s[hi] - s[lo]) * (k - lo)


def _error_key(row):
    code = (row.get("responseCode") or "").strip()
    if code.isdigit():
        return code
    msg = (row.get("responseMessage") or code or "unknown").split(":")[-1].strip()
    return msg.split(".")[-1] or "unknown"


def _has_http_status(row):
    return (row.get("responseCode") or "").strip().isdigit()


def summarise_jtl(path, skip_first_s=0.0):
    rows = []
    with open(path, newline="", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            if row.get("label") == "POST /tickets":
                rows.append(row)
    empty = {"samples": 0, "successes": 0, "errors": 0, "errored": 0, "unfinished": 0,
             "error_rate": float("nan"), "error_breakdown": "", "lat_p95_ms": float("nan"), "_lat": []}
    if not rows:
        return empty
    if skip_first_s:
        start0 = min(int(r["timeStamp"]) for r in rows)
        rows = [r for r in rows if int(r["timeStamp"]) - start0 >= skip_first_s * 1000]
        if not rows:
            return empty

    ok = [r for r in rows if r["success"].strip().lower() == "true"]
    bad = [r for r in rows if r["success"].strip().lower() != "true"]
    errored = sum(1 for r in bad if _has_http_status(r))
    unfinished = len(bad) - errored

    starts = [int(r["timeStamp"]) for r in rows]
    ends = [int(r["timeStamp"]) + int(r["elapsed"]) for r in rows]
    window_s = max((max(ends) - min(starts)) / 1000.0, 1e-9)
    arrival_window_s = max((max(starts) - min(starts)) / 1000.0, 1e-9)

    lat = [float(r["elapsed"]) for r in ok]
    server, overhead = [], []
    for r in ok:
        try:
            s = float(r.get("server_latency_ms", "-1") or -1)
        except ValueError:
            s = -1
        if s >= 0:
            server.append(s)
            overhead.append(float(r["elapsed"]) - s)

    return {
        "samples": len(rows), "successes": len(ok), "errors": len(bad),
        "errored": errored, "unfinished": unfinished,
        "error_rate": len(bad) / len(rows),
        "error_breakdown": "; ".join(f"{k} x{v}" for k, v in Counter(_error_key(r) for r in bad).most_common()),
        "arrival_rps": (len(rows) - 1) / arrival_window_s if len(rows) > 1 else float("nan"),
        "throughput_rps": len(ok) / window_s,
        "lat_mean_ms": statistics.fmean(lat) if lat else float("nan"),
        "lat_p50_ms": percentile(lat, 50),
        "lat_p95_ms": percentile(lat, 95),     # used internally (stress SLO check); not reported per run
        "lat_max_ms": max(lat) if lat else float("nan"),
        "server_p50_ms": percentile(server, 50),
        "overhead_p50_ms": percentile(overhead, 50),
        "_lat": lat,
    }


NAME_RE = re.compile(r"^(?P<model>.+)_r(?P<rate>[\d.]+)_rep(?P<rep>\d+)(_\d{8}_\d{6})?\.jtl$")


def load_runs(inputs):
    runs = []
    for item in inputs:
        p = Path(item)
        if p.suffix == ".csv":
            with p.open(newline="", encoding="utf-8") as f:
                for row in csv.DictReader(f):
                    jtl = Path(row["jtl"])
                    if not jtl.is_absolute():
                        jtl = p.parent / jtl
                    row["jtl"] = str(jtl)
                    runs.append(row)
        elif p.suffix == ".jtl":
            m = NAME_RE.match(p.name)
            if not m:
                sys.exit(f"Can't parse model/rate/rep from {p.name}; expected <model>_r<rate>_rep<n>.jtl")
            runs.append({"model": m["model"], "rate_per_min": m["rate"], "rep": m["rep"], "jtl": str(p)})
    return runs


def fmt(x, nd=1):
    if isinstance(x, float):
        return "nan" if math.isnan(x) else f"{x:.{nd}f}"
    return str(x)


def mean_sd(vals):
    vals = [v for v in vals if isinstance(v, (int, float)) and not math.isnan(v)]
    if not vals:
        return float("nan"), float("nan")
    return statistics.fmean(vals), (statistics.stdev(vals) if len(vals) > 1 else 0.0)


RUN_FIELDS = ["model", "rate_per_min", "rep", "sent", "completed", "errored", "unfinished", "error_rate",
              "throughput_rps", "arrival_rps", "p50_ms", "mean_ms", "max_ms", "server_p50_ms", "overhead_p50_ms",
              "error_breakdown", "stats_delta", "stats_matches_completed", "jtl"]
CFG_FIELDS = ["model", "rate_per_min", "runs", "sent", "completed", "errored", "unfinished",
              "p50_mean_ms", "p50_sd_ms", "p50_min_ms", "p50_max_ms", "p50_pooled_ms",
              "p95_pooled_ms", "p95_pooled_n", "throughput_mean_rps", "throughput_sd_rps",
              "error_rate_mean", "server_p50_mean_ms", "overhead_p50_mean_ms", "stats_mismatches"]


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("inputs", nargs="+", help="runs.csv manifest(s) and/or .jtl files")
    ap.add_argument("--out", help="output directory (default: folder of first input)")
    ap.add_argument("--skip-first-s", type=float, default=0.0,
                    help="ignore samples that started in the first N seconds of each run")
    args = ap.parse_args()

    runs = load_runs(args.inputs)
    if not runs:
        sys.exit("No runs found.")
    out_dir = Path(args.out) if args.out else Path(args.inputs[0]).parent
    out_dir.mkdir(parents=True, exist_ok=True)

    run_rows = []
    for r in runs:
        if not Path(r["jtl"]).exists():
            print(f"Skipping missing file {r['jtl']}")
            continue
        s = summarise_jtl(r["jtl"], args.skip_first_s)
        row = {"model": r["model"], "rate_per_min": r["rate_per_min"], "rep": r["rep"],
               "sent": s["samples"], "completed": s["successes"], "errored": s["errored"],
               "unfinished": s["unfinished"], "error_rate": s["error_rate"],
               "throughput_rps": s.get("throughput_rps", float("nan")), "arrival_rps": s.get("arrival_rps", float("nan")),
               "p50_ms": s.get("lat_p50_ms", float("nan")), "mean_ms": s.get("lat_mean_ms", float("nan")),
               "max_ms": s.get("lat_max_ms", float("nan")), "server_p50_ms": s.get("server_p50_ms", float("nan")),
               "overhead_p50_ms": s.get("overhead_p50_ms", float("nan")),
               "error_breakdown": s["error_breakdown"], "jtl": r["jtl"], "_lat": s["_lat"]}
        if r.get("stats_delta") not in (None, ""):
            row["stats_delta"] = r["stats_delta"]
            row["stats_matches_completed"] = str(int(r["stats_delta"]) == s["successes"])
        run_rows.append(row)

    with (out_dir / "summary_runs.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=RUN_FIELDS, extrasaction="ignore")
        w.writeheader()
        for row in run_rows:
            w.writerow({k: (fmt(v, 4) if isinstance(v, float) else v) for k, v in row.items()})

    groups = defaultdict(list)
    for row in run_rows:
        groups[(row["model"], float(row["rate_per_min"]))].append(row)

    cfgs = []
    for (model, rate), rows in sorted(groups.items()):
        p50s = [r["p50_ms"] for r in rows]
        pooled = [x for r in rows for x in r["_lat"]]
        p50m, p50sd = mean_sd(p50s)
        thm, thsd = mean_sd([r["throughput_rps"] for r in rows])
        valid_p50 = [v for v in p50s if not math.isnan(v)]
        cfgs.append({
            "model": model, "rate_per_min": rate, "runs": len(rows),
            "sent": sum(r["sent"] for r in rows), "completed": sum(r["completed"] for r in rows),
            "errored": sum(r["errored"] for r in rows), "unfinished": sum(r["unfinished"] for r in rows),
            "p50_mean_ms": p50m, "p50_sd_ms": p50sd,
            "p50_min_ms": min(valid_p50) if valid_p50 else float("nan"),
            "p50_max_ms": max(valid_p50) if valid_p50 else float("nan"),
            "p50_pooled_ms": percentile(pooled, 50), "p95_pooled_ms": percentile(pooled, 95),
            "p95_pooled_n": len(pooled),
            "throughput_mean_rps": thm, "throughput_sd_rps": thsd,
            "error_rate_mean": mean_sd([r["error_rate"] for r in rows])[0],
            "server_p50_mean_ms": mean_sd([r["server_p50_ms"] for r in rows])[0],
            "overhead_p50_mean_ms": mean_sd([r["overhead_p50_ms"] for r in rows])[0],
            "stats_mismatches": sum(1 for r in rows if r.get("stats_matches_completed") == "False"),
        })

    with (out_dir / "summary_configs.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=CFG_FIELDS)
        w.writeheader()
        for c in cfgs:
            w.writerow({k: (fmt(v, 4) if isinstance(v, float) else v) for k, v in c.items()})

    print("Per run")
    hdr = f"{'config':<24}{'rep':>4}{'sent':>6}{'done':>6}{'err':>5}{'unfin':>6}{'p50 s':>9}{'thru r/s':>10}{'srv p50 s':>10}"
    print(hdr + "\n" + "-" * len(hdr))
    for r in run_rows:
        print(f"{r['model'][:23]:<24}{r['rep']:>4}{r['sent']:>6}{r['completed']:>6}{r['errored']:>5}{r['unfinished']:>6}"
              f"{fmt(r['p50_ms'] / 1000, 2):>9}{fmt(r['throughput_rps'], 4):>10}{fmt(r['server_p50_ms'] / 1000, 2):>10}")
    print("\nPer configuration (p50: mean ± sd [min-max] across runs; p95 pooled over all runs)")
    hdr = f"{'config':<24}{'req/min':>8}{'runs':>5}{'p50 mean±sd s':>16}{'[min-max]':>15}{'p95 pooled s (n)':>18}{'thru r/s':>10}{'err%':>7}"
    print(hdr + "\n" + "-" * len(hdr))
    for c in cfgs:
        print(f"{c['model'][:23]:<24}{fmt(c['rate_per_min'], 3):>8}{c['runs']:>5}"
              f"{fmt(c['p50_mean_ms'] / 1000, 2) + '±' + fmt(c['p50_sd_ms'] / 1000, 2):>16}"
              f"{'[' + fmt(c['p50_min_ms'] / 1000, 1) + '-' + fmt(c['p50_max_ms'] / 1000, 1) + ']':>15}"
              f"{fmt(c['p95_pooled_ms'] / 1000, 2) + ' (' + str(c['p95_pooled_n']) + ')':>18}"
              f"{fmt(c['throughput_mean_rps'], 4):>10}{fmt(c['error_rate_mean'] * 100, 2):>7}")
    mism = sum(c["stats_mismatches"] for c in cfgs)
    unfin = sum(c["unfinished"] for c in cfgs)
    if mism:
        print(f"\nWARNING: {mism} run(s) where /stats increase != completed (see summary_runs.csv).")
    if unfin:
        print(f"WARNING: {unfin} unfinished request(s) - report them; check the timeout and pause settings.")
    print(f"\nWrote {out_dir / 'summary_runs.csv'} and {out_dir / 'summary_configs.csv'}")


if __name__ == "__main__":
    main()
