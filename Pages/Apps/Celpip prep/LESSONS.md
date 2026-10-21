# CELPIP Mock Exam: Lessons Learnt

Folder: `C:\Users\ramne\Documents\Celpip test`
Last updated: 2026-10-21 (session 1, sixth update: Meta AI Part 5 videos for all 11 tests)

## What exists

| Item | Full path | Purpose |
|---|---|---|
| Exam page | `C:\Users\ramne\Documents\Celpip test\CELPIP_Mock_Exam.html` | Full four-section mock exam. Open in Chrome or Edge. Pick the test (A to K) on the start screen. |
| Test content | `C:\Users\ramne\Documents\Celpip test\tests\mock_test_A.js` to `mock_test_K.js` | 11 complete tests: questions, transcripts, answer keys, speaking pictures. |
| Author tools | `C:\Users\ramne\Documents\Celpip test\tools\` | `AUTHOR_SPEC.md` (rules for writing a test), `validate.js` (structure checker), `blind.js` and `compare.js` (blind answer-key check), `render_svgs.py` (picture check). |
| Responses | `C:\Users\ramne\Documents\Celpip test\responses\<Name>_<date>_<time>\` | Created by the page. One folder per attempt. |
| Online copy (GitHub) | `C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Celpip prep\` | Same app in the Storymaps repo (clenny-r/Storymaps), served at https://twcministries.net/Pages/Apps/Celpip%20prep/ |
| Real recordings | `tests\audio\<TEST>\` | Optional mp3/mp4 files that replace the computer voice (see tests\audio\README.md) |
| Official sample (saved page) | `C:\Users\ramne\Documents\Celpip test\CELPIP-General Free Online Sample Test.html` | Saved by Clenmar; used only to trace the layout. |

## Diagnostic results so far (official free CELPIP Practice Test A)

1. Clenmar: Listening 34/37, approximate level 9. Reading 35/37, approximate level 10. Writing and Speaking not yet graded.
2. Shadene: Listening approximate level 6. Other sections not yet reported.
3. CRS (Comprehensive Ranking System) context: CELPIP level equals CLB (Canadian Language Benchmark) level. The 50-point skill transferability bonuses need CLB 9 or higher in all four skills. Spouse points: 1 per skill at CLB 5 or 6, 3 at CLB 7 or 8, 5 at CLB 9 or higher.

## User requirements (keep applying)

1. Tests B to K are slightly HARDER than the real CELPIP (aimed at CLB 8 to 11). Test A is close to real difficulty.
2. Every saved file name holds the candidate name, attempt time and save time; nothing is ever overwritten.
3. Layout must match the official test software (traced from the saved sample page): page never scrolls; grey title strip with title left, "Time remaining" and blue NEXT right; two equal panels that each scroll on their own (left grey #f5f5f5 = instructions and media or passage, right pale blue-green #eef8f9 = questions); instructions bold dark blue #1a578a with key word in #4789ac; grey rounded status boxes with an icon tile and 18 px cyan progress bar; answer list with dotted dividers, light green hover, teal selected and underlined.
4. Double check everything; no em dashes anywhere.

## Lessons learnt

1. CELPIP's free practice tests (two full tests) are reached through a short form at celpip.ca/free-practice-tests. No account needed.
2. The official free practice test does NOT record Speaking. This mock exam records every task.
3. Official raw-score charts overlap; the mock uses fixed cut-offs inside them, so levels are estimates.
4. CSS: elements with a `display` rule ignore the `hidden` attribute unless the CSS has `[hidden]{display:none!important}`.
5. Canvas font strings must quote family names containing digits or spaces, e.g. `"Fira Sans"`.
6. Chrome speech voices can stop firing `onend`; the player polls `speechSynthesis.speaking` and has a per-sentence time limit.
7. Authoring rule: correct option first in every list; the engine shuffles with a seed that includes the TEST id (so answer positions differ between tests). Earlier the seed ignored the test id, which would have repeated answer positions across tests.
8. Answer-length bias: Test A originally had the correct option as the longest in 62% of items. The validator now warns above 40%; all 11 tests are well below.
9. Scene text (meeting whiteboard, classroom chalkboard) comes from each part's `board` field; it was hard-coded to Test A before.
10. Timers and audio callbacks can fire after the screen changes; the engine uses a safe lookup `$s()` for those. Rapid-navigation test now shows 0 page errors across all 11 tests.
11. Quality process that worked: writer agent per test with a strict spec, then validator, then picture render and visual check, then a blind checker who answers from a key-less sheet (keys kept in a separate folder), then compare and fix every note. Typical findings: ambiguous pronouns or genders in stems, a blank where two options were literally true, an unstated rule needed for a calculation, a duplicated speaker label, a timeline inconsistency.
12. Final results of the blind checks: all 11 tests 77/77 agreement after fixes.
13. Claude in Chrome cannot open `file:///` pages, so live checks were done in headless Chromium (fake microphone, no voices). Real voices, the microphone prompt and folder saving still need a first live run on the laptop.
14. The device bridge needs the Claude desktop app window open before folder access can be granted.

## What the real exam does (official CELPIP Listening study guide, checked 2026-10-21)

1. No speaker names on screen in any part.
2. Parts 1 to 4 and 6 are audio only (no picture of speakers). Part 5 is a video of three people; test-takers track them by screen position.
3. Parts 1 to 3: questions are read aloud, one per screen, about 30 seconds each; answer options are on screen.
4. Parts 4 to 6: all questions for the part on one screen with one timer.
5. The mock now does all of this (engine updated 2026-10-21).

## Voices and media

0. DECISION (2026-10-21 morning): the browser's built-in voices are no longer the main audio. Clenmar heard the phone's robot voice and rejected it. Every listening conversation and every spoken question for all 11 tests is now a recorded mp3 in tests\audio\<TEST>\ made with Kokoro (an 82M-parameter open neural voice model, ChatGPT-voice class) running in the cloud session on CPU (about 2x real time). The page checks tests/audio/<TEST>/manifest.json; when it exists it shows "Natural recorded voices are ready" and never falls back to the computer voice. The sound check and the "Hear a sample" button use tests/audio/_common/soundcheck.mp3 and sample.mp3.
   How it was done: model files kokoro-v1.0.onnx and voices-v1.0.bin from the GitHub release thewh1teagle/kokoro-onnx (GitHub release downloads work from the cloud; HuggingFace and Microsoft's Edge voice server do not). Script: /home/claude/kk/gen_all.py (copy in tools\gen_kokoro_audio.py). Voices: women af_heart, af_bella, af_aoede, bf_emma, af_kore, af_nova; men am_michael, am_fenrir, am_puck, bm_george, bm_fable, am_liam; question narrator af_sarah. Each speaker in a test gets a distinct voice. 0.55 s pause between lines, loudness normalised to -18 LUFS, 56 kbps mono mp3. Kokoro also runs in Chrome on the laptop GPU (kokoro-js from jsDelivr, WebGPU) but the tab froze during a reload, so the cloud CPU route is the reliable one.
   Accent: Kokoro has American and British voices, no Canadian. Canadian and American English sound alike for test purposes.
   Check: every conversation was transcribed back offline (match 0.80 to 0.94 for Parts 2, 4 and 6 of all 11 tests, which is as high as the rough recogniser gets) and question audio reads the question.
   Phones: phones block sound until the user taps. The page now uses one shared audio player and one shared video player, unlocked with a silent clip on the first tap anywhere; if a phone still blocks, a big "Tap to play the recording" button appears instead of falling back to the robot voice. manifest.json lists every recorded file ("list"), so the page plays files directly without probing (iPhones do not preload).

1. Chrome on Windows only has robotic computer voices. Microsoft Edge has natural "Online (Natural)" voices, including Canadian English (Clara, Liam). The engine prefers natural voices and Canadian ones first, and the start screen says which voices it found.
2. Real recordings in tests\audio\<TEST>\ are used first when present (file names in tests\audio\README.md).
3. Meta AI (meta.ai, signed in as clenmar.rowe in Chrome) makes realistic videos with exact spoken lines, but only 10-second clips. Workflow that worked: one chat per scene; first prompt describes room, camera and the three people by seat; each next prompt says "SAME scene ... Only <name> (<seat>) speaks ... saying exactly: <line of 21 words or fewer>"; download each clip (last Download button), stage from Downloads, check each clip with offline speech recognition (pocketsphinx), trim at the first long silence after the line, concatenate with ffmpeg and normalise loudness. About 70 seconds per clip.
4. Done so far: Test A Part 5 video (21 clips, 1 min 54 s, 9 MB). A whole test's listening would need about 200 clips, so full coverage is a long project.
5. Offline neural voice models (Kokoro, Piper, Whisper, Vosk) cannot be downloaded in the cloud session (model hosts blocked). pocketsphinx from pip works for rough transcript checks.

## Microphone

1. The page now asks for the microphone (and primes speech recognition) when Start or Resume is clicked, so nothing pops up during a recording. On the https website the browser also remembers the permission.
2. Recording test (2026-10-21, headless Chromium with a fake microphone playing real speech): all 9 Speaking files saved (practice plus S1 to S8), Opus 48 kHz, mean volume -18 to -27 dB, length matches the speaking time, and the speech in the file transcribes back to what was fed in. 0 page errors.
3. MediaRecorder .webm files have no duration in their header (ffprobe shows N/A; players show no length and cannot seek). Fixed in the page: any audio or video with unknown duration is briefly seeked to the end to measure it, then reset to 0. Verified: a saved file now reports 11.94 s.
4. In headless tests the transcript file says "No transcript captured" because there is no speech recognition there; on the laptop in Chrome or Edge the transcript is filled.

## Audio check of the Test A Part 5 video (2026-10-21)

1. The deployed tests/audio/A/L5-0.mp4 was cut back into its 21 lines and transcribed offline: 19 of 21 lines match the script closely (mean match 0.90).
2. Voice pitch per line matches the speaker every time: Raj about 100 to 120 Hz (male), Hannah and Colette about 165 to 225 Hz (female).
3. Two weak lines: "Raj, you had an idea?" (end of clip 2, quiet) and "I like that. And it leaves some money left over." (clip 18). Neither is needed for any of the 8 Part 5 questions; every answer comes from a clearly heard line. Numbers check: 8 x 800 = 6,400; 4,000 chairs + 4 x 800 = 7,200; 10,000 - 7,200 = 2,800 reserve.
4. The live site serves the video (1280x720, 114 s) and it plays.

## Meta AI Part 5 videos for all tests (done 2026-10-21 afternoon)

1. Every test A to K now has tests/audio/<T>/L5-0.mp4: three real-looking people at a table, one 10-second Meta AI clip per line (about 280 clips in total), trimmed and joined. Lengths 2 to 2.7 minutes, close to the real exam.
2. Checks per clip: offline transcription against the script (mean match 0.79 to 0.91 per test), voice pitch against the speaker's gender, a frame contact sheet for same people and seats, and OCR (tesseract) on the bottom of frames to catch burned-in subtitles. Two clips (H line 2, I line 15) had subtitles and were regenerated with "No captions, no subtitles, no on-screen text".
3. Faster and safer download method: do NOT click Meta's Download button (it sometimes saved the previous clip). Instead, in the page, fetch the video element's src as a blob and save it with a chosen name, e.g. celpipB_07.mp4 (window.__fin2 in tools/META_AI_RUNBOOK.md). In a fresh chat the n-th video element is clip n. After a page reload the chat list is virtualised, so then take the LAST video instead.
4. Meta sometimes repeats words after the line. The trimmer tries every pause as an end point and keeps the earliest one whose transcript is about as good as the best; this cut the videos from about 3.5 to about 2.3 minutes and raised match scores.
5. Meta sometimes answers "couldn't be generated right now" or "safety check service temporarily unavailable"; just send the same prompt again. A first fetch can return a partial file under 1 MB; fetch again.
6. Typing the prompt with computer type plus Return works; setting the textarea value from JavaScript does not register with Meta's page.

## Reading upgrade (merged 2026-10-21, made by a parallel session)

1. Reading in all 11 tests was rewritten to real CELPIP length and difficulty: answers no longer copy the text word for word (Part 4 answer copy 50 to 77 percent down to 19 to 42 percent), more inference and attitude questions, Test A passages lengthened, overlaps with Listening names and topics removed. Audit page: C:\Users\ramne\Documents\Celpip test\_parallel\content_audit.html.
2. Listening, Writing and Speaking objects were checked identical before merging (so recordings and videos still match). Validator 0 errors on all 11; blind answer-key check 847 of 847; full screen-by-screen test of all 11 tests with 0 page errors.
3. Working pattern that worked for two sessions at once: the second session only edits copies in _parallel\ and touches no browser, Downloads or GitHub; the main session merges, checks and pushes.

## Ideas not done yet

2. Automatic grading of Writing and Speaking inside the page.
3. Progress history across attempts for both candidates.
