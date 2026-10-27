# Baby Games: lessons learnt

Newest first. Read this before changing anything in this folder.

## 26 Oct 2026 (evening): First Words levels, uncropped photos, clearer voice

### What was done
1. First Words: three age levels (12 / 41 / 61 words), Look & say plus Find it! (2 / 3 / 4 pictures), "Which one...?" riddles and "B is for ball" for 3 to 5.
2. Photos are never cropped any more (`object-fit: contain`); round family faces still fill their circle. Car, bus, train, boat and airplane were regenerated whole, plus new bicycle, cup and hat.
3. Voice: clipped first sounds fixed, misread animal sounds respelled, default natural voice switched to American (Grace).

### Lessons
1. **"cat" heard as "at" is a playback problem, not spelling.** The espeak phonemizer (pip `piper-tts`, works offline in the cloud) showed k-a-t correctly. Pad the audio with silence and do not speak straight after `cancel()` on iOS.
2. **Use the phonemizer to audit spoken text.** `EspeakPhonemizer().phonemize('en-us', text)` revealed "grrr" read as the letters G-R-R-R. Run it on any new animal sound before shipping.
3. **ChatGPT ignores "leave margin" in 2x2 grids for long subjects.** Vehicles came out cut at the cell edges twice. Ask for long things (vehicles, planes) as SINGLE images with "about 60% of the width, wide white space on all sides, no logos".
4. **Check for brand logos** on cars and products; the first car had a real maker's badge.
5. **Hugging Face is blocked** from both the cloud and the laptop background shell, so the actual Piper voices cannot be run there; the phonemizer is the next best check.
6. **Three choice cards on a phone** need their own size (`min(28vw,30vh)`), or the row runs off the screen.
7. **GitHub Desktop updates itself** (3.6.6 to 3.6.7 on 26 Oct 2026). Computer-use access is granted per version folder (`app-3.6.x\githubdesktop.exe`), so after an update the window is hidden from screenshots and key presses silently miss it. Fix: `computer_resolve_access` with `githubdesktop.exe` again, approve the new version, then click **Push origin** on screen (top bar, right of "Current branch"). Always confirm with `git ls-remote`.

## 26 Oct 2026: photos, age levels, Point To redesign, audio audit

### What was done
1. 74 realistic photos in `photo/` (512 px .webp; the two body photos are 768 px), made in ChatGPT, every one checked by eye. `photos.js` tries `photo/` first, then the Twemoji in `img/`, then the emoji.
2. Animal Sounds: three age levels (6 / 16 / 37 animals), "Look & listen" and "Find it!" (2 / 3 / 4 pictures), "Who says moo?" for 3 to 5.
3. Point To…: the cartoon face (it frightened a toddler) is replaced by two real photos of a smiling little Jamaican girl (face, full body). 18 parts over three levels. Tap zones are circles in percent of the photo, tested by a script that taps every zone.
4. Shared **Age** button in the top bar (`kit.js`, `babyLevel_v1`), levels grounded in the CDC "Learn the Signs. Act Early." checklists (checked on cdc.gov on 26 Oct 2026).
5. Audio audit fixes: see README "Audio rules".

### Lessons
1. **ChatGPT 2x2 grids work well**: one prompt sets the style ("realistic photo, single subject centred, plain pure white background, no text"), then each message asks for 4 subjects. About 1 minute per grid. Crop each quarter to a square.
2. **Cropping the quarters**: the grid gaps are not always exactly at the middle. Check the edges of every tile; three tiles (balloon, star, bus) picked up a thin strip from the neighbour and had to be cleaned.
3. **ChatGPT page traps** when scripting it from Chrome:
   - Only use images whose `alt` starts with "Generated image". An upsell advert card (images.openai.com) also counts as a "big image" and was cut by mistake twice.
   - Older images get unmounted from the page as the chat grows, so "count the images" logic breaks. Compare the last generated image's `src` before and after sending instead.
   - Images served from images.openai.com taint the canvas; fetch them with `credentials:'omit'` and draw from a blob URL.
   - Typing via `execCommand` hangs; a synthetic `paste` event into the ProseMirror box, then clicking the button whose aria-label is "Send", works without touching the mouse or keyboard.
   - Chrome renames repeat downloads to `name (1).json`; take the newest copy.
4. **Do not drive the shared computer while someone is using it.** Page scripts in our own Chrome tab are fine; clicks, typing and screenshots of the desktop are not.
5. **Pushing**: the background shell on the laptop has no GitHub login. Commit there with `git add "Pages/Apps/Baby Games"` (only our folder, the CELPIP work in progress stays out), then push from GitHub Desktop (Ctrl+P). GitHub Desktop's window does not show in computer-use screenshots on this laptop, but Ctrl+P works; confirm with `git ls-remote`.
6. **Git in the connected folder needs delete permission** (Git removes its lock files). `tar` needs `--overwrite` without it.
7. **Song links must match file names exactly**, commas included. Two worship songs were silent for months because of a missing `%2C`.
8. **iOS audio**: `touchstart` does not unlock Web Audio; resume on `touchend`/`click`, every time, for every AudioContext. Set `navigator.audioSession.type = "playback"` so the silent switch does not mute tones.
9. **Mute state** lives in the kit and must be pushed into the game on load (games all start "on").
10. Bump the `?v=` stamp in every page whenever `voice.js`, `kit.js` or `photos.js` change (now `20261026a`), and `PHOTO_V` in `photos.js` when a photo is replaced.

### Ideas not done yet
- Age levels for Colors!, First Words and Where's Mommy? (the kit already supports it: add `data-kit-levels="1"` and read `BabyKit.level()`).
- Real recorded animal sounds instead of the synthesised tone.
- A photo for the Squish, Bible Squish and God's Rainbow landing cards.
