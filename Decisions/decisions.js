// Pending decisions shown on the landing page (index.html). One entry per decision.
// Add an entry when a decision page is created; REMOVE the entry (and its folder) once the decision is logged.
// deadline: YYYY-MM-DD (the real last safe date, with the reason in deadlineWhy). who: "home" or "work".
window.DECISIONS = [
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
