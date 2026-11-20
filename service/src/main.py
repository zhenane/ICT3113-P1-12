import os

from fastapi import FastAPI, HTTPException, Query, Request

from .db import get_connection, init_db, insert_ticket, search_tickets
from .db import stats as db_stats
from .escalation import should_escalate
from .logging_middleware import RequestLoggingMiddleware, configure_logger
from .ollama_client import ClassificationError, classify
from .schemas import TicketIn, TicketOut

OLLAMA_HOST = os.environ.get("OLLAMA_HOST", "http://localhost:11434")
OLLAMA_MODEL = os.environ.get("OLLAMA_MODEL", "llama3.2:1b")
OLLAMA_MODEL_LARGE = os.environ.get("OLLAMA_MODEL_LARGE", "")
CASCADE_ENABLED = os.environ.get("CASCADE_ENABLED", "false").lower() == "true"
CASCADE_SHORT_WORDS = int(os.environ.get("CASCADE_SHORT_WORDS", "0"))
DB_PATH = os.environ.get("DB_PATH", "./data/tickets.db")
LOG_DIR = os.environ.get("LOG_DIR", "./logs")

app = FastAPI(title="Ticket Triage Service")

logger = configure_logger(LOG_DIR)
app.add_middleware(RequestLoggingMiddleware, logger=logger)

conn = get_connection(DB_PATH)
init_db(conn)


@app.post("/tickets", response_model=TicketOut)
def create_ticket(ticket: TicketIn, request: Request):
    if not CASCADE_ENABLED:
        return _classify_single(ticket, request)
    return _classify_cascade(ticket, request)


def _classify_single(ticket: TicketIn, request: Request) -> TicketOut:
    try:
        category, latency_ms, _raw = classify(
            ticket.narrative, host=OLLAMA_HOST, model=OLLAMA_MODEL
        )
    except ClassificationError as exc:
        request.state.extra = {"model": OLLAMA_MODEL, "error": str(exc)}
        raise HTTPException(status_code=502, detail=str(exc)) from exc

    result = insert_ticket(conn, ticket.narrative, category, OLLAMA_MODEL, latency_ms)

    request.state.extra = {
        "model": OLLAMA_MODEL,
        "ticket_id": result["id"],
        "category": category,
        "classification_latency_ms": round(latency_ms, 2),
        "narrative_chars": len(ticket.narrative),
    }
    return TicketOut(id=result["id"], category=category, latency_ms=round(latency_ms, 2))


def _classify_cascade(ticket: TicketIn, request: Request) -> TicketOut:
    small_category = None
    small_latency_ms = 0.0
    small_error = False

    # Step 1: classify with the small model
    try:
        small_category, small_latency_ms, _small_raw = classify(
            ticket.narrative, host=OLLAMA_HOST, model=OLLAMA_MODEL
        )
    except ClassificationError:
        small_error = True

    # Step 2: decide whether to escalate
    if small_error:
        escalated = True
        decision_reason = "small_error"
        word_count = len(ticket.narrative.strip().split())
    else:
        escalated, decision_reason, word_count = should_escalate(
            small_category, ticket.narrative, CASCADE_SHORT_WORDS
        )

    # Step 3: if escalated, classify with the large model
    if escalated:
        try:
            category, large_latency_ms, _large_raw = classify(
                ticket.narrative, host=OLLAMA_HOST, model=OLLAMA_MODEL_LARGE
            )
        except ClassificationError as exc:
            request.state.extra = {
                "small_model": OLLAMA_MODEL,
                "large_model": OLLAMA_MODEL_LARGE,
                "escalated": True,
                "decision_reason": decision_reason,
                "error": str(exc),
                "cascade_setting": f"L={CASCADE_SHORT_WORDS}",
            }
            raise HTTPException(status_code=502, detail=str(exc)) from exc

        total_latency_ms = small_latency_ms + large_latency_ms
        final_model = OLLAMA_MODEL_LARGE
    else:
        category = small_category
        large_latency_ms = None
        total_latency_ms = small_latency_ms
        final_model = OLLAMA_MODEL

    result = insert_ticket(conn, ticket.narrative, category, final_model, total_latency_ms)

    request.state.extra = {
        "ticket_id": result["id"],
        "cascade_setting": f"L={CASCADE_SHORT_WORDS}",
        "word_count": word_count,
        "small_model": OLLAMA_MODEL,
        "small_prediction": small_category,
        "small_latency_ms": round(small_latency_ms, 2),
        "escalated": escalated,
        "decision_reason": decision_reason,
        "large_model": OLLAMA_MODEL_LARGE if escalated else None,
        "large_prediction": category if escalated else None,
        "large_latency_ms": round(large_latency_ms, 2) if large_latency_ms is not None else None,
        "final_model": final_model,
        "final_category": category,
        "classification_latency_ms": round(total_latency_ms, 2),
        "narrative_chars": len(ticket.narrative),
    }
    return TicketOut(
        id=result["id"], category=category, latency_ms=round(total_latency_ms, 2)
    )


@app.get("/search")
def search(q: str = Query(..., min_length=1), limit: int = Query(100, ge=1, le=1000)):
    results = search_tickets(conn, q, limit=limit)
    return {"query": q, "count": len(results), "results": results}


@app.get("/stats")
def get_stats():
    return db_stats(conn)


@app.get("/health")
def health():
    info = {"status": "ok", "model": OLLAMA_MODEL}
    if CASCADE_ENABLED:
        info["cascade"] = True
        info["large_model"] = OLLAMA_MODEL_LARGE
        info["cascade_short_words"] = CASCADE_SHORT_WORDS
    return info
