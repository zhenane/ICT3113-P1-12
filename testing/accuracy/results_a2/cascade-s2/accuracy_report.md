# Accuracy test: `cascade-s2`

Golden set: `golden-test-set/final/even_test_set.csv` - 105 tickets scored. Failed requests (counted as wrong): 31.

Generated 2026-11-23T23:40:34.

## Requirements

| Requirement | Result | Value |
|---|---|---|
| Overall accuracy >= 75% | **FAIL** | 44.8% |
| Macro-F1 >= 0.65 (categories with >= 20 examples) | **FAIL** | 0.564 |
| Recall >= 55%: Debt collection | PASS | 55.0% |

Overall: **FAIL**

## Per-category metrics

| Category | Support | Precision | Recall | F1 | Gated |
|---|---:|---:|---:|---:|---|
| Debt collection | 20 | 57.9% | 55.0% | 0.564 | yes |
| Mortgage | 18 | 87.5% | 38.9% | 0.538 | no (< 20 examples) |
| Bank account or service | 17 | 54.2% | 76.5% | 0.634 | no (< 20 examples) |
| Money transfer or service | 15 | 75.0% | 40.0% | 0.522 | no (< 20 examples) |
| Credit reporting | 15 | 85.7% | 40.0% | 0.545 | no (< 20 examples) |
| Consumer loan | 10 | 0.0% | 0.0% | 0.000 | no (< 20 examples) |
| Credit card | 9 | 50.0% | 44.4% | 0.471 | no (< 20 examples) |
| Out-of-scope | 1 | 0.0% | 0.0% | 0.000 | no (< 20 examples) |

Overall accuracy **44.8%**; macro-F1 **0.564** over gated categories (0.409 over all categories).

## Confusion matrix

Rows = golden label, columns = predicted label.

| golden \ predicted | Debt collection | Mortgage | Bank account or service | Money transfer or service | Credit reporting | Consumer loan | Credit card | Out-of-scope | (error) | total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Debt collection | **11** |  | 3 |  | 1 |  | 1 |  | 4 | 20 |
| Mortgage | 2 | **7** | 1 | 2 |  |  | 1 |  | 5 | 18 |
| Bank account or service | 1 |  | **13** |  |  |  | 1 |  | 2 | 17 |
| Money transfer or service | 1 |  | 2 | **6** |  |  |  |  | 6 | 15 |
| Credit reporting |  |  | 3 |  | **6** |  | 1 |  | 5 | 15 |
| Consumer loan | 4 |  | 1 |  |  | **0** |  |  | 5 | 10 |
| Credit card |  |  | 1 |  |  |  | **4** |  | 4 | 9 |
| Out-of-scope |  | 1 |  |  |  |  |  | **0** |  | 1 |
