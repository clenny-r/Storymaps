# Family Nutrition

Log what each person in the family eats, see what is missing from their diet, and get food ideas. Built first for a toddler, and works for every age.

Live at `twcministries.net/Pages/Apps/Family_Nutrition/`

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app (one page, works offline, saves on the phone) |
| `foods.js` | Food database: 167 foods with portions, made by `tools/build_foods.py` |
| `tools/build_foods.py` | Builds `foods.js` from the USDA database plus Jamaican recipe estimates |
| `worker/` | Cloudflare Worker that shares the family log and saves new-food requests to `Twc_private_data` (setup in `worker/README.md`) |
| `LESSONS.md` | Lessons learnt and the handoff prompt for the next session |

## Where the numbers come from

1. **Daily needs:** Health Canada Dietary Reference Intakes (DRIs), checked October 2026, by age and sex, plus pregnancy and breastfeeding. Sodium uses the Chronic Disease Risk Reduction intake (CDRR) as a "keep under" limit.
2. **Food values:** United States Department of Agriculture (USDA) National Nutrient Database for Standard Reference, Release 26, read from the public copy at `github.com/hadley/usdanutrients`.
3. **Jamaican dishes:** estimated from typical recipes built from USDA ingredients, and marked as estimates. Ackee uses the Grace Ackees label (calories, fat, carbohydrate, fibre, sugar, protein, sodium only).
4. **Unknown values stay unknown** (`null`), and the app shows "not known" with a star, never a fake zero.
5. **Toddler safety notes:** milk limit of 500 mL a day over age 1 (AboutKidsHealth, SickKids), whole milk until 2, albacore tuna 75 g a week for ages 1 to 4 (Health Canada), choking prevention under age 4 (Government of Newfoundland and Labrador healthy eating guidance).

## How new foods get added (the research queue)

1. A parent taps **Ask for a new food**. The food is logged at once (and counted at once if they typed the label numbers), and the request goes to `Twc_private_data/User_Data/nutrition/food_requests.json` with `status: "new"`.
2. In a later session, Claude reads that file on the laptop (`C:\Users\ramne\Documents\GitHub\Twc_private_data\User_Data\nutrition\food_requests.json`, auto-pulled hourly), researches each new food from a reliable source, and adds it to `tools/build_foods.py` with `r=["<request id>"]`.
3. Rebuild `foods.js`, commit and push the Storymaps repo, then set each request's `status` to `"added"` and `foodId` in the private repo.
4. Phones that load the new `foods.js` automatically swap the placeholder for the researched food, so earlier logs start counting.
