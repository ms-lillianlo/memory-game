"use strict";var precacheConfig=[["/memory-game/index.html","fe02e642a077063fd3b3c8a79d86de2f"],["/memory-game/static/css/main.9c8066ba.css","025ee82859c454b9a8ec1eaae3f26073"],["/memory-game/static/js/main.cede6d1a.js","fb2cd42d61744b6720716ad347d9a996"],["/memory-game/static/media/Back-of-card.5b0a138f.svg","5b0a138f68c267ab148ed212cfc830b0"],["/memory-game/static/media/Face-of-card.e0101e59.svg","e0101e5972466cd2d516c056f0799202"],["/memory-game/static/media/brew.a17bc24c.svg","a17bc24c9f809b4d0981bb872b4195e0"],["/memory-game/static/media/candycorn.198f5267.svg","198f5267c406d83c250a1c026e6a7bc6"],["/memory-game/static/media/ghost.71692e72.svg","71692e7223ab41547f3ec7ef09490fd0"],["/memory-game/static/media/hat.f4e157e7.svg","f4e157e7a18d1a1f525d7cfa4bf90004"],["/memory-game/static/media/orb.5ca06d1a.svg","5ca06d1ab2d87cf68b19c5af3e27b6df"],["/memory-game/static/media/pumpkin.01ff9f68.svg","01ff9f68d4ebdb44c857b3f7a903e22b"],["/memory-game/static/media/skull.1638de6e.svg","1638de6ef4b902904f2ecc4179cab421"],["/memory-game/static/media/spider.a79c281f.svg","a79c281f95f4a44f92850b4504563f17"],["/memory-game/static/media/web.893ac841.svg","893ac841899c562b100471ad7ae8da59"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/memory-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});