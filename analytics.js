/* Rivr public site: Google Analytics 4. One id for the whole site; blank = nothing loads.
   Honours Global Privacy Control and Do Not Track: with either on, nothing is sent. */
(function () {
  var MEASUREMENT_ID = "";
  if (!/^G-[A-Z0-9]{4,20}$/.test(MEASUREMENT_ID)) return;
  if (navigator.globalPrivacyControl === true || navigator.doNotTrack === "1") return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(s);
  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, { anonymize_ip: true });
})();
