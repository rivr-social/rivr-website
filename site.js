(function () {
  "use strict";

  var APP_URL = "https://app.rivr.social";
  var CONTACT_EMAIL = "admin@rivr.social";
  var HEADER_SCROLLED_AFTER_PX = 35;
  var MAP_TITLE = "Rivr Boulder bioregion map";
  var DEFAULT_MAIL_SUBJECT = "Rivr website message";

  var PRIMARY_NAV = [
    { page: "products", href: "/#products", label: "Products" },
    { page: "features", href: "/features", label: "Features" },
    { page: "membership", href: "/membership", label: "Membership" },
    { page: "vision", href: "/vision", label: "Vision" },
    { page: "about", href: "/about", label: "About" },
    { page: "team", href: "/team", label: "Team" },
    { page: "compare", href: "/#compare", label: "Compare" },
    { page: "contact", href: "/contact", label: "Contact" }
  ];

  var FOOTER_GROUPS = [
    { title: "Product", links: [["/#products", "Products"], ["/#flow", "How it flows"], ["/#money", "Rivr Pay"], ["/#compare", "Compare"], ["/features", "Features"], ["/membership", "Membership"]] },
    { title: "Rivr", links: [["/vision", "Vision"], ["/about", "Context"], ["/team", "Team"], ["/blog", "Blog"], ["/contact", "Contact"]] },
    { title: "Explore", links: [["/getstarted", "Get Started"], [APP_URL, "App"], ["/bioregion-map", "Bioregion Map"], ["/concepts/comparison/", "Research"], ["/concepts/", "Design studies"]] },
    { title: "Legal", links: [["/privacy", "Privacy"], ["/terms", "Terms"]] }
  ];

  // The same three displacement filters the Rivr app defines for its glass surfaces.
  var GLASS_FILTERS = [
    { id: "glass-distortion-shell", blur: 2, surfaceScale: 4, specularConstant: 0.9, specularExponent: 80, displacement: 36 },
    { id: "glass-distortion", blur: 3, surfaceScale: 5, specularConstant: 1, specularExponent: 100, displacement: 150 },
    { id: "glass-distortion-strong", blur: 3, surfaceScale: 5, specularConstant: 1, specularExponent: 100, displacement: 80 }
  ];

  var GLASS_EFFECT_CLASS = { shell: "liquid-glass-effect-shell", strong: "liquid-glass-effect-strong", surface: "liquid-glass-distortion" };

  var root = document.documentElement;
  var page = document.body.dataset.page || "";

  function glassLayers(kind) {
    return '<span class="' + GLASS_EFFECT_CLASS[kind] + '"></span><span class="liquid-glass-tint"></span><span class="liquid-glass-shine"></span>';
  }

  function glassFilter(filter) {
    return '<filter id="' + filter.id + '" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence"/>' +
      '<feComponentTransfer in="turbulence" result="mapped"><feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5"/><feFuncG type="gamma" amplitude="0" exponent="1" offset="0"/><feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5"/></feComponentTransfer>' +
      '<feGaussianBlur in="turbulence" stdDeviation="' + filter.blur + '" result="softMap"/>' +
      '<feSpecularLighting in="softMap" surfaceScale="' + filter.surfaceScale + '" specularConstant="' + filter.specularConstant + '" specularExponent="' + filter.specularExponent + '" lighting-color="white" result="specLight"><fePointLight x="-200" y="-200" z="300"/></feSpecularLighting>' +
      '<feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage"/>' +
      '<feDisplacementMap in="SourceGraphic" in2="softMap" scale="' + filter.displacement + '" xChannelSelector="R" yChannelSelector="G"/>' +
      '</filter>';
  }

  function navLink(item) {
    var current = item.page === page ? ' aria-current="page"' : "";
    return '<a href="' + item.href + '"' + current + '>' + item.label + '</a>';
  }

  function headerMarkup() {
    return '<a class="skip-link" href="#main">Skip to content</a>' +
      '<div class="scroll-progress" aria-hidden="true"></div>' +
      '<div class="crystalline-field" aria-hidden="true"><i></i><i></i><i></i></div>' +
      '<svg class="glass-defs" width="0" height="0" aria-hidden="true"><defs>' + GLASS_FILTERS.map(glassFilter).join("") + '</defs></svg>' +
      '<header class="site-header liquid-glass liquid-glass-shell" data-header>' + glassLayers("shell") +
      '<a class="brand" href="/" aria-label="Rivr home"><img src="/assets/rivr-symbol-light.png" alt="" width="42" height="42"><span>Rivr</span></a>' +
      '<button class="menu-button" type="button" aria-expanded="false" aria-controls="primary-nav"><span>Menu</span><i aria-hidden="true"></i></button>' +
      '<nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">' + PRIMARY_NAV.map(navLink).join("") +
      '<a class="nav-cta" href="' + APP_URL + '">Open Rivr <span aria-hidden="true">↗</span></a></nav>' +
      '</header>';
  }

  function footerGroup(group) {
    return '<div class="footer-group"><strong>' + group.title + '</strong>' + group.links.map(function (link) {
      return '<a href="' + link[0] + '">' + link[1] + '</a>';
    }).join("") + '</div>';
  }

  function footerMarkup() {
    return '<footer class="site-footer footer-full">' +
      '<div class="footer-intro"><a class="footer-brand" href="/"><img src="/assets/rivr-symbol-light.png" alt="" width="38" height="38"><span>Rivr</span></a>' +
      '<p>Social coordination infrastructure for people, communities, and places.</p>' +
      '<h3>Stay in touch.</h3><p>We can only do it together.</p><a class="footer-mail" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a></div>' +
      '<nav class="footer-columns" aria-label="Footer navigation">' + FOOTER_GROUPS.map(footerGroup).join("") + '</nav>' +
      '<div class="footer-meta"><span>© ' + new Date().getFullYear() + ' Rivr Social · Original site design by Kathena Marie Rose · Photography by True to Essence</span><span>Flow local. Connect global.</span></div>' +
      '</footer>';
  }

  function mountChrome() {
    document.querySelectorAll("[data-site-header]").forEach(function (node) { node.outerHTML = headerMarkup(); });
    document.querySelectorAll("[data-site-footer]").forEach(function (node) { node.outerHTML = footerMarkup(); });
  }

  function bindMenu() {
    var menuButton = document.querySelector(".menu-button");
    var nav = document.querySelector(".primary-nav");
    if (!menuButton || !nav) return;
    function closeMenu() { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }
    menuButton.addEventListener("click", function () { var open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
    nav.addEventListener("click", function (event) { if (event.target.closest("a")) closeMenu(); });
    addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
  }

  function bindScroll() {
    var header = document.querySelector("[data-header]");
    var ticking = false;
    function update() {
      var max = Math.max(1, root.scrollHeight - innerHeight);
      root.style.setProperty("--progress", Math.min(1, scrollY / max).toFixed(4));
      if (header) header.classList.toggle("scrolled", scrollY > HEADER_SCROLLED_AFTER_PX);
      ticking = false;
    }
    function requestUpdate() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    addEventListener("scroll", requestUpdate, { passive: true });
    addEventListener("resize", requestUpdate, { passive: true });
    update();
  }

  function mountMap() {
    var frame = document.querySelector("[data-map-frame]");
    if (!frame) return;
    if (window.RIVR_MAPBOX_EMBED_URL) {
      var iframe = document.createElement("iframe");
      iframe.title = MAP_TITLE;
      iframe.src = window.RIVR_MAPBOX_EMBED_URL;
      iframe.loading = "lazy";
      iframe.allowFullscreen = true;
      frame.appendChild(iframe);
      return;
    }
    frame.classList.add("map-fallback");
    frame.innerHTML = '<div class="glass-card liquid-glass">' + glassLayers("surface") + '<div><h2>Interactive map</h2><p>The map requires its deployment-only Mapbox configuration.</p><div class="actions center"><a class="button button-primary" href="/contact">Contact Rivr</a></div></div></div>';
  }

  function bindMailForms() {
    document.querySelectorAll("form[data-mail-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var data = new FormData(form);
        var subject = data.get("subject") || DEFAULT_MAIL_SUBJECT;
        var body = [];
        data.forEach(function (value, key) { if (key !== "subject") body.push(key + ": " + value); });
        location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body.join("\n\n"));
      });
    });
  }

  mountChrome();
  bindMenu();
  bindScroll();
  mountMap();
  bindMailForms();
})();
