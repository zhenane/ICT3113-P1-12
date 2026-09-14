# Raw Dataset

Put the team's 1,000-row extract from the Consumer Complaint Database CSV here
(rows `n*1000` to `n*1000+999`, where `n` is the registered team number).

This is reference data only — the assignment spec is explicit that the CSV is
**never loaded into the service directly**. It is read only by:
- the labelling process (Step 1, golden test set), and
- the JMeter load generator (Step 5, via CSV Data Set Config), which posts
  ticket narratives to `POST /tickets` one at a time.

Do not commit the full upstream CFPB dataset — only the team's assigned slice.
