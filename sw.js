// Service Worker for AnkleGuard Coach - 100% Offline Gym Operation
const CACHE_NAME = 'ankleguard-cache-v2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './app.js',
  './manifest.json',
  './assets/icon.svg',
  './assets/incline_db_press.jpg',
  './assets/flat_db_press.jpg',
  './assets/chest_supported_machine_press.jpg',
  './assets/seated_db_shoulder_press.jpg',
  './assets/cable_lateral_raise.jpg',
  './assets/cable_triceps_pushdown.jpg',
  './assets/dead_bug_core.jpg',
  './assets/hip_thrust.jpg',
  './assets/seated_leg_extension.jpg',
  './assets/high_foot_leg_press.jpg',
  './assets/seated_hip_abduction.jpg',
  './assets/seated_hip_adduction.jpg',
  './assets/lat_pulldown.jpg',
  './assets/wide_lat_pulldown.jpg',
  './assets/chest_supported_row.jpg',
  './assets/seated_cable_row.jpg',
  './assets/cable_face_pull.jpg',
  './assets/incline_hammer_curl.jpg',
  './assets/seated_hamstring_curl.jpg',
  './assets/back_extension_45.jpg',
  './assets/single_leg_glute_bridge.jpg',
  './assets/bench_knee_tucks.jpg',
  './assets/cable_y_raise.jpg',
  './assets/ankle_eversion.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Pre-caching gym offline assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Clearing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Cache-first strategy for instant offline gym use
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Cache new successful requests
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        return caches.match('./index.html');
      });
    })
  );
});
