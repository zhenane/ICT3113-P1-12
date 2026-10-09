# JMeter load testing

Open-loop load tests for the triage service (`POST /tickets`). All scripts use
the Python standard library only. JMeter **5.5 or newer** is required (for the
built-in Open Model Thread Group), plus Java 8+ (JMeter 5.6.3 recommended).

| File | Step | What it does |
|---|---|---|
| `prep_tickets.py` | 2 | Ticket CSV → `data/tickets_jmeter.tsv`, one JSON body per line |
| `stub_server.py` | 3 | Fake service matching A's contract, for building/debugging |
| `triage_load_test.jmx` | 4 | Open-loop JMeter plan, parameterised with `-J` properties |
| `run_load_tests.py` | 5 | Runs every rate × 3 repeats, warm-up, `/stats` cross-check |
| `summarise_results.py` | 5 | p50/p95/p99, throughput, error rate, mean ± std over repeats |
| `reconcile_logs.py` | 5 | Matches every `.jtl` against the service's `logs/service.log` |
| `../stress/stress_test.py` | 6 | Step-ramp stress test that stops at the first SLO break |

## 1. Prepare the data

```bash
python prep_tickets.py --input ../../data/raw/team_12_tickets.csv
```

This drops blank narratives (the service would return 422 for them). It
JSON-escapes everything else, so commas, quotes and newlines can't break JMeter's
CSV reader. It also escapes `$` as `$`, so JMeter never reads a narrative as
a `${variable}`. The script checks that every line decodes back to the original text.

## 2. Develop against the stub

```bash
python stub_server.py                                  # 1–5 s per request, 1 model slot
python stub_server.py --slots 2 --fail-rate 0.02       # more parallelism, 2% 502s
```

`--slots` imitates `OLLAMA_NUM_PARALLEL`. Requests beyond it queue, so
end-to-end latency grows while the returned `latency_ms` stays flat. You
should see the same pattern from the real service.

## 3. Check the plan once in the JMeter GUI

The `.jmx` was written by hand and has **not been opened in JMeter yet**.
Before the first real run:

1. `jmeter -t triage_load_test.jmx`. It should open without errors.
2. Open the **Open-loop arrivals** element and confirm the schedule
   preview shows a flat line.
3. Temporarily add *Listener → View Results Tree*. Then run against the stub
   with `jmeter -t triage_load_test.jmx -Jport=8000 -Jrate_per_min=12 -Jduration_min=0.5`
   and check that requests return 200 with a sensible body.
4. Remove the listener and save. JMeter will normalise the file.

How the plan works:

- **Open Model Thread Group**: Poisson arrivals at `rate_per_min`. A new
  thread starts for each arrival, so a slow response never delays the next
  request. That makes the test open-loop and avoids coordinated omission.
- **CSV Data Set** reads `body` from the TSV (tab-delimited, recycles at EOF).
- **HTTP Request**: `POST /tickets`, raw body `${body}`, JSON headers,
  connect timeout 5 s, response timeout `timeout_ms` (default 120 s).
- **Assertions**: code 200 and `$.category` present, so 422/502/timeouts all
  count as errors.
- **Extractors**: `server_latency_ms` and `category` are saved into the `.jtl`.

| `-J` property | Default | Meaning |
|---|---|---|
| `host`, `port` | localhost, 8000 | service address |
| `rate_per_min` | 6 | mean arrival rate (requests/minute) |
| `duration_min` | 5 | arrival period |
| `timeout_ms` | 120000 | slower responses count as errors |
| `data_file` | data/tickets_jmeter.tsv | prepped bodies |
| `seed` | 42 | arrival randomness (the wrapper uses the repeat number) |

## 4. Run the load tests (one model at a time)

Set `OLLAMA_MODEL` on the service machine and restart the container. Then, on
the **load-generator machine**:

```bash
python run_load_tests.py --host <service-ip> --model llama3.2:3b \
    --rates 2 4 6 --duration-min 5 --repeats 3
python summarise_results.py results/llama3.2-3b/runs.csv
```

Repeat for each model. The rates come from C's requirements. Each run does the following:
1. sends 3 unrecorded warm-up requests (the first Ollama call loads the model)
2. reads `/stats`
3. runs JMeter
4. waits 15 s for the queue to drain
5. reads `/stats` again
6. cools down 30 s before the next run

Per-run outputs in `results/<model>/`: the `.jtl`, the JMeter log, an HTML
dashboard (`html/`), `runs.csv` (the manifest) and `loadgen_environment.txt`.

**How long each run should be:** p95/p99 need enough samples. Aim for at least
~100 requests per run (`rate_per_min × duration_min`): e.g. 10 min at 10 req/min,
2 min at 60 req/min. Where that isn't feasible, report the sample count with the
percentiles.

**Raw results are never overwritten.** If you run a config again, the new `.jtl`
gets a timestamp suffix and both rows stay in `runs.csv`. If an earlier run is
invalid (wrong model loaded, service crashed), delete its row from `runs.csv` and
say why in the report, but keep the `.jtl` in the repo.

**OneDrive:** if the repo is inside OneDrive, pause syncing during runs, or use
`--out C:\loadtest-results` and copy the results in afterwards. OneDrive can
lock files while JMeter writes them.

**`/stats` mismatch:** the increase in `total` should equal JMeter's successes.
If it's higher, JMeter timed out on requests that the server still finished
(and saved) later. That means the service was overloaded, so report it as an
error, not as a bug in the test.

## 5. Reconcile with the service logs

The spec requires the raw `.jtl` files to reconcile with the service logs. After
each model's runs, copy `logs/service.log` from the **service machine** into that
model's results folder, then:

```bash
python reconcile_logs.py results/llama3.2-1b/runs.csv --log results/llama3.2-1b/service.log
```

For every run, the script checks:
- **Ticket IDs**: every successful JMeter request's `id` is in the log as a
  `POST /tickets` with status 200. JMeter saves `ticket_id` in the `.jtl` for this.
- **Counts and status codes**: JMeter samples against log entries in the run's
  window. Warm-up requests are excluded. Each logged request is assigned to a run
  by its start time, so requests still queued from an overloaded run don't spill
  into the next one.
- **Timeouts**: JMeter timeouts appear in the log as 200s that the server finished
  after JMeter gave up. These are counted and explained, not flagged.
- **Model**: every matched log entry was served by the model the run is labelled with.
- **Clock offset** between the two machines, estimated from the matched IDs, so
  the two clocks don't need to agree exactly.

It writes `reconciliation.csv` next to `runs.csv`. A run marked `CHECK` needs
explaining in the report. If the log lines don't contain `ticket_id`, the script
falls back to counts and status codes. In that case, measure the clock offset
(service clock minus load-generator clock) and pass `--clock-offset-s`. Under heavy
overload, use a longer `--drain-s` so the queue empties before the next run.

Commit `runs.csv`, every `.jtl`, the copied `service.log` and `reconciliation.csv`.

## 6. Reading the summary

`summary_configs.csv` has one row per (model, rate) with mean and std across repeats:

- `error_rate`: failed / all requests. `error_breakdown` (in `summary_runs.csv`)
  splits failures by cause, e.g. `502 x3; Read timed out x12`.
- `throughput_rps`: successful requests per second over the run. If it stays
  below the arrival rate, the service is saturated.
- `lat_p50/p95/p99_ms`: end-to-end latency of **successful** requests.
  Failures are excluded, so always read latency together with the error rate.
- `server_p50_ms`: time spent inside `classify()`, as reported by the service.
- `overhead_p50_ms`: end-to-end minus server time, which is roughly queueing
  plus network plus DB. When this grows with the rate while the server time
  stays flat, requests are waiting for the model, not running slower.

Use `--skip-first-s 30` if the first seconds of a run still look like warm-up.

## Things to record for the environment writeup

- Both machines: CPU, RAM, GPU/VRAM, OS; Docker, Ollama and JMeter versions
  (`loadgen_environment.txt` covers the load generator).
- The network link (wired LAN or Wi-Fi). Measure the round-trip time with `ping <service-ip>`.
- Ollama settings: `OLLAMA_NUM_PARALLEL`, `OLLAMA_KEEP_ALIVE`, quantisation of each model.
- JMeter heap: for long or high-rate runs, set `HEAP=-Xms1g -Xmx2g` (or
  `JVM_ARGS`) before running.
