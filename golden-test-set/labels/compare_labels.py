import pandas as pd
from pathlib import Path
from sklearn.metrics import cohen_kappa_score

ANNOTATORS = ["sakilan", "ernest"]

def main():
	current_dir = Path.cwd()
	saki_file = current_dir / "labels_sakilan.csv"
	ernest_file = current_dir / "labels_ernest.csv"

	df_saki = pd.read_csv(saki_file)
	df_ernest = pd.read_csv(ernest_file)

	saki_indexed = df_saki.set_index('row')
	ernest_indexed = df_ernest.set_index('row')

	assert saki_indexed.index.equals(ernest_indexed.index), \
    "The two files do not contain the same row indices."

	labels_saki = saki_indexed['human_label']
	labels_ernest = ernest_indexed['human_label']

	# Raw agreement
	agreement = (labels_saki == labels_ernest).mean()

	# Cohen's kappa
	kappa = cohen_kappa_score(labels_saki, labels_ernest)

	print(f"Raw agreement: {agreement:.4f} ({agreement * 100:.2f}%)")
	print(f"Cohen's kappa: {kappa:.4f}")

	cond_diff = saki_indexed['human_label'] != ernest_indexed['human_label']
	cond_particular = (saki_indexed['human_label'] == 'TBD') | (ernest_indexed['human_label'] == 'TBD') | (saki_indexed['human_label'] == 'TBC') | (ernest_indexed['human_label'] == 'TBC')

	final_mask = cond_diff | cond_particular

	matched_rows = saki_indexed[final_mask]

	for idx in matched_rows.index:
		val1 = saki_indexed.loc[idx, 'human_label']
		val2 = ernest_indexed.loc[idx, 'human_label']
		print(f"row: {idx} | saki label: {val1} | ernest label: {val2}")

if __name__ == "__main__":
	main()