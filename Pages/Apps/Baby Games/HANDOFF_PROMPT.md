# Handoff prompt for the next session

Copy everything below the line into a new session.

---

Continue work on the TWC Baby Games at twcministries.net/Pages/Apps/Baby Games/.
The repository is C:\Users\ramne\Documents\GitHub\Storymaps (GitHub clenny-r/Storymaps, branch main, GitHub Pages).

1. First read, in full:
   - C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Baby Games\LESSONS.md
   - C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Baby Games\README.md
2. State on 28 Oct 2026: 19 games. Eleven new Bible story games (Little Village of Galilee for flights, Noah's Ark, Creation, Lost Sheep, Loaves and Fishes, Wise Builder, Joseph's Coat, David's Harp, Fruit Garden, Count the Stars, Bible Memory) with painted scenes in art/, 968 Grace voice clips, and Plane mode (sw.js, Save for the plane on the home page). Check with git ls-remote that the newest local commit reached GitHub.
3. Next candidates (ask me which):
   - ask which new games his daughter likes or gets bored of, and make those more fun first;
   - add age levels to Colors! and Where's Mommy? using BabyKit.level();
   - ask how the instant Grace voice sounds on the family iPhone/iPad and whether any line still lags;
   - replace the synthesised animal tones with real recorded sounds;
   - photos for the remaining landing cards.
4. Rules: any change to a spoken line needs its clip re-recorded (tools/harvest.js, tools/record_in_chrome.js, tools/convert_clips.py); real photos are made in ChatGPT in 2x2 grids on a white background and checked by eye before use; never take control of the screen if someone else is using the laptop; commit only the Baby Games folder; push by clicking Push origin in GitHub Desktop (re-grant computer access if it updated itself) and confirm with git ls-remote; bump the ?v= stamps when kit.js, voice.js, photos.js or play.js change; re-run tools/make_offline_list.py when files are added.
