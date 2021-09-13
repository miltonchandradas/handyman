const CACHE_NAME = "v1";
const STATIC_CACHED_ASSETS = [
   "/images/favicon.ico",
   "/index.html",
   "App.css",
   "/static/js/main.chunk.js",
   "/static/js/vendors~main.chunk.js",
   "/static/js/bundle.js",
   "/static/media/lawn.750993ce.jpg",
   "/static/media/electrical.9ed10e75.jpg",
   "/static/media/plumbing.d0940abb.jpg",
   "/static/media/handymanHeader.9a592baa.jpg",
   "/static/js/0.chunk.js",
];

const self = this;

// Install Service Worker...
self.addEventListener("install", (event) => {
   console.log(`From Service Worker:  Install event`);
   self.skipWaiting();

   const preCache = async () => {
      const cache = await caches.open(CACHE_NAME);
      return cache.addAll(STATIC_CACHED_ASSETS);
   };

   event.waitUntil(preCache());
});

// Activate the Service Worker...
self.addEventListener("activate", (event) => {
   console.log(`From Service Worker:  Activate event`);
   self.clients.claim();

   const clearCache = async () => {
      const cacheKeys = await caches.keys();
      cacheKeys.forEach(async (cacheKey) => {
         if (CACHE_NAME === cacheKey) {
            return;
         }

         await caches.delete(cacheKey);
      });
   };

   event.waitUntil(clearCache());
});

// Listen for requests...
self.addEventListener("fetch", (event) => {
   console.log("From Service Worker:  Fetch event");

   const requestUrl = new URL(event.request.url);
   const requestPath = requestUrl.pathname;
   const fileName = requestPath.substring(requestPath.lastIndexOf("/") + 1);

   console.log("Request URL: ", requestUrl);
   console.log("Request Path: ", requestPath);
   console.log("File Name: ", fileName);

   if (requestPath == "/users") {
      return event.respondWith(fetch(event.request));
   } else if (
      fileName == "serviceworker.js" ||
      fileName == "serviceworkerDEV.js"
   ) {
      return event.respondWith(networkFirstStrategy(event.request));
   }

   return event.respondWith(cacheFirstStrategy(event.request));
});

// Listen for sync events...
self.addEventListener("sync", (event) => {
   console.log("From Service Worker:  Sync event");

   if (event.tag === "sync-new-project") {
      console.log("From Service Worker:  Synchronizing new project");
   }
});

// Listen for message events...
self.addEventListener("message", (event) => {
   console.log("From Service Worker:  Message event");
});

const cacheFirstStrategy = async (request) => {
   const cacheResponse = await caches.match(request);
   return cacheResponse || fetchRequestAndCache(request);
};

const networkFirstStrategy = async (request) => {
   try {
      return await fetchRequestAndCache(request);
   } catch {
      return await caches.match(request);
   }
};

const fetchRequestAndCache = async (request) => {
   const networkResponse = await fetch(request);
   const clonedResponse = networkResponse.clone();
   const cache = await caches.open(CACHE_NAME);
   cache.put(request, networkResponse);
   return clonedResponse;
};
