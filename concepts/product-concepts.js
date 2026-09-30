(function () {
  "use strict";

  var root = document.querySelector("#product-root");
  if (!root) return;

  var concept = document.body.dataset.productConcept || "catalog";
  var billing = "monthly";
  var selectedProduct = "collaborator";

  var products = {
    collaborator: {
      key: "collaborator",
      tier: "basic",
      number: "01",
      name: "Collaborator",
      segment: "Neighbors, participants, and contributors",
      invitation: "Belong, contribute, and find your next way in.",
      surface: "For people who want a useful relationship with the communities and places around them.",
      capability: "Participate + contribute",
      monthly: 13.06,
      yearly: 135.72,
      savings: 21,
      features: ["Community profile", "Events and groups", "Direct messaging", "Badges and project jobs"],
      url: "https://app.rivr.social/products/membership-basic",
      altitudes: [
        {
          label: "In your life",
          title: "The next meaningful thing becomes easier to find.",
          copy: "Discover a gathering, join a group, meet through shared context, or contribute to work that matters. Collaborator turns Rivr from something you browse into somewhere you can belong.",
          outcomes: ["Find events and groups", "Build a trusted local profile", "Claim badges and contribute to projects"]
        },
        {
          label: "In community",
          title: "Participation becomes visible, dependable, and cumulative.",
          copy: "Your presence, skills, and contributions can connect across groups and projects. Small acts stop disappearing into separate chats and begin adding to shared capacity.",
          outcomes: ["Carry context between activities", "Turn interest into participation", "Help communities know what they can do together"]
        },
        {
          label: "In the world",
          title: "More people become active nodes in the places they live.",
          copy: "A healthier network begins with people who can find a real way to participate. Collaborator grows the human layer of a distributed, place-aware social fabric.",
          outcomes: ["Lower the threshold to civic life", "Strengthen local interdependence", "Connect participation across places"]
        }
      ]
    },
    host: {
      key: "host",
      tier: "host",
      number: "02",
      name: "Host",
      segment: "Conveners, teachers, facilitators, and event makers",
      invitation: "Turn gatherings into repeatable community infrastructure.",
      surface: "For people whose work begins by getting the right people into the same room.",
      capability: "Ticket + convene",
      monthly: 24.06,
      yearly: 222.72,
      savings: 66,
      features: ["Paid event tickets", "RSVPs and waitlists", "Event communication", "Branding and analytics"],
      url: "https://app.rivr.social/products/membership-host",
      altitudes: [
        {
          label: "In your life",
          title: "Host the experience without carrying every detail by hand.",
          copy: "Create paid events, manage attendance, communicate with participants, and understand what is working. Your energy can stay with the gathering itself.",
          outcomes: ["Sell tickets and manage registration", "Coordinate RSVPs and waitlists", "Bring recurring events into one rhythm"]
        },
        {
          label: "In community",
          title: "Gatherings become reliable doors into belonging.",
          copy: "A workshop, meal, performance, or circle can become more than a one-off event. Rivr connects the gathering to the people, groups, and next actions around it.",
          outcomes: ["Welcome newcomers through real experiences", "Build continuity between gatherings", "Grow a community around shared practice"]
        },
        {
          label: "In the world",
          title: "A thousand local gatherings become a living civic network.",
          copy: "Hosts create the moments where culture is practiced and trust becomes embodied. Connected across Rivr, those moments form distributed infrastructure for learning and collective life.",
          outcomes: ["Keep culture rooted in place", "Move knowledge through lived experience", "Connect local gatherings across regions"]
        }
      ]
    },
    seller: {
      key: "seller",
      tier: "seller",
      number: "03",
      name: "Seller",
      segment: "Makers, practitioners, local businesses, and independent sellers",
      invitation: "Make what you offer easier to discover, trust, and buy.",
      surface: "For people who create value locally and want a marketplace shaped by relationship, not reach alone.",
      capability: "Offer + earn",
      monthly: 24.06,
      yearly: 207.72,
      savings: 81,
      features: ["Paid offerings and listings", "Storefront and inventory", "Orders and communication", "Seller analytics and verification"],
      url: "https://app.rivr.social/products/membership-seller",
      altitudes: [
        {
          label: "In your life",
          title: "Give your work a storefront inside the relationships it serves.",
          copy: "List products, services, and offerings; manage orders; and receive payment without rebuilding your audience on another extractive marketplace.",
          outcomes: ["Publish paid offerings", "Manage inventory and orders", "Build a trusted seller presence"]
        },
        {
          label: "In community",
          title: "Local exchange becomes easier to see and support.",
          copy: "Your offering appears alongside the groups, events, projects, and needs that give it context. Commerce becomes one expression of participation in community life.",
          outcomes: ["Reach people through shared context", "Keep more value circulating nearby", "Turn customers into durable relationships"]
        },
        {
          label: "In the world",
          title: "Place-based economies become visible to one another.",
          copy: "When independent sellers can participate in connected local markets, economic life becomes more diverse, resilient, and accountable to the places it affects.",
          outcomes: ["Strengthen distributed local economies", "Connect values-aligned markets", "Make economic relationships more legible"]
        }
      ]
    },
    provider: {
      key: "provider",
      tier: "provider",
      number: "04",
      name: "Provider",
      segment: "Independent operators who both convene and sell",
      invitation: "Bring your experiences, services, and storefront into one presence.",
      surface: "For the teacher who runs workshops, the practitioner who hosts, and the business that is more than one thing.",
      capability: "Host + sell",
      monthly: 35.06,
      yearly: 304.72,
      savings: 116,
      features: ["Everything in Host and Seller", "Paid events and offerings", "Combined operating tools", "Provider analytics and verification"],
      url: "https://app.rivr.social/products/membership-provider",
      altitudes: [
        {
          label: "In your life",
          title: "Run the whole shape of your work without splitting your identity.",
          copy: "Offer a consultation, sell a product, teach a paid workshop, and gather your people from one coherent home. Provider reflects how independent work actually behaves.",
          outcomes: ["Combine tickets and offerings", "Unify events, orders, and audiences", "Build one trusted provider identity"]
        },
        {
          label: "In community",
          title: "Your livelihood becomes an anchor for shared activity.",
          copy: "Providers often hold the connective middle: they teach, serve, make, host, and create reasons for people to return. Rivr helps that ecosystem reinforce itself.",
          outcomes: ["Connect learning with exchange", "Create multiple doors into participation", "Grow a durable community around your practice"]
        },
        {
          label: "In the world",
          title: "Independent livelihoods become connective infrastructure.",
          copy: "Networks of viable local providers can carry knowledge, care, and economic activity between communities without requiring every relationship to pass through a central platform.",
          outcomes: ["Support resilient independent work", "Connect practitioners across places", "Distribute knowledge and economic agency"]
        }
      ]
    },
    organization: {
      key: "organization",
      tier: "organizer",
      number: "05",
      name: "Organization",
      segment: "Teams, cooperatives, nonprofits, programs, and movements",
      invitation: "Coordinate people, programs, and paid work without flattening the mission.",
      surface: "For groups that need operational depth, shared responsibility, and a durable place to work together.",
      capability: "Coordinate + pay",
      monthly: 46.06,
      yearly: 391.72,
      savings: 161,
      features: ["Everything in Provider", "Pay people for project work", "Team roles and collaboration", "Advanced analytics and API access"],
      url: "https://app.rivr.social/products/membership-organizer",
      altitudes: [
        {
          label: "In your work",
          title: "Give the organization one operating context instead of ten disconnected tools.",
          copy: "Coordinate programs, roles, events, offerings, and paid project work while keeping the relationships and purpose behind the work visible.",
          outcomes: ["Pay contributors for project work", "Coordinate team roles and programs", "Connect operations, events, and exchange"]
        },
        {
          label: "In community",
          title: "The organization becomes easier to enter, understand, and share.",
          copy: "Members can see where decisions happen, what work needs doing, how resources move, and which level of participation is right for them.",
          outcomes: ["Distribute responsibility clearly", "Make participation and governance legible", "Build institutional memory without bureaucracy"]
        },
        {
          label: "In the world",
          title: "Distinct institutions can cooperate without becoming one institution.",
          copy: "Organizations retain their identity and operating context while connecting people, opportunities, knowledge, and coordinated work across the wider Rivr network.",
          outcomes: ["Cooperate across organizational boundaries", "Preserve local authority and context", "Build plural infrastructure for collective action"]
        }
      ]
    }
  };

  var productOrder = ["collaborator", "host", "seller", "provider", "organization"];

  function productIcon(key) {
    var icons = {
      collaborator: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="30"/></svg>',
      host: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="14" width="44" height="40" rx="8"/><path d="M10 26h44M22 8v12M42 8v12M22 37h20"/></svg>',
      seller: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 25h36l-3 31H17l-3-31Z"/><path d="M23 25c0-9 3-15 9-15s9 6 9 15M23 39h18"/></svg>',
      provider: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="25" cy="31" r="18"/><circle cx="39" cy="31" r="18"/><path d="M32 7v48M8 31h48"/></svg>',
      organization: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 54V19l20-9 20 9v35M7 54h50"/><path d="M22 26h4m12 0h4M22 36h4m12 0h4M29 54V42h6v12"/></svg>'
    };
    return icons[key];
  }

  function money(value) {
    return "$" + value.toFixed(2);
  }

  function priceMarkup(product) {
    return '<span class="product-price" data-price data-monthly="' + product.monthly.toFixed(2) + '" data-yearly="' + product.yearly.toFixed(2) + '"><strong>' + money(product.monthly) + '</strong><small>/ month</small></span>';
  }

  function billingToggle() {
    return '<div class="billing-toggle" aria-label="Billing period"><button type="button" data-billing="monthly" aria-pressed="true">Monthly</button><button type="button" data-billing="yearly" aria-pressed="false">Yearly <span>save up to $161</span></button></div>';
  }

  function productCard(key, mode) {
    var product = products[key];
    return '<button class="product-card product-' + key + ' ' + (mode || "") + '" type="button" data-product="' + key + '" aria-haspopup="dialog">' +
      '<span class="product-card-top"><span class="product-number">' + product.number + '</span><span class="product-icon">' + productIcon(key) + '</span></span>' +
      '<span class="segment-label">' + product.segment + '</span>' +
      '<strong class="product-name">' + product.name + '</strong>' +
      '<span class="product-invitation">' + product.invitation + '</span>' +
      priceMarkup(product) +
      '<span class="product-capability">' + product.capability + '</span>' +
      '<span class="product-hover"><span>' + product.surface + '</span><b>Follow through three altitudes <i>↗</i></b></span>' +
      '</button>';
  }

  function productNav() {
    return '<nav class="product-concept-nav" aria-label="Switch product concept">' +
      '<a href="/concepts/catalog/"' + (concept === "catalog" ? ' aria-current="page"' : '') + '>Catalog</a>' +
      '<a href="/concepts/finder/"' + (concept === "finder" ? ' aria-current="page"' : '') + '>Finder</a>' +
      '<a href="/concepts/journeys/"' + (concept === "journeys" ? ' aria-current="page"' : '') + '>Journeys</a>' +
      '<a href="/concepts/comparison/">Compare</a>' +
      '</nav>';
  }

  function header() {
    var logo = concept === "catalog" ? "/assets/rivr-symbol-dark.png" : "/assets/rivr-symbol-light.png";
    return '<header class="product-header" data-product-header><a class="product-brand" href="/concepts/" aria-label="Rivr concept directions"><img src="' + logo + '" alt=""><span>Rivr</span></a>' + productNav() + '<a class="header-cta" href="https://app.rivr.social/subscribe">See plans in Rivr <span>↗</span></a></header>';
  }

  function hero() {
    var copy = {
      catalog: ['Products for participation', 'Choose what you are ready<br>to make <em>possible.</em>', 'Five memberships. Five recognizable ways of showing up. Every product starts with practical value and grows toward community capacity and wider connection.'],
      finder: ['Membership as a role, not a rank', 'How do you want<br>to <em>participate?</em>', 'Start with the work you are already doing—or the role you are ready to grow into. Rivr will show you the product shaped for it.'],
      journeys: ['Every product moves at three scales', 'Follow one product<br>from <em>useful</em> to systemic.', 'Select a membership and trace what it changes for one person, for a community, and for the wider network.']
    }[concept];
    return '<section class="product-hero"><div class="product-hero-visual" aria-hidden="true"><img src="/assets/' + (concept === "catalog" ? 'community-grid.webp' : concept === "finder" ? 'hero-water.webp' : 'connected-place.jpg') + '" alt=""></div><div class="product-wrap product-hero-copy"><p class="product-kicker">' + copy[0] + '</p><h1>' + copy[1] + '</h1><p>' + copy[2] + '</p><a href="#products" class="primary-action">See the products <span>↓</span></a></div></section>';
  }

  function catalogView() {
    return '<section class="catalog-products" id="products" aria-labelledby="products-title"><div class="product-wrap products-heading"><div><p class="product-kicker">The product line</p><h2 id="products-title">Start with the role<br>that feels like <em>yours.</em></h2></div><div><p>These are parallel products, not a status ladder. Host and Seller are distinct specialties. Provider combines them. Organization adds the ability to coordinate and pay for shared work.</p>' + billingToggle() + '</div></div><div class="product-wrap catalog-grid">' + productOrder.map(function (key) { return productCard(key, "catalog-card"); }).join("") + '</div></section>' + comparisonTable();
  }

  function comparisonTable() {
    var rows = [
      ["Participate, join groups, take project work", true, true, true, true, true],
      ["Sell paid event tickets", false, true, false, true, true],
      ["Sell paid offerings and listings", false, false, true, true, true],
      ["Pay contributors for project work", false, false, false, false, true],
      ["Team roles, advanced analytics, API", false, false, false, false, true]
    ];
    return '<section class="product-compare" aria-labelledby="compare-title"><div class="product-wrap"><div class="compare-heading"><p class="product-kicker">Capability map</p><h2 id="compare-title">Choose by the work,<br>not by the rung.</h2></div><div class="compare-scroll" tabindex="0" aria-label="Scrollable product capability comparison"><table><thead><tr><th>What you need to do</th>' + productOrder.map(function (key) { return '<th>' + products[key].name + '</th>'; }).join("") + '</tr></thead><tbody>' + rows.map(function (row) { return '<tr><th>' + row[0] + '</th>' + row.slice(1).map(function (enabled) { return '<td><span class="' + (enabled ? 'yes' : 'no') + '">' + (enabled ? 'Yes' : '—') + '</span></td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table></div></div></section>';
  }

  function finderView() {
    return '<section class="finder-products" id="products" aria-labelledby="finder-title"><div class="product-wrap finder-heading"><p class="product-kicker">Choose a working identity</p><h2 id="finder-title">Which sentence sounds<br>most like <em>you?</em></h2>' + billingToggle() + '</div><div class="product-wrap finder-layout"><div class="finder-options" aria-label="Product segments">' + productOrder.map(function (key) { var product = products[key]; return '<button type="button" data-finder-product="' + key + '" aria-pressed="' + (key === selectedProduct) + '"><span>' + product.number + '</span><div><strong>' + product.name + '</strong><small>' + product.invitation + '</small></div><i>→</i></button>'; }).join("") + '</div><div class="finder-result" data-finder-result aria-live="polite"></div></div></section><section class="finder-all"><div class="product-wrap"><p>Already know what you need?</p><div>' + productOrder.map(function (key) { return '<button type="button" data-product="' + key + '">' + products[key].name + ' ↗</button>'; }).join("") + '</div></div></section>';
  }

  function finderResult(key) {
    var product = products[key];
    return '<div class="finder-result-top"><span class="product-icon">' + productIcon(key) + '</span><span class="recommended">A product for ' + product.segment.toLowerCase() + '</span></div><h3>' + product.name + '</h3><p class="finder-promise">' + product.invitation + '</p>' + priceMarkup(product) + '<div class="mini-altitudes">' + product.altitudes.map(function (altitude, index) { return '<article><span>0' + (index + 1) + ' · ' + altitude.label + '</span><strong>' + altitude.title + '</strong></article>'; }).join("") + '</div><button class="result-open" type="button" data-product="' + key + '">Walk the ' + product.name + ' journey <span>↗</span></button>';
  }

  function journeysView() {
    return '<section class="journey-products" id="products" aria-labelledby="journey-title"><div class="product-wrap journey-heading"><div><p class="product-kicker">Select a product</p><h2 id="journey-title">One membership.<br><em>Three altitudes.</em></h2></div>' + billingToggle() + '</div><div class="product-wrap journey-selector" aria-label="Select product journey">' + productOrder.map(function (key) { var product = products[key]; return '<button type="button" data-journey-product="' + key + '" aria-pressed="' + (key === selectedProduct) + '"><span>' + product.number + '</span><strong>' + product.name + '</strong><small>' + product.segment + '</small></button>'; }).join("") + '</div><div class="product-wrap journey-canvas" data-journey-canvas aria-live="polite"></div></section>';
  }

  function journeyCanvas(key) {
    var product = products[key];
    return '<div class="journey-product-title"><span class="product-icon">' + productIcon(key) + '</span><div><p>' + product.segment + '</p><h3>' + product.name + '</h3></div>' + priceMarkup(product) + '</div><div class="journey-line" aria-hidden="true"><i></i><i></i><i></i></div><div class="altitude-journey">' + product.altitudes.map(function (altitude, index) { return '<button type="button" data-product="' + key + '" data-altitude="' + index + '"><span class="altitude-index">Altitude 0' + (index + 1) + '</span><small>' + altitude.label + '</small><strong>' + altitude.title + '</strong><p>' + altitude.copy + '</p><b>Open this altitude ↗</b></button>'; }).join("") + '</div><p class="journey-thesis">' + product.invitation + '</p>';
  }

  function commonClosing() {
    return '<section class="product-closing"><div class="product-wrap"><p class="product-kicker">A product line shaped by participation</p><h2>Start with what you need.<br>Grow toward what <em>we can do.</em></h2><p>Each membership is useful at the scale of one person and meaningful at the scale of a connected world.</p><a class="primary-action" href="https://app.rivr.social/subscribe">Compare plans in Rivr <span>↗</span></a></div></section>';
  }

  function dialogMarkup() {
    return '<dialog class="product-dialog" aria-labelledby="product-dialog-title"><div class="product-dialog-shell"><button class="product-dialog-close" type="button" aria-label="Close product story">×</button><aside><span class="dialog-product-icon"></span><p class="dialog-segment"></p><h2 id="product-dialog-title"></h2><p class="dialog-invitation"></p><div class="dialog-price"></div><ul class="dialog-features"></ul></aside><section><div class="altitude-tabs" role="tablist" aria-label="Three product altitudes"></div><div class="altitude-panel" role="tabpanel" tabindex="0"></div><footer><button class="altitude-back" type="button">← Previous</button><span class="altitude-count"></span><button class="altitude-next" type="button">Next altitude →</button><a class="product-enter" href="https://app.rivr.social/subscribe">Choose this product ↗</a></footer></section></div></dialog>';
  }

  root.innerHTML = header() + '<main>' + hero() + (concept === "catalog" ? catalogView() : concept === "finder" ? finderView() : journeysView()) + commonClosing() + '</main><footer class="product-footer"><a class="product-brand" href="/concepts/"><img src="' + (concept === "catalog" ? '/assets/rivr-symbol-dark.png' : '/assets/rivr-symbol-light.png') + '" alt=""><span>Rivr</span></a><p>Five products. Three altitudes. One connected social fabric.</p>' + productNav() + '</footer>' + dialogMarkup();

  var dialog = document.querySelector(".product-dialog");
  var dialogProduct = "collaborator";
  var dialogAltitude = 0;
  var lastTrigger = null;

  function updatePrices() {
    document.querySelectorAll("[data-price]").forEach(function (price) {
      var value = Number(price.dataset[billing]);
      price.querySelector("strong").textContent = money(value);
      price.querySelector("small").textContent = billing === "monthly" ? "/ month" : "/ year";
    });
    document.querySelectorAll("[data-billing]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.billing === billing));
    });
  }

  function renderDialog() {
    var product = products[dialogProduct];
    var altitude = product.altitudes[dialogAltitude];
    dialog.dataset.product = dialogProduct;
    dialog.querySelector(".dialog-product-icon").innerHTML = productIcon(dialogProduct);
    dialog.querySelector(".dialog-segment").textContent = product.segment;
    dialog.querySelector("#product-dialog-title").textContent = product.name;
    dialog.querySelector(".dialog-invitation").textContent = product.invitation;
    dialog.querySelector(".dialog-price").innerHTML = priceMarkup(product) + (billing === "yearly" ? '<span class="save-note">Save $' + product.savings + ' yearly</span>' : '');
    dialog.querySelector(".dialog-features").innerHTML = product.features.map(function (feature) { return '<li>' + feature + '</li>'; }).join("");
    dialog.querySelector(".altitude-tabs").innerHTML = product.altitudes.map(function (item, index) { return '<button type="button" role="tab" data-dialog-altitude="' + index + '" aria-selected="' + (index === dialogAltitude) + '" tabindex="' + (index === dialogAltitude ? '0' : '-1') + '"><span>0' + (index + 1) + '</span>' + item.label + '</button>'; }).join("");
    dialog.querySelector(".altitude-panel").innerHTML = '<p>Altitude 0' + (dialogAltitude + 1) + '</p><h3>' + altitude.title + '</h3><div class="altitude-panel-grid"><p>' + altitude.copy + '</p><ul>' + altitude.outcomes.map(function (outcome) { return '<li>' + outcome + '</li>'; }).join("") + '</ul></div>';
    dialog.querySelector(".altitude-count").textContent = (dialogAltitude + 1) + " of 3";
    dialog.querySelector(".altitude-back").disabled = dialogAltitude === 0;
    dialog.querySelector(".altitude-next").hidden = dialogAltitude === 2;
    var enter = dialog.querySelector(".product-enter");
    enter.hidden = dialogAltitude !== 2;
    enter.href = product.url;
    updatePrices();
  }

  function openProduct(key, altitude, trigger) {
    dialogProduct = key;
    dialogAltitude = Number.isInteger(altitude) ? altitude : 0;
    lastTrigger = trigger;
    renderDialog();
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }

  function closeProduct() {
    dialog.close();
    document.body.classList.remove("dialog-open");
    if (lastTrigger) lastTrigger.focus();
  }

  root.addEventListener("click", function (event) {
    var billingButton = event.target.closest("[data-billing]");
    if (billingButton) {
      billing = billingButton.dataset.billing;
      updatePrices();
      if (concept === "finder") renderFinder(selectedProduct);
      if (concept === "journeys") renderJourney(selectedProduct);
      return;
    }
    var finderButton = event.target.closest("[data-finder-product]");
    if (finderButton) { selectedProduct = finderButton.dataset.finderProduct; renderFinder(selectedProduct); return; }
    var journeyButton = event.target.closest("[data-journey-product]");
    if (journeyButton) { selectedProduct = journeyButton.dataset.journeyProduct; renderJourney(selectedProduct); return; }
    var productButton = event.target.closest("[data-product]");
    if (productButton) openProduct(productButton.dataset.product, Number(productButton.dataset.altitude), productButton);
  });

  function renderFinder(key) {
    document.querySelectorAll("[data-finder-product]").forEach(function (button) { button.setAttribute("aria-pressed", String(button.dataset.finderProduct === key)); });
    var result = document.querySelector("[data-finder-result]");
    result.dataset.product = key;
    result.innerHTML = finderResult(key);
    updatePrices();
  }

  function renderJourney(key) {
    document.querySelectorAll("[data-journey-product]").forEach(function (button) { button.setAttribute("aria-pressed", String(button.dataset.journeyProduct === key)); });
    var canvas = document.querySelector("[data-journey-canvas]");
    canvas.dataset.product = key;
    canvas.innerHTML = journeyCanvas(key);
    updatePrices();
  }

  if (concept === "finder") renderFinder(selectedProduct);
  if (concept === "journeys") renderJourney(selectedProduct);
  updatePrices();

  document.querySelector(".product-dialog-close").addEventListener("click", closeProduct);
  dialog.querySelector(".altitude-back").addEventListener("click", function () { if (dialogAltitude > 0) { dialogAltitude -= 1; renderDialog(); } });
  dialog.querySelector(".altitude-next").addEventListener("click", function () { if (dialogAltitude < 2) { dialogAltitude += 1; renderDialog(); } });
  dialog.querySelector(".altitude-tabs").addEventListener("click", function (event) {
    var button = event.target.closest("[data-dialog-altitude]");
    if (!button) return;
    dialogAltitude = Number(button.dataset.dialogAltitude);
    renderDialog();
    dialog.querySelector('[data-dialog-altitude="' + dialogAltitude + '"]').focus();
  });
  dialog.querySelector(".altitude-tabs").addEventListener("keydown", function (event) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home") dialogAltitude = 0;
    else if (event.key === "End") dialogAltitude = 2;
    else if (event.key === "ArrowRight") dialogAltitude = dialogAltitude === 2 ? 0 : dialogAltitude + 1;
    else dialogAltitude = dialogAltitude === 0 ? 2 : dialogAltitude - 1;
    renderDialog();
    dialog.querySelector('[data-dialog-altitude="' + dialogAltitude + '"]').focus();
  });
  dialog.addEventListener("click", function (event) { if (event.target === dialog) closeProduct(); });
  dialog.addEventListener("cancel", function (event) { event.preventDefault(); closeProduct(); });

  var pageHeader = document.querySelector("[data-product-header]");
  addEventListener("scroll", function () { pageHeader.classList.toggle("scrolled", scrollY > 28); }, { passive: true });
})();
