import pandas as pd
from pathlib import Path

TEAM_NUMBER = 12

def main():
	current_path = Path.cwd()
	input_file = current_path / "ict3113_tickets.csv"
	output_file = current_path / f"team_{TEAM_NUMBER}_tickets.csv"

	df = pd.read_csv(input_file)

	filtered_df = df[df["row"].between(TEAM_NUMBER * 1000, (TEAM_NUMBER * 1000) + 999)]

	filtered_df.to_csv(output_file, index=False)

if __name__ == "__main__":
	main()