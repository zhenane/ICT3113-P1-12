import re
import time

import httpx

from .categories import CATEGORIES

PROMPT_TEMPLATE = """You are a ticket triage classifier for a financial services complaints desk.
Classify the following customer complaint into exactly one of these categories:
{options}

Reply with ONLY the number of the category. Do not explain your answer.

Complaint:
\"\"\"
{narrative}
\"\"\"

Category number:"""


class ClassificationError(Exception):
    """Raised when Ollama cannot be reached or its output cannot be mapped to a category.

    Deliberately not swallowed into a default category: a silent fallback would
    corrupt the accuracy measurements the assignment is graded on. Callers
    should surface this as an error response so it shows up in JMeter's error
    rate and the service logs, not as a fabricated classification.
    """


def build_prompt(narrative: str) -> str:
    options = "\n".join(f"{i + 1}. {c}" for i, c in enumerate(CATEGORIES))
    return PROMPT_TEMPLATE.format(options=options, narrative=narrative.strip())


def parse_category(raw_text: str) -> str | None:
    match = re.search(r"[1-7]", raw_text)
    if match:
        return CATEGORIES[int(match.group()) - 1]

    lowered = raw_text.lower()
    for category in CATEGORIES:
        if category.lower() in lowered:
            return category

    return None


def classify(narrative: str, *, host: str, model: str, timeout: float = 60.0) -> tuple[str, float, str]:
    """Classify one ticket narrative. Returns (category, latency_ms, raw_model_output)."""
    prompt = build_prompt(narrative)
    started = time.perf_counter()

    try:
        response = httpx.post(
            f"{host}/api/generate",
            json={
                "model": model,
                "prompt": prompt,
                "stream": False,
                "options": {"temperature": 0},
            },
            timeout=timeout,
        )
        response.raise_for_status()
    except httpx.HTTPError as exc:
        raise ClassificationError(f"Ollama request failed: {exc}") from exc

    latency_ms = (time.perf_counter() - started) * 1000
    raw_text = response.json().get("response", "")

    category = parse_category(raw_text)
    if category is None:
        raise ClassificationError(f"Could not parse a category from model output: {raw_text!r}")

    return category, latency_ms, raw_text
