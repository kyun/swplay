/* eslint-disable no-restricted-globals */
self.addEventListener("install", (e) => {
  console.log("service worker installed");
});
self.addEventListener("activate", (e) => {
  console.log("service worker activated");
});

self.addEventListener("offline", (e) => {
  console.log("no internet connection", e);
});
