export default {
  async fetch(request, env) {
    const GITHUB_TOKEN = env.GITHUB_TOKEN;
    const ACCESS_CODE = env.ACCESS_CODE;
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

    // Helper: fetch existing testimonies from GitHub
    async function getTestimonies() {
      const resp = await fetch(apiBase, { headers });
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
      const resp = await fetch(apiBase, {
        method: "PUT",
        headers,
        body
      });
      return resp.json();
    }

    // GET /api/testimonies → returns all testimonies
    if (request.method === "GET") {
      const { list } = await getTestimonies();
      return new Response(JSON.stringify(list), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // POST /api/testimonies → add a new testimony (requires access code)
    if (request.method === "POST") {
      const body = await request.json();
      if (body.accessCode !== ACCESS_CODE) {
        return new Response("Invalid access code", { status: 403 });
      }

      const { list, sha } = await getTestimonies();
      const newEntry = {
        id: Date.now(),
        name: body.name,
        message: body.message
      };
      list.push(newEntry);
      await saveTestimonies(list, sha);

      return new Response(JSON.stringify(newEntry), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // DELETE /api/testimonies?id=123 → remove testimony (requires admin password)
    if (request.method === "DELETE") {
      const id = Number(url.searchParams.get("id"));
      const body = await request.json();

      if (body.adminPassword !== ADMIN_PASSWORD) {
        return new Response("Unauthorized", { status: 403 });
      }

      const { list, sha } = await getTestimonies();
      const updated = list.filter(t => t.id !== id);
      await saveTestimonies(updated, sha);

      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Not found", { status: 404 });
  }
};