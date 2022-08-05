'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/scissors.png": "2ad2ceabe51fe371aabe6b85b8f6428c",
"assets/assets/images/ic_bot.png": "b458bf92e17a5e44d60846c566285388",
"assets/assets/images/paper.png": "462828a07192c23a947940a891e45066",
"assets/assets/images/ic_splash_logo.png": "e268003702fa54c58ee8b8f6fcadaaf0",
"assets/assets/images/ic_player.png": "53985be5b4f64836443c11b51af23bc6",
"assets/assets/images/ic_three.png": "62d34436b0209d9db92ab947f92199d9",
"assets/assets/images/ic_splash_background.png": "08593658e47f21bda8f27526bff545ba",
"assets/assets/images/ic_five.png": "107f7f90bc11bffdd29d1b38d68a903e",
"assets/assets/images/main.png": "b2636862db48a4e8c72c9e13c79966e9",
"assets/assets/images/ic_start_rock_paper.png": "7b287ec262427e8fe53de51aeb94fa7f",
"assets/assets/images/ic_rock_paper.jpg": "b4d943c3f4fa3f9276e85b8cf318ed6e",
"assets/assets/images/rock.png": "cd62f3aefbfd06ed89d0bd069daf0c35",
"assets/assets/images/ic_deposit_ether.png": "871a5372fcfdcbb71204751cb431239a",
"assets/assets/images/ic_metamask.png": "2f82a8c06435ba664d803dafa7391ccd",
"assets/assets/images/ic_walletconnect.png": "5b6c4d62df5947f20d446b36331b5f3d",
"assets/assets/images/rock_paper_banner.png": "6f1f1f3854e28cc3d258c306847db70a",
"assets/assets/images/ic_multi_player.png": "47a08509babf0d37e0b7ca6bb29ff0f2",
"assets/assets/images/ic_popup_menu.svg": "acd46c3fe891ed584b5ddd55ebf89935",
"assets/assets/fonts/anjoman_bold.ttf": "4ebc07fe7b8ab560536bd29c30b0a654",
"assets/assets/fonts/ubuntu_mono_regular.ttf": "c8ca9c5cab2861cf95fc328900e6f1a3",
"assets/assets/fonts/anjoman_regular.ttf": "52d068cdd5f72704828fa4f45f119df4",
"assets/assets/languages/en.json": "903041e9f1aeba56211e4ae1699e2ea0",
"assets/assets/languages/fa.json": "7003f1cb0712265e0f5dc2c712ad37f8",
"assets/FontManifest.json": "8c94d6fa9d3d53290a31aaffaa08d006",
"assets/AssetManifest.json": "7a19a2d30f76f1e641b59d9089c2fbfd",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2952ba2e5e89b198b2451376aea16798",
"manifest.json": "975fc60a98bab6aae7b2fd35acdc37cd",
"main.dart.js": "23f14c756af464a4355e56f6b85940c1",
"index.html": "691fcdb4560162cae77004d09240362c",
"/": "691fcdb4560162cae77004d09240362c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "e268003702fa54c58ee8b8f6fcadaaf0",
"version.json": "3e4cfaa36e7a94a5bb8cdc138d27a645"
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
