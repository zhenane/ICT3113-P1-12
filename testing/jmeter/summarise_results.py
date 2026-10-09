"""
Step 5b - Summarise JMeter .jtl results.

For every run it computes:
    samples, successes, error rate, error breakdown (by response code / exception),
    achieved arrival rate, throughput (successful req/s),
    end-to-end latency  mean / p50 / p90 / p95 / p99 / max   (successful requests),
    server latency      p50 / p95   (latency_ms returned by the service = time in classify()),
    overhead p50        (end-to-end minus server latency ~= queueing + network + DB),
    /stats cross-check  (server's ticket count increase vs JMeter successes)
then averages each metric across the repeats of the same (model, rate) config
and reports the standard deviation.

Inputs: the runs.csv manifest written by run_load_tests.py (preferred), or a list
of .jtl files named <model>_r<rate_per_min>_rep<n>.jtl.

Outputs (next to the manifest unless --out is given):
    summary_runs.csv     one row per run
    summary_configs.csv  one row per (model, rate), mean +/- std over repeats

Usage:
    python summarise_results.py results/runs.csv
    python summarise_results.py results/*.jtl --out results
    python summarise_results.py results/runs.csv --skip-first-s 30   # drop extra warm-up
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

RUN_METRICS = [
    "samples", "successes", "errors", "error_rate",
    "arrival_rps", "throughput_rps",
    "lat_mean_ms", "lat_p50_ms", "lat_p90_ms", "lat_p95_ms", "lat_p99_ms", "lat_max_ms",
    "server_p50_ms", "server_p95_ms", "overhead_p50_ms",
]


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
    # Non-HTTP failures, e.g. "Non HTTP response code: java.net.SocketTimeoutException"
    msg = (row.get("responseMessage") or code or "unknown").split(":")[-1].strip()
    return msg.split(".")[-1] or "unknown"


def summarise_jtl(path, skip_first_s=0.0):
    rows = []
    with open(path, newline="", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            if row.get("label") != "POST /tickets":
                continue
            rows.append(row)
    if not rows:
        return {"samples": 0, "successes": 0, "errors": 0, "error_rate": float("nan"), "error_breakdown": ""}

    start0 = min(int(r["timeStamp"]) for r in rows)
    if skip_first_s:
        rows = [r for r in rows if int(r["timeStamp"]) - start0 >= skip_first_s * 1000]
        if not rows:
            return {"samples": 0, "successes": 0, "errors": 0, "error_rate": float("nan"), "error_breakdown": ""}

    ok = [r for r in rows if r["success"].strip().lower() == "true"]
    bad = [r for r in rows if r["success"].strip().lower() != "true"]

    starts = [int(r["timeStamp"]) for r in rows]
    ends = [int(r["timeStamp"]) + int(r["elapsed"]) for r in rows]
    first, last_start, last_end = min(starts), max(starts), max(ends)
    window_s = max((last_end - first) / 1000.0, 1e-9)
    arrival_window_s = max((last_start - first) / 1000.0, 1e-9)

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

    errors = Counter(_error_key(r) for r in bad)
    return {
        "samples": len(rows),
        "successes": len(ok),
        "errors": len(bad),
        "error_rate": len(bad) / len(rows),
        "error_breakdown": "; ".join(f"{k} x{v}" for k, v in errors.most_common()),
        "arrival_rps": (len(rows) - 1) / arrival_window_s if len(rows) > 1 else float("nan"),
        "throughput_rps": len(ok) / window_s,
        "lat_mean_ms": statistics.fmean(lat) if lat else float("nan"),
        "lat_p50_ms": percentile(lat, 50),
        "lat_p90_ms": percentile(lat, 90),
        "lat_p95_ms": percentile(lat, 95),
        "lat_p99_ms": percentile(lat, 99),
        "lat_max_ms": max(lat) if lat else float("nan"),
        "server_p50_ms": percentile(server, 50),
        "server_p95_ms": percentile(server, 95),
        "overhead_p50_ms": percentile(overhead, 50),
    }


NAME_RE = re.compile(r"^(?P<model>.+)_r(?P<rate>[\d.]+)_rep(?P<rep>\d+)\.jtl$")


def load_runs(inputs):
    """Return list of dicts with at least model, rate_per_min, rep, jtl."""
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


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("inputs", nargs="+", help="runs.csv manifest and/or .jtl files")
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
        row = {"model": r["model"], "rate_per_min": r["rate_per_min"], "rep": r["rep"], **s}
        if r.get("stats_delta") not in (None, ""):
            row["stats_delta"] = r["stats_delta"]
            row["stats_matches_jmeter"] = str(int(r["stats_delta"]) == s["successes"])
        row["jtl"] = r["jtl"]
        run_rows.append(row)

    run_fields = ["model", "rate_per_min", "rep"] + RUN_METRICS + ["error_breakdown", "stats_delta", "stats_matches_jmeter", "jtl"]
    with (out_dir / "summary_runs.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=run_fields, extrasaction="ignore")
        w.writeheader()
        for row in run_rows:
            w.writerow({k: (fmt(v, 4) if isinstance(v, float) else v) for k, v in row.items()})

    groups = defaultdict(list)
    for row in run_rows:
        groups[(row["model"], float(row["rate_per_min"]))].append(row)

    cfg_rows = []
    for (model, rate), rows in sorted(groups.items()):
        cfg = {"model": model, "rate_per_min": rate, "target_rps": rate / 60.0, "runs": len(rows)}
        for m in RUN_METRICS:
            vals = [r[m] for r in rows if isinstance(r.get(m), (int, float)) and not math.isnan(r[m])]
            cfg[f"{m}_mean"] = statistics.fmean(vals) if vals else float("nan")
            cfg[f"{m}_std"] = statistics.stdev(vals) if len(vals) > 1 else 0.0 if vals else float("nan")
        cfg["stats_mismatches"] = sum(1 for r in rows if r.get("stats_matches_jmeter") == "False")
        cfg_rows.append(cfg)

    cfg_fields = ["model", "rate_per_min", "target_rps", "runs"] + \
        [f"{m}_{s}" for m in RUN_METRICS for s in ("mean", "std")] + ["stats_mismatches"]
    with (out_dir / "summary_configs.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=cfg_fields)
        w.writeheader()
        for row in cfg_rows:
            w.writerow({k: (fmt(v, 4) if isinstance(v, float) else v) for k, v in row.items()})

    # Console table
    hdr = f"{'model':<22}{'req/min':>8}{'runs':>5}{'err%':>8}{'thru r/s':>10}{'p50 ms':>10}{'p95 ms':>10}{'p99 ms':>10}{'srv p50':>10}{'ovh p50':>10}"
    print(hdr)
    print("-" * len(hdr))
    for c in cfg_rows:
        print(f"{c['model'][:21]:<22}{fmt(c['rate_per_min'],1):>8}{c['runs']:>5}"
              f"{fmt(c['error_rate_mean']*100,2):>8}{fmt(c['throughput_rps_mean'],3):>10}"
              f"{fmt(c['lat_p50_ms_mean'],0):>10}{fmt(c['lat_p95_ms_mean'],0):>10}{fmt(c['lat_p99_ms_mean'],0):>10}"
              f"{fmt(c['server_p50_ms_mean'],0):>10}{fmt(c['overhead_p50_ms_mean'],0):>10}")
    mism = sum(c["stats_mismatches"] for c in cfg_rows)
    if mism:
        print(f"\nWARNING: {mism} run(s) where /stats increase != JMeter successes (see summary_runs.csv).")
    print(f"\nWrote {out_dir / 'summary_runs.csv'} and {out_dir / 'summary_configs.csv'}")


if __name__ == "__main__":
    main()
