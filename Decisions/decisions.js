// Pending decisions shown on the landing page (index.html). One entry per decision.
// Add an entry when a decision page is created; REMOVE the entry (and its folder) once the decision is logged.
// deadline: YYYY-MM-DD (the real last safe date, with the reason in deadlineWhy). who: "home" or "work".
window.DECISIONS = [
  {
    id: "immigration-costs-cbcl",
    title: "Immigration costs: reimbursement talks with my manager",
    who: "work",
    decideBy: "Clenmar and his manager",
    created: "2026-11-10",
    deadline: "2026-11-12",
    deadlineWhy: "Work permits are filed and paid Fri 13 Nov ($510); talk 2 on the PR fees by about 18 Dec, before the 29 Dec payment",
    bestPick: "Reimburse all $1,747.74 now; support both PR applications ($4,500) after the first draw",
    critical: [
      "Spent so far: $1,237.74 (tests, police certificates, spouse's assessment); receipts ready",
      "Friday 13 Nov: $510 in work permit fees for the family",
      "Each PR application is $2,250 (AIP 29 Dec; CEC within 60 days of an invitation)",
      "Talk 2 after the first CEC draw, from about 17 Nov"
    ],
    url: "immigration-costs-cbcl/"
  },
  {
    id: "car-share-or-buy",
    title: "Car sharing or buy a used car",
    who: "home",
    decideBy: "Clenmar and Shadene",
    created: "2026-11-10",
    deadline: "2026-11-30",
    deadlineWhy: "Communauto plan changes start on the 1st; request by 30 Nov to have Value Plus from 1 Dec",
    bestPick: "Keep Communauto on Value Plus, $58 per pay",
    critical: [
      "Car sharing costs $58 per pay; owning a used car about $300 per pay",
      "Value Plus saves about $110 a year vs our current Value Extra",
      "Buying only wins once Shadene would drive to work 5 days a week",
      "The $500 Communauto bond is refundable when we leave"
    ],
    url: "car-share-or-buy/"
  },
  {
    id: "tenant-insurance",
    title: "Tenant insurance for our apartment",
    who: "home",
    decideBy: "Clenmar and Shadene",
    created: "2026-11-09",
    deadline: "2026-12-09",
    deadlineWhy: "Westland quote expires 9 Dec; we are uninsured until we buy, so sooner is safer",
    bestPick: "TD Insurance, $12.84 per pay",
    critical: [
      "We have no tenant insurance right now",
      "Best value: TD at $12.84 per pay ($27.83/month), full cover with water damage",
      "Cheapest safe option: Westland $11.36 per pay, but only $10,000 of belongings covered",
      "TD is bought by phone; the other two online"
    ],
    url: "tenant-insurance/"
  }
];
