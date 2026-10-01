# Requirements & Candidate Models

Step 4 deliverable (the requirements half — see `../predictions/` for the
prediction record).

Contents:

- **Candidate models**: 3–5 models from the Ollama library, spanning at
  least two parameter size classes, each pinned by exact Ollama tag _and_
  digest, with the candidate set justified.
- **Requirements**, each testable (a number, a percentile where relevant,
  and the load condition it must hold under), justified by
  `../workload-model/`:
  - at least one response time requirement
  - at least one throughput requirement
  - a classification accuracy requirement (overall and per category)

## Requirements

These requirements are based on the Step 3 workload model in
`../workload-model/README.md` and the project constraint that ticket
classification runs through a local, CPU-only Ollama backend.

### Load Basis

The workload model estimates the peak `POST /tickets` arrival rate as:

```text
peak_post_tickets_per_second = 0.1088
```

To avoid sizing the system exactly at the measured peak, the test load adds
approximately 20% headroom:

```text
0.1088 * 1.2 = 0.13056 tickets/second
```

The requirements therefore use the rounded peak-load condition:

```text
target_peak_load = 0.13 POST /tickets requests/second
                 = 468 tickets/hour
```

### Response-Time Requirement

At the target peak-load condition of `0.13 POST /tickets requests/second`,
the service must classify tickets with:

```text
POST /tickets p95 latency <= 45 seconds
```

Justification:

- `POST /tickets` is not a simple database or routing endpoint; it triggers
  local model inference.
- The project uses a CPU-only Ollama backend, so inference latency is expected
  to be much higher than a normal web API.
- A 45-second p95 target is strict enough to reject models that are too slow
  for operational use, but realistic enough to allow comparison between
  smaller, faster models and larger, more accurate models.
  - why not 5s or 10s: can be okay for smaller models, but might unfairly eliminate useful larger models
  - why not 90 or 120s: is alright but too slow for practical use, and load queues could build up during peak periods
- The p95 percentile is used because the requirement should cover most user
  requests while allowing a small number of slower outliers.

### Throughput Requirement

The service must sustain:

throughput >= 0.13 POST /tickets requests/second >= 468 tickets/hour

for at least 30 minutes, with:
failed_requests <= 1%

Justification:

- The workload model estimates peak demand at `0.1088 tickets/second`.
- The required throughput of `0.13 tickets/second` includes about 20% headroom
  above the measured peak.
- A sustained 30-minute test checks that the service can keep up under load
  without queue buildup, CPU saturation, memory pressure, or repeated request
  failures.
- The `<= 1%` failed-request threshold makes the requirement testable in a load
  test tool such as JMeter.

### Classification Accuracy Requirement

On the frozen golden test set in `../golden-test-set/final/golden_test_set.csv`,
the selected model must achieve:

```text
overall_accuracy >= 75%
macro_f1 >= 0.65
per_category_recall >= 55%
```

The per-category recall requirement applies to categories with at least `20`
golden-test examples. Categories with fewer than `20` examples should still be
reported, but should not be used as pass/fail gates because the sample is too
small to produce a stable category-level estimate.

Justification:

- The classifier predicts one of seven complaint categories, so random guessing
  would be approximately `1 / 7 = 14.3%`.
- An overall accuracy requirement of `75%` is meaningfully above chance and
  sets a clear minimum quality bar for the final selected model.
- CFPB-style complaint categories can be imbalanced, so overall accuracy alone
  is not enough. A model could score well overall while performing poorly on
  smaller categories.
- Macro-F1 measures balanced performance across categories by considering both
  precision and recall.
- Per-category recall is used as the category-level requirement because the
  service should identify each category when that category appears, not only do
  well on the majority classes.
