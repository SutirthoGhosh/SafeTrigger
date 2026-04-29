// sw.js - The Background Controller
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// This listens for "pings" to keep the app from being suspended
self.addEventListener('fetch', (event) => {
    // Keep-alive logic
});
