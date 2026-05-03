# TWC Strong — Workout Tracker (Frontend)

A workout tracking app modelled on the [Strong app](https://www.strong.app/).

## File layout

| What | Where |
|---|---|
| **Frontend** | `Storymaps/Pages/Apps/Strong_app/worker/index.html` (this folder) |
| **Worker (backend)** | `00_All_Workers/twc-strong/index.js` |
| **Data store** | `Twc_private_data/User_Data/workout_app_data/workouts.json` |

This follows the same split as the other family apps: the worker source and `wrangler.toml` live under `00_All_Workers/twc-strong/` and are deployed with Wrangler; the static frontend lives here and is served by GitHub Pages.

## Features

- Password-protected multi-room login (admin can create rooms for additional users / families).
- **Workout** tab — start an empty workout or quick-start from a saved routine. Live timer, set-by-set logging with weight, reps, completion checkmark. Last-set values auto-fill the next set. Active workouts persist across page reloads.
- **Exercises** tab — 58 default exercises across 7 categories (Chest, Back, Legs, Shoulders, Arms, Core, Cardio) with images. Search, filter by category, create custom exercises.
- **Routines** tab — build reusable templates (Push Day, Pull Day, Leg Day…) with target weight × reps for each set.
- **History** tab — every saved workout, total volume, total time, and per-exercise progress charts (top weight per session, estimated 1RM).

---

## Deploy the worker

```cmd
cd C:\Users\ramne\Documents\GitHub\00_All_Workers\twc-strong
wrangler deploy
```

The `wrangler.toml` already contains the `GITHUB_TOKEN` and `ADMIN_PASS` vars (same token used by the other workers). See `00_All_Workers/twc-strong/COMMANDS.md` for full deployment notes.

---

## Wire the frontend to the worker

After deploying, Wrangler prints a URL like:
```
https://twc-strong.kd7bgn7q2z.workers.dev
```

Open `index.html` in this folder, find this line near the top of the `<script>` section:
```js
API_BASE: 'https://twc-strong.YOUR-SUBDOMAIN.workers.dev',
```
Replace with the actual URL, then commit & push the Storymaps repo.

---

## First login

The worker auto-bootstraps `User_Data/workout_app_data/workouts.json` in `Twc_private_data` on first login. Just log in with `ADMIN_PASS` (default `rowe 2026`) and the admin room is created automatically — no manual seed file needed.

If you previously had data at the old location `User_Data/workouts.json`, the worker will read it on the first request and copy it across to the new path automatically — your existing accounts and workouts come along.

## Settings & Admin

Tap the user badge (top right, next to your name) to open the **Settings** modal:

- **Account info** — name, members, role.
- **Data Management** — reset the streak counter, or wipe all workouts / routines / custom exercises for your account.
- **Admin · Accounts** (visible only to the admin) — list every account on the worker, their codes, member names and workout counts, and an **Add new account** form to create a new login (name + password + members).

---

## API Endpoints

All endpoints (except `/api/auth`) require `Authorization: Bearer <password>`.

| Method | Endpoint | Description |
|---|---|---|
| POST   | `/api/auth`                    | Validate password, return room info |
| GET    | `/api/state`                   | Full snapshot: exercises, workouts, routines, streakResetAt |
| POST   | `/api/exercises`               | Create custom exercise (name, category, equipment, primaryMuscle, imageUrl, videoUrl, instructions) |
| PUT    | `/api/exercises/:id`           | Edit custom exercise |
| DELETE | `/api/exercises/:id`           | Delete one custom exercise |
| DELETE | `/api/exercises`               | Wipe ALL custom exercises for this room |
| POST   | `/api/workouts`                | Save a completed workout |
| PUT    | `/api/workouts/:id`            | Edit a workout |
| DELETE | `/api/workouts/:id`            | Delete one workout |
| DELETE | `/api/workouts`                | Wipe ALL workout history for this room |
| POST   | `/api/routines`                | Create routine template |
| PUT    | `/api/routines/:id`            | Update routine |
| DELETE | `/api/routines/:id`            | Delete one routine |
| DELETE | `/api/routines`                | Wipe ALL routines for this room |
| POST   | `/api/settings/reset-streak`   | Reset streak counter (sets `streakResetAt = now`) |
| GET    | `/api/admin/rooms`             | (admin) List all rooms |
| POST   | `/api/admin/rooms`             | (admin) Create a room |
| DELETE | `/api/admin/rooms`             | (admin) Delete a room |

## Data Schema (`workouts.json`)

```json
{
  "rooms": {
    "<password>": {
      "name":          "Rowe Family",
      "members":       ["Clenmar"],
      "streakResetAt": null,
      "exercises":     [ /* custom exercises only — defaults live in the frontend */ ],
      "workouts":      [ /* completed workouts */ ],
      "routines":      [ /* reusable templates */ ]
    }
  }
}
```

## Default Exercise Images & Videos

The 58 default exercises use images from the public open-source [yuhonas/free-exercise-db](https://github.com/yuhonas/free-exercise-db) on GitHub. Each entry there ships with a start-pose (`0.jpg`) and end-pose (`1.jpg`) image — the **Preview** button on each exercise alternates between the two as a built-in motion preview, no video file needed. If an image fails to load, a category emoji is shown as a fallback.

Custom exercises support a **Video URL** field (in the create / edit form) accepting:

- direct video files: `.mp4`, `.webm`, `.mov`, `.m4v`
- animated GIFs / images
- YouTube links (full URL or short `youtu.be/...`)

The Preview button reads that URL when present; otherwise it falls back to the static image.

## Live URL (once deployed)

```
https://twcministries.net/Pages/Apps/Strong_app/worker/
```
