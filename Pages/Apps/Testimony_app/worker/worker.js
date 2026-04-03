export default {
  async fetch(request, env) {
    const GITHUB_TOKEN = env.GITHUB_TOKEN;
    const ADMIN_PASSWORD = env.ADMIN_PASSWORD;

    const repoOwner = "Clenmar";
    const repoName = "Storymaps";
    const filePath = "Pages/Apps/Testimony_app/testimonies.json";
    const apiBase = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

    const headers = {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Accept": "application/vnd.github.v3+json"
    };

    const url = new URL(request.url);
    const path = url.pathname;

    async function getData() {
      const resp = await fetch(apiBase, { headers });
      const data = await resp.json();
      const content = atob(data.content);
      return { users: JSON.parse(content), sha: data.sha };
    }

    async function saveData(users, sha) {
      const body = JSON.stringify({
        message: "Update testimonies",
        content: btoa(JSON.stringify(users, null, 2)),
        sha
      });
      const resp = await fetch(apiBase, { method: "PUT", headers, body });
      return resp.json();
    }

    function jsonResponse(data, status = 200) {
      return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
    }

    // GET /api/db → full users db
    if (request.method === "GET" && path.endsWith("/db")) {
      const { users } = await getData();
      return jsonResponse({ users });
    }

    // POST /api/auth/login → login via access code
    if (request.method === "POST" && path.endsWith("/auth/login")) {
      const body = await request.json();
      if (!body.name || !body.accessCode) return jsonResponse({ error: "Name and access code required" }, 400);

      const { users, sha } = await getData();
      if (!users[body.name]) users[body.name] = { entries: [], created: new Date().toISOString() };

      return jsonResponse({ success: true });
    }

    // POST /api/entries → add a new entry
    if (request.method === "POST" && path.endsWith("/entries")) {
      const body = await request.json();
      if (!body.text || body.text.length < 1) return jsonResponse({ error: "Text required" }, 400);

      const { users, sha } = await getData();
      // Assume session user is in body.name
      const name = body.name;
      if (!users[name]) users[name] = { entries: [], created: new Date().toISOString() };
      const seq = (users[name].entries.length || 0) + 1;
      const now = new Date();
      const entry = {
        id: Date.now().toString(),
        seq,
        text: body.text,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        iso: now.toISOString()
      };
      users[name].entries.push(entry);
      await saveData(users, sha);
      return jsonResponse({ message: "Entry recorded", entry });
    }

    // DELETE /api/entries/:id → delete entry
    if (request.method === "DELETE" && path.startsWith("/api/entries/")) {
      const id = path.split("/").pop();
      const body = await request.json();
      if (body.adminPassword !== ADMIN_PASSWORD) return jsonResponse({ error: "Unauthorized" }, 403);

      const { users, sha } = await getData();
      for (const user of Object.values(users)) {
        user.entries = user.entries.filter(e => e.id !== id);
      }
      await saveData(users, sha);
      return jsonResponse({ success: true });
    }

    // POST /api/admin/login → verify admin password
    if (request.method === "POST" && path.endsWith("/admin/login")) {
      const body = await request.json();
      if (body.password !== ADMIN_PASSWORD) return jsonResponse({ error: "Incorrect password" }, 403);
      return jsonResponse({ success: true });
    }

    // GET /api/admin/stats → return usage stats
    if (request.method === "GET" && path.endsWith("/admin/stats")) {
      const { users } = await getData();
      const stats = { users };
      return jsonResponse(stats);
    }

    return new Response("Not found", { status: 404 });
  }
};