// Questions for Clenmar. One entry per question; each entry names its round. Add a new round by appending entries with a new 'round'.
// a and b are the start and end second in videos/eNN-pP.mp4. An entry with no ep has no clip.
// group "Fixed": "old" is a short clip of the video before the fix (review/old/...), a and b are the same moment in the new video.
// "rows": [label, text] pairs shown under the question.
window.REVIEW_ROUND = "round-3-2026-10-10";
window.REVIEW_ITEMS = [
 {
  "id": "r-word",
  "group": "Rulings",
  "ep": 4,
  "part": 3,
  "a": 65,
  "b": 71,
  "title": "Which word replaces \"cyaan\"?",
  "why": "You said the Patois word is \"cyaah\" and the meaning is \"can't\". This is the line you reported. Which should the voice say in every remade line?",
  "options": [
   "\"cyaah\": test one clip first and let me hear it",
   "\"can't\": plain English",
   "Decide after I hear a \"cyaah\" test clip"
  ],
  "script": "Cyaan play partner dominoes by yuhself, boss.",
  "heard": "Let's see and play partner dominoes by yourself, boss.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "r-clenmar-english",
  "group": "Rulings",
  "ep": 25,
  "part": 1,
  "a": 59,
  "b": 72,
  "title": "Your character speaks standard English",
  "why": "Your note on Episode 25: Part 2's clearer accent is the one to keep. This clip is Part 1 (the hard one). Should every new Clenmar line be written in standard English?",
  "options": [
   "Yes, for every new or remade line",
   "Yes, and remake his lines in Episode 25 Part 1 now",
   "No, keep his Patois"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "r-order",
  "group": "Rulings",
  "ep": null,
  "part": null,
  "a": null,
  "b": null,
  "title": "Where should the fixing start?",
  "why": "The fixes that need no new clips (sources cards, one-word captions, the quiet line, wrong cutaways) can be done while you answer the rest.",
  "options": [
   "Start the no-clip fixes now",
   "Wait until I have answered everything"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "r-cast-clenmar",
  "group": "Rulings",
  "ep": 18,
  "part": 1,
  "a": 62,
  "b": 72,
  "title": "Clenmar looks different from episode to episode",
  "why": "Here in Episode 18 he looks mid 40s; the cast list says 31. He also differs in Episodes 4, 13, 15, 17, 22, 24 and 25.",
  "options": [
   "Fix only when a part is being remade anyway",
   "Remake the worst episodes now (name them in the comment)",
   "Leave as they are"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "r-cast-marsha",
  "group": "Rulings",
  "ep": 3,
  "part": 1,
  "a": 54,
  "b": 64,
  "title": "Marsha in Episode 3",
  "why": "She looks about 20 and argues with her 12 year old son as a friend (made under the old cast). In Episodes 16, 21 and 26 she looks in her 60s; the cast list says about 50.",
  "options": [
   "Fix only when a part is being remade anyway",
   "Remake Episode 3 with Marsha as his mother",
   "Leave as they are"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-93-quiet",
  "group": "Lines to check by ear",
  "ep": 9,
  "part": 3,
  "a": 53,
  "b": 64,
  "title": "Is this line too quiet?",
  "why": "Jahnoy's answer (\"That's a famous one...\") measures about 13 dB quieter than the rest of the part for 6 seconds.",
  "options": [
   "Too quiet: raise it",
   "Sounds fine",
   "Retake the line"
  ],
  "script": "That's a famous one. First thing. If there were two, there was one. Matthew never says there was only one.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-41-moesha",
  "group": "Lines to check by ear",
  "ep": 4,
  "part": 1,
  "a": 118,
  "b": 128,
  "title": "Can you hear Moesha's line?",
  "why": "After \"...because people are sick\" Moesha should say this line. Neither transcript heard it, though the caption shows.",
  "options": [
   "Clear, leave it",
   "Understandable but weak: fix when the part is rebuilt",
   "Wrong or unclear: retake the line",
   "Cut the line"
  ],
  "script": "Mi still nah trust pastor with mi money.",
  "heard": "(nothing)",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-231-genesis",
  "group": "Lines to check by ear",
  "ep": 23,
  "part": 1,
  "a": 74,
  "b": 88,
  "title": "Genesis 15 line",
  "why": "Both transcripts hear a stumble and a repeat.",
  "options": [
   "Clear, leave it",
   "Understandable but weak: fix when the part is rebuilt",
   "Wrong or unclear: retake the line",
   "Cut the line"
  ],
  "script": "Read Genesis fifteen. God waited four hundred years, because their sin was not yet complete.",
  "heard": "Readed 400 years because their sin was not 400 years because their sin was not yet complete.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-251-understand",
  "group": "Lines to check by ear",
  "ep": 25,
  "part": 1,
  "a": 106,
  "b": 114,
  "title": "\"understand\" (your report)",
  "why": "You reported this sounds like \"underscribe\". Proposed remake: \"And I understand why Rasta honour him.\"",
  "options": [
   "Remake with the proposed wording",
   "Remake, but with my wording (in the comment)",
   "Leave it"
  ],
  "script": "And mi understand why Rasta honour him.",
  "heard": "and me on describe Jesus why Rasta honor him",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-151-accounts",
  "group": "Lines to check by ear",
  "ep": 15,
  "part": 1,
  "a": 100,
  "b": 108,
  "title": "\"Ask fi see the accounts\"",
  "why": "Heard as nonsense by one transcript. Proposed remake: \"Ask to see the accounts.\"",
  "options": [
   "Clear, leave it",
   "Understandable but weak: fix when the part is rebuilt",
   "Wrong or unclear: retake the line",
   "Cut the line"
  ],
  "script": "Ask fi see the accounts. An honest church show where the money go.",
  "heard": "Ask Vissilia Kontz. An honest church show where the money go.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-151-peter",
  "group": "Lines to check by ear",
  "ep": 15,
  "part": 1,
  "a": 111,
  "b": 120,
  "title": "\"A man tried to pay Peter for power\"",
  "why": "Heard as a jumble. Does it sound right to you?",
  "options": [
   "Clear, leave it",
   "Understandable but weak: fix when the part is rebuilt",
   "Wrong or unclear: retake the line",
   "Cut the line"
  ],
  "script": "A man tried to pay Peter for power, and Peter told him, your money perish with you.",
  "heard": "I'm Man Tripe Peter Fipowa. And Peter tell him, your money perish with you.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-232-ark",
  "group": "Lines to check by ear",
  "ep": 23,
  "part": 2,
  "a": 122,
  "b": 132,
  "title": "\"So the ark a the part fi look at\"",
  "why": "Heard as nonsense. Proposed remake: \"So the ark is the part to look at.\"",
  "options": [
   "Clear, leave it",
   "Understandable but weak: fix when the part is rebuilt",
   "Wrong or unclear: retake the line",
   "Cut the line"
  ],
  "script": "So the ark a the part fi look at. Him provide a boat before the rain.",
  "heard": "So the R the part Finlucats. Tim provide a boat before the rain.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-111-lucian",
  "group": "Lines to check by ear",
  "ep": 11,
  "part": 1,
  "a": 46,
  "b": 56,
  "title": "\"Hear this, Lucian\"",
  "why": "The opening words were heard as \"Here is the solution\". Low priority.",
  "options": [
   "Clear, leave it",
   "Understandable but weak: fix when the part is rebuilt",
   "Wrong or unclear: retake the line",
   "Cut the line"
  ],
  "script": "Hear this, Lucian. Dis man pon TikTok say the whole Bible a just story.",
  "heard": "Here is the solution. This man found TikTok say the whole Bible are just story.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-223-hole",
  "group": "Lines to check by ear",
  "ep": 22,
  "part": 3,
  "a": 58,
  "b": 67,
  "title": "\"What hole?\"",
  "why": "Aurora's two words are faint.",
  "options": [
   "Clear, leave it",
   "Understandable but weak: fix when the part is rebuilt",
   "Wrong or unclear: retake the line",
   "Cut the line"
  ],
  "script": "What hole?",
  "heard": "(faint)",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "e-203-nutten",
  "group": "Lines to check by ear",
  "ep": 20,
  "part": 3,
  "a": 122,
  "b": 130,
  "title": "\"Mi cyaan say nutten\"",
  "why": "The start of Miguel's line was not heard (\"Alright. Mi cyaan say nutten.\"). An earlier note says the line was shortened on purpose.",
  "options": [
   "Clear, leave it",
   "Understandable but weak: fix when the part is rebuilt",
   "Wrong or unclear: retake the line",
   "Cut the line"
  ],
  "script": "Alright. Mi cyaan say nutten. Mi go a church basic school miself.",
  "heard": "Let me go to church basic school myself.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-131",
  "group": "The word \"cyaan\"",
  "ep": 13,
  "part": 1,
  "a": 54,
  "b": 63,
  "title": "Episode 13 Part 1",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "Mi nuh believe inna nutten mi cyaan see. Show mi God and then we talk.",
  "heard": "me no believing now. Believe in a not admittance. Show me God and then we talk.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-211",
  "group": "The word \"cyaan\"",
  "ep": 21,
  "part": 1,
  "a": 55,
  "b": 63,
  "title": "Episode 21 Part 1",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "If Christianity true, why unnu cyaan agree? Which one right?",
  "heard": "If Christianity true. Why are you not here and agree? Which one right?",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-261",
  "group": "The word \"cyaan\"",
  "ep": 26,
  "part": 1,
  "a": 60,
  "b": 68,
  "title": "Episode 26 Part 1",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "But why him haffi die? Why God cyaan just forgive? Why blood?",
  "heard": "But why him half a day? Why God's here and just forgive? Why blood?",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-13",
  "group": "The word \"cyaan\"",
  "ep": 1,
  "part": 3,
  "a": 101,
  "b": 106,
  "title": "Episode 1 Part 3",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "So mi cyaan trust dem part deh?",
  "heard": "So Mityan trusts them part there.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-22",
  "group": "The word \"cyaan\"",
  "ep": 2,
  "part": 2,
  "a": 124,
  "b": 131,
  "title": "Episode 2 Part 2",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "So mi cousin have fi decide if the claim true. Him cyaan pretend Jesus never make it.",
  "heard": "...Him saying pretend Jesus never make it.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-63a",
  "group": "The word \"cyaan\"",
  "ep": 6,
  "part": 3,
  "a": 47,
  "b": 55,
  "title": "Episode 6 Part 3",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "One more, Miss. Yuh say everything need a maker. Then who make God? Yuh cyaan just stop there.",
  "heard": "One more miss. You'll say everything need a maker. Then who made God?",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-63b",
  "group": "The word \"cyaan\"",
  "ep": 6,
  "part": 3,
  "a": 99,
  "b": 104,
  "title": "Episode 6 Part 3",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "So it cyaan be made of anything.",
  "heard": "so it's sian be made of anything.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-72",
  "group": "The word \"cyaan\"",
  "ep": 7,
  "part": 2,
  "a": 78,
  "b": 84,
  "title": "Episode 7 Part 2",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "Hmm. She cyaan answer dat one.",
  "heard": "Shiksi anansada to one",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-92",
  "group": "The word \"cyaan\"",
  "ep": 9,
  "part": 2,
  "a": 47,
  "b": 57,
  "title": "Episode 9 Part 2",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "...One man cyaan have two father.",
  "heard": "One man see and have two father.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-112",
  "group": "The word \"cyaan\"",
  "ep": 11,
  "part": 2,
  "a": 47,
  "b": 54,
  "title": "Episode 11 Part 2",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "Yuh say it yuhself, youth. Stone cyaan prove miracle.",
  "heard": "You saved yourself youth. Stone-Syan proved miracle.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-113",
  "group": "The word \"cyaan\"",
  "ep": 11,
  "part": 3,
  "a": 115,
  "b": 122,
  "title": "Episode 11 Part 3",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "Alright. Dat one mi cyaan use again.",
  "heard": "Alright. That one we can't use again.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-132",
  "group": "The word \"cyaan\"",
  "ep": 13,
  "part": 2,
  "a": 65,
  "b": 76,
  "title": "Episode 13 Part 2",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "Yuh cyaan force somebody fi love yuh.",
  "heard": "You can't force somebody if they love you.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "c-223",
  "group": "The word \"cyaan\"",
  "ep": 22,
  "part": 3,
  "a": 121,
  "b": 129,
  "title": "Episode 22 Part 3",
  "why": "Does \"cyaan\" sound right here?",
  "options": [
   "Sounds fine, leave it",
   "Sounds wrong: remake with the new word"
  ],
  "script": "Alright. So mi cyaan rule it out from mi chair. Mi have fi look.",
  "heard": "All right. So, Mityan, rule it out from mature. we have to look.",
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-112-barber",
  "group": "Pictures and shots",
  "ep": 11,
  "part": 2,
  "a": 71,
  "b": 78,
  "title": "The barber is a man in this wide shot",
  "why": "Lucian is a woman in every close-up.",
  "options": [
   "Make a new wide shot with Lucian as a woman",
   "Just remove the wide shot",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-17-wide",
  "group": "Pictures and shots",
  "ep": 17,
  "part": 1,
  "a": 86,
  "b": 93,
  "title": "A different woman in the wide shots",
  "why": "In Episode 17 the wide and opening shots show an older woman with loose hair; Shadene's close-ups show a younger woman with a bun. Same in Parts 2 and 3.",
  "options": [
   "Make a new opening and wide shot from the close-up pictures",
   "Remove the wide shots for now",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-203-clenmar",
  "group": "Pictures and shots",
  "ep": 20,
  "part": 3,
  "a": 109,
  "b": 121,
  "title": "Clenmar changes into another man",
  "why": "For one line he is a visibly different, older man in front of empty seats.",
  "options": [
   "Retake that line",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-202-bg",
  "group": "Pictures and shots",
  "ep": 20,
  "part": 2,
  "a": 66,
  "b": 76,
  "title": "Clenmar's background changes",
  "why": "For one take the stadium becomes blurred indoor lights.",
  "options": [
   "Retake that line",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-252-bg",
  "group": "Pictures and shots",
  "ep": 25,
  "part": 2,
  "a": 66,
  "b": 76,
  "title": "Background change (your report)",
  "why": "For one take the background becomes a dark carving stall.",
  "options": [
   "Retake that line",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-122-cutaway",
  "group": "Pictures and shots",
  "ep": 12,
  "part": 2,
  "a": 119,
  "b": 125,
  "title": "A mountain forest in the campus episode",
  "why": "A cutaway from another episode. Also in Part 3 at 1:04.",
  "options": [
   "Swap for a cutaway from this place",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-23-minibus",
  "group": "Pictures and shots",
  "ep": 2,
  "part": 3,
  "a": 107,
  "b": 112,
  "title": "A minibus in the classroom episode",
  "why": "A cutaway from another episode. Also in Episode 1 Part 2 at 2:09.",
  "options": [
   "Swap for a cutaway from this place",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-12-wideonly",
  "group": "Pictures and shots",
  "ep": 1,
  "part": 2,
  "a": 58,
  "b": 74,
  "title": "The classroom parts are one wide shot",
  "why": "Parts 2 and 3 of Episodes 1 and 2 show only the back of the class; nobody's lips can be seen. Teacher close-ups would take about 28 new clips.",
  "options": [
   "Yes, make teacher close-ups for all four parts",
   "Try Episode 1 Part 2 first, then decide",
   "Not now"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "v-141-numbers",
  "group": "Pictures and shots",
  "ep": 14,
  "part": 1,
  "a": 104,
  "b": 111,
  "title": "The reporting numbers on screen",
  "why": "The panel shows 211 and 1-888-PROTECT. Is that what the church wants?",
  "options": [
   "Both numbers are right",
   "Show only 1-888-PROTECT",
   "Show only 211",
   "Something else (in the comment)"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "o-4",
  "group": "Opening shots",
  "ep": 4,
  "part": 1,
  "a": 42,
  "b": 47.5,
  "title": "Episode 4 opens on an empty yard",
  "why": "The rule is that the opening shot shows everyone. Here it is chickens and no people (all three parts).",
  "options": [
   "Use the shot of the three at the table as the opener",
   "Make a new opening shot",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "o-9",
  "group": "Opening shots",
  "ep": 9,
  "part": 1,
  "a": 42,
  "b": 47.5,
  "title": "Episode 9 opens inside a bus",
  "why": "The episode is a route taxi ride.",
  "options": [
   "Make a new opening shot in a route taxi",
   "A bus is fine, leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "o-14",
  "group": "Opening shots",
  "ep": 14,
  "part": 1,
  "a": 42,
  "b": 47.5,
  "title": "Episode 14 opens on one dark figure",
  "why": "A dark close shot of one woman, not the three of them.",
  "options": [
   "Make a new, brighter opening shot of the three women",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "o-24",
  "group": "Opening shots",
  "ep": 24,
  "part": 1,
  "a": 42,
  "b": 47.5,
  "title": "The question card covers the faces",
  "why": "Episodes 17, 19 and 24: the card sits over the speakers' heads.",
  "options": [
   "Move the question card lower when faces are at the top",
   "Leave it"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "o-18",
  "group": "Opening shots",
  "ep": 18,
  "part": 1,
  "a": 42,
  "b": 47.5,
  "title": "Aerial opening shots with no cast",
  "why": "Episodes 18, 20 and 23 open on a view from above with nobody from the cast.",
  "options": [
   "Accept aerial openers",
   "The opener must show the cast"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "p-171",
  "group": "Pauses",
  "ep": 17,
  "part": 1,
  "a": 119,
  "b": 133,
  "title": "Two long pauses near the end",
  "why": "About 3 seconds each. It is a grief scene, so they may be meant.",
  "options": [
   "Meant: keep them",
   "Trim to about 1 second"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "p-142",
  "group": "Pauses",
  "ep": 14,
  "part": 2,
  "a": 115,
  "b": 127,
  "title": "A 3 second pause",
  "why": "Other parts have pauses of 2.5 to 3 seconds too (2.3, 8.2, 11.3, 16.1, 19.2, 22.1).",
  "options": [
   "Trim all such pauses to about 1 second",
   "Keep them",
   "Decide one by one (list in the comment)"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "k-sources",
  "group": "Cards and reviews",
  "ep": 8,
  "part": 3,
  "a": 128,
  "b": 133.5,
  "title": "Notes on the sources cards",
  "why": "This card shows a working note. 17 cards need new text; the exact wording is in the QA notes.",
  "options": [
   "Go ahead with the proposed text",
   "Let me read the proposed text first"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "k-203",
  "group": "Cards and reviews",
  "ep": 20,
  "part": 3,
  "a": 127,
  "b": 133,
  "title": "A sources card with names only",
  "why": "Calabar High School, Kingston College, St George's College, William Knibb, James Phillippo: names, not sources.",
  "options": [
   "Find a real source for each",
   "Show the facts (name, year, church) as they are",
   "Remove the card's names"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "k-pastoral",
  "group": "Cards and reviews",
  "ep": null,
  "part": null,
  "a": null,
  "b": null,
  "title": "Pastoral review of three parts",
  "why": "Episode 14 Part 3 (trusting God after abuse), 16 Part 3 (babies who die) and 17 Part 3 (faith and healing) were published before a pastoral review.",
  "options": [
   "Reviewed and approved",
   "Not reviewed yet: leave them published",
   "Not reviewed yet: take them down until reviewed"
  ],
  "round": "round-1-2026-10-09"
 },
 {
  "id": "s2-src-32",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 3,
  "part": 2,
  "a": 146,
  "b": 152,
  "title": "Sources card, Episode 3 Part 2",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Exodus 21:16 / Exodus 21:2 / Deuteronomy 15:12 to 14 / Deuteronomy 23:15 to 16 / 1 Timothy 1:10 (enslavers, slave traders) / Philemon 15 to 16 / Jamaican slave codes on runaways"
   ],
   [
    "New",
    "Exodus 21:16 / Exodus 21:2 / Deuteronomy 15:12 to 14 / Deuteronomy 23:15 to 16 / 1 Timothy 1:10 (enslavers, slave traders) / Philemon 15 to 16 / Leviticus 25:44 to 46"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Exodus 21:16",
   "Exodus 21:2",
   "Deuteronomy 15:12 to 14",
   "Deuteronomy 23:15 to 16",
   "1 Timothy 1:10 (enslavers, slave traders)",
   "Philemon 15 to 16",
   "Leviticus 25:44 to 46"
  ]
 },
 {
  "id": "s2-src-33",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 3,
  "part": 3,
  "a": 129,
  "b": 135,
  "title": "Sources card, Episode 3 Part 3",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Isaiah 53:2 / Revelation 7:9 / history of European depictions of Jesus"
   ],
   [
    "New",
    "Isaiah 53:2 / Revelation 7:9"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Isaiah 53:2",
   "Revelation 7:9"
  ]
 },
 {
  "id": "s2-src-73",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 7,
  "part": 3,
  "a": 124,
  "b": 130,
  "title": "Sources card, Episode 7 Part 3",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Pew Research Center, 2011 / Global Christianity report"
   ],
   [
    "New",
    "Pew Research Center, Global Christianity, 2011"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Pew Research Center, Global Christianity, 2011"
  ]
 },
 {
  "id": "s2-src-83",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 8,
  "part": 3,
  "a": 128,
  "b": 134,
  "title": "Sources card, Episode 8 Part 3",
  "why": "You asked what 1 Clement 5 is. It is a letter from the church in Rome to the church in Corinth, about AD 96. Chapter 5 holds up Peter and Paul as men who suffered and died for their witness, one of the earliest writings after the New Testament to say so.",
  "rows": [
   [
    "Now",
    "Matthew 28:11 to 15 / Mark 14:50 and 14:66 to 72 / John 20:19 / Acts 4 and 5 / Acts 12:2 / 1 Clement 5 on Peter and Paul (say \"early writers say\", not \"we know\")"
   ],
   [
    "New",
    "Matthew 28:11 to 15 / Mark 14:50 and 14:66 to 72 / John 20:19 / Acts 4 and 5 / Acts 12:2 / 1 Clement 5 (about AD 96)"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Matthew 28:11 to 15",
   "Mark 14:50 and 14:66 to 72",
   "John 20:19",
   "Acts 4 and 5",
   "Acts 12:2",
   "1 Clement 5 (about AD 96)"
  ]
 },
 {
  "id": "s2-src-132",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 13,
  "part": 2,
  "a": 133,
  "b": 139,
  "title": "Sources card, Episode 13 Part 2",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "James 2:19 / John 1:18 / John 14:8 to 9. Follows the new Part 1 ending (\"continue climb to di top\")"
   ],
   [
    "New",
    "James 2:19 / John 1:18 / John 14:8 to 9"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "James 2:19",
   "John 1:18",
   "John 14:8 to 9"
  ]
 },
 {
  "id": "s2-src-141",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 14,
  "part": 1,
  "a": 145,
  "b": 151,
  "title": "Sources card, Episode 14 Part 1",
  "why": "Only the working notes come off; the numbers stay as you confirmed.",
  "rows": [
   [
    "Now",
    "Matthew 18:6 / diG Jamaica: Moravian Church sex scandal timeline, pastor sentenced to eight years, March 2018 / Jamaica Observer, 16 October 2022: your duty to report child abuse (Child Care and Protection Act) / Jamaica Information Service, 19 May 2015: 1-888-PROTECT (1-888-776-8328) is run by the Office of the Children's Registry (checked 28 Sep)"
   ],
   [
    "New",
    "Matthew 18:6 / diG Jamaica: Moravian Church sex scandal timeline, March 2018 / Jamaica Observer, 16 October 2022: your duty to report child abuse / Jamaica Information Service, 19 May 2015: 1-888-PROTECT, Office of the Children's Registry"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Matthew 18:6",
   "diG Jamaica: Moravian Church sex scandal timeline, March 2018",
   "Jamaica Observer, 16 October 2022: your duty to report child abuse",
   "Jamaica Information Service, 19 May 2015: 1-888-PROTECT, Office of the Children's Registry"
  ]
 },
 {
  "id": "s2-src-181",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 18,
  "part": 1,
  "a": 137,
  "b": 143,
  "title": "Sources card, Episode 18 Part 1",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Chronograph of 354 / Plutarch, On Isis and Osiris 12 to 19 (about AD 100): Isis conceives Horus by Osiris; no virgin birth, no disciples, no cross / Geraldine Pinch, Egyptian Mythology: A Guide to the Gods, Goddesses, and Traditions of Ancient Egypt (Oxford University Press, 2002), Isis and Horus entries / Bart D. Ehrman, Did Jesus Exist? (HarperOne, 2012), pages 20 to 24: the Horus and pagan copy claims of Acharya S, the source behind Zeitgeist part one, are wrong (checked 3 Oct)"
   ],
   [
    "New",
    "Chronograph of 354 / Plutarch, On Isis and Osiris, about AD 100 / Geraldine Pinch, Egyptian Mythology, 2002 / Bart D. Ehrman, Did Jesus Exist?, 2012"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Chronograph of 354",
   "Plutarch, On Isis and Osiris, about AD 100",
   "Geraldine Pinch, Egyptian Mythology, 2002",
   "Bart D. Ehrman, Did Jesus Exist?, 2012"
  ]
 },
 {
  "id": "s2-src-182",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 18,
  "part": 2,
  "a": 122,
  "b": 128,
  "title": "Sources card, Episode 18 Part 2",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Clauss 2000; Beck 2006 / Manfred Clauss, The Roman Cult of Mithras / Roger Beck, The Religion of the Mithras Cult"
   ],
   [
    "New",
    "Manfred Clauss, The Roman Cult of Mithras, 2000 / Roger Beck, The Religion of the Mithras Cult in the Roman Empire, 2006"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Manfred Clauss, The Roman Cult of Mithras, 2000",
   "Roger Beck, The Religion of the Mithras Cult in the Roman Empire, 2006"
  ]
 },
 {
  "id": "s2-src-183",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 18,
  "part": 3,
  "a": 125,
  "b": 131,
  "title": "Sources card, Episode 18 Part 3",
  "why": "Eusebius checked on the web: the Easter dispute (Victor of Rome and Polycrates) is Church History book 5, chapters 23 and 24.",
  "rows": [
   [
    "Now",
    "Pascha, from Hebrew Pesach / Second century Easter dispute / Bede, The Reckoning of Time, 15"
   ],
   [
    "New",
    "Bede, The Reckoning of Time, chapter 15 / Eusebius, Church History 5.23 to 24"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Bede, The Reckoning of Time, chapter 15",
   "Eusebius, Church History 5.23 to 24"
  ]
 },
 {
  "id": "s2-src-191",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 19,
  "part": 1,
  "a": 145,
  "b": 151,
  "title": "Sources card, Episode 19 Part 1",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Pliny the Younger, Letters 10.96 / John 8:58 to 59; Mark 14:61 to 64; John 20:28 / Council of Nicaea, AD 325: ancient counts run from about 250 to 318 bishops; only Secundus of Ptolemais and Theonas of Marmarica refused to sign (checked 28 Sep)"
   ],
   [
    "New",
    "Pliny the Younger, Letters 10.96 / John 8:58 to 59; Mark 14:61 to 64; John 20:28 / Council of Nicaea, AD 325"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Pliny the Younger, Letters 10.96",
   "John 8:58 to 59; Mark 14:61 to 64; John 20:28",
   "Council of Nicaea, AD 325"
  ]
 },
 {
  "id": "s2-src-192",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 19,
  "part": 2,
  "a": 140,
  "b": 146,
  "title": "Sources card, Episode 19 Part 2",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "the twenty canons of Nicaea / the late legend (Synodicon Vetus, 9th century) / Muratorian fragment (dating debated, usually late second century) / Eusebius, Life of Constantine 4.36 / Athanasius, Festal Letter 39 / Constantine died AD 337 / the creed and the synodal letter (Easter date)"
   ],
   [
    "New",
    "Council of Nicaea, AD 325: creed, canons and synodal letter / Muratorian fragment, late second century / Eusebius, Life of Constantine 4.36 / Athanasius, Festal Letter 39, AD 367"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Council of Nicaea, AD 325: creed, canons and synodal letter",
   "Muratorian fragment, late second century",
   "Eusebius, Life of Constantine 4.36",
   "Athanasius, Festal Letter 39, AD 367"
  ]
 },
 {
  "id": "s2-src-201",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 20,
  "part": 1,
  "a": 131,
  "b": 137,
  "title": "Sources card, Episode 20 Part 1",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Andrew Holt, Counting Religious Wars in the Encyclopedia of Wars, 26 December 2018: 121 entries (122 wars) of 1,763, about 6.9 percent; the often quoted 123 is a miscount (checked 28 Sep) / James 4:1; Matthew 26:52; Matthew 5:9"
   ],
   [
    "New",
    "Andrew Holt, Counting Religious Wars in the Encyclopedia of Wars, 2018 / James 4:1; Matthew 26:52; Matthew 5:9"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Andrew Holt, Counting Religious Wars in the Encyclopedia of Wars, 2018",
   "James 4:1; Matthew 26:52; Matthew 5:9"
  ]
 },
 {
  "id": "s2-src-202",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 20,
  "part": 2,
  "a": 127,
  "b": 133,
  "title": "Sources card, Episode 20 Part 2",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Matthew 7:21 / James 2:17 / the \"most churches per square mile\" saying"
   ],
   [
    "New",
    "Matthew 7:21 / James 2:17"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Matthew 7:21",
   "James 2:17"
  ]
 },
 {
  "id": "s2-src-203",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 20,
  "part": 3,
  "a": 127,
  "b": 133,
  "title": "Sources card, Episode 20 Part 3",
  "why": "You asked for a real source for each name. Each line now names where the fact comes from (checked on the web 10 October).",
  "rows": [
   [
    "Now",
    "Calabar High School / Kingston College / St George's College / William Knibb / James Phillippo and Sligoville, 1835"
   ],
   [
    "New",
    "Calabar High School history: founded 1912 by Jamaican Baptists / Kingston College history: opened 1925, Anglican / Jamaica Observer, 2015: St George's College, founded by Jesuits, 1850 / William Knibb, Colonial Slavery, speech in London, 1832 / Jamaica Information Service, 2018: Sligoville, first free village, 1835"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Calabar High School history: founded 1912 by Jamaican Baptists",
   "Kingston College history: opened 1925, Anglican",
   "Jamaica Observer, 2015: St George's College, founded by Jesuits, 1850",
   "William Knibb, Colonial Slavery, speech in London, 1832",
   "Jamaica Information Service, 2018: Sligoville, first free village, 1835"
  ]
 },
 {
  "id": "s2-src-221",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 22,
  "part": 1,
  "a": 136,
  "b": 142,
  "title": "Sources card, Episode 22 Part 1",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Craig S. Keener, Miracles: The Credibility of the New Testament Accounts, 2 volumes, Baker Academic, 2011 (checked 28 Sep) / C. S. Lewis, Miracles (1947) / David Hume, An Enquiry Concerning Human Understanding (1748), section 10"
   ],
   [
    "New",
    "Craig S. Keener, Miracles, 2011 / C. S. Lewis, Miracles, 1947 / David Hume, An Enquiry Concerning Human Understanding, 1748, section 10"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Craig S. Keener, Miracles, 2011",
   "C. S. Lewis, Miracles, 1947",
   "David Hume, An Enquiry Concerning Human Understanding, 1748, section 10"
  ]
 },
 {
  "id": "s2-src-231",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 23,
  "part": 1,
  "a": 139,
  "b": 145,
  "title": "Sources card, Episode 23 Part 1",
  "why": "The card at the end of this part. Read the new text; the clip shows the card as it is now.",
  "rows": [
   [
    "Now",
    "Genesis 15:13 to 16 / Leviticus 18:21; Deuteronomy 12:31 / Joshua 10:40; Judges 1:21 to 33 / Jonah 3:10 and 4:2; Ezekiel 33:11 / K. Lawson Younger Jr., Ancient Conquest Accounts (JSOT Press, 1990): ancient Near Eastern war reports use total victory language as standard exaggeration / Paul Copan, Is God a Moral Monster? (Baker Books, 2011), chapters on the Canaanites (checked 3 Oct)"
   ],
   [
    "New",
    "Genesis 15:13 to 16 / Leviticus 18:21; Deuteronomy 12:31 / Joshua 10:40; Judges 1:21 to 33 / Jonah 3:10 and 4:2; Ezekiel 33:11 / K. Lawson Younger Jr., Ancient Conquest Accounts, 1990 / Paul Copan, Is God a Moral Monster?, 2011"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Genesis 15:13 to 16",
   "Leviticus 18:21; Deuteronomy 12:31",
   "Joshua 10:40; Judges 1:21 to 33",
   "Jonah 3:10 and 4:2; Ezekiel 33:11",
   "K. Lawson Younger Jr., Ancient Conquest Accounts, 1990",
   "Paul Copan, Is God a Moral Monster?, 2011"
  ]
 },
 {
  "id": "s2-src-232",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 23,
  "part": 2,
  "a": 130,
  "b": 136,
  "title": "Sources card, Episode 23 Part 2",
  "why": "The Port Royal earthquake is not a source for anything said in this part, so it comes off.",
  "rows": [
   [
    "Now",
    "Genesis 6:5 to 6 and 6:11 / 2 Peter 2:5 / 1 Peter 3:20 / Genesis 9:11 to 13 / the Port Royal earthquake of 1692"
   ],
   [
    "New",
    "Genesis 6:5 to 6 and 6:11 / 2 Peter 2:5 / 1 Peter 3:20 / Genesis 9:11 to 13"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "Genesis 6:5 to 6 and 6:11",
   "2 Peter 2:5",
   "1 Peter 3:20",
   "Genesis 9:11 to 13"
  ]
 },
 {
  "id": "s2-src-253",
  "round": "round-2-2026-10-10",
  "group": "Sources cards",
  "ep": 25,
  "part": 3,
  "a": 133,
  "b": 139,
  "title": "Sources card, Episode 25 Part 3",
  "why": "Checked: Haile Selassie set up a Bible Committee (1947 to 1952) and the Amharic Bible came out in 1962. Line 11 (he had it put into Amharic so his people could read it) holds up.",
  "rows": [
   [
    "Now",
    "the King James translators / the Ethiopian Orthodox canon of 81 books including Enoch and Jubilees / the Haile Selassie Amharic Bible"
   ],
   [
    "New",
    "King James Version, 1611 / Ethiopian Orthodox canon: 81 books / Amharic Bible, Haile Selassie's Bible Committee, 1962"
   ]
  ],
  "options": [
   "Use the new text",
   "Change it (say how in the comment)",
   "Keep the card as it is now"
  ],
  "proposed": [
   "King James Version, 1611",
   "Ethiopian Orthodox canon: 81 books",
   "Amharic Bible, Haile Selassie's Bible Committee, 1962"
  ]
 },
 {
  "id": "s2-past-143",
  "round": "round-2-2026-10-10",
  "group": "Pastoral review",
  "ep": 14,
  "part": 3,
  "a": 46,
  "b": 135,
  "title": "Pastoral review: Trusting God after abuse",
  "why": "The whole part, from the end of the intro. Is everything said here pastorally sound for TWC? Name the time of anything to change in the comment.",
  "options": [
   "Approved: keep it published",
   "Needs changes (say where in the comment)",
   "Take it down until it is fixed"
  ]
 },
 {
  "id": "s2-past-163",
  "round": "round-2-2026-10-10",
  "group": "Pastoral review",
  "ep": 16,
  "part": 3,
  "a": 46,
  "b": 144,
  "title": "Pastoral review: When a baby dies",
  "why": "The whole part, from the end of the intro. Is everything said here pastorally sound for TWC? Name the time of anything to change in the comment.",
  "options": [
   "Approved: keep it published",
   "Needs changes (say where in the comment)",
   "Take it down until it is fixed"
  ]
 },
 {
  "id": "s2-past-173",
  "round": "round-2-2026-10-10",
  "group": "Pastoral review",
  "ep": 17,
  "part": 3,
  "a": 46,
  "b": 135,
  "title": "Pastoral review: Faith and healing",
  "why": "The whole part, from the end of the intro. Is everything said here pastorally sound for TWC? Name the time of anything to change in the comment.",
  "options": [
   "Approved: keep it published",
   "Needs changes (say where in the comment)",
   "Take it down until it is fixed"
  ]
 },
 {
  "id": "s3-rt-13",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 1,
  "part": 3,
  "a": 101,
  "b": 106,
  "title": "Jahnoy, line 8",
  "why": "\"can't\" for \"cyaan\". You also asked why his hands are up so often: the prompt will say his hands rest still. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "So mi cyaan trust dem part deh?"
   ],
   [
    "New",
    "So mi can't trust dem part deh?"
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 8,
  "who": "Jahnoy",
  "new": "So mi can't trust dem part deh?"
 },
 {
  "id": "s3-rt-22",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 2,
  "part": 2,
  "a": 124,
  "b": 131,
  "title": "Jahnoy, line 11",
  "why": "\"can't\", and \"have fi\" becomes \"have to\" (Meta garbles \"fi\"). The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "So mi cousin have fi decide if the claim true. Him cyaan pretend Jesus never make it."
   ],
   [
    "New",
    "So mi cousin have to decide if the claim true. Him can't pretend Jesus never make it."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 11,
  "who": "Jahnoy",
  "new": "So mi cousin have to decide if the claim true. Him can't pretend Jesus never make it."
 },
 {
  "id": "s3-rt-43",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 4,
  "part": 3,
  "a": 65,
  "b": 71,
  "title": "Miguel, line 3",
  "why": "The line from your first report. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Cyaan play partner dominoes by yuhself, boss."
   ],
   [
    "New",
    "Can't play partner dominoes by yuhself, boss."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 3,
  "who": "Miguel",
  "new": "Can't play partner dominoes by yuhself, boss."
 },
 {
  "id": "s3-rt-63a",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 6,
  "part": 3,
  "a": 47,
  "b": 55,
  "title": "Jahnoya, line 1",
  "why": "The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "One more, Miss. Yuh say everything need a maker. Then who make God? Yuh cyaan just stop there."
   ],
   [
    "New",
    "One more, Miss. Yuh say everything need a maker. Then who make God? Yuh can't just stop there."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 1,
  "who": "Jahnoya",
  "new": "One more, Miss. Yuh say everything need a maker. Then who make God? Yuh can't just stop there."
 },
 {
  "id": "s3-rt-63b",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 6,
  "part": 3,
  "a": 99,
  "b": 104,
  "title": "Jahnoya, line 8",
  "why": "The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "So it cyaan be made of anything."
   ],
   [
    "New",
    "So it can't be made of anything."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 8,
  "who": "Jahnoya",
  "new": "So it can't be made of anything."
 },
 {
  "id": "s3-rt-72",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 7,
  "part": 2,
  "a": 78,
  "b": 84,
  "title": "Moesha, line 5",
  "why": "\"dat\" becomes \"that\" too, since Meta garbled the whole line. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Hmm. She cyaan answer dat one."
   ],
   [
    "New",
    "Hmm. She can't answer that one."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 5,
  "who": "Moesha",
  "new": "Hmm. She can't answer that one."
 },
 {
  "id": "s3-rt-92",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 9,
  "part": 2,
  "a": 47,
  "b": 57,
  "title": "Jahnoya, line 1",
  "why": "The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Mi find one, Jahnoy. Matthew say Joseph father name Jacob. Luke say him name Heli. One man cyaan have two father."
   ],
   [
    "New",
    "Mi find one, Jahnoy. Matthew say Joseph father name Jacob. Luke say him name Heli. One man can't have two father."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 1,
  "who": "Jahnoya",
  "new": "Mi find one, Jahnoy. Matthew say Joseph father name Jacob. Luke say him name Heli. One man can't have two father."
 },
 {
  "id": "s3-rt-112",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 11,
  "part": 2,
  "a": 47,
  "b": 54,
  "title": "Miguel, line 1",
  "why": "This part also gets the new wide shot with Lucian as a woman (picture batch). The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Yuh say it yuhself, youth. Stone cyaan prove miracle. So the miracle part still a just talk."
   ],
   [
    "New",
    "Yuh say it yuhself, youth. Stone can't prove miracle. So the miracle part still a just talk."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 1,
  "who": "Miguel",
  "new": "Yuh say it yuhself, youth. Stone can't prove miracle. So the miracle part still a just talk."
 },
 {
  "id": "s3-rt-131",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 13,
  "part": 1,
  "a": 54,
  "b": 63,
  "title": "Moesha, line 2",
  "why": "She stumbled and said \"believe\" twice; \"inna nutten\" becomes \"in nothing\" so the line is easier for Meta. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Mi nuh believe inna nutten mi cyaan see. Show mi God and then we talk."
   ],
   [
    "New",
    "Mi nuh believe in nothing mi can't see. Show mi God and then we talk."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 2,
  "who": "Moesha",
  "new": "Mi nuh believe in nothing mi can't see. Show mi God and then we talk."
 },
 {
  "id": "s3-rt-132",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 13,
  "part": 2,
  "a": 65,
  "b": 76,
  "title": "Shadene, line 4",
  "why": "The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Yuh cyaan force somebody fi love yuh. Clenmar never win mi by shouting through a loudspeaker."
   ],
   [
    "New",
    "You can't force somebody to love you. Clenmar never win me by shouting through a loudspeaker."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 4,
  "who": "Shadene",
  "new": "You can't force somebody to love you. Clenmar never win me by shouting through a loudspeaker."
 },
 {
  "id": "s3-rt-211",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 21,
  "part": 1,
  "a": 55,
  "b": 63,
  "title": "Moesha, line 2",
  "why": "\"cannot\", as you asked. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "If Christianity true, why unnu cyaan agree? Which one right?"
   ],
   [
    "New",
    "If Christianity true, why unnu cannot agree? Which one right?"
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 2,
  "who": "Moesha",
  "new": "If Christianity true, why unnu cannot agree? Which one right?"
 },
 {
  "id": "s3-rt-223",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 22,
  "part": 3,
  "a": 121,
  "b": 129,
  "title": "Anniela, line 12",
  "why": "The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Alright. So mi cyaan rule it out from mi chair. Mi have fi look."
   ],
   [
    "New",
    "Alright. So I can't rule it out from my chair. I have to look."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 12,
  "who": "Anniela",
  "new": "Alright. So I can't rule it out from my chair. I have to look."
 },
 {
  "id": "s3-rt-261",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 26,
  "part": 1,
  "a": 60,
  "b": 68,
  "title": "Jahnoya, line 3",
  "why": "The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "But why him haffi die? Why God cyaan just forgive? Why blood?"
   ],
   [
    "New",
    "But why him have to die? Why God can't just forgive? Why blood?"
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 3,
  "who": "Jahnoya",
  "new": "But why him have to die? Why God can't just forgive? Why blood?"
 },
 {
  "id": "s3-rt-203n",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 20,
  "part": 3,
  "a": 122,
  "b": 131,
  "title": "Miguel, line 12",
  "why": "Your wording from chat. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Alright. Mi cyaan say nutten. Mi go a church basic school miself."
   ],
   [
    "New",
    "Alright. I can't argue with that."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 12,
  "who": "Miguel",
  "new": "Alright. I can't argue with that."
 },
 {
  "id": "s3-rt-231",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 23,
  "part": 1,
  "a": 74,
  "b": 88,
  "title": "Miss Anthonette, line 5",
  "why": "Same words; the old take was garbled and said part of it twice. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Read Genesis fifteen. God waited four hundred years, because their sin was not yet complete."
   ],
   [
    "New",
    "Read Genesis fifteen. God waited four hundred years, because their sin was not yet complete."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 5,
  "who": "Miss Anthonette",
  "new": "Read Genesis fifteen. God waited four hundred years, because their sin was not yet complete."
 },
 {
  "id": "s3-rt-251u",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 25,
  "part": 1,
  "a": 106,
  "b": 114,
  "title": "Clenmar, line 10",
  "why": "Standard English for your character; new fixed Clenmar picture. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "And mi understand why Rasta honour him. But the titles him carry come from Revelation nineteen, and dem describe Jesus."
   ],
   [
    "New",
    "And I understand why Rasta honour him. But the titles he carries come from Revelation nineteen, and they describe Jesus."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 10,
  "who": "Clenmar",
  "new": "And I understand why Rasta honour him. But the titles he carries come from Revelation nineteen, and they describe Jesus."
 },
 {
  "id": "s3-rt-251c",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 25,
  "part": 1,
  "a": 72,
  "b": 83,
  "title": "Clenmar, line 5",
  "why": "Your note: \"Jesus craw\". Standard English, fixed Clenmar picture. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Selassie himself was an Ethiopian Orthodox Christian. Him pray to Jesus Christ all him life."
   ],
   [
    "New",
    "Selassie himself was an Ethiopian Orthodox Christian. He prayed to Jesus Christ all his life."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 5,
  "who": "Clenmar",
  "new": "Selassie himself was an Ethiopian Orthodox Christian. He prayed to Jesus Christ all his life."
 },
 {
  "id": "s3-rt-232",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 23,
  "part": 2,
  "a": 122,
  "b": 132,
  "title": "Jahnoya, line 12",
  "why": "The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "So the ark a the part fi look at. Him provide a boat before the rain."
   ],
   [
    "New",
    "So the ark is the part to look at. Him provide a boat before the rain."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 12,
  "who": "Jahnoya",
  "new": "So the ark is the part to look at. Him provide a boat before the rain."
 },
 {
  "id": "s3-rt-151p",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 15,
  "part": 1,
  "a": 111,
  "b": 120,
  "title": "Clenmar, line 10",
  "why": "Your note: add \"will\". Standard English, fixed Clenmar picture. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "And nobody can buy a blessing. A man try pay Peter fi power, and Peter tell him, yuh money perish wid yuh."
   ],
   [
    "New",
    "And nobody can buy a blessing. A man tried to pay Peter for power, and Peter told him, your money will perish with you."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 10,
  "who": "Clenmar",
  "new": "And nobody can buy a blessing. A man tried to pay Peter for power, and Peter told him, your money will perish with you."
 },
 {
  "id": "s3-rt-203c",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 20,
  "part": 3,
  "a": 112,
  "b": 124,
  "title": "Clenmar, line 11",
  "why": "Same words; he turns into another man here. Fixed Clenmar picture. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Basic schools, children's homes, clinics, feeding programmes. Take them away tomorrow and see who the government calls."
   ],
   [
    "New",
    "Basic schools, children's homes, clinics, feeding programmes. Take them away tomorrow and see who the government calls."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 11,
  "who": "Clenmar",
  "new": "Basic schools, children's homes, clinics, feeding programmes. Take them away tomorrow and see who the government calls."
 },
 {
  "id": "s3-rt-202c",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 20,
  "part": 2,
  "a": 67,
  "b": 78,
  "title": "Clenmar, line 4",
  "why": "His background changes here. Fixed Clenmar picture. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "People say it, Jahnoy, though nobody can show mi the count. But we have plenty, true, and plenty violence. Both are real."
   ],
   [
    "New",
    "People say it, Jahnoy, though nobody can show me the count. But we have plenty, true, and plenty violence. Both are real."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 4,
  "who": "Clenmar",
  "new": "People say it, Jahnoy, though nobody can show me the count. But we have plenty, true, and plenty violence. Both are real."
 },
 {
  "id": "s3-rt-252c",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 25,
  "part": 2,
  "a": 68,
  "b": 80,
  "title": "Clenmar, line 4",
  "why": "Same words; your report of the background change at 1:13. Fixed Clenmar picture. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Matthew two. When Herod wanted to kill the baby Jesus, where did the family run? Egypt. Africa sheltered him."
   ],
   [
    "New",
    "Matthew two. When Herod wanted to kill the baby Jesus, where did the family run? Egypt. Africa sheltered him."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 4,
  "who": "Clenmar",
  "new": "Matthew two. When Herod wanted to kill the baby Jesus, where did the family run? Egypt. Africa sheltered him."
 },
 {
  "id": "s3-rt-142",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 14,
  "part": 2,
  "a": 113,
  "b": 123,
  "title": "Moesha, line 11",
  "why": "Your note: she says \"church\" twice and an empty seat appears. The 3 second pause before it is trimmed too. The clip plays the line as it is now.",
  "rows": [
   [
    "Now",
    "Hmm. Mi never hear a church woman say it so plain."
   ],
   [
    "New",
    "Hmm. I never hear a church woman say it so plain."
   ]
  ],
  "options": [
   "Use the new wording",
   "Change it (write the words in the comment)",
   "Do not remake this line"
  ],
  "line": 11,
  "who": "Moesha",
  "new": "Hmm. I never hear a church woman say it so plain."
 },
 {
  "id": "s3-rt-41",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 4,
  "part": 1,
  "a": 118,
  "b": 128,
  "title": "Moesha, line 11 (only if still weak)",
  "why": "You said fix it when the part is rebuilt. Plan: raise its level in the rebuild first and remake it only if it is still weak.",
  "rows": [
   [
    "Now",
    "Mi still nah trust pastor with mi money."
   ],
   [
    "New if remade",
    "I still don't trust pastor with my money."
   ]
  ],
  "options": [
   "Agree with the plan",
   "Remake it anyway",
   "Leave it as it is"
  ]
 },
 {
  "id": "s3-closeups",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 1,
  "part": 2,
  "a": 50,
  "b": 62,
  "title": "Teacher close-ups: 28 clips",
  "why": "Miss Anthonette's lines in 1.2, 1.3, 2.2 and 2.3 get close-ups from her Part 1 medium-shot picture, same words as now; Jahnoy's lines stay on the wide shot. Together with the retakes, as you said: about 52 Meta clips with one Sonnet helper.",
  "options": [
   "Go ahead with all 28",
   "Do Episode 1 Part 2 first (7 clips)",
   "Not now"
  ]
 },
 {
  "id": "s3-clenmar-pic",
  "round": "round-3-2026-10-10",
  "group": "New clips: wording",
  "ep": 25,
  "part": 2,
  "a": 130,
  "b": 142,
  "title": "The fixed Clenmar picture",
  "why": "Every new Clenmar clip uses one picture: his Episode 25 face (this clip). Inside a part, his old clips stay until that part is remade, so his face can change between lines there.",
  "options": [
   "Yes, use this face",
   "Use another face (say which episode)"
  ]
 },
 {
  "id": "fx-122",
  "round": "round-3-2026-10-10",
  "group": "Fixed",
  "ep": 12,
  "part": 2,
  "a": 117,
  "b": 127,
  "old": "old/e12-p2-forest.mp4",
  "title": "Episode 12 Part 2: campus cutaway instead of the forest",
  "why": "Rebuilt 10 October: the mountain forest is gone (campus shots only), plus the new sources card spacing and caption rules. Every line heard (97 percent).",
  "options": [
   "Better: keep it",
   "No better",
   "Worse: go back"
  ]
 },
 {
  "id": "fx-123",
  "round": "round-3-2026-10-10",
  "group": "Fixed",
  "ep": 12,
  "part": 3,
  "a": 60,
  "b": 70,
  "old": "old/e12-p3-forest.mp4",
  "title": "Episode 12 Part 3: campus cutaway instead of the forest",
  "why": "Rebuilt 10 October: the forest at 1:04 is gone. Every line heard.",
  "options": [
   "Better: keep it",
   "No better",
   "Worse: go back"
  ]
 },
 {
  "id": "fx-111",
  "round": "round-3-2026-10-10",
  "group": "Fixed",
  "ep": 11,
  "part": 1,
  "a": 40,
  "b": 50,
  "old": "old/e11-p1-opener.mp4",
  "title": "Episode 11 Part 1: clearer opening shot",
  "why": "Rebuilt 10 October: the dark opener is replaced by the clearer barber shop shot Parts 2 and 3 use; the sources card sits below the episode tag; new caption rules. Every line heard.",
  "options": [
   "Better: keep it",
   "No better",
   "Worse: go back"
  ]
 }
];
