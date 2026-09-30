(function () {
  "use strict";

  var lens = document.querySelector("[data-lens]");
  var reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

  if (lens && !reducedMotion.matches) {
    lens.addEventListener("pointermove", function (event) {
      var rect = lens.getBoundingClientRect();
      var x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      var y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
      lens.style.setProperty("--lens-x", x.toFixed(2) + "%");
      lens.style.setProperty("--lens-y", y.toFixed(2) + "%");
    });
    lens.addEventListener("pointerleave", function () {
      lens.style.setProperty("--lens-x", "50%");
      lens.style.setProperty("--lens-y", "50%");
    });
  }

  document.querySelectorAll("[data-primitive]").forEach(function (card) {
    var button = card.querySelector("button");
    if (!button) return;
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", function () {
      var willOpen = !card.classList.contains("open");
      document.querySelectorAll("[data-primitive].open").forEach(function (openCard) {
        openCard.classList.remove("open");
        var openButton = openCard.querySelector("button");
        if (openButton) openButton.setAttribute("aria-expanded", "false");
      });
      card.classList.toggle("open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
    });
  });

  document.querySelectorAll(".healing-card").forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      document.querySelectorAll(".healing-card[open]").forEach(function (openItem) {
        if (openItem !== item) openItem.removeAttribute("open");
      });
    });
  });
})();
