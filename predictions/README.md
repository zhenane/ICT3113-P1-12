# Prediction Record

Prepared before benchmarking for the test environment below. All numerical
predictions are judgement-based estimates, not measured results or published
model scores. The predictions apply to the hardware, workload and classification
conditions stated below.

## Prediction Conditions

- Inference host: service and Ollama run in Docker on the same Windows machine.
- Host CPU: AMD Ryzen 5 3600; reported clock 4.1 GHz. RAM: 32 GB.
- Host OS: Windows 10 Home x64, version 10.0.19045, build 19045.
- Docker-reported memory: 16,720,048,128 bytes (approximately 15.57 GiB),
  from `docker info`.
- Ollama version: 0.35.0 (team-confirmed on the inference host).
- Docker CPU availability: 12 logical CPUs (`docker info`: `CPUs=12`).
  Ollama container inspection: `NanoCpus=0`, `CpuQuota=0`, `CpuPeriod=0`,
  empty `Cpuset`; no explicit container CPU quota or CPU-set restriction.
- Inference: CPU only. Host evidence from `ollama ps` confirms
  `llama3.2:1b` uses `100% CPU`, context 4096. CPU-only execution is assumed
  for all four candidates.
- Candidate identities: the four exact tags and digests in
  [requirements](../requirements/README.md).
- Prompt and decoding: the baseline prompt in
  [ollama_client.py](../service/src/ollama_client.py) requests only a category
  number with `temperature=0`. Context/output limits and thinking behaviour
  follow the baseline defaults for Ollama 0.35.0 and the pinned models.
- Single-request latency: end-to-end `POST /tickets` response time, one request
  at a time, one selected model already loaded, no competing test traffic.
  The table predicts the median over successful, valid golden-set requests.
  Cold starts and failed requests are excluded from this latency statistic.
- Input basis: team rows 12000–12999. Narrative lengths have median 825.50,
  p95 1788.70, and p99 1945.08 characters using linear interpolation. These
  character counts are not token counts. The final golden subset may have a
  different length distribution.
- Accuracy: correct predictions divided by all tickets in the frozen golden set.
  Failed requests and invalid outputs count as incorrect. Predictions assume
  resolved golden labels from the seven service categories, following the final
  labelling protocol, with no tickets silently excluded.
- Load basis: C's target arrival rate of 0.13 `POST /tickets` requests/second
  (468/hour), with no competing test traffic for the isolated latency
  predictions. The load-capacity predictions refer to this POST arrival rate.
  JMeter runs on E's separate Windows machine for load testing:
  Intel Core i7-1255U (reported 1.7 GHz), 16 GB RAM (15.7 GB reported usable),
  Windows 11 x64 version 25H2, build 26200.9445.

## Expected Bottleneck Under Load

We predict that CPU-based Ollama inference will be the main bottleneck, rather
than SQLite storage or HTTP handling. Every POST waits for model classification,
whereas storing a ticket and querying a small database should require much less
work. As demand approaches inference capacity, requests will spend more time
waiting for available inference capacity and POST tail latency will rise.

Our specific prediction is that model-call time will account for more than 80%
of median successful POST response time during isolated warm-model requests.
This can be checked against the service's model-call timing and end-to-end
request logs. Model-call time includes HTTP overhead and, under load, waiting;
it does not isolate CPU execution time.

We predict that the 3B and 4B candidates will exceed the 45-second POST p95
requirement at 0.13 requests/second and will struggle to sustain 468 successful
classifications/hour without growing outstanding requests. The two smaller
candidates should sustain higher throughput, although meeting the target is
uncertain because inference concurrency and ticket length affect capacity.

At 0.13 requests/second, requests arrive about 7.69 seconds apart. A backend
processing one request at a time would need mean service time below 7.69 seconds
to keep up. This is a capacity check, not a claim that the current HTTP handlers
or Ollama necessarily enforce one-at-a-time execution. Parallel inference could
change achievable capacity.

## Per-Model Predictions

These point estimates apply to the recorded Ryzen host, with one candidate
loaded and the baseline settings above. Each accuracy prediction refers to the
frozen golden set; each latency prediction refers to isolated warm-model requests.

| Candidate tag | Predicted overall accuracy | Predicted warm single-request median latency |
|---|---:|---:|
| `llama3.2:1b` | 70% | 6 seconds |
| `qwen3:1.7b` | 76% | 9 seconds |
| `llama3.2:3b` | 80% | 15 seconds |
| `qwen3:4b` | 84% | 22 seconds |

We predict that larger candidates will more reliably distinguish the complaint's
primary product from secondary issues, improving accuracy at the cost of CPU
inference time. The two model families may behave differently, so the ordering
above is a prediction rather than a conclusion from parameter count.

An accuracy deviation greater than 5 percentage points or a median-latency
deviation greater than 30% is considered a material prediction error. These
thresholds describe prediction error, not client acceptance requirements or
confidence intervals; the point predictions remain the values in the table.

We predict that `llama3.2:1b` will miss the 75% overall accuracy requirement and
the other candidates will reach it. Overall accuracy alone will not establish
compliance, which also depends on the macro-F1 and per-category recall requirements.
We do not assume in advance that any candidate meets every requirement.

## Expected Hardest Categories and Confusions

We predict that Consumer loan and Money transfer or service will have the lowest
recall for at least three of the four candidates. For each of those candidates,
at least one of these two categories is predicted to have recall below 70%.

| Category or boundary | Expected error and reason |
|---|---|
| Consumer loan | Confusion with Credit card and Debt collection when narratives emphasise payments, interest, arrears, or collection activity without clearly identifying the underlying loan. |
| Money transfer or service | Confusion with Bank account or service when disputed transfers also involve a bank account, fees, or access to funds. |
| Credit reporting versus Debt collection | Narratives may describe both a collector and an incorrect credit-file entry. Models may classify by a prominent keyword instead of the primary issue defined in the labelling protocol. |

We predict Mortgage will have higher recall than Consumer loan for all four
candidates because explicit mortgage, servicing, and foreclosure language should
provide clearer product cues. Classification correctness follows B's frozen
labelling protocol.
