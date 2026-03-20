// Self-unregistering service worker
// Clears any stale caches from the previous broken SW implementation
// and removes itself so users always get fresh content.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName)),
        );
      })
      .then(() => {
        return self.registration.unregister();
      })
      .then(() => {
        return self.clients.matchAll();
      })
      .then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      }),
  );
});
