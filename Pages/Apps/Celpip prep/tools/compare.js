// Compare a verifier's answers with the hidden key.
// Usage: node tools/compare.js /home/claude/celpip_verify B
'use strict';
const fs = require('fs'), path = require('path');
const [dir, id] = process.argv.slice(2);
const key = JSON.parse(fs.readFileSync(path.join('/home/claude/celpip_keys', `key_${id}.json`), 'utf8'));
const ans = JSON.parse(fs.readFileSync(path.join(dir, `answers_${id}.json`), 'utf8'));
const notes = ans._notes || {};
let ok = 0; const bad = [];
Object.keys(key).forEach(k => { const a = String((ans[k] || '')).trim().toUpperCase().slice(0, 1); if (a === key[k]) ok++; else bad.push(`${k}: key ${key[k]}, verifier ${a || '(none)'}${notes[k] ? ' | note: ' + notes[k] : ''}`); });
console.log(`Test ${id}: ${ok}/${Object.keys(key).length} agree`);
bad.forEach(b => console.log('  DISAGREE ' + b));
Object.entries(notes).filter(([k]) => !bad.some(b => b.startsWith(k + ':'))).forEach(([k, v]) => console.log(`  note ${k}: ${v}`));
