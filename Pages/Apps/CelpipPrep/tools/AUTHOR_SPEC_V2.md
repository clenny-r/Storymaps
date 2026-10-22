# Spec V2 (2026-10-21): additions that OVERRIDE the original AUTHOR_SPEC.md where they differ

Target: SLIGHTLY ABOVE the real CELPIP-General exam (mix of CLB 9 to 11 items with some CLB 7 to 8), everyday and community topics, no jargon.
Read the audit findings that produced these rules: /tmp/claude-0/-home-claude/3d05f3d2-620b-53bf-9e95-c5d52bc509a1/scratchpad/audit/BRIEF.md,
BENCH.md (official benchmark) and the after-audit examples in tests K, F and D (the best-rated tests). Do NOT reuse names, places,
businesses or topics listed in /tmp/claude-0/-home-claude/3d05f3d2-620b-53bf-9e95-c5d52bc509a1/scratchpad/audit/TOPICS_A_K.md.

## Listening (word counts are for all lines of the part)
- L1: 3 segments, 430 to 520 words total (140 to 175 each), questions 3/3/2.
- L2: 320 to 360 words. L3: 360 to 420 words. L4 (one news reader): 250 to 290 words. L6 (one reporter, two opposing experts): 480 to 540 words, each expert gives two arguments plus a concession or rebuttal.
- L5 (video, 3 people): 340 to 430 words in 22 to 30 lines. EVERY L5 LINE MUST BE 20 WORDS OR FEWER (each line becomes one 10-second AI video clip). Speaker names must make gender obvious (cast g must match the name); no titles like Ms./Mr./Dr. in L5 lines or names. Use at most 3 speakers and give each at least 5 lines. Put numbers in words.
- Correct options paraphrase or infer; never copy distinctive script wording. Wrong options reuse words that ARE in the recording but attach them to the wrong person, time, condition, or a figure that was said and then corrected. No off-topic or absurd distractors.
- Numeric answers are never said aloud: the listener combines two stated facts or catches a spoken correction ("Actually no, it's...").
- Each part has 1 to 2 inference items (attitude, intent, why someone mentions X, what will probably happen). A "what will X do next" answer must be implied, not announced in the last line.
- `q` texts in LP, L1, L2, L3 are read aloud: keep them full questions under 20 words (no sentence-completion stems in L1 to L3).
- No role labels in names that give away answers; names like 'Radio host' or 'News reader' are fine.
- Spoken lines under 45 words each; natural speech with contractions, hesitations, a correction or change of plan.

## Reading
- R1 letter 320 to 420 words; R2 at most 2 multi-step calculation items, other items apply a rule from the notes to a situation (conditional); R3 article 450 to 480 words, four paragraphs, number of E (not given) answers 1 to 3 (vary between tests), every E a near-miss anchored to a paragraph topic, answer pattern NOT 2/2/2/2/1; R4 article 480 to 560 words with at least three named voices, mixing fact and opinion.
- Correct option not usually the shortest or the longest. Validator must pass.

## Writing and Speaking
- W1: realistic context with a built-in tension and exactly 3 bullet points. W2: two options that each have a genuine drawback.
- S1: add a constraint (budget, time, competing obligation). S2: add an angle ("and what you would do differently"). S5: both choices with real trade-offs (price, time, a catch). S7: a framed situation (who is asking, two sides, what is at stake). S8: unusual object with a constraint (price, space, a flaw).
- S3 scene: 9 to 12 people with distinct activities, at least one obvious about-to-happen situation; S4 prompt may give a cue hint. Render and LOOK at every picture.

## Required checks before you finish
1. node /home/claude/celpip/tools/validate.js /home/claude/celpip/tests/mock_test_<L>.js : 0 errors.
2. grep -nP '[\x{2013}\x{2014}]' file : nothing.
3. Print word counts per listening part and the longest L5 line length (must be <= 20 words).
4. Render pictures with tools/render_svgs.py and look at them.
5. Re-read every question against the script and confirm one defensible answer.
