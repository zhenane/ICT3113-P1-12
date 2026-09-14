# Ticket Triage Service

Step 2 deliverable: the baseline web service, run via Docker.

Must expose, at minimum:
- `POST /tickets` — accepts one ticket narrative, classifies it via the
  Ollama backend (synchronously — the request does not return until
  classification completes), stores the result, returns the assigned
  category.
- `GET /search` — returns stored tickets matching a text query.
- `GET /stats` — returns counts of stored tickets by category.

Baseline constraints: sequential calls, no caching, no queuing. The service
starts empty; tickets enter only through `POST /tickets` (no bulk import from
`../data/raw/`).

Expected layout:
- `src/` — service source code
- `Dockerfile`
- `docker-compose.yml` — should also define/reference the Ollama backend so
  the whole stack is buildable with `docker compose up`
