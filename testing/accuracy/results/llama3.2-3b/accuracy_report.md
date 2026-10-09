# Accuracy test: `llama3.2:3b`

Golden set: `C:\Users\north\OneDrive\Documents\School\Y3S1\3113-PTO\ICT3113-P1-12\golden-test-set\final\golden_test_set.csv` - 196 tickets scored. Failed requests (counted as wrong): 0.

Generated 2026-10-08T22:13:26.

## Requirements

| Requirement | Result | Value |
|---|---|---|
| Overall accuracy >= 75% | **FAIL** | 30.6% |
| Macro-F1 >= 0.65 (categories with >= 20 examples) | **FAIL** | 0.273 |
| Recall >= 55%: Credit reporting | **FAIL** | 22.2% |
| Recall >= 55%: Bank account or service | PASS | 100.0% |
| Recall >= 55%: Debt collection | **FAIL** | 36.7% |
| Recall >= 55%: Mortgage | **FAIL** | 20.7% |
| Recall >= 55%: Money transfer or service | **FAIL** | 0.0% |
| Recall >= 55%: Credit card | **FAIL** | 12.5% |
| Recall >= 55%: Consumer loan | **FAIL** | 10.0% |

Overall: **FAIL**

## Per-category metrics

| Category | Support | Precision | Recall | F1 | Gated |
|---|---:|---:|---:|---:|---|
| Credit reporting | 36 | 88.9% | 22.2% | 0.356 | yes |
| Bank account or service | 30 | 18.6% | 100.0% | 0.314 | yes |
| Debt collection | 30 | 84.6% | 36.7% | 0.512 | yes |
| Mortgage | 29 | 75.0% | 20.7% | 0.324 | yes |
| Money transfer or service | 26 | 0.0% | 0.0% | 0.000 | yes |
| Credit card | 24 | 100.0% | 12.5% | 0.222 | yes |
| Consumer loan | 20 | 100.0% | 10.0% | 0.182 | yes |
| Out-of-scope | 1 | 0.0% | 0.0% | 0.000 | no (< 20 examples) |

Overall accuracy **30.6%**; macro-F1 **0.273** over gated categories (0.239 over all categories).

## Confusion matrix

Rows = golden label, columns = predicted label.

| golden \ predicted | Credit reporting | Bank account or service | Debt collection | Mortgage | Money transfer or service | Credit card | Consumer loan | Out-of-scope | total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Credit reporting | **8** | 27 | 1 |  |  |  |  |  | 36 |
| Bank account or service |  | **30** |  |  |  |  |  |  | 30 |
| Debt collection | 1 | 17 | **11** | 1 |  |  |  |  | 30 |
| Mortgage |  | 23 |  | **6** |  |  |  |  | 29 |
| Money transfer or service |  | 25 | 1 |  | **0** |  |  |  | 26 |
| Credit card |  | 21 |  |  |  | **3** |  |  | 24 |
| Consumer loan |  | 18 |  |  |  |  | **2** |  | 20 |
| Out-of-scope |  |  |  | 1 |  |  |  | **0** | 1 |
