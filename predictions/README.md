# Assignment 2 — Prediction Record

This is the team's forecast for Assignment 2. The values below are predictions,
not measured results, and should be compared with the benchmark outcomes.

## Evidence and method

- Cascade predictions use the tuning set only: 91 odd-row tickets.
- The escalation rule and its tuning evidence are in
  [`escalation_rule.md`](../assignment2/cascade-design/escalation_rule.md).
- Single-model test-set accuracy is reused from Assignment 1, as permitted by
  the assignment.
- Test-set accuracy limits are in
  [`limits.csv`](../assignment2/accuracy-limits/limits.csv).
- Both cascade models passed the memory check and were listed together with
  `ollama ps`:
  [`pair_investigation.md`](../assignment2/cascade-design/pair_investigation.md).

## Prediction assumptions (A1 baseline)

- Inference host: Docker service and Ollama on the Ryzen 5 3600 host.
- Host: Windows 10 Home x64, 32 GB RAM; Docker reported 12 logical CPUs.
- Docker memory: approximately 15.57 GiB.
- Ollama: 0.35.0.
- CPU-only inference.
- Context: 4096.
- Prompt and decoding: unchanged from Assignment 1.
- Model identities: the exact tags and digests in
  [`requirements/README.md`](../requirements/README.md).
- Cascade pair: `llama3.2:3b` as the small model and `qwen3:1.7b` as the large
  model.

## A2 test setup and comparability

- The physical inference host, Ollama version, model identities, prompt, and
  temperature are intended to match A1. A2 intentionally uses a fixed
  `30m` keep-alive and keeps both cascade models resident; these are not
  settings to revert between A2 configurations.
- Load generator: separate Windows machine.
- Speed test: the arrival interval is derived from S, where S is the median of
  three timings of different warm-model tickets sent to the top model.
- Three runs per configuration, fixed-ticket open-loop JMeter workload.

## P1 — Fastest configuration

**Prediction:** `qwen3:1.7b` alone will be the fastest qualifying configuration
by median latency. Neither cascade setting is predicted to beat it.

Reasons:

1. The other single llama models are below the required 48/105 test-set overall
   accuracy. `qwen3:4b` returned no successful Assignment 1 classifications.
2. Both tuning-selected cascade settings escalate most tickets: approximately
   85% for S1 and 75% for S2.
3. Since both settings are predicted to escalate more than half of tickets, the
   median cascade request is likely to include both model calls. Their A1
   isolated tuning-set medians were 3.5 s and 15.2 s; adding these gives a
   rough latency reference, not the measured or mathematically implied median
   of their sum.

**Specific claim:** the mean of the three run p50 values for each cascade setting
will be at least 2 seconds higher than the mean p50 for `qwen3:1.7b` alone.

The final recommendation remains evidence-based: only the measured speed and
test-set accuracy decide the fastest qualifying configuration.

## P2 — Cascade predictions

| Quantity | S1 (`L = 0`) | S2 (`L = 80`) |
|---|---:|---:|
| Accuracy-test escalation fraction | Approximately 85%; predicted range 80–90% | Approximately 75%; predicted range 70–80% |
| Predicted overall accuracy | Approximately 57/105 (54.3%); range 54–60 | Approximately 54/105 (51.4%); range 51–57 |
| Predicted overall limit result | Pass (`>= 48/105`) | Pass (`>= 48/105`) |
| Predicted per-category result | Pass all seven limits | Pass all seven limits; Debt collection is borderline |
| Predicted non-escalated accuracy | Approximately 85%; 14/16 | Approximately 60%; 16/26 |
| Predicted escalated accuracy | Approximately 48%; 43/89 | Approximately 48%; 38/79 |

“Pass” here means passing the A2 relative accuracy limits in
[`limits.csv`](../assignment2/accuracy-limits/limits.csv). It does not mean
meeting the separate overall-accuracy, macro-F1, and recall requirements in
[`requirements/README.md`](../requirements/README.md).

On the tuning set, S1 matched `qwen3:1.7b` at 55/91 correct while accepting only
categories with tuning precision of at least 80% and at least two observations.
The predicted 57/105 test-set result extrapolates from that tuning-set result.

S2 adds acceptance of tickets of 80 words or fewer. It is predicted to lose
some tuning-set accuracy, but to remain within the test-set limits.

**Speed predictions**

| Configuration | Mean p50 across three runs | Predicted p95 pooled |
|---|---:|---:|
| `qwen3:1.7b` alone | 16 s; range 13–20 s | Approximately 37 s |
| S1 | 19.5 s; range 16–24 s | Approximately 40 s |
| S2 | 19 s; range 16–24 s | Approximately 40 s |

The predicted top-model warm-up median S is 15 s, giving an arrival interval of
approximately 30 seconds and at least a 15-minute run under the Assignment 2
formula. Escalation under load is predicted to be approximately 85% for S1 and
78% for S2, but may differ from the accuracy-test fraction because the
load-workload tickets are outside the golden set.

No queue is predicted to build at the S-derived arrival rate. Single llama
models and `qwen3:4b` fail the accuracy limits and do not need speed tests.

## P3 — Categories likely to lose accuracy

Acceptance is based on the small model's **predicted** category and ticket
length. Accuracy loss is measured against the true test-set category.

- **S1: Credit reporting and Debt collection.** Both are in the safe set and
  are the likely locations of the small model's two tuning-set wrong
  acceptances. Predicted loss: at most one test ticket in each category.
- **S2: Credit reporting, Debt collection and Money transfer or service.**
  Short tickets are accepted regardless of the llama answer. The tuning set
  shows extra losses in these categories. Predicted loss: one or two tickets
  in each. Debt collection is the likely borderline category.
- **Bank account or service:** the small model's low-precision default answer
  is not accepted under S1 and is only accepted for short tickets under S2.
  It is not predicted to lose accuracy.

## Material prediction-error thresholds

| Quantity | Material error threshold |
|---|---|
| Overall accuracy | More than 3 tickets (approximately 3 percentage points) |
| Escalation fraction | More than 7 percentage points |
| Mean run p50 | More than 25% |
| Pass/fail on any limit | Any difference |
| Fastest qualifying configuration | Any difference |

These thresholds describe prediction error; they are separate from the
assignment's accuracy and latency requirements.
