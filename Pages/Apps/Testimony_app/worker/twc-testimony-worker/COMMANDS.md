# Quick Reference - Common Commands

## First Time Setup
```bash
# 1. Install Wrangler
npm install -g wrangler

# 2. Login
wrangler login

# 3. Navigate to folder
cd path/to/twc-testimony-worker

# 4. Deploy
wrangler deploy

# 5. Set secrets
wrangler secret put GITHUB_TOKEN
wrangler secret put ACCESS_CODE
wrangler secret put ADMIN_PASSWORD
```

## Regular Use

### Deploy Updates
```bash
cd path/to/twc-testimony-worker
wrangler deploy
```

### Check Deployment Status
```bash
wrangler deployments list
```

### View Logs (for debugging)
```bash
wrangler tail
```

### List Secrets
```bash
wrangler secret list
```

### Update a Secret
```bash
wrangler secret put SECRET_NAME
```

### Check Who's Logged In
```bash
wrangler whoami
```

### Test Your Worker
```bash
# In browser, visit:
https://twc-testimony-api2.kd7bgn7q2z.workers.dev/api/db
```

## Helpful Tips

- Always run commands from inside the `twc-testimony-worker` folder
- If `wrangler` command not found, restart your terminal after installing Node.js
- Keep your GitHub token and passwords secure - never commit them to Git
- Test after each deployment by visiting the `/api/db` endpoint
