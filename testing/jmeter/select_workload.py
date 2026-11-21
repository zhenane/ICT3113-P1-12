"""
Assignment 2 - choose the fixed speed-test tickets (run once, then commit the outputs).

The brief requires:
  * one fixed set of tickets, in the same order, for every configuration and run
  * taken from the team's rows OUTSIDE the golden set
  * including some typical and some long tickets
  * the list of row numbers committed (it is a required supporting file)
  * three fixed warm-up tickets, the same every run
  * three different tickets "of typical length" to measure S on the top model

This script picks three DISJOINT sets so no ticket is sent twice in a run (Ollama
caches prompts it has seen, which would make a repeat unrealistically fast):

  warm-up (3)      typical length, sent before every run, timings thrown away
  S tickets (3)    typical length, used once by measure_s.py
  workload (45)    30 typical + 15 long, shuffled once with a fixed seed. A run
                   at the A2 rate sends ~30 tickets on average; 45 means the list
                   practically never wraps round (which would repeat a ticket).

"Typical" = between the 40th and 60th percentile of narrative length,
"long"    = above the 90th percentile (of the non-golden rows).

Usage (from testing/jmeter/):
    python select_workload.py --tickets ../../data/raw/team_12_tickets.csv \
        --golden ../../golden-test-set/final/golden_test_set.csv

Outputs in data/a2/:
    workload_rows.csv   order,row,chars,kind      <- commit; the "list of row numbers"
    workload.tsv        JMeter request bodies, same order
    warmup_rows.csv / warmup.tsv
    s_rows.csv / s_tickets.tsv
Standard library only; deterministic (same inputs + seed -> same selection).
"""

import argparse
import csv
import random
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from prep_tickets import to_body  # noqa: E402

csv.field_size_limit(min(sys.maxsize, 2**31 - 1))
HERE = Path(__file__).resolve().parent


def read_csv(path):
    with open(path, newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def write_set(out, name, rows, kinds):
    with (out / f"{name}_rows.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["order", "row", "chars", "kind"])
        for i, (r, k) in enumerate(zip(rows, kinds), 1):
            w.writerow([i, r["row"], len(r["narrative"].strip()), k])
    tsv = "workload" if name == "workload" else ("warmup" if name == "warmup" else "s_tickets")
    with (out / f"{tsv}.tsv").open("w", encoding="ascii", newline="\n") as f:
        f.write("body\n")
        for r in rows:
            f.write(to_body(r["narrative"].strip()) + "\n")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--tickets", default=str(HERE.parent.parent / "data" / "raw" / "team_12_tickets.csv"))
    ap.add_argument("--golden", default=str(HERE.parent.parent / "golden-test-set" / "final" / "golden_test_set.csv"))
    ap.add_argument("--out", default=str(HERE / "data" / "a2"))
    ap.add_argument("--typical", type=int, default=30)
    ap.add_argument("--long", type=int, default=15)
    ap.add_argument("--seed", type=int, default=3113)
    args = ap.parse_args()

    tickets = read_csv(args.tickets)
    golden = {r["row"] for r in read_csv(args.golden)}
    pool = [r for r in tickets if r["row"] not in golden and r.get("narrative", "").strip()]
    if not pool:
        sys.exit("No non-golden tickets found")
    pool.sort(key=lambda r: (len(r["narrative"].strip()), int(r["row"])))
    n = len(pool)
    typical = pool[int(0.40 * n):int(0.60 * n)]
    long_ = pool[int(0.90 * n):]

    rng = random.Random(args.seed)
    need_typ = 3 + 3 + args.typical
    if len(typical) < need_typ or len(long_) < args.long:
        sys.exit(f"Not enough tickets: typical pool {len(typical)} (need {need_typ}), long pool {len(long_)}")
    typ_pick = rng.sample(typical, need_typ)
    warm, s_rows, work_typ = typ_pick[:3], typ_pick[3:6], typ_pick[6:]
    work_long = rng.sample(long_, args.long)
    workload = [(r, "typical") for r in work_typ] + [(r, "long") for r in work_long]
    rng.shuffle(workload)

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    write_set(out, "warmup", warm, ["typical"] * 3)
    write_set(out, "s", s_rows, ["typical"] * 3)
    write_set(out, "workload", [r for r, _ in workload], [k for _, k in workload])

    lens = lambda rs: [len(r["narrative"].strip()) for r in rs]  # noqa: E731
    print(f"Non-golden pool: {n} tickets (golden rows excluded: {len(golden)})")
    print(f"Typical band (p40-p60): {lens(typical)[0]}-{lens(typical)[-1]} chars; "
          f"long (>p90): {lens(long_)[0]}-{lens(long_)[-1]} chars")
    print(f"Warm-up rows : {[r['row'] for r in warm]}")
    print(f"S rows       : {[r['row'] for r in s_rows]}")
    print(f"Workload     : {len(workload)} tickets ({args.typical} typical + {args.long} long), "
          f"first 10 rows {[r['row'] for r, _ in workload[:10]]}")
    print(f"Wrote {out}/workload_rows.csv (commit this), workload.tsv, warmup_rows.csv, warmup.tsv, "
          f"s_rows.csv, s_tickets.tsv")


if __name__ == "__main__":
    main()
