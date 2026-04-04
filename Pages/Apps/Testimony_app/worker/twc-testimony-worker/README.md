# TWC Testimony Worker - Deployment Folder

This folder contains everything you need to deploy the Cloudflare Worker for the TWC Testimony App.

## Files in This Folder

1. **index.js** - The Cloudflare Worker code (backend API)
2. **wrangler.toml** - Configuration file for deployment
3. **README.md** - This file

## Quick Deployment Guide

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- Restart your terminal/command prompt after installation

### Step 2: Install Wrangler
Open your terminal/command prompt and run:
```bash
npm install -g wrangler
```

Wait for installation to complete.

### Step 3: Login to Cloudflare
```bash
wrangler login
```

This will open your browser. Click "Allow" to authenticate.

### Step 4: Navigate to This Folder
In your terminal, navigate to this folder:
```bash
cd path/to/twc-testimony-worker
```

For example:
- Windows: `cd C:\Users\YourName\Desktop\twc-testimony-worker`
- Mac/Linux: `cd ~/Desktop/twc-testimony-worker`

### Step 5: Deploy the Worker
```bash
wrangler deploy
```

You should see output like:
```
Published twc-testimony-api2 (X.XX sec)
  https://twc-testimony-api2.kd7bgn7q2z.workers.dev
```

### Step 6: Set Environment Variables (Secrets)

These are the credentials your worker needs to function.

#### 6a. GitHub Token
```bash
wrangler secret put GITHUB_TOKEN
```
When prompted, paste your GitHub Personal Access Token.

**Don't have a token?** Create one:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "TWC Testimony App"
4. Check the box: **repo** (Full control of private repositories)
5. Click "Generate token"
6. Copy the token and paste it when wrangler prompts you

#### 6b. Access Code
```bash
wrangler secret put ACCESS_CODE
```
Enter the code users will use to submit testimonies.
Example: `TWC2024` or `Testimony123`

#### 6c. Admin Password
```bash
wrangler secret put ADMIN_PASSWORD
```
Enter a strong password for admin access.
Example: `Admin@TWC2024!` (use something secure)

### Step 7: Test Your Worker

Visit this URL in your browser:
```
https://twc-testimony-api2.kd7bgn7q2z.workers.dev/api/db
```

You should see:
```json
{"users":{}}
```

If you see this, **congratulations!** Your worker is deployed and working.

## Next Steps

### Create the Data File
1. Go to your GitHub repository: https://github.com/Clenmar/Storymaps
2. Navigate to: `Pages/Apps/Testimony_app/`
3. Create a new file called: `testimonies.json`
4. Add this content:
```json
{
  "users": {}
}
```
5. Commit the file

### Upload the Frontend
1. Upload `index.html` to your repository at:
   `Pages/Apps/Testimony_app/worker/index.html`
2. The app will be accessible at:
   `https://clenmar.github.io/Storymaps/Pages/Apps/Testimony_app/worker/`

## Updating the Worker Later

After making changes to `index.js`:
```bash
cd path/to/twc-testimony-worker
wrangler deploy
```

## Troubleshooting

### "wrangler: command not found"
- Make sure Node.js is installed
- Restart your terminal
- Try: `npm install -g wrangler` again

### "Authentication failed"
- Run: `wrangler login` again
- Make sure you clicked "Allow" in the browser

### "Failed to publish"
- Check your internet connection
- Make sure you're logged in: `wrangler whoami`
- Check if the worker name is correct in `wrangler.toml`

### Worker Returns Errors
- Check that all three secrets are set:
  - `wrangler secret list` (shows which secrets exist)
- Verify your GitHub token has `repo` permissions
- Check that `testimonies.json` exists in your repository

## Support

For questions or issues:
- Check the Cloudflare Workers documentation: https://developers.cloudflare.com/workers/
- Review the main README.md in the parent folder
- Contact TWC Ministries web administrator

---

**Worker URL**: https://twc-testimony-api2.kd7bgn7q2z.workers.dev
**Repository**: https://github.com/Clenmar/Storymaps
**Last Updated**: April 2026
