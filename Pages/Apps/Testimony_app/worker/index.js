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

    // CORS headers helper
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    // Helper: fetch existing testimonies from GitHub
    async function getTestimonies() {
      const resp = await fetch(apiBase, { headers });
      if (!resp.ok) throw new Error("Failed to fetch from GitHub");
      const data = await resp.json();
      const content = atob(data.content);
      return { data: JSON.parse(content), sha: data.sha };
    }

    // Helper: save updated testimonies to GitHub
    async function saveTestimonies(data, sha) {
      const body = JSON.stringify({
        message: "Update testimonies",
        content: btoa(JSON.stringify(data, null, 2)),
        sha
      });
      const resp = await fetch(apiBase, { method: "PUT", headers, body });
      if (!resp.ok) throw new Error("Failed to save to GitHub");
      return resp.json();
    }

    // GET /api/db - Fetch all testimonies
    if (path === "/api/db" && request.method === "GET") {
      try {
        const { data } = await getTestimonies();
        return new Response(JSON.stringify(data), {
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      }
    }

    // POST /api/entries - Create new testimony entry
    if (path === "/api/entries" && request.method === "POST") {
      try {
        const body = await request.json();
        
        // Validate access code
        if (!body.accessCode || body.accessCode !== ACCESS_CODE) {
          return new Response(JSON.stringify({ error: "Invalid access code" }), {
            status: 403,
            headers: { 
              "Content-Type": "application/json",
              ...corsHeaders
            }
          });
        }

        const { data, sha } = await getTestimonies();
        const userName = body.name || "Anonymous";
        
        // Initialize user if doesn't exist
        if (!data.users) data.users = {};
        if (!data.users[userName]) {
          data.users[userName] = {
            created: new Date().toISOString(),
            entries: []
          };
        }

        // Create new entry
        const userEntries = data.users[userName].entries || [];
        const newEntry = {
          id: Date.now(),
          seq: userEntries.length + 1,
          text: body.text,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          iso: new Date().toISOString()
        };
        
        data.users[userName].entries.push(newEntry);
        await saveTestimonies(data, sha);

        return new Response(JSON.stringify({ 
          message: "Saved", 
          entry: newEntry 
        }), {
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      }
    }

    // DELETE /api/entries/:id - Delete testimony entry
    if (path.startsWith("/api/entries/") && request.method === "DELETE") {
      try {
        const id = Number(path.split("/").pop());
        const body = await request.json();
        
        // Validate admin password
        if (!body.adminPassword || body.adminPassword !== ADMIN_PASSWORD) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 403,
            headers: { 
              "Content-Type": "application/json",
              ...corsHeaders
            }
          });
        }

        const { data, sha } = await getTestimonies();
        const userName = body.userName;
        
        if (data.users && data.users[userName]) {
          data.users[userName].entries = data.users[userName].entries.filter(e => e.id !== id);
          await saveTestimonies(data, sha);
        }

        return new Response(JSON.stringify({ success: true }), {
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      }
    }

    // POST /admin/login - Admin authentication
    if (path === "/admin/login" && request.method === "POST") {
      try {
        const body = await request.json();
        
        if (body.password === ADMIN_PASSWORD) {
          return new Response(JSON.stringify({ success: true }), {
            headers: { 
              "Content-Type": "application/json",
              ...corsHeaders
            }
          });
        } else {
          return new Response(JSON.stringify({ error: "Incorrect password" }), {
            status: 401,
            headers: { 
              "Content-Type": "application/json",
              ...corsHeaders
            }
          });
        }
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      }
    }

    // GET /admin/stats - Admin statistics
    if (path === "/admin/stats" && request.method === "GET") {
      try {
        const { data } = await getTestimonies();
        const users = data.users || {};
        const userCount = Object.keys(users).length;
        const totalEntries = Object.values(users).reduce((sum, user) => {
          return sum + (user.entries || []).length;
        }, 0);

        return new Response(JSON.stringify({
          userCount,
          totalEntries,
          avgEntriesPerUser: userCount > 0 ? (totalEntries / userCount).toFixed(1) : 0
        }), {
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      }
    }

    // Default 404 response
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { 
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  }
};
