'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/horizon.jpg": "60cf73390847c9b7dbd68107e44793f8",
"assets/assets/images/ghost-of-tsushima.jpeg": "9c74efa0a4d0555724038aebab924b7d",
"assets/assets/images/deathloop.jpg": "a7fbb5e9527c90649b828d9de2249b7c",
"assets/assets/images/rock_paper_banner.jpg": "e17bc660fee63341690bbb9242fede76",
"assets/assets/images/scissors.png": "2ad2ceabe51fe371aabe6b85b8f6428c",
"assets/assets/images/ic_bot.png": "b458bf92e17a5e44d60846c566285388",
"assets/assets/images/cyberpunk.jpeg": "e352e42abea5c05dead5b85b5179fb52",
"assets/assets/images/paper.png": "462828a07192c23a947940a891e45066",
"assets/assets/images/symbols_2.png": "c11dfe1b8bdad10655cae17cddd91967",
"assets/assets/images/ic_splash_logo.png": "02949f0214058f0197d5cab3be729dda",
"assets/assets/images/ic_player.png": "53985be5b4f64836443c11b51af23bc6",
"assets/assets/images/ic_three.png": "62d34436b0209d9db92ab947f92199d9",
"assets/assets/images/ic_splash_background.png": "08593658e47f21bda8f27526bff545ba",
"assets/assets/images/ic_five.png": "107f7f90bc11bffdd29d1b38d68a903e",
"assets/assets/images/symbols_1.png": "25719dae86d40df026359d3b1f7dadd4",
"assets/assets/images/ic_start_rock_paper.png": "7b287ec262427e8fe53de51aeb94fa7f",
"assets/assets/images/spider-man.jpg": "6e682f1d08fcd6441226ee8cfe504223",
"assets/assets/images/the-last-of-us.jpeg": "fc58490a235cc42d1988481363b334ca",
"assets/assets/images/ic_rock_paper.jpg": "b4d943c3f4fa3f9276e85b8cf318ed6e",
"assets/assets/images/rock.png": "cd62f3aefbfd06ed89d0bd069daf0c35",
"assets/assets/images/ic_deposit_ether.png": "871a5372fcfdcbb71204751cb431239a",
"assets/assets/images/ic_metamask.png": "2f82a8c06435ba664d803dafa7391ccd",
"assets/assets/images/ic_walletconnect.png": "5b6c4d62df5947f20d446b36331b5f3d",
"assets/assets/images/ic_multi_player.png": "47a08509babf0d37e0b7ca6bb29ff0f2",
"assets/assets/images/ic_popup_menu.svg": "acd46c3fe891ed584b5ddd55ebf89935",
"assets/assets/google_fonts/WorkSans-Medium.ttf": "afdad9a25d460b4d08f68cab6a4174d0",
"assets/assets/google_fonts/WorkSans-Light.ttf": "b1023033e286ef21672fe03bb922456c",
"assets/assets/google_fonts/OFL.txt": "e3a1cc2721b8b8b106d53b45d4e608c0",
"assets/assets/google_fonts/WorkSans-Regular.ttf": "755318e35560b555cc25ac01888be02a",
"assets/assets/google_fonts/WorkSans-SemiBold.ttf": "46250df8f22a63083a8f7db59efdb2cd",
"assets/assets/fonts/anjoman_bold.ttf": "4ebc07fe7b8ab560536bd29c30b0a654",
"assets/assets/fonts/ubuntu_mono_regular.ttf": "c8ca9c5cab2861cf95fc328900e6f1a3",
"assets/assets/fonts/anjoman_regular.ttf": "52d068cdd5f72704828fa4f45f119df4",
"assets/assets/languages/en.json": "903041e9f1aeba56211e4ae1699e2ea0",
"assets/assets/languages/fa.json": "7003f1cb0712265e0f5dc2c712ad37f8",
"assets/FontManifest.json": "8c94d6fa9d3d53290a31aaffaa08d006",
"assets/AssetManifest.json": "4a558f316a227706b7360afb4a9b1e90",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3974e4cd8c40871eaeec52982e01f7cb",
"main.dart.js_3.part.js": "8efe66a6bb0248653f71623f5ee4f661",
"manifest.json": "53e553af6ea5b2d6625850fa2f8c4204",
"main.dart.js": "95e60bb8c79a17261abf88608677d1aa",
"main.dart.js_2.part.js": "0a284e9070e4e4cfb331f44edc90c5a2",
"index.html": "2b2ed064bd55fbf0f0909f5b094367d4",
"/": "2b2ed064bd55fbf0f0909f5b094367d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js_1.part.js": "f053ee708e703fd23da90c2a907b7827",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"version.json": "30b6983ac1b66faab356bdb5f55d04f1",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_4.part.js": "89d7d40cd03cbe54a6495cb2458a6c42"
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
