"""
Assignment 2 - measure S on the top model and derive the speed-test settings.

Procedure from the brief (Step 4, Set-up):
  1. Restart Ollama and do the normal warm-up (3 fixed warm-up tickets).
  2. Send three DIFFERENT tickets of typical length to the top model, one at a
     time (never the same ticket twice - Ollama caches prompts it has seen).
  3. S = the middle (median) of the three times, in seconds.
  4. Arrival rate: one ticket every 2*S seconds  ->  30/S tickets per minute.
  5. Run length: S minutes, minimum 5.
  6. JMeter response timeout: 10*S seconds, at least 5 minutes.
     Open Model pause after arrivals: longer than the timeout by >= 1 minute.

The service must be running the TOP model alone when you run this.

    python measure_s.py --host 192.168.0.10 --model qwen3:1.7b

Writes data/a2/s_measurement.json and .md (commit both; the brief asks for S,
the rate, the run length, the three timings and the three ticket row numbers).
Standard library only.
"""

import argparse
import csv
import datetime as dt
import json
import math
import statistics
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
DATA = HERE / "data" / "a2"


def post(base, body, timeout):
    req = urllib.request.Request(f"{base}/tickets", data=body.encode("ascii"),
                                 headers={"Content-Type": "application/json"}, method="POST")
    t0 = time.perf_counter()
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            d = json.load(r)
            return r.status, d, time.perf_counter() - t0
    except urllib.error.HTTPError as e:
        return e.code, None, time.perf_counter() - t0
    except Exception as e:  # noqa: BLE001
        return f"no-response ({type(e).__name__})", None, time.perf_counter() - t0


def bodies(path):
    return Path(path).read_text(encoding="ascii").splitlines()[1:]


def rows(path):
    with open(path, newline="", encoding="utf-8") as f:
        return [r["row"] for r in csv.DictReader(f)]


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--host", default="localhost")
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--model", required=True, help="the top Assignment 1 model (label only)")
    ap.add_argument("--timeout-s", type=float, default=900)
    ap.add_argument("--no-prompt", action="store_true", help="don't pause for the Ollama restart")
    args = ap.parse_args()
    base = f"http://{args.host}:{args.port}"

    for f in ("warmup.tsv", "s_tickets.tsv", "warmup_rows.csv", "s_rows.csv"):
        if not (DATA / f).exists():
            sys.exit(f"Missing {DATA / f} - run select_workload.py first")

    if not args.no_prompt:
        input("On the SERVICE machine run:  docker compose restart ollama\n"
              f"Make sure the service is running {args.model} alone, then press Enter here... ")

    print("Warm-up (timings discarded):")
    for i, (b, row) in enumerate(zip(bodies(DATA / "warmup.tsv"), rows(DATA / "warmup_rows.csv")), 1):
        for attempt in range(10):
            code, _, t = post(base, b, args.timeout_s)
            if code == 200 or i > 1:
                break
            print(f"  warm-up 1 got {code}; service/Ollama may still be starting - retrying in 10 s")
            time.sleep(10)
        print(f"  warm-up {i} (row {row}): HTTP {code}, {t:.1f} s")

    print("Measuring S (three different typical tickets, one at a time):")
    times, details = [], []
    for b, row in zip(bodies(DATA / "s_tickets.tsv"), rows(DATA / "s_rows.csv")):
        code, d, t = post(base, b, args.timeout_s)
        srv = d.get("latency_ms") if d else None
        print(f"  row {row}: HTTP {code}, {t:.2f} s" + (f" (server {srv / 1000:.2f} s)" if srv else ""))
        if code != 200:
            sys.exit(f"Ticket row {row} failed (HTTP {code}). Fix the service (e.g. its Ollama timeout) "
                     f"before measuring S - a failed request has no valid time.")
        times.append(t)
        details.append({"row": row, "seconds": round(t, 3), "server_ms": srv, "category": d.get("category")})

    S = statistics.median(times)
    rate_per_min = 30.0 / S
    run_min = max(5, math.ceil(S))
    timeout_s = max(300, math.ceil(10 * S))
    pause_min = math.ceil(timeout_s / 60) + 1
    expected = rate_per_min * run_min

    res = {
        "measured_at": dt.datetime.now().isoformat(timespec="seconds"),
        "model": args.model, "target": base, "tickets": details,
        "S_seconds": round(S, 3),
        "interval_seconds": round(2 * S, 3),
        "rate_per_min": round(rate_per_min, 4),
        "rate_per_hour": round(rate_per_min * 60, 2),
        "rate_per_sec": round(rate_per_min / 60, 5),
        "run_minutes": run_min,
        "jmeter_response_timeout_s": timeout_s,
        "open_model_pause_min": pause_min,
        "expected_tickets_per_run": round(expected, 1),
        "client_peak_per_sec_A1": 0.1088,
    }
    DATA.mkdir(parents=True, exist_ok=True)
    (DATA / "s_measurement.json").write_text(json.dumps(res, indent=2), encoding="utf-8")
    above = res["rate_per_sec"] >= 0.1088
    md = [f"# S measurement ({args.model})", "", f"Measured {res['measured_at']} against {base}.", "",
          "| Ticket row | Time (s) | Server time (s) |", "|---|---:|---:|"]
    md += [f"| {d['row']} | {d['seconds']:.2f} | {(d['server_ms'] or 0) / 1000:.2f} |" for d in details]
    md += ["", f"- **S (middle of the three) = {S:.2f} s**",
           f"- Arrival rate = one ticket every 2S = {2 * S:.1f} s = **{rate_per_min:.3f} tickets/min** "
           f"({rate_per_min * 60:.1f}/hour, {rate_per_min / 60:.4f}/s)",
           f"- Run length = max(S, 5) = **{run_min} min** (expected ≈ {expected:.0f} tickets per run)",
           f"- JMeter response timeout = max(10S, 300 s) = **{timeout_s} s**; "
           f"Open Model pause after arrivals = **{pause_min} min**",
           f"- Compared with the A1 client peak (0.1088 tickets/s): test rate is "
           f"**{'above' if above else 'below'}** the peak "
           f"({'results also show the system can handle the client load' if above else 'results compare configurations but do not show the recommended one handles the client peak - say so on the limitations slide'})."]
    (DATA / "s_measurement.md").write_text("\n".join(md) + "\n", encoding="utf-8")

    print("\n" + "\n".join(md[-6:]))
    print(f"\nWrote {DATA / 's_measurement.json'} and .md - commit both.")
    print("\nUse for EVERY configuration:")
    print(f"  python run_load_tests.py --host {args.host} --model <config> --rates {rate_per_min:.4f} "
          f"--duration-min {run_min} --timeout-ms {timeout_s * 1000} --a2")


if __name__ == "__main__":
    main()
