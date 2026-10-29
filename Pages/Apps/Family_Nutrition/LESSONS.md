# Family Nutrition: lessons learnt

## 29 Oct 2026: version 1.0 built
1. App folder: C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Family_Nutrition (index.html, foods.js, worker\, tools\). Linked from C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\index.html as a Health card.
2. Daily needs are Health Canada Dietary Reference Intakes, checked against canada.ca tables on 29 Oct 2026 (vitamins, elements, macronutrients). Toddler advice checked against AboutKidsHealth (milk 500 mL a day over age 1, whole milk until 2), Health Canada (albacore tuna 75 g a week for ages 1 to 4) and Newfoundland and Labrador choking guidance (under 4).
3. Food values come from USDA SR26 via the public GitHub copy hadley/usdanutrients (the cloud workspace cannot reach USDA or the Canadian Nutrient File directly, but GitHub works). Read the .rda files with pyreadr.
4. Unknown nutrients must stay null, never 0. Recipe estimates treat seasonings, oil, water, salt and sugar as zero when USDA lists nothing, and treat other missing ingredients as unknown only when they are 15% or more of the recipe weight.
5. Canadian differences to remember: white rice in Canada is usually not enriched (use unenriched rice), US breakfast cereal values differ from Canadian boxes (tag "uscereal" shows a note), salmon must be a variety that has vitamin D data (sockeye 15086, canned pink 15260).
6. Ackee is not in USDA SR26. Only the Grace Ackees label values are used (calories, fat, carbohydrate, fibre, sugar, protein, sodium). Research full ackee micronutrients from a Caribbean food composition table next.
7. Saltfish is modelled as cooked cod plus 1.5 g salt per 100 g; real sodium depends on soaking. Worth checking against a better source.
8. The Cloudflare Worker (twc-family-nutrition) must be deployed by Clenmar in the Cloudflare dashboard (steps in worker\README.md). Until then the app works on each phone alone and queues new-food requests.
9. Getting files to the laptop: the laptop Linux shell can reach GitHub, npm and PyPI but not claude.ai or paste sites, and the cloud session cannot push. Transfer worked by tar + gzip + base64 in 19 KB chunks with an md5 check per chunk.
10. Commit on the 3 GB mounted repo with plumbing (temporary index, update-index, write-tree, commit-tree, update-ref); plain git commit hangs. Then Clenmar pushes from GitHub Desktop.

## New food research queue
Requests land in C:\Users\ramne\Documents\GitHub\Twc_private_data\User_Data\nutrition\food_requests.json. Steps are in README.md under "How new foods get added".
