# S measurement (qwen3:1.7b)

Measured 2026-11-23T19:16:01 against http://192.168.0.15:8000.

| Ticket row | Time (s) | Server time (s) |
|---|---:|---:|
| 12741 | 20.86 | 20.81 |
| 12585 | 17.75 | 17.69 |
| 12708 | 26.27 | 26.23 |

- **S (middle of the three) = 20.86 s**
- Arrival rate = one ticket every 2S = 41.7 s = **1.438 tickets/min** (86.3/hour, 0.0240/s)
- Run length = max(S, 5) = **21 min** (expected ≈ 30 tickets per run)
- JMeter response timeout = max(10S, 300 s) = **300 s**; Open Model pause after arrivals = **6 min**
- Compared with the A1 client peak (0.1088 tickets/s): test rate is **below** the peak (results compare configurations but do not show the recommended one handles the client peak - say so on the limitations slide).
