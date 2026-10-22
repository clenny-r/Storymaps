# CELPIP Prep: mock exams

A computer-based practice exam in the CELPIP-General format, for Clenmar and Shadene Rowe.

**Live:** https://twcministries.net/Pages/Apps/CelpipPrep/

- 11 full tests (A to K). Tests B to K are slightly harder than the real exam.
- Listening (6 parts, video in Part 5), Reading (4 parts), Writing (2 tasks), Speaking (8 tasks, recorded).
- Layout and timing follow the official CELPIP practice test: questions read aloud in Listening Parts 1 to 3, all questions on one screen in Parts 4 to 6, no speaker names on screen.
- All questions are original practice material, not official CELPIP content.

## How to use

1. Open the page in **Microsoft Edge** for natural Canadian voices (Chrome also works, with plainer voices).
2. Enter the candidate name, pick a test and sections, choose **Choose save folder** and select where answers should go (for example `Documents\Celpip test`).
3. Allow the microphone once when asked at the start.
4. At the end, click **Copy grading request for Claude** and paste it into Claude.

Nothing is uploaded: answers and recordings are saved only to the folder you choose (or your Downloads folder).

## Files

| Path | Purpose |
|---|---|
| `index.html` | The exam engine |
| `tests/mock_test_A.js` to `mock_test_K.js` | Test content and answer keys |
| `tests/audio/` | Optional real recordings that replace the computer voice (see its README) |
| `tools/` | Author spec and checking tools for new tests |
| `LESSONS.md`, `HANDOFF_PROMPT.md` | Project notes for the next work session |
