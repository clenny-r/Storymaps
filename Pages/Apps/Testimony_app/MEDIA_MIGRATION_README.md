# TWC Testimony App - Media Storage Migration

## 🎯 Problem Solved

**Before:** 1.2MB JSON file with base64-encoded images and audio → GitHub API timeouts, "Unexpected end of JSON" errors

**After:** Small JSON file (~50KB) + separate media files in organized folders → Fast, reliable, scalable

---

## 📁 New Folder Structure

```
Pages/Apps/Testimony_app/
├── testimonies.json          (lightweight, only text + URLs)
├── media/
│   ├── images/
│   │   ├── Clenny_1775267443060.jpg
│   │   ├── clenny1_1775267573127.jpg
│   │   └── ...
│   └── audio/
│       ├── Clenny_1775267443060.webm
│       ├── Clenny22_1775267597970.webm
│       └── ...
├── testimonies_backup_2026-04-04.json
└── worker/
    └── index.html
```

---

## 🔄 Migration Steps

### **Step 1: Run Migration Script**

```bash
cd C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Testimony_app

# Install Node.js if not already installed, then run:
node migrate_media.js
```

This will:
- Extract all base64 images → `media/images/`
- Extract all base64 audio → `media/audio/`
- Create `testimonies_migrated.json` with URLs instead of base64
- Show size reduction stats

### **Step 2: Backup Original**

```bash
# Rename original as backup
rename testimonies.json testimonies_original_backup.json

# Rename migrated file
rename testimonies_migrated.json testimonies.json
```

### **Step 3: Create GitHub Folders**

On GitHub, create these folders with placeholder files:

1. `Pages/Apps/Testimony_app/media/images/.gitkeep`
2. `Pages/Apps/Testimony_app/media/audio/.gitkeep`

### **Step 4: Commit Everything**

```bash
# Via GitHub Desktop:
# - Add all new files in media/images/ and media/audio/
# - Add the new testimonies.json
# - Commit with message: "Migrate media to separate files"
# - Push to GitHub
```

### **Step 5: Deploy Updated Worker**

```bash
cd C:\Users\ramne\Documents\GitHub\00_All_Workers\twc-testimony-worker
wrangler deploy
```

---

## 📊 New Data Structure

### **Old Format (in JSON):**
```json
{
  "id": 1775267443060,
  "text": "My testimony...",
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA..." (hundreds of KB)
  "audio": "data:audio/webm;base64,GkXfo59ChoEBQveBA..." (hundreds of KB)
}
```

### **New Format (in JSON):**
```json
{
  "id": 1775267443060,
  "text": "My testimony...",
  "imageUrl": "https://raw.githubusercontent.com/clenny-r/Storymaps/main/Pages/Apps/Testimony_app/media/images/Clenny_1775267443060.jpg",
  "audioUrl": "https://raw.githubusercontent.com/clenny-r/Storymaps/main/Pages/Apps/Testimony_app/media/audio/Clenny_1775267443060.webm"
}
```

---

## ✅ Benefits

1. **JSON file stays small** - No more 1.2MB files
2. **Faster loading** - API responses under 1 second
3. **No more corruption** - File size well within GitHub limits
4. **Better caching** - Media files cached by GitHub CDN
5. **Easier backups** - JSON backups are tiny
6. **Scalable** - Can handle unlimited testimonies

---

## 🔄 Backwards Compatibility

The updated code supports BOTH formats:
- Old entries with `image` and `audio` (base64) still work
- New entries with `imageUrl` and `audioUrl` work
- During migration, old entries are converted to new format

---

## 🚀 Going Forward

**All new testimonies** will automatically:
- Upload images to `media/images/{username}_{entryId}.jpg`
- Upload audio to `media/audio/{username}_{entryId}.webm`
- Store only URLs in `testimonies.json`

**Result:** JSON stays lightweight forever! 🎉

---

## 📝 File Naming Convention

Media files use: `{username}_{entryId}.{ext}`

Examples:
- `Clenny_1775267443060.jpg`
- `SisterMary_1775268123456.webm`

This ensures:
- No conflicts between users
- Easy to identify which entry a file belongs to
- Chronological organization (timestamp in ID)

---

## 🛠️ Troubleshooting

**If migration fails:**
1. Check Node.js is installed: `node --version`
2. Verify file paths in `migrate_media.js`
3. Ensure you have write permissions
4. Check original JSON is valid

**If app shows broken images after migration:**
1. Verify media files committed to GitHub
2. Check URLs in testimonies.json point to correct path
3. Wait 1-2 minutes for GitHub CDN to update
4. Hard refresh browser (Ctrl+Shift+R)

---

## 💾 Storage Limits

GitHub has file size limits:
- Individual file: 100MB (plenty for images/audio)
- Repository: 5GB total (room for thousands of testimonies)

With this structure, you can store:
- ~10,000 images (500KB each) = 5GB
- ~2,000 audio clips (2MB each) = 4GB
- Practically unlimited text testimonies

---

## 📞 Support

Issues? Check:
1. Worker deployed successfully
2. Media folders exist on GitHub
3. testimonies.json is valid JSON
4. URLs in JSON match actual file locations
