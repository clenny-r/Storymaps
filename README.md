# Storymaps Repository

This repository hosts two projects served via **GitHub Pages**:

1. **TWC Ministries Website** — the public-facing website for Transformational Worship Centre Ministries, live at [twcministries.net](https://www.twcministries.net)
2. **Hurricane Melissa Storm Surge Maps** — interactive per-parish HTML maps for Jamaica showing storm surge scenarios

---

## 📁 Folder Structure

```
/
├── index.html               ← TWC Ministries home page
├── 404.html                 ← Custom error page
├── CNAME                    ← Custom domain: twcministries.net
├── favicon-*.png / .ico     ← Site icons
├── index_pointer.json       ← Data for the home page charity slider
│
├── Pages/                   ← All TWC Ministries site pages
│   ├── About/               → twcministries.net/Pages/About/
│   ├── Announcements/       → twcministries.net/Pages/Announcements/
│   ├── Apps/                → twcministries.net/Pages/Apps/
│   │   ├── Baby Games/
│   │   └── Testimony_app/
│   ├── Charities/           → twcministries.net/Pages/Charities/
│   ├── Connect/             → twcministries.net/Pages/Connect/
│   ├── Donations/           → twcministries.net/Pages/Donations/
│   │   ├── local/           → twcministries.net/Pages/Donations/local/
│   │   └── foreign/         → twcministries.net/Pages/Donations/foreign/
│   ├── Events/              → twcministries.net/Pages/Events/
│   ├── Live/                → twcministries.net/Pages/Live/
│   ├── Ministries/          → twcministries.net/Pages/Ministries/
│   └── church_photos/       ← Shared image assets
│
└── Hurricane_Melissa/       ← Storm surge map collection
    ├── surge_only/          ← Surge only scenario (14 parishes)
    ├── with_est_setup/      ← Surge + estimated setup (14 parishes)
    ├── with_rain/           ← Surge + rainfall (14 parishes)
    ├── index_pages/         ← Navigation/index pages for the maps
    ├── figs/                ← Schematized coastal point figures (PEI-SMP)
    └── rose_figs/           ← Wave rose figures (PEI-SMP)
```

---

## 🌐 TWC Ministries Website

**Transformational Worship Centre Ministries** is a Christian community based in Jamaica.

Each `Pages/` subfolder contains an `index.html` as its main page, so all URLs are clean:

| Section | Live URL |
|---|---|
| About | [twcministries.net/Pages/About/](https://www.twcministries.net/Pages/About/) |
| Charities | [twcministries.net/Pages/Charities/](https://www.twcministries.net/Pages/Charities/) |
| Connect | [twcministries.net/Pages/Connect/](https://www.twcministries.net/Pages/Connect/) |
| Donations (local) | [twcministries.net/Pages/Donations/local/](https://www.twcministries.net/Pages/Donations/local/) |
| Donations (foreign) | [twcministries.net/Pages/Donations/foreign/](https://www.twcministries.net/Pages/Donations/foreign/) |
| Events | [twcministries.net/Pages/Events/](https://www.twcministries.net/Pages/Events/) |
| Live stream | [twcministries.net/Pages/Live/](https://www.twcministries.net/Pages/Live/) |
| Ministries | [twcministries.net/Pages/Ministries/](https://www.twcministries.net/Pages/Ministries/) |

**Tech stack:** Plain HTML, CSS, JavaScript — no build step required. Hosted on GitHub Pages with a custom domain via `CNAME`.

---

## 🌀 Hurricane Melissa Storm Surge Maps

Interactive HTML maps showing storm surge scenarios across all **14 parishes of Jamaica** for a modelled Hurricane Melissa event. Three scenario sets:

| Folder | Scenario |
|---|---|
| `Hurricane_Melissa/surge_only/` | Storm surge only |
| `Hurricane_Melissa/with_est_setup/` | Surge + estimated setup |
| `Hurricane_Melissa/with_rain/` | Surge + rainfall contribution |

Each folder contains one `.html` file per parish. The `Hurricane_Melissa/index_pages/` folder holds navigation/index pages for the map collection.

---

## 🚀 Running Locally

No build step is needed. Simply open any `.html` file in a browser, or serve the folder with a local server:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## 📬 Contact

For questions about the TWC Ministries website, visit [twcministries.net](https://www.twcministries.net) or reach out through the Connect page.
