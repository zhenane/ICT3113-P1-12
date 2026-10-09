# Accuracy test: `qwen3:4b`

Golden set: `C:\Users\north\OneDrive\Documents\School\Y3S1\3113-PTO\ICT3113-P1-12\golden-test-set\final\golden_test_set.csv` - 196 tickets scored. Failed requests (counted as wrong): 196.

Generated 2026-10-08T19:40:21.

## Requirements

| Requirement | Result | Value |
|---|---|---|
| Overall accuracy >= 75% | **FAIL** | 0.0% |
| Macro-F1 >= 0.65 (categories with >= 20 examples) | **FAIL** | 0.000 |
| Recall >= 55%: Credit reporting | **FAIL** | 0.0% |
| Recall >= 55%: Bank account or service | **FAIL** | 0.0% |
| Recall >= 55%: Debt collection | **FAIL** | 0.0% |
| Recall >= 55%: Mortgage | **FAIL** | 0.0% |
| Recall >= 55%: Money transfer or service | **FAIL** | 0.0% |
| Recall >= 55%: Credit card | **FAIL** | 0.0% |
| Recall >= 55%: Consumer loan | **FAIL** | 0.0% |

Overall: **FAIL**

## Per-category metrics

| Category | Support | Precision | Recall | F1 | Gated |
|---|---:|---:|---:|---:|---|
| Credit reporting | 36 | 0.0% | 0.0% | 0.000 | yes |
| Bank account or service | 30 | 0.0% | 0.0% | 0.000 | yes |
| Debt collection | 30 | 0.0% | 0.0% | 0.000 | yes |
| Mortgage | 29 | 0.0% | 0.0% | 0.000 | yes |
| Money transfer or service | 26 | 0.0% | 0.0% | 0.000 | yes |
| Credit card | 24 | 0.0% | 0.0% | 0.000 | yes |
| Consumer loan | 20 | 0.0% | 0.0% | 0.000 | yes |
| Out-of-scope | 1 | 0.0% | 0.0% | 0.000 | no (< 20 examples) |

Overall accuracy **0.0%**; macro-F1 **0.000** over gated categories (0.000 over all categories).

## Confusion matrix

Rows = golden label, columns = predicted label.

| golden \ predicted | Credit reporting | Bank account or service | Debt collection | Mortgage | Money transfer or service | Credit card | Consumer loan | Out-of-scope | (error) | total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Credit reporting | **0** |  |  |  |  |  |  |  | 36 | 36 |
| Bank account or service |  | **0** |  |  |  |  |  |  | 30 | 30 |
| Debt collection |  |  | **0** |  |  |  |  |  | 30 | 30 |
| Mortgage |  |  |  | **0** |  |  |  |  | 29 | 29 |
| Money transfer or service |  |  |  |  | **0** |  |  |  | 26 | 26 |
| Credit card |  |  |  |  |  | **0** |  |  | 24 | 24 |
| Consumer loan |  |  |  |  |  |  | **0** |  | 20 | 20 |
| Out-of-scope |  |  |  |  |  |  |  | **0** | 1 | 1 |
