'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "b01ed07f1b93966774091e648ec58c7f",
"main.dart.js_21.part.js": "10b4f89ee799b22daac8a51f43dadfb0",
"main.dart.js_17.part.js": "41f3cd280c5f3dfd76553b0e3f4d6667",
"main.dart.js_20.part.js": "06936497ab1441447b52908b2186f633",
"main.dart.js_16.part.js": "0e9b5a6aea123933e30ce9bec6bd7fd2",
"assets/assets/images/rock_paper_banner.jpg": "e17bc660fee63341690bbb9242fede76",
"assets/assets/images/scissors.png": "2ad2ceabe51fe371aabe6b85b8f6428c",
"assets/assets/images/ic_bot.png": "b458bf92e17a5e44d60846c566285388",
"assets/assets/images/paper.png": "462828a07192c23a947940a891e45066",
"assets/assets/images/ic_splash_logo.png": "02949f0214058f0197d5cab3be729dda",
"assets/assets/images/ic_player.png": "53985be5b4f64836443c11b51af23bc6",
"assets/assets/images/ic_three.png": "62d34436b0209d9db92ab947f92199d9",
"assets/assets/images/ic_splash_background.png": "08593658e47f21bda8f27526bff545ba",
"assets/assets/images/ic_five.png": "107f7f90bc11bffdd29d1b38d68a903e",
"assets/assets/images/ic_start_rock_paper.png": "7b287ec262427e8fe53de51aeb94fa7f",
"assets/assets/images/ic_rock_paper.jpg": "b4d943c3f4fa3f9276e85b8cf318ed6e",
"assets/assets/images/rock.png": "cd62f3aefbfd06ed89d0bd069daf0c35",
"assets/assets/images/ic_deposit_ether.png": "871a5372fcfdcbb71204751cb431239a",
"assets/assets/images/ic_metamask.png": "2f82a8c06435ba664d803dafa7391ccd",
"assets/assets/images/ic_walletconnect.png": "5b6c4d62df5947f20d446b36331b5f3d",
"assets/assets/images/ic_multi_player.png": "47a08509babf0d37e0b7ca6bb29ff0f2",
"assets/assets/images/ic_popup_menu.svg": "acd46c3fe891ed584b5ddd55ebf89935",
"assets/assets/fonts/anjoman_bold.ttf": "4ebc07fe7b8ab560536bd29c30b0a654",
"assets/assets/fonts/ubuntu_mono_regular.ttf": "c8ca9c5cab2861cf95fc328900e6f1a3",
"assets/assets/fonts/anjoman_regular.ttf": "52d068cdd5f72704828fa4f45f119df4",
"assets/assets/languages/en.json": "903041e9f1aeba56211e4ae1699e2ea0",
"assets/assets/languages/fa.json": "7003f1cb0712265e0f5dc2c712ad37f8",
"assets/FontManifest.json": "8c94d6fa9d3d53290a31aaffaa08d006",
"assets/AssetManifest.json": "1c01db15f317581c2b7b0ce10e6ba891",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c782a03a002e6c47c7ff0397866bd59f",
"main.dart.js_18.part.js": "2d616a6b27e89c4a36f324d86767f5ec",
"main.dart.js_3.part.js": "1f46b3d90d209466c9aeff2ca3eecfce",
"manifest.json": "975fc60a98bab6aae7b2fd35acdc37cd",
"main.dart.js_10.part.js": "6a91a91f84e314ce461444eded23c6b3",
"main.dart.js_6.part.js": "964db0ac2647c74ff4914cfa77c81a80",
"main.dart.js": "508557b4be1b41846860c47652613941",
"main.dart.js_2.part.js": "194e22b30032b79ace780b08e78318aa",
"main.dart.js_19.part.js": "7cd8376253616816c5144eb41aeb05c3",
"index.html": "7fdb29996a40be64b110accf0f922e9d",
"/": "7fdb29996a40be64b110accf0f922e9d",
"main.dart.js_11.part.js": "108354c46cf4399b1808c39b3ca144cc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js_7.part.js": "8ec44f90d3dbf61b15d9758957634488",
"main.dart.js_5.part.js": "9ba59321fff35fc6ad9177b22eadee80",
"main.dart.js_15.part.js": "c1b50bb66e0948c669cffea004b83a33",
"main.dart.js_1.part.js": "ee84e148023feeb50067274bb1660168",
"favicon.png": "02949f0214058f0197d5cab3be729dda",
"main.dart.js_14.part.js": "60a32440ee5c82994a4a050029b3ed28",
"main.dart.js_22.part.js": "415a663cedc76f5273755b63c101991a",
"main.dart.js_12.part.js": "64a3cdcff6024efc9f4ad75dbd1065e9",
"version.json": "3e4cfaa36e7a94a5bb8cdc138d27a645",
"main.dart.js_8.part.js": "7f83d88a50bf0cc237c70ebc45eefa42",
"main.dart.js_9.part.js": "2b5b8ef3341702df0cb0eac7331df6e6",
"main.dart.js_4.part.js": "b4f6eb063b1b620fc97f9a041bedf7e7"
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
