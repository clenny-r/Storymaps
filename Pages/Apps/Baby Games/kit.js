/* Baby Games — shared top bar, theme and screen kit.
 *
 * Why a top bar: on an iPhone, anything pinned to the bottom of the page sits
 * under Safari's toolbar and a toddler can never reach it. Every control the
 * grown-up needs (voice, full screen, day/night, sound, back) is therefore
 * mounted at the TOP, inside the safe area.
 *
 * Drop this into any game with:
 *     <script src="voice.js"><\/script>
 *     <script src="kit.js"><\/script>
 *
 * It will:
 *   • hide the old #voice-btn / #fs-btn / #back-btn / #sound-btn if present,
 *     and take over their jobs;
 *   • remember light or dark for every Baby Games page (one shared setting);
 *   • expose BabyKit.say / BabyKit.theme / BabyKit.bar.
 */
(function () {
  "use strict";

  var THEME_KEY = "babyTheme_v1";           // 'light' | 'dark'
  var SOUND_KEY = "babySound_v1";           // 'on' | 'off'

  function get(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ── theme ───────────────────────────────────────────────────────────── */
  var theme = get(THEME_KEY, "light");

  function applyTheme() {
    var r = document.documentElement;
    r.setAttribute("data-theme", theme);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", theme === "dark" ? "#12101f" : "#fff6dd");
  }
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    set(THEME_KEY, theme);
    applyTheme();
    paint();
  }

  /* ── styles ──────────────────────────────────────────────────────────── */
  var CSS = [
    /* Night mode: the games paint their own bright gradients inline, so one   */
    /* filter dims the whole playfield without touching any game's palette.   */
    'html[data-theme="dark"] body{background:#12101f}',
    'html[data-theme="dark"] #game,html[data-theme="dark"] #board,html[data-theme="dark"] canvas,',
    'html[data-theme="dark"] .kit-dim{filter:brightness(.62) saturate(.92) contrast(1.02)}',

    /* the bar itself */
    '#kitbar{position:fixed;left:0;right:0;top:0;z-index:99990;display:flex;align-items:center;gap:8px;',
    'padding:calc(env(safe-area-inset-top,0px) + 8px) 10px 8px;pointer-events:none;',
    'font-family:"Baloo 2","Fredoka One",system-ui,-apple-system,sans-serif}',
    '#kitbar .kb{pointer-events:auto;display:inline-flex;align-items:center;gap:6px;border:0;cursor:pointer;',
    'background:rgba(255,255,255,.82);color:#2b2350;border-radius:999px;padding:9px 14px;font:inherit;',
    'font-size:14px;font-weight:800;line-height:1;text-decoration:none;',
    'box-shadow:0 4px 14px rgba(60,40,110,.18);backdrop-filter:blur(8px);',
    '-webkit-backdrop-filter:blur(8px);min-height:40px}',
    '#kitbar .kb:active{transform:translateY(1px)}',
    '#kitbar .kb.round{padding:9px 11px;font-size:17px}',
    '#kitbar #kbLevel{white-space:nowrap}',
    '@media (max-width:430px){#kitbar .kb{padding:8px 10px;font-size:13px}#kitbar #kbVoice span{display:none}}',
    '#kitbar .spacer{flex:1}',
    'html[data-theme="dark"] #kitbar .kb{background:rgba(38,33,62,.9);color:#F3EEFF;box-shadow:0 4px 14px rgba(0,0,0,.45)}',
    '#kitbar.hidden{opacity:0;pointer-events:none;transition:opacity .4s}',

    /* voice download chip */
    '#kitvoice{position:fixed;z-index:99991;left:50%;transform:translateX(-50%);',
    'top:calc(env(safe-area-inset-top,0px) + 58px);background:rgba(255,255,255,.94);color:#2b2350;',
    'border-radius:999px;padding:8px 15px;font:800 13px/1 "Baloo 2",system-ui,sans-serif;',
    'box-shadow:0 6px 18px rgba(60,40,110,.22);display:none}',
    'html[data-theme="dark"] #kitvoice{background:rgba(38,33,62,.94);color:#F3EEFF}',

    /* keep game titles clear of the bar */
    'body.kit-pad #title{padding-top:calc(env(safe-area-inset-top,0px) + 58px)!important}',
    '#voice-btn,#fs-btn,#back-btn,#sound-btn,#sound-indicator{display:none!important}',
    /* iPhone Safari: 100vh runs under the bottom toolbar; use the visible height */
    '@supports (height:100dvh){#game{height:100dvh!important}}',

    /* age-level picker */
    '#kitlevel{position:fixed;inset:0;z-index:99995;background:rgba(30,20,60,.55);display:flex;align-items:center;',
    'justify-content:center;padding:16px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);',
    'font-family:"Fredoka One","Baloo 2",system-ui,sans-serif}',
    '#kitlevel .kl-box{background:#fff;border-radius:28px;padding:22px 18px;max-width:420px;width:100%;',
    'box-shadow:0 24px 60px rgba(0,0,0,.35);text-align:center}',
    '#kitlevel .kl-h{font-size:24px;color:#3a1d6e}',
    '#kitlevel .kl-s{font:600 13px/1.4 system-ui,sans-serif;color:#6b6385;margin:6px 4px 14px}',
    '#kitlevel .kl-b{display:flex;align-items:center;gap:14px;width:100%;margin:8px 0;padding:14px 16px;border-radius:20px;',
    'border:3px solid #eee;background:#faf7ff;font:inherit;font-size:20px;color:#2b2350;cursor:pointer;text-align:left}',
    '#kitlevel .kl-b small{font:700 14px system-ui,sans-serif;color:#7c6aa8}',
    '#kitlevel .kl-b.on{border-color:#7c3aed;background:#f3ecff}',
    '#kitlevel .kl-i{font-size:38px;line-height:1}',
    'html[data-theme="dark"] #kitlevel .kl-box{background:#26213e}',
    'html[data-theme="dark"] #kitlevel .kl-h,html[data-theme="dark"] #kitlevel .kl-b{color:#F3EEFF}',
    'html[data-theme="dark"] #kitlevel .kl-b{background:#322b52;border-color:#3d3563}'
  ].join("");

  function injectCSS() {
    var s = document.createElement("style");
    s.id = "kitcss";
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  /* ── full screen ─────────────────────────────────────────────────────── */
  function isFull() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }
  function goFull() {
    var el = document.documentElement;
    var r = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (r) { try { r.call(el); } catch (e) {} }
    else {
      // iPhone Safari has no Fullscreen API: tell the grown-up how to get one.
      chip('On iPhone: tap Share → Add to Home Screen for full screen', 4200);
    }
    setTimeout(paint, 300);
  }
  function exitFull() {
    var x = document.exitFullscreen || document.webkitExitFullscreen;
    if (x) { try { x.call(document); } catch (e) {} }
    setTimeout(paint, 300);
  }

  /* ── sound (games expose window.toggleSound) ─────────────────────────── */
  /* Every game starts with its own sound ON. The kit remembers the grown-up's
   * choice across pages, so on boot it tells a game to go quiet if the saved
   * choice is OFF. Before Oct 2026 it did not: the bar showed 🔇 while the
   * game still played, and the next tap flipped the two out of step (bar 🔊,
   * game silent). */
  var soundOn = get(SOUND_KEY, "on") !== "off";
  function gameToggle() {
    if (typeof window.toggleSound === "function") { try { window.toggleSound(); } catch (e) {} }
  }
  function hush() {
    try { speechSynthesis.cancel(); } catch (e) {}
    try { if (window.BabyVoice && BabyVoice.stop) BabyVoice.stop(); } catch (e) {}
  }
  function toggleSound() {
    soundOn = !soundOn;
    set(SOUND_KEY, soundOn ? "on" : "off");
    gameToggle();
    if (!soundOn) hush();
    paint();
  }
  function syncSoundOnBoot() {
    if (!soundOn) { gameToggle(); hush(); }
  }

  /* ── audio unlock (iPhone / iPad) ────────────────────────────────────── */
  /* Each game makes its own AudioContext. iOS starts every context
   * "suspended" and only lets it run when resume() is called inside a tap.
   * Several games tried once, on touchstart, which iOS 9+ no longer accepts
   * as an unlocking gesture, so the first taps were silent and sometimes the
   * whole game stayed silent. We keep a list of every context a page makes
   * and resume them all on every tap, and again when the app comes back
   * from the background (iOS "interrupts" audio when the screen locks). */
  var contexts = [];
  (function trackContexts() {
    var names = ["AudioContext", "webkitAudioContext"];
    names.forEach(function (n) {
      var C = window[n];
      if (!C || C.__kitWrapped) return;
      var W = function () {
        var c = new (Function.prototype.bind.apply(C, [null].concat([].slice.call(arguments))))();
        contexts.push(c);
        return c;
      };
      W.prototype = C.prototype;
      W.__kitWrapped = true;
      try { window[n] = W; } catch (e) {}
    });
  })();
  function resumeAll() {
    contexts.forEach(function (c) {
      try { if (c.state !== "running" && c.state !== "closed") c.resume(); } catch (e) {}
    });
  }
  ["touchend", "pointerup", "click", "keydown"].forEach(function (ev) {
    document.addEventListener(ev, resumeAll, true);
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { try { speechSynthesis.cancel(); } catch (e) {} }
    else resumeAll();
  });
  /* Safari 16.4+: play through the ring/silent switch, like a video would.
   * Without this, tones and the natural voice are muted on a phone set to
   * silent while the phone voice still talks, which sounds "half broken". */
  try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) {}

  /* ── little chip for messages / download progress ────────────────────── */
  var chipEl = null, chipTimer = null;
  function chip(msg, ms) {
    if (!chipEl) {
      chipEl = document.createElement("div");
      chipEl.id = "kitvoice";
      document.body.appendChild(chipEl);
    }
    chipEl.textContent = msg;
    chipEl.style.display = "block";
    clearTimeout(chipTimer);
    if (ms !== 0) chipTimer = setTimeout(function () { chipEl.style.display = "none"; }, ms || 2600);
  }
  function chipHide() { if (chipEl) chipEl.style.display = "none"; }

  /* ── age level (shared by every game that has levels) ────────────────── */
  /* Levels follow the CDC "Learn the Signs. Act Early." milestones:
   *   1  under 2   tap and listen; by 2 a child "points to things in a book
   *                when you ask" and "points to at least two body parts"
   *   2  2 to 3    find-it rounds with 3 pictures
   *   3  3 to 5    more pictures, 4 choices, sound-to-animal questions; by 4
   *                a child "draws a person with three or more body parts"
   * A page opts in with <body data-kit-levels="1">, then reads BabyKit.level()
   * and listens for the "babylevel" event. */
  var LEVEL_KEY = "babyLevel_v1";
  var LEVELS = [
    { n: 1, name: "Little one", age: "under 2",  icon: "👶" },
    { n: 2, name: "Toddler",    age: "2 to 3",   icon: "🧒" },
    { n: 3, name: "Big kid",    age: "3 to 5",   icon: "🎒" }
  ];
  function level() { var v = +get(LEVEL_KEY, "0"); return v >= 1 && v <= 3 ? v : 0; }
  function setLevel(n) {
    set(LEVEL_KEY, String(n)); paint();
    try { document.dispatchEvent(new CustomEvent("babylevel", { detail: n })); } catch (e) {}
  }
  function levelPicker(first) {
    var ov = document.createElement("div");
    ov.id = "kitlevel";
    var html = '<div class="kl-box"><div class="kl-h">' + (first ? "How old is our player?" : "Change the age level") + '</div>' +
      '<div class="kl-s">Ages are a rough guide. Every child grows at their own pace, so pick what feels fun.</div>';
    LEVELS.forEach(function (L) {
      html += '<button class="kl-b' + (level() === L.n ? " on" : "") + '" data-n="' + L.n + '"><span class="kl-i">' + L.icon +
        '</span><span><b>' + L.name + '</b><br><small>' + L.age + '</small></span></button>';
    });
    html += '</div>';
    ov.innerHTML = html;
    document.body.appendChild(ov);
    Array.prototype.forEach.call(ov.querySelectorAll(".kl-b"), function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation(); setLevel(+b.getAttribute("data-n")); ov.remove();
      });
    });
    if (!first) ov.addEventListener("click", function (e) { if (e.target === ov) ov.remove(); });
  }

  /* ── the bar ─────────────────────────────────────────────────────────── */
  var bar = null;
  function buildBar() {
    var backHref = document.body.getAttribute("data-kit-back") || "index.html";
    var legacyBack = document.getElementById("back-btn");
    if (legacyBack && legacyBack.getAttribute("href") && !document.body.getAttribute("data-kit-back")) {
      var h = legacyBack.getAttribute("href");
      backHref = /\.\.\/index\.html$/.test(h) ? "index.html" : h;   // stay inside Baby Games
    }
    bar = document.createElement("div");
    bar.id = "kitbar";
    bar.innerHTML =
      '<a class="kb round" id="kbBack" title="Back to the games" href="' + backHref + '">←</a>' +
      '<button class="kb round" id="kbSound" title="Sound on or off">🔊</button>' +
      '<span class="spacer"></span>' +
      (document.body.hasAttribute("data-kit-levels") ? '<button class="kb" id="kbLevel" title="Age level">👶 <span>Age</span></button>' : '') +
      '<button class="kb" id="kbVoice" title="Choose the voice">🗣️ <span>Voice</span></button>' +
      '<button class="kb" id="kbFull" title="Full screen">⛶</button>' +
      '<button class="kb round" id="kbTheme" title="Day or night">🌙</button>';
    document.body.appendChild(bar);
    document.body.classList.add("kit-pad");

    bar.querySelector("#kbSound").addEventListener("click", toggleSound);
    bar.querySelector("#kbTheme").addEventListener("click", toggleTheme);
    bar.querySelector("#kbFull").addEventListener("click", function () { isFull() ? exitFull() : goFull(); });
    bar.querySelector("#kbVoice").addEventListener("click", function () {
      if (window.BabyVoice && BabyVoice.openPicker) BabyVoice.openPicker();
      else chip("This page has no talking", 2000);
    });
    if (!window.BabyVoice) bar.querySelector("#kbVoice").style.display = "none";
    var lv = bar.querySelector("#kbLevel");
    if (lv) lv.addEventListener("click", function () { levelPicker(false); });
    paint();
  }

  function paint() {
    if (!bar) return;
    bar.querySelector("#kbSound").textContent = soundOn ? "🔊" : "🔇";
    bar.querySelector("#kbTheme").textContent = theme === "dark" ? "☀️" : "🌙";
    bar.querySelector("#kbFull").textContent = isFull() ? "⤢" : "⛶";
    var lv = bar.querySelector("#kbLevel");
    if (lv) { var L = LEVELS[(level() || 2) - 1]; lv.innerHTML = L.icon + " <span>" + L.age + "</span>"; }
  }

  document.addEventListener("fullscreenchange", paint);
  document.addEventListener("webkitfullscreenchange", paint);

  /* ── if photos.js did not load, emoji still work ─────────────────────── */
  if (!window.BabyPhotos) {
    window.BabyPhotos = {
      fill: function (n, t, e) { if (n) n.textContent = e || ""; },
      warm: function () {},
      resolve: function () { return { then: function (f) { f(null); return this; }, catch: function () { return this; } }; },
      upload: function (t, cb) { if (cb) cb(false); },
      own: { get: function () { return null; }, set: function () {}, clear: function () {}, list: function () { return {}; } }
    };
  }

  /* ── boot ────────────────────────────────────────────────────────────── */
  applyTheme();
  function boot() {
    injectCSS();
    applyTheme();
    buildBar();
    syncSoundOnBoot();
    if (document.body.hasAttribute("data-kit-levels") && !level()) levelPicker(true);
    if (window.BabyVoice && BabyVoice.autoSetup) BabyVoice.autoSetup(chip, chipHide);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.BabyKit = {
    theme: function () { return theme; },
    toggleTheme: toggleTheme,
    soundOn: function () { return soundOn; },
    resumeAudio: resumeAll,
    level: function () { return level() || 2; },
    levelPicker: levelPicker,
    chip: chip,
    fullscreen: goFull
  };
})();
