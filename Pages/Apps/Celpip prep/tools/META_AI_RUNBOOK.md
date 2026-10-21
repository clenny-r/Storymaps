# Meta AI Part 5 video runbook (for any Claude session continuing this work)

Goal: a real video for Listening Part 5 of Tests B to K, saved as `tests\audio\<TEST>\L5-0.mp4`
in BOTH folders (`C:\Users\ramne\Documents\Celpip test` and
`C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Celpip prep`), then committed and pushed with GitHub Desktop.
Test A is already done (21 clips, 114 s). Prompts for B to K are ready in `/home/claude/meta/prompts_all.json`
(cloud session; if that is gone, rebuild them from the Part 5 `lines` in `tests\mock_test_<T>.js` using the pattern below).

## Permissions to ask up front (one batch)
1. Claude in Chrome: site permission for www.meta.ai (already granted once; a fresh session may need it again).
2. Connected folders: `C:\Users\ramne\Downloads` (clips land there), `C:\Users\ramne\Documents\Celpip test`,
   `C:\Users\ramne\Documents\GitHub\Storymaps`.
3. Computer use: GitHub Desktop and File Explorer (to push at the end; grants expire after about 30 minutes, re-request then).
4. Chrome may ask "allow multiple downloads" once per site; approve it on screen if a download does not appear.

## Meta AI page facts (checked 2026-10-21)
- URL https://www.meta.ai/ , signed in as clenmar.rowe. Left sidebar lists chats; the pilot chat is "Creating office meeting video".
- Prompt box: `textarea` with placeholder "Ask Meta AI...". Send: the round arrow button next to it (last button in the composer), or Enter.
- Each video reply has a `video` element and buttons "View video" and "Download". The newest reply is the LAST "Download" button on the page.
- Generation of one 10-second clip takes about 45 to 70 seconds. Poll until the count of `video` elements increases.
- Downloads are named `C:\Users\ramne\Downloads\image_YYYYMMDD_HHMMSS.mp4` (yes, "image_"). Take the newest one after each download.

## Prompt pattern (one chat per test, so faces and clothes stay the same)
First prompt (describe the room, the camera and the three people by seat, then the first line):
"Create a 10-second realistic video. Wide, static camera shot of <room>. Three people sit side by side facing the camera:
on the LEFT, <Name>, <look>, wearing <colour> top; in the MIDDLE, ...; on the RIGHT, ...
Only <Name> speaks, in a natural Canadian English accent, and says exactly these words and nothing else: "<line>".
The other two listen. No captions, no music, no text on screen."
Every later prompt:
"Next 10-second clip, SAME scene: same three people, same faces, same clothes, same seats, same room, same static camera.
Only <Name> (<seat>) speaks, in a natural Canadian English accent, saying exactly: "<line>". The other two listen.
No captions, no music, no text on screen."
Lines must be 21 words or fewer (split longer lines at a natural pause; the json already does this).

## STATUS: all 11 tests done (2026-10-21). Use this runbook only to redo a clip or make new tests.

## Best method (used for C to K)
Per clip, one browser_batch: click the prompt box (about x=800, y=596 in a 1568x698 view), computer type the prompt, key Return, wait 35 to 40 s, then javascript_tool `await window.__fin2('<T>', <clip number>)`:
```js
window.__fin2=async(T,c)=>{let t=0;const ready=()=>document.querySelectorAll('video').length>=c&&[...document.querySelectorAll('button')].some(b=>b.getAttribute('aria-label')==='Send');while(!ready()&&t<36){await new Promise(r=>setTimeout(r,2000));t+=2}if(!ready())return 'NOT READY vids='+document.querySelectorAll('video').length;await new Promise(r=>setTimeout(r,2500));const v=document.querySelectorAll('video')[c-1];let b=await (await fetch(v.currentSrc||v.src,{cache:'no-store'})).blob();if(b.size<1000000){await new Promise(r=>setTimeout(r,3000));b=await (await fetch(v.currentSrc||v.src,{cache:'no-store'})).blob();}const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`celpip${T}_${String(c).padStart(2,'0')}.mp4`;document.body.appendChild(a);a.click();return 'saved '+c+' '+b.size+' t='+t}
```
If it returns NOT READY, call it again (or check the page text for a Meta error and resend the prompt). Then on the laptop shell: tar the celpip<T>_??.mp4 files from Downloads into Celpip test\_incoming, stage that one tar, and run /home/claude/meta/assemble.py <T> map_<T>.json (copy in tools\meta_assemble.py). Then scan for subtitles with tools\meta_capscan.py.

## Older automation (kept for reference; the Download button method missed 5 of 25 clips)
```js
// send a prompt
const ta=document.querySelector('textarea'); const set=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set;
set.call(ta, PROMPT); ta.dispatchEvent(new Event('input',{bubbles:true}));
await new Promise(r=>setTimeout(r,300)); ta.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',code:'Enter',bubbles:true}));
```
```js
// wait for the new clip (poll up to ~100 s), then download the last clip
const n0=window.__n||document.querySelectorAll('video').length; let t=0;
while(document.querySelectorAll('video').length<=n0 && t<100){await new Promise(r=>setTimeout(r,2000)); t+=2;}
window.__n=document.querySelectorAll('video').length;
const d=[...document.querySelectorAll('button,[role=button]')].filter(b=>/download/i.test(b.getAttribute('aria-label')||b.textContent)).pop(); d&&d.click(); window.__n
```
Keep one clip per tool call (two per call timed out). Record which clip index was sent last in a small json so a restart can resume.

## After downloading all clips for a test
1. `device_list_dir` on Downloads, take the newest N mp4 files in order of time (one per clip; skip duplicates by size+time).
2. Stage them to the cloud (`device_stage_files`), then per clip:
   - transcribe with pocketsphinx (ffmpeg to 16 kHz mono wav) and compare with the expected line (difflib ratio; re-generate a clip below 0.6 unless the line is unimportant for the questions);
   - trim at the first silence of 0.8 s or more after the line (`ffmpeg -af silencedetect=n=-35dB:d=0.8`), keep 0.3 s of tail;
   - pitch check per clip (male about 100 to 130 Hz, female about 165 to 230 Hz) to confirm the right person spoke.
3. Concatenate: `ffmpeg -f concat -safe 0 -i list.txt -af loudnorm=I=-18:TP=-1.5:LRA=11 -c:v libx264 -crf 23 -preset fast -c:a aac -b:a 96k L5-0.mp4` (re-encode; clips are 1280x720 h264 but timestamps differ).
4. Make a frame contact sheet (`ffmpeg -vf fps=1/5,scale=320:-1,tile=6x4`) and look at it: same three people, same seats throughout.
5. Commit to both folders with `device_commit_files`, then push with GitHub Desktop (computer use: click Summary field, type, "Commit to main", then "Push origin").
6. Confirm on https://twcministries.net/Pages/Apps/Celpip%20prep/ that `tests/audio/<T>/L5-0.mp4` loads (the page uses the mp4 before the mp3).

## Cost and time
About 25 clips per test, about 70 s each including download: 30 minutes per test, 5 hours for B to K. Do it in the background one test at a time, pushing after each test so progress is never lost.
