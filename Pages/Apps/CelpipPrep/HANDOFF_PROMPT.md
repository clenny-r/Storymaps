# Handoff prompt for the next session

Copy everything inside the box below into a new Claude session.

```text
I am continuing my CELPIP (Canadian English Language Proficiency Index Program) mock exam project. Link to my laptop.
- Working copy and my saved answers: C:\Users\ramne\Documents\Celpip test
- Online copy (repo clenny-r/Storymaps, push with GitHub Desktop): C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\CelpipPrep
- Live: https://twcministries.net/Pages/Apps/CelpipPrep/

Read first: C:\Users\ramne\Documents\Celpip test\LESSONS.md (requirements, decisions, voices, Meta AI videos), then tools\AUTHOR_SPEC.md.

Status: 31 tests are live, shown as Mock Test 1 to 31 (files mock_test_A.js to mock_test_U.js are 1 to 21, mock_test_22.js to mock_test_31.js are 22 to 31; never rename the ids, the option shuffle depends on them). All sit slightly above real CELPIP difficulty (A to K audited 2026-10-21, see celpip_audit.html; later tests written to tools\AUTHOR_SPEC_V2.md and checked independently). Every test has natural recorded voices (Kokoro mp3s), a Meta AI video for Listening Part 5, and real-looking Speaking pictures made with ChatGPT in tests\img\<TEST>\ (prompts in tools\img_prompts.json, cutter in tools\img_build.py). Do NOT change any Listening text: it must match its recordings and videos (regenerate with tools\gen_kokoro_audio.py and tools\META_AI_RUNBOOK.md if a listening line ever changes).

If a parallel session left files in C:\Users\ramne\Documents\Celpip test\_parallel\, read its README.md, check that Listening sections are byte-for-byte unchanged, run tools\validate.js and the blind check, then copy the changed tests\mock_test_X.js into BOTH folders and push with GitHub Desktop.

Then check C:\Users\ramne\Documents\Celpip test\responses\ for attempt folders (Name_date_time). For each new attempt: read the __EVALUATION__ file, transcribe the speaking .webm files, grade Writing and Speaking against the CELPIP performance standards (Content/Coherence, Vocabulary, Readability or Listenability, Task Fulfillment), give a CELPIP level per task with specific feedback, a CLB (Canadian Language Benchmark) summary for all four skills, and a short study plan for the weakest skill.

Known context: my official free CELPIP Practice Test A gave Listening 34/37 (level 9) and Reading 35/37 (level 10). My wife Shadene got Listening level 6.

Ask all permissions up front in one batch. No em dashes. Spell out acronyms on first use. Give full absolute paths. When done, update LESSONS.md and HANDOFF_PROMPT.md and give me the new handoff prompt.
```
