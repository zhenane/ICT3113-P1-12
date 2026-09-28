from collections import Counter

import numpy as np
import pandas as pd


CSV_PATH = "complaints.csv"
CHUNK_SIZE = 500_000
AUGUST_2026_START = "2026-08-01"
AUGUST_2026_END = "2026-08-31"
TEXT_COLUMNS = ["Product", "Sub-product", "Issue", "Sub-issue"]
USE_COLUMNS = ["Date received", "Company", *TEXT_COLUMNS]


def clean_ticket_lengths(frame):
    ticket_text = (
        frame[TEXT_COLUMNS]
        .fillna("")
        .agg(" ".join, axis=1)
        .str.replace(r"\s+", " ", regex=True)
        .str.strip()
    )
    return ticket_text.str.len().to_numpy(dtype=np.int64)


company_counts = Counter()
daily_counts = Counter()
ticket_lengths = []
record_count = 0

for chunk in pd.read_csv(
    CSV_PATH,
    usecols=USE_COLUMNS,
    chunksize=CHUNK_SIZE,
    dtype="string",
):
    date_received = chunk["Date received"]
    august_mask = date_received.between(AUGUST_2026_START, AUGUST_2026_END)
    august_chunk = chunk.loc[august_mask].copy()

    if august_chunk.empty:
        continue

    record_count += len(august_chunk)
    companies = august_chunk["Company"].dropna()
    company_counts.update(companies)

    date_company_pairs = august_chunk[["Company", "Date received"]].dropna()
    daily_counts.update(map(tuple, date_company_pairs[["Company", "Date received"]].to_numpy()))

    ticket_lengths.extend(clean_ticket_lengths(august_chunk))

top_companies = pd.DataFrame(
    company_counts.most_common(5),
    columns=["Company", "August complaint count"],
)

if top_companies.empty:
    top_companies_with_peak_day = top_companies.assign(
        **{
            "Peak complaint date": pd.Series(dtype="string"),
            "Peak daily complaint count": pd.Series(dtype="Int64"),
        }
    )
else:
    top_company_names = set(top_companies["Company"])
    top_daily_counts = [
        (company, date, count)
        for (company, date), count in daily_counts.items()
        if company in top_company_names
    ]

    daily_counts_frame = pd.DataFrame(
        top_daily_counts,
        columns=["Company", "Peak complaint date", "Peak daily complaint count"],
    )

    peak_day_by_company = (
        daily_counts_frame.sort_values(
            ["Company", "Peak daily complaint count", "Peak complaint date"],
            ascending=[True, False, True],
        )
        .drop_duplicates("Company")
    )

    top_companies_with_peak_day = top_companies.merge(
        peak_day_by_company,
        on="Company",
        how="left",
    )

if ticket_lengths:
    lengths = np.asarray(ticket_lengths, dtype=np.int64)
    ticket_length_distribution = pd.Series(
        {
            "min": lengths.min(),
            "25th perc": np.quantile(lengths, 0.25),
            "median (p50)": np.quantile(lengths, 0.50),
            "mean": lengths.mean(),
            "75th perc": np.quantile(lengths, 0.75),
            "p90": np.quantile(lengths, 0.90),
            "p95": np.quantile(lengths, 0.95),
            "p99": np.quantile(lengths, 0.99),
            "max": lengths.max(),
        }
    )
else:
    ticket_length_distribution = pd.Series(
        {
            "min": pd.NA,
            "25th perc": pd.NA,
            "median (p50)": pd.NA,
            "mean": pd.NA,
            "75th perc": pd.NA,
            "p90": pd.NA,
            "p95": pd.NA,
            "p99": pd.NA,
            "max": pd.NA,
        }
    )

ticket_length_distribution = (
    ticket_length_distribution
    .round()
    .astype("Int64")
    .reset_index()
)
ticket_length_distribution.columns = ["Metric", "Ticket length"]

print("Number of records in August 2026:", record_count)
print("\nTop 5 companies by complaints in August 2026:")
print(top_companies_with_peak_day.to_string(index=False))

print("\nTicket-length distribution for August 2026:")
print(ticket_length_distribution.to_string(index=False))
