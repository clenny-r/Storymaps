export default {
  async fetch(request, env) {
    const GITHUB_TOKEN = env.GITHUB_TOKEN;
    const ACCESS_CODE = env.ACCESS_CODE;
    const ADMIN_PASSWORD = env.ADMIN_PASSWORD;

    const repoOwner = "Clenmar";
    const repoName = "Storymaps";
    const filePath = "Pages/Apps/Testimony_app/testimonies.json";
    const apiBase = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const headers = {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Accept": "application/vnd.github.v3+json"
    };

    const url = new URL(request.url);
    const path = url.pathname;

    // Helper: fetch data from GitHub
    async function getData() {
      const resp = await fetch(apiBase, { headers });
      const data = await resp.json();
      const content = atob(data.content);
      return { db: JSON.parse(content), sha: data.sha };
    }

    // Helper: save data to GitHub
    async function saveData(db, sha) {
      const body = JSON.stringify({
        message: "Update testimonies",
        content: btoa(JSON.stringify(db, null, 2)),
        sha
      });
      const resp = await fetch(apiBase, { method: "PUT", headers, body });
      return resp.json();
    }

    // GET /api/db → return all testimonies
    if (request.method === "GET" && path.endsWith("/db")) {
      try {
        const { db } = await getData();
        return new Response(JSON.stringify(db), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      } catch (e) {
        return new Response("Error fetching DB", { status: 500, headers: corsHeaders });
      }
    }

    // POST /api/auth/login → check access code
    if (request.method === "POST" && path.endsWith("/auth/login")) {
      try {
        const body = await request.json();
        if (body.accessCode !== ACCESS_CODE) {
          return new Response(JSON.stringify({ error: "Invalid access code" }), { status: 403, headers: corsHeaders });
        }

        // Ensure user exists
        const { db, sha } = await getData();
        if (!db.users[body.name]) {
          db.users[body.name] = { entries: [], created: new Date().toISOString() };
          await saveData(db, sha);
        }

        return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      } catch {
        return new Response(JSON.stringify({ error: "Login failed" }), { status: 500, headers: corsHeaders });
      }
    }

    // POST /api/entries → add testimony
    if (request.method === "POST" && path.endsWith("/entries")) {
      try {
        const body = await request.json();
        if (!body.text) return new Response(JSON.stringify({ error: "No text provided" }), { status: 400, headers: corsHeaders });

        const { db, sha } = await getData();
        const user = body.user || "Anonymous";
        if (!db.users[user]) db.users[user] = { entries: [], created: new Date().toISOString() };

        const entry = {
          id: Date.now().toString(),
          seq: (db.users[user].entries.length || 0) + 1,
          text: body.text,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          iso: new Date().toISOString()
        };

        db.users[user].entries.push(entry);
        await saveData(db, sha);

        return new Response(JSON.stringify({ message: "Saved", entry }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      } catch (e) {
        return new Response(JSON.stringify({ error: "Save failed" }), { status: 500, headers: corsHeaders });
      }
    }

    // DELETE /api/entries/:id → delete entry
    if (request.method === "DELETE" && path.startsWith("/api/entries")) {
      try {
        const id = path.split("/").pop();
        const body = await request.json();
        if (body.adminPassword !== ADMIN_PASSWORD) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403, headers: corsHeaders });
        }

        const { db, sha } = await getData();
        for (const u of Object.values(db.users)) {
          u.entries = u.entries.filter(e => e.id !== id);
        }

        await saveData(db, sha);
        return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      } catch {
        return new Response(JSON.stringify({ error: "Delete failed" }), { status: 500, headers: corsHeaders });
      }
    }

    // POST /api/admin/login → admin login
    if (request.method === "POST" && path.endsWith("/admin/login")) {
      try {
        const body = await request.json();
        if (body.password !== ADMIN_PASSWORD) return new Response(JSON.stringify({ error: "Invalid password" }), { status: 403, headers: corsHeaders });
        return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      } catch {
        return new Response(JSON.stringify({ error: "Admin login failed" }), { status: 500, headers: corsHeaders });
      }
    }

    // GET /api/admin/stats → usage stats
    if (request.method === "GET" && path.endsWith("/admin/stats")) {
      try {
        const { db } = await getData();
        return new Response(JSON.stringify(db), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      } catch {
        return new Response(JSON.stringify({ error: "Stats failed" }), { status: 500, headers: corsHeaders });
      }
    }

    return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: corsHeaders });
  }
};