# Decisions: how to make a decision page (read this first)

Clenmar's standing workflow for any decision based on an analysis, at home (with Shadene) or at work (with his boss).
Trigger phrase: when he says **"make this a decision html"**, do all of the steps below without asking first.
Afterwards ask only the minimum questions needed to finalize next steps.

Landing page (all pending decisions, sorted by deadline, overdue in red): https://twcministries.net/Decisions/
Repository folder: C:\Users\ramne\Documents\GitHub\Storymaps\Decisions (repo clenny-r/Storymaps, GitHub Pages).

## Steps

1. **Do the analysis first.** Real quotes, real numbers, sources checked. Never invent figures.
2. **Make a subfolder** `Decisions/<short-name>/` (lowercase, hyphens). Copy `tenant-insurance/index.html` as the template.
3. **Main page `index.html` must contain, in this order:**
   1. Back link to `../` (the landing page).
   2. **Critical box "What you need to decide"** (yellow box) with six items: the question, the deadline and why,
      the recommended option and its cost, the fallback if money or time is tight, the main risk of waiting,
      and what happens next (how to buy or act).
   3. Option cards side by side, one marked **BEST PICK** (green border), others ranked (runner up, third, not usable).
   4. A head-to-head table of the features that actually differ.
   5. A plain-language glossary of any jargon (e.g. deductible).
   6. The decision and next steps.
   7. The **Finalize decision** block (radio options, "decided by" box, green button). Copy it from the template;
      it opens a prefilled GitHub issue in clenny-r/Storymaps titled `DECISION <short-name>: <choice>` with label
      `decision`, and copies a summary to the clipboard to paste to Claude.
4. **Money is shown per pay (biweekly)**: monthly x 12 / 26, yearly x 1/26. Also show the monthly or yearly figure as secondary text.
5. **Privacy: the site is public.** No addresses, account or quote numbers, phone numbers, emails, policy numbers, or
   client names and fees from CBCL work. Use generic wording ("our apartment", "the client"). Add `<meta name="robots" content="noindex">`.
6. **Extra pages** (cheaper tiers, detailed breakdowns) go in the same subfolder, each with a back link to `../` and to `index.html`.
7. **Register it** in `decisions.js`: id, title, who ("home" or "work"), decideBy, created, deadline (YYYY-MM-DD, the real
   last safe date), deadlineWhy, bestPick, critical (3 or 4 one-line facts), url. The landing page sorts and colours by deadline.
8. **Commit and push.** The Claude shell on the laptop has no GitHub login: push with GitHub Desktop via computer use
   (grant both "GitHub Desktop" and "githubdesktop.exe"; click Fetch origin first, then Push origin). Pages deploys in about 2 minutes.
   Keep the site under 1 GB: big media goes to Cloudflare R2 (bucket twc-media, https://media.twcministries.net/), never into this repo.
9. **Send Clenmar the link** to the decision page (and the landing page).

## When a decision is finalized

1. Read the GitHub issue labelled `decision` (or his pasted summary).
2. Log the outcome where the project keeps its notes (for example the task's lessons file).
3. Remove the entry from `decisions.js`, delete the subfolder, commit, push, close the issue.

## Current pages

- tenant-insurance/ : apartment tenant insurance (Nov 2026), deadline 9 Dec 2026.
- car-share-or-buy/ : keep Communauto car sharing (which plan) or buy a used car (Nov 2026), deadline 30 Nov 2026. Extra page: calculator.html.
- immigration-costs-cbcl/ : reimbursement talks with Clenmar's manager (Nov 2026): talk 1 by 12 Nov (costs to date + Friday work permits), talk 2 after the first CEC draw (PR fees, by about 18 Dec).
