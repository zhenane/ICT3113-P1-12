# Ticket Triage Service

Step 2 deliverable: the baseline web service, run via Docker.

Stack: FastAPI (sync handlers — FastAPI runs them in a threadpool, no manual
async optimisation), SQLite for storage, Ollama for classification over
HTTP. Deliberately unoptimised: sequential classification call per request,
no caching, no queuing — that's the point of the baseline.

## Endpoints

- `POST /tickets` — body `{"narrative": "..."}`. Classifies synchronously via
  Ollama (the response only returns once classification is done), stores the
  ticket, returns `{"id", "category", "latency_ms"}`. Returns `502` if the
  model can't be reached or its output can't be mapped to one of the 7
  categories — this is intentional: a silent fallback category would corrupt
  the accuracy measurements, so failures surface as errors instead (visible
  in JMeter's error rate and in the service log).
- `GET /search?q=...&limit=100` — substring match against narrative/category.
- `GET /stats` — `{"total", "by_category": {...}}`, all 7 categories always
  present (zero-filled).
- `GET /health` — liveness check, not part of the assignment spec.

## Running it

```bash
cd service
cp .env.example .env   # edit OLLAMA_MODEL if needed
docker compose up --build -d

# pull a model into the ollama container (first run only)
docker compose exec ollama ollama pull llama3.2:1b
```

Service is then at `http://localhost:8000`. Swap models by changing
`OLLAMA_MODEL` in `.env` and restarting the `triage-service` container —
one container runs one pinned model at a time, matching the assignment's
requirement to test each candidate model by exact tag+digest.

```bash
curl -X POST localhost:8000/tickets -H 'Content-Type: application/json' \
  -d '{"narrative": "My mortgage servicer keeps reporting a late payment that never happened."}'

curl 'localhost:8000/search?q=mortgage'
curl localhost:8000/stats
```

## Logs

Every request is logged as one JSON line to `logs/service.log` (bind-mounted
from the container), including method, path, status code, and latency; the
`/tickets` handler additionally logs the model, assigned category, and
ticket id. `data/` and `logs/` are gitignored during development — when
running an official benchmark, copy the relevant log file (and note the
model + config it corresponds to) into
[`../testing/logs/`](../testing/logs/) so it can be reconciled against the
JMeter `.jtl` for that run.

## Notes

- The service starts empty; the SQLite file lives at `data/tickets.db`
  inside the bind mount. Delete it to reset between test runs.
- `docker-compose.yml` runs Ollama CPU-only (no GPU passthrough), per the
  client's hardware constraint.
- For real load/stress test runs, per the assignment the load generator
  (JMeter) must run on a **separate machine** from this stack — don't run
  JMeter on the same host you're benchmarking.
