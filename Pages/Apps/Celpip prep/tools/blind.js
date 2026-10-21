// Make a blind answer sheet (no key) for independent verification, plus the hidden key.
// Usage: node tools/blind.js tests/mock_test_B.js /home/claude/celpip_verify
'use strict';
const fs = require('fs'), vm = require('vm'), path = require('path');
const [file, outDir] = process.argv.slice(2);
const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx);
const T = ctx.window.MOCK_TESTS[0];
const strip = h => h.replace(/<br\s*\/?>/g, '\n').replace(/<\/(p|h3|li|tr)>/g, '\n').replace(/<\/t[dh]>/g, ' | ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\n{3,}/g, '\n\n').trim();
let seed = 977 + T.id.charCodeAt(0) * 31;
const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const key = {}; const out = [];
const L = 'ABCD';
const mc = q => {
  const idx = [0, 1, 2, 3]; for (let i = 3; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  key[q.id] = L[idx.indexOf(0)];
  return idx.map((k, i) => `   ${L[i]}. ${q.o[k]}`).join('\n');
};
out.push(`# Blind answer sheet: ${T.title}`, '', 'Answer every item using ONLY the transcript or passage. Give one letter per item.', '');
out.push('## LISTENING (transcripts)', '');
[T.listening.practice, ...T.listening.parts].forEach(p => {
  out.push(`### ${p.id} ${p.title}`, '');
  p.segments.forEach((s, si) => {
    if (p.segments.length > 1) out.push(`**Section ${si + 1}**`, '');
    s.lines.forEach(([k, t]) => out.push(`${p.cast[k].name}: ${t}`));
    out.push('');
    s.questions.forEach(q => out.push(`${q.id}. ${q.q}`, mc(q), ''));
  });
});
out.push('## READING', '');
T.reading.parts.forEach(p => {
  out.push(`### ${p.id} ${p.title}`, '', strip(p.passage), '');
  const items = [...(p.questions || []), ...(p.blanks || [])].sort((a, b) => Number(a.id.split('.')[1]) - Number(b.id.split('.')[1]));
  if (p.reply) out.push('**Second text (blanks are marked [[id]]):**', '', strip(p.reply), '');
  items.forEach(q => {
    if (q.fixed) { key[q.id] = q.a; out.push(`${q.id}. ${q.q}`, '   Answer with A, B, C or D (the paragraph), or E if the information is not given in any paragraph.', ''); }
    else out.push(`${q.id}. ${q.q || '(fill blank [[' + q.id + ']])'}`, mc(q), '');
  });
});
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, `blind_${T.id}.md`), out.join('\n'));
fs.mkdirSync('/home/claude/celpip_keys', { recursive: true }); fs.writeFileSync(path.join('/home/claude/celpip_keys', `key_${T.id}.json`), JSON.stringify(key, null, 1));
console.log(`wrote blind_${T.id}.md with ${Object.keys(key).length} items`);
