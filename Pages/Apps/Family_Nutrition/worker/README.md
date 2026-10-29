# Family Nutrition: Cloudflare Worker setup

The app works on its own straight away, with everything saved on each phone. This one-time setup lets both parents' phones share one family log, and sends new-food requests to the private repository.

Same pattern as the Family Tasks and Medicine Tracker workers.

## What it stores (in `clenny-r/Twc_private_data`)

| File | What is in it |
|---|---|
| `User_Data/nutrition/families.json` | Family codes and names |
| `User_Data/nutrition/family-<id>.json` | People, the food log and family foods for one family |
| `User_Data/nutrition/food_requests.json` | New foods families asked for, waiting to be researched |

## Steps (about 5 minutes)

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com).
2. Go to **Workers & Pages**, then **Create**, then **Create Worker**.
3. Name it exactly `twc-family-nutrition` and click **Deploy**. The app already points to `https://twc-family-nutrition.kd7bgn7q2z.workers.dev`.
4. Click **Edit code**, delete everything, paste all of `index.js` from this folder, then click **Deploy**.
5. Go to **Settings**, then **Variables and Secrets**, and add two secrets (type **Secret**):

   | Name | Value |
   |---|---|
   | `GITHUB_TOKEN` | The same GitHub Personal Access Token the other TWC workers use (it must be able to write to `Twc_private_data`) |
   | `ADMIN_PASS` | Your family code. Pick something only the family knows. |

6. Open `https://twc-family-nutrition.kd7bgn7q2z.workers.dev` in a browser. It should say "TWC Family Nutrition API is running."
7. In the app on each phone, go to **Family**, then **Share between phones**, type the family code and tap **Connect**. The first sign-in with the admin code creates the "Rowe Family" automatically.

## Adding another family (optional)

Send a request as the admin:

```
POST /api/families
Authorization: Bearer <ADMIN_PASS>
{ "name": "Smith Family", "code": "smith code 2026" }
```

## Endpoints

| Method and path | Use |
|---|---|
| `POST /api/auth` | Check a family code |
| `GET /api/data` | Read the family's log |
| `PUT /api/data` | Merge this phone's changes into the family log (newest edit wins, by item id) |
| `POST /api/food-request` | Send a new food to be researched |
| `GET /api/food-requests` | List this family's requests |
| `POST /api/families` | Admin: add a family |
