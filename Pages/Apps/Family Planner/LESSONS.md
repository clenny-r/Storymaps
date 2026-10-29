# Our Week (Family Planner): lessons learnt

Newest first. Read this before changing `C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Family Planner\Our Week.html`.

## 29 Oct 2026: phone layout, quick add, bug fixes

### What was done
1. Toolbar: People, Flags and a "More" menu (Repeating, Tidy, Clear done, Print, Export, Import, Dark mode, Families, Sign out). Button ids are unchanged, so all old handlers still work.
2. Phones: the page jumps to today on open and on "This week"; empty days shrink to the heading and the add box (they open again while dragging, so you can still drop onto them).
3. The hidden Undo bar no longer peeks up from the bottom edge (`visibility: hidden` plus a bigger offset and the safe area).
4. Quick add understands the text anywhere: a time ("3pm", "3:30 p.m.", "15:30"), a day ("Tuesday", "today", "tomorrow", or "Tue" only when it sits beside a time, so "sun cream" stays text), a person ("@Mom", spaces removed: "@SarahJane"), and flags ("#Appointment"). Adding to another day shows a toast.
5. Bug fixes:
   - "19:00 camping" crashed quick add (the word "camping" contains "am").
   - A failed save that retried after changing weeks could write one week's items into another week.
   - Undo after changing weeks put the deleted item into the wrong week.
   - Export freed the file before the download started (Safari and Firefox).
   - Import replaced the whole week without asking.
   - Bring over dropped the URGENT flag.
   - Renaming or moving a repeating item left its old repeat behind, so it came back under the old name or day.
   - Offline mode forgot its people, emails and flags on reload, and forgot offline mode itself.
   - Escape did not close the Flags sheet.
   - Flag colours from the server were put into style attributes without escaping.
6. URGENT label and toast now say that "Anyone" emails everyone. **The sending itself is in the Cloudflare worker `twc-family-planner` (code in C:\Users\ramne\Documents\GitHub\00_All_Workers, not in this repo) and was NOT changed yet.**
7. Hymns: pinch zoom allowed (removed `maximum-scale=1`).

### Lessons
1. **The urgent email logic is server side.** Our Week only stores `urgent`, `urgentNotified`, `assignedTo` and the members' emails (`/api/emails`). To email everyone when "Anyone" is chosen, change the worker's scheduled check: when `assignedTo` is empty, send to every address in the family's email list (once per item, then set `urgentNotified`).
2. Reaching the worker code needs Clenmar to connect the folder C:\Users\ramne\Documents\GitHub\00_All_Workers (the automatic request was declined), or to sign in to Cloudflare in Chrome himself. Never type his Cloudflare password.
3. Test with Playwright at 390 x 844: "Use offline" skips sign-in. Quick add test lines: "Dentist Tuesday 3pm @Mom #Appointment", "Call Dad sat 10am", "Lunch tomorrow 12:30", "Meeting at 10:30 a.m. on Friday", "9 apples"; keep "19:00 camping" and "Buy sun cream" as regression checks.
4. The admin "Families" table shows every family's password in plain text, and the family password is kept in the browser's storage. Worth reviewing later; not changed.
