import pandas as pd
from pathlib import Path

def main():
	current_dir = Path.cwd()

	golden_file = current_dir / "golden_test_set.csv"

	tuning_file = current_dir / "odd_tuning_set.csv"
	test_file = current_dir /"even_test_set.csv"

	golden_df = pd.read_csv(golden_file)

	print("Golden count per label:", golden_df["human_label"].value_counts().sort_index())
	print("golden df shape:", golden_df.shape)
	print("before sorting:", golden_df.head(3))
	#Sort by row number
	golden_df = golden_df.sort_values(by="row")
	print("after sorting:", golden_df.head(3))

	tuning_df = golden_df[golden_df["row"] % 2 == 1]
	test_df = golden_df[golden_df["row"] % 2 == 0]

	print("\ntuning df count per label:", tuning_df["human_label"].value_counts().sort_index())
	print("tuning_df shape:", tuning_df.shape)
	print(tuning_df.head(3))

	print("\ntest df count per label:", test_df["human_label"].value_counts().sort_index())
	print("test df shape:", test_df.shape)
	print(test_df.head(3))

	#save to csv
	tuning_df.to_csv(tuning_file, index=False)
	test_df.to_csv(test_file, index=False)

if __name__ == "__main__":
	main()