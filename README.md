# Storymaps Repository

This repository hosts two projects served via **GitHub Pages**:

1. **TWC Ministries Website** — the public-facing website for Transformational Worship Centre Ministries, live at [twcministries.net](https://www.twcministries.net)
2. **Hurricane Melissa Storm Surge Maps** — interactive per-parish HTML maps for Jamaica showing storm surge scenarios under Hurricane Melissa

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
│   ├── About/
│   ├── Announcements/
│   ├── Apps/
│   ├── Charities/
│   ├── Connect/
│   ├── Donations/
│   ├── Events/
│   ├── Live/
│   ├── Ministries/
│   └── church_photos/       ← Images used across the site
│
├── Hurrican_Melissa_surge_only/       ← Storm surge maps (surge only), one per parish
├── Hurrican_Melissa_with_est_setup/   ← Storm surge maps (with estimated setup)
├── Hurrican_Melissa_with_rain/        ← Storm surge maps (with rainfall contribution)
├── 00_SS_index/                       ← Storm surge index/landing pages
│
├── figs/                    ← Schematized coastal point figures (PEI-SMP)
└── rose_figs/               ← Wave rose figures (PEI-SMP)
```

---

## 🌐 TWC Ministries Website

**Transformational Worship Centre Ministries** is a Christian community based in Jamaica.

### Pages

| Section | Description |
|---|---|
| `Pages/About` | About the church and its mission |
| `Pages/Announcements` | Upcoming events and news |
| `Pages/Apps` | Digital tools and apps |
| `Pages/Charities` | Outreach and charity work |
| `Pages/Connect` | Contact and community links |
| `Pages/Donations` | Giving and donations |
| `Pages/Events` | Events calendar |
| `Pages/Live` | Sabbath live worship stream |
| `Pages/Ministries` | Church ministries overview |

### Tech Stack
- Plain HTML, CSS, JavaScript (no build step required)
- Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- Hosted on GitHub Pages with a custom domain via `CNAME`

---

## 🌀 Hurricane Melissa Storm Surge Maps

Interactive HTML maps showing storm surge scenarios across all **14 parishes of Jamaica** for a modelled Hurricane Melissa event. Three scenario sets are included:

| Folder | Scenario |
|---|---|
| `Hurrican_Melissa_surge_only/` | Storm surge only |
| `Hurrican_Melissa_with_est_setup/` | Surge + estimated setup |
| `Hurrican_Melissa_with_rain/` | Surge + rainfall contribution |

Each folder contains one `.html` file per parish (e.g. `Hurrican_Melissa_surge_only_Kingston.html`).

The `00_SS_index/` folder holds index/navigation pages for the storm surge maps.

---

## 📊 Coastal Figures (figs / rose_figs)

- **`figs/`** — Schematized diagrams for coastal monitoring points (PEI-SMP project, ~2,360 files)
- **`rose_figs/`** — Wave rose diagrams for the same points (~2,359 files)

> ⚠️ These two directories contain nearly **5,000 PNG files** and are the primary contributors to repo size. Consider hosting them via [Git LFS](https://git-lfs.com/) or a separate static storage service if the repo becomes slow to clone.

---

## 🚀 Running Locally

No build step is needed. Simply open any `.html` file in a browser, or serve the folder with a local server:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## 🗂️ Recommended Cleanup

A few housekeeping items worth addressing:

- **Numbered draft files** (`index (11).html`, `index (12).html`, etc. in the root and `00_SS_index/`) are likely old drafts and can be deleted once no longer needed.
- **`church_photos/` at the repo root** appears to duplicate `Pages/church_photos/`. Consider consolidating to one location.
- **Hurricane folder name typo** — `Hurrican_Melissa_*` is missing the final `e`. Renaming to `Hurricane_Melissa_*` would improve clarity (remember to update any internal links).

---

## 📬 Contact

For questions about the TWC Ministries website, visit [twcministries.net](https://www.twcministries.net) or reach out through the Connect page.
