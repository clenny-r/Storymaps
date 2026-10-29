/**
 * TWC Family Nutrition: Cloudflare Worker
 *
 * Saves each family's food log, and every "please add this food" request,
 * in the private GitHub repository clenny-r/Twc_private_data:
 *
 *   User_Data/nutrition/families.json       family codes and names
 *   User_Data/nutrition/family-<id>.json    people, food log and family foods for one family
 *   User_Data/nutrition/food_requests.json  new foods waiting to be researched (all families)
 *
 * Environment variables (Cloudflare dashboard > Worker > Settings > Variables, encrypted):
 *   GITHUB_TOKEN  Personal Access Token with access to Twc_private_data (same one the other TWC workers use)
 *   ADMIN_PASS    Admin family code. The first sign-in with it creates the "Rowe Family" automatically.
 */

const OWNER = 'clenny-r';
const REPO = 'Twc_private_data';
const DIR = 'User_Data/nutrition';
const UA = 'TWC-Family-Nutrition';

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '*';
    const CORS = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Vary': 'Origin',
    };
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
    const err = (msg, status = 400) => json({ error: msg }, status);

    // ── Unicode-safe base64 ────────────────────────────────────────────────
    const b64Encode = (str) => {
      const bytes = new TextEncoder().encode(str);
      let bin = '';
      for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
      return btoa(bin);
    };
    const b64Decode = (str) => new TextDecoder().decode(Uint8Array.from(atob(str.replace(/\n/g, '')), (c) => c.charCodeAt(0)));

    // ── GitHub file helpers ────────────────────────────────────────────────
    const gh = (path, init = {}) => fetch(`https://api.github.com/repos/${OWNER}/${REPO}/${path}`, {
      ...init,
      headers: { Authorization: `token ${env.GITHUB_TOKEN}`, Accept: 'application/vnd.github.v3+json', 'User-Agent': UA, ...(init.headers || {}) },
    });
    async function readJSON(file, fallback) {
      const res = await gh(`contents/${file}`);
      if (res.status === 404) return { data: fallback, sha: null };
      if (!res.ok) throw new Error(`GitHub read failed: ${res.status}`);
      const meta = await res.json();
      let text;
      if (meta.content && meta.encoding === 'base64') text = b64Decode(meta.content);
      else {                                    // files over 1 MB: read the blob instead
        const blob = await gh(`git/blobs/${meta.sha}`);
        if (!blob.ok) throw new Error(`GitHub blob read failed: ${blob.status}`);
        text = b64Decode((await blob.json()).content);
      }
      return { data: JSON.parse(text), sha: meta.sha };
    }
    async function writeJSON(file, data, sha, message) {
      const res = await gh(`contents/${file}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, content: b64Encode(JSON.stringify(data, null, 1)), ...(sha ? { sha } : {}) }),
      });
      if (res.status === 409 || res.status === 422) return false;     // someone else wrote first
      if (!res.ok) throw new Error(`GitHub write failed: ${res.status} ${await res.text()}`);
      return true;
    }
    // read, change, write; retry if another phone saved at the same moment
    async function update(file, fallback, change, message) {
      for (let i = 0; i < 4; i++) {
        const { data, sha } = await readJSON(file, structuredClone(fallback));
        const out = change(data);
        if (await writeJSON(file, out, sha, message)) return out;
      }
      throw new Error('Too many people saving at once, try again');
    }

    // newest edit wins, matched by id; deleted items stay as tombstones so deletes spread to every phone
    function mergeArr(a, b) {
      const m = new Map();
      for (const x of a || []) if (x && x.id) m.set(x.id, x);
      for (const x of b || []) {
        if (!x || !x.id) continue;
        const o = m.get(x.id);
        if (!o || (x.editedAt || 0) >= (o.editedAt || 0)) m.set(x.id, x);
      }
      return [...m.values()];
    }

    // ── Auth ───────────────────────────────────────────────────────────────
    const code = ((request.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '')).trim();
    const ADMIN = env.ADMIN_PASS || '';
    async function family(c) {
      if (!c) return null;
      const { data } = await readJSON(`${DIR}/families.json`, { families: {} });
      if (data.families[c]) return { ...data.families[c], isAdmin: !!ADMIN && c === ADMIN };
      if (ADMIN && c === ADMIN) {                // first ever sign-in: create the admin family
        const created = await update(`${DIR}/families.json`, { families: {} }, (d) => {
          if (!d.families[c]) d.families[c] = { id: 'rowe', name: 'Rowe Family', created: Date.now() };
          return d;
        }, 'nutrition: create Rowe Family');
        return { ...created.families[c], isAdmin: true };
      }
      return null;
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '');
    try {
      if (path === '' || path === '/') return new Response('TWC Family Nutrition API is running.', { headers: CORS });

      if (request.method === 'POST' && path === '/api/auth') {
        const body = await request.json().catch(() => ({}));
        const fam = await family(String(body.password || '').trim());
        if (!fam) return err('Invalid family code', 401);
        return json({ name: fam.name, isAdmin: fam.isAdmin });
      }

      const fam = await family(code);
      if (!fam) return err('Invalid family code', 401);
      const famFile = `${DIR}/family-${fam.id}.json`;
      const blank = { people: [], logs: [], custom: [], rev: 0, updated: 0 };

      if (request.method === 'GET' && path === '/api/data') {
        const { data } = await readJSON(famFile, blank);
        return json({ ...data, name: fam.name });
      }

      if (request.method === 'PUT' && path === '/api/data') {
        const body = await request.json().catch(() => null);
        if (!body || !Array.isArray(body.logs)) return err('Bad data');
        const out = await update(famFile, blank, (d) => ({
          people: mergeArr(d.people, body.people),
          logs: mergeArr(d.logs, body.logs),
          custom: mergeArr(d.custom, body.custom),
          rev: (d.rev || 0) + 1,
          updated: Date.now(),
        }), `nutrition: ${fam.name} log update`);
        return json({ ...out, name: fam.name });
      }

      if (request.method === 'POST' && path === '/api/food-request') {
        const b = await request.json().catch(() => null);
        if (!b || !b.id || !b.name) return err('Food name required');
        await update(`${DIR}/food_requests.json`, { requests: [] }, (d) => {
          if (!d.requests.some((r) => r.id === b.id)) {
            d.requests.push({
              id: String(b.id).slice(0, 40), family: fam.name, name: String(b.name).slice(0, 120),
              details: String(b.details || '').slice(0, 600), label: b.label || null, emoji: String(b.emoji || '').slice(0, 8),
              by: String(b.by || '').slice(0, 60), at: Date.now(), status: 'new',
            });
          }
          return d;
        }, `nutrition: new food request "${String(b.name).slice(0, 60)}"`);
        return json({ ok: true });
      }

      if (request.method === 'GET' && path === '/api/food-requests') {
        const { data } = await readJSON(`${DIR}/food_requests.json`, { requests: [] });
        return json({ requests: data.requests.filter((r) => r.family === fam.name) });
      }

      if (request.method === 'POST' && path === '/api/families') {
        if (!fam.isAdmin) return err('Admin only', 403);
        const b = await request.json().catch(() => ({}));
        const newCode = String(b.code || '').trim(), name = String(b.name || '').trim();
        if (newCode.length < 6 || !name) return err('Give a family name and a code of at least 6 characters');
        await update(`${DIR}/families.json`, { families: {} }, (d) => {
          if (d.families[newCode]) throw new Error('That code is already used');
          d.families[newCode] = { id: crypto.randomUUID().slice(0, 8), name, created: Date.now() };
          return d;
        }, `nutrition: add family ${name}`);
        return json({ ok: true });
      }

      return err('Not found', 404);
    } catch (e) {
      return err(e.message || 'Server error', 500);
    }
  },
};
