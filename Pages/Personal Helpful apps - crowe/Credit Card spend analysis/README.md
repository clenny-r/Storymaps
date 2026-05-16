# Credit Card Spend Analysis

A small personal pipeline that turns Wealthsimple credit-card activity PDFs into a clean dashboard, a written summary, and a list of suggestions to lower spend.

Open [`index.html`](index.html) to see the reports.

## Layout

```
.
├── index.html          # landing page — lists all reports
├── CLAUDE.md           # instructions Claude reads on each run
├── input/              # raw PDFs (gitignored — personal data)
├── reports/            # one folder per date range
│   └── 2026-05-02_to_2026-05-14/
│       ├── spending_dashboard.html
│       ├── suggestions.html
│       ├── summary.md
│       └── transactions.csv
├── templates/          # clone-and-fill HTML for new reports
│   ├── dashboard.html
│   └── suggestions.html
└── legacy/             # older pipeline notebooks (kept for reference)
```

## To add a new report

1. Drop the new Wealthsimple PDF into `input/`.
2. Ask Claude: *"new PDF in input/, build the report"*.

Claude reads `CLAUDE.md` and produces a new folder in `reports/` plus an entry on the landing page.

## Privacy

`input/` contains raw bank statements and is `.gitignore`d by default. The generated reports in `reports/` contain merchant names and amounts — review before pushing if your repo is public.
