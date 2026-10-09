"""
Step 5a - Run the JMeter load tests: every rate x N repeats, for ONE model.

For each run it:
  1. sends a few warm-up requests (NOT recorded) so Ollama has the model loaded
  2. records GET /stats -> total
  3. runs JMeter in non-GUI mode (open-loop, Poisson arrivals at the given rate)
  4. waits for in-flight requests to drain, records /stats again, and checks
     the increase equals JMeter's successful sample count
  5. appends a row to results/<model>/runs.csv (so a crash never loses earlier runs)
  6. cools down before the next run

Optional SLO checks (used by testing/stress/stress_test.py): after each rate
level, if mean p95 latency or error rate break the SLO it reports the
breaking point and, with --stop-on-break, stops.

The model is chosen on the SERVICE side (OLLAMA_MODEL + container restart).
--model here is only a label for file names, so make sure it matches.

Example (run on the load-generator machine, NOT the service machine):
    python run_load_tests.py --host 192.168.1.50 --model llama3.2:3b \
        --rates 2 4 6 --duration-min 5 --repeats 3

Standard library only (plus JMeter >= 5.5 on PATH or --jmeter).
"""

import argparse
import csv
import datetime as dt
import json
import math
import platform
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from summarise_results import summarise_jtl  # noqa: E402

HERE = Path(__file__).resolve().parent

MANIFEST_FIELDS = [
    "model", "rate_per_min", "duration_min", "rep", "started_at", "jtl", "jmeter_exit",
    "stats_before", "stats_after", "stats_delta", "jmeter_successes", "jmeter_samples",
    "stats_matches_jmeter", "p95_ms", "error_rate",
    "window_start_epoch", "window_end_epoch",   # load-generator clock; used by reconcile_logs.py
]


def safe_name(s: str) -> str:
    return re.sub(r"[^A-Za-z0-9._-]+", "-", s)


def get_stats_total(base: str, timeout: float = 10) -> int:
    with urllib.request.urlopen(f"{base}/stats", timeout=timeout) as r:
        return int(json.load(r)["total"])


def warm_up(base: str, bodies, n: int) -> None:
    for i in range(n):
        req = urllib.request.Request(f"{base}/tickets", data=bodies[i % len(bodies)].encode("ascii"),
                                     headers={"Content-Type": "application/json"}, method="POST")
        t0 = time.perf_counter()
        try:
            with urllib.request.urlopen(req, timeout=600) as r:
                code = r.status
        except urllib.error.HTTPError as e:
            code = e.code
        print(f"    warm-up {i + 1}/{n}: HTTP {code} in {time.perf_counter() - t0:.1f}s")


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--host", default="localhost", help="service host (the OTHER machine for real runs)")
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--model", required=True, help="label for the model the service is running")
    ap.add_argument("--rates", type=float, nargs="+", required=True, help="arrival rates in requests/MINUTE")
    ap.add_argument("--duration-min", type=float, default=5, help="arrival period per run (minutes)")
    ap.add_argument("--repeats", type=int, default=3)
    ap.add_argument("--warmup", type=int, default=3, help="unrecorded warm-up requests before each run")
    ap.add_argument("--drain-s", type=float, default=15, help="wait after JMeter exits before reading /stats")
    ap.add_argument("--cooldown-s", type=float, default=30, help="idle time between runs")
    ap.add_argument("--timeout-ms", type=int, default=120000, help="JMeter response timeout; slower = error")
    ap.add_argument("--data-file", default=str(HERE / "data" / "tickets_jmeter.tsv"))
    ap.add_argument("--plan", default=str(HERE / "triage_load_test.jmx"))
    ap.add_argument("--jmeter", default="jmeter", help="path to jmeter / jmeter.bat")
    ap.add_argument("--out", default=str(HERE / "results"))
    ap.add_argument("--no-html", action="store_true", help="skip JMeter's HTML dashboard per run")
    ap.add_argument("--slo-p95-ms", type=float, help="p95 latency SLO (enables break check)")
    ap.add_argument("--slo-error-rate", type=float, help="max error rate, e.g. 0.01 (enables break check)")
    ap.add_argument("--stop-on-break", action="store_true", help="stop at the first rate that breaks an SLO")
    args = ap.parse_args(argv)

    jmeter = shutil.which(args.jmeter) or (args.jmeter if Path(args.jmeter).exists() else None)
    if not jmeter:
        sys.exit(f"JMeter not found ('{args.jmeter}'). Put it on PATH or pass --jmeter /path/to/bin/jmeter")
    data_file = Path(args.data_file).resolve()
    if not data_file.exists():
        sys.exit(f"Data file not found: {data_file}. Run prep_tickets.py first.")
    bodies = data_file.read_text(encoding="ascii").splitlines()[1:]

    base = f"http://{args.host}:{args.port}"
    try:
        get_stats_total(base)
    except Exception as e:  # noqa: BLE001
        sys.exit(f"Service not reachable at {base}/stats: {e}")

    out = Path(args.out) / safe_name(args.model)
    out.mkdir(parents=True, exist_ok=True)
    manifest = out / "runs.csv"
    if manifest.exists():
        with manifest.open(newline="", encoding="utf-8") as f:
            header = next(csv.reader(f), [])
        if header != MANIFEST_FIELDS:   # written by an older version of this script
            old = manifest.with_name(f"runs_old_{dt.datetime.now():%Y%m%d_%H%M%S}.csv")
            manifest.rename(old)
            print(f"Existing runs.csv has an older format; moved it to {old.name}")
    new_manifest = not manifest.exists()

    # Record the load-generator environment once per model folder (for the writeup).
    env_file = out / "loadgen_environment.txt"
    if not env_file.exists():
        try:
            jver = subprocess.run([jmeter, "--version"], capture_output=True, text=True, timeout=120).stdout
        except Exception:  # noqa: BLE001
            jver = "unknown"
        env_file.write_text(
            f"recorded: {dt.datetime.now().isoformat(timespec='seconds')}\n"
            f"load generator: {platform.node()} | {platform.platform()} | {platform.processor()}\n"
            f"python: {platform.python_version()}\n"
            f"target: {base}\nmodel label: {args.model}\n\njmeter --version:\n{jver}\n",
            encoding="utf-8")

    print(f"Model '{args.model}' at {base}: rates {args.rates} req/min, {args.duration_min} min x {args.repeats} repeats")
    print("Reminder: the service must already be running this model (OLLAMA_MODEL + restart).\n")

    broken_at = None
    with manifest.open("a", newline="", encoding="utf-8") as mf:
        writer = csv.DictWriter(mf, fieldnames=MANIFEST_FIELDS)
        if new_manifest:
            writer.writeheader()

        for rate in args.rates:
            level = []
            for rep in range(1, args.repeats + 1):
                tag = f"{safe_name(args.model)}_r{rate:g}_rep{rep}"
                if (out / f"{tag}.jtl").exists():
                    # Never overwrite raw results (the spec says keep every .jtl).
                    tag += f"_{dt.datetime.now():%Y%m%d_%H%M%S}"
                    print(f"  NOTE: this config was already run; keeping both. If the earlier run is invalid, "
                          f"delete its row from runs.csv (and say why in the report).")
                jtl, log = out / f"{tag}.jtl", out / f"{tag}.log"
                report = out / "html" / tag
                # JMeter's -o creates only the last folder; its parent must already exist.
                report.parent.mkdir(parents=True, exist_ok=True)

                print(f"[{tag}] {rate:g} req/min for {args.duration_min:g} min")
                if args.warmup:
                    warm_up(base, bodies, args.warmup)
                before = get_stats_total(base)
                started = dt.datetime.now().isoformat(timespec="seconds")
                window_start = time.time()   # after warm-up: warm-up requests fall before this

                cmd = [jmeter, "-n", "-t", str(Path(args.plan).resolve()), "-l", str(jtl), "-j", str(log),
                       f"-Jhost={args.host}", f"-Jport={args.port}",
                       f"-Jrate_per_min={rate:g}", f"-Jduration_min={args.duration_min:g}",
                       f"-Jtimeout_ms={args.timeout_ms}", f"-Jdata_file={data_file}",
                       # No-arrival tail >= timeout, so requests still in flight when arrivals stop can
                       # finish instead of being cut off ("Socket closed") when JMeter shuts down.
                       f"-Jtail_min={math.ceil(args.timeout_ms / 60000) + 1}",
                       f"-Jseed={rep}",
                       "-Jsample_variables=server_latency_ms,category,ticket_id",
                       "-Jjmeter.save.saveservice.output_format=csv",
                       "-Jjmeter.save.saveservice.print_field_names=true"]
                if not args.no_html:
                    cmd += ["-e", "-o", str(report)]
                exit_code = subprocess.run(cmd).returncode
                if not jtl.exists() or jtl.stat().st_size == 0:
                    sys.exit(f"\nJMeter produced no results (exit code {exit_code}). "
                             f"Nothing was recorded for this run. Check the error above and {log}")

                time.sleep(args.drain_s)
                window_end = time.time()     # in-flight requests have drained; next warm-up is after this
                after = get_stats_total(base)
                s = summarise_jtl(jtl) if jtl.exists() else {"successes": 0, "samples": 0,
                                                             "lat_p95_ms": float("nan"), "error_rate": float("nan")}
                delta = after - before
                match = delta == s["successes"]
                row = {
                    "model": args.model, "rate_per_min": f"{rate:g}", "duration_min": f"{args.duration_min:g}",
                    "rep": rep, "started_at": started, "jtl": jtl.name, "jmeter_exit": exit_code,
                    "stats_before": before, "stats_after": after, "stats_delta": delta,
                    "jmeter_successes": s["successes"], "jmeter_samples": s["samples"],
                    "stats_matches_jmeter": match,
                    "p95_ms": f"{s.get('lat_p95_ms', float('nan')):.0f}",
                    "error_rate": f"{s.get('error_rate', float('nan')):.4f}",
                    "window_start_epoch": f"{window_start:.3f}", "window_end_epoch": f"{window_end:.3f}",
                }
                writer.writerow(row)
                mf.flush()
                level.append(s)
                print(f"    samples {s['samples']}, ok {s['successes']}, err {row['error_rate']}, "
                      f"p95 {row['p95_ms']} ms | /stats +{delta} {'OK' if match else 'MISMATCH'}")
                if not match:
                    print("    (mismatch usually = requests JMeter timed out on but the server finished later)")
                if exit_code != 0:
                    print(f"    JMeter exited with {exit_code}; see {log}")

                if not (rate == args.rates[-1] and rep == args.repeats):
                    time.sleep(args.cooldown_s)

            if args.slo_p95_ms is not None or args.slo_error_rate is not None:
                p95s = [x["lat_p95_ms"] for x in level if x["samples"]]
                errs = [x["error_rate"] for x in level if x["samples"]]
                p95 = sum(p95s) / len(p95s) if p95s else float("inf")
                err = sum(errs) / len(errs) if errs else 1.0
                reasons = []
                if args.slo_p95_ms is not None and not p95 <= args.slo_p95_ms:
                    reasons.append(f"p95 {p95:.0f} ms > {args.slo_p95_ms:.0f} ms")
                if args.slo_error_rate is not None and not err <= args.slo_error_rate:
                    reasons.append(f"error rate {err:.2%} > {args.slo_error_rate:.2%}")
                print(f"  level {rate:g} req/min: {'BREAKS SLO: ' + '; '.join(reasons) if reasons else 'within SLO'}\n")
                if reasons and broken_at is None:
                    broken_at = rate
                    if args.stop_on_break:
                        break

    if broken_at is not None:
        print(f"First rate breaking the SLO: {broken_at:g} req/min ({broken_at / 60:.3f} req/s)")
    print(f"\nManifest: {manifest}\nNext: python summarise_results.py {manifest}")


if __name__ == "__main__":
    main()
