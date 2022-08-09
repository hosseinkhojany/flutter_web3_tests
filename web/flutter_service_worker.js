'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "7e30cb3897191634b242a96a16d522d1",
"main.dart.js_21.part.js": "80a8725048699f950254838e938677ce",
"main.dart.js_17.part.js": "11ab50bb8a788124ab79d808e682dc3f",
"main.dart.js_20.part.js": "38a65b3ed228727ff0ea1fa3aa9fc761",
"main.dart.js_16.part.js": "c786469ad72529244b48876b7b486496",
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
"main.dart.js_18.part.js": "7e7f891ae58e0b3a8f8bb5b818494f0f",
"main.dart.js_3.part.js": "b44d3d13cf42945fbfc231ecdc5ab3cb",
"manifest.json": "975fc60a98bab6aae7b2fd35acdc37cd",
"main.dart.js_10.part.js": "a90deec46018ecba2f312f0ada598495",
"main.dart.js_6.part.js": "3d1469da10a47b7e4a12c2b4e62c1802",
"main.dart.js": "38307bafb20af55f9bb65c9fb6322836",
"main.dart.js_2.part.js": "1e65d6334b1c7327d866138187c0f2f9",
"main.dart.js_19.part.js": "55dd357d8910d7fe19072de15d849996",
"index.html": "9d1ed706c60a11e94fb7998e2191f42b",
"/": "9d1ed706c60a11e94fb7998e2191f42b",
"main.dart.js_11.part.js": "7ae52ad4c4f1f9e83b77e012e3d70e96",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js_7.part.js": "7a6a74c036c065be8620d4cac9b8aaeb",
"main.dart.js_5.part.js": "9d60ffffe36028cebd25b322dd50d6a2",
"main.dart.js_15.part.js": "812537a0619aeab33a8309bdb786e320",
"main.dart.js_1.part.js": "041e5c3749172f55e2f32cc295f03ea7",
"favicon.png": "e268003702fa54c58ee8b8f6fcadaaf0",
"main.dart.js_14.part.js": "cbf660c48cc32fad90d92f44fb2269d0",
"main.dart.js_22.part.js": "4d1f75a7df81acc7a0417f005d9814f9",
"main.dart.js_12.part.js": "92de6471f9de3bba8852bcb04e47f35e",
"version.json": "3e4cfaa36e7a94a5bb8cdc138d27a645",
"main.dart.js_8.part.js": "57b06ce1a7ee17512b0f860e0da61e45",
"main.dart.js_9.part.js": "045865d84eeaa5680828e382ec0f41b0",
"main.dart.js_4.part.js": "bb8d5afb5a78d177ab87218038603390"
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
