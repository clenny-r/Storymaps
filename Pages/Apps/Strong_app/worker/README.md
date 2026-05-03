# TWC Strong — Workout Tracker (Frontend)

A workout tracking app modelled on the [Strong app](https://www.strong.app/).

## File layout

| What | Where |
|---|---|
| **Frontend** | `Storymaps/Pages/Apps/Strong_app/worker/index.html` (this folder) |
| **Worker (backend)** | `00_All_Workers/twc-strong/index.js` |
| **Data store** | `Twc_private_data/User_Data/workouts.json` |

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

The worker auto-bootstraps `User_Data/workouts.json` in `Twc_private_data` on first login. Just log in with `ADMIN_PASS` (default `rowe 2026`) and the admin room is created automatically — no manual seed file needed.

---

## API Endpoints

All endpoints (except `/api/auth`) require `Authorization: Bearer <password>`.

| Method | Endpoint | Description |
|---|---|---|
| POST   | `/api/auth`              | Validate password, return room info |
| GET    | `/api/state`             | Full snapshot: exercises, workouts, routines |
| POST   | `/api/exercises`         | Create custom exercise |
| PUT    | `/api/exercises/:id`     | Edit custom exercise |
| DELETE | `/api/exercises/:id`     | Delete custom exercise |
| POST   | `/api/workouts`          | Save a completed workout |
| PUT    | `/api/workouts/:id`      | Edit a workout |
| DELETE | `/api/workouts/:id`      | Delete a workout |
| POST   | `/api/routines`          | Create routine template |
| PUT    | `/api/routines/:id`      | Update routine |
| DELETE | `/api/routines/:id`      | Delete routine |
| GET    | `/api/admin/rooms`       | (admin) List all rooms |
| POST   | `/api/admin/rooms`       | (admin) Create a room |
| DELETE | `/api/admin/rooms`       | (admin) Delete a room |

## Data Schema (`workouts.json`)

```json
{
  "rooms": {
    "<password>": {
      "name":       "Rowe Family",
      "members":    ["Clenmar"],
      "exercises":  [ /* custom exercises only — defaults live in the frontend */ ],
      "workouts":   [ /* completed workouts */ ],
      "routines":   [ /* reusable templates */ ]
    }
  }
}
```

## Default Exercise Images

The 58 default exercises use images from the public open-source [yuhonas/free-exercise-db](https://github.com/yuhonas/free-exercise-db) on GitHub. If an image fails to load, a category emoji is shown as a fallback. Custom exercises can use any public image URL.

## Live URL (once deployed)

```
https://twcministries.net/Pages/Apps/Strong_app/worker/
```
