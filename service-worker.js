/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/sanarchives/2018/03/index.html","12ac70298cbeec1be5b79fee53f6dda9"],["/sanarchives/2018/03/page/2/index.html","61e39c6afd16417927e9a1b8d10f80fd"],["/sanarchives/2018/03/page/3/index.html","cbcdf53fa713eb657e36f594aa5bdc5e"],["/sanarchives/2018/06/index.html","e3a3dc790ad51a24ae88b3e1e86be22c"],["/sanarchives/2018/10/index.html","62a6a7e3d0ffbb65366819c2053821d4"],["/sanarchives/2018/11/index.html","ed437cfc7543c21dc3a244a78bfb58b5"],["/sanarchives/2018/12/index.html","26d8a6e6a44a50e982c7a210b5e02157"],["/sanarchives/2018/index.html","8e0dac33f2bdd7906e711805443cace2"],["/sanarchives/2018/page/2/index.html","5580b4bfe33666f23f3401d4c38b4667"],["/sanarchives/2018/page/3/index.html","b306778908434680339e7387aaea86a6"],["/sanarchives/2018/page/4/index.html","29af904b0890a4acb2210f19f5986ae9"],["/sanarchives/2019/02/index.html","fde04a623b2f97f77a402f483c5df0af"],["/sanarchives/2019/03/index.html","8711cb04a9237d468a96dade019d1c2b"],["/sanarchives/2019/04/index.html","194bd2386f6ed534f3249a20cc7b50cc"],["/sanarchives/2019/06/index.html","bf4488ba94cf2f827932f7edf146918a"],["/sanarchives/2019/index.html","cb72a673253f49af26475c242d40b593"],["/sanarchives/2019/page/2/index.html","061f31840d38da445a9a6182e189c96e"],["/sanarchives/2020/01/index.html","27c19ab7f68d8cc544580bf8fba62cad"],["/sanarchives/2020/05/index.html","3af20ad6ee723744838738d95b37d25f"],["/sanarchives/2020/07/index.html","a3871b76c9a1b13877739f1554746aac"],["/sanarchives/2020/09/index.html","d06a69d5a7e64e49bbbf50df2804137a"],["/sanarchives/2020/index.html","4ac8cb5a7aeb6b5a6068109aad8845b5"],["/sanarchives/2020/page/2/index.html","4c7bed4947cc7aed05754c1930ff045d"],["/sanarchives/2021/01/index.html","d0c933e4aeb3371bd64f06ede28121f3"],["/sanarchives/2021/02/index.html","4ecf4bdbce53d5889bdfe89050c6d2c5"],["/sanarchives/2021/04/index.html","62a3ed9ffaac7a6fe0b3820580920619"],["/sanarchives/2021/index.html","c72f17c635c48a507dd409c09c32dcb4"],["/sanarchives/index.html","da9f4c92641a5b58962724c38da77167"],["/sanarchives/page/2/index.html","e90fa60ae585c0f17f76c46e4f7af32e"],["/sanarchives/page/3/index.html","edac60c16dab80356a3e07c5029ee58b"],["/sanarchives/page/4/index.html","23f95b0ec340d4e31c15656c686d37d1"],["/sanarchives/page/5/index.html","e5d4be51c8344f3e7bc75b8e021ffd72"],["/sanarchives/page/6/index.html","e72eb8eebc2898d20c519a64def11123"],["/sanarchives/page/7/index.html","76ee9641a2bca15cdfb4b614ef8b43e8"],["/sanarchives/page/8/index.html","777a309d5f6d7c2e6a6d8d736cce13c7"],["/sancategories/doc/index.html","ac69f1ff8f8f240722308a9390bda5ab"],["/sancategories/practice/index.html","50d0a303ffb7f3c9965beaa5ad79c7d8"],["/sancategories/practice/page/2/index.html","e24900600d526fbb5269459b9fa88df0"],["/sancategories/practice/page/3/index.html","4567aa04603a50dd7ec8b676abe96768"],["/sancategories/practice/page/4/index.html","b42e29b481e769b989404621a7355331"],["/sancategories/tutorial/index.html","9fa646f6d4836beb4c0bebdcc751dd12"],["/sancategories/tutorial/page/2/index.html","4f86516f9b6056726147eb3b9a384e69"],["/sancategories/tutorial/page/3/index.html","ca982d08ef879ecb1b7f99d6816aa242"],["/sancategories/tutorial/page/4/index.html","c9056c54da239f663688c15068103151"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","a69acb7758fb6586f505f007d960da3b"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","6baf32c477400cd6ae8a832d3b0f9afb"],["/sandoc/main-members/index.html","6a6664586a6be57cd2a40a47c404d1f6"],["/sanen/doc/api/index.html","1445fdd5c84150da967329afd1b23fb0"],["/sanen/doc/main-members/index.html","c2361c2f4680332568d87c9abe46d74f"],["/sanen/example/index.html","fc915a14a502e26089ccc557fd7f63f7"],["/sanen/index.html","3d06453d3c5111f45100906dc8a7c1ad"],["/sanen/practice/array-deep-updates-trigger-view/index.html","8edf6c76e14e5d3a2d81a52b8dd17976"],["/sanen/practice/auto-camel/index.html","87a876c68f8dff1281f87e30924c0d85"],["/sanen/practice/can-we-use-dom/index.html","27b67899cf303096d4d801ff1296bc61"],["/sanen/practice/child-to-grandparent/index.html","9467e65be6b4705f1f95a0c864de9f8d"],["/sanen/practice/child-to-parent/index.html","f56396a58903063e6da3c7a473e15494"],["/sanen/practice/data-invalid/index.html","922cfb6cb4bef4965db567f99ea7705c"],["/sanen/practice/data-valid/index.html","f37b35f5b89b7ef84e56658ae8f9f4b9"],["/sanen/practice/dynamic-parent-child/index.html","52abe828961dcb2515227d86e0a46e66"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","810850000950e6342cc15976cbdfe103"],["/sanen/practice/index.html","643765f08fc27ceec09099fd5797b0d4"],["/sanen/practice/parent-to-child/index.html","2e50fd96155e8e1858351729b8a24ead"],["/sanen/practice/position-absolute-dom/index.html","76f4d698b0c060f6a534d610dcc16d21"],["/sanen/practice/question-and-answer/index.html","376fcaaef3037c28ff54474c4aee8d14"],["/sanen/practice/san-router-spa/index.html","3d2d1e062f851349854716078dd26b69"],["/sanen/practice/san-store-spa/index.html","3d463af63c22d3e45e8f207877e9412c"],["/sanen/practice/traverse-object/index.html","1b48be1bb37fcd08e35085b12abac42d"],["/sanen/tutorial/background/index.html","c4c75068d71ecc52a73a042fe605d1d5"],["/sanen/tutorial/component/index.html","26cec8bc6416d1bd3aba5842c9f7c642"],["/sanen/tutorial/data-checking/index.html","5c25309a51060c239a91a601c0759ac6"],["/sanen/tutorial/data-method/index.html","5a3641c6daf38f2ce7db7fd2d443f079"],["/sanen/tutorial/event/index.html","9b85a45b41d906005181b8b075e5db53"],["/sanen/tutorial/for/index.html","5ef45105c87d7e51e252f644be9843ae"],["/sanen/tutorial/form/index.html","5f6b085df2d973f56af6142fa09041b8"],["/sanen/tutorial/if/index.html","09ac952d6a447a1a3bf4bc9ac51af76d"],["/sanen/tutorial/reverse-flag/index.html","e880f027396fe79ef075ac1f579f5a1c"],["/sanen/tutorial/reverse/index.html","d775cb0044ef0573b3500c9775b94cff"],["/sanen/tutorial/setup/index.html","7e3cae94ecbadd3288fc964e0a33c107"],["/sanen/tutorial/slot/index.html","a4cfbcc70ec8923ce97834777e4272be"],["/sanen/tutorial/ssr-before-3.8/index.html","64c904916a6577126570e650e57caf34"],["/sanen/tutorial/ssr/index.html","cc301f03d80e1d85a13738e52087b459"],["/sanen/tutorial/start/index.html","c50526166a821f274309bd87ef2777b8"],["/sanen/tutorial/style/index.html","fbfdc43c1346c0ec3acf8c69fe90feb1"],["/sanen/tutorial/template/index.html","00802c7f6eff2f36dae5f946d121edf7"],["/sanen/tutorial/transition/index.html","b140d8e0eeae0aa08d1f984cf95c3880"],["/sanexample/index.html","2072defa05e30877423377ee0cd99019"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/discussion.svg","72f77ec5ba8e59c9c2b00f0e16e7c6a3"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","a42f7cf9b1dd363efe19ddf6cbcc11c2"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","31cff8d609046218682fe0cc1ecd28e0"],["/sanjs/anime.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","eeaf47f0de9c0e891705805a70138616"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","5bcca379a7287b02221511565749cdf1"],["/sanpage/3/index.html","1876372497e9ed1eb791a1eb3cbf0971"],["/sanpage/4/index.html","6bce50077ef5b949d8094870ce123636"],["/sanpage/5/index.html","c039afce22bbcd81676fd7f722a2f94f"],["/sanpage/6/index.html","ac032a081982f6cdb1e805cec5b4cec7"],["/sanpage/7/index.html","e702059d4456cb843c216238b585dddf"],["/sanpage/8/index.html","bb02e2fa66b29d9aaa7ba1c38ec1af55"],["/sanpractice/array-deep-updates-trigger-view/index.html","9bf6a7dac3094e618bd8024ee45963bd"],["/sanpractice/auto-camel/index.html","192d3c28506573ea7594a92092ab893a"],["/sanpractice/can-we-use-dom/index.html","89f6747e1046d3d79e85073761e2ac83"],["/sanpractice/child-to-grandparent/index.html","dddb37acfd4b1960b6b170c9ac6a0966"],["/sanpractice/child-to-parent/index.html","e70a229fb176a4102f46d01944c02c24"],["/sanpractice/data-invalid/index.html","c37f9ee9b6dbf132787d5d02df47a226"],["/sanpractice/data-valid/index.html","d887d509ddb1952dd8dbd55a70cf968c"],["/sanpractice/dynamic-parent-child/index.html","f74975063e83d42bcb3f1a9cf481bbdb"],["/sanpractice/how-to-show-or-hide-an-element/index.html","796facc79a993764fc8852138cb7b98c"],["/sanpractice/ie-compatibility/index.html","1501b8ba568fbabf4def3fa0da6e0d1b"],["/sanpractice/index.html","e54fa4301cf16b3c3bed8994a7b52f03"],["/sanpractice/parent-to-child/index.html","24a9a597fa96d0fb8a55668a2a265af5"],["/sanpractice/position-absolute-dom/index.html","0bb905ef29574458827317c8367d1dc1"],["/sanpractice/question-and-answer/index.html","64614a9057a348a038f8d7971d436aa5"],["/sanpractice/san-router-spa/index.html","4650f44d8c49e83d932a36476086b9ee"],["/sanpractice/san-store-spa/index.html","c3b8c360e5ea2334209d9d5ed7d69b62"],["/sanpractice/traverse-object/index.html","065d04591a5798c625df19cc8f48bdcb"],["/santutorial/background/index.html","9952e9131aa05b3c5ad7b2e07efb32c4"],["/santutorial/component/index.html","f021122719a2e35b869a53c6e966e5d1"],["/santutorial/data-checking/index.html","37f3ea0ec4748cd66bab50eb386c11f5"],["/santutorial/data-method/index.html","fe3bdd0e58bb1bead4f9ec117b6dbfc6"],["/santutorial/event/index.html","31619182907f45ddc250bd56aee93260"],["/santutorial/for/index.html","3d07de141ff378c2551f64a44ba7ee9d"],["/santutorial/form/index.html","0085516573c2f15212609e55bc8af5bb"],["/santutorial/if/index.html","4470f3021a0a423265f0ae6141d31bca"],["/santutorial/reverse-flag/index.html","98fc696c30890fa26cfea26bf6e0f67d"],["/santutorial/reverse/index.html","cb0e5c8842e11a4ec3cdacebdb632b91"],["/santutorial/setup/index.html","db9b2ed87b59a8fad14cc0b3f33bbc8c"],["/santutorial/slot/index.html","3832eebc1d7afb40ad31cabd87970dda"],["/santutorial/ssr-before-3.8/index.html","2644c6b032b467b5c0748478e0bde1ff"],["/santutorial/ssr/index.html","43b4309eda63609a7987dec848cbc2bf"],["/santutorial/start/index.html","029c727f7a50a3a368b1bc76886fef54"],["/santutorial/style/index.html","538ae48ce3c36e0ebcd6b43c46d8a998"],["/santutorial/template/index.html","507faed3cc33cb3e6cab09e19e6f05b5"],["/santutorial/transition/index.html","4ef13fc82104195fda7f7eac26231151"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







