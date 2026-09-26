import pandas as pd
from pathlib import Path

VALID_LABELS = {
    "Credit reporting",
    "Debt collection",
    "Mortgage",
    "Credit card",
    "Bank account or service",
    "Consumer loan",
    "Money transfer or service"
}

def main():
    current_dir = Path.cwd()

    saki_file = current_dir / "labels_sakilan.csv"
    ernest_file = current_dir / "labels_ernest.csv"
    revision_file = current_dir / "revision_log.csv"

    output_file = current_dir / "golden_test_set.csv"

    df_saki = pd.read_csv(saki_file)
    df_ernest = pd.read_csv(ernest_file)
    df_revision = pd.read_csv(revision_file)

    saki = df_saki.set_index("row")
    ernest = df_ernest.set_index("row")
    revision = df_revision.set_index("row")

    final_labels = []

    unresolved = []

    for row in saki.index:
        saki_label = saki.loc[row, "human_label"]
        ernest_label = ernest.loc[row, "human_label"]

        # Case 1: Both annotators agree and neither is TBD/TBC
        if (
            saki_label == ernest_label
            and saki_label not in ["TBD", "TBC"]
        ):
            final_label = saki_label

        # Case 2: Disagreement or TBD -> use adjudicated revision log
        else:
            if row not in revision.index:
                unresolved.append(
                    f"row: {row} | "
                    f"saki: {saki_label} | "
                    f"ernest: {ernest_label} | "
                    f"missing from revision log"
                )
                continue

            final_label = revision.loc[row, "final"]

            if pd.isna(final_label) or final_label in ["TBD", "TBC"]:
                unresolved.append(
                    f"row: {row} | "
                    f"saki: {saki_label} | "
                    f"ernest: {ernest_label} | "
                    f"final: {final_label}"
                )
                continue

        # Check final label is valid
        if final_label not in VALID_LABELS:
            unresolved.append(
                f"row: {row} | invalid final label: {final_label}"
            )
            continue

        final_labels.append((row, final_label))

    # Stop if anything remains unresolved
    if unresolved:
        print("ERROR: The following rows are unresolved:\n")

        for item in unresolved:
            print(item)

        print("\nGolden test set was NOT created.")
        return

    # Create final golden set from Saki's original data
    golden = df_saki.copy()

    final_label_dict = dict(final_labels)
    golden["human_label"] = golden["row"].map(final_label_dict)

    # Keep relevant columns
    golden = golden[
        ["row", "source_label", "ticket", "human_label"]
    ]

    golden.to_csv(output_file, index=False)

    print(f"Golden test set created: {output_file}")
    print(f"Number of tickets: {len(golden)}")

    print("\nFinal label distribution:")
    print(golden["human_label"].value_counts())

    print("\nAgreement status:")

    agreements = 0
    adjudicated = 0

    for row in saki.index:
        saki_label = saki.loc[row, "human_label"]
        ernest_label = ernest.loc[row, "human_label"]

        if (
            saki_label == ernest_label
            and saki_label not in ["TBD", "TBC"]
        ):
            agreements += 1
        else:
            adjudicated += 1

    print(f"Direct agreements: {agreements}")
    print(f"Adjudicated rows: {adjudicated}")


if __name__ == "__main__":
    main()