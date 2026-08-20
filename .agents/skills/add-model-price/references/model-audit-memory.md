# Model Price Audit Memory

This file is an optional snapshot of the latest automated audit whose
per-model results add useful context for a future run. It is orientation only;
reconfirm every price and tier against official provider sources before making
a change or reporting a row as confirmed.

The audit agent may replace the snapshot below with its complete current table.
Keep only one snapshot, never append an unbounded run history, never persist a
partial set of checked models, and do not update this file only to refresh the
audit date.

## Latest useful snapshot

**Audit date:** 2026-08-20

All prices listed as `$X / MTok` (per million tokens). Per-token JSON values: divide by 1,000,000.

| Provider | Model / pricing entry | Pricing checked | Price confirmed | Tiering checked | Tiering correct | Change | Official source(s) | Comments |
| -------- | --------------------- | --------------- | --------------- | --------------- | --------------- | ------ | ------------------ | -------- |
| Anthropic | claude-fable-5 | Input $10/MTok, Output $50/MTok, 5m $12.50/MTok, 1h $20/MTok, read $1/MTok | Yes | Flat 1M context at standard pricing | Yes | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed via full pricing table fetch, unchanged since Aug 14. |
| Anthropic | claude-mythos-5 | Same as Fable 5 | Yes | Flat 1M context | Yes | None | https://platform.claude.com/docs/en/about-claude/pricing | Limited availability (Project Glasswing). Re-confirmed unchanged. |
| Anthropic | claude-opus-5 | Input $5/MTok, Output $25/MTok, 5m $6.25/MTok, 1h $10/MTok, read $0.50/MTok | Yes | Flat 1M context; Fast mode ($10/$50 MTok) documented but NOT a pricing-file tier | No | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed Standard tier unchanged. **New finding:** official Fast mode pricing ($10/$50/MTok, `speed:"fast"`) has no matching tier in the file (only a `Standard` tier exists) — see provider-sources-and-price-keys.md "Premium speed-tier pricing" note. Not added this run (queued follow-up, not surgical). |
| Anthropic | claude-opus-4-8 | Same Standard price as Opus 5 | Yes | Flat 1M context; same Fast-mode gap as Opus 5 | No | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed Standard tier unchanged. Same Fast-mode tiering gap as claude-opus-5. |
| Anthropic | claude-opus-4-7 | Same as Opus 5 | Yes | Flat 1M context (Fast mode NOT available on 4.7 per official page) | Yes | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed unchanged. Page explicitly states Fast mode errors on 4.7, so no tiering gap here. |
| Anthropic | claude-opus-4-6 | Same as Opus 5 | Yes | Flat 1M context (Fast mode runs at standard speed/price on 4.6 per official page) | Yes | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed. `inference_geo: "us"` still adds 1.1x. No Fast-mode price gap (4.6 has no separate Fast-mode rate). |
| Anthropic | claude-opus-4-5-20251101 | Same as Opus 5 | Yes | Flat 1M context | Yes | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed unchanged. |
| Anthropic | claude-opus-4-1-20250805 | Input $15/MTok, Output $75/MTok, 5m $18.75/MTok, 1h $30/MTok, read $1.50/MTok | Yes | Deprecated — no tiering | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Still listed as "retired, except on Bedrock and Google Cloud" on the current page. Unchanged. |
| Anthropic | claude-opus-4-20250514 | Input $15/MTok, Output $75/MTok, 5m $18.75/MTok, 1h $30/MTok, read $1.50/MTok | Yes | Retired except Google Cloud — no tiering | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed present on current page's main table, unchanged. |
| Anthropic | claude-sonnet-5 | Input $2/MTok, Output $10/MTok; 5m $2.50/MTok, 1h $4/MTok, read $0.20/MTok | Yes | Flat 1M context; pricing is PERMANENT (not introductory) | Yes | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed unchanged; page still states the Sep 1 2026 increase to $3/$15 "will not occur." |
| Anthropic | claude-sonnet-4-6 | Input $3/MTok, Output $15/MTok, 5m $3.75/MTok, 1h $6/MTok, read $0.30/MTok | Yes | Flat 1M context | Yes | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed unchanged. |
| Anthropic | claude-sonnet-4-5-20250929 | Input $3/MTok, Output $15/MTok, 5m $3.75/MTok, 1h $6/MTok, read $0.30/MTok | Yes | No large-context tier (200k hard context-window cap) | Yes | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed unchanged. |
| Anthropic | claude-sonnet-4-20250514 | Input $3/MTok, Output $15/MTok, 5m $3.75/MTok, 1h $6/MTok, read $0.30/MTok | Yes | Retired except Bedrock/Google Cloud — no tiering | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed present on current page's main table, unchanged. |
| Anthropic | claude-haiku-4-5-20251001 | Input $1/MTok, Output $5/MTok, 5m $1.25/MTok, 1h $2/MTok, read $0.10/MTok | Yes | No large-context tier (200k context window) | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed unchanged. |
| Anthropic | claude-3-5-haiku-20241022 | Input $0.80/MTok, Output $4/MTok, 5m $1/MTok, 1h $1.60/MTok, read $0.08/MTok | Yes | Retired except Bedrock/Google Cloud | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Re-confirmed present on current page's main table ("Claude Haiku 3.5"). |
| Anthropic | claude-3.7-sonnet-20250219 | Input $3/MTok, Output $15/MTok, cache $3.75/$6/$0.30 | No | Not on current page | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Not re-verified this run (not on the current main table). Legacy prices retained. |
| Anthropic | claude-3.5-sonnet-20241022 | Input $3/MTok, Output $15/MTok, cache $3.75/$6/$0.30 | No | Not on current page | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Not re-verified this run. Legacy prices retained. |
| Anthropic | claude-3-5-sonnet-20240620 | Input $3/MTok, Output $15/MTok, cache $3.75/$6/$0.30 | No | Not on current page | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Not re-verified this run. Legacy prices retained. |
| Anthropic | claude-3-opus-20240229 | Input $15/MTok, Output $75/MTok | No | Not on current page | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Not re-verified this run. Legacy. |
| Anthropic | claude-3-sonnet-20240229 | Input $3/MTok, Output $15/MTok | No | Not on current page | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Not re-verified this run. Legacy. |
| Anthropic | claude-3-haiku-20240307 | Input $0.25/MTok, Output $1.25/MTok | No | Not on current page | Not applicable | None | https://platform.claude.com/docs/en/about-claude/pricing | Not re-verified this run. Legacy. |
| AWS Bedrock | claude-3-5-sonnet-20240620 / claude-3.5-sonnet-20241022 (Public Extended Access SKU) | $6.00/MTok input, $30.00/MTok output, $7.50/MTok cache write, $0.60/MTok cache read | No | Distinct dated SKU, not a context-length tier | Not applicable | Unresolved | https://aws.amazon.com/bedrock/pricing/ | Not re-verified this run; permanent documented limitation (model-ID string match cannot distinguish billing SKU) — see provider-sources-and-price-keys.md. |
| OpenAI | gpt-5.6-sol | Input $5/MTok, Cached $0.50/MTok, Cache write $6.25/MTok, Output $30/MTok | Yes | Fast mode $10/$1/$12.50/$60; Flex $2.50/$0.25/$15; Large Context (>272K) $10/$1.00/$12.50/$45 | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed Standard, Fast mode, Flex, and Large Context prices all unchanged. |
| OpenAI | gpt-5.6-terra | Input $2/MTok, Cached $0.20/MTok, Cache write $2.50/MTok, Output $12/MTok | Yes | Fast mode $4/$0.40/$5/$24; Flex $1/$0.10/$6; Large Context (>272K) $4/$0.40/$5.00/$18 | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed stable. |
| OpenAI | gpt-5.6-luna | Input $0.20/MTok, Cached $0.02/MTok, Cache write $0.25/MTok, Output $1.20/MTok | Yes | Fast mode $0.40/$0.04/$0.50/$2.40; Flex $0.10/$0.01/$0.60; Large Context (>272K) $0.40/$0.04/$0.50/$1.80 | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed stable. |
| OpenAI | gpt-5.5-2026-04-23 (alias gpt-5.5) | Input $5/MTok, Cached $0.50/MTok, Output $30/MTok | Yes | Fast mode $12.50/$1.25/-/$75 (file matches); Flex $2.50/$0.25/$15 (file has no Flex tier); Large Context (>272K): $10/$1.00/$45 | No | None | https://developers.openai.com/api/docs/pricing | Standard and Fast mode re-confirmed unchanged. **Flex tier is documented but not in the file** — see the new "Premium speed-tier pricing" note in provider-sources-and-price-keys.md; not added this run. |
| OpenAI | gpt-5.5-pro-2026-04-23 (alias gpt-5.5-pro) | Input $30/MTok, Output $180/MTok; no cache | Yes | Large Context (>272K): $60/$270 | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. |
| OpenAI | gpt-5.4 | Input $2.50/MTok, Cached $0.25/MTok, Output $15/MTok | Yes | Large Context (>272K): $5.00/$0.50/$22.50; Fast mode $5/$0.50/-/$30 and Flex $1.25/$0.13/$7.50 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard/Large-Context re-confirmed unchanged. Fast mode/Flex gap noted, not added. |
| OpenAI | gpt-5.4-2026-03-05 | Same as gpt-5.4 | Yes | Large Context (>272K): $5.00/$0.50/$22.50 | Yes | None | https://developers.openai.com/api/docs/pricing | Dated snapshot sibling; re-confirmed. |
| OpenAI | gpt-5.4-pro | Input $30/MTok, Output $180/MTok; no cache | Yes | Large Context (>272K): $60/$270 | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. |
| OpenAI | gpt-5.4-pro-2026-03-05 | Same as gpt-5.4-pro | Yes | Large Context (>272K): $60/$270 | Yes | None | https://developers.openai.com/api/docs/pricing | Dated snapshot sibling; re-confirmed. |
| OpenAI | gpt-5.4-mini | Input $0.75/MTok, Cached $0.075/MTok, Output $4.50/MTok | Yes | No large-context tier; Fast mode $1.50/$0.15/-/$9 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged. Fast-mode gap noted, not added. |
| OpenAI | gpt-5.4-mini-2026-03-17 | Same as gpt-5.4-mini | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Dated snapshot sibling; re-confirmed. |
| OpenAI | gpt-5.4-nano | Input $0.20/MTok, Cached $0.02/MTok, Output $1.25/MTok | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. |
| OpenAI | gpt-5.4-nano-2026-03-17 | Same as gpt-5.4-nano | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Dated snapshot sibling; re-confirmed. |
| OpenAI | gpt-5.3-codex | Input $1.75/MTok, Cached $0.175/MTok, Output $14.00/MTok | Yes | No large-context tier (400k context window, single tier) | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. |
| OpenAI | gpt-5.2-2025-12-11 | Input $1.75/MTok, Cached $0.175/MTok, Output $14.00/MTok | Yes | No large-context tier; Fast mode $3.50/$0.35/-/$28 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged (row: "gpt-5.2"). Fast-mode gap noted, not added. |
| OpenAI | gpt-5.2-pro-2025-12-11 | Input $21/MTok, Output $168/MTok; no cache | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. |
| OpenAI | gpt-5.1-2025-11-13 | Input $1.25/MTok, Cached $0.125/MTok, Output $10/MTok | Yes | No large-context tier; Fast mode $2.50/$0.25/-/$20 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged. Fast-mode gap noted, not added. |
| OpenAI | gpt-5-2025-08-07 | Input $1.25/MTok, Cached $0.125/MTok, Output $10/MTok | Yes | No large-context tier; Fast mode $2.50/$0.25/-/$20 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged via two independent full-table fetches. Fast-mode gap noted, not added. |
| OpenAI | gpt-5-mini-2025-08-07 | Input $0.25/MTok, Cached $0.025/MTok, Output $2/MTok | Yes | No large-context tier; Fast mode $0.45/$0.045/-/$3.60 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged. Fast-mode gap noted, not added. |
| OpenAI | gpt-5-nano-2025-08-07 | Input $0.05/MTok, Cached $0.005/MTok, Output $0.40/MTok | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. |
| OpenAI | gpt-5-pro-2025-10-06 | Input $15/MTok, Output $120/MTok; no cache | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged via full standard-pricing-table dump. |
| OpenAI | gpt-4.1-2025-04-14 | Input $2/MTok, Cached $0.50/MTok, Output $8/MTok | Yes | No large-context tier; Fast mode $3.50/$0.875/-/$14 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged. Fast-mode gap noted, not added. |
| OpenAI | gpt-4.1-mini-2025-04-14 | Input $0.40/MTok, Cached $0.10/MTok, Output $1.60/MTok | Yes | No large-context tier; Fast mode $0.70/$0.175/-/$2.80 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged. Fast-mode gap noted, not added. |
| OpenAI | gpt-4.1-nano-2025-04-14 | Input $0.10/MTok, Cached $0.025/MTok, Output $0.40/MTok | Yes | No large-context tier; Fast mode $0.20/$0.05/-/$0.80 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged. Fast-mode gap noted, not added. |
| OpenAI | gpt-4o-2024-08-06 | Input $2.50/MTok, Cached $1.25/MTok, Output $10/MTok | Yes | No large-context tier; Fast mode $4.25/$2.125/-/$17 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged. Fast-mode gap noted, not added. |
| OpenAI | gpt-4o-2024-05-13 | Input $5/MTok, Output $15/MTok; no cache | Yes | No large-context tier; Fast mode $8.75/-/-/$26.25 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged via full table dump. Fast-mode gap noted, not added. |
| OpenAI | gpt-4o-mini-2024-07-18 | Input $0.15/MTok, Cached $0.075/MTok, Output $0.60/MTok | Yes | No large-context tier; Fast mode $0.25/$0.125/-/$1 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged. Fast-mode gap noted, not added. |
| OpenAI | o1 | Input $15/MTok, Cached $7.50/MTok, Output $60/MTok | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged via full table dump. |
| OpenAI | o1-pro | Input $150/MTok, Output $600/MTok; no cache | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged via full table dump. |
| OpenAI | o3-2025-04-16 | Input $2/MTok, Cached $0.50/MTok, Output $8/MTok | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. Note: bare `o3` is a distinct, separate pricing entry from `o3-2025-04-16` and was not itself re-quoted from the Fast-mode table this run, but shares the same Standard price row. |
| OpenAI | o3 | Input $2/MTok, Cached $0.50/MTok, Output $8/MTok | Yes | No large-context tier; Fast mode $3.50/$0.875/-/$14 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged (two independent fetches agree). Fast-mode gap noted, not added. |
| OpenAI | o3-mini-2025-01-31 | Input $1.10/MTok, Cached $0.55/MTok, Output $4.40/MTok | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. |
| OpenAI | o3-pro-2025-06-10 | Input $20/MTok, Output $80/MTok; no cache | Yes | No large-context tier (200k context window) | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged via full table dump. |
| OpenAI | o4-mini-2025-04-16 | Input $1.10/MTok, Cached $0.275/MTok, Output $4.40/MTok | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. Bare `o4-mini` entry shares this Standard price. |
| OpenAI | o4-mini | Input $1.10/MTok, Cached $0.275/MTok, Output $4.40/MTok | Yes | No large-context tier; Fast mode $2/$0.50/-/$8 documented but not in file | No | None | https://developers.openai.com/api/docs/pricing | Standard re-confirmed unchanged (two independent fetches agree). Fast-mode gap noted, not added. |
| OpenAI | gpt-4-turbo-2024-04-09 | Input $10/MTok, Output $30/MTok; no cache | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged via full table dump. |
| OpenAI | gpt-4-0613 | Input $30/MTok, Output $60/MTok; no cache | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged via full table dump. |
| OpenAI | gpt-3.5-turbo | Input $0.50/MTok, Output $1.50/MTok; no cache | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged. |
| OpenAI | davinci-002 | Input $2.00/MTok, Output $2.00/MTok (base/non-fine-tuned inference); no cache | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged (base-model rate, not the fine-tuning-legacy rate). |
| OpenAI | babbage-002 | Input $0.40/MTok, Output $0.40/MTok (base/non-fine-tuned inference); no cache | Yes | No large-context tier | Yes | None | https://developers.openai.com/api/docs/pricing | Re-confirmed unchanged (base-model rate). |
| OpenAI | gpt-5-chat-latest | Input $1.25/MTok, Cached $0.125/MTok, Output $10/MTok | No | No provider tiering | Not applicable | None | https://developers.openai.com/api/docs/models/gpt-5-chat-latest | Not re-verified this run (this alias is still absent from the standard-table dump). Retained from July 2026 audit. |
| Google | gemini-2.5-flash | Input $0.30/MTok, Audio $1/MTok, Output $2.50/MTok, Cache read $0.03/MTok (audio $0.10/MTok) | Yes | No large-context tier | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged. |
| Google | gemini-2.5-flash-lite | Input $0.10/MTok, Audio $0.30/MTok, Output $0.40/MTok, Cache read $0.01/MTok (audio $0.03/MTok) | Yes | No large-context tier | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged. |
| Google | gemini-2.5-pro | Input $1.25/$2.50 MTok (≤200K/>200K), Output $10/$15, Cache read $0.125/$0.25 | Yes | Large Context (>200K) confirmed | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged. |
| Google | gemini-3.5-flash | Input $1.50/MTok, Output $9.00/MTok, Cache read $0.15/MTok | Yes | No large-context tier | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged. |
| Google | gemini-3.5-flash-lite | Input $0.30/MTok, Output $2.50/MTok, Cache read $0.03/MTok | Yes | No large-context tier | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged. |
| Google | gemini-3.1-flash-lite | Input $0.25/$0.50 (text/audio), Output $1.50, Cache read $0.025/$0.05 | Yes | No large-context tier | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged. |
| Google | gemini-3.1-flash-lite-preview | Same as GA gemini-3.1-flash-lite | No | No large-context tier | Not applicable | None | https://ai.google.dev/pricing | Not separately listed on official page this run either; not re-verified. |
| Google | gemini-3.1-pro-preview | Input $2/$4 MTok (≤200K/>200K), Output $12/$18, Cache read $0.20/$0.40 | Yes | Large Context (>200K) confirmed | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged. |
| Google | gemini-3-flash-preview | Input $0.50/$1.00 (text/audio), Output $3.00, Cache read $0.05/$0.10 | Yes | No large-context tier | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged. |
| Google | gemini-3-pro-preview | Input $2/$4 MTok (≤200K/>200K), Output $12/$18 | No | Large Context (>200K) set in file | Not applicable | None | https://ai.google.dev/pricing | Still not listed on official AI Studio page this run either; existing prices retained, not re-verified. |
| Google | gemini-3.6-flash | Input $0.75/MTok, Output $3.75/MTok, Cache read $0.075/MTok (all through Dec 31, 2026; reverts to $1.50/$7.50/$0.15 from Jan 1, 2027) | Yes | No large-context tier | Yes | None | https://ai.google.dev/pricing | Re-confirmed via a dedicated fetch explicitly listing the promotional pricing and its Dec 31 2026 / Jan 1 2027 dates. Still discounted, unchanged. |
| Google | gemini-3.7-flash | Input $0.75/MTok, Output $3.75/MTok, Cache read $0.075/MTok (all through Dec 31, 2026; reverts to $1.50/$7.50/$0.15 from Jan 1, 2027) | Yes | No large-context tier | Yes | None | https://ai.google.dev/pricing | Re-confirmed unchanged; still discounted, same window as gemini-3.6-flash. |
| Google | gemini-2.0-flash | Input $0.10/MTok, Output $0.40/MTok | No | Deprecated (shut down June 1, 2026) | Not applicable | None | https://ai.google.dev/pricing | Not re-verified this run; retained for backward compatibility. |
| Google | gemini-2.0-flash-001 | Same as gemini-2.0-flash | No | Deprecated (shut down June 1, 2026) | Not applicable | None | https://ai.google.dev/pricing | Not re-verified this run; retained for backward compatibility. |

## Unresolved findings (updated 2026-08-20)

1. **OpenAI Fast mode / Flex processing tiers are documented for far more models than
   the pricing file represents, and Anthropic has the analogous Fast-mode gap for Opus 5
   / Opus 4.8** — see the "Premium speed-tier pricing" entry added to
   `provider-sources-and-price-keys.md` this run for exact confirmed prices. This is a
   broad, multi-model rollout (≈14 OpenAI models needing a new Fast-mode tier, a brand
   new Flex tier with no precedent in the file at all, plus an Anthropic speed tier) and
   was deliberately left unimplemented as too large for a single surgical audit change —
   queue it as a dedicated follow-up PR, matching how PR #16204 scoped its own rollout to
   four models.

2. **claude-opus-4-1-20250805 retirement** — Deprecated, still listed on the official
   pricing page as "retired, except on Bedrock and Google Cloud" this run. File entry
   retained; no action required, but check whether it is fully removed from the official
   page in a future audit.

3. **AWS Bedrock "Claude 3.5 Sonnet (Public Extended Access)" pricing** — Confirmed real
   in a prior (Aug 4 2026) audit but not representable in Langfuse's schema because it
   matches by model-ID string only. No file change should be made for this; treat it as a
   permanent, documented limitation. Not re-checked this run (no `aws.amazon.com` fetch
   performed).

4. **Legacy Claude 3.x / 3.5 / 3.7 models not on the current pricing page** — Not
   re-verified this run (`claude-3.7-sonnet-20250219`, `claude-3.5-sonnet-20241022`,
   `claude-3-5-sonnet-20240620`, `claude-3-opus-20240229`, `claude-3-sonnet-20240229`,
   `claude-3-haiku-20240307`). Existing prices retained. Low priority since these are
   retired/legacy.

5. **gemini-3.1-flash-lite-preview and gemini-3-pro-preview** — Still not separately
   listed on the official AI Studio pricing page. Existing prices retained without fresh
   confirmation. Re-verify if these move from preview to GA or gain their own pricing row.

6. **gemini-3.6-flash / gemini-3.7-flash promotional pricing reverts 2027-01-01** — Both
   models remain on introductory pricing ($0.75/$3.75/MTok input/output, $0.075/MTok
   cache read) "through December 31, 2026", stepping up to $1.50/$7.50/$0.15 "starting
   January 1, 2027". The pricing file currently holds the discounted price (still correct
   as of this run); update both entries to the higher rate on or after 2027-01-01.

7. **OpenAI "cache writes" is still gpt-5.6-family-only** — As of this audit (re-confirmed
   via the full standard-pricing-table dump), the distinct 1.25x-of-input cache-write
   billing dimension applies only to `gpt-5.6-sol`, `gpt-5.6-terra`, and `gpt-5.6-luna`.
   Every other checked OpenAI model still shows "—" for cache writes. Future audits should
   re-check this column whenever a new OpenAI reasoning model is added.

8. **Base vs. fine-tuning legacy pricing confusion is a real historical bug class** — See
   `provider-sources-and-price-keys.md` for the full write-up (the `davinci-002` /
   `babbage-002` fix from August 2026). Re-confirmed correct (base-model rate) again this
   run for both entries.

9. **Legacy/embedding/base-completion catalog tail not covered this run** — Entries such as
   `text-ada-001`, `text-babbage-001`, `text-curie-001`, `text-davinci-00{1,2,3}`,
   `text-embedding-*`, the Vertex `*-bison*`/`*-gecko*` PaLM family, `claude-1.x`/`claude-2.x`,
   and `gemini-1.0-*`/`gemini-pro` were not re-fetched this run (consistent with prior
   audits) since they are long-retired and out of the "flagship text/chat/reasoning model"
   scope. If a future task explicitly asks to audit embeddings or PaLM-era models, treat
   this as unverified starting ground, not confirmed.

10. **Bare `reasoning_tokens` alias key is inconsistent across OpenAI reasoning-model
    generations** — `gpt-5.4`/`gpt-5.5`/`gpt-5.6` family entries carry a bare
    `reasoning_tokens` price key alongside `output_reasoning_tokens`/`output_reasoning`,
    but older reasoning entries (`o1`, `o1-pro`, `o3`, `o3-mini`, `o3-pro`, `o4-mini`,
    `gpt-5`, `gpt-5.1`, `gpt-5.2`, `gpt-5.2-pro`, `gpt-5.3-codex`, and their dated
    snapshots) do not have it. `reasoning_tokens` as a bare key is not produced anywhere
    in `OtelIngestionProcessor.ts` or any other ingestion normalization path found this
    run (only `output_reasoning_tokens`/`output_reasoning` are), so its value for the
    newer entries is unclear — possibly a defensive alias for a raw passthrough usage
    shape. Not changed this run: unclear whether backfilling it to older entries is a
    genuine coverage gap or matches some other, undiscovered ingestion path. Flagging for
    a future audit to investigate with fresh eyes rather than guessing.
