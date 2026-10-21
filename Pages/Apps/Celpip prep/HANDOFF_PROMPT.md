# Handoff prompt for the next session

Copy everything inside the box below into a new Claude session.

```text
I am continuing my CELPIP (Canadian English Language Proficiency Index Program) mock exam project. Link to my laptop.
- Working copy: C:\Users\ramne\Documents\Celpip test
- Online copy (repo clenny-r/Storymaps, push with GitHub Desktop): C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Celpip prep
- Live: https://twcministries.net/Pages/Apps/Celpip%20prep/

Read first, in this order:
1. C:\Users\ramne\Documents\Celpip test\LESSONS.md (requirements, decisions, "Voices and media" item 0 explains the recorded voices)
2. C:\Users\ramne\Documents\Celpip test\tools\META_AI_RUNBOOK.md (exact steps to make the Part 5 videos)
3. C:\Users\ramne\Documents\Celpip test\tools\AUTHOR_SPEC.md and CELPIP_Mock_Exam.html

Status: 11 tests (A to K) are live. Two jobs are in progress:
A. Natural recorded voices (Kokoro mp3s) for every listening part and spoken question, into tests\audio\<TEST>\ in BOTH folders with a manifest.json per test, plus tests\audio\_common\soundcheck.mp3 and sample.mp3. Check which test folders have manifest.json; regenerate any missing ones with tools\gen_kokoro_audio.py (model files kokoro-v1.0.onnx and voices-v1.0.bin from the GitHub release thewh1teagle/kokoro-onnx, tag model-files-v1.0; pip install kokoro-onnx soundfile). Verify samples by transcription, commit, push with GitHub Desktop, confirm the live start screen says "Natural recorded voices are ready".
B. Meta AI videos for Listening Part 5 of Tests B to K (Test A is done). Prompts are in tools\meta_prompts_B_to_K.json. Follow META_AI_RUNBOOK.md exactly, one test at a time, push after each test.

Ask all permissions up front in one batch (Chrome for meta.ai, folders Downloads, Celpip test and Storymaps, computer use for GitHub Desktop and File Explorer). No em dashes. Give full absolute paths. When done, update LESSONS.md and HANDOFF_PROMPT.md and give me the new handoff prompt.
```
