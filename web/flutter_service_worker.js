'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "3876215848fe7c636c8bae36c1aa7ea0",
"main.dart.js_21.part.js": "c031a2e59cd0af95acaff4ebb499fe90",
"main.dart.js_17.part.js": "50de0ed7b4015f2c2b7cbdfb149cb69c",
"main.dart.js_20.part.js": "1f0a92b672ccecfff4f5c86dac8f4bfb",
"main.dart.js_16.part.js": "11423f110994c5888fd772646efe787b",
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
"main.dart.js_18.part.js": "224df0f84a3acd834769b1da786a6560",
"main.dart.js_3.part.js": "f2a899186bb897b441a4e5ad88f1f467",
"manifest.json": "975fc60a98bab6aae7b2fd35acdc37cd",
"main.dart.js_10.part.js": "ac5dc01168cd5f478d91e70036d9a8a6",
"main.dart.js_6.part.js": "e2b6f15a6d240d656539c392d8dc4dbe",
"main.dart.js": "375cfd06c91040633e2f9628eeb9cc69",
"main.dart.js_2.part.js": "87ee6cfe1b0892e1c7076a2fb351d018",
"main.dart.js_19.part.js": "c6fc40358c37a640f39d90500ee6e1f4",
"index.html": "1e43df33e07699bd6b773db0cf4d83a6",
"/": "1e43df33e07699bd6b773db0cf4d83a6",
"main.dart.js_11.part.js": "6f91548ea2cb0a5c07ee6b273af3fa16",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js_7.part.js": "4a83b8b72a663f25f54a8b4d8f1b12f0",
"main.dart.js_5.part.js": "feeef4a8a6adfd5252a675a33a8943f2",
"main.dart.js_15.part.js": "d560c81be6ab01c9373eddde3f254487",
"main.dart.js_1.part.js": "863656485b8d076e3084aba98a77a1d6",
"favicon.png": "02949f0214058f0197d5cab3be729dda",
"main.dart.js_14.part.js": "8c1a47d3011da1905585f6ac44428ff5",
"main.dart.js_22.part.js": "fa876402c8d0f6c882d2d5ba6f6a8d6d",
"main.dart.js_12.part.js": "f7e3682ddcf7252e7869ab96367a9449",
"version.json": "3e4cfaa36e7a94a5bb8cdc138d27a645",
"main.dart.js_8.part.js": "abefeabb1422c6619234bac1fa965eec",
"main.dart.js_9.part.js": "a2d3d8936c28b20a7ef0f226c93ccf16",
"main.dart.js_4.part.js": "ddd83fb7618b1429efc91c9860b208f5"
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
