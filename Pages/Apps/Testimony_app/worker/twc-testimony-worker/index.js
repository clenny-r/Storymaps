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
      "Accept": "application/vnd.github.v3+json",
      "User-Agent": "TWC-Testimony-Worker"
    };

    const url = new URL(request.url);
    const path = url.pathname;
    
    // Get the origin from the request
    const origin = request.headers.get('Origin') || '*';

    // CORS headers helper - allow the specific origin instead of wildcard
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true"
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
      try {
        const resp = await fetch(apiBase, { headers });
        
        if (!resp.ok) {
          const errorBody = await resp.text();
          throw new Error(`GitHub API error (${resp.status}): ${errorBody}`);
        }
        
        const data = await resp.json();
        // GitHub returns base64 with newlines - remove them before decoding
        const content = atob(data.content.replace(/\n/g, ''));
        return { data: JSON.parse(content), sha: data.sha };
      } catch (error) {
        throw new Error(`Failed to fetch from GitHub: ${error.message}`);
      }
    }

    // Helper: save updated testimonies to GitHub
    async function saveTestimonies(data, sha) {
      const body = JSON.stringify({
        message: "Update testimonies",
        content: btoa(JSON.stringify(data, null, 2)),
        sha
      });
      const resp = await fetch(apiBase, { method: "PUT", headers, body });
      if (!resp.ok) {
        const errorBody = await resp.text();
        throw new Error(`GitHub save failed (${resp.status}): ${errorBody}`);
      }
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

        // Retry logic for GitHub conflicts
        let retries = 3;
        let lastError;
        
        while (retries > 0) {
          try {
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
          } catch (err) {
            lastError = err;
            retries--;
            if (retries > 0) {
              // Wait a bit before retrying (exponential backoff)
              await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retries)));
            }
          }
        }
        
        // If all retries failed, return the error
        throw lastError;
        
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

    // Root route - API info
    if (path === "/" && request.method === "GET") {
      return new Response(JSON.stringify({
        name: "TWC Testimony API",
        version: "2.0",
        endpoints: [
          "GET /api/db - Fetch all testimonies",
          "POST /api/entries - Create new testimony",
          "DELETE /api/entries/:id - Delete testimony (admin)",
          "POST /admin/login - Admin login",
          "GET /admin/stats - Admin statistics"
        ],
        status: "online"
      }, null, 2), {
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        }
      });
    }

    // Default 404 response
    return new Response(JSON.stringify({ 
      error: "Not found", 
      path: path,
      message: "Check available endpoints at /" 
    }), {
      status: 404,
      headers: { 
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  }
};
