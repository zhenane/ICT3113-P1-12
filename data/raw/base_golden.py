import pandas as pd
from pathlib import Path

ANNOTATORS = ["sakilan", "ernest"]

def main():
	current_dir = Path.cwd()
	input_file = current_dir / "team_12_tickets.csv"

	df_origin = pd.read_csv(input_file)

	print(df_origin["source_label"].unique())
	print(df_origin["source_label"].value_counts(dropna=False))
	stratified_df = df_origin.groupby("source_label", group_keys=False).apply(lambda x: x.sample(n=28, random_state=42))
	print(stratified_df["source_label"].value_counts(dropna=False))
	df_new = stratified_df.reindex(columns=stratified_df.columns.tolist() + ["human_label", "notes"])

	for name in ANNOTATORS:
		df_new.to_csv(current_dir/f"labels_{name}.csv", index=False)


if __name__ == "__main__":
	main()