# Family Tasks

A shared, password-protected task list for the Rowe family.

**Live URL:** [twcministries.net/Pages/Apps/Family_Tasks/worker/](https://www.twcministries.net/Pages/Apps/Family_Tasks/worker/)

## Files

| File | Description |
|---|---|
| `tasks.json` | Live data store — all tasks saved here |
| `worker/index.html` | Frontend app |
| `worker/index.js` | Cloudflare Worker backend (API) |
| `worker/README.md` | Full setup and deployment guide |

## Features

- Password protected (shared access for both users)
- Add tasks with priority levels (High / Medium / Low)
- Mark tasks complete with strikethrough
- Drag and drop to reorder tasks
- Inline editing — double-click any task text to edit
- Click the priority tag to change priority
- Filter by status or priority
- Shows who added each task and when
- "Clear completed" to bulk-remove finished tasks
