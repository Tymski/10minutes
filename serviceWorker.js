const CACHE_NAME = "10minutes_v3";

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/',
                './',
                'index.html',
                '/index.html',

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
            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
