# Assignment 2 – speed-test playbook (member E)

This is the procedure for Step 4's speed test. It follows the brief's Set-up and Each-run
rules, so another tester can repeat it without asking anyone. Everything runs from
`testing/jmeter/` on the **load-generator machine**. The service runs on the separate
service machine, as in Assignment 1.

## 0. Inputs needed from the team before starting

| From | What | Why |
|---|---|---|
| D (Phase 3) | Which single models pass **both** accuracy limits on the test set | Only those, plus the top model, need a speed test |
| C / A | The cascade's two settings and how to switch between them on the service (env var + restart?) | Each setting is a separate configuration with 3 runs |
| A | The service log's field names for "escalated" and "final model" | The escalation fraction must come from the logs (`reconcile_logs.py --escalation-field/--final-model-field`) |
| A | The service's own Ollama timeout (it was 60 s in A1) | It must be **longer than the JMeter timeout (10×S, ≥ 5 min)**, otherwise slow tickets become 502s that measure the timeout rather than the model. Record any change as a change from A1, applied to every configuration. |

Speed-test **every configuration that passes both accuracy limits, plus both cascade
settings regardless of accuracy**. The top model passes by definition (the limits are
derived from it). Single models that fail accuracy are not speed-tested.

## 1. Once, before the first measurement

1. **Record the environment** on the service machine and save the output to
   `testing/jmeter/data/a2/environment.txt`:
   ```bash
   docker compose exec ollama ollama --version
   docker compose exec ollama ollama list          # tags + digests (must match A1)
   docker compose config                            # OLLAMA_* settings, CPU/RAM limits
   docker info --format "{{.NCPU}} CPUs, {{.MemTotal}} bytes"
   ```
   Repeat before each configuration and check nothing changed.
2. **Select the workload** (fixed tickets, same order, outside the golden set):
   ```bash
   python select_workload.py --tickets ../../data/raw/team_12_tickets.csv \
       --golden ../../golden-test-set/final/golden_test_set.csv
   ```
   This writes `data/a2/`. **Commit `workload_rows.csv`**; it is the required "list of
   row numbers used as the speed-test workload". The selection is 45 tickets (30 typical,
   15 long), plus 3 separate warm-up tickets and 3 separate S tickets, so no ticket is
   ever sent twice in a run.
3. **Measure S** with the service running the **top model alone**:
   ```bash
   python measure_s.py --host <service-ip> --model <top-model>
   ```
   It prompts you to restart Ollama, sends the 3 warm-up tickets, then the 3 S tickets one
   at a time. It writes `data/a2/s_measurement.md/.json` with S, the rate (one ticket
   every 2S), the run length (max(S, 5) min), the JMeter timeout (max(10S, 300 s)) and the
   pause. **Commit both files.** They are what slide 3 needs: S, the rate, the run length,
   the three timings and the three row numbers.

## 2. Each configuration: 3 runs

Switch the service to the configuration first (A's instructions), then:

```bash
# single model
python run_load_tests.py --a2 --host <service-ip> --model <model> \
    --rates <rate/min> --duration-min <run min> --timeout-ms <timeout ms>
# cascade setting
python run_load_tests.py --a2 --cascade --host <service-ip> --model cascade-<setting> \
    --rates <rate/min> --duration-min <run min> --timeout-ms <timeout ms>
```
Use the **same rate, run length and timeout for every configuration** (from
`s_measurement.md`). Each run does the following:
1. Pauses while you run `docker compose restart ollama` on the service machine. This clears
   Ollama's prompt cache, so no model is loaded.
2. Waits for the service, then sends the 3 fixed warm-up tickets. The first one loads the
   model; all three timings are discarded.
3. For a cascade, pauses while you run `docker compose exec ollama ollama ps` and confirm
   **both** models are listed. If the large model is missing, send it one request
   (`docker compose exec ollama ollama run <large-model> "warm up"`), check again, and only
   then answer `y`.
4. Reads `GET /stats`, then runs JMeter: open-loop Poisson arrivals at the rate for the run
   length, then a **pause** of ⌈timeout/60⌉ + 1 min with no arrivals, so slow requests
   finish and none are cut off. The response timeout is max(10×S, 300 s).
5. Waits for requests to drain, reads `/stats` again, and records the run in
   `results/<config>/runs.csv`.

Raw `.jtl` files are never overwritten; a repeated run gets a timestamp suffix.

**First run only:** open its `.log` and check it contains
`with schedule rate(<rate>/min) random_arrivals(<n> min) pause(<m> min)` and
`Generating N events, beginRate = <rate/60> / sec`. If JMeter rejects a decimal rate, use
`--rate-unit hour` (the rate is converted to tickets per hour).

After each configuration's 3 runs, copy `logs/service.log` from the service machine into
`results/<config>/`, then run:
```bash
python summarise_results.py results/<config>/runs.csv
python reconcile_logs.py results/<config>/runs.csv --log results/<config>/service.log \
    [--escalation-field <name> --final-model-field <name>]
```

## 3. Final tables (slides 5 and 6)

```bash
python summarise_results.py results/*/runs.csv --out results
```
- `results/summary_configs.csv` has one row per configuration: p50 mean ± sd and min–max
  over the 3 runs, **pooled p95 with its n** (about 90 requests), throughput, error rate,
  and the totals sent, completed, errored and unfinished. As the brief says, no p99 is
  produced.
- `results/summary_runs.csv` has the same figures for each run, which slide 5 must show.
- Each cascade's `reconciliation.csv` gives the **escalation fraction under load** for each
  run. If it differs a lot from D's accuracy-test escalation fraction, explain why (the
  workload tickets differ).
- For slide 6, plot each configuration's test-set accuracy (from D) against p50 (from
  here), and draw the overall accuracy limit as a line.

## Time budget

Each run takes about warm-up + run length + pause + drain. For example, with S = 50 s, a
run is ≈ 50 + 10 + ~3 = 63 min, so 3 runs ≈ 3.2 h per configuration. With the top model,
any qualifying single models and 2 cascade settings, plan for **at least 4 configurations,
about 13 hours**, spread over several sessions. Each run needs someone present to restart
Ollama (or use `--restart-cmd` if the service machine can be reached by ssh).

## Changes from Assignment 1 to state on slide 3

- The arrival rate comes from S (one ticket every 2S), not from the A1 client rate. State
  whether it is above or below the A1 client peak (0.109 tickets/s); `s_measurement.md`
  says which.
- Ollama is restarted before every run, the warm-up tickets are fixed, the workload is
  fixed, and the cascade runs only start once both models are confirmed loaded.
- The response timeout is max(10×S, 300 s), and the pause after arrivals is longer than it.
- p95 is pooled across the 3 runs; p99 is not reported.
- Any change to the service's Ollama timeout (see section 0).
