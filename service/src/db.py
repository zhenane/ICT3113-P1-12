import sqlite3
import threading
import time
from pathlib import Path

from .categories import CATEGORIES

_SCHEMA = """
CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    narrative TEXT NOT NULL,
    category TEXT NOT NULL,
    model TEXT NOT NULL,
    latency_ms REAL NOT NULL,
    created_at REAL NOT NULL
);
"""

_write_lock = threading.Lock()


def get_connection(db_path: str) -> sqlite3.Connection:
    Path(db_path).parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(db_path, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn


def init_db(conn: sqlite3.Connection) -> None:
    conn.execute(_SCHEMA)
    conn.commit()


def insert_ticket(conn: sqlite3.Connection, narrative: str, category: str, model: str, latency_ms: float) -> dict:
    created_at = time.time()
    with _write_lock:
        cursor = conn.execute(
            "INSERT INTO tickets (narrative, category, model, latency_ms, created_at) VALUES (?, ?, ?, ?, ?)",
            (narrative, category, model, latency_ms, created_at),
        )
        conn.commit()
    return {"id": cursor.lastrowid, "created_at": created_at}


def search_tickets(conn: sqlite3.Connection, query: str, limit: int = 100) -> list[dict]:
    rows = conn.execute(
        "SELECT id, narrative, category, model, latency_ms, created_at FROM tickets "
        "WHERE narrative LIKE ? OR category LIKE ? ORDER BY id DESC LIMIT ?",
        (f"%{query}%", f"%{query}%", limit),
    ).fetchall()
    return [dict(row) for row in rows]


def stats(conn: sqlite3.Connection) -> dict:
    rows = conn.execute(
        "SELECT category, COUNT(*) AS count FROM tickets GROUP BY category"
    ).fetchall()
    counts = {category: 0 for category in CATEGORIES}
    for row in rows:
        counts[row["category"]] = row["count"]
    return {"total": sum(counts.values()), "by_category": counts}
