# Stress test

**Goal:** find the arrival rate at which each model (or the chosen model) stops
meeting the SLO. That rate is the service's practical capacity. Then describe how
it fails beyond that point.

## Design

- **Open-loop step ramp.** Run a sequence of constant-rate steps, e.g. 2, 4, 6,
  8, 12, 16, 24 req/min. Each step is a separate JMeter run with warm-up,
  drain and cooldown, so every step gives clean, comparable numbers. Arrivals
  are Poisson and don't wait for responses, so overload shows up as growing
  latency and errors. With closed-loop threads, the request rate would quietly
  drop instead.
- **Breaking criterion** (fill in from C's requirements). A step breaks when its
  p95 end-to-end latency is above `<SLO>` ms **or** its error rate is above
  `<X>`%. Timeouts (`--timeout-ms`) count as errors.
- **Stop rule.** Stop at the first breaking step. Then confirm it by running the
  last passing step and the breaking step 3 times (`--repeats 3 --no-stop
  --rates <pass> <break>`).
- **Capacity estimate to check against.** With one model slot, capacity is about
  `60 / mean service time (s)` req/min. E.g. 4 s per request is about 15 req/min.
  The breaking step should be close to that. Explain the result if it isn't.

## Run

```bash
python stress_test.py --host <service-ip> --model llama3.2:3b \
    --rates 2 4 6 8 12 16 24 --duration-min 3 \
    --slo-p95-ms 10000 --slo-error-rate 0.01
python ../jmeter/summarise_results.py results/llama3.2-3b/runs.csv
```

## What to report

- Breaking rate per model (req/min and req/s), and which criterion broke first.
- Charts of p95 latency against rate and throughput against rate. Throughput
  levelling off below the arrival rate shows saturation.
- Server time against overhead per step (queueing against model time).
- Error types beyond the breaking point (`error_breakdown`: 502s, timeouts,
  DB errors).
- Whether the service recovered after the overload: the next step's warm-up
  responses and `/stats` should return to normal.
