# Assignment 2 — Step 2a: Viable Model Pairs and Memory Check

Owner: C (pair analysis), A + C (memory check on the inference host).

## 1. Which pairs are viable?

A cascade needs a **fast** first model and an **accurate** second model, both from
the A1 candidate set (tags and digests in
[`requirements/README.md`](../../requirements/README.md)). Inputs: A1 per-ticket
records, `testing/accuracy/results/<model>/predictions.csv`, tuning rows only for
accuracy.

| Model | Disk size | A1 median latency (tuning rows) | Tuning accuracy (91) | Role |
|---|---:|---:|---:|---|
| `llama3.2:1b` | 1.3 GB | 1.9 s | 16 / 91 = 17.6% | small candidate |
| `llama3.2:3b` | 2.0 GB | 3.5 s | 25 / 91 = 27.5% | small candidate |
| `qwen3:1.7b` | 1.4 GB | 15.2 s | 55 / 91 = 60.4% | **only viable large model** |
| `qwen3:4b` | 2.5 GB | — (all 196 A1 requests timed out at 60 s) | 0 / 91 | not viable |

Reasoning:

- **Large model = `qwen3:1.7b`.** It is the only candidate that classifies
  usefully, and it is the top model. `qwen3:4b` cannot be the large model: under
  the unchanged service it never returned a classification inside the 60 s
  timeout, so every escalated ticket would fail.
- **"Small" means fast, not fewer parameters.** `llama3.2:3b` has more parameters
  than `qwen3:1.7b` but is about 4× faster per ticket (3.5 s vs 15.2 s median). The
  likely reason is that Qwen3 generates a reasoning ("thinking") trace before the
  category number. This is unconfirmed because the service does not log raw model
  output. Either way, the cost is measured, and cost is what the cascade depends on.
### All six pairings

Four candidates give six pairings. In each, "small" is the faster model of the two.
The reverse order is never useful, because it puts the slower model first and the
weaker one second. Every figure is from the tuning set (n = 91), produced by
[`analyse_tuning.py`](analyse_tuning.py) → [`tuning_pair_matrix.csv`](tuning_pair_matrix.csv).

Viability tests:

1. **Large model returns answers.** Escalated tickets must actually get classified.
2. **Small model is clearly faster.** Otherwise the cascade cannot save time.
3. **Ceiling ≥ limit.** "Ceiling" is the accuracy a *perfect* rule could reach:
   a ticket counts as right if either model got it right. If the ceiling is below
   the overall limit, no rule can make the pair pass. For a tuning-set guide, apply
   the brief's −10 pp to the top model's tuning score: 60.4% − 10 = 50.4%, so
   **at least 46 / 91**. The real limit is 48 / 105 on the test set.
4. **The small model has answers a rule can find.** At least one predicted
   category must be reliable (≥ 80% precision, seen ≥ 2 times). Otherwise the rule
   cannot tell its right answers from its wrong ones.
5. **Both fit in memory.** All pairs are ≤ 4.5 GB on disk against about 15.6 GiB,
   so this needs only the `ollama ps` confirmation below.

| # | Small → Large | Median s (small / large) | Right / 91 (small / large) | Large answered | **Ceiling** | Best small precision | Disk | Verdict |
|---|---|---:|---:|---:|---:|---:|---:|---|
| 1 | **`llama3.2:3b` → `qwen3:1.7b`** | 3.5 / 15.2 | 25 / 55 | 90 / 91 | **58** | 100% (3 safe categories) | 3.4 GB | **Viable: chosen** |
| 2 | `llama3.2:1b` → `qwen3:1.7b` | 1.9 / 15.2 | 16 / 55 | 90 / 91 | **61** | 29% | 2.7 GB | **Viable but weak: backup** |
| 3 | `llama3.2:1b` → `llama3.2:3b` | 1.9 / 3.5 | 16 / 25 | 91 / 91 | 37 | 29% | 3.3 GB | Not viable: ceiling 37 < 46 |
| 4 | `llama3.2:1b` → `qwen3:4b` | 1.9 / — | 16 / 0 | **0 / 91** | 16 | 29% | 3.8 GB | Not viable: large never answers |
| 5 | `llama3.2:3b` → `qwen3:4b` | 3.5 / — | 25 / 0 | **0 / 91** | 25 | 100% | 4.5 GB | Not viable: large never answers |
| 6 | `qwen3:1.7b` → `qwen3:4b` | 15.2 / — | 55 / 0 | **0 / 91** | 55 | 100% | 3.9 GB | Not viable: large never answers; small is already the top model |

Notes on the two viable pairs:

- **Pair 1 (chosen).** Its small model has a usable signal. When `llama3.2:3b`
  predicts Credit card, Credit reporting or Debt collection, it is right 12 of 14
  times on the tuning set. A category rule therefore keeps qwen-level accuracy
  (55 / 91) while answering 15% of tickets cheaply.
- **Pair 2 (backup).** It has a higher ceiling (61) and a faster small model, but
  that ceiling is out of reach in practice. No category `llama3.2:1b` predicts is
  right more than 29% of the time, so any rule that accepts its answers mostly
  accepts wrong ones. The best category rule (accept "Credit reporting") reaches
  52 / 91 at 84.6% escalation, and 10 of its 14 accepted answers are wrong. Keep it
  only as the fallback if pair 1 fails the memory check.
- **Ceiling gap.** Even a perfect rule would add only 3 tickets to `qwen3:1.7b`
  alone (58 vs 55) for pair 1, and 6 for pair 2. The small models mostly get right
  the tickets `qwen3:1.7b` already gets right. The cascade's possible gain is
  therefore **speed only, not accuracy**.
- **Pairs with `qwen3:4b`.** Pairs 4–6 are only infeasible because `qwen3:4b`
  timed out on all 196 A1 requests under the unchanged service. That is the A1
  result, and the brief fixes the A1 system, so it is not re-tested here.

**Memory-check shortlist for A:** pair 1 (`llama3.2:3b` + `qwen3:1.7b`), and pair 2
(`llama3.2:1b` + `qwen3:1.7b`) only if pair 1 does not stay resident.

## 2. Memory check (A + C, on the Ryzen 5 3600 host)

Budget: Docker memory ≈ 15.57 GiB (`docker info`, recorded in
[`predictions/README.md`](../../predictions/README.md)), no container memory limit.
The chosen pair is 2.0 + 1.4 = 3.4 GB on disk (sizes from
[`requirements/README.md`](../../requirements/README.md)). Each loaded model also
needs a KV cache for its context window. Both `llama3.2:3b` and `qwen3:1.7b` have 28
layers with 8 key/value heads of dimension 128. At the 4096-token context recorded
in A1, with Ollama's default 16-bit cache, that is
28 × 8 × 128 × 2 (K and V) × 2 bytes × 4096 ≈ 0.47 GB per model. So we expect
about 4.5 GB resident in total, under a third of the budget. This is an estimate;
`ollama ps` reports the real SIZE. **The brief still requires `ollama ps` evidence**,
so run the check below rather than relying on this estimate.

Save all output to `assignment2/cascade-design/memory-check/` (one text file per
step) and commit it.

```bash
cd service
# 0. Record Ollama settings that must stay constant for every A2 configuration
docker compose exec ollama ollama -v                         > ../assignment2/cascade-design/memory-check/00_version.txt
docker compose exec ollama env | grep OLLAMA                 > ../assignment2/cascade-design/memory-check/00_env.txt
docker info --format "CPUs={{.NCPU}} Mem={{.MemTotal}}"      >> ../assignment2/cascade-design/memory-check/00_env.txt

# 1. Clean start: no model loaded
docker compose restart ollama
docker compose exec ollama ollama ps                          > ../assignment2/cascade-design/memory-check/01_ps_empty.txt

# 2. Load the small model, run 2-3 different tickets through it
docker compose exec ollama ollama run llama3.2:3b "<ticket narrative 1>"
docker compose exec ollama ollama run llama3.2:3b "<ticket narrative 2>"

# 3. Load the large model, run 2-3 different tickets through it
docker compose exec ollama ollama run qwen3:1.7b "<ticket narrative 3>"
docker compose exec ollama ollama run qwen3:1.7b "<ticket narrative 4>"

# 4. Both must be listed, with PROCESSOR = 100% CPU
docker compose exec ollama ollama ps                          > ../assignment2/cascade-design/memory-check/02_ps_both.txt
docker stats --no-stream                                      > ../assignment2/cascade-design/memory-check/03_docker_stats.txt

# 5. Alternate once more, small -> large -> small, then confirm nothing was evicted
docker compose exec ollama ollama run llama3.2:3b "<ticket narrative 5>"
docker compose exec ollama ollama ps                          > ../assignment2/cascade-design/memory-check/04_ps_after_alternating.txt
```

Use tickets from rows outside the golden set (for example the JMeter workload pool),
not golden-set tickets. Use different narratives each time, because Ollama caches
repeated prompts.

**Pass criterion:** `02_ps_both.txt` and `04_ps_after_alternating.txt` each list
**both** `llama3.2:3b` and `qwen3:1.7b`, and the second call to each model in steps
2, 3 and 5 does not show a multi-second reload delay.

**Two settings to fix and record once (A), for every configuration:**

- **Keep-alive.** Ollama unloads an idle model after 5 minutes by default. In a
  cascade run the large model can sit idle during warm-up, while `/stats` is called,
  or through a run of accepted tickets, and would then reload on the next
  escalation. That would be a loading result, not a cascade result. Set one
  keep-alive value (for example `OLLAMA_KEEP_ALIVE=30m` on the `ollama` service in
  `docker-compose.yml`, or `keep_alive` in every `/api/generate` call) and use the
  same value for the single-model configurations too.
- **Max loaded models / parallelism.** Record `OLLAMA_MAX_LOADED_MODELS` and
  `OLLAMA_NUM_PARALLEL` as they are (`00_env.txt`, defaults if unset) and do not
  change them between configurations. The brief forbids changing parallelism.

If both models do **not** stay resident: try `llama3.2:1b` + `qwen3:1.7b` (2.7 GB). If
that also fails, the cascade is not feasible on this machine. Report it with the
`ollama ps` evidence and recommend a single model.

## Result

_To be filled in by A + C after the check: date, Ollama version, `ollama ps` output
for both models (NAME, SIZE, PROCESSOR, UNTIL), and pass/fail._
