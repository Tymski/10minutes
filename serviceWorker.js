const VERSION = "v1.0";

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(VERSION).then(function (cache) {
            return cache.addAll([
                '/',
                './',
                '/index.html',
                '/js/utils.js',
                '/js/timer.js',
                '/js/changeIcon.js',
                '/icons/icon_192.png',
                '/icons/icon1_192.png',
                '/icons/icon2_192.png',
                '/icons/icon3_192.png',
                '/icons/icon4_192.png',
                '/icons/icon5_192.png',
                '/icons/icon6_192.png',
                '/icons/icon7_192.png',
                '/icons/icon8_192.png',
                'css/checkbox.css',
                'css/style.css',
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
  });

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});