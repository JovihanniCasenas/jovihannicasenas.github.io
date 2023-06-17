'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "74be76ca0f837b1ce1f16a4eca1034d5",
"assets/AssetManifest.smcbin": "d6393137a6fccf311a802e6a17afdeff",
"assets/assets/audios/background_music.mp3": "c0f48e3bfb1c59f11f24c8bacd922742",
"assets/assets/fonts/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/fonts/TAN-PEARL.ttf": "4ccc044758f61dcb238cf37d293f67cd",
"assets/assets/images/10C.png": "1963502749c024e1590789bab3632bc9",
"assets/assets/images/10D.png": "39ef422e15761450c33f8cb3ee369ebe",
"assets/assets/images/10H.png": "60ab387c8c1c50dd3a75255500218b94",
"assets/assets/images/10S.png": "b208cd7f21ce87cf950936ab6fb3e717",
"assets/assets/images/2C.png": "136dab439961d61f4b9c1f939e07828d",
"assets/assets/images/2D.png": "1451de5d494406e395215276a2489a7c",
"assets/assets/images/2H.png": "ebe434953cb5c82ec5c8e38b8e735489",
"assets/assets/images/2S.png": "33c964ae685ff65233d2ac2c35b96072",
"assets/assets/images/3C.png": "6ed5bf64f008d72e83c67f81468ab7c5",
"assets/assets/images/3D.png": "690d5a477dfe9ed93261bd814c0a40d6",
"assets/assets/images/3H.png": "7278d51dda50bd4b8c8cadb7fe349953",
"assets/assets/images/3S.png": "9638bf9f29919b027765992a81f6d39b",
"assets/assets/images/4C.png": "23c51e0b449e342f8b7f6c8fd57e2137",
"assets/assets/images/4D.png": "89eaac32133444fe40876cb51f697f13",
"assets/assets/images/4H.png": "6695f1d514765572dfe7e5dd0863dfce",
"assets/assets/images/4S.png": "5156259e1f30dece1376dc5695a9a1d4",
"assets/assets/images/5C.png": "3ac88eddd1ac03bfc901de76424b5aba",
"assets/assets/images/5D.png": "24fd440cbb52affc5242a507c9dec4d1",
"assets/assets/images/5H.png": "5457f189cabc0476511c7ed1421b419d",
"assets/assets/images/5S.png": "5ab3d8627d0c4d17c86c73d90817900b",
"assets/assets/images/6C.png": "5c96f40f637a6b2ed34d5e837d81ef7b",
"assets/assets/images/6D.png": "ff1c62992cf49b6164401d1d9f77a20c",
"assets/assets/images/6H.png": "84564e31bf0a0e8bcd5fdd3d4aa12cc3",
"assets/assets/images/6S.png": "c99b0f04000841e5f3db53d64b3f7034",
"assets/assets/images/7C.png": "4808cc416c976dbd5c3cb629a0f102a5",
"assets/assets/images/7D.png": "58d872f063752027e59e15af4d090123",
"assets/assets/images/7H.png": "c8475b530ea9f0970ff829c97f3e7abf",
"assets/assets/images/7S.png": "82d62864ff67ff7b5e20150316d26872",
"assets/assets/images/8C.png": "a46a54d93ff6e543497d205db97fd460",
"assets/assets/images/8D.png": "fcafeaf2d610109aa1916208080ab711",
"assets/assets/images/8H.png": "1e9e59b0d6f684908f3ad7d2fe942a42",
"assets/assets/images/8S.png": "497eed1efa7e554de5b62bc9eb2b5ae6",
"assets/assets/images/9C.png": "4f8d0d8f2ebaeacf99e7134221d6da49",
"assets/assets/images/9D.png": "1d495bb1ebf632dca66a538b61bae19a",
"assets/assets/images/9H.png": "33ab7891b4259ea8d8823a352ef38cdf",
"assets/assets/images/9S.png": "50caac183ef66afe6cdda1d2e3daafda",
"assets/assets/images/AC.png": "17ca9f77b395a41c6d45cbff350573bb",
"assets/assets/images/AD.png": "f37d608fb18056bc4f83737d633c5cf5",
"assets/assets/images/AH.png": "a762540d55018bcf43ffba8b6343c9c9",
"assets/assets/images/AS.png": "e6a6d2f8a350079dcad97e814d3559e7",
"assets/assets/images/gradient_background.png": "dd4419407516f68164e4799afcf1cb1b",
"assets/assets/images/gradient_background_sparkle.png": "0962f012a18996154b7d82408d9d6c95",
"assets/assets/images/gradient_background_sparkle_portrait.png": "138f97d2445ffabbc8fc33b8be50e17c",
"assets/assets/images/JC.png": "1595a3ea21f452c290cf26af7ae53ede",
"assets/assets/images/JD.png": "d5682eb454510b9cdf54beb9c5a0e5f5",
"assets/assets/images/JH.png": "fdf4ffc434ac567c6b77905cb1b11c8a",
"assets/assets/images/JS.png": "89d2c97e62fcaec36c80dbdd725f216f",
"assets/assets/images/KC.png": "aa73cfd0e548d87f4af4a18a8d2c3c8f",
"assets/assets/images/KD.png": "6b5b30c00309e3cfae486f543bc1809a",
"assets/assets/images/KH.png": "3b48ae8207b07a1f9477d7e6135ca211",
"assets/assets/images/KS.png": "e8d1a4cfe9d8dca64733c050e65e9dfd",
"assets/assets/images/neon_card_back.png": "cf2fbefae23d2a3c0e5ddf5cf2d39df6",
"assets/assets/images/QC.png": "d6296277472d7e9594d0ebee0cb82cdc",
"assets/assets/images/QD.png": "6940967da8669e3410fefd3a8a33aad9",
"assets/assets/images/QH.png": "63afa62b47efa84b8b87d3e39ef42bc1",
"assets/assets/images/QS.png": "9026849bcbad6fd92f7c3cb8f70e3cd4",
"assets/FontManifest.json": "de288e4ab9e6bf2b20784fdda07c88ef",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "91f137d9a5cd138c73a8b311f88be9f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c72591c958fb9f6fee03b4b9ab2c1e24",
"/": "c72591c958fb9f6fee03b4b9ab2c1e24",
"main.dart.js": "f67905090e7b6bf308628d6b2a849f73",
"manifest.json": "a6729f0f9df641fe687131cd609f56c8",
"version.json": "a969c1bdfec75fbbea5f4e727dbcd72e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
