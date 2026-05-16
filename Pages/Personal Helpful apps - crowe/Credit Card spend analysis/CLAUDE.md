# Credit Card Spend Analysis — Instructions for Claude

Read this file first when the user asks for a new report. It contains everything you need; don't re-explore the folder tree.

## Trigger

User says something like *"new PDF in input/, build the report"* or *"generate the report for the latest PDF"*.

## What to do (minimal flow)

1. Find the newest PDF in `input/` that doesn't already have a matching report.
2. Parse it (see "Parsing rules" below) to get a list of `(date, merchant, amount)`.
3. Categorize (see "Categorization rules").
4. Create `reports/YYYY-MM-DD_to_YYYY-MM-DD/` named after the actual date range found.
5. Write the four output files (see "Outputs"). Clone the templates in `templates/` — do not regenerate the HTML structure from scratch.
6. Add a new entry to the top of the `REPORTS = [...]` array in `index.html`.
7. Done — share the dashboard link.

## Parsing rules (Wealthsimple PDF)

Use `pdfplumber` to extract text. Per page:

- A **date header** is one of: `Yesterday`, `Today`, `Month DD, YYYY` (e.g. `May 11, 2026`). Treat as the current date until the next header.
- After a date header, each transaction is two lines:
  1. Merchant name (free text)
  2. `− $X.XX CAD` (note: U+2212 minus, hyphen, en-dash, and em-dash all appear — accept any)
- Some transactions appear as a single line: `Merchant − $X.XX CAD`.
- **Skip** `Credit card payment` rows (they're refunds to the card, not spend).
- Each page has a header `M/D/YY, H:MM AM/PM` — that's the export date. Use it to resolve `Yesterday` (= export date − 1 day) and `Today` (= export date).
- Ignore noise lines: `Activity`, `Scheduled activities`, `Purchase Credit card • Wealthsimple credit card`, `Pending`, `From: Chequing`, `https://...` URLs, and the page footer disclaimers.

## Categorization rules

```
Amazon          : amzn, amazon
Professional    : engineers nova scotia, engineers ns, p.eng
Subscriptions   : surfshark, koodo, apple.com, icloud, spotify, netflix, youtube,
                  github, openai, anthropic, claude
Restaurants     : poke, broth, ubereats, crepe, skip, doordash, tim hortons,
                  starbucks, mcdonald
Discount retail : dollarama, dollar tree, giant tiger
Transportation  : communauto, uber canada, lyft, transit, parking, esso, shell, petro
Home            : ikea, home depot, rona, canadian tire
Groceries       : grocery, loblaws, sobeys, superstore, walmart, plaza, no frills
```

Special case: `Uber Canada/Ubereats` → `Restaurants` (not Transportation).
Unmatched → `Other`.

## Outputs (write to `reports/YYYY-MM-DD_to_YYYY-MM-DD/`)

### 1. `transactions.csv`

Columns: `date,merchant,amount,category`. Sorted by date asc, then amount desc.

### 2. `summary.md`

```
# Credit card spending — {date_min} to {date_max}

**{n_days} days · {n_tx} transactions · ${total:,.2f} CAD total**

- Daily average: **${daily_avg:,.2f}**
- Median charge: **${median:,.2f}**
- Largest charge: **${largest:,.2f}** — {merchant} ({date})

## By category

| Category | Spend | # Tx | % |
…

## Top merchants
…

## Daily
…
```

### 3. `spending_dashboard.html`

Clone `templates/dashboard.html`. Replace these placeholders:

| Placeholder | Value |
|---|---|
| `__RANGE__` | `May 2 – May 14, 2026` (human-readable) |
| `__NDAYS__` | integer |
| `__NTX__` | integer |
| `__TOTAL__` | `1,170.48` (formatted, no `$`) |
| `__AVG__` | daily average, same format |
| `__LARGEST__` | largest charge, same format |
| `__LARGEST_LABEL__` | `Engineers NS · May 6` (merchant · short-date) |
| `__MEDIAN__` | median charge, same format |
| `__CUM_HEADLINE__` | one-line takeaway about cumulative curve |
| `__DAILY_HEADLINE__` | one-line takeaway about the biggest day |
| `__CAT_HEADLINE__` | one-line takeaway about the top category |
| `__TX_JSON__` | JSON array `[[date, merchant, amount, category], …]` |
| `__INSIGHTS_JSON__` | JSON array `[[title, body_html], …]`, 2–4 entries |
| `__CAT_COLORS__` | JSON object — same map as in legacy notebook |

Standard category color map:
```json
{"Amazon":"#d4a574","Professional":"#c4554f","Subscriptions":"#6ea8c4","Restaurants":"#d97757","Discount retail":"#7cb992","Transportation":"#9a7ab8","Home":"#b89968","Groceries":"#5e9b8a","Other":"#4a5468"}
```

### 4. `suggestions.html`

Clone `templates/suggestions.html`. Replace:

| Placeholder | Value |
|---|---|
| `__RANGE__` | same as dashboard |
| `__TOTAL_POT__` | combined estimated monthly savings, e.g. `1,699` |
| `__SUGGESTIONS__` | one `<div class="sugg impact-{high|medium|low}">…</div>` block per suggestion |

Suggestion block template:
```html
<div class="sugg impact-high">
  <div>
    <div class="sugg-num">01</div>
    <div class="sugg-title">Set a $50/day cap and watch the slope</div>
    <div class="sugg-body">Daily average right now is <strong>$90.04</strong>. …</div>
  </div>
  <div class="sugg-meta">
    <div class="sugg-amt">$1,201</div>
    <div class="sugg-amt-label">est. /month</div>
    <div class="sugg-impact">high impact</div>
  </div>
</div>
```

Suggestion rules to apply (each one becomes a card if the data triggers it):

1. **Daily pace** — if daily avg > $60, suggest a $50/day cap. Est savings = `(avg - 50) * 30`. Impact: high.
2. **Amazon clustering** — if ≥ 4 Amazon orders, suggest 24-hour wait rule. Est savings = `amzn_total * 30/n_days * 0.175`. Impact: high if total > $200 else medium.
3. **Subscriptions audit** — if any Subscriptions, suggest cancelling one. Est savings = `subs_total * 30/n_days / count`. Impact: high.
4. **Identical repeats** — for each `(merchant, amount)` pair appearing ≥ 3 times, suggest cutting one per week. Est savings = `period_spend * 30/n_days * 0.25`. Impact: medium.
5. **Small-store drift** — for each merchant with ≥ 4 small (<$50) visits (excluding Amazon), suggest consolidating to one weekly trip. Est savings = `m_total * 30/n_days * 0.35`. Impact: medium.
6. **Apple double-billing** — if `Apple.Com/Bill` appears ≥ 2 times within 3 days, flag it. Est savings = `min_charge * 30/n_days`. Impact: low.

Sort by impact (high → medium → low) then by est savings desc.

## Update `index.html`

Find the `const REPORTS = [` block and **insert at the top** (newest first):

```js
{
  folder: "YYYY-MM-DD_to_YYYY-MM-DD",
  range_label: "May 2 – May 14, 2026",
  n_days: 13,
  n_tx: 34,
  total: 1170.48,
  largest_label: "Engineers NS · May 6"
},
```

## What NOT to do

- Don't run the notebooks in `legacy/` — they exist for reference only.
- Don't regenerate the dashboard HTML structure from scratch. Always clone from `templates/`.
- Don't re-explore the folder tree at the start; just trust this file.
- Don't commit anything from `input/` (it's gitignored — bank statements are personal).
- Don't ask clarifying questions for routine runs. If something's truly ambiguous (e.g., a new bank's PDF), then ask.

## Minimum prompt the user can give

> "New PDF in input/. Generate the report."

That's enough.
