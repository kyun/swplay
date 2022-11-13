import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("offline", (e) => {
      console.log("no internet connection", e);
    });
  }, []);
  return <Component {...pageProps} />;
}

// register service worker in nextjs _app.tsx
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}

export default MyApp;
