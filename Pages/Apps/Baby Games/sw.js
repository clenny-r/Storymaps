/* Baby Games offline ("Plane mode"), Oct 2026.
 * - Pages: network first, so updates arrive; the saved copy is used offline.
 * - Everything else (scripts, photos, voice clips, fonts): saved copy first.
 * - "Save for the plane" on index.html posts {type:'precache'}; we fetch every
 *   file listed in offline-files.json and report progress back.
 * Bump CACHE when the file layout changes; old caches are removed. */
var CACHE = "babygames-v1";

self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("babygames-") === 0 && k !== CACHE; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function isPage(req) { return req.mode === "navigate" || /\.html?$/.test(new URL(req.url).pathname); }

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var same = url.origin === self.location.origin;
  var font = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!same && !font) return;                       // leave other sites alone

  if (same && isPage(req)) {
    e.respondWith(fetch(req).then(function (res) {
      if (res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || caches.match("index.html"); });
    }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: !font }).then(function (hit) {
    if (hit) return hit;
    return fetch(req).then(function (res) {
      if (res.ok || res.type === "opaque") { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  }));
});

self.addEventListener("message", function (e) {
  if (!e.data || e.data.type !== "precache") return;
  var src = e.source;
  e.waitUntil(fetch("offline-files.json?x=" + Date.now(), { cache: "no-store" }).then(function (r) { return r.json(); })
    .then(function (list) {
      var done = 0, failed = 0, total = list.length;
      return caches.open(CACHE).then(function (cache) {
        var i = 0;
        function worker() {
          if (i >= total) return Promise.resolve();
          var u = list[i++];
          var font = /^https:\/\/fonts\./.test(u);            // nice to have, never a failure
          return fetch(u, font ? { mode: "no-cors" } : { cache: "reload" }).then(function (res) {
            if (res.ok || res.type === "opaque") return cache.put(u, res); if (!font) failed++;
          }).catch(function () { if (!font) failed++; }).then(function () {
            done++;
            if (done % 10 === 0 || done === total) src.postMessage({ type: "progress", done: done, total: total, failed: failed });
            return worker();
          });
        }
        return Promise.all([worker(), worker(), worker(), worker(), worker(), worker()]);
      });
    }).catch(function () { src.postMessage({ type: "progress", done: 0, total: 0, failed: 1 }); }));
});
