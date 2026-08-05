(function () {
  "use strict";

  var root = document.querySelector("#concept-root");
  if (!root) return;

  var concept = document.body.dataset.concept || "tidal";
  var directions = {
    tidal: {
      name: "Tidal Glass",
      register: "Cinematic / organic",
      kicker: "A place for life in common",
      title: "Where local life<br>finds its <em>current.</em>",
      copy: "Rivr helps people find one another, share what they have, and turn local possibility into collective momentum.",
      image: "/assets/hero-water.webp"
    },
    field: {
      name: "Field Notes",
      register: "Editorial / human",
      kicker: "Useful technology for real places",
      title: "Tools for the lives<br>we <em>actually live.</em>",
      copy: "Less time managing platforms. More time finding neighbors, sharing resources, organizing projects, and caring for the places we call home.",
      image: "/assets/community-grid.webp"
    },
    atlas: {
      name: "Living Atlas",
      register: "Systemic / spatial",
      kicker: "Connected infrastructure for connected life",
      title: "Every place is a node.<br>Every relationship, <em>a route.</em>",
      copy: "Rivr links people, communities, and places without dissolving what makes each one distinct.",
      image: "/assets/connected-place.jpg"
    }
  };

  var paths = {
    life: {
      number: "01",
      altitude: "In daily life",
      invitation: "I’m finding my way in.",
      symbol: "ripple",
      audience: "For people looking for useful connection close to home.",
      short: "Find an event, ask for help, offer a skill, or discover what is already moving around you.",
      link: "https://app.rivr.social/explore",
      linkLabel: "Explore Rivr",
      steps: [
        {
          label: "Right now",
          title: "Make local life easier to navigate.",
          copy: "See nearby events, groups, projects, offers, and requests in one place. Start with a practical need or simple curiosity—not a new identity to maintain.",
          points: ["Discover what is happening nearby", "Ask for or offer something useful", "Meet through shared context, not an algorithm"]
        },
        {
          label: "In practice",
          title: "Small exchanges become trusted relationships.",
          copy: "A borrowed tool, a shared ride, or a neighborhood event creates a reason to meet. Rivr helps the relationship remain available for the next thing.",
          points: ["Move from discovery to direct action", "Carry trust between exchanges", "Keep your participation at your own pace"]
        },
        {
          label: "What it opens",
          title: "A life with more nearby capacity.",
          copy: "Over time, local knowledge becomes easier to find and everyday interdependence becomes less exceptional. Community starts to feel accessible rather than abstract.",
          points: ["More options close to home", "Less isolation and duplicated effort", "A clearer sense of belonging to a place"]
        }
      ]
    },
    culture: {
      number: "02",
      altitude: "In community",
      invitation: "I’m bringing people together.",
      symbol: "weave",
      audience: "For organizers, stewards, and people holding a shared effort.",
      short: "Give a group one coherent place to gather, coordinate, exchange, and make decisions.",
      link: "https://app.rivr.social/groups",
      linkLabel: "See communities",
      steps: [
        {
          label: "Right now",
          title: "Hold the work without holding every thread.",
          copy: "Bring membership, events, projects, resources, and communication into one shared context so people can see how to participate.",
          points: ["Create a recognizable community home", "Make roles and next actions legible", "Connect communication to actual work"]
        },
        {
          label: "In practice",
          title: "Participation can deepen by choice.",
          copy: "People can begin with an event, take on a task, join a project, or step into governance as trust and commitment grow.",
          points: ["Welcome different levels of involvement", "Coordinate projects and shared resources", "Make decisions with visible context"]
        },
        {
          label: "What it opens",
          title: "Activity becomes culture and capacity.",
          copy: "A community becomes more than a message stream. It develops memory, shared practice, and the ability to act without depending on a few exhausted people.",
          points: ["Durable organizational memory", "Distributed ownership and leadership", "A stronger sense of collective agency"]
        }
      ]
    },
    world: {
      number: "03",
      altitude: "In the wider world",
      invitation: "I’m connecting places for the long term.",
      symbol: "constellation",
      audience: "For communities, networks, and institutions building connective infrastructure.",
      short: "Let distinct communities cooperate across places without giving up their identity or control.",
      link: "https://app.rivr.social/groups",
      linkLabel: "Enter the network",
      steps: [
        {
          label: "Right now",
          title: "Connect what already exists.",
          copy: "Rivr gives people and communities a shared way to discover one another while preserving the boundaries, contexts, and responsibilities that matter.",
          points: ["Link people, groups, locales, and regions", "Keep local identity visible", "Share opportunities across boundaries"]
        },
        {
          label: "In practice",
          title: "Cooperation without forced centralization.",
          copy: "Communities can maintain their own spaces and governance while participating in broader discovery, exchange, and coordinated action.",
          points: ["Federate distinct community spaces", "Move knowledge and opportunity between places", "Choose what is shared and what remains local"]
        },
        {
          label: "What it opens",
          title: "A social fabric shaped like the living world.",
          copy: "Instead of one platform flattening everyone into a global feed, connected places can form resilient networks that remain accountable to real relationships and real landscapes.",
          points: ["Place-aware digital infrastructure", "Plural networks with shared protocols", "Coordination at the scale each challenge requires"]
        }
      ]
    }
  };

  function symbol(name) {
    if (name === "ripple") return '<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="9"/><circle cx="40" cy="40" r="22"/><circle cx="40" cy="40" r="35"/></svg>';
    if (name === "weave") return '<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="30" cy="31" r="20"/><circle cx="50" cy="31" r="20"/><circle cx="40" cy="49" r="20"/></svg>';
    return '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M15 56 31 21l22 38 13-29"/><circle cx="15" cy="56" r="5"/><circle cx="31" cy="21" r="5"/><circle cx="53" cy="59" r="5"/><circle cx="66" cy="30" r="5"/></svg>';
  }

  function pathCard(key) {
    var path = paths[key];
    return '<button class="altitude-card altitude-' + key + '" type="button" data-path="' + key + '" aria-haspopup="dialog">' +
      '<span class="card-top"><span class="card-number">' + path.number + '</span><span class="path-symbol">' + symbol(path.symbol) + '</span></span>' +
      '<span class="card-altitude">' + path.altitude + '</span>' +
      '<strong>' + path.invitation + '</strong>' +
      '<span class="card-short">' + path.short + '</span>' +
      '<span class="card-reveal"><span>' + path.audience + '</span><b>Open this path <i aria-hidden="true">↗</i></b></span>' +
      '</button>';
  }

  function conceptNavigation() {
    return '<nav class="concept-switcher" aria-label="Switch concept">' +
      '<a href="/concepts/tidal/"' + (concept === "tidal" ? ' aria-current="page"' : '') + '>Tidal</a>' +
      '<a href="/concepts/field/"' + (concept === "field" ? ' aria-current="page"' : '') + '>Field</a>' +
      '<a href="/concepts/atlas/"' + (concept === "atlas" ? ' aria-current="page"' : '') + '>Atlas</a>' +
      '</nav>';
  }

  var direction = directions[concept];
  var logo = concept === "field" ? "/assets/rivr-symbol-dark.png" : "/assets/rivr-symbol-light.png";
  root.innerHTML =
    '<header class="concept-header" data-header>' +
      '<a class="concept-brand" href="/concepts/" aria-label="Rivr concept directions"><img src="' + logo + '" alt=""><span>Rivr</span></a>' +
      conceptNavigation() +
      '<a class="concept-open" href="https://app.rivr.social">Open Rivr <span aria-hidden="true">↗</span></a>' +
    '</header>' +
    '<main>' +
      '<section class="concept-hero">' +
        '<div class="hero-visual" aria-hidden="true"><img src="' + direction.image + '" alt=""><div class="hero-signal"><i></i><i></i><i></i><i></i></div></div>' +
        '<div class="concept-wrap hero-content">' +
          '<p class="concept-kicker">' + direction.kicker + '</p>' +
          '<h1>' + direction.title + '</h1>' +
          '<p>' + direction.copy + '</p>' +
          '<a class="concept-button" href="#altitudes">Choose your way in <span aria-hidden="true">↓</span></a>' +
        '</div>' +
        '<div class="hero-meta"><span>' + direction.name + '</span><span>' + direction.register + '</span><span>Concept direction</span></div>' +
      '</section>' +
      '<section class="altitude-selector" id="altitudes" aria-labelledby="altitude-title">' +
        '<div class="concept-wrap altitude-intro">' +
          '<p class="concept-kicker">Three scales of participation</p>' +
          '<div><h2 id="altitude-title">Start from where<br><em>you are.</em></h2><p>There is no correct entrance and no required level of commitment. Choose the invitation that sounds most like you. Hover for context; open it when you want the deeper story.</p></div>' +
        '</div>' +
        '<div class="concept-wrap altitude-grid">' + pathCard("life") + pathCard("culture") + pathCard("world") + '</div>' +
      '</section>' +
      '<section class="movement-section" aria-labelledby="movement-title">' +
        '<div class="concept-wrap movement-heading"><p class="concept-kicker">A network that leads to action</p><h2 id="movement-title">Connection is only the beginning.</h2></div>' +
        '<div class="concept-wrap movement-track">' +
          '<article><span>01</span><h3>A need appears</h3><p>Someone names what would make life or work more possible.</p></article>' +
          '<article><span>02</span><h3>An offer answers</h3><p>A person, group, or place can respond from what it already holds.</p></article>' +
          '<article><span>03</span><h3>Action connects them</h3><p>The platform becomes a bridge into a real exchange or shared effort.</p></article>' +
          '<article><span>04</span><h3>Capacity remains</h3><p>What happened becomes part of what a community can do next.</p></article>' +
        '</div>' +
      '</section>' +
      '<section class="principle-section">' +
        '<div class="concept-wrap principle-grid"><p class="concept-kicker">Why Rivr</p><h2>Not a feed to keep up with.<br><em>A place to participate.</em></h2><div><p>Most social platforms organize attention. Rivr organizes possibility: people, knowledge, resources, projects, decisions, and the places that give them meaning.</p><a href="https://app.rivr.social/auth/signup">Create an account <span aria-hidden="true">↗</span></a></div></div>' +
      '</section>' +
      '<section class="concept-closing">' +
        '<div class="closing-symbol" aria-hidden="true">' + symbol("ripple") + '</div>' +
        '<p class="concept-kicker">Your place is already full of possibility</p><h2>Find your way<br><em>into it.</em></h2><a class="concept-button" href="https://app.rivr.social/explore">Explore Rivr <span aria-hidden="true">↗</span></a>' +
      '</section>' +
    '</main>' +
    '<footer class="concept-footer"><a class="concept-brand" href="/concepts/"><img src="' + logo + '" alt=""><span>Rivr</span></a><p>Social coordination infrastructure for people, communities, and places.</p>' + conceptNavigation() + '</footer>' +
    '<dialog class="path-dialog" aria-labelledby="dialog-title">' +
      '<div class="dialog-shell">' +
        '<button class="dialog-close" type="button" aria-label="Close pathway">×</button>' +
        '<div class="dialog-side"><span class="dialog-number"></span><span class="dialog-symbol"></span><p class="dialog-altitude"></p><h2 id="dialog-title"></h2><p class="dialog-audience"></p></div>' +
        '<div class="dialog-main">' +
          '<div class="dialog-steps" role="tablist" aria-label="Pathway depth"></div>' +
          '<div class="dialog-panel" role="tabpanel" tabindex="0"></div>' +
          '<div class="dialog-actions"><button class="dialog-back" type="button">← Back</button><span class="dialog-count"></span><button class="dialog-next" type="button">Go deeper →</button><a class="dialog-enter" href="https://app.rivr.social">Open Rivr ↗</a></div>' +
        '</div>' +
      '</div>' +
    '</dialog>';

  var dialog = document.querySelector(".path-dialog");
  var currentPath = null;
  var currentStep = 0;
  var lastTrigger = null;

  function renderDialog() {
    var path = paths[currentPath];
    var step = path.steps[currentStep];
    dialog.dataset.path = currentPath;
    dialog.querySelector(".dialog-number").textContent = path.number;
    dialog.querySelector(".dialog-symbol").innerHTML = symbol(path.symbol);
    dialog.querySelector(".dialog-altitude").textContent = path.altitude;
    dialog.querySelector("#dialog-title").textContent = path.invitation;
    dialog.querySelector(".dialog-audience").textContent = path.audience;
    dialog.querySelector(".dialog-steps").innerHTML = path.steps.map(function (item, index) {
      return '<button type="button" role="tab" data-step="' + index + '" aria-selected="' + (index === currentStep) + '" tabindex="' + (index === currentStep ? '0' : '-1') + '"><span>0' + (index + 1) + '</span>' + item.label + '</button>';
    }).join("");
    dialog.querySelector(".dialog-panel").innerHTML = '<p class="panel-label">' + step.label + '</p><h3>' + step.title + '</h3><p>' + step.copy + '</p><ul>' + step.points.map(function (point) { return '<li>' + point + '</li>'; }).join("") + '</ul>';
    dialog.querySelector(".dialog-count").textContent = (currentStep + 1) + " of " + path.steps.length;
    dialog.querySelector(".dialog-back").disabled = currentStep === 0;
    dialog.querySelector(".dialog-next").hidden = currentStep === path.steps.length - 1;
    var enter = dialog.querySelector(".dialog-enter");
    enter.hidden = currentStep !== path.steps.length - 1;
    enter.href = path.link;
    enter.textContent = path.linkLabel + " ↗";
  }

  function openPath(key, trigger) {
    currentPath = key;
    currentStep = 0;
    lastTrigger = trigger;
    renderDialog();
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }

  function closeDialog() {
    dialog.close();
    document.body.classList.remove("dialog-open");
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll(".altitude-card").forEach(function (card) {
    card.addEventListener("click", function () { openPath(card.dataset.path, card); });
    card.addEventListener("pointermove", function (event) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--card-x", ((event.clientX - rect.left) / rect.width * 100).toFixed(1) + "%");
      card.style.setProperty("--card-y", ((event.clientY - rect.top) / rect.height * 100).toFixed(1) + "%");
    });
  });

  dialog.querySelector(".dialog-close").addEventListener("click", closeDialog);
  dialog.querySelector(".dialog-back").addEventListener("click", function () { if (currentStep > 0) { currentStep -= 1; renderDialog(); } });
  dialog.querySelector(".dialog-next").addEventListener("click", function () { if (currentStep < paths[currentPath].steps.length - 1) { currentStep += 1; renderDialog(); } });
  dialog.querySelector(".dialog-steps").addEventListener("click", function (event) {
    var button = event.target.closest("[data-step]");
    if (!button) return;
    currentStep = Number(button.dataset.step);
    renderDialog();
    dialog.querySelector('[data-step="' + currentStep + '"]').focus();
  });
  dialog.querySelector(".dialog-steps").addEventListener("keydown", function (event) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    var last = paths[currentPath].steps.length - 1;
    if (event.key === "Home") currentStep = 0;
    else if (event.key === "End") currentStep = last;
    else if (event.key === "ArrowRight") currentStep = currentStep === last ? 0 : currentStep + 1;
    else currentStep = currentStep === 0 ? last : currentStep - 1;
    renderDialog();
    dialog.querySelector('[data-step="' + currentStep + '"]').focus();
  });
  dialog.addEventListener("click", function (event) { if (event.target === dialog) closeDialog(); });
  dialog.addEventListener("cancel", function (event) { event.preventDefault(); closeDialog(); });

  var header = document.querySelector("[data-header]");
  addEventListener("scroll", function () { header.classList.toggle("scrolled", scrollY > 30); }, { passive: true });
})();
