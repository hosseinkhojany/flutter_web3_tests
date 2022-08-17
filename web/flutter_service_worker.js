'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/introImage.jpg": "9075f0562a6fc82b7bb01acb646d7427",
"assets/assets/images/poster.gif": "84edc9c15eafb3c868eaf998f0f66a5b",
"assets/assets/images/default.jpg": "1c67ba7cef813ef03a69389740b93682",
"assets/assets/images/example.webp": "e91e296d42d8e43b80114cf9c8ad6d4c",
"assets/assets/images/avatar.gif": "aabc89aee6e21ea107f77c783c96e011",
"assets/assets/images/ic_metamask.png": "2f82a8c06435ba664d803dafa7391ccd",
"assets/assets/images/ic_walletconnect.png": "5b6c4d62df5947f20d446b36331b5f3d",
"assets/assets/images/logo.png": "fe784aee40cf501d8f7d187b1f4ece4a",
"assets/assets/json/error.json": "d47509d126effcc0001292ebcc42c38c",
"assets/assets/json/loading.json": "6b3ce67d2fdc9a275c80d8656bef3d7b",
"assets/assets/nfts/23.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/14.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/24.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/9.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/41.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/10.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/29.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/5.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/15.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/28.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/39.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/42.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/47.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/19.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/30.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/50.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/7.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/35.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/12.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/49.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/36.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/3.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/4.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/27.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/33.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/43.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/48.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/32.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/40.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/20.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/18.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/21.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/17.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/11.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/31.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/44.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/6.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/37.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/45.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/16.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/13.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/38.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/8.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/26.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/34.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/2.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/46.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/25.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/nfts/22.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "0fac06e1a4200cd169b050f60b294bb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "35792869d247916eb18f7c9728ec11b3",
"main.dart.js_3.part.js": "2b99983aec8a17426011c728906ece46",
"manifest.json": "3e42f32685f09c9044ed69bccaa98e72",
"main.dart.js": "6d4fcbc10159284affad3d838ba6b5c3",
"main.dart.js_2.part.js": "ad76cad935f81ff39c07a99f1c6a9455",
"index.html": "a14f754878957188c9d5f713c630a639",
"/": "a14f754878957188c9d5f713c630a639",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js_1.part.js": "9361ccd393d8494ebd82ee1dfcab7878",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"version.json": "f6ff144e6768e150ebac71945841be56",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
