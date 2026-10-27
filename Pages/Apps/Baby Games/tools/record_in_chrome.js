/* Record Grace clips in Chrome (Baby Games, Oct 2026).
 * 1. Run tools/harvest.js (Node + Playwright, local server on :8123) to get
 *    sentences.json, then make the list:  window.__S=[[hash,sentence],...]
 * 2. Open https://twcministries.net/Pages/Apps/Baby%20Games/baby-words.html
 *    (it has the onnxruntime import map), paste __S and this script into the
 *    console. Open more tabs on the same page and run it there too with a
 *    different START: they share the work through localStorage.
 * 3. It downloads twcvoice_p*.json files (base64 WAV per hash) to Downloads.
 *    Convert them:  python3 tools/convert_clips.py <downloads> voice/grace
 *    then bump CLIP_V in voice.js. */
(async (START) => {
  if (window.__S) localStorage.setItem('__S', JSON.stringify(window.__S));
  const S = JSON.parse(localStorage.getItem('__S'));
  const pm = await import('https://cdn.jsdelivr.net/npm/@mintplex-labs/piper-tts-web@1.0.4/dist/piper-tts-web.js');
  const TS = pm.TtsSession; TS._instance = null;
  const sess = await TS.create({ voiceId: 'en_US-hfc_female-medium' });
  const toB64 = b => new Promise(r => { const f = new FileReader(); f.onload = () => r(f.result.split(',')[1]); f.readAsDataURL(b); });
  const save = (o, t) => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(o)], { type: 'application/json' })); a.download = 'twcvoice_p' + t + '.json'; document.body.appendChild(a); a.click(); a.remove(); };
  let chunk = {}, part = 0; const tag = Math.random().toString(36).slice(2, 6);
  for (let i = START; i >= 0; i--) {
    const [h, s] = S[i];
    const c = JSON.parse(localStorage.getItem('__claimed') || '{}'); if (c[h]) continue;
    c[h] = 1; localStorage.setItem('__claimed', JSON.stringify(c));
    try { chunk[h] = await toB64(await sess.predict(s)); } catch (e) {}
    if (Object.keys(chunk).length >= 50) { save(chunk, tag + '_' + (++part)); chunk = {}; }
  }
  save(chunk, tag + '_' + (++part));
})(window.START || (JSON.parse(localStorage.getItem('__S') || '[]').length - 1));
