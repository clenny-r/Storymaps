# Baby Games

Bible-themed interactive games for babies and toddlers at TWC Ministries.

**URL base:** `twcministries.net/Pages/Apps/Baby Games/`
**Start here:** `index.html` — the sub-landing page that lists every game. The
Apps landing page links straight to it, and each game's ← button comes back here.

## Files

| File | What it is |
|---|---|
| `index.html` | Sub-landing page: game cards, filter chips, grown-up notes |
| `kit.js` | **Shared top bar** — back, sound, voice, full screen, day/night. Loaded by every page |
| `photos.js` | **Realistic photos** from `photo/`, then the Twemoji in `img/`, then the emoji |
| `photo/` | 72 realistic photos (512 px .webp) made with ChatGPT, Oct 2026, checked by eye |
| `voice.js` | Shared speech: pre-recorded Grace clips first, then system voices or optional Piper voices |
| `voice/grace/` | 741 pre-recorded sentences (MP3) + `index.json`; see "Pre-recorded voice" below |
| `baby-squish-game.html` | Tap anywhere, bubbles pop |
| `baby-bible-squish.html` | Bible squish, with letters and numbers modes |
| `baby-draw.html` | Finger painting with worship songs |
| `baby-animals.html` | Animal Sounds: 3 age levels (6 / 16 / 37 animals), Look & listen and Find it! |
| `baby-colors.html` | Colour blocks that say their names |
| `baby-words.html` | First Words: 3 age levels (12 / 41 / 61 words), Look & say, Find it!, riddles for 3 to 5 |
| `baby-body.html` | Point To…: real photos of a smiling girl, 3 age levels (4 / 8 / 18 parts) |
| `baby-family.html` | Mommy, Daddy, Grandma, baby |
| `tutorial.html` | Video walkthrough |
| `galilee-village.html` | ★ Little Village of Galilee: open play, no goals; made for flights |
| `noah-ark.html` | Noah's Ark: pairs walk into the ark, rain, rainbow (Genesis 6 to 9) |
| `creation-days.html` | Seven Days of Creation; 3 to 5 put days in order (Genesis 1) |
| `lost-sheep.html` | The Lost Sheep: hide and seek on a hillside (Luke 15) |
| `loaves-fishes.html` | Five Loaves, Two Fish: share and count; 12 baskets (John 6) |
| `wise-builder.html` | The Wise Builder: rock or sand, then the rain (Matthew 7) |
| `joseph-coat.html` | Joseph's Colourful Coat: colours and patterns (Genesis 37) |
| `david-harp.html` | David's Harp: free play or follow the light to Jesus Loves Me |
| `fruit-garden.html` | Fruit of the Spirit Garden: plant, water, grow (Galatians 5) |
| `count-stars.html` | Count the Stars: bedtime counting and prayer (Genesis 15) |
| `bible-memory.html` | Bible Animals Memory: matching pairs with Bible stories |
| `play.js` | Shared engine for the story games: sounds, harp pluck, counting, celebrations, pannable scenes |
| `art/` | Painted storybook scenes (ChatGPT, Oct 2026), 1280 px .webp |
| `sw.js`, `offline-files.json` | Plane mode: "Save for the plane" stores every file for offline use |

## The shared kit

Add these two lines to any new game and it gets everything:

```html
<script src="voice.js"></script>
<script src="photos.js"></script>
<script src="kit.js"></script>
```

`kit.js` then:

- mounts the control bar at the **top** of the screen, inside the iOS safe area.
  Nothing a grown-up needs sits at the bottom, where Safari's toolbar hides it;
- hides any legacy `#voice-btn` / `#fs-btn` / `#back-btn` / `#sound-btn` and takes
  over their jobs (it reads the old back link, so `../index.html` becomes
  `index.html` automatically);
- remembers **day or night** for every Baby Games page in `babyTheme_v1`. Night
  mode dims `#game`, `#board`, `canvas` or anything with `.kit-dim`, so a game
  needs no dark palette of its own;
- calls the game's own `window.toggleSound()` when the 🔊 button is tapped;
- on a page with no Fullscreen API (iPhone Safari) the ⛶ button explains
  *Share → Add to Home Screen* instead of failing silently.

Set a different back target with `<body data-kit-back="../index.html">` — that is
what the sub-landing page itself uses.

## The voice

`voice.js` sets itself up on first visit (`BabyVoice.autoSetup`, called by the kit):

1. If the phone already has an **extra-natural** English voice (Siri, neural,
   enhanced, or any cloud voice) it uses that. No download.
2. Otherwise — which is what a fresh iPhone gives you — it fetches
   **`en_GB-jenny_dioco-medium`** (Jenny, British, gentle) once, about 63 MB,
   showing a small progress chip. After that it runs offline.
3. Never on a metered or slow connection (`saveData`, 2g/3g): it shows a hint and
   leaves the choice to the grown-up.
4. Never again once someone picks a voice by hand in the 🗣️ Voice picker
   (`babyVoicePicked_v1`).

Voices are fetched through `TtsSession.create({voiceId, progress})`, **not** the
library's own `download()`. In piper-tts-web 1.0.4/1.0.5 `download()` starts the
OPFS write without awaiting it, so it can resolve while the 63 MB model is still
half-written; opening a session straight after then reads a truncated file and
onnxruntime throws *"No graph was found in the protobuf"* — which showed up as
"Couldn't load that voice", at random, on a fresh phone. `TtsSession.create`
awaits the write and builds the graph from the blob it already has, so there is
no race and only one download. A model that is already truncated in the cache is
removed and fetched once more. After two failed automatic attempts the auto
download stands down (`babyVoiceAutoFail_v1`) and leaves it to the 🗣️ Voice
button.

Two device rules the voice has to respect:

- **An installed voice always wins.** `autoSetup` checks for a downloaded Piper
  voice *before* it checks whether the phone has a good system voice. Modern iOS
  exposes the whole macOS voice catalogue, "(Enhanced)" and "Premium" included,
  so the system-voice heuristic now returns true where it used to return false —
  and when it was checked first it reset the mode to `system`, and saved that,
  on every page load, silencing a voice the grown-up had already downloaded.
- **iPadOS 16 has no `createWritable()`**, and the library creates the file
  before writing it, so a failed write leaves a 0-byte file that it then reads
  back as empty forever after (`JSON.parse("")` → *Unexpected EOF*). It works
  once, then never again. Its own `remove()` can't clear it either — that uses
  the non-standard `handle.remove()`. `sweepCache()` drops any empty or
  truncated file with the standard `removeEntry()` before every session, and
  `primeCache()` then writes the model with `createSyncAccessHandle()` inside a
  Worker, which those devices *do* support. Note it cannot be feature-detected
  from the page: Safari exposes that API only inside a worker, so
  `FileSystemFileHandle.prototype` does not carry it on the main thread even
  where it works. `probeWorkerWrite()` settles it by doing a real 64-byte write
  once per device.

`voice-check.html` runs all of this on a device and prints the failing step.

Games speak with `BabyVoice.say(text, done)`. `baby-bible-squish.html` and
`baby-draw.html` route their own `speakText()` through it, so they inherit the
same voice.

Piper needs the onnxruntime import map in `<head>`; every game already has it:

```html
<script type="importmap">
{ "imports": { "onnxruntime-web": "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.18.0/+esm" } }
</script>
```

## Photographs, not emoji

`photos.js` turns a subject into a real photograph. Three sources, in order:

1. **a photo the parent chose** — `BabyPhotos.upload("Mommy", cb)` opens the phone's
   picker, square-crops to 480 px and keeps it in `localStorage`. Nothing is
   uploaded anywhere. *Where's Mommy?* has a 📷 **Photos** button so the game can
   show the child's actual family;
2. **a URL cached** from an earlier visit (re-checked every 3 months);
3. **Wikipedia's lead image** for the subject — genuine Wikimedia Commons
   photography, fetched through the CORS-friendly API and cached. `TITLES` in
   `photos.js` maps a subject to the right article (`cow → Cattle`,
   `balloon → Toy balloon`, `nose → Human nose`…).

If every source fails — no signal, blocked, no article — the original emoji stays
on screen, so a game never shows an empty box.

```js
BabyPhotos.warm(["dog","cat"]);            // pre-fetch a whole grid in one request
BabyPhotos.fill(node, "dog", "🐶");        // paint a node, emoji until the photo lands
BabyPhotos.fill(node, "Mommy", "👩", {round:true});
```

Photos are used in Animal Sounds, First Words, Point To…, Where's Mommy?, the
colour reward in Colors!, and the cards on this landing page.

## Keeping little fingers in the game

iPhone → Settings → Accessibility → Guided Access. Android → screen pinning.
`baby-bible-squish.html` also has its own PIN exit button.

## Shipping a change to voice.js, kit.js or photos.js

The host serves these with `cache-control: max-age=14400`, so a plain
`<script src="voice.js">` can keep running a **four-hour-old copy** after a
push. That is not theoretical: it is why several rounds of voice fixes looked
like they had done nothing on real devices while `voice-check.html` — which
loads `voice.js?ts=<now>` and so misses the cache — reported everything fixed.

Every page therefore loads them with a version stamp:

```html
<script src="voice.js?v=20260820a"></script>
```

**Bump that stamp in every page whenever one of those files changes**, or the
change will not reach anyone until the cache expires:

```bash
cd "Pages/Apps/Baby Games"
OLD=20260820a; NEW=20260821a
sed -i "s/?v=$OLD/?v=$NEW/g" *.html
```


## Age levels (Oct 2026)

Pages with `<body data-kit-levels="1">` get an **Age** button in the top bar and
ask "How old is our player?" on first visit. One shared setting
(`babyLevel_v1`) for every game. Read it with `BabyKit.level()` (1, 2 or 3) and
listen for the `babylevel` event.

| Level | Age | Animal Sounds | Point To… |
|---|---|---|---|
| 1 Little one | under 2 | 6 farm animals, 2 big pictures in Find it! | eyes, nose, mouth, ears |
| 2 Toddler | 2 to 3 | 16 animals, 3 pictures | adds hair, hands, tummy, feet |
| 3 Big kid | 3 to 5 | 37 animals, 4 pictures, "Who says moo?" | adds cheeks, chin, eyebrows, head, neck, shoulders, arms, legs, knees, toes |

Grounded in the CDC "Learn the Signs. Act Early." checklists: by 2 years a
child "points to things in a book when you ask" and "points to at least two
body parts"; by 4 years a child "draws a person with three or more body parts".

## Audio rules (Oct 2026 audit)

- `kit.js` keeps a list of every AudioContext a page makes and resumes all of
  them on **every** tap and when the app comes back from the background. iOS
  ignores `touchstart` as an unlocking gesture, so the old one-shot
  `touchstart` resume left some games silent on iPhone.
- `navigator.audioSession.type = "playback"` (Safari 16.4+) so tones and the
  natural voice play with the ring switch on silent, like the phone voice does.
- The 🔊 choice is remembered and **applied to the game on load**. Before, the
  bar could show 🔇 while the game still played, and the next tap put them out
  of step.
- `BabyVoice.say` gives each phrase a ticket; only the newest plays, so fast
  tapping no longer queues up late phrases. `BabyVoice.stop()` silences both
  voices (used by mute).
- God's Rainbow: two song links were missing the comma in the file name
  (`Little Stone, Big Win!`, `Two By Two, They Boarded The Boat!`) and were
  silently skipped. A song that fails now skips to the next one, and 🔊 mutes
  the music too.

## Voice clarity (Oct 2026, second pass)

- Short words were heard with their first sound missing ("cat" as "at").
  The text was fine (checked with the espeak phonemizer the natural voice
  uses), so the cause was playback: the speaker wakes a moment late, and iOS
  clips speech started straight after `cancel()`. The natural voice now gets
  0.15 s of silence in front and starts 0.08 s ahead; the phone voice waits
  0.14 s after cancelling anything still talking.
- First Words says the word on its own, then in a short phrase ("Cat! A cat."),
  so it is heard twice and never only as the very first sound.
- `SAYFIX` in `voice.js` respells sounds the engines mangle: "grrr" was read
  as the letters G-R-R-R, "hrrumph" as "H-rumph", "aaooo" as "ah-roo-oh".
- Accent: the default natural voice is now **Grace (American)**, not Jenny
  (British). There is no Canadian Piper voice. Phones that had Jenny
  installed automatically switch once, quietly, off a metered line; a voice a
  grown-up chose by hand is never changed. The phone-voice ranking now
  prefers en-CA, then en-US, then en-GB.

## Pre-recorded voice (27 Oct 2026)

Every sentence the games say is recorded once in Grace's voice (Piper
`en_US-hfc_female-medium`) and served from `voice/grace/<hash>.mp3`, so the
phone plays it instantly. Before this, the natural voice built each sentence on
the phone (1 to 3 s each), loaded a 63 MB model on every page, and needed a
63 MB download before switching, which felt like lag and like "the voice
doesn't change when I tap it".

- `BabyVoice.say(text)` splits the text into sentences. If every sentence has a
  clip, the clips are joined and played; otherwise it falls back to the live voice.
- Clip name = FNV-1a hash (8 hex) of the sentence key: text after `fixText()`,
  emoji removed, lower case, single spaces. `BabyVoice._sentences(text)` shows the keys.
- Grace is the default and the first choice in the Voice menu. A grown-up who
  picks another voice gets live speech as before.
- **Adding or changing any spoken line means recording its clip.** Run the
  harvest (every sentence the games can say), record the missing ones with
  piper-tts-web in Chrome on the live site, convert WAV to MP3 (trim silence,
  mono, 22 kHz, 40 kbps), rebuild `index.json`, and bump `CLIP_V` in `voice.js`.
  The scripts used are described in LESSONS.md.

## Story games and Plane mode (28 Oct 2026)

- Eleven Bible story games share `play.js`. Scene games (`noah-ark`, `lost-sheep`,
  `galilee-village`) use `Play.scene()`: the 3:2 picture fills the height and pans
  sideways with a finger; on an upright phone at least half of it shows, with the
  sky colour above. Tap spots are `[x, y, r]` in percent of the picture.
- People in scenes are seen from behind or at a distance, children of different
  races; animals and objects are real photos from `photo/`.
- **Plane mode**: `sw.js` keeps every page saved (pages network-first, everything
  else saved-copy-first). The "Save for the plane" button on `index.html` saves the
  whole list in `offline-files.json`. **Re-run `python3 tools/make_offline_list.py`
  whenever files are added**, and bump `CACHE` in `sw.js` if the layout changes.
