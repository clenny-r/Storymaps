# Issue reports (Weh Di Evidence Seh?)

The "Report an issue in this video" panel in the player sends reports to the Cloudflare Worker `twc-evidence-reports`.

- Worker code and deploy notes: `C:\Users\ramne\Documents\GitHub\00_All_Workers\twc-evidence-reports` (index.js, wrangler.toml, COMMANDS.md). Deploy with `wrangler deploy` from that folder.
- Data: `C:\Users\ramne\Documents\GitHub\Twc_private_data\User_Data\evidence_data\reports.json` (private repository; the worker appends to it).
- The page points at `https://twc-evidence-reports.kd7bgn7q2z.workers.dev` (`var REPORT_API` near the top of the script in `..\index.html`). Change it there if Cloudflare gives another address.

Each report: id, date, episode, part, file, time in seconds and as m:ss, type (picture, sound, words, captions, facts, other), text, name, page, browser, status (open; set fixed, wontfix or spam by hand).

No secrets live in this public folder; the token is only in the worker's wrangler.toml, which is not committed.
