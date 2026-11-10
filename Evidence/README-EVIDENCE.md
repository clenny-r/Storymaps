# Weh Di Evidence Seh? (streaming page)

This folder is the public page for the series. Everything the page needs is inside it.

Folder: `C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Weh di evidence seh`

- `index.html`: the page (no outside scripts or fonts; works offline and on GitHub Pages).
- `episodes.js`: the episode list the page reads (questions, settings, cast, summaries, which videos exist).
- Videos: NOT in this repository. Since 9 Nov 2026 they live on Cloudflare R2 (bucket `twc-media`, folder `evidence`), served at `https://media.twcministries.net/evidence/eNN-pP.mp4` (`e04-p1.mp4` is Episode 4, Part 1). They were moved because GitHub Pages refuses sites over 1 GB. Your local `videos\` folder is kept as a backup and is ignored by Git.
- `posters\eNN-pP.jpg`: the thumbnail for each video (a frame of the question card).
- `assets\`: the TWC logo.
- `worker\`: the Cloudflare Worker that stores viewers' issue reports in the private repository, and how to set it up (see `worker\README.md`). Reports go to `Twc_private_data\User_Data\evidence_reports.json`.

## To replace a video

1. Open dash.cloudflare.com, R2 Object Storage, bucket `twc-media`, folder `evidence`.
2. Drag the new MP4 in with the same name (for example `e04-p1.mp4`); it overwrites the old one. Do not reload the tab until the upload finishes (a reload cancels it). The dashboard takes at most 100 files per drop.

Nothing else changes, and nothing goes to GitHub.

## To add a new video

1. Upload it to R2 as above, named `eNN-pP.mp4`.
2. Make a poster `posters\eNN-pP.jpg` (any 9:16 JPEG, about 540 by 960; a screenshot of the question card is best). Posters stay in this repository. If there is no poster the card shows a dark tile with the question.
3. In `episodes.js`, find the episode and change its part line from `{ part: 1 }` to
   `{ part: 1, file: "https://media.twcministries.net/evidence/e16-p1.mp4", poster: "posters/e16-p1.jpg", duration: 150 }`
   (duration in seconds). For a Part 2, add a second entry inside `parts`. Change the `summary` from "Coming soon." to one sentence. Update the `updated` date at the top.
4. Commit and push (only the small text and poster files go to GitHub).

## Issue reports

Every video has "Report an issue" in the player: Mark time, describe, send. Reports are stored privately (see `worker\README.md`). Until the worker address is pasted into `index.html` (`var REPORT_API`), the button copies or e-mails the report text instead.

## Links

- The page: `https://twcministries.net/Pages/Weh%20di%20evidence%20seh/` (the folder name has spaces, which browsers write as `%20`; renaming the folder to `evidence` would give a cleaner address, and nothing inside the folder would need changing).
- A single episode: add `#e04` to the address (or `#e04-p2` for a Part 2). The Copy link button in the player makes this link.

## What stays out of GitHub

Only this folder is in the repository. The working files (clips, pipeline, tests, version 2 builds) live in `C:\Users\ramne\Documents\Claude\Apologetics course` and are never copied here except the approved MP4 under its fixed name.

## Changes on 8 October 2026

1. Part descriptions: `episodes.js` ends with `window.PART_INFO`, one entry per Part 2 and Part 3 (key "episode.part": question, opening line, cast, summary). The player shows that text when the part is selected. To change a description, edit its entry there.
2. Reports are no longer listed on the page. The page still sends them. The worker's read address still answers anyone who knows it; closing that needs a change in the worker (`00_All_Workers\twc-evidence-reports`) and a `wrangler deploy`.
3. The player has a Season 1 and Season 2 menu with a grid of episode buttons, under Copy link, Previous and Next.

## Share pages and the look (8 October 2026, second change)

1. `s\eNN-pP.html`: one small page per video. It carries the title, summary and poster that WhatsApp shows when a link is shared, then opens the episode. The Copy link button gives this address. After any change to `episodes.js`, remake them with `python3 "C:\Users\ramne\Documents\Claude\Apologetics course\Video build\pipeline\v6\make_share_pages.py" "C:\Users\ramne\Documents\GitHub\Storymaps\Evidence"`.
2. Continue watching: the page remembers on the viewer's own device where they stopped (nothing is sent anywhere) and offers to carry on.
3. The page now loads one font (Bricolage Grotesque) from Google Fonts; without a connection it falls back to the device font.
