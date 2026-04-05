/**
 * TWC Family Task List — Cloudflare Worker
 * Stores tasks as JSON in the GitHub repository.
 *
 * Environment variables required (set as encrypted secrets in Cloudflare):
 *   GITHUB_TOKEN  — Personal Access Token with repo scope
 *   PASSWORD      — Shared access password (set to: rowe 2026)
 *
 * GitHub file: Pages/Apps/Family_Tasks/tasks.json
 * Repo:        Clenmar/Storymaps
 */

const GITHUB_OWNER = 'Clenmar';
const GITHUB_REPO  = 'Storymaps';
const GITHUB_FILE  = 'Pages/Apps/Family_Tasks/tasks.json';
const GITHUB_API   = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;

// ── CORS headers ────────────────────────────────────────────────────────────
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

function err(msg, status = 400) {
  return json({ error: msg }, status);
}

// ── GitHub helpers ───────────────────────────────────────────────────────────
async function readDB(token) {
  const res = await fetch(GITHUB_API, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'TWC-Family-Tasks',
    },
  });
  if (!res.ok) throw new Error(`GitHub read failed: ${res.status}`);
  const file = await res.json();
  const content = JSON.parse(atob(file.content.replace(/\n/g, '')));
  return { data: content, sha: file.sha };
}

async function writeDB(token, data, sha) {
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
  const res = await fetch(GITHUB_API, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
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
  return res.json();
}

// ── Request handler ──────────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const path = url.pathname;

    // ── GET /api/tasks — public read ──────────────────────────────────────
    if (request.method === 'GET' && path === '/api/tasks') {
      try {
        const { data } = await readDB(env.GITHUB_TOKEN);
        return json(data);
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // All write routes require the password
    const auth = request.headers.get('Authorization') || '';
    const provided = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    if (!provided || provided !== env.PASSWORD) {
      return err('Invalid password', 401);
    }

    // ── POST /api/tasks — add task ────────────────────────────────────────
    if (request.method === 'POST' && path === '/api/tasks') {
      try {
        const body = await request.json();
        if (!body.text || !body.text.trim()) return err('Task text required');

        const { data, sha } = await readDB(env.GITHUB_TOKEN);
        const now = new Date().toISOString();

        const task = {
          id: Date.now(),
          text: body.text.trim(),
          completed: false,
          priority: body.priority || 'medium', // 'high' | 'medium' | 'low'
          order: data.tasks.length,
          addedBy: body.addedBy || 'Someone',
          createdAt: now,
          updatedAt: now,
        };

        data.tasks.push(task);
        await writeDB(env.GITHUB_TOKEN, data, sha);
        return json({ success: true, task }, 201);
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── PUT /api/tasks/:id — update task (complete, edit, reorder, priority)
    if (request.method === 'PUT' && path.startsWith('/api/tasks/')) {
      try {
        const taskId = parseInt(path.split('/').pop(), 10);
        const body = await request.json();
        const { data, sha } = await readDB(env.GITHUB_TOKEN);

        // Handle full reorder (body.reorder = [{id, order}, ...])
        if (body.reorder && Array.isArray(body.reorder)) {
          const orderMap = {};
          body.reorder.forEach(r => { orderMap[r.id] = r.order; });
          data.tasks = data.tasks.map(t => ({
            ...t,
            order: orderMap[t.id] !== undefined ? orderMap[t.id] : t.order,
            updatedAt: new Date().toISOString(),
          }));
          await writeDB(env.GITHUB_TOKEN, data, sha);
          return json({ success: true });
        }

        const idx = data.tasks.findIndex(t => t.id === taskId);
        if (idx === -1) return err('Task not found', 404);

        const task = data.tasks[idx];
        if (body.text    !== undefined) task.text      = body.text.trim();
        if (body.completed !== undefined) task.completed = body.completed;
        if (body.priority !== undefined) task.priority  = body.priority;
        if (body.order    !== undefined) task.order     = body.order;
        task.updatedAt = new Date().toISOString();

        data.tasks[idx] = task;
        await writeDB(env.GITHUB_TOKEN, data, sha);
        return json({ success: true, task });
      } catch (e) {
        return err(e.message, 500);
      }
    }

    // ── DELETE /api/tasks/:id ─────────────────────────────────────────────
    if (request.method === 'DELETE' && path.startsWith('/api/tasks/')) {
      try {
        const taskId = parseInt(path.split('/').pop(), 10);
        const { data, sha } = await readDB(env.GITHUB_TOKEN);
        const before = data.tasks.length;
        data.tasks = data.tasks.filter(t => t.id !== taskId);
        if (data.tasks.length === before) return err('Task not found', 404);
        await writeDB(env.GITHUB_TOKEN, data, sha);
        return json({ success: true });
      } catch (e) {
        return err(e.message, 500);
      }
    }

    return err('Not found', 404);
  },
};
