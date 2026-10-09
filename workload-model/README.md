# Workload Model

Step 3 deliverable: quantitative estimates of the client's workload, with figures cited to public sources where possible or clearly marked as estimates with the estimation method explained.

This workload model uses the CFPB Consumer Complaint Database as the public ticket-volume source. The CFPB describes the database as public financial product and service complaint data that can be viewed, downloaded, and accessed through an API. CFPB also publishes the field reference for the dataset, including `Date received`, `Product`, `Sub-product`, `Issue`, `Sub-issue`, `Company`, and `Complaint ID`.

Sources:

- CFPB Consumer Complaint Database: https://www.consumerfinance.gov/data-research/consumer-complaints/
- CFPB field reference: https://cfpb.github.io/api/ccdb/fields.html
- CFPB data publication notes: https://www.consumerfinance.gov/complaint/data-use/
- CFPB search API overview: https://cfpb.github.io/ccdb5-api/

## Setup

From the repo folder:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install pandas numpy
```

Run the workload script:

```powershell
python .\analyze_complaints_workload.py
```

The script scans the full CSV and prints the August 2026 workload summary. On a normal laptop this can take about a minute because the CSV is several gigabytes.

## Workload Basis

The client workload basis is `complaints.csv`, focused on August 2026.

This model focuses on August records instead of the full annual dataset because the complete CSV is very large. Measuring a recent complete month gives a bounded workload sample while still reflecting current complaint behavior. The analysis first checks the top few companies in August to identify which companies contribute most to the dataset.

The top 5 companies by August 2026 complaint volume are:

```text
Company                                  August count  Peak date    Peak daily count
TRANSUNION INTERMEDIATE HOLDINGS, INC.       230,532  2026-08-19              11,190
Experian Information Solutions Inc.          190,322  2026-08-11               8,751
EQUIFAX, INC.                                180,184  2026-08-11               8,342
LEXISNEXIS                                     3,264  2026-08-27                 161
CAPITAL ONE FINANCIAL CORPORATION              3,050  2026-08-25                 142
```

The data is skewed: the first three companies are the large contributors, while the fourth and fifth companies are much smaller. Therefore, the workload model uses the top 3 companies as the basis for the main calculations.

## Complaint Volume

Monthly complaint volume is calculated as the average August complaint count across the top 3 companies:

```text
(230,532 + 190,322 + 180,184) / 3 = 200,346 complaints/month
```

This value represents the modeled monthly workload for a large complaint-heavy client.

## Average Arrival Rate

Convert monthly volume into an average daily ticket arrival rate:

```text
200,346 complaints/month / 31 days = 6,462.77 tickets/day
```

This is the average `POST /tickets` workload.

Optional conversion to requests per second:

```text
6,462.77 tickets/day / 24 hours / 3,600 seconds = 0.0748 POST /tickets requests/second
```

## Peak vs. Non-Peak Demand

Peak multiplier is calculated by comparing each top company's peak daily complaint count against that company's average daily complaint count for August.

```text
TRANSUNION INTERMEDIATE HOLDINGS, INC.
Average daily complaints = 230,532 / 31 = 7,436.516
Peak multiplier = 11,190 / 7,436.516 = 1.5047

Experian Information Solutions Inc.
Average daily complaints = 190,322 / 31 = 6,139.419
Peak multiplier = 8,751 / 6,139.419 = 1.4253

EQUIFAX, INC.
Average daily complaints = 180,184 / 31 = 5,812.387
Peak multiplier = 8,342 / 5,812.387 = 1.4352
```

Average peak multiplier:

```text
(1.5047 + 1.4253 + 1.4352) / 3 = 1.455
```

Peak `POST /tickets` workload:

```text
6,462.77 tickets/day * 1.455 = 9,403.33 tickets/day
9,403.33 tickets/day / 24 hours / 3,600 seconds = 0.1088 POST /tickets requests/second
```

## Agent-Side Search Rate

The CFPB dataset does not include internal support-agent behavior, so `GET /search` must be estimated from the ticket arrival rate.

Formula:

```text
GET /search rate = ticket rate * searches per ticket
```

Using `S` as the assumed number of searches per ticket:

```text
Average GET /search requests/day = 6,462.77 * S
Peak GET /search requests/day = 9,403.33 * S
```

For example, if `S = 1.2` searches per ticket:

```text
Average GET /search requests/day = 6,462.77 * 1.2 = 7,755.32
Peak GET /search requests/day = 9,403.33 * 1.2 = 11,284.00
Average GET /search requests/second = 0.0898
Peak GET /search requests/second = 0.1306
```

The search rate is an estimate. Replace `S` with production analytics if actual agent telemetry exists.

## Ticket-Length Distribution

Two ticket-length distributions are recorded.

The primary distribution measures the `narrative` field in `team_12_tickets.csv`, Team 12's 1,000-ticket subset extracted from `ict3113_tickets.csv` rows `12000` to `12999` inclusive. Length means whitespace-separated words, counted with `len(narrative.split())`; it is not a character or model-token count. Percentiles use linear interpolation at position `(N - 1) * percentile` in the sorted lengths, matching NumPy's default quantile method. Values below are rounded to whole words. Before rounding, the mean is 162.167, p95 is 320.10, and p99 is 353.03 words.

This describes the team's full traffic pool and does not change when the golden subset changes. Any golden-set-specific length distribution should be reported separately.

```text
Metric         Ticket length (words)
min                       29
25th perc                 97
median (p50)             147
mean                     162
75th perc                221
p90                      288
p95                      320
p99                      353
max                      384
```

Reproduce this distribution from the repository root (no third-party dependencies required):

```text
python workload-model/analyze_ticket_lengths.py data/raw/team_12_tickets.csv --team 12
```

The second distribution is based on August 2026 records from `complaints.csv`. The script defines ticket length as the character length of these concatenated structured fields:

```text
Product + Sub-product + Issue + Sub-issue
```

Measured August 2026 distribution from `complaints.csv`:

```text
Metric         Ticket length
min                       47
25th perc                136
median (p50)             141
mean                     145
75th perc                142
p90                      169
p95                      188
p99                      188
max                      230
```

The `complaints.csv` distribution is a structured-ticket proxy, not a full free-text narrative length. Use the primary narrative distribution above for inference-latency predictions and test-traffic descriptions; the structured-field proxy does not represent the input sent to the model.

## Requirements Handoff

Feed these values into `../requirements/`:

```text
workload_source = complaints.csv
workload_period = August 2026
workload_basis = average of top 3 highest-volume companies
modeled_monthly_ticket_volume = 200346
average_post_tickets_per_day = 6462.77
average_post_tickets_per_second = 0.0748
peak_multiplier = 1.455
peak_post_tickets_per_day = 9403.33
peak_post_tickets_per_second = 0.1088
searches_per_ticket = S
average_search_requests_per_day = 6462.77 * S
peak_search_requests_per_day = 9403.33 * S
ticket_length_source_primary = team_12_tickets.csv (extracted from ict3113_tickets.csv rows 12000-12999)
ticket_length_field = narrative
ticket_length_unit = whitespace-separated words
ticket_length_percentile_method = linear interpolation, rounded to whole words
ticket_length_p50_words = 147
ticket_length_p95_words = 320
ticket_length_p99_words = 353
complaints_csv_ticket_length_p50_chars = 141
complaints_csv_ticket_length_p95_chars = 188
complaints_csv_ticket_length_p99_chars = 188
```

Clearly label the source of each figure:

- Complaint volume: measured from local CFPB complaint CSV.
- Peak multiplier: measured from the top 3 companies in local CFPB complaint CSV.
- `POST /tickets` rate: calculated from modeled monthly complaint volume.
- `GET /search` rate: estimated from ticket rate multiplied by assumed searches per ticket.
- Primary narrative length: measured in words from `team_12_tickets.csv`, extracted from `ict3113_tickets.csv` rows `12000` to `12999`.
- Secondary structured-field proxy: measured in characters from `complaints.csv`; this has a different unit and does not represent full narratives.

## Recreating The Model

1. Download or place the CFPB `complaints.csv` file in the repo root.
2. Confirm `analyze_complaints_workload.py` is in the same folder as `complaints.csv`.
3. Install dependencies with `pip install pandas numpy`.
4. Run `python .\analyze_complaints_workload.py`.
5. Copy the printed figures into this README and into `../requirements/`.
6. Mark every value as either measured from CFPB data or estimated from assumptions.
