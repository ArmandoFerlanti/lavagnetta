if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/lavagnetta/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrato con successo:", registration);
      })
      .catch((error) => {
        console.log("Registrazione del Service Worker fallita:", error);
      });
  });
}
