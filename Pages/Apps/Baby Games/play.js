/* Baby Games: shared helpers for the Bible story games (Oct 2026).
 * Load after voice.js, photos.js and kit.js. Gives each game the same sounds,
 * voice, counting words, celebrations and age level, so a game file only holds
 * its own story. Every sentence passed to Play.say must also have a recorded
 * clip (see tools/harvest.js) or it falls back to the phone voice.
 */
(function () {
  "use strict";
  var soundOn = true, actx = null;

  function ctx() {
    if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
    if (actx && actx.state !== "running") { try { actx.resume(); } catch (e) {} }
    return actx;
  }
  function tone(freq, dur, type, vol, delay) {
    if (!soundOn) return;
    var c = ctx(); if (!c) return;
    try {
      var t = c.currentTime + (delay || 0), o = c.createOscillator(), g = c.createGain();
      o.type = type || "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.22, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.35));
      o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + (dur || 0.35) + 0.05);
    } catch (e) {}
  }
  function chime() { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, 0.4, "sine", 0.2, i * 0.09); }); }
  function boop() { tone(330, 0.22, "sine", 0.18); tone(247, 0.25, "sine", 0.14, 0.09); }
  function pop(f) { tone(f || 620, 0.14, "triangle", 0.2); }
  // A soft plucked string (Karplus-Strong): the harp and the music box
  function pluck(freq, vol) {
    if (!soundOn) return;
    var c = ctx(); if (!c) return;
    try {
      var sr = c.sampleRate, len = Math.round(sr * 1.6), buf = c.createBuffer(1, len, sr), d = buf.getChannelData(0);
      var p = Math.round(sr / freq), ring = new Float32Array(p), i;
      for (i = 0; i < p; i++) ring[i] = Math.random() * 2 - 1;
      for (i = 0; i < len; i++) { var k = i % p, nx = (k + 1) % p; var v = ring[k]; ring[k] = 0.996 * 0.5 * (ring[k] + ring[nx]); d[i] = v * (1 - i / len); }
      var s = c.createBufferSource(), g = c.createGain(); g.gain.value = vol || 0.5;
      s.buffer = buf; s.connect(g); g.connect(c.destination); s.start();
    } catch (e) {}
  }
  function say(t, cb) {
    if (!soundOn || !window.BabyVoice) { if (cb) setTimeout(cb, 400); return; }
    BabyVoice.say(t, cb);
  }
  var NUM = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
             "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];
  function num(n) { return NUM[n] || String(n); }
  var CHEERS = ["Well done!", "Yay!", "Good job!", "Hooray!", "You did it!"];
  function cheerWord() { return CHEERS[Math.floor(Math.random() * CHEERS.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function confetti(n, chars) {
    var host = document.getElementById("game") || document.body, ce = (chars || "🎉🎈⭐🌟✨🌈").split(/(?:)/u);
    for (var i = 0; i < (n || 14); i++) {
      var el = document.createElement("div");
      el.textContent = ce[Math.floor(Math.random() * ce.length)];
      el.style.cssText = "position:absolute;z-index:70;pointer-events:none;font-size:2rem;left:" + (Math.random() * 100) + "vw;top:-8vh;animation:pl-fall 1.2s ease-out " + (Math.random() * 0.3) + "s forwards";
      host.appendChild(el);
      el.addEventListener("animationend", function () { this.remove(); });
    }
  }
  function bump(el, cls) { if (!el) return; cls = cls || "pl-bounce"; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

  // shared animations
  var css = document.createElement("style");
  css.textContent =
    "@keyframes pl-fall{0%{opacity:1;transform:translateY(0) rotate(0)}100%{opacity:0;transform:translateY(60vh) rotate(300deg)}}" +
    "@keyframes pl-bounce{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}" +
    "@keyframes pl-wig{0%,100%{transform:rotate(0)}25%{transform:rotate(-6deg)}75%{transform:rotate(6deg)}}" +
    "@keyframes pl-float{0%{opacity:0;transform:translateY(20px) scale(.6)}20%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(-90px) scale(1)}}" +
    ".pl-bounce{animation:pl-bounce .45s cubic-bezier(.34,1.56,.64,1)}.pl-wig{animation:pl-wig .45s}" +
    ".pl-pop{position:absolute;z-index:60;pointer-events:none;animation:pl-float 1.6s ease-out forwards}" +
    ".pl-title{position:relative;z-index:5;text-align:center;color:#fff;font-size:clamp(1.25rem,5vw,2.2rem);text-shadow:0 3px 12px rgba(0,0,0,.45);padding:calc(env(safe-area-inset-top,0px) + 60px) 16px 6px;min-height:2.4em}" +
    ".pl-btn{border:0;border-radius:999px;padding:11px 22px;font:inherit;font-size:1.1rem;background:#fff;color:#4b3a8f;box-shadow:0 6px 16px rgba(0,0,0,.2);cursor:pointer}" +
    "@media (prefers-reduced-motion:reduce){.pl-bounce,.pl-wig,.pl-pop{animation:none}}";
  (document.head || document.documentElement).appendChild(css);

  // float a picture (photo term or emoji) up from a point
  function floatUp(x, y, term, emoji, size) {
    var host = document.getElementById("game") || document.body, d = document.createElement("div");
    size = size || 70;
    d.className = "pl-pop"; d.style.left = (x - size / 2) + "px"; d.style.top = (y - size / 2) + "px";
    d.style.width = d.style.height = size + "px";
    var inner = document.createElement("div"); inner.style.cssText = "width:100%;height:100%;border-radius:50%;overflow:hidden;background:#fff;box-shadow:0 6px 16px rgba(0,0,0,.25);font-size:" + (size * 0.6) + "px;display:flex;align-items:center;justify-content:center";
    d.appendChild(inner); host.appendChild(d);
    if (term && window.BabyPhotos) BabyPhotos.fill(inner, term, emoji || ""); else inner.textContent = emoji || "";
    d.addEventListener("animationend", function () { d.remove(); });
  }

  // the kit's 🔊 button calls this
  window.toggleSound = function () {
    soundOn = !soundOn;
    if (!soundOn) { try { BabyVoice.stop(); } catch (e) {} try { speechSynthesis.cancel(); } catch (e) {} }
  };
  document.addEventListener("contextmenu", function (e) { e.preventDefault(); });

  /* A landscape scene (3:2 picture) that fills the screen height and pans
   * sideways with a finger on a tall phone, like a picture-book world.
   * Children of the returned element are placed in PERCENT of the picture,
   * so spots stay on their objects whatever the screen. Returns {el, tapped}
   * where a tap (not a drag) calls opts.onTap(xPct, yPct, event). */
  function scene(host, img, opts) {
    opts = opts || {};
    var ratio = opts.ratio || 1.5, el = document.createElement("div");
    el.className = "pl-scene";
    el.style.cssText = "position:absolute;left:0;top:0;background:url(" + img + ") center/100% 100% no-repeat;transform-origin:0 0;touch-action:none;will-change:transform";
    host.appendChild(el);
    var W = 0, H = 0, x = 0, minX = 0, drag = null;
    function fit() {
      var vw = host.clientWidth, vh = host.clientHeight;
      // Fill the height, but on a tall phone show at least half the picture
      // (the rest is a finger-drag away) and let the sky colour fill above it.
      W = Math.min(vh * ratio, 2 * vw);
      if (W < vw) W = vw;
      H = W / ratio;
      el.style.width = W + "px"; el.style.height = H + "px";
      minX = Math.min(0, vw - W);
      var top = H >= vh ? (vh - H) / 2 : vh - H;            // anchor the ground to the bottom
      if (x === 0 || x < minX) x = Math.max(minX, Math.min(0, vw / 2 - W * (opts.focus || 0.5)));
      el.style.top = top + "px"; apply();
    }
    function apply() { el.style.transform = "translateX(" + x + "px)"; }
    el.addEventListener("pointerdown", function (e) { drag = { sx: e.clientX, x0: x, moved: false }; });
    el.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.sx;
      if (Math.abs(dx) > 8) drag.moved = true;
      if (drag.moved) { x = Math.max(minX, Math.min(0, drag.x0 + dx)); apply(); }
    });
    el.addEventListener("pointerup", function (e) {
      if (drag && !drag.moved && opts.onTap) {
        var r = el.getBoundingClientRect();
        opts.onTap((e.clientX - r.left) / r.width * 100, (e.clientY - r.top) / r.height * 100, e);
      }
      drag = null;
    });
    el.addEventListener("pointercancel", function () { drag = null; });
    addEventListener("resize", fit);
    fit();
    return { el: el, fit: fit, pan: function (pct) { x = Math.max(minX, Math.min(0, host.clientWidth / 2 - W * pct)); el.style.transition = "transform .6s"; apply(); setTimeout(function () { el.style.transition = ""; }, 650); },
             view: function () { var vw = host.clientWidth; return { from: -x / W * 100, to: (-x + vw) / W * 100 }; },
             pt: function (xp, yp) { var r = el.getBoundingClientRect(); return { x: r.left + r.width * xp / 100, y: r.top + r.height * yp / 100 }; } };
  }
  // Is (x,y) inside a spot [x, y, r] (all in percent; r measured in width %)?
  function inSpot(x, y, s) { var dx = x - s[0], dy = (y - s[1]) / 1.5; return dx * dx + dy * dy <= s[2] * s[2]; }

  window.Play = {
    scene: scene, inSpot: inSpot,
    ctx: ctx, tone: tone, chime: chime, boop: boop, pop: pop, pluck: pluck,
    say: say, num: num, cheerWord: cheerWord, shuffle: shuffle, cap: cap,
    confetti: confetti, bump: bump, floatUp: floatUp,
    level: function () { return window.BabyKit ? BabyKit.level() : 2; },
    onLevel: function (fn) { document.addEventListener("babylevel", function (e) { fn(e.detail); }); },
    soundOn: function () { return soundOn; },
    NUM: NUM, CHEERS: CHEERS
  };
})();
