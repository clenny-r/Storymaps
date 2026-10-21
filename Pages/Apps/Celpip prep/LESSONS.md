# CELPIP Mock Exam: Lessons Learnt

Folder: `C:\Users\ramne\Documents\Celpip test`
Last updated: 2026-10-21 (session 1, third update)

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

1. Chrome on Windows only has robotic computer voices. Microsoft Edge has natural "Online (Natural)" voices, including Canadian English (Clara, Liam). The engine prefers natural voices and Canadian ones first, and the start screen says which voices it found.
2. Real recordings in tests\audio\<TEST>\ are used first when present (file names in tests\audio\README.md).
3. Meta AI (meta.ai, signed in as clenmar.rowe in Chrome) makes realistic videos with exact spoken lines, but only 10-second clips. Workflow that worked: one chat per scene; first prompt describes room, camera and the three people by seat; each next prompt says "SAME scene ... Only <name> (<seat>) speaks ... saying exactly: <line of 21 words or fewer>"; download each clip (last Download button), stage from Downloads, check each clip with offline speech recognition (pocketsphinx), trim at the first long silence after the line, concatenate with ffmpeg and normalise loudness. About 70 seconds per clip.
4. Done so far: Test A Part 5 video (21 clips, 1 min 54 s, 9 MB). A whole test's listening would need about 200 clips, so full coverage is a long project.
5. Offline neural voice models (Kokoro, Piper, Whisper, Vosk) cannot be downloaded in the cloud session (model hosts blocked). pocketsphinx from pip works for rough transcript checks.

## Microphone

1. The page now asks for the microphone (and primes speech recognition) when Start or Resume is clicked, so nothing pops up during a recording. On the https website the browser also remembers the permission.

## Ideas not done yet

1. Meta AI videos for Part 5 of Tests B to K, then audio for other parts if wanted.
2. Automatic grading of Writing and Speaking inside the page.
3. Progress history across attempts for both candidates.
