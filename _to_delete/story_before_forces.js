// Dominica coastal options story. Edit this file to change text, numbers or videos; index.html reads it on load.
// Videos live in videos/ and posters in posters/ with the same name (see build_assets.py).
// Numbers come from C:\IH2VOF\CASES\Dominica_design_runs (03b_run_basin, 03c_run_draped, 06_goda_check).
window.STORY = {
  title: "Can nature hold back the sea?",
  subtitle: "Testing seven ways to protect a Dominican shoreline, inside a computer wave tank",
  status: "Draft for internal review. Results are indicative and not for design.",
  updated: "8 October 2026",
  author: "Clenmar Rowe, P.Eng., CBCL Limited",
  lead: "Storm waves already wash over the low coast at Scott's Head, Portsmouth and Pottersville. Engineers have drawn rock structures to stop them. Could reefs, marsh plants and seagrass do the same job? We ran 25 storm simulations to find out."
};

window.SITES = [
  { id: "sh", name: "Scott's Head", lat: 15.2113, lon: -61.3678, text: "A fringing reef flat with a low backshore, only about 1.2 m above mean sea level. Seven options were tested here." },
  { id: "pot", name: "Pottersville", lat: 15.2952, lon: -61.3867, text: "A reef-fronted shore in Roseau with a low backshore. Existing ground against a proposed rock reef structure." },
  { id: "pm", name: "Portsmouth", lat: 15.5622, lon: -61.4605, text: "A revetted frontage and two proposed docks at the Indian River. Existing against proposed, with wave forces on the docks." }
];

// Scott's Head, still water level +0.78 m above mean sea level. q = water passing the backshore line in a 10 minute storm (cubic metres per metre of shore).
window.OPTIONS = [
  { id: "sh-s01", code: "S01", name: "Do nothing", kind: "base", q: 118.8, wave: 1.61, speed: 6.18,
    what: "The shoreline as it is today.",
    saw: "Waves cross the reef flat, run up the beach and pour over the top again and again. Nearly four shipping containers of water cross every metre of shoreline in ten minutes." },
  { id: "sh-s02", code: "S02", name: "Engineered rock design", kind: "grey", q: 31.5, wave: 0.58, speed: 2.40,
    what: "The design on the drawings: an offshore rock reef, a cobble beach and a buried rock revetment.",
    saw: "The rock reef breaks the waves early and the cobble beach soaks up what is left. Flooding drops by about three quarters." },
  { id: "sh-s03", code: "S03", name: "Rock reef only", kind: "grey", q: 82.3, wave: 1.31, speed: 4.71,
    what: "Only the offshore rock reef, with the beach left as it is.",
    saw: "Waves are smaller behind the reef, but the water still piles up and spills over the low shore. Flooding drops by only a third." },
  { id: "sh-s04", code: "S04", name: "Cobble beach only", kind: "grey", q: 79.4, wave: 0.54, speed: 3.42,
    what: "Only the cobble beach nourishment.",
    saw: "This option calms the waves at the shore the most (two thirds smaller), yet flooding drops by only a third. Calm waves did not mean a dry road." },
  { id: "sh-s06", code: "S06", name: "Seagrass only", kind: "green", q: 79.0, wave: 1.55, speed: 5.39,
    what: "A seagrass meadow on the sea bed in front of the shore.",
    saw: "The meadow takes a little energy out of each wave. On its own it cuts flooding by a third." },
  { id: "sh-s05", code: "S05", name: "Marsh plants on the upper beach", kind: "green", q: 15.9, wave: 1.59, speed: 1.97,
    what: "A band of dense marsh vegetation, half a metre tall, across the upper beach and the top of the shore.",
    saw: "The waves arriving at the beach are just as big as today. But the thin sheet of water that rushes up the beach is slowed by the plants, and little gets over the top. Flooding drops by 87 %." },
  { id: "sh-s07", code: "S07", name: "Hybrid: reef, marsh and seagrass", kind: "hybrid", q: 12.1, wave: 1.21, speed: 1.56,
    what: "The rock reef, the marsh band and the seagrass together.",
    saw: "The best result of all: flooding drops by 90 %, and the water near the bed moves slowly enough for cobbles to stay in place." }
];

// Each dot: one "before and after" pair. kt = wave height after / before (1 = no change). qrel = flooding after / before.
window.PAIRS = [
  { name: "Scott's Head rock design", kt: 0.363, qrel: 0.265, sh: 1 },
  { name: "Scott's Head rock reef only", kt: 0.818, qrel: 0.693, sh: 1 },
  { name: "Scott's Head cobble beach only", kt: 0.336, qrel: 0.669, sh: 1, label: "Cobble beach: waves down 66 %, flooding down 33 %", dx: -6, dy: -32, anchor: "start" },
  { name: "Scott's Head marsh plants", kt: 0.989, qrel: 0.134, sh: 1, label: "Marsh: waves unchanged, flooding down 87 %", dx: -12, dy: -12, anchor: "end" },
  { name: "Scott's Head seagrass only", kt: 0.965, qrel: 0.665, sh: 1 },
  { name: "Scott's Head hybrid", kt: 0.755, qrel: 0.102, sh: 1 },
  { name: "Portsmouth revetment", kt: 0.651, qrel: 0.0, sh: 0 },
  { name: "Pottersville reef structure", kt: 0.446, qrel: 0.871, sh: 0, label: "Pottersville: waves halved, flooding down 13 %", dx: 12, dy: -8, anchor: "start" },
  { name: "Portsmouth dock SD1", kt: 0.067, qrel: 0.010, sh: 0 },
  { name: "Portsmouth dock SD2", kt: 0.048, qrel: 0.048, sh: 0 },
  { name: "Portsmouth revetment, high water", kt: 0.468, qrel: 0.418, sh: 0 },
  { name: "Scott's Head rock design, high water", kt: 0.443, qrel: 0.652, sh: 1 },
  { name: "Pottersville reef structure, high water", kt: 0.484, qrel: 0.858, sh: 0 },
  { name: "Portsmouth dock SD1, high water", kt: 0.212, qrel: 0.161, sh: 0 },
  { name: "Portsmouth dock SD2, high water", kt: 0.260, qrel: 0.295, sh: 0 }
];

// Reduction in flooding (per cent) at today's design water level (+0.78 m) and with the sea 0.70 m higher (+1.48 m).
window.LEVELS = [
  { name: "Portsmouth revetment", low: 100, high: 58 },
  { name: "Portsmouth dock SD1", low: 99, high: 84 },
  { name: "Portsmouth dock SD2", low: 95, high: 70 },
  { name: "Scott's Head rock design", low: 73, high: 35 },
  { name: "Pottersville reef structure", low: 13, high: 14 }
];

window.CONCLUSIONS = [
  { big: "90 %", head: "Nature-based options can match rock, on paper", text: "At Scott's Head the hybrid option cut flooding by 90 % and marsh plants alone by 87 %, against 73 % for the engineered rock design." },
  { big: "1/3", head: "Single measures are not enough", text: "A rock reef, a cobble beach or seagrass, each on its own, cut flooding by only about a third." },
  { big: "≠", head: "Calmer waves are not the same as less flooding", text: "Across 15 before and after pairs there was almost no link between how much a design calmed the waves and how much flooding it stopped. What happens at the very top of the beach matters most." },
  { big: "+0.7 m", head: "A higher sea eats the benefit", text: "With the sea 0.70 m higher, the rock design at Scott's Head fell from a 73 % cut to 35 %. Every design should be checked at the higher level." },
  { big: "×3", head: "Fewer, bigger gulps", text: "The proposed structures stop the small waves but let the largest ones through as a few big surges. At Pottersville the biggest single surge tripled." },
  { big: "0.44", head: "Dock forces need a second opinion", text: "The model's peak wave forces on the Portsmouth docks were less than half of the standard hand-calculation (Goda) values. The larger values should guide structural design." }
];

window.CAVEATS = [
  "The marsh and seagrass are represented as a very open sponge, not as real stems that bend. This stand-in has not been calibrated, so the marsh result is the least certain number in the study.",
  "The marsh options have not yet been run with the higher sea level.",
  "Each run is one ten minute storm burst of about 55 waves. Extreme values would shift with a different burst.",
  "The model is a two-dimensional slice through the shore. Currents along the coast and channels through the reef are not included.",
  "An early version of the marsh runs had the plants floating above the sea bed by mistake. It was found, fixed and rerun; only the corrected runs are shown here."
];

window.GLOSSARY = [
  ["IH2VOF", "The wave model used, developed by the Environmental Hydraulics Institute of Cantabria (IHCantabria), Spain. It solves the equations of fluid motion on a fine grid and tracks the water surface, so it can show waves breaking and spilling over land."],
  ["Overtopping", "Water that gets over the top of the shore or structure and floods the land behind. Here it is measured in cubic metres of water per metre of shoreline during the ten minute storm."],
  ["Still water level", "The level of the sea without waves: tide plus storm surge. Two levels were tested, +0.78 m and +1.48 m above mean sea level."],
  ["Significant wave height", "The average height of the highest third of the waves; the usual way to describe a sea state with one number."],
  ["Revetment", "A sloping layer of rock placed on a shoreline to absorb wave energy."],
  ["Hybrid", "A design that combines built elements, such as a rock reef, with natural ones, such as marsh plants and seagrass."],
  ["Goda method", "A standard hand calculation for wave forces on vertical walls (Goda, 2000)."]
];
