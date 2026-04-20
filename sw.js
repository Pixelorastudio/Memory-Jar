const CACHE = 'memory-jar-v1';

// Everything the app needs to work offline
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Reenie+Beanie&family=Playfair+Display:wght@400;700&display=swap'
];

// Install: cache all core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cache local assets reliably; try fonts best-effort
      const local = PRECACHE.filter(u => !u.startsWith('http'));
      const remote = PRECACHE.filter(u => u.startsWith('http'));
      return cache.addAll(local).then(() =>
        Promise.allSettled(remote.map(u => cache.add(u)))
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for everything
self.addEventListener('fetch', e => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache the response
      return fetch(e.request).then(response => {
        // Only cache valid responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return response;
      }).catch(() => {
        // Offline and not cached — for navigation requests return the app shell
        if (e.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
