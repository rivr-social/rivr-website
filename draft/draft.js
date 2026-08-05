(function () {
  "use strict";

  var products = {
    collaborator: {
      number: "01", name: "Collaborator", segment: "Participants + contributors", invitation: "Find where you belong—and a real way to contribute.", capability: "Participate + contribute", monthly: 13.06, yearly: 135.72, url: "https://app.rivr.social/products/membership-basic",
      features: ["Community profile", "Events and groups", "Direct messaging", "Badges and project jobs"],
      altitudes: [
        { label: "For you", title: "Find your people. Find your part.", copy: "Discover events, groups, and gigs that match what you care about—then turn interest into contribution.", outcomes: ["See what fits", "Join with context", "Build a trusted record"] },
        { label: "In community", title: "Make every contribution count.", copy: "Your skills and follow-through become visible across the groups and projects you join.", outcomes: ["Carry trust forward", "Reveal shared capacity", "Make belonging active"] },
        { label: "Across the network", title: "Turn participation into local power.", copy: "Give more people a real path into civic and economic life, wherever they live.", outcomes: ["Lower the barrier to action", "Strengthen interdependence", "Connect places without flattening them"] }
      ],
      stack: [{ name: "Facebook", cost: "$0 base" }, { name: "Instagram", cost: "$0 base" }, { name: "LinkedIn", cost: "$0 basic" }, { name: "Meetup", cost: "$0 member" }], stackTotal: 0, savings: null
    },
    host: {
      number: "02", name: "Host", segment: "Conveners + event makers", invitation: "Fill the room. Keep the community growing after it empties.", capability: "Ticket + convene", monthly: 24.06, yearly: 222.72, url: "https://app.rivr.social/products/membership-host",
      features: ["Paid event tickets", "RSVPs and waitlists", "Event communication", "Branding and analytics"],
      altitudes: [
        { label: "For your event", title: "Fill the room—and build beyond it.", copy: "Ticket, invite, manage, and follow up from one place.", outcomes: ["Sell tickets", "Manage the room", "Bring people back"] },
        { label: "In community", title: "Turn gatherings into belonging.", copy: "Connect every event to the people, groups, and next actions around it.", outcomes: ["Welcome newcomers", "Create continuity", "Grow shared practice"] },
        { label: "Across the network", title: "Let local culture travel.", copy: "Link gatherings across places without stripping away what makes each one local.", outcomes: ["Root culture in place", "Move knowledge through experience", "Connect hosts across regions"] }
      ],
      stack: [{ name: "Luma Plus", cost: "$59" }, { name: "Meetup Standard", cost: "$14.58" }, { name: "Facebook + Instagram", cost: "$0 base" }], stackTotal: 73.58, savings: 49.52
    },
    seller: {
      number: "03", name: "Seller", segment: "Makers + independent sellers", invitation: "Put your offering where trust and buyers already meet.", capability: "Offer + earn", monthly: 24.06, yearly: 207.72, url: "https://app.rivr.social/products/membership-seller",
      features: ["Paid offerings and listings", "Storefront and inventory", "Orders and communication", "Rivr Pay tap-to-pay rail"],
      altitudes: [
        { label: "For your work", title: "Sell where trust already exists.", copy: "Publish offerings, manage orders, and get paid online or through Rivr Pay.", outcomes: ["Open your storefront", "Manage every order", "Accept payment anywhere"] },
        { label: "In community", title: "Keep more value moving nearby.", copy: "Put your offering beside the people, projects, and needs that give it meaning.", outcomes: ["Reach through shared context", "Build durable customers", "Strengthen local exchange"] },
        { label: "Across the network", title: "Connect resilient local markets.", copy: "Help independent sellers grow across places without surrendering their relationships.", outcomes: ["Link values-aligned markets", "Diversify local economies", "Keep commerce accountable"] }
      ],
      stack: [{ name: "Square Plus", cost: "$49" }, { name: "Etsy", cost: "sales fees" }, { name: "Instagram", cost: "$0 base" }], stackTotal: 49, savings: 24.94
    },
    provider: {
      number: "04", name: "Provider", segment: "Operators who host + sell", invitation: "Run events, services, and sales from one trusted presence.", capability: "Host + sell", monthly: 35.06, yearly: 304.72, url: "https://app.rivr.social/products/membership-provider",
      features: ["Everything in Host and Seller", "Paid events and offerings", "Bookings, orders, and audiences", "Rivr Pay tap-to-pay rail"],
      altitudes: [
        { label: "For your practice", title: "Run your whole practice as one thing.", copy: "Host, book, sell, and get paid without splitting your identity or audience.", outcomes: ["Combine events and offers", "Unify bookings and orders", "Build one trusted presence"] },
        { label: "In community", title: "Become a reliable community anchor.", copy: "Give people more ways to learn, gather, buy, and return.", outcomes: ["Connect learning and exchange", "Create more ways in", "Grow around your practice"] },
        { label: "Across the network", title: "Make independent work infrastructure.", copy: "Carry knowledge, care, and economic life between communities without a central gatekeeper.", outcomes: ["Support viable practices", "Connect providers across places", "Distribute knowledge and agency"] }
      ],
      stack: [{ name: "Square Plus", cost: "$49" }, { name: "Luma Plus", cost: "$59" }, { name: "Etsy + Instagram", cost: "fees + ads" }], stackTotal: 108, savings: 72.94
    },
    organization: {
      number: "05", name: "Organization", segment: "Teams + co-ops + programs", invitation: "Coordinate the mission, the money, and the work in one place.", capability: "Coordinate + pay", monthly: 46.06, yearly: 391.72, url: "https://app.rivr.social/products/membership-organizer",
      features: ["Projects, roles, docs, and governance", "Contributor payouts + tax reserve", "Subgroup treasuries and project cards", "Events, commerce, analytics, API"],
      altitudes: [
        { label: "For your organization", title: "Run the mission from one context.", copy: "Coordinate roles, projects, docs, governance, treasuries, payouts, events, offerings, and project cards.", outcomes: ["Keep knowledge and decisions together", "Assign and pay the work", "Move money with purpose"] },
        { label: "In community", title: "Make responsibility and money legible.", copy: "Let members see what needs doing, how decisions happen, and where resources move.", outcomes: ["Distribute responsibility", "Clarify governance", "Build durable memory"] },
        { label: "Across the network", title: "Collaborate without merging.", copy: "Work across organizations while each one keeps its identity, authority, and context.", outcomes: ["Coordinate across boundaries", "Preserve local agency", "Build plural infrastructure"] }
      ],
      stack: [{ name: "Asana · 5 seats", cost: "$54.95" }, { name: "Slack · 5 seats", cost: "$36.25" }, { name: "Square Payroll · 5", cost: "$65" }, { name: "Square Plus", cost: "$49" }, { name: "Shopify", cost: "$29" }, { name: "Luma Plus", cost: "$59" }], stackTotal: 293.20, savings: 247.14
    }
  };

  var comparisonMatrices = {
    collaborator: {
      columns: ["Rivr", "Facebook", "Instagram", "LinkedIn", "Meetup"],
      rows: [
        ["Portable identity", "yes", "yes", "yes", "yes", "some"],
        ["Groups + local events", "yes", "yes", "some", "some", "yes"],
        ["Messaging", "yes", "yes", "yes", "yes", "some"],
        ["Gigs + project roles", "yes", "some", "some", "yes", "no"],
        ["Contribution record", "yes", "no", "no", "some", "no"],
        ["Cross-org context", "yes", "no", "no", "no", "no"]
      ]
    },
    host: {
      columns: ["Rivr", "Luma", "Eventbrite", "Facebook", "Meetup"],
      rows: [
        ["Paid tickets", "yes", "yes", "yes", "some", "some"],
        ["RSVPs + check-in", "yes", "yes", "yes", "some", "yes"],
        ["Attendee messaging", "yes", "yes", "yes", "yes", "some"],
        ["Recurring community", "yes", "some", "some", "yes", "yes"],
        ["Public discovery", "yes", "some", "yes", "yes", "yes"],
        ["Projects after the event", "yes", "no", "no", "no", "no"]
      ]
    },
    seller: {
      columns: ["Rivr", "Etsy", "eBay", "Amazon", "Shopify", "Square", "Instagram"],
      rows: [
        ["Storefront + listings", "yes", "yes", "yes", "yes", "yes", "yes", "some"],
        ["Marketplace discovery", "yes", "yes", "yes", "yes", "some", "some", "yes"],
        ["Inventory + orders", "yes", "yes", "yes", "yes", "yes", "yes", "some"],
        ["Buyer messaging", "yes", "yes", "yes", "some", "some", "yes", "yes"],
        ["Online payment", "yes", "yes", "yes", "yes", "yes", "yes", "some"],
        ["Tap-to-pay POS", "pay", "no", "no", "no", "yes", "yes", "no"],
        ["Community context", "yes", "some", "no", "no", "no", "some", "some"]
      ]
    },
    provider: {
      columns: ["Rivr", "Square", "Luma", "Eventbrite", "Etsy", "Instagram"],
      rows: [
        ["Services + bookings", "yes", "yes", "some", "some", "some", "some"],
        ["Events + tickets", "yes", "some", "yes", "yes", "no", "some"],
        ["Products + orders", "yes", "yes", "no", "no", "yes", "some"],
        ["Online + tap-to-pay", "pay", "yes", "some", "some", "no", "no"],
        ["Audience messaging", "yes", "yes", "yes", "yes", "yes", "yes"],
        ["One customer context", "yes", "some", "some", "some", "some", "some"]
      ]
    },
    organization: {
      columns: ["Rivr", "Facebook", "Discord", "Asana", "Slack", "Square", "Shopify", "Eventbrite"],
      rows: [
        ["Social community", "yes", "yes", "yes", "some", "yes", "some", "some", "some"],
        ["Projects + paid work", "yes", "no", "no", "yes", "some", "some", "no", "no"],
        ["Shared docs + knowledge", "yes", "some", "some", "yes", "some", "no", "no", "no"],
        ["Governance + decisions", "yes", "some", "some", "no", "some", "no", "no", "no"],
        ["Subgroup treasuries", "yes", "no", "no", "no", "no", "no", "no", "no"],
        ["Project spend cards", "cards", "no", "no", "no", "no", "no", "no", "no"],
        ["Events + ticketing", "yes", "yes", "yes", "some", "some", "no", "no", "yes"],
        ["Storefront + POS", "pay", "some", "no", "no", "no", "yes", "yes", "no"],
        ["Cross-org coordination", "yes", "no", "some", "some", "some", "no", "no", "no"]
      ]
    }
  };

  var order = ["collaborator", "host", "seller", "provider", "organization"];
  var selected = "organization";
  var comparisonSelected = "organization";
  var billing = "monthly";
  var activeAltitude = 0;
  var furthestAltitude = 0;
  var root = document.documentElement;
  var reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

  function money(value) { return "$" + Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

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
      return '<button class="product-card product-' + key + '" type="button" data-select-product="' + key + '" aria-haspopup="dialog"><span class="product-card-top"><span class="product-icon">' + icon(key) + '</span></span><small>' + p.segment + '</small><strong>' + p.name + '</strong><p>' + p.invitation + '</p>' + currentPrice(p) + '<b>Open your path ↗</b></button>';
    }).join("");
  }

  function dialogMarkup(key, altitudeIndex) {
    var p = products[key];
    var altitude = p.altitudes[altitudeIndex];
    var nextLabel = altitudeIndex === 0 ? "Community effect →" : "Wider impact →";
    var finalAction = altitudeIndex === 2 ? '<a href="' + p.url + '">Choose ' + p.name + ' ↗</a>' : '<button type="button" data-dialog-next>' + nextLabel + '</button>';
    return '<div class="dialog-shell product-' + key + '"><aside class="dialog-aside"><span class="product-icon">' + icon(key) + '</span><small>' + p.segment + '</small><h2 id="dialog-title">' + p.name + '</h2>' + currentPrice(p) + '</aside><section class="dialog-main"><div class="dialog-tabs" role="tablist" aria-label="Product altitudes">' + p.altitudes.map(function (item, index) {
      return '<button type="button" role="tab" data-dialog-altitude="' + index + '" aria-selected="' + (index === altitudeIndex) + '"' + (index > furthestAltitude ? ' disabled' : '') + '><span>0' + (index + 1) + '</span>' + item.label + '</button>';
    }).join("") + '</div><div class="dialog-panel" role="tabpanel" tabindex="0"><small>' + altitude.label + '</small><h3>' + altitude.title + '</h3><div class="dialog-panel-grid"><p>' + altitude.copy + '</p><ul>' + altitude.outcomes.map(function (item) { return '<li>' + item + '</li>'; }).join("") + '</ul></div></div><footer class="dialog-footer"><button type="button" data-dialog-prev' + (altitudeIndex === 0 ? " disabled" : "") + '>← Back</button><span>' + (altitudeIndex + 1) + ' / 3</span>' + finalAction + '</footer></section></div>';
  }

  function showDialog(index) {
    activeAltitude = Math.max(0, Math.min(2, index));
    furthestAltitude = Math.max(furthestAltitude, activeAltitude);
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

  function matrixStatus(status) {
    var labels = { yes: "✓", some: "Some", no: "—", pay: "Rivr Pay", cards: "Project cards" };
    return '<td><span class="matrix-status matrix-status-' + status + '">' + labels[status] + '</span></td>';
  }

  function renderComparison() {
    var target = document.querySelector("[data-comparison]");
    if (!target) return;
    var p = products[comparisonSelected];
    var matrix = comparisonMatrices[comparisonSelected];
    var annual = p.stackTotal * 12 - p.yearly;
    var signal = p.savings === null ? '<div class="savings-number"><span>Familiar channel cost</span><strong>$0 base</strong></div>' : '<div class="savings-number"><span>Modeled monthly savings</span><strong>' + money(p.savings) + '</strong></div>';
    var equation = p.savings === null
      ? '<div class="compare-equation"><div><small>Separate channels</small><strong>4 apps</strong></div><b>→</b><div><small>Rivr Collaborator</small><strong>' + money(p.monthly) + '</strong></div><b>=</b><div class="save"><small>Connected result</small><strong>1 context</strong></div></div>'
      : '<div class="compare-equation"><div><small>Recognizable app stack</small><strong>' + money(p.stackTotal) + '</strong></div><b>−</b><div><small>Rivr ' + p.name + '</small><strong>' + money(p.monthly) + '</strong></div><b>=</b><div class="save"><small>Save each month</small><strong>' + money(p.savings) + '</strong></div></div>';
    var table = '<div class="home-matrix-scroll" tabindex="0" aria-label="Scrollable ' + p.name + ' competitor feature table"><table class="home-matrix"><thead><tr><th scope="col">Feature</th>' + matrix.columns.map(function (column, index) { return '<th scope="col"' + (index === 0 ? ' class="rivr-head"' : '') + '>' + column + '</th>'; }).join("") + '</tr></thead><tbody>' + matrix.rows.map(function (row) { return '<tr><th scope="row">' + row[0] + '</th>' + row.slice(1).map(matrixStatus).join("") + '</tr>'; }).join("") + '</tbody></table></div>';
    var chips = '<div class="stack-chips">' + p.stack.map(function (item) { return '<span><b>' + item.name + '</b> · ' + item.cost + '</span>'; }).join("") + (p.savings === null ? '<span>Free channels are <b>not counted as savings</b></span>' : '<span>Yearly Rivr savings · <b>' + money(annual) + '</b></span>') + '</div>';
    target.innerHTML = '<nav class="compare-tabs" aria-label="Select product comparison">' + order.map(function (key) { return '<button type="button" data-compare-product="' + key + '" aria-pressed="' + (key === comparisonSelected) + '">' + products[key].name + '</button>'; }).join("") + '</nav>' + table + '<div class="compare-summary"><div><small>RECOGNIZABLE REPLACEMENT STACK</small><h3>' + p.name + ' vs. assembling the apps</h3></div>' + signal + '</div>' + equation + chips;
    target.querySelectorAll("[data-compare-product]").forEach(function (button) { button.addEventListener("click", function () { comparisonSelected = button.dataset.compareProduct; renderComparison(); }); });
  }

  var deck = document.querySelector("[data-product-deck]");
  if (deck) deck.addEventListener("click", function (event) {
    var button = event.target.closest("[data-select-product]");
    if (!button) return;
    selected = button.dataset.selectProduct;
    furthestAltitude = 0;
    showDialog(0);
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
  renderComparison();
  updateScroll();
})();
