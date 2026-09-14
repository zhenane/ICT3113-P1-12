import json
import logging
import time
from pathlib import Path

from starlette.middleware.base import BaseHTTPMiddleware


def configure_logger(log_dir: str) -> logging.Logger:
    Path(log_dir).mkdir(parents=True, exist_ok=True)
    logger = logging.getLogger("service")
    logger.setLevel(logging.INFO)
    if not logger.handlers:
        file_handler = logging.FileHandler(Path(log_dir) / "service.log")
        file_handler.setFormatter(logging.Formatter("%(message)s"))
        logger.addHandler(file_handler)

        stream_handler = logging.StreamHandler()
        stream_handler.setFormatter(logging.Formatter("%(message)s"))
        logger.addHandler(stream_handler)
    return logger


class RequestLoggingMiddleware(BaseHTTPMiddleware):
    """Logs one JSON line per request handled: timestamp, path, status, latency.

    Handlers can attach extra fields (model, category, ticket id, ...) by
    setting `request.state.extra = {...}` before returning; those are merged
    into the log line. Every request is logged, including ones that raise.
    """

    def __init__(self, app, logger: logging.Logger):
        super().__init__(app)
        self.logger = logger

    async def dispatch(self, request, call_next):
        request.state.extra = {}
        started = time.perf_counter()
        status_code = 500
        try:
            response = await call_next(request)
            status_code = response.status_code
            return response
        finally:
            duration_ms = (time.perf_counter() - started) * 1000
            self.logger.info(json.dumps({
                "timestamp": time.time(),
                "method": request.method,
                "path": request.url.path,
                "query": str(request.url.query),
                "status_code": status_code,
                "duration_ms": round(duration_ms, 2),
                **request.state.extra,
            }))
