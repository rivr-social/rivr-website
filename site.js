(function () {
  var root = document.documentElement;
  var savedTheme = localStorage.getItem("rivr-theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) root.classList.add("dark");

  var page = document.body.dataset.page || "home";
  var nav = [
    ["home", "/", "Home"],
    ["features", "/features", "Features"],
    ["membership", "/membership", "Membership"],
    ["about", "/about", "About"],
    ["team", "/team", "Team"],
    ["vision", "/vision", "Vision"],
    ["blog", "/blog", "Blog"],
    ["contact", "/contact", "Contact"]
  ];
  var links = nav.map(function (item) {
    var current = item[0] === page ? " aria-current=\"page\"" : "";
    return "<a href=\"" + item[1] + "\"" + current + ">" + item[2] + "</a>";
  }).join("");

  var header = [
    "<a class=\"skip-link\" href=\"#main\">Skip to content</a>",
    "<header class=\"site-header\"><div class=\"wrap nav-shell\">",
    "<a class=\"brand\" href=\"/\" aria-label=\"Rivr home\"><img class=\"brand-symbol brand-symbol-light\" src=\"/img/brand/rivr-symbol-light.png\" alt=\"Rivr\"><img class=\"brand-symbol brand-symbol-dark\" src=\"/img/brand/rivr-symbol-dark.png\" alt=\"\" aria-hidden=\"true\"></a>",
    "<button class=\"nav-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"primary-nav\">Menu</button>",
    "<nav class=\"nav-links\" id=\"primary-nav\" aria-label=\"Primary\">" + links + "<a class=\"nav-cta\" href=\"https://app.rivr.social\">Get in the Rivr</a></nav>",
    "<button class=\"theme-toggle\" type=\"button\" aria-label=\"Toggle color theme\">◐</button>",
    "</div></header>"
  ].join("");

  var footer = [
    "<footer class=\"site-footer\"><div class=\"wrap\"><div class=\"footer-grid\">",
    "<div><h3>Stay in touch.</h3><p>We can only do it together.</p><a href=\"mailto:admin@rivr.social\">admin@rivr.social</a></div>",
    "<nav class=\"footer-links\" aria-label=\"Explore\"><strong>Explore</strong><a href=\"/vision\">Vision</a><a href=\"/\">Home</a><a href=\"/getstarted\">Get Started</a><a href=\"https://app.rivr.social\">App</a><a href=\"/about\">Context</a><a href=\"/blog\">Blog</a></nav>",
    "<nav class=\"footer-links\" aria-label=\"Legal\"><strong>Legal</strong><a href=\"/privacy\">Privacy</a><a href=\"/terms\">Terms</a><a href=\"/contact\">Contact</a><a href=\"/bioregion-map\">Bioregion Map</a></nav>",
    "</div><div class=\"footer-note\">© " + new Date().getFullYear() + " Rivr Social · Original site design by Kathena Marie Rose · Photography by True to Essence</div></div></footer>"
  ].join("");

  document.querySelectorAll("[data-site-header]").forEach(function (node) { node.innerHTML = header; });
  document.querySelectorAll("[data-site-footer]").forEach(function (node) { node.innerHTML = footer; });

  var mapFrame = document.querySelector("[data-map-frame]");
  if (mapFrame) {
    if (window.RIVR_MAPBOX_EMBED_URL) {
      var iframe = document.createElement("iframe");
      iframe.title = "Rivr Boulder bioregion map";
      iframe.src = window.RIVR_MAPBOX_EMBED_URL;
      iframe.loading = "lazy";
      iframe.allowFullscreen = true;
      mapFrame.appendChild(iframe);
    } else {
      mapFrame.classList.add("map-fallback");
      mapFrame.innerHTML = "<div class=\"glass card\"><h2>Interactive map</h2><p>The map requires its deployment-only Mapbox configuration.</p><a class=\"button\" href=\"/contact\">Contact Rivr</a></div>";
    }
  }

  var menu = document.querySelector(".nav-toggle");
  var navEl = document.querySelector(".nav-links");
  if (menu && navEl) menu.addEventListener("click", function () {
    var open = navEl.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  var theme = document.querySelector(".theme-toggle");
  if (theme) theme.addEventListener("click", function () {
    root.classList.toggle("dark");
    localStorage.setItem("rivr-theme", root.classList.contains("dark") ? "dark" : "light");
  });

  var observer = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("in"); observer.unobserve(entry.target); } });
  }, { threshold: .08 }) : null;
  document.querySelectorAll(".reveal").forEach(function (node) { if (observer) observer.observe(node); else node.classList.add("in"); });

  document.querySelectorAll("form[data-mail-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var subject = data.get("subject") || "Rivr website message";
      var body = [];
      data.forEach(function (value, key) { if (key !== "subject") body.push(key + ": " + value); });
      window.location.href = "mailto:admin@rivr.social?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body.join("\n\n"));
    });
  });
})();
