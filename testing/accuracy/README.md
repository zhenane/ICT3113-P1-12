# Accuracy test

Sends every golden-set ticket (`golden-test-set/final/golden_test_set.csv`, 196
tickets) through `POST /tickets` for each candidate model. It then reports overall
and per-category accuracy, with a confusion matrix, against the golden labels.

## Procedure (for each model)

1. On the service machine, switch the model and restart only the service:
   `OLLAMA_MODEL=<model> docker compose up -d triage-service`.
   Then check it answers with one `curl` POST.
2. Make sure no load test is running against the service at the same time.
3. On the load-generator machine, from `testing/accuracy/`:
   ```bash
   python run_accuracy.py --host 192.168.0.10 --model llama3.2:1b
   ```
   Tickets are sent one at a time (no concurrency), after 2 unscored warm-up
   requests. Every prediction is saved as soon as it arrives. If the run is
   interrupted, run the same command again and it continues where it stopped.
4. If some requests failed (HTTP error or timeout), they count as wrong. To re-send
   only those tickets, run the same command with `--retry-errors`, and note this in
   the report.
5. Commit `results/<model>/`.

Expected time: 196 × the model's average latency. At about 3 s per ticket for
`llama3.2:1b` that's roughly 10 min. Larger models take longer.

## Outputs (`results/<model>/`)

| File | Contents |
|---|---|
| `predictions.csv` | One row per ticket: golden label, predicted label, correct, HTTP status, latency, ticket id |
| `metrics.csv` | Per category: support, precision, recall, F1, plus overall accuracy and macro-F1 |
| `confusion_matrix.csv` | Rows = golden label, columns = predicted label (plus `(error)` if any requests failed) |
| `accuracy_report.md` | All of the above as tables, plus pass/fail against the requirements |

To re-score saved predictions without calling the service:
`python run_accuracy.py --model llama3.2:1b --score-only`.

## Requirements checked (from `requirements/README.md`)

- Overall accuracy ≥ 75%
- Macro-F1 ≥ 0.65, computed over the categories with ≥ 20 golden examples. These
  are the 7 main categories. `Out-of-scope` has only 1 example; it is reported but
  is not a gate and is left out of the gated macro-F1. Macro-F1 over all 8
  categories is reported for reference.
- Recall ≥ 55% for each category with ≥ 20 golden examples.

Golden label counts: Credit reporting 36, Bank account or service 30, Debt
collection 30, Mortgage 29, Money transfer or service 26, Credit card 24, Consumer
loan 20, Out-of-scope 1.
