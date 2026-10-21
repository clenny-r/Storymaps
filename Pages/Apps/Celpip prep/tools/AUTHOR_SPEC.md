# Spec for writing one CELPIP-General mock test file

You are writing ONE complete practice test for a home-made CELPIP-General mock exam. Two adults will sit it to prepare for the real test for Canadian permanent residence, so accuracy matters more than anything. Every question must have exactly one defensible correct answer.

## Files

- Reference (copy its structure exactly): `/home/claude/celpip/tests/mock_test_A.js`
- Your output: `/home/claude/celpip/tests/mock_test_<LETTER>.js`
- Validator (must report 0 errors and no answer-length warning): `node /home/claude/celpip/tools/validate.js /home/claude/celpip/tests/mock_test_<LETTER>.js`
- Picture check: `cd /home/claude/celpip && python3 tools/render_svgs.py tests/mock_test_<LETTER>.js /home/claude/celpip_render/<LETTER>.png` then open the PNG with the Read tool and look at it.

Do not edit any other file. Do not edit the engine or Test A.

## Format rules (the validator enforces most of these)

1. Same JavaScript shape as Test A: an IIFE that pushes one object onto `window.MOCK_TESTS`. Keep A's SVG helper `person()` (copy it) and build your own pictures.
2. `id: '<LETTER>'`, `title: 'Mock Test <LETTER>'`.
3. **The CORRECT option is always listed FIRST** in every `o` array. The engine shuffles options on screen. Every multiple-choice item has exactly 4 options.
4. **Answer-length balance:** the correct option must NOT be the single longest option in more than about a third of items. Make distractors similar in length and grammar to the correct answer. Test-wise candidates must not be able to guess by length, by "the most specific option", or by words copied from the transcript.
5. **No em dashes or en dashes anywhere** (no "—" or "–"). Use commas, colons, periods or the word "to" (for example "9:00 to 9:30 a.m."). Canadian spelling (colour, centre, neighbour, cheque, licence as a noun).
6. No real brand names, no real living public figures, no politics, no religion, nothing upsetting. Real Canadian place names are fine.
7. Strings are JavaScript single-quoted: escape apostrophes as `\'`. HTML inside passages must be well formed.
8. Numbers, prices, times and dates must be internally consistent. Do the arithmetic and check it twice.

## Section structure (identical to the real CELPIP-General)

### Listening (38 scored questions + 1 practice)
- `practice`: id `LP`, 1 segment, 4 to 6 short lines, 1 question (id `LP.1`).
- `L1` Part 1: Listening to Problem Solving. Two people solve a problem. **3 segments** with **3, 3 and 2 questions** (ids L1.1 to L1.8). About 400 to 650 words total.
- `L2` Part 2: Listening to a Daily Life Conversation. 1 segment, **5 questions**. About 180 to 380 words.
- `L3` Part 3: Listening for Information. An interview or information conversation, 1 segment, **6 questions**. About 250 to 500 words.
- `L4` Part 4: Listening to a News Item. One news reader, 1 segment, **5 questions**. About 180 to 380 words. Split into several lines of 1 to 3 sentences.
- `L5` Part 5: Listening to a Discussion. **Three** people, `video: true`, `setting: 'meeting'` (or another allowed setting), 1 segment, **8 questions**. About 300 to 580 words.
- `L6` Part 6: Listening to Viewpoints. One reporter presents two opposing views on an issue, 1 segment, **6 questions**. About 220 to 480 words.
- Allowed `setting` values: office, store, studio, news, meeting, classroom, outdoor. For `meeting` and `classroom`, add `board: '<short text, max 34 characters>'` shown on the whiteboard or chalkboard. The board text must not give away an answer.
- Cast: max 3 people per part, keys in CAPS, each `{ name, g: 'm'|'f', skin, hair, shirt, style }`, colours as `#rrggbb`, style one of short, long, bun, curly, bald. Vary skin tones and names to reflect Canada.
- Question types to mix: main idea, specific detail (numbers, times, places), speaker's reason or attitude, inference ("What will X probably do next?"), and paraphrase. In CELPIP, wrong options often use words that DO appear in the audio but in the wrong relation. Use that, fairly.
- Transcripts must sound like natural spoken Canadian English: contractions, short turns, a few hesitations.

### Reading (38 questions)
- `R1` Reading Correspondence, `minutes: 11`. A personal or work message (about 300 to 420 words) in `passage`. `questions` R1.1 to R1.6 written as sentence beginnings completed by the options. Then `reply` (about 150 to 220 words) containing `[[R1.7]]` to `[[R1.11]]` exactly once each, with matching `blanks`. Blank answers must require understanding of BOTH the message and the reply.
- `R2` Reading to Apply a Diagram, `minutes: 9`. `passage` holds an HTML `<table class="diagram">` inside `<div class="tbl-wrap">` plus a short `<ul class="notes">` of conditions. `reply` is an email with `[[R2.1]]` to `[[R2.5]]`, then `questions` R2.6 to R2.8. Answers must require reading the table and notes, including at least one calculation and one condition from the notes. Check every number.
- `R3` Reading for Information, `minutes: 10`. Article with exactly four paragraphs starting `<p><b>A.</b> ...`, `<b>B.</b>`, `<b>C.</b>`, `<b>D.</b>` (about 380 to 520 words). Nine statements `R3.1` to `R3.9`, each `{ id, q, fixed: true, a: 'A'|'B'|'C'|'D'|'E' }`. E means "not given in any paragraph". Use E once or twice, and make each E statement clearly not stated (not merely implied). Statements must paraphrase, not copy, the paragraph.
- `R4` Reading for Viewpoints, `minutes: 13`. Article (about 400 to 550 words) presenting at least two clearly different viewpoints with named people. `questions` R4.1 to R4.5, then a reader comment `reply` with `[[R4.6]]` to `[[R4.10]]`.
- Each part has `instructions` worded like Test A's.

### Writing
- `W1` Task 1: Writing an Email, `minutes: 27, minWords: 150, maxWords: 200`. A realistic situation and exactly three `<li>` bullet points to cover.
- `W2` Task 2: Responding to Survey Questions, `minutes: 26, minWords: 150, maxWords: 200`, two `options` with keys A and B. Both options must be genuinely defensible.

### Speaking (titles must match exactly)
- `SP` practice: prep 30, speak 60.
- `S1` 'Task 1: Giving Advice' 30/90. `S2` 'Task 2: Talking about a Personal Experience' 30/60.
- `S3` 'Task 3: Describing a Scene' 30/60 with `image` (SVG, `viewBox="0 0 640 400"`). The scene must contain at least 7 clearly visible, describable activities and people, and at least one situation that is obviously about to change (for Task 4).
- `S4` 'Task 4: Making Predictions' 30/60, `image` is the SAME variable as S3.
- `S5` 'Task 5: Comparing and Persuading', `type: 'compare', select: 60, prep: 60, speak: 60`, two `choices` (keys A, B) and a `third` (key C), each with a small SVG (`viewBox="0 0 200 120"`), a `title` and 4 `facts` with prices or times. Plus `persuade` text in the same form as Test A.
- `S6` 'Task 6: Dealing with a Difficult Situation' 60/60, HTML prompt with "Choose ONE", `<b>Option A:</b>` and `<b>Option B:</b>` as in Test A.
- `S7` 'Task 7: Expressing Opinions' 30/90. `S8` 'Task 8: Describing an Unusual Situation' 30/60 with an SVG `image` of an unusual object that has at least 5 distinct visible features and a price tag.

### Pictures
- Flat, simple SVG shapes. No external images, no fonts other than `sans-serif`. Everything must be inside the viewBox.
- After writing, render them with the picture check command and LOOK at the PNG. Fix anything that overlaps badly, floats, or is unrecognisable. Labels (for example "ICE CREAM") help recognition.

## Quality bar

- Target difficulty: **slightly harder than the real CELPIP** (the candidates asked for this). Aim at CLB 8 to 11: denser transcripts and passages, more paraphrase between text and options, more inference and attitude questions, distractors that use words from the text, and fewer give-away detail questions. About 20% easy, 45% medium, 35% hard in each part. Still exactly one defensible answer per item, and still fair: no trick wording, no outside knowledge.
- Every listening answer must be stated or clearly implied in the transcript. Every reading answer must be supported by the text. No question may be answerable from general knowledge alone.
- Exactly one option is correct; the other three are clearly wrong for a careful reader, yet plausible to a careless one.
- Do not reuse Test A's situations, names or wording.

## Your final self-check (do all of these before you finish)

1. Run the validator until it shows 0 errors and no answer-length warning. Word-count warnings must be fixed too.
2. Render and look at the pictures.
3. Re-read every question against its transcript or passage and confirm the first option is the only correct one. Re-do all arithmetic.
4. Search your file for "—" and "–" (must be none).
5. Report back: the file path, validator output, a one-line summary of each part's topic, and any doubts.
