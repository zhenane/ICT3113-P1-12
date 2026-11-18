"""Assignment 2, Step 2: compare candidate cascade rules on the TUNING set only.

Uses the A1 per-ticket prediction records (predicted label, correctness, client latency)
for the 91 odd-row tuning tickets. The test set is never read by this script.

Latency estimate per ticket (A1 isolated, one-at-a-time measurements, so no queueing):
  accepted  -> small-model latency
  escalated -> small-model latency + large-model latency
Note A1 measured each model with only that model loaded; with two models resident the
CPU is shared under load, so the A2 speed test may be slower than these estimates.

Usage:  python assignment2/cascade-design/analyse_tuning.py
Writes: assignment2/cascade-design/tuning_rule_comparison.csv
        assignment2/cascade-design/tuning_precision_by_predicted.csv
"""
from pathlib import Path

import pandas as pd

REPO = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
TUNING = REPO / "golden-test-set/final/odd_tuning_set.csv"
RESULTS = REPO / "testing/accuracy/results"
MODELS = {"l1": "llama3.2-1b", "l3": "llama3.2-3b", "q": "qwen3-1.7b"}
LARGE = "q"
BANK = "Bank account or service"


def load() -> pd.DataFrame:
    df = pd.read_csv(TUNING)
    assert (df.row % 2 == 1).all(), "tuning set must contain odd rows only"
    df["words"] = df.narrative.str.split().str.len()
    df = df[["row", "human_label", "words"]]
    for k, m in MODELS.items():
        p = pd.read_csv(RESULTS / m / "predictions.csv")[["row", "predicted", "correct", "client_latency_ms"]]
        p.columns = ["row", k, f"{k}_ok", f"{k}_ms"]
        df = df.merge(p, on="row", how="left")
    assert len(df) == 91 and df[[f"{k}_ok" for k in MODELS]].notna().all().all()
    return df


def precision_table(df: pd.DataFrame, small: str) -> pd.DataFrame:
    t = df.groupby(small).agg(n=("row", "size"), right=(f"{small}_ok", "sum")).reset_index()
    t["precision"] = t.right / t.n
    t.insert(0, "small_model", MODELS[small])
    return t.rename(columns={small: "predicted"}).sort_values("precision", ascending=False)


def safe_set(df: pd.DataFrame, small: str, T: float, min_n: int = 2) -> set:
    """Predicted categories whose tuning precision is >= T and that were predicted >= min_n times."""
    t = precision_table(df, small)
    return set(t[(t.precision >= T) & (t.n >= min_n)].predicted)


def evaluate(df: pd.DataFrame, name: str, small_cost_ms, escalate, final_small: str) -> dict:
    """escalate: boolean Series. final_small: column whose answer is used when not escalated."""
    acc_small = df[f"{final_small}_ok"]
    final_ok = acc_small.where(~escalate, df[f"{LARGE}_ok"])
    lat = small_cost_ms + escalate * df[f"{LARGE}_ms"]
    accepted = ~escalate
    return dict(
        rule=name,
        escalated=int(escalate.sum()),
        escalation_fraction=round(escalate.mean(), 3),
        cascade_right=int(final_ok.sum()),
        cascade_accuracy=round(final_ok.mean(), 3),
        accepted=int(accepted.sum()),
        accepted_right=int(acc_small[accepted].sum()),
        slipped_through_wrong=int((~acc_small[accepted].astype(bool)).sum()),
        accepted_large_would_be_right=int(df.loc[accepted, f"{LARGE}_ok"].sum()),
        escalated_large_right=int(df.loc[escalate, f"{LARGE}_ok"].sum()),
        est_median_s=round(lat.median() / 1000, 1),
        est_mean_s=round(lat.mean() / 1000, 1),
    )


ALL_MODELS = {"llama3.2:1b": "llama3.2-1b", "qwen3:1.7b": "qwen3-1.7b",
              "llama3.2:3b": "llama3.2-3b", "qwen3:4b": "qwen3-4b"}
DISK_GB = {"llama3.2:1b": 1.3, "qwen3:1.7b": 1.4, "llama3.2:3b": 2.0, "qwen3:4b": 2.5}


def pair_matrix() -> pd.DataFrame:
    """All 6 pairings of the 4 A1 candidates; small = the faster model of the two."""
    from itertools import combinations
    rows_ = pd.read_csv(TUNING).row
    d = {}
    for tag, folder in ALL_MODELS.items():
        p = pd.read_csv(RESULTS / folder / "predictions.csv").set_index("row").loc[rows_]
        ok = p[p.http_status == 200]
        d[tag] = (p, ok.client_latency_ms.median() / 1000 if len(ok) else float("inf"))
    out = []
    for a, b in combinations(ALL_MODELS, 2):
        s, l = (a, b) if d[a][1] <= d[b][1] else (b, a)
        S, L = d[s][0], d[l][0]
        prec = S[S.http_status == 200].groupby("predicted").correct.agg(["sum", "count"])
        safe = prec[(prec["sum"] / prec["count"] >= 0.80) & (prec["count"] >= 2)].index
        accept = S.predicted.isin(safe).values
        casc = (S.correct.values & accept) | (L.correct.values & ~accept)
        out.append(dict(
            small=s, large=l,
            small_median_s=round(d[s][1], 1), large_median_s=round(d[l][1], 1),
            small_right=int(S.correct.sum()), large_right=int(L.correct.sum()),
            large_successful_responses=int((L.http_status == 200).sum()),
            ceiling_perfect_rule=int((S.correct.values | L.correct.values).sum()),
            best_small_precision=round((prec["sum"] / prec["count"]).max(), 2) if len(prec) else 0,
            safe_set_ge_80pct=", ".join(sorted(safe)),
            category_rule_escalation=round(1 - accept.mean(), 3),
            category_rule_right=int(casc.sum()),
            disk_gb_together=round(DISK_GB[s] + DISK_GB[l], 1),
        ))
    return pd.DataFrame(out)


def main() -> None:
    pm = pair_matrix()
    pm.to_csv(HERE / "tuning_pair_matrix.csv", index=False)
    print("All model pairings on the tuning set (n = 91):\n")
    print(pm.to_string(index=False), "\n")
    df = load()
    prec = pd.concat([precision_table(df, "l3"), precision_table(df, "l1")])
    prec.to_csv(HERE / "tuning_precision_by_predicted.csv", index=False)
    print("Tuning-set precision of each small model, by PREDICTED category:\n")
    print(prec.to_string(index=False), "\n")

    rows = []
    # References: single models (no escalation / always escalate with zero small cost)
    for k in MODELS:
        rows.append(evaluate(df, f"{MODELS[k]} alone", df[f"{k}_ms"], pd.Series(False, index=df.index), k))
    # (a) category-based on llama3.2:3b: accept predicted category c iff tuning precision(c) >= T
    for T in (0.85, 0.80, 0.50, 0.20):
        acc = safe_set(df, "l3", T)
        rows.append(evaluate(df, f"(a) l3 category, accept precision>={T:.2f} {sorted(acc)}",
                             df.l3_ms, ~df.l3.isin(acc), "l3"))
    # (b) category-based on llama3.2:1b
    for T in (0.25,):
        acc = safe_set(df, "l1", T)
        rows.append(evaluate(df, f"(b) l1 category, accept precision>={T:.2f} {sorted(acc)}",
                             df.l1_ms, ~df.l1.isin(acc), "l1"))
    # (c) agreement: run l1 and l3, escalate if they disagree (both small calls are paid)
    rows.append(evaluate(df, "(c) agreement l1 == l3", df.l1_ms + df.l3_ms, df.l1 != df.l3, "l3"))
    # (d) length: tickets <= L words answered by l3, longer go to large model directly
    for L in (100, 150):
        short = df.words <= L
        rows.append(evaluate(df, f"(d) length, l3 answers <= {L} words",
                             df.l3_ms.where(short, 0), ~short, "l3"))
    # (e) CHOSEN RULE: category + length. Accept l3 iff it predicts a safe category OR the
    #     ticket has <= L words; otherwise escalate. L = 0 is the pure category rule.
    safe = safe_set(df, "l3", 0.80)
    for L in (0, 60, 80, 100, 120, 150):
        esc = ~(df.l3.isin(safe) | (df.words <= L))
        rows.append(evaluate(df, f"(e) l3 safe {sorted(safe)} OR words <= {L}", df.l3_ms, esc, "l3"))
    out = pd.DataFrame(rows)
    # Worst per-category drop vs the large model alone on the tuning set (guide only:
    # the real per-category limit is -15 pp vs the top model on the TEST set).
    q_cat = df.groupby("human_label").q_ok.mean()
    worst = []
    for r in out.rule:
        if r.startswith("(e)"):
            L = int(r.rsplit(" ", 1)[1])
            esc = ~(df.l3.isin(safe) | (df.words <= L))
            ok = df.l3_ok.where(~esc, df.q_ok)
            d = ok.groupby(df.human_label).mean() - q_cat
            worst.append(f"{d.min() * 100:+.0f} pp ({d.idxmin()})")
        else:
            worst.append("")
    out["worst_category_drop_vs_large"] = worst
    out.to_csv(HERE / "tuning_rule_comparison.csv", index=False)
    pd.set_option("display.width", 250, "display.max_colwidth", 80)
    print("Candidate rules on the tuning set (n = 91):\n")
    print(out.to_string(index=False), "\n")

    # Evidence 1: llama3.2:3b "Bank account" predictions stay unreliable at every length.
    b = df[df.l3 == BANK]
    bands = pd.cut(b.words, [0, 60, 80, 100, 150, 400])
    bank = b.groupby(bands, observed=True).agg(n=("row", "size"), l3_right=("l3_ok", "sum"),
                                               qwen_right=("q_ok", "sum")).reset_index()
    bank["l3_precision"] = (bank.l3_right / bank.n).round(2)
    bank.to_csv(HERE / "tuning_bank_predictions_by_length.csv", index=False)
    print("llama3.2:3b 'Bank account or service' predictions by ticket length:\n")
    print(bank.to_string(index=False), "\n")

    # Evidence 2: per-category right counts for the two chosen settings vs qwen3:1.7b alone.
    cat = df.groupby("human_label").agg(n=("row", "size"), qwen_alone=("q_ok", "sum"))
    for name, L in (("S1_L0", 0), ("S2_L80", 80)):
        esc = ~(df.l3.isin(safe) | (df.words <= L))
        cat[name] = df.l3_ok.where(~esc, df.q_ok).groupby(df.human_label).sum()
    cat = cat.astype(int).reset_index()
    cat.to_csv(HERE / "tuning_settings_by_category.csv", index=False)
    print("Chosen settings by true category (right counts):\n")
    print(cat.to_string(index=False))


if __name__ == "__main__":
    main()
