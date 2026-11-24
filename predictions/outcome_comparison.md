# Assignment 2 Prediction vs. Outcome

This post-test comparison evaluates the forecasts in
[`README.md`](./README.md) against the recorded accuracy and performance
results. It does not modify the frozen prediction record.

## Accuracy

The single-model scores reuse the saved A1 predictions on the 105-ticket even
test set. See the [accuracy results](../testing/accuracy/results_a2/README.md).

| Configuration | Predicted correct | Observed correct | A2 limit outcome | Comparison |
|---|---:|---:|---|---|
| `qwen3:1.7b` | Reference/top model | 58/105 | Pass | Top model passes, as expected. |
| `llama3.2:3b` | Predicted not to qualify | 35/105 | Fail | As expected. |
| `llama3.2:1b` | Predicted not to qualify | 18/105 | Fail | As expected. |
| `qwen3:4b` | Predicted not to qualify | 0/105 | Fail | As expected. |
| S1 (`L=0`) | 57/105 (range 54-60) | 56/105 | Pass all limits | Within one ticket of forecast; pass outcome matched. |
| S2 (`L=80`) | 54/105 (range 51-57) | 47/105 | Fail overall and three categories | Seven tickets below point forecast and below the predicted range; material miss. |

S2 failed the Credit reporting (6/15; need 10), Debt collection (11/20; need
13), and Consumer loan (0/10; need 1) category limits. The forecast expected
all categories to pass, with Debt collection borderline. S1's predicted
one-ticket losses in Credit reporting and Debt collection were observed; each
was one correct ticket below `qwen3:1.7b` on those categories. The S2 losses in
Credit reporting and Debt collection were larger than forecast, and Consumer
loan was an additional unpredicted loss.

The S1 result is within the prediction record's material-error threshold of
more than three tickets. S2's seven-ticket shortfall exceeds it. Failed
requests were counted as wrong: S1 had 16 failures (14 timeouts, 2 Ollama
HTTP 500s), and S2 had 31 (30 timeouts, 1 Ollama HTTP 500). These failures
likely contributed to the S2 miss.

For the accuracy-test escalation fraction, S1 was 96/105 (91.4%) versus about
85% predicted, and S2 was 81/105 (77.1%) versus about 75%. Both are within the
prediction record's seven-percentage-point material-error threshold. S1's
escalated accuracy was 47/96 (49.0%), near its 48% forecast; S2's was 33/81
(40.7%), below its 48% forecast. Non-escalated accuracy was S1 9/9 and S2
14/24; these small groups should be interpreted cautiously.

## Performance

The performance runs used Ollama 0.35.0, a 20.86-second S measurement, a
1.4382 requests/minute arrival rate, and three 21-minute runs per
configuration. The [summaries](../testing/jmeter/results_a2/summary_configs.csv)
show 90 requests sent per configuration, no unfinished requests, and
18.9-21.1% errors. The service timeout was 60 seconds; failed requests are
included in the error rate, while latency percentiles describe completed
requests.

| Configuration | Predicted mean run p50 | Observed mean run p50 | Predicted pooled p95 | Observed pooled p95 | Error rate |
|---|---:|---:|---:|---:|---:|
| `qwen3:1.7b` | 16 s (range 13-20) | 28.28 s | ~37 s | 54.42 s | 18.9% |
| S1 (`L=0`) | 19.5 s (range 16-24) | 29.54 s | ~40 s | 59.15 s | 18.9% |
| S2 (`L=80`) | 19 s (range 16-24) | 15.71 s | ~40 s | 54.03 s | 21.1% |

The Qwen and S1 mean-p50 forecasts were materially low (about 77% and 51%
above forecast, respectively), exceeding the 25% threshold. S2's mean p50 was
about 17% below its point forecast, within that threshold, but its pooled p95
was also higher than forecast.

Among configurations that pass both accuracy limits, `qwen3:1.7b` was fastest:
its mean run p50 was 1.26 seconds lower than S1. This confirms the predicted
fastest qualifying configuration. The more specific forecast that each
cascade's mean p50 would be at least two seconds slower than Qwen was not met
for S1 (1.26 seconds slower); S2 was 12.56 seconds faster, but fails the
accuracy limits and therefore does not qualify. There were no unfinished
requests, consistent with the no-queue prediction.

The performance escalation rates from the reconciled logs were 74/90 (82.2%)
for S1 and 57/90 (63.3%) for S2, compared with about 85% and 78% predicted
under load. S1 was within seven percentage points; S2 was 14.7 points lower.
The [per-run reconciliations](../testing/jmeter/results_a2/cascade-S1/reconciliation.csv)
and [S2 reconciliations](../testing/jmeter/results_a2/cascade-S2/reconciliation.csv)
show the individual counts.

## Overall interpretation

The accuracy forecast was close for S1 and materially optimistic for S2.
The predicted fastest accuracy-qualified model, `qwen3:1.7b`, remained the
fastest configuration that passed the A2 limits. S2 was faster in the
performance runs but did not meet the accuracy limits.
