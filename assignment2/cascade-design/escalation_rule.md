# Assignment 2 — Step 2b: Escalation Rule (frozen before benchmarking)

Owner: C (design), A (implementation). This is the written escalation rule the
brief requires as a supporting file. It must be committed **before the first A2
benchmark run**, and the rule is held fixed during all measurement.

## What an escalation rule is

In a cascade, every ticket is first classified by a fast but weaker **small model**.
The **escalation rule** decides, ticket by ticket, whether to:

- **accept** the small model's answer and return it immediately (cheap), or
- **escalate**, meaning send the ticket on to the slower but more accurate
  **large model**, whose answer is final (expensive).

The rule cannot see the true label when a ticket arrives. It can only use what is
known at that point: the small model's answer, the ticket text and its length. A
good rule accepts the small model when it is likely right and escalates when it is
likely wrong. The fraction of tickets escalated drives the cascade's speed: mean
latency ≈ small-model time + escalation fraction × large-model time.

A **setting** is the knob on the rule. Different settings give different
escalation fractions, and so different accuracy and speed. The brief asks for one
rule tested at two settings.

## Data used: tuning set only

Every number in this file comes from the **tuning set**
([`odd_tuning_set.csv`](../../golden-test-set/final/odd_tuning_set.csv), 91 tickets,
odd row numbers), joined with the A1 per-ticket prediction records in
`testing/accuracy/results/<model>/predictions.csv`. The test set was not used to
design or tune the rule. The script asserts it reads odd rows only.

Reproduce everything with `python assignment2/cascade-design/analyse_tuning.py`. It
writes:

| File | Supports |
|---|---|
| [`tuning_pair_matrix.csv`](tuning_pair_matrix.csv) | choice of model pair ([`pair_investigation.md`](pair_investigation.md)) |
| [`tuning_precision_by_predicted.csv`](tuning_precision_by_predicted.csv) | the safe set |
| [`tuning_rule_comparison.csv`](tuning_rule_comparison.csv) | rules considered, the `L` sweep, the two settings |
| [`tuning_bank_predictions_by_length.csv`](tuning_bank_predictions_by_length.csv) | why "Bank account" predictions are escalated |
| [`tuning_settings_by_category.csv`](tuning_settings_by_category.csv) | per-category effect of S1 and S2 |

**Latency estimates** use A1 `client_latency_ms`: requests sent one at a time with
only that model loaded. An escalated ticket is counted as small + large time. These
are design-time estimates, not A2 measurements. With two models resident and
tickets overlapping under load, the A2 speed test may be slower.

## The rule

**Pair:** small `llama3.2:3b` → large `qwen3:1.7b`, with tags and digests as in
[`requirements/README.md`](../../requirements/README.md). The full investigation of
all six pairings is in [`pair_investigation.md`](pair_investigation.md).

For each `POST /tickets` request:

1. Send the narrative to **`llama3.2:3b`** with the unchanged A1 prompt
   (`build_prompt` in [`service/src/ollama_client.py`](../../service/src/ollama_client.py))
   and options (`temperature = 0`). Parse it with the unchanged `parse_category`.
   Call the result `P`.
2. Count words: `W = len(narrative.strip().split())`.
3. **Accept `P`** if **either**:
   - `P` ∈ **safe set** = `{Credit reporting, Debt collection, Credit card}`, **or**
   - `W ≤ L`, where `L` is the setting's length cut-off.
4. **Otherwise escalate:** send the same narrative to **`qwen3:1.7b`** with the same
   prompt and options. Its answer is final.
5. If `llama3.2:3b` fails or its output cannot be parsed, **escalate** (reason
   `small_error`). If `qwen3:1.7b` fails, the request fails exactly as in A1, with
   no fallback to the small model's answer.

The response body is unchanged from A1: one category, with nothing that reveals
which model answered.

### The two settings

| Setting | `L` | In words |
|---|---:|---|
| **S1 — category only** | **0** | Accept the small model only when it predicts a safe category. |
| **S2 — category + short tickets** | **80** | Also accept the small model on any ticket of 80 words or fewer. |

The service reads `L` from configuration (for example `CASCADE_SHORT_WORDS=0` or
`80`). The safe set is fixed and is not part of the setting.

### Tuning-set results for the two settings

| | Escalated | Right / 91 | Accepted (right / total) | Wrong answers let through | Est. median / mean |
|---|---:|---:|---:|---:|---:|
| `qwen3:1.7b` alone (reference) | — | 55 (60.4%) | — | — | 15.2 / 18.1 s |
| **S1 (`L = 0`)** | 77 (84.6%) | 55 (60.4%) | 12 / 14 | 2 | 18.6 / 19.0 s |
| **S2 (`L = 80`)** | 68 (74.7%) | 52 (57.1%) | 14 / 23 | 9 | 17.9 / 17.7 s |

Per category (right counts; from `tuning_settings_by_category.csv`):

| True category | n | `qwen3:1.7b` alone | S1 | S2 |
|---|---:|---:|---:|---:|
| Bank account or service | 13 | 11 | 11 | 11 |
| Consumer loan | 10 | 1 | 1 | 1 |
| Credit card | 15 | 9 | 9 | 9 |
| Credit reporting | 21 | 18 | 18 | 17 |
| Debt collection | 10 | 7 | 7 | 6 |
| Money transfer or service | 11 | 5 | 5 | 4 |
| Mortgage | 11 | 4 | 4 | 4 |

## Design decisions and their justification

### D1. Why a category-based signal

Small generative models give no dependable confidence score, so the signal has to be
built. On the tuning set, the only signal that separates `llama3.2:3b`'s right
answers from its wrong ones is **which category it predicts**
(`tuning_precision_by_predicted.csv`):

| `llama3.2:3b` predicts | Times | Right | Precision |
|---|---:|---:|---:|
| Credit card | 2 | 2 | 100% |
| Credit reporting | 7 | 6 | 86% |
| Debt collection | 5 | 4 | 80% |
| Bank account or service | 77 | 13 | **17%** |
| Mortgage / Consumer loan / Money transfer | 0 | — | never predicted |

`llama3.2:3b` uses "Bank account or service" as a default: 77 of 91 tickets, spread
across all seven true labels. When it commits to any other category, it is usually
right.

### D2. Why the safe set is exactly these three categories

- **Threshold: precision ≥ 80%, predicted at least twice.** There is a natural gap
  between 80% (Debt collection) and 17% (Bank account), so the safe set is not
  sensitive to the exact threshold. Any value from 20% to 80% gives the same set and
  the same results (`tuning_rule_comparison.csv`, rows `(a)` at 0.80, 0.50, 0.20).
- **Accepted answers are as good as escalating them.** On the 14 tickets the safe
  set accepts, `llama3.2:3b` is right 12 times. `qwen3:1.7b` would also have been
  right 12 times (`accepted_large_would_be_right`). Accepting them costs no accuracy
  and saves a large-model call.
- **"At least twice"** stops a category that was predicted once and happened to be
  right from becoming safe on one ticket of evidence.
- **Categories never predicted on tuning are escalated.** There is no evidence they
  are reliable, and accepting them would be a guess.

### D3. Why "Bank account" predictions are escalated at every length

Its precision is low in every length band (`tuning_bank_predictions_by_length.csv`):
0/6 at ≤ 60 words, 2/3 at 61–80, 0/6 at 81–100, 2/18 at 101–150 and 9/44 above 150.
The 2/3 band is too small to act on. Overall they are 13/77 right, against 43/77 for
`qwen3:1.7b` on the same tickets.

### D4. Why ticket length is the setting (the knob)

The safe set cannot provide a second meaningful setting:

- Loosening the threshold anywhere down to 20% gives the same set (D2).
- Tightening it to ≥ 85% drops only Debt collection. Escalation then *rises* to
  90.1% and the estimated median is 18.8 s, making the cascade even slower for a
  1-ticket gain (56 vs 55). Both settings would then be slower than the large model,
  and the trade-off the brief wants to see would be hidden.

Ticket length is the one knob that moves escalation materially in the *faster*
direction. The brief lists it as an approved signal (method 4). It costs nothing to
compute and is known before any model call. On its own, length is a poor signal
(D6), so it is used only *in addition to* the safe set, as a deliberate speed-for-
accuracy dial. Words are counted on whitespace, matching the A1 prediction record.

### D5. Why `L = 0` and `L = 80`

The sweep used `L` ∈ {0, 60, 80, 100, 120, 150}. The tuning-set word lengths have a
lower quartile of 104 and a median of 166, so the grid runs from "off" up to just
below the median.

| `L` | Escalated | Right / 91 | Wrong let through | Worst category vs `qwen3:1.7b` alone | Est. median / mean |
|---:|---:|---:|---:|---|---:|
| **0 (S1)** | 84.6% | 55 | 2 | ±0 pp | 18.6 / 19.0 s |
| 60 | 78.0% | 52 | 8 | −10 pp (Debt collection) | 17.9 / 18.1 s |
| **80 (S2)** | 74.7% | 52 | 9 | −10 pp (Debt collection) | 17.9 / 17.7 s |
| 100 | 68.1% | 49 | 15 | −20 pp (Debt collection) | 17.7 / 16.9 s |
| 120 | 60.4% | 43 | 22 | −36 pp (Money transfer) | 17.7 / 16.0 s |
| 150 | 48.4% | 39 | 31 | −36 pp (Money transfer) | 3.7 / 13.8 s |

- **S1 = `L` 0** is the accuracy-preserving end. It matches `qwen3:1.7b` alone in
  every category on the tuning set. If any cascade can pass the limits on the test
  set, this one should.
- **S2 = `L` 80** is the largest cut-off whose tuning results keep every category
  within 10 pp of `qwen3:1.7b` alone. It gives a 5 pp safety margin under the brief's
  15 pp per-category limit, because one ticket is worth 6–10 pp in these small
  categories. It beats `L = 60`: same accuracy (52) with 3 fewer escalations. `L = 100`
  already drops Debt collection by 20 pp, and `L` ≥ 120 falls below the overall
  tuning-set guide of 46 / 91.
- **Cost of S2 vs S1:** it accepts 9 extra short tickets, of which `llama3.2:3b` gets
  2 right and `qwen3:1.7b` would have got 5. That is 3 tickets of accuracy lost, for
  about 1.3 s lower estimated mean latency.
- **The margin is thin.** S2's worst category, Debt collection, is 6/10 against
  7/10, a difference of one ticket. On the test set this could land either side of
  the limit. That is a known risk of S2 and should go in the prediction record.
- The tuning comparison is against `qwen3:1.7b` on the tuning set and is only a
  guide. Pass/fail is decided on the test set against
  [`limits.csv`](../accuracy-limits/limits.csv).

### D6. Rules considered and rejected (tuning set, n = 91)

| Rule | Escalated | Right / 91 | Wrong let through | Est. median / mean | Why rejected |
|---|---:|---:|---:|---:|---|
| Category rule on `llama3.2:1b` (accept "Credit reporting", 29% precision) | 84.6% | 52 | 10 of 14 | 16.9 / 17.6 s | best category precision is 29%, so it accepts mostly wrong answers |
| Agreement: `llama3.2:1b` = `llama3.2:3b` | 94.5% | 54 | 1 of 5 | 21.0 / 22.8 s | they agree on only 5 tickets, and every ticket pays for two small calls |
| Length only: `llama3.2:3b` answers ≤ 100 words, rest straight to large | 78.0% | 48 | 15 of 20 | 14.9 / 15.4 s | accepts short tickets regardless of what the small model says; `llama3.2:3b` gets only 5 of 20 short tickets right |
| Self-reported confidence (HIGH/LOW) | — | — | — | — | cannot be evaluated from A1 records without new runs; the brief warns small models are often confident and wrong; a separate confidence call adds latency to every ticket |

### D7. Error handling

- **Small model fails → escalate.** A failure gives no answer to accept, and
  escalating keeps the ticket classified.
- **Large model fails → error.** This keeps the A1 behaviour (`ClassificationError`,
  no silent fallback), so failures appear in the JMeter error rate instead of being
  hidden as low-quality answers.

### D8. Expected outcome, stated honestly

Both settings escalate 75–85% of tickets, so they pay the small-model cost (about
3.5 s) on every ticket and the large-model cost on most. On A1 isolated timings,
**neither setting's median beats `qwen3:1.7b` alone** (about 18 s against 15 s), and
the means are similar. For the median to win, escalation would need to be about 50%
or less, which is `L` ≥ 150, and that falls well below the accuracy limits (D5). The
brief still requires the cascade to be built and speed-tested so the comparison is
measured, and it accepts the conclusion that the cascade did not help.

## Logging (required by the brief)

For every `POST /tickets`, the service log records:

| Field | Example |
|---|---|
| `ticket_id` / request id | as in A1 |
| `cascade_setting` | `S1` / `S2` (or `L=0` / `L=80`) |
| `word_count` | `142` |
| `small_model`, `small_prediction`, `small_latency_ms` | `llama3.2:3b`, `Bank account or service`, `3480` |
| `escalated` | `true` / `false` |
| `decision_reason` | `safe_category` / `short_ticket` (accepted) or `unsafe_category` / `small_error` (escalated) |
| `large_model`, `large_prediction`, `large_latency_ms` | `qwen3:1.7b`, `Mortgage`, `15210` (empty if not escalated) |
| `final_model`, `final_category` | `qwen3:1.7b`, `Mortgage` |

Escalation fraction for a run = rows with `escalated = true` ÷ total cascade rows in
that run's log.

## Warm-up note (for E)

The brief requires both models to be warm before each cascade run. The warm-up
tickets must include at least one the rule will escalate: any ticket longer than 80
words on which `llama3.2:3b` predicts "Bank account or service", which is most of
them. Confirm with `ollama ps` that both models are listed before starting JMeter.
