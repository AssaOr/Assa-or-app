const CACHE_NAME = 'assaor-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// התקנת ה-Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// הפעלת ה-Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
