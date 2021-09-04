const CACHE_NAME = "v1";
const CACHED_ASSETS = ["idb.js"];

const self = this;

// Install Service Worker...
self.addEventListener("install", (event) => {
   console.log(`Installed Service Worker`);

   event.waitUntil(
      caches
         .open(CACHE_NAME)
         .then((cache) => {
            console.log("Opened cache...");
            return cache.addAll(CACHED_ASSETS);
         })
         .then(() => self.skipWaiting())
   );
});

// Activate the Service Worker...
self.addEventListener("activate", (event) => {
   console.log(`Activated Service Worker`);

   // Remove unwanted caches
   caches.keys().then((cacheKeys) => {
      return Promise.all(
         cacheKeys.map((cacheKey) => {
            if (cacheKey !== CACHE_NAME) {
               console.log("Remove unwanted cache");
               return caches.delete(cacheKey);
            }
         })
      );
   });
});

// Listen for requests...
self.addEventListener("fetch", (event) => {
   console.log("Fetch from Service Worker");

   event.respondWith(
      fetch(event.request)
         .then((res) => {
            console.log("Clone the response");
            const cloneResponse = res.clone();

            caches.open(CACHE_NAME).then((cache) => {
               cache.put(event.request, cloneResponse);
            });
            return res;
         })
         .catch((err) => caches.match(event.request).then((res) => res))
   );
});
