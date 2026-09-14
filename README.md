# ICT3113-P1-12
Performance Testing and Optimisation — Assignment 1

Client scenario: automatic classification of financial services complaint
tickets into 7 categories, using an Ollama CPU-only backend (no public
model APIs).

## Repository layout

| Folder | Assignment step | Contents |
|---|---|---|
| [`data/raw/`](data/raw/) | Dataset | Team's 1,000-row CFPB extract |
| [`golden-test-set/`](golden-test-set/) | Step 1 | Labelling protocol, independent labels, agreement stats, frozen final set |
| [`service/`](service/) | Step 2 | Baseline Ticket Triage Service (Docker) |
| [`workload-model/`](workload-model/) | Step 3 | Ticket volume / search rate / peak estimates, cited |
| [`requirements/`](requirements/) | Step 4 | Candidate models (pinned) + testable requirements |
| [`predictions/`](predictions/) | Step 4 | Frozen prediction record |
| [`testing/`](testing/) | Step 5 | JMeter plans/results, service logs, accuracy results, stress test |
| [`docs/`](docs/) | Step 6 / submission | Slide deck, references |

## Ordering constraint

`golden-test-set/final/` and `predictions/` must be committed **before**
any commit under `testing/`. Commit history is the evidence that labels and
predictions predate measurement — do not reorder or rewrite this history.
