/**
 * TWC Family Task List — Cloudflare Worker (multi-family edition)
 *
 * Data file: Pages/Apps/Family_Tasks/tasks.json
 * Repo:      clenny-r/Storymaps
 *
 * JSON structure:
 * {
 *   "rooms": {
 *     "<password>": {
 *       "name": "Family Name",
 *       "members": ["Name1", "Name2"],
 *       "tasks": [...]
 *     }
 *   }
 * }
 *
 * Environment variables (wrangler.toml or secrets):
 *   GITHUB_TOKEN  — Personal Access Token with repo scope
 *   ADMIN_PASS    — Admin password (can create / delete families)
 */

const GITHUB_OWNER = 'clenny-r';
const GITHUB_REPO  = 'Storymaps';
const GITHUB_FILE  = 'Pages/Apps/Family_Tasks/tasks.json';
const GITHUB_API   = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;

export default {
  async fetch(request, env) {

    // ── Unicode-safe base64 helpers ────────────────────────────────────────
    function b64Encode(str) {
      const bytes = new TextEncoder().encode(str);
      return btoa(Array.from(bytes, b => String.fromCodePoint(b)).join(''));
    }
    function b64Decode(str) {
      const bin = atob(str);
      return new TextDecoder().decode(Uint8Array.from(bin, c => c.charCodeAt(0)));
    }

    // ── CORS ───────────────────────────────────────────────────────────────
    const origin = request.headers.get('Origin') || '*';
    const CORS = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    function json(data, status = 200) {
      return new Response(JSON.stringify(data), {
        status,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }
    function err(msg, status = 400) { return json({ error: msg }, status); }

    // ── GitHub read/write ──────────────────────────────────────────────────
    async function readDB() {
      const res = await fetch(GITHUB_API, {
        headers: {
          Authorization: `token ${env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'TWC-Family-Tasks',
        },
      });
      if (!res.ok) throw new Error(`GitHub read failed: ${res.status}`);
      const file = await res.json();
      const data = JSON.parse(b64Decode(file.content.replace(/\n/g, '')));
      // Migrate old flat format { tasks: [] } → new room format
      if (data.tasks && !data.rooms) {
        data.rooms = {
          [env.ADMIN_PASS || 'rowe 2026']: {
            name: 'Rowe Family',
            members: ['Clenmar', 'Wife'],
            tasks: data.tasks,
          }
        };
        delete data.tasks;
      }
      return { data, sha: file.sha };
    }

    async function writeDB(data, sha) {
      const content = b64Encode(JSON.stringify(data, null, 2));
      const res = await fetch(GITHUB_API, {
        method: 'PUT',
        headers: {
          Authorization: `token ${env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'TWC-Family-Tasks',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'chore: update task list',
          content,
          sha,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(`GitHub write failed: ${res.status} — ${body}`);
      }
    }

    // ── Auth helpers ───────────────────────────────────────────────────────
    function getToken() {
      const h = request.headers.get('Authorization') || '';
      return h.startsWith('Bearer ') ? h.slice(7) : '';
    }

    const ADMIN = env.ADMIN_PASS || 'rowe 2026';

    function isAdmin(token) {
      return token === ADMIN;
    }

    const url  = new URL(request.url);
    const path = url.pathname;

    // ── POST /api/auth — validate password, return room info ──────────────
    if (request.method === 'POST' && path === '/api/auth') {
      try {
        const body = await request.json();
        const pass = String(body.password || '').trim();
        if (!pass) return err('Password required');

        const { data } = await readDB();
        const room = data.rooms[pass];
        if (!room) return err('Invalid password', 401);

        return json({
          name:    room.name,
          members: room.members,
          isAdmin: pass === ADMIN,
        });
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── All remaining routes require auth ──────────────────────────────────
    const token = getToken();
    if (!token) return err('Authorization required', 401);

    // ── GET /api/tasks — return this room's tasks ──────────────────────────
    if (request.method === 'GET' && path === '/api/tasks') {
      try {
        const { data } = await readDB();
        const room = data.rooms[token];
        if (!room) return err('Invalid password', 401);
        return json({ tasks: room.tasks, name: room.name, members: room.members, isAdmin: token === ADMIN });
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── POST /api/tasks — add task ─────────────────────────────────────────
    if (request.method === 'POST' && path === '/api/tasks') {
      try {
        const body = await request.json();
        if (!body.text || !String(body.text).trim()) return err('Task text required');

        const { data, sha } = await readDB();
        const room = data.rooms[token];
        if (!room) return err('Invalid password', 401);

        const now = new Date().toISOString();
        const task = {
          id:        Date.now(),
          text:      String(body.text).trim(),
          completed: false,
          priority:  body.priority || 'medium',
          order:     room.tasks.length,
          addedBy:   String(body.addedBy || 'Someone').trim(),
          createdAt: now,
          updatedAt: now,
        };

        room.tasks.push(task);
        await writeDB(data, sha);
        return json({ success: true, task }, 201);
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── PUT /api/tasks/:id — update task ───────────────────────────────────
    if (request.method === 'PUT' && path.startsWith('/api/tasks/')) {
      try {
        const taskId = parseInt(path.split('/').pop(), 10);
        const body   = await request.json();
        const { data, sha } = await readDB();
        const room = data.rooms[token];
        if (!room) return err('Invalid password', 401);

        // Bulk reorder: { reorder: [{id, order}, ...] }
        if (body.reorder && Array.isArray(body.reorder)) {
          const map = {};
          body.reorder.forEach(r => { map[r.id] = r.order; });
          room.tasks = room.tasks.map(t => ({
            ...t,
            order:     map[t.id] !== undefined ? map[t.id] : t.order,
            updatedAt: new Date().toISOString(),
          }));
          await writeDB(data, sha);
          return json({ success: true });
        }

        const idx = room.tasks.findIndex(t => t.id === taskId);
        if (idx === -1) return err('Task not found', 404);

        const task = room.tasks[idx];
        if (body.text      !== undefined) task.text      = String(body.text).trim();
        if (body.completed !== undefined) task.completed = Boolean(body.completed);
        if (body.priority  !== undefined) task.priority  = body.priority;
        if (body.order     !== undefined) task.order     = body.order;
        task.updatedAt = new Date().toISOString();

        room.tasks[idx] = task;
        await writeDB(data, sha);
        return json({ success: true, task });
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── DELETE /api/tasks/:id ──────────────────────────────────────────────
    if (request.method === 'DELETE' && path.startsWith('/api/tasks/')) {
      try {
        const taskId = parseInt(path.split('/').pop(), 10);
        const { data, sha } = await readDB();
        const room = data.rooms[token];
        if (!room) return err('Invalid password', 401);

        const before = room.tasks.length;
        room.tasks = room.tasks.filter(t => t.id !== taskId);
        if (room.tasks.length === before) return err('Task not found', 404);
        await writeDB(data, sha);
        return json({ success: true });
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── ADMIN: GET /api/admin/rooms ────────────────────────────────────────
    if (request.method === 'GET' && path === '/api/admin/rooms') {
      if (!isAdmin(token)) return err('Admin access required', 403);
      try {
        const { data } = await readDB();
        const rooms = Object.entries(data.rooms).map(([pass, r]) => ({
          password: pass,
          name:     r.name,
          members:  r.members,
          taskCount: r.tasks.length,
        }));
        return json({ rooms });
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── ADMIN: POST /api/admin/rooms — create family ───────────────────────
    if (request.method === 'POST' && path === '/api/admin/rooms') {
      if (!isAdmin(token)) return err('Admin access required', 403);
      try {
        const body = await request.json();
        const pass    = String(body.password || '').trim();
        const name    = String(body.name     || '').trim();
        const members = Array.isArray(body.members) ? body.members.map(m => String(m).trim()).filter(Boolean) : [];

        if (!pass) return err('Password required');
        if (!name) return err('Family name required');
        if (members.length === 0) return err('At least one member required');

        const { data, sha } = await readDB();
        if (data.rooms[pass]) return err('A family with that password already exists', 409);

        data.rooms[pass] = { name, members, tasks: [] };
        await writeDB(data, sha);
        return json({ success: true, name, members }, 201);
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── ADMIN: DELETE /api/admin/rooms — remove family ─────────────────────
    if (request.method === 'DELETE' && path === '/api/admin/rooms') {
      if (!isAdmin(token)) return err('Admin access required', 403);
      try {
        const body = await request.json();
        const pass = String(body.password || '').trim();
        if (!pass)          return err('Password required');
        if (pass === ADMIN) return err('Cannot delete the admin room', 403);

        const { data, sha } = await readDB();
        if (!data.rooms[pass]) return err('Room not found', 404);

        delete data.rooms[pass];
        await writeDB(data, sha);
        return json({ success: true });
      } catch (e) {
        return err(e.message, 500);
      }
    }

    return err('Not found', 404);
  },
};
