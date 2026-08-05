(function () {
  "use strict";

  var products = {
    collaborator: {
      number: "01", name: "Collaborator", segment: "Participants + contributors", invitation: "Belong, contribute, and find your next way in.", capability: "Participate + contribute", monthly: 13.06, yearly: 135.72, url: "https://app.rivr.social/products/membership-basic",
      features: ["Community profile", "Events and groups", "Direct messaging", "Badges and project jobs"],
      altitudes: [
        { label: "In your life", title: "The next meaningful thing becomes easier to find.", copy: "Discover a gathering, join a group, meet through shared context, or contribute to work that matters. Collaborator turns Rivr from something you browse into somewhere you can belong.", outcomes: ["Find events and groups", "Build a trusted local profile", "Claim badges and project jobs"] },
        { label: "In community", title: "Participation becomes visible, dependable, and cumulative.", copy: "Your presence, skills, and contributions can connect across groups and projects. Small acts stop disappearing into separate chats and begin adding to shared capacity.", outcomes: ["Carry context between activities", "Turn interest into participation", "Help communities see shared capacity"] },
        { label: "In the world", title: "More people become active nodes in the places they live.", copy: "A healthier network begins with people who can find a real way to participate. Collaborator grows the human layer of a distributed, place-aware social fabric.", outcomes: ["Lower the threshold to civic life", "Strengthen local interdependence", "Connect participation across places"] }
      ],
      stack: ["Linktree Pro $9", "Discord Nitro $9.99"], stackTotal: 18.99, savings: 5.93
    },
    host: {
      number: "02", name: "Host", segment: "Conveners + event makers", invitation: "Turn gatherings into repeatable community infrastructure.", capability: "Ticket + convene", monthly: 24.06, yearly: 222.72, url: "https://app.rivr.social/products/membership-host",
      features: ["Paid event tickets", "RSVPs and waitlists", "Event communication", "Branding and analytics"],
      altitudes: [
        { label: "In your life", title: "Host the experience without carrying every detail by hand.", copy: "Create paid events, manage attendance, communicate with participants, and understand what is working. Your energy can stay with the gathering itself.", outcomes: ["Sell tickets and manage registration", "Coordinate RSVPs and waitlists", "Bring recurring events into one rhythm"] },
        { label: "In community", title: "Gatherings become reliable doors into belonging.", copy: "A workshop, meal, performance, or circle can become more than a one-off event. Rivr connects the gathering to the people, groups, and next actions around it.", outcomes: ["Welcome through real experiences", "Build continuity between gatherings", "Grow community around shared practice"] },
        { label: "In the world", title: "A thousand local gatherings become a living civic network.", copy: "Hosts create the moments where culture is practiced and trust becomes embodied. Connected across Rivr, those moments form distributed infrastructure for learning and collective life.", outcomes: ["Keep culture rooted in place", "Move knowledge through lived experience", "Connect gatherings across regions"] }
      ],
      stack: ["Meetup Standard $14.58", "Eventbrite Pro $15"], stackTotal: 29.58, savings: 5.52
    },
    seller: {
      number: "03", name: "Seller", segment: "Makers + independent sellers", invitation: "Make what you offer easier to discover, trust, and buy.", capability: "Offer + earn", monthly: 24.06, yearly: 207.72, url: "https://app.rivr.social/products/membership-seller",
      features: ["Paid offerings and listings", "Storefront and inventory", "Orders and communication", "Rivr Pay tap-to-pay rail"],
      altitudes: [
        { label: "In your life", title: "Give your work a storefront inside the relationships it serves.", copy: "List products, services, and offerings; manage orders; accept payment online or through Rivr Pay; and build one trusted seller presence.", outcomes: ["Publish paid offerings", "Manage inventory and orders", "Accept online and in-person payment"] },
        { label: "In community", title: "Local exchange becomes easier to see and support.", copy: "Your offering appears alongside the groups, events, projects, and needs that give it context. Commerce becomes one expression of participation in community life.", outcomes: ["Reach people through shared context", "Keep more value circulating nearby", "Turn customers into relationships"] },
        { label: "In the world", title: "Place-based economies become visible to one another.", copy: "When independent sellers can participate in connected local markets, economic life becomes more diverse, resilient, and accountable to the places it affects.", outcomes: ["Strengthen distributed local economies", "Connect values-aligned markets", "Make economic relationships legible"] }
      ],
      stack: ["Shopify Basic $29", "Mailchimp Essentials $13", "Linktree Pro $9"], stackTotal: 51, savings: 26.94
    },
    provider: {
      number: "04", name: "Provider", segment: "Operators who host + sell", invitation: "Bring your experiences, services, and storefront into one presence.", capability: "Host + sell", monthly: 35.06, yearly: 304.72, url: "https://app.rivr.social/products/membership-provider",
      features: ["Everything in Host and Seller", "Paid events and offerings", "Bookings, orders, and audiences", "Rivr Pay tap-to-pay rail"],
      altitudes: [
        { label: "In your life", title: "Run the whole shape of your work without splitting your identity.", copy: "Offer a consultation, sell a product, teach a paid workshop, and gather your people from one coherent home. Provider reflects how independent work actually behaves.", outcomes: ["Combine tickets and offerings", "Unify events, orders, and audiences", "Build one trusted provider identity"] },
        { label: "In community", title: "Your livelihood becomes an anchor for shared activity.", copy: "Providers often hold the connective middle: they teach, serve, make, host, and create reasons for people to return. Rivr helps that ecosystem reinforce itself.", outcomes: ["Connect learning with exchange", "Create multiple doors into participation", "Grow community around your practice"] },
        { label: "In the world", title: "Independent livelihoods become connective infrastructure.", copy: "Networks of viable local providers can carry knowledge, care, and economic activity between communities without every relationship passing through a central platform.", outcomes: ["Support resilient independent work", "Connect practitioners across places", "Distribute knowledge and agency"] }
      ],
      stack: ["Meetup $14.58", "Eventbrite Pro $15", "Shopify $29", "Calendly $10", "Mailchimp $13"], stackTotal: 81.58, savings: 46.52
    },
    organization: {
      number: "05", name: "Organization", segment: "Teams + co-ops + programs", invitation: "Coordinate people, programs, and paid work without flattening the mission.", capability: "Coordinate + pay", monthly: 46.06, yearly: 391.72, url: "https://app.rivr.social/products/membership-organizer",
      features: ["Projects, roles, jobs, and timers", "Contributor payouts + tax reserve", "Subgroup and project cards", "Events, commerce, analytics, API"],
      altitudes: [
        { label: "In your work", title: "Give the organization one operating context instead of ten tools.", copy: "Coordinate roles, events, offerings, and paid project work. Set aside taxes, fund subgroup or project cards, and keep the relationships and purpose behind each transaction visible.", outcomes: ["Pay fixed or hourly project work", "Coordinate roles, programs, and budgets", "Connect Rivr Pay, tax reserves, and cards"] },
        { label: "In community", title: "The organization becomes easier to enter, understand, and share.", copy: "Members can see where decisions happen, what work needs doing, how resources move, and which level of participation is right for them.", outcomes: ["Distribute responsibility clearly", "Make governance and spending legible", "Build memory without bureaucracy"] },
        { label: "In the world", title: "Distinct institutions can cooperate without becoming one institution.", copy: "Organizations retain their identity and operating context while connecting people, opportunity, knowledge, and coordinated work across the wider Rivr network.", outcomes: ["Cooperate across boundaries", "Preserve local authority and context", "Build plural collective infrastructure"] }
      ],
      stack: ["Connecteam 3 hubs $87", "Shopify $29", "Meetup $14.58", "Eventbrite Pro $15"], stackTotal: 145.58, savings: 99.52
    }
  };

  var order = ["collaborator", "host", "seller", "provider", "organization"];
  var selected = "organization";
  var comparisonSelected = "organization";
  var billing = "monthly";
  var activeAltitude = 0;
  var root = document.documentElement;
  var reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

  function money(value) { return "$" + Number(value).toFixed(2); }

  function icon(key) {
    var icons = {
      collaborator: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="30"/></svg>',
      host: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="14" width="44" height="40" rx="8"/><path d="M10 26h44M22 8v12M42 8v12M22 37h20"/></svg>',
      seller: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 25h36l-3 31H17l-3-31Z"/><path d="M23 25c0-9 3-15 9-15s9 6 9 15M23 39h18"/></svg>',
      provider: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="25" cy="31" r="18"/><circle cx="39" cy="31" r="18"/><path d="M32 7v48M8 31h48"/></svg>',
      organization: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 54V19l20-9 20 9v35M7 54h50"/><path d="M22 26h4m12 0h4M22 36h4m12 0h4M29 54V42h6v12"/></svg>'
    };
    return icons[key];
  }

  function currentPrice(product) {
    if (billing === "monthly") return '<span class="product-price"><b>' + money(product.monthly) + '</b><span>/ month</span></span>';
    return '<span class="product-price"><b>' + money(product.yearly) + '</b><span>/ year</span></span>';
  }

  function renderDeck() {
    var deck = document.querySelector("[data-product-deck]");
    if (!deck) return;
    deck.innerHTML = order.map(function (key) {
      var p = products[key];
      return '<button class="product-card product-' + key + '" type="button" data-select-product="' + key + '" aria-pressed="' + (key === selected) + '"><span class="product-card-top"><span class="product-number">' + p.number + '</span><span class="product-icon">' + icon(key) + '</span></span><small>' + p.segment + '</small><strong>' + p.name + '</strong><p>' + p.invitation + '</p>' + currentPrice(p) + '<b>' + (key === selected ? "Selected · explore below ↓" : "Select product →") + '</b></button>';
    }).join("");
  }

  function renderJourney() {
    var target = document.querySelector("[data-product-journey]");
    if (!target) return;
    var p = products[selected];
    target.className = "product-journey liquid-glass product-" + selected;
    target.innerHTML = '<span class="glass-effect"></span><span class="glass-tint"></span><span class="glass-shine"></span><div class="journey-head"><div><small>' + p.capability + ' · three altitudes</small><h3>' + p.name + '</h3></div><p>' + p.invitation + ' Hover to inspect each altitude; open one for the deeper outcome and feature view.</p></div><div class="altitude-grid">' + p.altitudes.map(function (altitude, index) {
      return '<button class="altitude-card" type="button" data-open-altitude="' + index + '"><span>0' + (index + 1) + '</span><small>' + altitude.label + '</small><strong>' + altitude.title + '</strong><p>' + altitude.copy + '</p><b>Open this altitude ↗</b></button>';
    }).join("") + '</div>';
  }

  function dialogMarkup(key, altitudeIndex) {
    var p = products[key];
    var altitude = p.altitudes[altitudeIndex];
    return '<div class="dialog-shell product-' + key + '"><aside class="dialog-aside"><span class="product-icon">' + icon(key) + '</span><small>' + p.segment + '</small><h2 id="dialog-title">' + p.name + '</h2><p>' + p.invitation + '</p>' + currentPrice(p) + '</aside><section class="dialog-main"><div class="dialog-tabs" role="tablist" aria-label="Product altitudes">' + p.altitudes.map(function (item, index) {
      return '<button type="button" role="tab" data-dialog-altitude="' + index + '" aria-selected="' + (index === altitudeIndex) + '"><span>0' + (index + 1) + '</span>' + item.label + '</button>';
    }).join("") + '</div><div class="dialog-panel" role="tabpanel" tabindex="0"><small>' + altitude.label + '</small><h3>' + altitude.title + '</h3><div class="dialog-panel-grid"><p>' + altitude.copy + '</p><ul>' + altitude.outcomes.map(function (item) { return '<li>' + item + '</li>'; }).join("") + '</ul></div></div><footer class="dialog-footer"><button type="button" data-dialog-prev' + (altitudeIndex === 0 ? " disabled" : "") + '>← Previous</button><span>' + (altitudeIndex + 1) + ' / 3</span><button type="button" data-dialog-next' + (altitudeIndex === 2 ? " disabled" : "") + '>Next →</button><a href="' + p.url + '">Choose ' + p.name + ' ↗</a></footer></section></div>';
  }

  function showDialog(index) {
    activeAltitude = Math.max(0, Math.min(2, index));
    var dialog = document.querySelector("[data-product-dialog]");
    var content = document.querySelector("[data-dialog-content]");
    if (!dialog || !content) return;
    dialog.className = "product-dialog product-" + selected;
    content.innerHTML = dialogMarkup(selected, activeAltitude);
    if (!dialog.open) dialog.showModal();
    bindDialog();
  }

  function bindDialog() {
    var content = document.querySelector("[data-dialog-content]");
    if (!content) return;
    content.querySelectorAll("[data-dialog-altitude]").forEach(function (button) { button.addEventListener("click", function () { showDialog(Number(button.dataset.dialogAltitude)); }); });
    var prev = content.querySelector("[data-dialog-prev]");
    var next = content.querySelector("[data-dialog-next]");
    if (prev) prev.addEventListener("click", function () { showDialog(activeAltitude - 1); });
    if (next) next.addEventListener("click", function () { showDialog(activeAltitude + 1); });
  }

  function renderComparison() {
    var target = document.querySelector("[data-comparison]");
    if (!target) return;
    var p = products[comparisonSelected];
    var annual = p.stackTotal * 12 - p.yearly;
    target.innerHTML = '<nav class="compare-tabs" aria-label="Select product comparison">' + order.map(function (key) { return '<button type="button" data-compare-product="' + key + '" aria-pressed="' + (key === comparisonSelected) + '">' + products[key].name + '</button>'; }).join("") + '</nav><div class="compare-summary"><div><small>CONSERVATIVE REPLACEMENT STACK</small><h3>' + p.name + ' vs. assembling the parts</h3></div><div class="savings-number"><span>Modeled monthly savings</span><strong>' + money(p.savings) + '</strong></div></div><div class="compare-equation"><div><small>Modeled stack</small><strong>' + money(p.stackTotal) + '</strong></div><b>−</b><div><small>Rivr ' + p.name + '</small><strong>' + money(p.monthly) + '</strong></div><b>=</b><div class="save"><small>Save each month</small><strong>' + money(p.savings) + '</strong></div></div><div class="stack-chips">' + p.stack.map(function (item) { var parts = item.split(" $"); return '<span><b>' + parts[0] + '</b> · $' + parts[1] + '</span>'; }).join("") + '<span>Yearly Rivr savings · <b>' + money(annual) + '</b></span></div>';
    target.querySelectorAll("[data-compare-product]").forEach(function (button) { button.addEventListener("click", function () { comparisonSelected = button.dataset.compareProduct; renderComparison(); }); });
  }

  var deck = document.querySelector("[data-product-deck]");
  if (deck) deck.addEventListener("click", function (event) {
    var button = event.target.closest("[data-select-product]");
    if (!button) return;
    selected = button.dataset.selectProduct;
    renderDeck();
    renderJourney();
    document.querySelector("[data-product-journey]").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "center" });
  });

  var journey = document.querySelector("[data-product-journey]");
  if (journey) journey.addEventListener("click", function (event) {
    var button = event.target.closest("[data-open-altitude]");
    if (button) showDialog(Number(button.dataset.openAltitude));
  });

  document.querySelectorAll("[data-billing]").forEach(function (button) {
    button.addEventListener("click", function () {
      billing = button.dataset.billing;
      document.querySelectorAll("[data-billing]").forEach(function (item) { item.setAttribute("aria-pressed", String(item.dataset.billing === billing)); });
      renderDeck();
      if (document.querySelector("[data-product-dialog]").open) showDialog(activeAltitude);
    });
  });

  var dialog = document.querySelector("[data-product-dialog]");
  var close = document.querySelector("[data-dialog-close]");
  if (close && dialog) close.addEventListener("click", function () { dialog.close(); });
  if (dialog) dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });

  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector(".menu-button");
  var nav = document.querySelector(".primary-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () { var open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
    nav.addEventListener("click", function (event) { if (event.target.closest("a")) { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); } });
  }

  var flowSection = document.querySelector(".flow-section");
  var flowLines = Array.from(document.querySelectorAll(".flow-line"));
  var flowNodes = Array.from(document.querySelectorAll(".flow-node"));
  var flowOutput = document.querySelector("[data-flow-output]");
  var ticking = false;
  function clamp(value) { return Math.min(1, Math.max(0, value)); }
  function updateFlow() {
    if (!flowSection) return;
    var progress = 1;
    if (!reducedMotion.matches) {
      var rect = flowSection.getBoundingClientRect();
      var travel = Math.max(1, flowSection.offsetHeight - innerHeight);
      progress = clamp(-rect.top / travel);
    }
    flowSection.style.setProperty("--flow-progress", progress.toFixed(4));
    flowLines.forEach(function (line, index) { line.style.setProperty("--line-reveal", clamp((progress - index * .23) / .2).toFixed(4)); });
    flowNodes.forEach(function (node, index) { node.style.setProperty("--node-reveal", clamp((progress - (.08 + index * .2)) / .15).toFixed(4)); });
    if (flowOutput) flowOutput.textContent = Math.round(progress * 100) + "%";
  }
  function updateScroll() {
    var max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    root.style.setProperty("--progress", Math.min(1, scrollY / max).toFixed(4));
    if (header) header.classList.toggle("scrolled", scrollY > 35);
    updateFlow();
    ticking = false;
  }
  function requestUpdate() { if (!ticking) { ticking = true; requestAnimationFrame(updateScroll); } }
  addEventListener("scroll", requestUpdate, { passive: true });
  addEventListener("resize", requestUpdate, { passive: true });
  addEventListener("keydown", function (event) { if (event.key === "Escape" && nav) { nav.classList.remove("open"); if (menuButton) menuButton.setAttribute("aria-expanded", "false"); } });

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (!entry.isIntersecting) return; document.querySelectorAll('.primary-nav a[href^="#"]').forEach(function (link) { link.toggleAttribute("aria-current", link.getAttribute("href") === "#" + entry.target.id); }); }); }, { rootMargin: "-43% 0px -50%", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach(function (section) { sectionObserver.observe(section); });
  }

  renderDeck();
  renderJourney();
  renderComparison();
  updateScroll();
})();
