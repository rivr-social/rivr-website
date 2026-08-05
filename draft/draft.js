(function () {
  "use strict";

  var root = document.documentElement;
  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector(".menu-button");
  var nav = document.querySelector(".primary-nav");
  var ticking = false;

  function updateScrollState() {
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    root.style.setProperty("--progress", Math.min(1, window.scrollY / max).toFixed(4));
    if (header) header.classList.toggle("scrolled", window.scrollY > 36);
    ticking = false;
  }

  function requestScrollUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateScrollState);
    }
  }

  updateScrollState();
  addEventListener("scroll", requestScrollUpdate, { passive: true });
  addEventListener("resize", requestScrollUpdate, { passive: true });

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });

    addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
      }
    });
  }

  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    addEventListener("pointermove", function (event) {
      root.style.setProperty("--pointer-x", event.clientX + "px");
      root.style.setProperty("--pointer-y", event.clientY + "px");
    }, { passive: true });

    document.querySelectorAll(".bento-card, .pathway-card, .world-principles article").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width - .5;
        var y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = "perspective(900px) rotateX(" + (-y * 2.5) + "deg) rotateY(" + (x * 2.5) + "deg) translateZ(0)";
      });
      card.addEventListener("pointerleave", function () {
        card.style.transform = "";
      });
    });
  }

  if ("IntersectionObserver" in window) {
    var sections = Array.from(document.querySelectorAll("main section[id]"));
    var links = Array.from(document.querySelectorAll('.primary-nav a[href^="#"]'));
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.toggleAttribute("aria-current", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-42% 0px -48%", threshold: 0 });
    sections.forEach(function (section) { observer.observe(section); });
  }
})();
