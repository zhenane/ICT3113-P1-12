# Assignment 2 – speed-test playbook (member E)

This is the procedure for Step 4's speed test. It follows the brief's Set-up and Each-run
rules, so another tester can repeat it without asking anyone. Everything runs from
`testing/jmeter/` on the **load-generator machine**. The service runs on the separate
service machine (Ryzen 5 3600, CPU only), as in Assignment 1.

## 0. What is tested

From `assignment2/accuracy-limits/` and `assignment2/cascade-design/`:

| Configuration | Label (`--model`) | Why it is speed-tested | Service set-up |
|---|---|---|---|
| `qwen3:1.7b` alone | `qwen3:1.7b` | Top model, passes the limits by construction | single model `qwen3:1.7b` |
| Cascade S1 (`L = 0`) | `cascade-S1` | Brief: both cascade settings, regardless of accuracy | `llama3.2:3b` → `qwen3:1.7b`, `CASCADE_SHORT_WORDS=0` |
| Cascade S2 (`L = 80`) | `cascade-S2` | as above | same pair, `CASCADE_SHORT_WORDS=80` |

`llama3.2:1b`, `llama3.2:3b` and `qwen3:4b` fail the limits on the test set
(18, 35 and 0 of 105 correct, against 48 needed), so they get **no** speed test.
3 configurations × 3 runs = **9 runs**. Use A's exact switch names; the env var name
above is the example given in `escalation_rule.md`.

**Fixed system.** The A1 service is unchanged apart from the cascade, including its
60 s Ollama timeout. A request whose Ollama call takes longer than 60 s returns HTTP 502
and counts as an error, as it would for the client. Ask A whether in the cascade the 60 s
applies to each model call separately or to the whole request, and state it on slide 3.

**Ollama settings, the same for every configuration:** `OLLAMA_KEEP_ALIVE` (e.g. `30m`,
so the large model isn't unloaded while it sits idle), `OLLAMA_MAX_LOADED_MODELS` and
`OLLAMA_NUM_PARALLEL` exactly as recorded in
`assignment2/cascade-design/memory-check/00_env.txt`. Parallelism must not change.

## 1. Once, before the first measurement

1. **Check the environment** on the service machine against the memory-check record
   (`00_version.txt`, `00_env.txt`), and save a fresh copy as
   `testing/jmeter/data/a2/environment.txt`:
   ```bash
   docker compose exec ollama ollama -v
   docker compose exec ollama ollama list          # tags + digests = requirements/README.md
   docker compose exec ollama env | grep OLLAMA
   docker info --format "CPUs={{.NCPU}} Mem={{.MemTotal}}"
   ```
   Repeat before each configuration. Nothing may change between configurations.
2. **The workload** is already selected in `data/a2/`. **Commit `workload_rows.csv`**; it is
   the required list of row numbers. To regenerate it identically:
   ```bash
   python select_workload.py --tickets ../../data/raw/team_12_tickets.csv \
       --golden ../../golden-test-set/final/golden_test_set.csv
   ```
   - The 45 tickets come from outside the golden set, 9 from each fifth of the word-count
     distribution: 9 short (≤ 80 words), 27 typical and 9 long. They are shuffled once and
     always sent in that order.
   - The short tickets matter. S2 differs from S1 only on tickets of ≤ 80 words (about 19%
     of real tickets). Without them, both settings would behave identically.
   - The 3 warm-up and 3 S tickets are separate, typical-length tickets (124–161 words), so
     no ticket is ever sent twice in a run.
3. **Measure S** with the service running **`qwen3:1.7b` alone**:
   ```bash
   python measure_s.py --host <service-ip> --model qwen3:1.7b
   ```
   It writes `data/a2/s_measurement.md/.json`; commit both. Expect S ≈ 15 s, since the A1
   one-at-a-time median was 15.2 s. That gives:
   - one ticket every ≈ 30 s (≈ 2 per minute)
   - runs of ≈ 15 min (about 30 tickets each)
   - a JMeter timeout of 300 s and a pause of 6 min

## 2. Each configuration: 3 runs

Switch the service to the configuration (A's instructions), check it with one request,
then:

```bash
python run_load_tests.py --a2 --host <ip> --model qwen3:1.7b \
    --rates <rate/min> --duration-min <run min> --timeout-ms <timeout ms>
python run_load_tests.py --a2 --cascade --host <ip> --model cascade-S1 \
    --rates <rate/min> --duration-min <run min> --timeout-ms <timeout ms>
python run_load_tests.py --a2 --cascade --host <ip> --model cascade-S2 \
    --rates <rate/min> --duration-min <run min> --timeout-ms <timeout ms>
```
Use the **same rate, run length and timeout for all three** (from `s_measurement.md`).
Each run:
1. Pauses while you run `docker compose restart ollama` on the service machine. This clears
   the prompt cache, so no model is loaded.
2. Waits for the service, then sends the 3 fixed warm-up tickets (timings discarded).
   - The warm-up tickets are 124–155 words. Under the rule, any ticket over 80 words that
     `llama3.2:3b` labels "Bank account" is escalated, and it does that for most tickets.
     So the warm-up should load both models, as `escalation_rule.md` requires.
3. For a cascade, pauses while you run `docker compose exec ollama ollama ps` and confirm
   **both** `llama3.2:3b` and `qwen3:1.7b` are listed. If `qwen3:1.7b` is missing, run
   `docker compose exec ollama ollama run qwen3:1.7b "warm up"`, check again, then answer
   `y`.
4. Reads `/stats`, then runs JMeter: open-loop Poisson arrivals at the rate for the run
   length, then a pause of no arrivals for ⌈timeout/60⌉ + 1 min. The response timeout is
   max(10×S, 300 s).
5. Waits for requests to drain, reads `/stats` again, and records the run in
   `results/<config>/runs.csv`. Raw `.jtl` files are never overwritten.

**First run only:** open its `.log` and check it contains
`with schedule rate(<rate>/min) random_arrivals(<n> min) pause(<m> min)` and
`Generating N events, beginRate = <rate/60> / sec`. If JMeter rejects the decimal rate,
rerun with `--rate-unit hour`.

After each configuration, copy `logs/service.log` from the service machine into
`results/<config>/`, then run:
```bash
python summarise_results.py results/<config>/runs.csv
python reconcile_logs.py results/<config>/runs.csv --log results/<config>/service.log
```
For cascade runs, `reconcile_logs.py` reads C's log fields (`escalated`, `final_model`,
`decision_reason`) and reports each run's **escalation fraction**: rows with
`escalated = true` ÷ all cascade rows in that run's log. It also gives the fraction among
completed requests, and the counts for each decision reason.

## 3. Final tables (slides 5 and 6)

```bash
python summarise_results.py results/qwen3-1.7b/runs.csv results/cascade-S1/runs.csv \
    results/cascade-S2/runs.csv --out results
```
- `results/summary_runs.csv` has, **per run**, the number sent, completed, errored and
  unfinished, plus p50, throughput and error rate.
- `results/summary_configs.csv` has, **per configuration**:
  - p50 mean ± sd and min–max across the 3 runs
  - **p95 pooled over the 3 runs, with n** (about 90)
  - throughput and error rate
  As the brief says, p99 is not reported.
- Each cascade's `reconciliation.csv` gives the **escalation fraction under load**, per
  run. Compare it with the tuning estimate: S1 84.6%, S2 74.7% (`tuning_rule_comparison.csv`)
  and D's test-set fraction. If they differ, explain why (different tickets, length mix).
- Slide 6: plot test-set accuracy (from D) against p50 (from here) for the 3
  configurations, with the 45.2% overall limit drawn as a line.
- What to expect, from `escalation_rule.md` D8: on isolated A1 timings, neither cascade
  setting's median beats `qwen3:1.7b` alone (≈ 18 s against ≈ 15 s). The speed test checks
  this under load. Report the result whichever way it goes.

## Time budget

Each run takes: restart + warm-up (~2 min) + run (S min) + pause (6 min) + drain ≈ 23 min
at S = 15 s. So 9 runs ≈ **3.5 hours**, plus switching configurations and copying logs.
You need to be there at the start of each run to restart Ollama, unless you can use
`--restart-cmd` over ssh.

## Changes from Assignment 1 to state on slide 3

- The arrival rate comes from S (one ticket every 2S), not from the A1 client rate. At
  ≈ 0.033 tickets/s it is **below** the A1 client peak (0.109/s). The results compare
  configurations but do not show the recommended one can carry the client's peak; say so
  on slide 8.
- Ollama is restarted before every run, the warm-up tickets and workload are fixed, and the
  workload is stratified by length so the cascade's length rule is exercised. Cascade runs
  start only after both models are confirmed resident with `ollama ps`.
- The response timeout is max(10×S, 300 s), and the pause after arrivals is longer than it.
  The service's own 60 s Ollama timeout is unchanged from A1.
- p95 is pooled across the 3 runs; p99 is not reported.
