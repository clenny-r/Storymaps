# church_photos

Shared image assets used across the TWC Ministries website.

## Structure

```
church_photos/
├── hero.jpg                    ← Hero/banner image used on the home page
├── Image1-transparent.gif      ← TWC Ministries logo (transparent background)
├── Image1-transparent1.gif     ← Alternate logo variant
├── charity_photos/             ← Photos for the Charities page
└── index_pointer/              ← Photos used in the home page charity slider
```

## Usage

| Asset | Used by |
|---|---|
| `hero.jpg` | Home page hero section |
| `Image1-transparent.gif` | Navigation bar logo, Open Graph preview image |
| `charity_photos/` | Charities page photo gallery |
| `index_pointer/` | Home page slider (`index_pointer.json`) |

## Adding Images

- **Charity photos**: Add to `charity_photos/` and reference from `Charities.html`
- **Home page slider**: Add to `index_pointer/` and add an entry in `/index_pointer.json`
- Use descriptive file names (no spaces — use hyphens or underscores)
- Compress images before committing to keep the repo size manageable (recommended: under 500 KB per image)

## Notes

There is a duplicate `church_photos/` folder at the repository root. Both folders currently contain the same core assets (`hero.jpg`, `Image1-transparent.gif`, etc.). Consider consolidating to this location (`Pages/church_photos/`) and removing the root-level copy.
