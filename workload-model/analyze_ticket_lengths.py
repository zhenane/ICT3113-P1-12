"""Measure team narrative lengths without sending tickets to a model."""

import argparse
import csv
import statistics


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("csv_path")
    parser.add_argument("--team", type=int, default=12)
    args = parser.parse_args()
    start = args.team * 1000
    with open(args.csv_path, encoding="utf-8-sig", newline="") as source:
        lengths = sorted(
            len(row["narrative"])
            for row in csv.DictReader(source)
            if start <= int(row["row"]) < start + 1000
        )
    if len(lengths) != 1000:
        parser.error(f"Expected 1,000 team records; found {len(lengths)}")

    def percentile(fraction):
        # Linear interpolation, matching NumPy's default quantile method.
        position = (len(lengths) - 1) * fraction
        lower = int(position)
        upper = min(lower + 1, len(lengths) - 1)
        return lengths[lower] + (lengths[upper] - lengths[lower]) * (position - lower)

    print(f"Rows {start}-{start + 999}: {len(lengths)} narratives")
    print("Characters including whitespace; linear-interpolated percentiles")
    metrics = {
        "min": min(lengths),
        "25th perc": percentile(0.25),
        "median (p50)": percentile(0.5),
        "mean": statistics.mean(lengths),
        "75th perc": percentile(0.75),
        "p90": percentile(0.9),
        "p95": percentile(0.95),
        "p99": percentile(0.99),
        "max": max(lengths),
    }
    for name, value in metrics.items():
        print(f"{name:<16} {value:.2f}")


if __name__ == "__main__":
    main()
