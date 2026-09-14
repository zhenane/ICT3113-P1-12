from pydantic import BaseModel, Field


class TicketIn(BaseModel):
    narrative: str = Field(..., min_length=1, description="The complaint ticket narrative text")


class TicketOut(BaseModel):
    id: int
    category: str
    latency_ms: float
