"""Assignment 2, Step 1: derive the accuracy limits from the top model's test-set results.

Limits (from the A2 brief):
  overall      = top model's test-set accuracy - 10 percentage points
  per category = top model's test-set accuracy on that category - 15 percentage points

Inputs (all already committed):
  golden-test-set/final/even_test_set.csv        test set (even row numbers)
  testing/accuracy/results/<model>/predictions.csv  A1 prediction records (full golden set)

Single-model A1 prediction records are reused, scoring only the test-set rows, as the
brief permits when digest, prompt, Ollama version and machine are unchanged.

Usage (run from anywhere):
  python compute_limits.py                 # pick top model, write limits.csv + print table
  python compute_limits.py --check FILE    # check any predictions CSV against limits.csv
                                           # (FILE needs columns: row, predicted; one row per ticket)
"""
import argparse
import math
from fractions import Fraction
from pathlib import Path

import pandas as pd

REPO = Path(__file__).resolve().parents[2]
TEST_SET = REPO / "golden-test-set/final/even_test_set.csv"
A1_RESULTS = REPO / "testing/accuracy/results"
OUT = Path(__file__).resolve().parent / "limits.csv"

CATEGORIES = [  # same order as service/src/categories.py
    "Credit reporting",
    "Debt collection",
    "Mortgage",
    "Credit card",
    "Bank account or service",
    "Consumer loan",
    "Money transfer or service",
]
OVERALL_MARGIN = Fraction(10, 100)
CATEGORY_MARGIN = Fraction(15, 100)
SMALL_N = 10  # categories with <= this many tickets: one ticket >= 10 points


def score(pred: pd.DataFrame, test: pd.DataFrame) -> pd.DataFrame:
    """Join predictions onto the test set; a missing/errored prediction counts as wrong."""
    p = pred[["row", "predicted"]].drop_duplicates("row")
    df = test[["row", "human_label"]].merge(p, on="row", how="left")
    df["predicted"] = df["predicted"].fillna("(missing)")
    df["correct"] = df["predicted"] == df["human_label"]
    return df


def fmt(fr: Fraction) -> str:
    return f"{float(fr) * 100:.1f}%"


def compute(test: pd.DataFrame) -> None:
    # 1. Score every A1 model on the test set and pick the most accurate.
    overall = {}
    for d in sorted(A1_RESULTS.iterdir()):
        f = d / "predictions.csv"
        if f.exists():
            s = score(pd.read_csv(f), test)
            overall[d.name] = (int(s.correct.sum()), len(s), s)
    print("Test-set accuracy of each A1 model (n = %d):" % len(test))
    for m, (c, n, _) in sorted(overall.items(), key=lambda kv: -kv[1][0]):
        print(f"  {m:14s} {c:3d}/{n} = {c / n:.1%}")
    top = max(overall, key=lambda m: overall[m][0])
    c, n, s = overall[top]
    print(f"\nTop model: {top}\n")

    # 2. Limits, using exact fractions so the minimum-correct counts are not off by rounding.
    rows = []
    acc = Fraction(c, n)
    lim = acc - OVERALL_MARGIN
    rows.append(dict(scope="OVERALL", n=n, top_correct=c, top_accuracy=fmt(acc),
                     limit=fmt(lim), min_correct_to_pass=max(0, math.ceil(lim * n)),
                     points_per_ticket=f"{100 / n:.1f}", small_sample=False))
    for cat in CATEGORIES:
        sub = s[s.human_label == cat]
        k, m = int(sub.correct.sum()), len(sub)
        a = Fraction(k, m)
        l = a - CATEGORY_MARGIN
        rows.append(dict(scope=cat, n=m, top_correct=k, top_accuracy=fmt(a),
                         limit=fmt(l), min_correct_to_pass=max(0, math.ceil(l * m)),
                         points_per_ticket=f"{100 / m:.1f}", small_sample=m <= SMALL_N))
    out = pd.DataFrame(rows)
    out.insert(0, "top_model", top)
    out.to_csv(OUT, index=False)
    print(out.drop(columns="top_model").to_string(index=False))

    others = sorted(set(test.human_label) - set(CATEGORIES))
    if others:
        cnt = {o: int((test.human_label == o).sum()) for o in others}
        print(f"\nNote: test set also has non-category labels {cnt}; counted in the overall "
              "denominator (A1 convention, unpredictable so always wrong) but given no category limit.")
    print(f"\nWrote {OUT.relative_to(REPO)}")


def check(pred_file: Path, test: pd.DataFrame) -> None:
    limits = pd.read_csv(OUT).set_index("scope")
    s = score(pd.read_csv(pred_file), test)
    ok_all = True
    print(f"Checking {pred_file} against limits (top model: {limits.top_model.iloc[0]})\n")
    print(f"{'scope':27s} {'right/n':>8s} {'acc':>7s} {'need':>5s} {'limit':>7s}  result")
    for scope, r in limits.iterrows():
        sub = s if scope == "OVERALL" else s[s.human_label == scope]
        k, m = int(sub.correct.sum()), len(sub)
        passed = k >= r.min_correct_to_pass
        ok_all &= passed
        flag = " (small sample)" if r.small_sample else ""
        print(f"{scope:27s} {k:3d}/{m:<4d} {k / m:7.1%} {r.min_correct_to_pass:5d} {r.limit:>7s}  "
              f"{'PASS' if passed else 'FAIL'}{flag}")
    missing = int((s.predicted == "(missing)").sum())
    if missing:
        print(f"\n{missing} test rows had no prediction and were counted as wrong.")
    print(f"\nOverall verdict: {'PASSES both limits' if ok_all else 'FAILS'}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", type=Path, help="predictions CSV to check against limits.csv")
    args = ap.parse_args()
    test_df = pd.read_csv(TEST_SET)
    check(args.check, test_df) if args.check else compute(test_df)
