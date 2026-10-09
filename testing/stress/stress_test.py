"""
Stress test: step the arrival rate up until the service breaks its SLO.

This is a thin wrapper around testing/jmeter/run_load_tests.py with stress-test
defaults:
  * each step is a separate open-loop run at a constant rate (clean per-step data)
  * 1 repeat per step (use --repeats 3 to confirm the breaking step)
  * stops at the first step whose mean p95 or error rate breaks the SLO
  * results go to testing/stress/results/<model>/

Fill in the SLO numbers from C's requirements. Example:
    python stress_test.py --host 192.168.1.50 --model llama3.2:3b \
        --rates 2 4 6 8 12 16 24 --duration-min 3 \
        --slo-p95-ms 10000 --slo-error-rate 0.01

Any other run_load_tests.py option (--timeout-ms, --cooldown-s, ...) is passed through.
Then summarise:  python ../jmeter/summarise_results.py results/<model>/runs.csv
"""

import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent / "jmeter"))
import run_load_tests  # noqa: E402


def main():
    argv = sys.argv[1:]
    if any(a in ("-h", "--help") for a in argv):
        print(__doc__)
        print("Options of run_load_tests.py:")
        run_load_tests.main(["--help"])
        return
    if "--slo-p95-ms" not in argv and "--slo-error-rate" not in argv:
        sys.exit("A stress test needs a breaking criterion: pass --slo-p95-ms and/or --slo-error-rate.")
    defaults = []
    if "--repeats" not in argv:
        defaults += ["--repeats", "1"]
    if "--out" not in argv:
        defaults += ["--out", str(HERE / "results")]
    if "--stop-on-break" not in argv and "--no-stop" not in argv:
        defaults += ["--stop-on-break"]
    argv = [a for a in argv if a != "--no-stop"]
    run_load_tests.main(defaults + argv)


if __name__ == "__main__":
    main()
