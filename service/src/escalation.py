"""Cascade escalation rule — category-based with a word-length knob.

Designed by C from tuning-set analysis (see assignment2/cascade-design/escalation_rule.md).

Safe set: {Credit reporting, Debt collection, Credit card}
  These are the categories where llama3.2:3b has >=80% precision on the tuning set.

Accept the small model's answer if:
  - its predicted category is in the safe set, OR
  - the ticket is at most L words long (L is the setting).
Otherwise escalate to the large model.

Settings:
  S1: L = 0  (category only — the length branch never fires)
  S2: L = 80 (also accept short tickets regardless of category)
"""

SAFE_CATEGORIES = frozenset({
    "Credit reporting",
    "Debt collection",
    "Credit card",
})


def should_escalate(
    predicted_category: str,
    narrative: str,
    short_words_limit: int,
) -> tuple[bool, str, int]:
    """Decide whether to escalate a ticket.

    Returns (escalated, decision_reason, word_count).
    decision_reason is one of:
      "safe_category" — accepted, predicted category is in the safe set
      "short_ticket"  — accepted, ticket word count <= L
      "unsafe_category" — escalated
    """
    word_count = len(narrative.strip().split())

    if predicted_category in SAFE_CATEGORIES:
        return False, "safe_category", word_count

    if short_words_limit > 0 and word_count <= short_words_limit:
        return False, "short_ticket", word_count

    return True, "unsafe_category", word_count
