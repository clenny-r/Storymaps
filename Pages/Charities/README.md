# Charities

**File:** `Charities.html`

**Live URL:** [twcministries.net/Pages/Charities/Charities.html](https://www.twcministries.net/Pages/Charities/Charities.html)

This page showcases the outreach and charity work of TWC Ministries — feeding programmes, back-to-school drives, health fairs, hurricane relief, and more.

## Files

| File | Description |
|---|---|
| `Charities.html` | Main charities and outreach page |
| `index_pointer_charity.json` | Data file driving the photo slider on the page |
| `00_SS/` | Older or draft versions of the Charities page (see note below) |

## `index_pointer_charity.json`

This JSON file feeds the photo carousel on the Charities page. Each entry has:
- `src` — path to the image
- `alt` — accessibility description
- `caption` — caption shown on the slide

To add a new photo to the slider, add an entry to the `photos` array in this file and place the image in `Pages/church_photos/`.

## Notes

- `00_SS/` contains backup/draft versions (`Charities.html`, `Charities (2).html`). These can be deleted once the main page is finalised.
