// Pending decisions shown on the landing page (index.html). One entry per decision.
// Add an entry when a decision page is created; REMOVE the entry (and its folder) once the decision is logged.
// deadline: YYYY-MM-DD (the real last safe date, with the reason in deadlineWhy). who: "home" or "work".
window.DECISIONS = [
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
