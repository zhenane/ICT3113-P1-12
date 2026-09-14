import os

from fastapi import FastAPI, HTTPException, Query, Request

from .db import get_connection, init_db, insert_ticket, search_tickets
from .db import stats as db_stats
from .logging_middleware import RequestLoggingMiddleware, configure_logger
from .ollama_client import ClassificationError, classify
from .schemas import TicketIn, TicketOut

OLLAMA_HOST = os.environ.get("OLLAMA_HOST", "http://localhost:11434")
OLLAMA_MODEL = os.environ.get("OLLAMA_MODEL", "llama3.2:1b")
DB_PATH = os.environ.get("DB_PATH", "./data/tickets.db")
LOG_DIR = os.environ.get("LOG_DIR", "./logs")

app = FastAPI(title="Ticket Triage Service")

logger = configure_logger(LOG_DIR)
app.add_middleware(RequestLoggingMiddleware, logger=logger)

conn = get_connection(DB_PATH)
init_db(conn)


@app.post("/tickets", response_model=TicketOut)
def create_ticket(ticket: TicketIn, request: Request):
    try:
        category, latency_ms, _raw_response = classify(
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


@app.get("/search")
def search(q: str = Query(..., min_length=1), limit: int = Query(100, ge=1, le=1000)):
    results = search_tickets(conn, q, limit=limit)
    return {"query": q, "count": len(results), "results": results}


@app.get("/stats")
def get_stats():
    return db_stats(conn)


@app.get("/health")
def health():
    return {"status": "ok", "model": OLLAMA_MODEL}
