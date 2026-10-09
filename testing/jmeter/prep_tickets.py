"""
Step 2 - Prepare ticket narratives for JMeter.

Reads the team's ticket CSV (default: data/raw/team_12_tickets.csv) and writes a
JMeter-safe file with ONE line per ticket, each line already being the complete
JSON request body for POST /tickets:

    body
    {"narrative": "..."}
    {"narrative": "..."}

Why this format:
  * Complaint narratives contain commas, quotes and newlines, which break
    JMeter's CSV Data Set Config. JSON-escaping turns newlines into \\n and
    quotes into \\", so every ticket fits on exactly one physical line.
  * The output is pure ASCII (non-ASCII is \\uXXXX-escaped), so there are no
    file-encoding surprises on Windows/macOS.
  * "$" is escaped as \\u0024 so JMeter can never mistake text in a narrative
    for a ${variable} or ${__function()}. The service decodes it back to "$".
  * Tab is used as the JMeter delimiter; JSON escaping guarantees no literal
    tabs remain in a line.
  * Blank narratives are dropped: the service rejects them with 422
    (min_length=1), which would show up as load-test errors unrelated to load.

Usage:
    python prep_tickets.py --input ../../data/raw/team_12_tickets.csv
    python prep_tickets.py --input data/golden_test_set.csv --output data/tickets_golden.tsv
"""

import argparse
import csv
import json
import random
import sys
from pathlib import Path

# Narratives can be long; lift the csv module's default 128 KB field cap.
csv.field_size_limit(min(sys.maxsize, 2**31 - 1))


def to_body(narrative: str) -> str:
    body = json.dumps({"narrative": narrative}, ensure_ascii=True)
    return body.replace("$", "\\u0024")


def main() -> None:
    here = Path(__file__).resolve().parent
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--input", default=str(here.parent.parent / "data" / "raw" / "team_12_tickets.csv"))
    ap.add_argument("--output", default=str(here / "data" / "tickets_jmeter.tsv"))
    ap.add_argument("--column", default="narrative", help="name of the narrative column")
    ap.add_argument("--shuffle", action="store_true",
                    help="shuffle ticket order (seeded) so runs don't always start with the same tickets")
    ap.add_argument("--seed", type=int, default=42)
    args = ap.parse_args()

    src = Path(args.input)
    if not src.exists():
        sys.exit(f"Input file not found: {src}")

    with src.open(newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        if args.column not in (reader.fieldnames or []):
            sys.exit(f"Column '{args.column}' not in {src.name}; columns are {reader.fieldnames}")
        narratives = [(row.get(args.column) or "") for row in reader]

    total = len(narratives)
    kept = [n.strip() for n in narratives if n and n.strip()]
    dropped = total - len(kept)

    if args.shuffle:
        random.Random(args.seed).shuffle(kept)

    bodies = [to_body(n) for n in kept]

    # Self-check: every line round-trips to the original narrative and is one line.
    for original, body in zip(kept, bodies):
        assert "\n" not in body and "\r" not in body and "\t" not in body
        assert json.loads(body)["narrative"] == original

    out = Path(args.output)
    out.parent.mkdir(parents=True, exist_ok=True)
    with out.open("w", encoding="ascii", newline="\n") as f:
        f.write("body\n")
        for b in bodies:
            f.write(b + "\n")

    lengths = sorted(len(n) for n in kept)
    print(f"Read {total} rows from {src}")
    print(f"Dropped {dropped} blank narratives")
    print(f"Wrote {len(bodies)} request bodies to {out}")
    if lengths:
        mid = lengths[len(lengths) // 2]
        print(f"Narrative length (chars): min {lengths[0]}, median {mid}, max {lengths[-1]}")


if __name__ == "__main__":
    main()
