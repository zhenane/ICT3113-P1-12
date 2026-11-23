# Accuracy test: `cascade-s1`

Golden set: `golden-test-set/final/even_test_set.csv` - 105 tickets scored. Failed requests (counted as wrong): 16.

Generated 2026-11-23T22:26:46.

## Requirements

| Requirement | Result | Value |
|---|---|---|
| Overall accuracy >= 75% | **FAIL** | 53.3% |
| Macro-F1 >= 0.65 (categories with >= 20 examples) | **FAIL** | 0.638 |
| Recall >= 55%: Debt collection | PASS | 75.0% |

Overall: **FAIL**

## Per-category metricsstatus

| Category | Support | Precision | Recall | F1 | Gated |
|---|---:|---:|---:|---:|---|
| Debt collection | 20 | 55.6% | 75.0% | 0.638 | yes |
| Mortgage | 18 | 88.9% | 44.4% | 0.593 | no (< 20 examples) |
| Bank account or service | 17 | 60.0% | 52.9% | 0.562 | no (< 20 examples) |
| Money transfer or service | 15 | 70.0% | 46.7% | 0.560 | no (< 20 examples) |
| Credit reporting | 15 | 73.3% | 73.3% | 0.733 | no (< 20 examples) |
| Consumer loan | 10 | 100.0% | 10.0% | 0.182 | no (< 20 examples) |
| Credit card | 9 | 41.7% | 55.6% | 0.476 | no (< 20 examples) |
| Out-of-scope | 1 | 0.0% | 0.0% | 0.000 | no (< 20 examples) |

Overall accuracy **53.3%**; macro-F1 **0.638** over gated categories (0.468 over all categories).

## Confusion matrix

Rows = golden label, columns = predicted label.

| golden \ predicted | Debt collection | Mortgage | Bank account or service | Money transfer or service | Credit reporting | Consumer loan | Credit card | Out-of-scope | (error) | total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Debt collection | **15** |  | 2 |  | 1 |  | 1 |  | 1 | 20 |
| Mortgage | 2 | **8** | 1 | 2 | 2 |  | 1 |  | 2 | 18 |
| Bank account or service | 1 |  | **9** | 1 | 1 |  | 2 |  | 3 | 17 |
| Money transfer or service | 1 |  | 2 | **7** |  |  | 1 |  | 4 | 15 |
| Credit reporting | 2 |  |  |  | **11** |  | 1 |  | 1 | 15 |
| Consumer loan | 4 | 1 |  |  |  | **1** | 1 |  | 3 | 10 |
| Credit card | 2 |  | 1 |  |  |  | **5** |  | 1 | 9 |
| Out-of-scope |  |  |  |  |  |  |  | **0** | 1 | 1 |
