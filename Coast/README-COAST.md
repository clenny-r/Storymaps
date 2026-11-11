# Coast Explained (streaming page)

The public page for the Coast Explained series, served at https://twcministries.net/Coast/ (repository Storymaps, folder `Coast`).

- `index.html`: the page (episode grid, player, Log an edit panel).
- `episodes.js`: the episode list (number, title, one-sentence summary, video address, poster, length in seconds).
- `posters\ceNN.jpg`: thumbnails (540 x 960, a frame of the episode with the title band).
- Videos: NOT in this repository. They live on Cloudflare R2, bucket `twc-media`, folder `coast`, served at `https://media.twcministries.net/coast/ceNN.mp4` (`ce01.mp4` is release 1). Web copies are under 10 MB each (two-pass H.264); the full-quality finals stay in `C:\Users\ramne\Documents\Claude\Coastal course\03_Renders\epNN`, and the web copies are backed up in `C:\Users\ramne\Documents\Claude\Coastal course\04_Published\web_videos`.

## Log an edit (how edits reach Claude)

Every episode has a "Log an edit" panel: pause, press Mark time, pick a type, describe the change, Send. It posts to the same Cloudflare Worker as Weh Di Evidence Seh (`twc-evidence-reports`), so edits land in `Twc_private_data\User_Data\evidence_data\reports.json`. Coast entries are told apart by:

- `episode` = 99 (the worker only accepts 1 to 99; Decisions uses 98),
- `part` = release number (1 to 18),
- `text` starting with `[COAST] ENN Title | `.

A Claude session reads them from `https://twc-evidence-reports.kd7bgn7q2z.workers.dev/api/reports` (filter episode 99 with text starting [COAST]), fixes the episode, re-renders, replaces the R2 video under the same name, and sets the report status by hand.

## To replace a video

Open dash.cloudflare.com, R2 Object Storage, bucket `twc-media`, folder `coast`, and drag in the new `ceNN.mp4` with the same name (it overwrites). Do not reload the tab until the upload finishes.

## To add an episode

1. Upload `ceNN.mp4` to R2 as above.
2. Add `posters\ceNN.jpg`.
3. Add an entry to `episodes.js` and change `COAST_UPDATED`.
4. Commit and push (only text and poster files go to GitHub).
