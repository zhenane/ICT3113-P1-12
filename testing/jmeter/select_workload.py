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
  workload (45)    stratified by WORD COUNT: 9 tickets from each fifth (quintile)
                   of the non-golden length distribution, shuffled once with a
                   fixed seed. This keeps the real mix of short, typical and long
                   tickets. That matters for the cascade: setting S2 accepts the
                   small model on tickets of <= 80 words (~19% of real tickets),
                   so a workload with no short tickets would make S2 behave
                   exactly like S1. A run at the A2 rate sends ~30 tickets on
                   average; 45 means the list practically never wraps round.

Length = words counted on whitespace, as the escalation rule does
(len(narrative.strip().split())). "Typical" = 40th-60th percentile;
labels in workload_rows.csv: short (<= 80 words), long (longest fifth, > 80th percentile),
otherwise typical.

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


def words(r):
    return len(r["narrative"].strip().split())


def write_set(out, name, rows, kinds):
    with (out / f"{name}_rows.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["order", "row", "words", "chars", "kind"])
        for i, (r, k) in enumerate(zip(rows, kinds), 1):
            w.writerow([i, r["row"], words(r), len(r["narrative"].strip()), k])
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
    ap.add_argument("--per-quintile", type=int, default=9, help="workload tickets per length quintile")
    ap.add_argument("--short-words", type=int, default=80, help="label tickets <= this many words 'short'")
    ap.add_argument("--seed", type=int, default=3113)
    args = ap.parse_args()

    tickets = read_csv(args.tickets)
    golden = {r["row"] for r in read_csv(args.golden)}
    pool = [r for r in tickets if r["row"] not in golden and r.get("narrative", "").strip()]
    if not pool:
        sys.exit("No non-golden tickets found")
    pool.sort(key=lambda r: (words(r), int(r["row"])))
    n = len(pool)
    typical = pool[int(0.40 * n):int(0.60 * n)]
    p80 = words(pool[int(0.80 * (n - 1))])

    rng = random.Random(args.seed)
    warm_s = rng.sample(typical, 6)
    warm, s_rows = warm_s[:3], warm_s[3:]
    taken = {r["row"] for r in warm_s}
    workload = []
    for q in range(5):
        band = [r for r in pool[int(q * n / 5):int((q + 1) * n / 5)] if r["row"] not in taken]
        if len(band) < args.per_quintile:
            sys.exit(f"Quintile {q + 1} has only {len(band)} tickets")
        workload += rng.sample(band, args.per_quintile)
    rng.shuffle(workload)
    kind = lambda r: ("short" if words(r) <= args.short_words else "long" if words(r) > p80 else "typical")  # noqa: E731

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    write_set(out, "warmup", warm, ["typical"] * 3)
    write_set(out, "s", s_rows, ["typical"] * 3)
    write_set(out, "workload", workload, [kind(r) for r in workload])

    wl = [words(r) for r in workload]
    kinds = [kind(r) for r in workload]
    pw = [words(r) for r in pool]
    print(f"Non-golden pool: {n} tickets (golden rows excluded: {len(golden)}); words median {pw[n // 2]}, "
          f"p80 {p80}; <= {args.short_words} words: {sum(w <= args.short_words for w in pw) / n:.1%}")
    print(f"Warm-up rows : {[r['row'] for r in warm]}  (words {[words(r) for r in warm]})")
    print(f"S rows       : {[r['row'] for r in s_rows]}  (words {[words(r) for r in s_rows]})")
    print(f"Workload     : {len(workload)} tickets, {args.per_quintile} per length quintile; "
          f"short {kinds.count('short')}, typical {kinds.count('typical')}, long {kinds.count('long')}; "
          f"words {min(wl)}-{max(wl)}, median {sorted(wl)[len(wl) // 2]}")
    print(f"             first 30 (a typical run): <= {args.short_words} words "
          f"{sum(w <= args.short_words for w in wl[:30])}/30")
    print(f"Wrote {out}/workload_rows.csv (commit this), workload.tsv, warmup_rows.csv, warmup.tsv, "
          f"s_rows.csv, s_tickets.tsv")


if __name__ == "__main__":
    main()
