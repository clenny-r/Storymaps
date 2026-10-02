# Weh Di Evidence Seh? (streaming page)

This folder is the public page for the series. Everything the page needs is inside it.

Folder: `C:\Users\ramne\Documents\GitHub\Storymaps\Evidence`

- `index.html`: the page (no outside scripts or fonts; works offline and on GitHub Pages).
- `episodes.js`: the episode list the page reads (questions, settings, cast, summaries, which videos exist).
- `videos\eNN-pP.mp4`: one file per episode and part, named by number only (`e04-p1.mp4` is Episode 4, Part 1).
- `posters\eNN-pP.jpg`: the thumbnail for each video (a frame of the question card).
- `assets\`: the TWC logo.

## To replace a video

1. Copy the new MP4 over the old file in `videos\`, keeping the same name (for example `videos\e04-p1.mp4`).
2. Open GitHub Desktop, write a one line summary, Commit, Push.

Nothing else changes. Keep files under 20 MB each (GitHub refuses files over 100 MB and warns over 50 MB).

## To add a new video

1. Copy it in as `videos\eNN-pP.mp4`.
2. Make a poster `posters\eNN-pP.jpg` (any 9:16 JPEG, about 540 by 960; a screenshot of the question card is best). If there is no poster the card shows a dark tile with the question.
3. In `episodes.js`, find the episode and change its part line from `{ part: 1 }` to
   `{ part: 1, file: "videos/e16-p1.mp4", poster: "posters/e16-p1.jpg", duration: 150 }`
   (duration in seconds). For a Part 2, add a second entry inside `parts`: `{ part: 2, file: "videos/e16-p2.mp4", poster: "posters/e16-p2.jpg", duration: 140 }`.
   Change the `summary` from "Coming soon." to one sentence. Update the `updated` date at the top.
4. Commit and push.

## Links

- The page: `https://twcministries.net/Evidence/` (renamed from "Weh di evidence seh" on 2 October 2026).
- A single episode: add `#e04` to the address (or `#e04-p2` for a Part 2). The Copy link button in the player makes this link.

## What stays out of GitHub

Only this folder is in the repository. The working files (clips, pipeline, tests, version 2 builds) live in `C:\Users\ramne\Documents\Claude\Apologetics course` and are never copied here except the approved MP4 under its fixed name.
