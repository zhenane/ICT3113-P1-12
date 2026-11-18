# Assignment 2 — Step 1: Accuracy Limits

Owner: C. Derived by [`compute_limits.py`](compute_limits.py); output in
[`limits.csv`](limits.csv). Every figure below is reproducible with:

```bash
python assignment2/accuracy-limits/compute_limits.py
```

## Inputs

| Input | File |
|---|---|
| Test set (even row numbers, 105 tickets) | [`golden-test-set/final/even_test_set.csv`](../../golden-test-set/final/even_test_set.csv) |
| Tuning set (odd row numbers, 91 tickets; **not used here**) | [`golden-test-set/final/odd_tuning_set.csv`](../../golden-test-set/final/odd_tuning_set.csv) |
| A1 prediction records | `testing/accuracy/results/<model>/predictions.csv` |

**Reuse of A1 records.** The brief allows single-model A1 prediction records to
be reused, scoring only the test-set rows, if digest, prompt, Ollama version and
machine are unchanged. We do that here: only the 105 test-set rows are scored.
*To confirm before submission:* model digests match
[`requirements/README.md`](../../requirements/README.md), the prompt in
[`service/src/ollama_client.py`](../../service/src/ollama_client.py) is unchanged,
Ollama is still 0.35.0, and the machine is still the Ryzen 5 3600 host.

## Top model

Test-set accuracy of every A1 candidate (n = 105):

| Model | Right / 105 | Accuracy | A1 full-golden-set (196) |
|---|---:|---:|---:|
| **`qwen3:1.7b`** | **58** | **55.2%** | 57.7% |
| `llama3.2:3b` | 35 | 33.3% | 30.6% |
| `llama3.2:1b` | 18 | 17.1% | 17.3% |
| `qwen3:4b` | 0 | 0.0% | 0.0% |

**`qwen3:1.7b` is the top model**: it is the most accurate A1 candidate on both the
full golden set and the test set. `qwen3:4b` is not: all 196 of its A1 requests
failed (HTTP 502 after the service's 60 s Ollama timeout), so its recorded
accuracy is 0%. It still counts as tested, fails the limits, and therefore needs
no speed test.

**Caveat on the top model's score.** Two of `qwen3:1.7b`'s 105 test tickets were
A1 timeouts (502), counted as wrong as in A1: row 12106 (Credit card) and
row 12744 (Money transfer or service). If they had returned and been correct, the
top model would score 60/105 and every limit would be slightly stricter. We keep
the recorded figures because the brief says the top model is used *unchanged*.

## Limits

- **Overall:** top model's test-set accuracy − 10 pp.
- **Per category:** top model's test-set accuracy on that category − 15 pp.
- A configuration passes only if it meets **both** limits. The A1 70% per-category
  requirement does not apply.
- "Min. right to pass" is the smallest whole-ticket count at or above the limit;
  checking counts rather than rounded percentages avoids rounding disputes.

| Scope | n | Top model right / n | Top model acc. | **Limit** | **Min. right to pass** | 1 ticket = | Small sample |
|---|---:|---:|---:|---:|---:|---:|---|
| **Overall** | 105 | 58 / 105 | 55.2% | **45.2%** | **48** | 1.0 pp | |
| Credit reporting | 15 | 12 / 15 | 80.0% | 65.0% | 10 | 6.7 pp | |
| Debt collection | 20 | 16 / 20 | 80.0% | 65.0% | 13 | 5.0 pp | |
| Mortgage | 18 | 8 / 18 | 44.4% | 29.4% | 6 | 5.6 pp | |
| Credit card | 9 | 2 / 9 | 22.2% | 7.2% | 1 | 11.1 pp | **yes** |
| Bank account or service | 17 | 11 / 17 | 64.7% | 49.7% | 9 | 5.9 pp | |
| Consumer loan | 10 | 2 / 10 | 20.0% | 5.0% | 1 | 10.0 pp | **yes** |
| Money transfer or service | 15 | 7 / 15 | 46.7% | 31.7% | 5 | 6.7 pp | |

### Out-of-scope ticket

The test set contains 1 ticket labelled `Out-of-scope`, which is not one of the
seven service categories. As in A1 it stays in the overall denominator (105) and
can never be predicted correctly, so it costs every configuration equally. It has
no category limit: the brief defines limits for the seven categories only.

### Small-sample caution (for the slides)

- **Credit card (9) and Consumer loan (10)** are too small for the per-category
  limit to be a fair test. One ticket is worth 10–11 pp, and because the top model
  itself scores only 2/9 and 2/10, the limit is **1 correct ticket**. Almost any
  configuration passes, so a pass here says little. A fail (0 correct) is still a
  real signal that the category has been abandoned.
- The 15–20 ticket categories are better but still coarse: one ticket moves the
  score by 5–7 pp, so a configuration within one ticket of a limit should be
  described as borderline rather than a clear pass or fail.
- Overall, 48/105 is needed. A difference of 2–3 tickets between configurations
  is within noise for a 105-ticket set.

## Checking a configuration (for D)

```bash
python assignment2/accuracy-limits/compute_limits.py --check <predictions.csv>
```

The file needs one row per ticket with columns `row` and `predicted`, which is the
format `testing/accuracy/run_accuracy.py` already writes. Test rows that are missing
or errored count as wrong. The script prints right/n, accuracy, the count needed,
and PASS/FAIL for overall and each category.

Sanity check with A1 records: `qwen3:1.7b` passes (by construction);
`llama3.2:3b` fails overall (35 < 48), and also fails Credit reporting, Debt
collection and Money transfer; `llama3.2:1b` fails overall (18 < 48).
