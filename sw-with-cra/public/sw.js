/* eslint-disable no-restricted-globals */
// This code executes in its own worker or thread
self.addEventListener("install", (e) => {
  console.log("service worker installed");
});
self.addEventListener("activate", (e) => {
  console.log("service worker activated");
});

self.addEventListener("offline", (e) => {
  console.log("no internet connection", e);
});
