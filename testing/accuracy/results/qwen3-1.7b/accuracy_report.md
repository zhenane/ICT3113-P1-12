# Accuracy test: `qwen3:1.7b`

Golden set: `C:\Users\north\OneDrive\Documents\School\Y3S1\3113-PTO\ICT3113-P1-12\golden-test-set\final\golden_test_set.csv` - 196 tickets scored. Failed requests (counted as wrong): 3.

Generated 2026-10-08T23:18:22.

## Requirements

| Requirement | Result | Value |
|---|---|---|
| Overall accuracy >= 75% | **FAIL** | 57.7% |
| Macro-F1 >= 0.65 (categories with >= 20 examples) | **FAIL** | 0.542 |
| Recall >= 55%: Credit reporting | PASS | 83.3% |
| Recall >= 55%: Bank account or service | PASS | 73.3% |
| Recall >= 55%: Debt collection | PASS | 76.7% |
| Recall >= 55%: Mortgage | **FAIL** | 41.4% |
| Recall >= 55%: Money transfer or service | **FAIL** | 46.2% |
| Recall >= 55%: Credit card | **FAIL** | 45.8% |
| Recall >= 55%: Consumer loan | **FAIL** | 15.0% |

Overall: **FAIL**

## Per-category metrics

| Category | Support | Precision | Recall | F1 | Gated |
|---|---:|---:|---:|---:|---|
| Credit reporting | 36 | 75.0% | 83.3% | 0.789 | yes |
| Bank account or service | 30 | 56.4% | 73.3% | 0.638 | yes |
| Debt collection | 30 | 42.6% | 76.7% | 0.548 | yes |
| Mortgage | 29 | 85.7% | 41.4% | 0.558 | yes |
| Money transfer or service | 26 | 75.0% | 46.2% | 0.571 | yes |
| Credit card | 24 | 45.8% | 45.8% | 0.458 | yes |
| Consumer loan | 20 | 50.0% | 15.0% | 0.231 | yes |
| Out-of-scope | 1 | 0.0% | 0.0% | 0.000 | no (< 20 examples) |

Overall accuracy **57.7%**; macro-F1 **0.542** over gated categories (0.474 over all categories).

## Confusion matrix

Rows = golden label, columns = predicted label.

| golden \ predicted | Credit reporting | Bank account or service | Debt collection | Mortgage | Money transfer or service | Credit card | Consumer loan | Out-of-scope | (error) | total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Credit reporting | **30** | 1 | 4 |  |  | 1 |  |  |  | 36 |
| Bank account or service | 2 | **22** | 2 |  | 1 | 3 |  |  |  | 30 |
| Debt collection | 3 |  | **23** |  |  | 3 | 1 |  |  | 30 |
| Mortgage | 2 | 2 | 6 | **12** | 2 | 3 | 1 |  | 1 | 29 |
| Money transfer or service |  | 8 | 3 |  | **12** | 1 | 1 |  | 1 | 26 |
| Credit card | 2 | 4 | 5 |  | 1 | **11** |  |  | 1 | 24 |
| Consumer loan | 1 | 2 | 10 | 2 |  | 2 | **3** |  |  | 20 |
| Out-of-scope |  |  | 1 |  |  |  |  | **0** |  | 1 |
