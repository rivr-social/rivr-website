(function () {
  "use strict";

  var root = document.documentElement;
  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector(".menu-button");
  var nav = document.querySelector(".primary-nav");
  var flowSection = document.querySelector(".flow-section");
  var flowLines = Array.from(document.querySelectorAll(".flow-line"));
  var flowNodes = Array.from(document.querySelectorAll(".flow-node"));
  var flowOutput = document.querySelector("[data-flow-output]");
  var reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  var ticking = false;

  function clamp(value) {
    return Math.min(1, Math.max(0, value));
  }

  function updateFlowState() {
    if (!flowSection) return;
    var progress = 1;
    if (!reducedMotion.matches) {
      var rect = flowSection.getBoundingClientRect();
      var travel = Math.max(1, flowSection.offsetHeight - innerHeight);
      progress = clamp(-rect.top / travel);
    }

    flowSection.style.setProperty("--flow-progress", progress.toFixed(4));
    flowLines.forEach(function (line, index) {
      var start = index === 0 ? -.18 : index * .25;
      var reveal = clamp((progress - start) / .18);
      line.style.setProperty("--line-reveal", reveal.toFixed(4));
    });
    flowNodes.forEach(function (node, index) {
      var reveal = clamp((progress - (.08 + index * .2)) / .16);
      node.style.setProperty("--node-reveal", reveal.toFixed(4));
    });
    if (flowOutput) flowOutput.textContent = Math.round(progress * 100) + "%";
  }

  function updateScrollState() {
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    root.style.setProperty("--progress", Math.min(1, window.scrollY / max).toFixed(4));
    if (header) header.classList.toggle("scrolled", window.scrollY > 36);
    updateFlowState();
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
