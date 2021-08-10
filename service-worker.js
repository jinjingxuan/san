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

var precacheConfig = [["/sanarchives/2018/03/index.html","bec8a3fbe68b5974ee489008e0fa5736"],["/sanarchives/2018/03/page/2/index.html","e06bd62deb053878af2b689c789b4ffa"],["/sanarchives/2018/03/page/3/index.html","4c5f4c51aabc3ef5f53ce17a636df34a"],["/sanarchives/2018/06/index.html","ee37e5a0a4389509f5387c80352b86eb"],["/sanarchives/2018/10/index.html","24ec1d1e6020eaffaba4f4f9753f269a"],["/sanarchives/2018/11/index.html","652cf4129df48a08ea7af2bb76dd3805"],["/sanarchives/2018/12/index.html","19573d8a57be6e55b7245ae7c87f31b7"],["/sanarchives/2018/index.html","2e803b936d6b340bcea1ec4e910a9dc6"],["/sanarchives/2018/page/2/index.html","705446834a8cb9d522048ec060eb5c35"],["/sanarchives/2018/page/3/index.html","e71eef2d436ee1acdb5b69ba098b06db"],["/sanarchives/2018/page/4/index.html","dcdc91b8a499dd084d8750133087ae3e"],["/sanarchives/2019/02/index.html","7dc7afc56bcff5720f530edb7abc1377"],["/sanarchives/2019/03/index.html","4373ff1a4e460a3588d98c24f027da90"],["/sanarchives/2019/04/index.html","329ad9217fed856729eb46b071951f67"],["/sanarchives/2019/06/index.html","87be09092b27ccadd0059b198ed5718a"],["/sanarchives/2019/index.html","4dfc29586070b84153ba371d84f8b32e"],["/sanarchives/2019/page/2/index.html","b7b32bfafc2e45656271831082a31c9b"],["/sanarchives/2020/01/index.html","a3160fb14d01b8c60c17bdbedc85c668"],["/sanarchives/2020/05/index.html","96adad7ace8a58471a331b9ead7caee6"],["/sanarchives/2020/07/index.html","2ce15465dc8382b689f55ee2273f1100"],["/sanarchives/2020/09/index.html","88cc5a129baf2655b38acd00e7f66fdf"],["/sanarchives/2020/index.html","8f452378ba2220680fca0745401885ba"],["/sanarchives/2021/01/index.html","1c48e993b3aa4f142cc34af7e41f0816"],["/sanarchives/2021/02/index.html","29cf2bee2e2878de34880dfd93a122aa"],["/sanarchives/2021/04/index.html","8227ca2b3369c085e042b24bf4a19cac"],["/sanarchives/2021/08/index.html","c7b507a655a60a10c43b3dd1e199e43e"],["/sanarchives/2021/index.html","2cf080420904c37ce908eb5108272a01"],["/sanarchives/index.html","826b22310637859f1e48cb5253850f63"],["/sanarchives/page/2/index.html","72c319177682e00f73dae4ee6ca7cb3b"],["/sanarchives/page/3/index.html","6756e09f38e12f9ddd2e4efc3158167f"],["/sanarchives/page/4/index.html","b0ae29dbcabb4a79848a5f2d1b9743db"],["/sanarchives/page/5/index.html","21c716bd28011772a054b64a0fe420d3"],["/sanarchives/page/6/index.html","9a53a9bf7d2fd27d8f166024b730cb70"],["/sanarchives/page/7/index.html","a8a2433102fd4f7b0920a62d871e4306"],["/sanarchives/page/8/index.html","350dc748e1f0a3ce2d8ec22e0db2f114"],["/sancategories/doc/index.html","cf8b9e39122e645a9a1997591c0739cb"],["/sancategories/practice/index.html","25cc41419a9f6a4696e8291c783b053e"],["/sancategories/practice/page/2/index.html","dccc2f6e7ffbccacada143e06db355b7"],["/sancategories/practice/page/3/index.html","341e552170e7289d43dfaa085a8fd2a7"],["/sancategories/practice/page/4/index.html","4b3e3b7c7264efc51df61d1dec844bd8"],["/sancategories/tutorial/index.html","358b784b754b5890210421010de1c643"],["/sancategories/tutorial/page/2/index.html","819b7a5a72df88b5497aed6cd07ff074"],["/sancategories/tutorial/page/3/index.html","298943d02ab513e26ba6632b21b91a78"],["/sancategories/tutorial/page/4/index.html","9f1224eb17c98419afe29ad44a208aa7"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","a69acb7758fb6586f505f007d960da3b"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","1c7570147dcac782702b5105edb6ebfd"],["/sandoc/main-members/index.html","845120015a61b3be92f0f79b2e614614"],["/sanen/doc/api/index.html","7974384f192ebb2f9d254ba945a02017"],["/sanen/doc/main-members/index.html","aff1d3c35fb4903bc2ae28adbd75dc65"],["/sanen/example/index.html","71d26ca2340c19fcd4df2dee23794bb4"],["/sanen/index.html","7166b29bf450240640784112e2a6760f"],["/sanen/practice/array-deep-updates-trigger-view/index.html","c77de69f4ce4a7ebba097e59345a67db"],["/sanen/practice/auto-camel/index.html","8815b6af3a6b45e710a14dad32910ead"],["/sanen/practice/can-we-use-dom/index.html","1aad02e60277bf14569f15467f61cdac"],["/sanen/practice/child-to-grandparent/index.html","83fb95b4d2fec69b6edb08bf2e49657d"],["/sanen/practice/child-to-parent/index.html","62815423024b2e76fc5c094583e75b1d"],["/sanen/practice/data-invalid/index.html","3fb213b2120c605c78043babec54984c"],["/sanen/practice/data-valid/index.html","1757eddea11b188412e7dccacc41b773"],["/sanen/practice/dynamic-parent-child/index.html","35bc4321534a6be7e1ebefecc07f77bb"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","0fa5c2f01c6b9d35817d6229d8f4a994"],["/sanen/practice/index.html","5fa147c226c17744446fa8660f9a4976"],["/sanen/practice/parent-to-child/index.html","b9f572bb3190e0f5128172781e85ca1c"],["/sanen/practice/position-absolute-dom/index.html","2b39c739431234afcac36efd0b2840bc"],["/sanen/practice/question-and-answer/index.html","72b04381eecbc3d78cb5aa7a3db2ac8c"],["/sanen/practice/san-router-spa/index.html","d30a5d83b5440652c14c4fb60b9c1da8"],["/sanen/practice/san-store-spa/index.html","f9a3f061179ee69ef3f047b02fdff4ac"],["/sanen/practice/traverse-object/index.html","7a66344c0dbfc059c5b0cd24df453a66"],["/sanen/tutorial/background/index.html","0070999421791bd6d3a79841d124d744"],["/sanen/tutorial/component/index.html","cf3934abc05913f9aae7884e455e15f5"],["/sanen/tutorial/data-checking/index.html","321287067d0c662dd560b897d4298492"],["/sanen/tutorial/data-method/index.html","5e06bae04eac3f8d13689a528a663886"],["/sanen/tutorial/event/index.html","5a12d1e6027ca62bf62a9bfdf4560ea5"],["/sanen/tutorial/for/index.html","664a8f3f102946e787bf652c3b586f0e"],["/sanen/tutorial/form/index.html","8afdf32560bf990df331be54f3070420"],["/sanen/tutorial/if/index.html","0f699ea846cafb46888965375664a2ba"],["/sanen/tutorial/reverse-flag/index.html","f1050acb8c86ea9cb842ea7d016c47fc"],["/sanen/tutorial/reverse/index.html","cfaddd9eb3d50ba9c0a657b54b2a1bba"],["/sanen/tutorial/setup/index.html","8eca3706ae5c522cef055f1028ebc51f"],["/sanen/tutorial/slot/index.html","e1a8130d56170ef7a43ee24d320fd36d"],["/sanen/tutorial/ssr-before-3.8/index.html","5a10dac5e4442fa0d5edcf7e10e09b96"],["/sanen/tutorial/ssr/index.html","6e0adbd26e49f47b97f85b77278a33de"],["/sanen/tutorial/start/index.html","106baf6b7dd993195fcd604a985bf27b"],["/sanen/tutorial/style/index.html","eef927ea0c7c4415c12e40de93968e10"],["/sanen/tutorial/template/index.html","f03d745c2fbf5f9920fcb140b39bc434"],["/sanen/tutorial/transition/index.html","5785291a0541b711f695eb56a86fdbfb"],["/sanexample/index.html","707a83003e9736fd724f518bff6cc432"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/discussion.svg","72f77ec5ba8e59c9c2b00f0e16e7c6a3"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","9af0f2266923f3bdf107f717115b1ce7"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","81f38492ba8d791cf582c427a6405641"],["/sanjs/anime.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","eeaf47f0de9c0e891705805a70138616"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","eaa41b6419e80aed6105fbf32948630f"],["/sanpage/3/index.html","c09739cfbdf6e2aef7c8a0b60201146d"],["/sanpage/4/index.html","d59bea717b0c31c8c2a4e6ce2e141c7e"],["/sanpage/5/index.html","c565be612562853a64e9c84d50ada99a"],["/sanpage/6/index.html","a379f0d667db1901d683b711e81ff955"],["/sanpage/7/index.html","47b1ff8d05f2a5cd66a118301c913af9"],["/sanpage/8/index.html","0628c48ff7be200f0c87e67648e636c9"],["/sanpractice/array-deep-updates-trigger-view/index.html","69265465c37b04bca39786d1421833ae"],["/sanpractice/auto-camel/index.html","bdcf264405e3c660a1178a17e69e3d8d"],["/sanpractice/can-we-use-dom/index.html","974079efc38a5612ff24118d174b1662"],["/sanpractice/child-to-grandparent/index.html","60192afd79202e6311190c0642bc128f"],["/sanpractice/child-to-parent/index.html","9c38e3c877835916525f7ced84da1c40"],["/sanpractice/data-invalid/index.html","e592f8465e2a19d39a92c2abd83cfe2d"],["/sanpractice/data-valid/index.html","43f9dffebefcba092536e0157f3d9e40"],["/sanpractice/dynamic-parent-child/index.html","c02c319ffb16e768ed96d6971a2c5987"],["/sanpractice/how-to-show-or-hide-an-element/index.html","06c0641d29b939ffbcdcfb62e9b3f79b"],["/sanpractice/ie-compatibility/index.html","a5b1e1ed7ab9aadd78e5ab1dc4d1fe7b"],["/sanpractice/index.html","869c6f101ff12e0a0da053f9222062fe"],["/sanpractice/parent-to-child/index.html","ba7120fb365fb680de116ce945c8f107"],["/sanpractice/position-absolute-dom/index.html","dc606c20554da899ef9a068d884f7f31"],["/sanpractice/question-and-answer/index.html","d5a84d640aca6e025e98c038ec45b54b"],["/sanpractice/san-router-spa/index.html","bb95b141c1bfcff481cdeb72153c5e2e"],["/sanpractice/san-store-spa/index.html","6d8ad69ebaf2965d3f46252cb167e196"],["/sanpractice/traverse-object/index.html","30e98b76a26075898930d4f23acc8b45"],["/santutorial/background/index.html","922c8a75e395d7ccfcef7b21547936b5"],["/santutorial/component/index.html","c6cbc6cf7a216b9f922886be42a61d31"],["/santutorial/data-checking/index.html","ff4ccf568bd9b501dcf37838f0a635db"],["/santutorial/data-method/index.html","324f637e0b98d2a772ee9bba6d52e42b"],["/santutorial/event/index.html","61da148990a5524a8eb825f4984166af"],["/santutorial/for/index.html","dd00f44ffa0f985312f221df29f3f348"],["/santutorial/form/index.html","1d021caddd5bc06941395e1a147a35f5"],["/santutorial/if/index.html","c6eb8dfb7ffba9b2214fed613a5d233d"],["/santutorial/reverse-flag/index.html","ba99c790cedb68073129878993ad0ede"],["/santutorial/reverse/index.html","b66336d8a11885e786432534259065a8"],["/santutorial/setup/index.html","b7042fd16b19cc833f8036ec4b424da6"],["/santutorial/slot/index.html","812ecbfa9d37a30ff5e4099f599027b1"],["/santutorial/ssr-before-3.8/index.html","804df6813ba79823b7ac43c350b8f999"],["/santutorial/ssr/index.html","1b2c58246e5adb54b2ffa43e9d02467e"],["/santutorial/start/index.html","22fc91acda8b93c8c132eadf4f2fbd26"],["/santutorial/style/index.html","1f5bd32b7ef462c2ad06455d48844d67"],["/santutorial/template/index.html","1f9395e7a0feca0273975746ed234ac0"],["/santutorial/transition/index.html","beabf29f77d7b49ac12a7666a14a96f1"]];
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







