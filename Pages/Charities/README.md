# Charities

**File:** `index.html`

**Live URL:** [twcministries.net/Pages/Charities/](https://www.twcministries.net/Pages/Charities/)

This page showcases the outreach and charity work of TWC Ministries — feeding programmes, back-to-school drives, health fairs, hurricane relief, and more.

## Files

| File | Description |
|---|---|
| `index.html` | Main charities and outreach page |
| `index_pointer_charity.json` | Data file driving the photo slider on the page |
| `00_SS/` | Older or draft versions of the Charities page (see note below) |

## `index_pointer_charity.json`

This JSON file feeds the photo carousel on the Charities page. Each entry has:
- `src` — path to the image
- `alt` — accessibility description
- `caption` — caption shown on the slide

To add a new photo to the slider, add an entry to the `photos` array in this file and place the image in `Pages/church_photos/`.
