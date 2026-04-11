export default {
  async fetch(request, env) {
    const GITHUB_TOKEN = env.GITHUB_TOKEN;
    const ACCESS_CODE = env.ACCESS_CODE;
    const ADMIN_PASSWORD = env.ADMIN_PASSWORD;

    const repoOwner = "clenny-r";
    const repoName = "Twc_private_data";
    const filePath = "User_Data/testimonies.json";
    const apiBase = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

    const headers = {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Accept": "application/vnd.github.v3+json"
    };

    const url = new URL(request.url);
    const path = url.pathname;

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    // Helper: fetch existing testimonies from GitHub
    async function getTestimonies() {
      const resp = await fetch(apiBase, { headers });
      if (!resp.ok) throw new Error("Failed to fetch from GitHub");
      const data = await resp.json();
      const content = atob(data.content);
      return { list: JSON.parse(content), sha: data.sha };
    }

    // Helper: save updated testimonies to GitHub
    async function saveTestimonies(testimonies, sha) {
      const body = JSON.stringify({
        message: "Update testimonies",
        content: btoa(JSON.stringify(testimonies, null, 2)),
        sha
      });
      const resp = await fetch(apiBase, { method: "PUT", headers, body });
      if (!resp.ok) throw new Error("Failed to save to GitHub");
      return resp.json();
    }

    // API endpoints
    if (path === "/api/db" && request.method === "GET") {
      try {
        const { list } = await getTestimonies();
        return new Response(JSON.stringify({ users: list }), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }

    if (path === "/api/entries" && request.method === "POST") {
      try {
        const body = await request.json();
        if (!body.accessCode || body.accessCode !== ACCESS_CODE) {
          return new Response(JSON.stringify({ error: "Invalid access code" }), {
            status: 403,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
          });
        }

        const { list, sha } = await getTestimonies();
        const newEntry = {
          id: Date.now(),
          seq: list.length + 1,
          text: body.text,
          name: body.name || "Anonymous",
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          iso: new Date().toISOString()
        };
        list.push(newEntry);
        await saveTestimonies(list, sha);

        return new Response(JSON.stringify({ message: "Saved", entry: newEntry }), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }

    if (path.startsWith("/api/entries/") && request.method === "DELETE") {
      try {
        const id = Number(path.split("/").pop());
        const body = await request.json();
        if (!body.adminPassword || body.adminPassword !== ADMIN_PASSWORD) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 403,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
          });
        }

        const { list, sha } = await getTestimonies();
        const updated = list.filter(e => e.id !== id);
        await saveTestimonies(updated, sha);

        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }

    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
};