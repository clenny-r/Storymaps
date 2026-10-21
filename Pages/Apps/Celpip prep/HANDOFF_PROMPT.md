# Handoff prompt for the next session

Copy everything inside the box below into a new Claude session.

```text
I am continuing my CELPIP mock exam project. Link to my laptop. The app lives in two places:
- Working copy and my saved answers: C:\Users\ramne\Documents\Celpip test
- Online copy (git repo clenny-r/Storymaps, push with GitHub Desktop):
  C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Celpip prep
  Live at https://twcministries.net/Pages/Apps/Celpip%20prep/

Before doing anything, read:
1. C:\Users\ramne\Documents\Celpip test\LESSONS.md (requirements, lessons, decisions, diagnostic scores)
2. C:\Users\ramne\Documents\Celpip test\tools\AUTHOR_SPEC.md (rules for test content)
3. C:\Users\ramne\Documents\Celpip test\CELPIP_Mock_Exam.html (the exam engine)
4. Skim one content file, e.g. C:\Users\ramne\Documents\Celpip test\tests\mock_test_B.js

There are 11 tests (A to K). B to K are slightly harder than the real CELPIP, as I asked.

Then check C:\Users\ramne\Documents\Celpip test\responses\ for attempt folders
(named Name_date_time). For each new attempt:
1. Read the file ending in __EVALUATION__saved-<time>.md.
2. Listen to or transcribe the speaking .webm files in the same folder.
3. Grade Writing and Speaking against the CELPIP performance standards
   (Content/Coherence, Vocabulary, Readability or Listenability, Task Fulfillment),
   give an estimated CELPIP level per task with specific feedback, and a CLB summary for all four skills.
4. Give a short study plan for the weakest skill.

Known context: my official free CELPIP Practice Test A gave Listening 34/37 (level 9)
and Reading 35/37 (level 10). My wife Shadene got Listening level 6.

If you write or edit any test, follow AUTHOR_SPEC.md, run tools\validate.js, render the pictures with
tools\render_svgs.py, and run a blind answer-key check (tools\blind.js, then a separate checker, then tools\compare.js).
No em dashes anywhere.

Optional next build: Meta AI videos for Part 5 of Tests B to K using the workflow in LESSONS.md
(save as tests\audio\<TEST>\L5-0.mp4 in BOTH folders, then commit and push).

When we finish, update LESSONS.md and HANDOFF_PROMPT.md, and give me the new handoff prompt.
```
