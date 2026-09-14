# Testing

Step 5 deliverable. Do not begin populating this folder until
`../golden-test-set/final/` and `../predictions/` are both committed —
that ordering is required by the assignment.

Subfolders:
- `jmeter/plans/` — the `.jmx` JMeter test plans (open-loop: Open Model
  Thread Group or Precise Throughput Timer). Keep one plan per test type
  (load, stress) and note the arrival rates covered.
- `jmeter/results/` — raw `.jtl` result files, one set per run. Three runs
  per configuration; name files so run/config are identifiable, e.g.
  `load_<model>_<rate>rps_run1.jtl`.
- `logs/` — service request logs for every run reported, so every number
  in the final document can be traced back to a log entry.
- `accuracy/` — per-candidate-model accuracy results against the golden
  set: overall + per-category accuracy, confusion matrices.
- `stress/` — the one stress test: design, execution notes, and the limit
  found (e.g. max sustainable arrival rate, or concurrency at which
  failures begin).
