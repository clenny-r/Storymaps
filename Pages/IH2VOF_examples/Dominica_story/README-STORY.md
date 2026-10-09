# Dominica story page ("Can nature hold back the sea?")

Folder: `C:\Users\ramne\Documents\GitHub\Storymaps\Pages\IH2VOF_examples\Dominica_story`
Set up like `C:\Users\ramne\Documents\GitHub\Storymaps\Evidence`: one page, one data file, videos and posters beside them.

| File or folder | What it is |
|---|---|
| `index.html` | The story page (layout, charts, scrolling video section). Open it in a browser. |
| `story.js` | All text and numbers that are likely to change: title, sites, the seven options, chart data, conclusions, limits, glossary. Edit this file, not the page. |
| `videos\` | 17 high-quality MP4 files (about 150 MB), copied from `C:\IH2VOF\CASES\Dominica_design_runs\04_hq_videos`. |
| `posters\` | One still frame per video, cut at the largest wave group. |
| `assets\` | `sections_marsh_draped.png` (corrected S05 and S07 sections, not used on the page yet). |
| `build_assets.py` | Copies the videos and cuts the posters again. Run it after a rerun: `python build_assets.py`. |

## Rules
1. To replace a video, copy the new MP4 over the old name in `videos\` and rerun `build_assets.py` for the poster.
2. Numbers come from `C:\IH2VOF\CASES\Dominica_design_runs` (`03b_run_basin\results\summary.csv`, `03c_run_draped\results\summary.csv`, `06_goda_check\goda_check.csv`). If a run changes, change the number in `story.js`.
3. The map and its imagery load from the internet (Leaflet from cdnjs, Esri World Imagery). Everything else works offline.
4. The page carries `noindex` and a "Draft for internal review" label.

## Before this is pushed to GitHub
This repository is published at twcministries.net, so a push makes the page PUBLIC at
`https://twcministries.net/Pages/IH2VOF_examples/Dominica_story/`. The results belong to a client project and
permission to publish (client and CBCL) is still an open question in the paper manuscript. Nothing has been
committed or pushed. Options: keep the folder out of git (add `Pages/IH2VOF_examples/Dominica_story/` to
`.gitignore`), or push only after permission.

## 2026-10-09 Wave forces section added
- New section "Wave forces" (id `forces`) between "Other sites" and "Conclusions": force time series for docks SD1 and SD2 at +1.48 m and a comparison with the Goda hand calculation.
- Data: `window.FORCES` at the end of `story.js`, built from `C:\IH2VOF\CASES\Portsmouth_SD1_proposed_WL148\post\pressure_forces.csv`, `C:\IH2VOF\CASES\Portsmouth_SD2_proposed_WL148\post\pressure_forces.csv` and `C:\IH2VOF\CASES\Dominica_design_runs\06_goda_check\goda_check.csv`.
