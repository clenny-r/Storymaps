# Hurricane Melissa — Storm Surge Maps

Interactive HTML maps showing storm surge inundation across all **14 parishes of Jamaica** for a modelled Hurricane Melissa event. Three scenarios are provided, each in its own subfolder.

## Structure

```
Hurricane_Melissa/
├── surge_only/       ← Storm surge only (14 HTML files, one per parish)
├── with_est_setup/   ← Surge + estimated wind setup (14 HTML files)
├── with_rain/        ← Surge + rainfall contribution (14 HTML files)
├── index_pages/      ← Navigation and index pages for the map collection
├── figs/             ← Schematized coastal point figures (PEI-SMP, ~2,360 files)
└── rose_figs/        ← Wave rose figures (PEI-SMP, ~2,359 files)
```

## Scenarios

| Folder | Description |
|---|---|
| `surge_only/` | Base storm surge from Hurricane Melissa's winds and pressure |
| `with_est_setup/` | Surge plus estimated wind setup contribution |
| `with_rain/` | Surge plus rainfall — the most comprehensive inundation estimate |

## Parishes Covered

All 14 parishes of Jamaica: Clarendon, Hanover, Kingston, Manchester, Portland, Saint Andrew, Saint Ann, Saint Catherine, Saint Elizabeth, Saint James, Saint Mary, Saint Thomas, Trelawny, Westmoreland.

## Coastal Figures

- **`figs/`** — Schematized diagrams for PEI-SMP coastal monitoring points. Named as `{StationID} - Point {N}_[{Northing}][{Easting}]_schematized.png`
- **`rose_figs/`** — Wave rose diagrams for the same points. Named as `PEI-SMP R4 & R5 Point {N}_roses.png`
