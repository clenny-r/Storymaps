# TWC Ministries - Testimony App Worker

This folder contains the Cloudflare Worker backend for the TWC Ministries Testimony Log application.

## Files

- **index.js** - Cloudflare Worker code that handles API requests and GitHub data storage
- **index.html** - Frontend application that users interact with
- **README.md** - This file

## Architecture

The application uses:
- **Frontend**: Static HTML/CSS/JavaScript hosted on GitHub Pages
- **Backend**: Cloudflare Worker (serverless) that acts as an API
- **Database**: JSON file stored in GitHub repository (testimonies.json)

## Cloudflare Worker Setup

### Step 1: Create a Cloudflare Worker

1. Log in to your Cloudflare dashboard
2. Navigate to **Workers & Pages**
3. Click **Create Application** → **Create Worker**
4. Name your worker (e.g., `twc-testimony-api`)
5. Click **Deploy**

### Step 2: Configure Environment Variables

The worker requires three environment variables (secrets):

1. In your worker's dashboard, go to **Settings** → **Variables**
2. Add these **Environment Variables**:

   - **GITHUB_TOKEN**
     - Your GitHub Personal Access Token
     - Needs `repo` scope for reading/writing to the repository
     - Create at: https://github.com/settings/tokens
   
   - **ACCESS_CODE**
     - The code users enter to submit testimonies
     - Choose a memorable code (e.g., "TWC2024")
   
   - **ADMIN_PASSWORD**
     - Password for admin dashboard access
     - Choose a strong password

3. Click **Encrypt** for each variable to make them secrets

### Step 3: Deploy the Worker Code

1. In your worker's dashboard, click **Quick Edit**
2. Delete all existing code
3. Copy and paste the entire contents of `index.js`
4. Click **Save and Deploy**

### Step 4: Get Your Worker URL

Your worker will be deployed at:
```
https://your-worker-name.your-subdomain.workers.dev
```

Example: `https://twc-testimony-api.kd7bgn7q2z.workers.dev`

## Frontend Setup

### Step 1: Update API Endpoint

1. Open `index.html`
2. Find line 386 (in the CFG object):
   ```javascript
   API_BASE: 'https://your-worker-name.workers.dev',
   ```
3. Replace with your actual worker URL

### Step 2: Deploy to GitHub Pages

1. Copy `index.html` to your repository at:
   ```
   Pages/Apps/Testimony_app/worker/index.html
   ```

2. Commit and push to GitHub

3. Access the app at:
   ```
   https://clenny-r.github.io/Storymaps/Pages/Apps/Testimony_app/worker/
   ```

## GitHub Data Storage

The worker stores all testimonies in:
```
Pages/Apps/Testimony_app/testimonies.json
```

### Initial Setup

Create an empty `testimonies.json` file in your repository:

```json
{
  "users": {}
}
```

### Data Structure

The JSON file stores testimonies organized by user:

```json
{
  "users": {
    "John Doe": {
      "created": "2024-01-15T10:30:00.000Z",
      "entries": [
        {
          "id": 1705318200000,
          "seq": 1,
          "text": "God has been faithful...",
          "date": "1/15/2024",
          "time": "10:30:00 AM",
          "iso": "2024-01-15T10:30:00.000Z"
        }
      ]
    }
  }
}
```

## API Endpoints

The worker provides these endpoints:

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| GET | /api/db | Fetch all testimonies | None |
| POST | /api/entries | Create new testimony | Access Code |
| DELETE | /api/entries/:id | Delete testimony | Admin Password |
| POST | /admin/login | Admin authentication | Admin Password |
| GET | /admin/stats | Get usage statistics | Admin session |

## Testing

### Test Database Connection
```bash
curl https://your-worker-name.workers.dev/api/db
```

### Test Creating Entry
```bash
curl -X POST https://your-worker-name.workers.dev/api/entries \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Test testimony",
    "name": "Test User",
    "accessCode": "YOUR_ACCESS_CODE"
  }'
```

### Test Admin Login
```bash
curl -X POST https://your-worker-name.workers.dev/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "password": "YOUR_ADMIN_PASSWORD"
  }'
```

## Security Notes

1. **Environment Variables**: Always use encrypted environment variables for sensitive data
2. **CORS**: The worker allows all origins (`*`) - restrict this in production if needed
3. **Access Code**: Choose a code that's memorable but not easily guessable
4. **Admin Password**: Use a strong password with mixed characters
5. **GitHub Token**: Use a token with minimal required permissions (only `repo` scope)

## Troubleshooting

### "Failed to fetch from GitHub"
- Verify your GITHUB_TOKEN has the correct permissions
- Check that the repository and file path are correct
- Ensure the token hasn't expired

### "Invalid access code"
- Double-check the ACCESS_CODE environment variable
- Ensure users are entering the code exactly as configured

### CORS Errors
- Verify the worker is deployed and accessible
- Check browser console for specific error messages
- Ensure the API_BASE URL in index.html matches your worker URL

### "Unauthorized" on Delete
- Verify the ADMIN_PASSWORD environment variable is set correctly
- Check that you're entering the correct password

## Updating the Worker

1. Edit `index.js` locally
2. Go to your worker's Quick Edit
3. Paste the updated code
4. Click **Save and Deploy**

## Backup

The application stores all data in GitHub, which provides:
- Version history (git commits)
- Automatic backups
- Easy restoration

To manually backup:
1. Download `testimonies.json` from your repository
2. Or use the Admin Dashboard → JSON Backup feature

## Support

For issues or questions:
- Check the Cloudflare Workers documentation: https://developers.cloudflare.com/workers/
- Review GitHub API documentation: https://docs.github.com/en/rest
- Contact the TWC Ministries web administrator

---

**Deployed at**: https://twcministries.net/Pages/Apps/Testimony_app/worker/

**Repository**: https://github.com/clenny-r/Storymaps

**Last Updated**: April 2026
