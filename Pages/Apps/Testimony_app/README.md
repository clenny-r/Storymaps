# Testimony App

A web application that allows TWC Ministries members to **submit, browse, and manage testimonies** — stories of faith and answered prayer shared within the congregation.

**Live URL:** [twcministries.net/Pages/Apps/Testimony_app/worker/](https://www.twcministries.net/Pages/Apps/Testimony_app/worker/)

## Architecture

```
Testimony_app/
├── testimonies.json          ← Database: all submitted testimonies (JSON)
├── testimony-log.html        ← Frontend v1
├── testimony-log_v2.html     ← Frontend v2
├── testimony-log_v3.html     ← Frontend v3
├── testimony-log_v4.html     ← Frontend v4 (latest draft)
└── worker/
    ├── index.html            ← Current live frontend
    ├── index.js              ← Cloudflare Worker backend (API)
    └── README.md             ← Full setup and deployment guide ← START HERE
```

The app uses:
- **Frontend** — static HTML hosted on GitHub Pages
- **Backend** — Cloudflare Worker (`worker/index.js`) handling API requests
- **Database** — `testimonies.json` stored in this repository

## Quick Start

See [`worker/README.md`](worker/README.md) for full setup instructions, including Cloudflare Worker deployment and environment variable configuration.

## Files

| File | Description |
|---|---|
| `testimonies.json` | Live data store — contains all submitted testimonies |
| `testimony-log.html` → `v4.html` | Development iterations of the frontend (v4 is latest) |
| `worker/index.html` | Current production frontend |
| `worker/index.js` | Cloudflare Worker (serverless API) |
