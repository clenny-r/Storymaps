# Family Tasks — Cloudflare Worker

This folder contains the backend worker and frontend for the **Rowe Family Task List** app.

## Files

| File | Description |
|---|---|
| `index.html` | Frontend app (password protected, served on GitHub Pages) |
| `index.js` | Cloudflare Worker — handles all API requests |

## Architecture

Same pattern as the Testimony app:
- **Frontend** — `index.html` hosted on GitHub Pages
- **Backend** — Cloudflare Worker (`index.js`) as the API
- **Database** — `../tasks.json` stored in this repository

---

## Setup

### Step 1: Create a Cloudflare Worker

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create Application** → **Create Worker**
3. Name it `twc-family-tasks`
4. Click **Deploy**

### Step 2: Add Environment Variables (Secrets)

In your worker dashboard → **Settings** → **Variables**, add:

| Variable | Value |
|---|---|
| `GITHUB_TOKEN` | Your existing GitHub Personal Access Token (same one used for the Testimony app) |
| `PASSWORD` | `rowe 2026` |

Click **Encrypt** for each.

### Step 3: Deploy the Worker Code

1. In the worker dashboard click **Quick Edit**
2. Delete all existing code
3. Paste the entire contents of `index.js`
4. Click **Save and Deploy**

### Step 4: Get Your Worker URL

Your worker will be at:
```
https://twc-family-tasks.YOUR-SUBDOMAIN.workers.dev
```

### Step 5: Confirm the Frontend URL

The frontend already points to the correct worker URL:
```js
API_BASE: 'https://twc-family-tasks.kd7bgn7q2z.workers.dev',
```
No changes needed — just commit and push after deploying.

1. Open `index.html`
2. Find this line near the top of the `<script>` section:
   ```js
   API_BASE: 'https://your-worker-name.workers.dev',
   ```
3. Replace it with your actual worker URL, for example:
   ```js
   API_BASE: 'https://twc-family-tasks.kd7bgn7q2z.workers.dev',
   ```
4. Commit and push

### Step 6: Initialise the Database

Make sure `../tasks.json` exists in the repo with this content (it already does):
```json
{
  "tasks": []
}
```

---

## Live URL

Once deployed:
```
https://twcministries.net/Pages/Apps/Family_Tasks/worker/
```

## API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/tasks` | None | Fetch all tasks |
| POST | `/api/tasks` | Password | Add a new task |
| PUT | `/api/tasks/:id` | Password | Update task (text, complete, priority, reorder) |
| DELETE | `/api/tasks/:id` | Password | Delete a task |
