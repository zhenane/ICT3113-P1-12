# Accuracy test: `llama3.2:1b`

Golden set: `C:\Users\north\OneDrive\Documents\School\Y3S1\3113-PTO\ICT3113-P1-12\golden-test-set\final\golden_test_set.csv` - 196 tickets scored. Failed requests (counted as wrong): 0.

Generated 2026-10-08T21:59:52.

## Requirements

| Requirement | Result | Value |
|---|---|---|
| Overall accuracy >= 75% | **FAIL** | 17.3% |
| Macro-F1 >= 0.65 (categories with >= 20 examples) | **FAIL** | 0.121 |
| Recall >= 55%: Credit reporting | **FAIL** | 19.4% |
| Recall >= 55%: Bank account or service | **FAIL** | 0.0% |
| Recall >= 55%: Debt collection | **FAIL** | 53.3% |
| Recall >= 55%: Mortgage | **FAIL** | 13.8% |
| Recall >= 55%: Money transfer or service | **FAIL** | 26.9% |
| Recall >= 55%: Credit card | **FAIL** | 0.0% |
| Recall >= 55%: Consumer loan | **FAIL** | 0.0% |

Overall: **FAIL**

## Per-category metrics

| Category | Support | Precision | Recall | F1 | Gated |
|---|---:|---:|---:|---:|---|
| Credit reporting | 36 | 17.9% | 19.4% | 0.187 | yes |
| Bank account or service | 30 | 0.0% | 0.0% | 0.000 | yes |
| Debt collection | 30 | 20.5% | 53.3% | 0.296 | yes |
| Mortgage | 29 | 50.0% | 13.8% | 0.216 | yes |
| Money transfer or service | 26 | 9.9% | 26.9% | 0.144 | yes |
| Credit card | 24 | 0.0% | 0.0% | 0.000 | yes |
| Consumer loan | 20 | 0.0% | 0.0% | 0.000 | yes |
| Out-of-scope | 1 | 0.0% | 0.0% | 0.000 | no (< 20 examples) |

Overall accuracy **17.3%**; macro-F1 **0.121** over gated categories (0.105 over all categories).

## Confusion matrix

Rows = golden label, columns = predicted label.

| golden \ predicted | Credit reporting | Bank account or service | Debt collection | Mortgage | Money transfer or service | Credit card | Consumer loan | Out-of-scope | total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Credit reporting | **7** |  | 21 | 3 | 5 |  |  |  | 36 |
| Bank account or service | 9 | **0** | 7 |  | 14 |  |  |  | 30 |
| Debt collection | 4 |  | **16** |  | 10 |  |  |  | 30 |
| Mortgage | 2 |  | 6 | **4** | 17 |  |  |  | 29 |
| Money transfer or service | 8 |  | 11 |  | **7** |  |  |  | 26 |
| Credit card | 5 |  | 10 |  | 9 | **0** |  |  | 24 |
| Consumer loan | 4 |  | 6 | 1 | 9 |  | **0** |  | 20 |
| Out-of-scope |  |  | 1 |  |  |  |  | **0** | 1 |
