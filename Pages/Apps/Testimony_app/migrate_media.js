// Migration script to convert base64 media to separate files
// Run this ONCE to migrate your existing 1.2MB testimonies.json

const fs = require('fs');
const path = require('path');

// Configuration
const TESTIMONIES_FILE = 'C:/Users/ramne/Documents/GitHub/Storymaps/Pages/Apps/Testimony_app/testimonies.json';
const MEDIA_BASE = 'C:/Users/ramne/Documents/GitHub/Storymaps/Pages/Apps/Testimony_app/media';
const IMAGES_DIR = path.join(MEDIA_BASE, 'images');
const AUDIO_DIR = path.join(MEDIA_BASE, 'audio');

// Create directories
if (!fs.existsSync(MEDIA_BASE)) fs.mkdirSync(MEDIA_BASE);
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR);
if (!fs.existsSync(AUDIO_DIR)) fs.mkdirSync(AUDIO_DIR);

// Read testimonies
console.log('Reading testimonies.json...');
const data = JSON.parse(fs.readFileSync(TESTIMONIES_FILE, 'utf8'));

let imageCount = 0;
let audioCount = 0;
let totalSaved = 0;

// Process each user
for (const [userName, userData] of Object.entries(data.users)) {
  console.log(`\nProcessing user: ${userName}`);
  
  if (!userData.entries) continue;
  
  for (const entry of userData.entries) {
    let modified = false;
    
    // Convert image
    if (entry.image && entry.image.startsWith('data:')) {
      const fileName = `${userName}_${entry.id}.jpg`;
      const filePath = path.join(IMAGES_DIR, fileName);
      
      // Extract base64 data
      const base64Data = entry.image.split(',')[1];
      const buffer = Buffer.from(base64Data, 'base64');
      
      // Save to file
      fs.writeFileSync(filePath, buffer);
      
      // Replace with URL (GitHub raw URL)
      entry.imageUrl = `https://raw.githubusercontent.com/Clenmar/Storymaps/main/Pages/Apps/Testimony_app/media/images/${fileName}`;
      delete entry.image;
      
      imageCount++;
      modified = true;
      console.log(`  ✓ Saved image: ${fileName} (${(buffer.length / 1024).toFixed(2)}KB)`);
    }
    
    // Convert audio
    if (entry.audio && entry.audio.startsWith('data:')) {
      const fileName = `${userName}_${entry.id}.webm`;
      const filePath = path.join(AUDIO_DIR, fileName);
      
      // Extract base64 data
      const base64Data = entry.audio.split(',')[1];
      const buffer = Buffer.from(base64Data, 'base64');
      
      // Save to file
      fs.writeFileSync(filePath, buffer);
      
      // Replace with URL
      entry.audioUrl = `https://raw.githubusercontent.com/Clenmar/Storymaps/main/Pages/Apps/Testimony_app/media/audio/${fileName}`;
      delete entry.audio;
      
      audioCount++;
      modified = true;
      console.log(`  ✓ Saved audio: ${fileName} (${(buffer.length / 1024).toFixed(2)}KB)`);
    }
    
    if (modified) totalSaved++;
  }
}

// Save updated JSON
const outputFile = TESTIMONIES_FILE.replace('.json', '_migrated.json');
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

const originalSize = (fs.statSync(TESTIMONIES_FILE).size / 1024 / 1024).toFixed(2);
const newSize = (fs.statSync(outputFile).size / 1024 / 1024).toFixed(2);

console.log('\n' + '='.repeat(60));
console.log('MIGRATION COMPLETE!');
console.log('='.repeat(60));
console.log(`Images extracted: ${imageCount}`);
console.log(`Audio extracted: ${audioCount}`);
console.log(`Total entries updated: ${totalSaved}`);
console.log(`Original JSON size: ${originalSize}MB`);
console.log(`New JSON size: ${newSize}MB`);
console.log(`Space saved: ${(originalSize - newSize).toFixed(2)}MB (${((1 - newSize/originalSize) * 100).toFixed(1)}% reduction)`);
console.log('\nNew files created:');
console.log(`  ${outputFile}`);
console.log(`  ${IMAGES_DIR}/ (${imageCount} files)`);
console.log(`  ${AUDIO_DIR}/ (${audioCount} files)`);
console.log('\nNext steps:');
console.log('1. Review testimonies_migrated.json');
console.log('2. Backup original testimonies.json');
console.log('3. Rename testimonies_migrated.json to testimonies.json');
console.log('4. Commit all files to GitHub (JSON + media folders)');
console.log('5. Deploy updated worker');
