"""
Step 3 - Stub of A's triage service, for building and debugging the JMeter plan
before the real Docker/Ollama service is ready.

Matches A's contract:
    POST /tickets   body {"narrative": "<non-empty string>"}
        200 -> {"id": int, "category": str, "latency_ms": float}
        422 -> empty / missing / non-string narrative, or invalid JSON
        502 -> simulated classification failure (--fail-rate)
    GET  /stats     -> {"total": int, "by_category": {category: count, ...}}
                       (only successful tickets are counted, like the real DB)

To behave like an LLM backend under load, it has a limited number of "model
slots" (--slots, like OLLAMA_NUM_PARALLEL). Requests beyond that wait in a
queue, so end-to-end time grows while latency_ms (time inside the "model")
stays flat - the same pattern you should see against the real service.

Standard library only. Run:
    python stub_server.py                       # 0.0.0.0:8000, 1-5 s, 1 slot
    python stub_server.py --min-s 0.2 --max-s 0.5 --slots 4 --fail-rate 0.02
"""

import argparse
import itertools
import json
import random
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

CATEGORIES = [
    "Credit reporting",
    "Debt collection",
    "Mortgage",
    "Credit card",
    "Bank account or service",
    "Consumer loan",
    "Money transfer or service",
    "Out-of-scope",
]


class State:
    def __init__(self, slots: int):
        self.lock = threading.Lock()
        self.counts = {c: 0 for c in CATEGORIES}
        self.ids = itertools.count(1)
        self.model_slots = threading.Semaphore(slots)
        self.log_lock = threading.Lock()


def make_handler(state: State, args):
    class Handler(BaseHTTPRequestHandler):
        protocol_version = "HTTP/1.1"  # keep-alive, like uvicorn

        def _log(self, code: int, t_start: float, extra=None) -> None:
            # Same JSON-lines shape as the real service's logs/service.log.
            if not args.log_file:
                return
            path, _, query = self.path.partition("?")
            entry = {"timestamp": time.time() + args.clock_skew_s, "method": self.command, "path": path,
                     "query": query, "status_code": code,
                     "duration_ms": round((time.perf_counter() - t_start) * 1000, 2), **(extra or {})}
            with state.log_lock, open(args.log_file, "a", encoding="utf-8") as f:
                f.write(json.dumps(entry) + "\n")

        def _send(self, code: int, payload: dict) -> None:
            data = json.dumps(payload).encode("utf-8")
            self.send_response(code)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)

        def _validation_error(self, msg: str) -> None:
            # Same shape as FastAPI/pydantic 422 responses.
            self._send(422, {"detail": [{"loc": ["body", "narrative"], "msg": msg, "type": "value_error"}]})

        def do_GET(self):
            t_start = time.perf_counter()
            if self.path.split("?")[0] == "/stats":
                with state.lock:
                    counts = dict(state.counts)
                self._send(200, {"total": sum(counts.values()), "by_category": counts})
                self._log(200, t_start)
            else:
                self._send(404, {"detail": "Not Found"})
                self._log(404, t_start)

        def do_POST(self):
            t_start = time.perf_counter()
            length = int(self.headers.get("Content-Length") or 0)
            raw = self.rfile.read(length) if length else b""
            if self.path.split("?")[0] != "/tickets":
                self._send(404, {"detail": "Not Found"})
                return
            try:
                body = json.loads(raw.decode("utf-8"))
            except (UnicodeDecodeError, json.JSONDecodeError):
                self._validation_error("invalid JSON body")
                self._log(422, t_start)
                return
            narrative = body.get("narrative") if isinstance(body, dict) else None
            if not isinstance(narrative, str):
                self._validation_error("field required (string)")
                self._log(422, t_start)
                return
            if len(narrative) < 1:
                self._validation_error("String should have at least 1 character")
                self._log(422, t_start)
                return

            with state.model_slots:          # wait for a free "model slot"
                t0 = time.perf_counter()
                time.sleep(random.uniform(args.min_s, args.max_s))
                latency_ms = (time.perf_counter() - t0) * 1000

            if random.random() < args.fail_rate:
                self._send(502, {"detail": "simulated classification failure"})
                self._log(502, t_start, {"model": args.model, "error": "simulated classification failure"})
                return

            category = random.choice(CATEGORIES)
            with state.lock:
                state.counts[category] += 1
                ticket_id = next(state.ids)
            self._send(200, {"id": ticket_id, "category": category, "latency_ms": round(latency_ms, 2)})
            extra = {}
            if args.cascade_escalate is not None:
                escalated = random.random() < args.cascade_escalate
                extra = {"initial_model": args.model, "escalated": escalated,
                         "final_model": args.large_model if escalated else args.model}
            self._log(200, t_start, {**extra, "model": args.model, "ticket_id": ticket_id, "category": category,
                                     "classification_latency_ms": round(latency_ms, 2),
                                     "narrative_chars": len(narrative)})

        def log_message(self, fmt, *a):
            if not args.quiet:
                super().log_message(fmt, *a)

    return Handler


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--host", default="0.0.0.0")
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--min-s", type=float, default=1.0, help="min simulated model time (s)")
    ap.add_argument("--max-s", type=float, default=5.0, help="max simulated model time (s)")
    ap.add_argument("--slots", type=int, default=1, help="concurrent model slots (like OLLAMA_NUM_PARALLEL)")
    ap.add_argument("--fail-rate", type=float, default=0.0, help="fraction of requests returning 502")
    ap.add_argument("--log-file", help="write a JSON-lines request log like the real service's logs/service.log")
    ap.add_argument("--model", default="stub-model", help="model name to put in the log")
    ap.add_argument("--cascade-escalate", type=float, default=None,
                    help="simulate a cascade: fraction of tickets escalated (logged as escalated/final_model)")
    ap.add_argument("--large-model", default="stub-large", help="large model name for --cascade-escalate")
    ap.add_argument("--clock-skew-s", type=float, default=0.0, help=argparse.SUPPRESS)  # for testing reconcile_logs.py
    ap.add_argument("--quiet", action="store_true", help="don't log each request")
    args = ap.parse_args()

    server = ThreadingHTTPServer((args.host, args.port), make_handler(State(args.slots), args))
    server.daemon_threads = True
    print(f"Stub triage service on http://{args.host}:{args.port} "
          f"(model time {args.min_s}-{args.max_s}s, {args.slots} slot(s), fail rate {args.fail_rate})")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
