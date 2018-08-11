const VERSION = "v2";

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(VERSION).then(function (cache) {
            return cache.addAll([
                '/',
                'index.html',

                'js/utils.js',
                'js/timer.js',
                'js/changeIcon.js',

                'css/checkbox.css',
                'css/style.css',

                'media/icons/icon-192x192.png',
                'media/icons/icon1-192x192.png',
                'media/icons/icon2-192x192.png',
                'media/icons/icon3-192x192.png',
                'media/icons/icon4-192x192.png',
                'media/icons/icon5-192x192.png',
                'media/icons/icon6-192x192.png',
                'media/icons/icon7-192x192.png',
                'media/icons/icon8-192x192.png',

                'media/alarm.mp3'
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