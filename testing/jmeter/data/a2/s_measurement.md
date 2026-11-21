# S measurement (qwen3:1.7b)

Measured 2026-11-21T04:07:44 against http://192.168.0.15:8000.

| Ticket row | Time (s) | Server time (s) |
|---|---:|---:|
| 12623 | 26.11 | 26.06 |
| 12399 | 13.86 | 13.81 |
| 12107 | 14.38 | 14.35 |

- **S (middle of the three) = 14.38 s**
- Arrival rate = one ticket every 2S = 28.8 s = **2.086 tickets/min** (125.2/hour, 0.0348/s)
- Run length = max(S, 5) = **15 min** (expected ≈ 31 tickets per run)
- JMeter response timeout = max(10S, 300 s) = **300 s**; Open Model pause after arrivals = **6 min**
- Compared with the A1 client peak (0.1088 tickets/s): test rate is **below** the peak (results compare configurations but do not show the recommended one handles the client peak - say so on the limitations slide).
