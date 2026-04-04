# Apps

This folder contains small web applications built for the TWC Ministries congregation. Each app is self-contained in its own subfolder.

**URL base:** `twcministries.net/Pages/Apps/`

## Available Apps

| Folder | Description |
|---|---|
| `Baby Games/` | Simple interactive Bible-themed games for young children |
| `Testimony_app/` | Testimony log app — members can submit and browse testimonies |

## Notes

- Each app folder contains its own `README.md` (or should) with setup and usage details.
- Apps are hosted as static files on GitHub Pages. Any server-side logic uses **Cloudflare Workers** as the backend (see `Testimony_app/worker/README.md` for an example).
