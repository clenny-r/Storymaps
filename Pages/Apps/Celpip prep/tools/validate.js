// Structural validator for CELPIP mock test content files.
// Usage: node tools/validate.js tests/mock_test_B.js [more files...]
'use strict';
const fs = require('fs'), vm = require('vm');
const SETTINGS = ['office', 'store', 'studio', 'news', 'meeting', 'classroom', 'outdoor'];
const STYLES = ['short', 'long', 'bun', 'curly', 'bald'];
let totalErr = 0;
for (const file of process.argv.slice(2)) {
  const err = [], warn = [];
  const E = m => err.push(m), W = m => warn.push(m);
  const src = fs.readFileSync(file, 'utf8');
  const expectId = (file.match(/mock_test_([A-Z])\.js$/) || [])[1];
  if (/[—–]/.test(src)) E('Contains an em dash or en dash (not allowed).');
  if (/lorem|TODO|TBD|XXX/i.test(src)) E('Contains placeholder text (lorem/TODO/TBD/XXX).');
  const ctx = { window: {} };
  try { vm.runInNewContext(src, ctx, { filename: file }); } catch (e) { console.log(`\n=== ${file}\nFATAL: does not run: ${e.message}`); totalErr++; continue; }
  const T = (ctx.window.MOCK_TESTS || [])[0];
  if (!T) { console.log(`\n=== ${file}\nFATAL: no test pushed`); totalErr++; continue; }
  if (expectId && T.id !== expectId) E(`id is "${T.id}", expected "${expectId}"`);
  if (T.title !== `Mock Test ${T.id}`) E(`title should be "Mock Test ${T.id}"`);
  const ids = new Set();
  const optStats = { longest: 0, n: 0 };
  const checkQ = (q, wantId, needText) => {
    if (q.id !== wantId) E(`question id ${q.id} should be ${wantId}`);
    if (ids.has(q.id)) E(`duplicate id ${q.id}`); ids.add(q.id);
    if (needText && !(q.q && q.q.trim())) E(`${q.id} has no question text`);
    if (q.fixed) return;
    if (!Array.isArray(q.o) || q.o.length !== 4) { E(`${q.id} must have exactly 4 options`); return; }
    if (new Set(q.o.map(s => s.trim().toLowerCase())).size !== 4) E(`${q.id} has duplicate options`);
    q.o.forEach((o, i) => { if (!o || !o.trim()) E(`${q.id} option ${i} empty`); });
    const lens = q.o.map(s => s.length); optStats.n++;
    if (lens[0] === Math.max(...lens) && lens.filter(l => l === lens[0]).length === 1) optStats.longest++;
  };
  // ---------- Listening
  const L = T.listening || {};
  const want = [['L1', [3, 3, 2]], ['L2', [5]], ['L3', [6]], ['L4', [5]], ['L5', [8]], ['L6', [6]]];
  const checkPart = (p, pid, segCounts) => {
    if (!p) { E(`missing listening part ${pid}`); return; }
    if (p.id !== pid) E(`listening part id ${p.id} should be ${pid}`);
    if (!SETTINGS.includes(p.setting)) E(`${pid} setting "${p.setting}" not allowed`);
    if ((p.setting === 'meeting' || p.setting === 'classroom') && !p.board) W(`${pid} uses ${p.setting} but has no board text`);
    if (p.board && p.board.length > 34) W(`${pid} board text longer than 34 characters may not fit`);
    if (!p.cast || !Object.keys(p.cast).length) E(`${pid} has no cast`);
    const n = Object.keys(p.cast || {}).length; if (n > 3) E(`${pid} cast has ${n} people (max 3)`);
    Object.entries(p.cast || {}).forEach(([k, c]) => {
      if (!['m', 'f'].includes(c.g)) E(`${pid} cast ${k} g must be m or f`);
      if (!STYLES.includes(c.style)) E(`${pid} cast ${k} style "${c.style}" not allowed`);
      if (!c.name) E(`${pid} cast ${k} has no name`);
      ['skin', 'hair', 'shirt'].forEach(f => { if (!/^#[0-9a-fA-F]{6}$/.test(c[f] || '')) E(`${pid} cast ${k} ${f} must be a #rrggbb colour`); });
    });
    if (!Array.isArray(p.segments) || p.segments.length !== segCounts.length) { E(`${pid} must have ${segCounts.length} segment(s)`); return; }
    let n0 = 0;
    p.segments.forEach((s, si) => {
      if (!s.lines || s.lines.length < 1) E(`${pid} seg ${si} has no lines`);
      (s.lines || []).forEach(([k, t], li) => { if (!p.cast[k]) E(`${pid} seg ${si} line ${li} speaker ${k} not in cast`); if (!t || !t.trim()) E(`${pid} seg ${si} line ${li} empty`); });
      const words = (s.lines || []).reduce((a, l) => a + (l[1] || '').split(/\s+/).length, 0);
      s._words = words;
      if ((s.questions || []).length !== segCounts[si]) E(`${pid} seg ${si} has ${(s.questions || []).length} questions, needs ${segCounts[si]}`);
      (s.questions || []).forEach(q => { n0++; checkQ(q, `${pid}.${n0}`, true); });
    });
    const tw = p.segments.reduce((a, s) => a + s._words, 0);
    return tw;
  };
  if (!L.practice) E('missing listening practice'); else {
    const p = L.practice; if (p.id !== 'LP') E('practice id must be LP');
    if (!p.segments || p.segments.length !== 1 || p.segments[0].questions.length !== 1) E('practice needs 1 segment with 1 question');
    else checkQ(p.segments[0].questions[0], 'LP.1', true);
    if (!SETTINGS.includes(p.setting)) E('practice setting not allowed');
  }
  if (!Array.isArray(L.parts) || L.parts.length !== 6) E('listening must have 6 parts');
  const wc = {};
  want.forEach(([pid, segs], i) => { wc[pid] = checkPart((L.parts || [])[i], pid, segs); });
  if (L.parts && L.parts[4] && !L.parts[4].video) E('L5 must have video: true');
  const range = { L1: [330, 750], L2: [160, 420], L3: [230, 560], L4: [160, 420], L5: [260, 620], L6: [200, 520] };
  Object.entries(range).forEach(([k, [lo, hi]]) => { if (wc[k] != null && (wc[k] < lo || wc[k] > hi)) W(`${k} transcript is ${wc[k]} words (expected ${lo} to ${hi})`); });
  // ---------- Reading
  const R = T.reading || {};
  if (!Array.isArray(R.parts) || R.parts.length !== 4) E('reading must have 4 parts');
  const rp = R.parts || [];
  const mins = [11, 9, 10, 13];
  rp.forEach((p, i) => { if (p.id !== `R${i + 1}`) E(`reading part ${i} id ${p.id}`); if (p.minutes !== mins[i]) E(`R${i + 1} minutes must be ${mins[i]}`); if (!p.passage || p.passage.length < 400) E(`R${i + 1} passage missing or too short`); if (!p.instructions) E(`R${i + 1} needs instructions`); });
  const blanksCheck = (p, from, to) => {
    const bl = p.blanks || []; if (bl.length !== to - from + 1) E(`${p.id} needs ${to - from + 1} blanks`);
    bl.forEach((b, j) => checkQ(b, `${p.id}.${from + j}`, false));
    const tokens = (p.reply || '').match(/\[\[[^\]]+\]\]/g) || [];
    if (tokens.length !== bl.length) E(`${p.id} reply has ${tokens.length} [[...]] tokens, expected ${bl.length}`);
    bl.forEach(b => { const c = (p.reply || '').split(`[[${b.id}]]`).length - 1; if (c !== 1) E(`${p.id} reply must contain [[${b.id}]] exactly once (found ${c})`); });
  };
  const qsCheck = (p, from, to) => { const qs = p.questions || []; if (qs.length !== to - from + 1) E(`${p.id} needs ${to - from + 1} questions`); qs.forEach((q, j) => checkQ(q, `${p.id}.${from + j}`, true)); };
  if (rp[0]) { qsCheck(rp[0], 1, 6); blanksCheck(rp[0], 7, 11); }
  if (rp[1]) { blanksCheck(rp[1], 1, 5); qsCheck(rp[1], 6, 8); if (!/<table/.test(rp[1].passage)) E('R2 passage needs a <table> diagram'); }
  if (rp[2]) {
    const qs = rp[2].questions || []; if (qs.length !== 9) E('R3 needs 9 statements');
    qs.forEach((q, j) => { checkQ(q, `R3.${j + 1}`, true); if (!q.fixed || !'ABCDE'.includes(q.a) || q.a.length !== 1) E(`R3.${j + 1} must be fixed:true with a in A to E`); });
    const letters = qs.map(q => q.a).join(''); ['A', 'B', 'C', 'D'].forEach(L2 => { if (!letters.includes(L2)) W(`R3 never uses paragraph ${L2}`); });
    const eCount = (letters.match(/E/g) || []).length; if (eCount < 1 || eCount > 2) W(`R3 uses E ${eCount} times (expected 1 or 2)`);
    ['A.', 'B.', 'C.', 'D.'].forEach(m => { if (!rp[2].passage.includes(`<b>${m}</b>`)) E(`R3 passage needs paragraph marker <b>${m}</b>`); });
  }
  if (rp[3]) { qsCheck(rp[3], 1, 5); blanksCheck(rp[3], 6, 10); }
  // ---------- Writing
  const Wt = (T.writing || {}).tasks || [];
  if (Wt.length !== 2) E('writing needs 2 tasks'); else {
    const [a, b] = Wt;
    if (a.id !== 'W1' || a.minutes !== 27 || a.minWords !== 150 || a.maxWords !== 200) E('W1 must be id W1, 27 min, 150 to 200 words');
    if (b.id !== 'W2' || b.minutes !== 26 || b.minWords !== 150 || b.maxWords !== 200) E('W2 must be id W2, 26 min, 150 to 200 words');
    if (!b.options || b.options.length !== 2 || b.options[0].key !== 'A' || b.options[1].key !== 'B') E('W2 needs options A and B');
    if (!/<li>/.test(a.prompt || '') || ((a.prompt || '').match(/<li>/g) || []).length !== 3) E('W1 prompt needs exactly 3 bullet points');
  }
  // ---------- Speaking
  const S = T.speaking || {};
  const spec = [['S1', 30, 90, 'Task 1: Giving Advice'], ['S2', 30, 60, 'Task 2: Talking about a Personal Experience'], ['S3', 30, 60, 'Task 3: Describing a Scene'], ['S4', 30, 60, 'Task 4: Making Predictions'], ['S5', 60, 60, 'Task 5: Comparing and Persuading'], ['S6', 60, 60, 'Task 6: Dealing with a Difficult Situation'], ['S7', 30, 90, 'Task 7: Expressing Opinions'], ['S8', 30, 60, 'Task 8: Describing an Unusual Situation']];
  if (!S.practice || S.practice.id !== 'SP' || S.practice.prep !== 30 || S.practice.speak !== 60) E('speaking practice must be SP 30/60');
  const st = S.tasks || []; if (st.length !== 8) E('speaking needs 8 tasks');
  spec.forEach(([id, prep, speak, title], i) => {
    const t = st[i]; if (!t) return;
    if (t.id !== id || t.prep !== prep || t.speak !== speak) E(`${id} must have prep ${prep}, speak ${speak}`);
    if (t.title !== title) E(`${id} title must be "${title}"`);
    if (!t.prompt) E(`${id} needs a prompt`);
  });
  if (st[2] && !/^<svg[\s\S]*<\/svg>$/.test(st[2].image || '')) E('S3 needs an SVG image');
  if (st[3] && st[3].image !== st[2].image) E('S4 must reuse the S3 image');
  if (st[7] && !/^<svg[\s\S]*<\/svg>$/.test(st[7].image || '')) E('S8 needs an SVG image');
  if (st[4]) {
    const c = st[4];
    if (c.type !== 'compare' || c.select !== 60) E('S5 must be type compare with select 60');
    if (!c.choices || c.choices.length !== 2 || c.choices.some(x => !/^<svg/.test(x.image || '') || !x.facts || x.facts.length < 3)) E('S5 needs 2 choices, each with an SVG image and 3 or more facts');
    if (!c.third || !/^<svg/.test(c.third.image || '') || !c.third.facts) E('S5 needs a third option with image and facts');
    if (!c.persuade) E('S5 needs persuade text');
  }
  if (st[5] && !/Option A/.test(st[5].prompt) || st[5] && !/Option B/.test(st[5].prompt)) E('S6 prompt must offer Option A and Option B');
  // ---------- Answer-position bias
  if (optStats.n && optStats.longest / optStats.n > 0.4) W(`correct option is the single longest in ${optStats.longest} of ${optStats.n} items (${Math.round(100 * optStats.longest / optStats.n)}%). Aim for 35% or less.`);
  console.log(`\n=== ${file} (${T.title}): ${err.length} error(s), ${warn.length} warning(s)`);
  err.forEach(m => console.log('  ERROR ' + m)); warn.forEach(m => console.log('  warn  ' + m));
  console.log(`  listening words: ${Object.entries(wc).map(([k, v]) => k + '=' + v).join(' ')}`);
  const words = h => (h || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`  reading words: ${rp.map(p => p.id + ' passage=' + words(p.passage) + (p.reply ? ' second=' + words(p.reply) : '')).join(' | ')}`);
  totalErr += err.length;
}
process.exit(totalErr ? 1 : 0);
