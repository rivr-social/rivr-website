(function () {
  "use strict";

  var root = document.querySelector("#comparison-root");
  if (!root) return;

  var sources = {
    facebook: { name: "Facebook Pages, Groups, and Events", url: "https://www.facebook.com/business/pages/manage", note: "Facebook business Pages are free. Groups, events, organic reach, and paid promotion remain separate surfaces." },
    instagram: { name: "Instagram professional accounts", url: "https://www.facebook.com/help/instagram/138925576505882", note: "Professional accounts include a dashboard, contact tools, insights, messaging, and optional commerce and ads." },
    discord: { name: "Discord roles and permissions", url: "https://support.discord.com/hc/en-us/articles/214836687-Discord-Roles-and-Permissions", note: "Discord servers provide channel permissions and role hierarchy for community administration; scheduled events and forum channels are separate server features." },
    linkedin: { name: "LinkedIn Premium FAQ", url: "https://www.linkedin.com/help/linkedin/answer/a570070/premium-faq-", note: "LinkedIn Basic is free; Premium pricing is displayed during checkout and varies by plan and region." },
    meetup: { name: "Meetup organizer pricing", url: "https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview", note: "Standard starts at $29.99 monthly or $174.99 yearly ($14.58/month equivalent)." },
    eventbrite: { name: "Eventbrite organizer pricing", url: "https://www.eventbrite.com/organizer/pricing/", note: "Free event publishing; US paid tickets carry ticketing and payment-processing fees. Optional email plans add a subscription." },
    luma: { name: "Luma pricing", url: "https://luma.com/pricing", note: "Free includes unlimited events and guests with a 5% platform fee on paid events. Plus is $59/month billed annually and removes Luma's platform fee." },
    shopify: { name: "Shopify and Shopify POS pricing", url: "https://www.shopify.com/pos/pricing", note: "Basic is $39 monthly or $29/month billed yearly. POS Pro is another $89/month/location; processing is additional." },
    etsy: { name: "Etsy seller fees", url: "https://help.etsy.com/hc/en-us/articles/360035902374-Etsy-Fee-Basics", note: "Etsy charges 20¢ per listing and 6.5% of the total order, before payment processing and optional ads." },
    etsyPayments: { name: "Etsy Payments fees", url: "https://help.etsy.com/hc/en-us/articles/115015628847-What-are-Payment-Processing-Fees-for-Selling-on-Etsy", note: "US Etsy Payments processing is 3% + 25¢ per order, in addition to Etsy's transaction fee." },
    ebay: { name: "eBay selling fees", url: "https://www.ebay.com/help/selling/selling-fees/store-fees?id=4822", note: "Most categories receive 250 zero-insertion-fee listings; a typical final-value fee is 13.6% plus 40¢ for orders over $10." },
    amazon: { name: "Amazon seller pricing", url: "https://sell.amazon.com/pricing", note: "Professional is $39.99/month plus category referral fees; fulfillment, storage, and advertising can add cost." },
    square: { name: "Square pricing", url: "https://squareup.com/us/en/pricing", note: "Square Free is $0/month plus processing. Square Plus is $49/month/location; in-person rates start at 2.6% + 15¢ on Free." },
    squarePayroll: { name: "Square Payroll pricing", url: "https://squareup.com/us/en/payroll/pricing", note: "Full-service payroll is $35/month + $6/person paid and includes automated tax filings." },
    asana: { name: "Asana pricing", url: "https://asana.com/pricing", note: "Starter is $10.99/user/month billed annually or $13.49 billed monthly." },
    slack: { name: "Slack pricing", url: "https://slack.com/pricing", note: "Pro is $7.25/user/month billed annually or $8.75 billed monthly." },
    stripeTreasury: { name: "Stripe Treasury", url: "https://stripe.com/treasury", note: "Stripe Treasury financial accounts can store, send, and spend funds with virtual or physical cards and no monthly storage fee or minimum balance." },
    stripeTerminal: { name: "Stripe Tap to Pay", url: "https://docs.stripe.com/terminal/payments/setup-reader/tap-to-pay", note: "Stripe Terminal supports contactless payments on compatible phones. Rivr Pay is the native surface being designed on this built rail." },
    stripeIssuing: { name: "Stripe Issuing controls", url: "https://docs.stripe.com/issuing/controls/spending-controls", note: "Stripe Issuing supports virtual cards and amount, interval, category, and geography controls for project spending." }
  };

  var products = {
    collaborator: {
      number: "01", name: "Collaborator", segment: "Participants and contributors", monthly: 13.06, yearly: 135.72, noSavingsClaim: true,
      stack: [
        { name: "Facebook", cost: 0, source: "facebook", why: "groups + events", price: "$0 base" },
        { name: "Instagram", cost: 0, source: "instagram", why: "identity + discovery", price: "$0 base" },
        { name: "LinkedIn", cost: 0, source: "linkedin", why: "professional profile + jobs", price: "$0 basic" },
        { name: "Meetup", cost: 0, source: "meetup", why: "local groups + events", price: "$0 member" }
      ],
      thesis: "One trusted identity for finding people, groups, events, gigs, and meaningful ways to contribute.",
      caveat: "The familiar channels are free at entry, but the person, event, group, gig, and contribution record stay fragmented. Collaborator makes those relationships cumulative.",
      columns: ["Rivr Collaborator", "Facebook", "Instagram", "LinkedIn", "Meetup"],
      costs: ["$13.06/mo", "$0 base", "$0 base", "$0 basic", "$0 member"],
      rows: [
        ["Portable public identity", "full", "full", "full", "full", "partial"],
        ["Groups and communities", "full", "full", "partial", "partial", "full"],
        ["Local events", "full", "full", "partial", "partial", "full"],
        ["Direct messaging", "full", "full", "full", "full", "partial"],
        ["Find gigs and project roles", "full", "partial", "partial", "full", "none"],
        ["Contribution record", "full", "none", "none", "partial", "none"],
        ["Context across organizations", "full", "none", "none", "none", "none"]
      ],
      sources: ["facebook", "instagram", "linkedin", "meetup"]
    },
    host: {
      number: "02", name: "Host", segment: "Conveners and event makers", monthly: 24.06, yearly: 222.72,
      stack: [
        { name: "Luma Plus", cost: 59, source: "luma", why: "ticketing + event communication" },
        { name: "Meetup Standard", cost: 14.58, source: "meetup", why: "persistent group + local discovery" },
        { name: "Facebook + Instagram", cost: 0, source: "facebook", why: "social promotion", price: "$0 base" }
      ],
      thesis: "Ticket, invite, check in, follow up, and grow the community around every gathering.",
      caveat: "Host connects the event to the ongoing group, participant identity, next action, and wider network instead of rebuilding the audience after every gathering.",
      columns: ["Rivr Host", "Luma", "Eventbrite", "Facebook Events", "Meetup"],
      costs: ["$24.06/mo", "$0 + 5% · Plus $59", "$0 base + ticket fees", "$0 base", "$14.58 annual equivalent"],
      rows: [
        ["Paid tickets and registration", "full", "full", "full", "partial", "partial"],
        ["RSVPs, waitlists, and check-in", "full", "full", "full", "partial", "full"],
        ["Attendee communication", "full", "full", "full", "full", "partial"],
        ["Recurring community", "full", "partial", "partial", "full", "full"],
        ["Public event discovery", "full", "partial", "full", "full", "full"],
        ["Post-event projects and roles", "full", "none", "none", "none", "none"]
      ],
      sources: ["luma", "eventbrite", "facebook", "meetup"]
    },
    seller: {
      number: "03", name: "Seller", segment: "Makers and independent sellers", monthly: 24.06, yearly: 207.72,
      stack: [
        { name: "Square Plus", cost: 49, source: "square", why: "POS + orders + customer tools" },
        { name: "Etsy", cost: 0, source: "etsy", why: "marketplace storefront", price: "6.5% + processing" },
        { name: "Instagram", cost: 0, source: "instagram", why: "audience + social discovery", price: "$0 base" }
      ],
      thesis: "Publish offerings, manage orders, reach buyers, and accept online or tap-to-pay transactions from one seller identity.",
      caveat: "Seller joins the storefront, social trust, marketplace context, communication, orders, and Rivr Pay rail without requiring a separate POS and community identity.",
      columns: ["Rivr Seller", "Etsy", "eBay", "Amazon", "Shopify", "Square POS", "Instagram"],
      costs: ["$24.06/mo", "6.5% + processing", "typically 13.6% + 40¢", "$39.99 + referral fees", "$29 annual + processing", "$0 Free · $49 Plus", "$0 base"],
      rows: [
        ["Storefront and listings", "full", "full", "full", "full", "full", "full", "partial"],
        ["Marketplace discovery", "full", "full", "full", "full", "partial", "partial", "full"],
        ["Inventory and orders", "full", "full", "full", "full", "full", "full", "partial"],
        ["Direct buyer communication", "full", "full", "full", "partial", "partial", "full", "full"],
        ["Online payment", "full", "full", "full", "full", "full", "full", "partial"],
        ["Tap-to-pay POS", "native", "none", "none", "none", "full", "full", "none"],
        ["Community and project context", "full", "partial", "none", "none", "none", "partial", "partial"]
      ],
      sources: ["etsy", "etsyPayments", "ebay", "amazon", "shopify", "square", "instagram", "stripeTerminal"]
    },
    provider: {
      number: "04", name: "Provider", segment: "Operators who host and sell", monthly: 35.06, yearly: 304.72,
      stack: [
        { name: "Square Plus", cost: 49, source: "square", why: "bookings + POS + customer tools" },
        { name: "Luma Plus", cost: 59, source: "luma", why: "events + ticket communication" },
        { name: "Etsy + Instagram", cost: 0, source: "etsy", why: "marketplace + audience", price: "sales fees + ads" }
      ],
      thesis: "Run events, services, products, bookings, orders, and payments from one trusted public presence.",
      caveat: "Provider combines the familiar event, marketplace, audience, booking, and POS jobs while keeping every customer and participant connected to the same practice.",
      columns: ["Rivr Provider", "Square", "Luma", "Eventbrite", "Etsy", "Instagram"],
      costs: ["$35.06/mo", "$0 Free · $49 Plus", "$0 + 5% · Plus $59", "$0 base + ticket fees", "6.5% + processing", "$0 base"],
      rows: [
        ["Services and bookings", "full", "full", "partial", "partial", "partial", "partial"],
        ["Paid events and tickets", "full", "partial", "full", "full", "none", "partial"],
        ["Products, inventory, and orders", "full", "full", "none", "none", "full", "partial"],
        ["Online and tap-to-pay", "native", "full", "partial", "partial", "none", "none"],
        ["Audience communication", "full", "full", "full", "full", "full", "full"],
        ["One customer and participant context", "full", "partial", "partial", "partial", "partial", "partial"],
        ["Projects, groups, and contribution", "full", "none", "none", "none", "none", "partial"]
      ],
      sources: ["square", "luma", "eventbrite", "etsy", "etsyPayments", "instagram", "stripeTerminal"]
    },
    organization: {
      number: "05", name: "Organization", segment: "Teams, co-ops, nonprofits, and programs", monthly: 46.06, yearly: 391.72,
      stack: [
        { name: "Asana Starter · 5 seats", cost: 54.95, source: "asana", why: "projects + task ownership" },
        { name: "Slack Pro · 5 seats", cost: 36.25, source: "slack", why: "team communication" },
        { name: "Square Payroll · 5 people", cost: 65, source: "squarePayroll", why: "payroll + tax filing" },
        { name: "Square Plus", cost: 49, source: "square", why: "POS + staff + customer tools" },
        { name: "Shopify Basic", cost: 29, source: "shopify", why: "storefront + inventory" },
        { name: "Luma Plus", cost: 59, source: "luma", why: "events + ticketing" }
      ],
      thesis: "Coordinate the mission, people, projects, paid work, events, commerce, and money in one operating context.",
      caveat: "The modeled five-person stack uses familiar category leaders. Rivr keeps the work connected across organizations while adding member-controlled tax reserves and Stripe-powered cards by subgroup or project.",
      columns: ["Rivr Organization", "Facebook Groups", "Discord", "Asana", "Slack", "Square Payroll", "Square POS", "Shopify", "Eventbrite"],
      costs: ["$46.06/mo", "$0 base", "$0 core", "$10.99/user annual", "$7.25/user annual", "$35 + $6/person", "$0 Free · $49 Plus", "$29 annual + processing", "$0 base + ticket fees"],
      rows: [
        ["Social community and messaging", "full", "full", "full", "partial", "full", "partial", "partial", "partial", "partial"],
        ["Roles, teams, and permissions", "full", "partial", "full", "partial", "partial", "partial", "partial", "partial", "partial"],
        ["Projects and task ownership", "full", "none", "none", "full", "partial", "none", "none", "none", "none"],
        ["Shared docs and knowledge", "full", "partial", "partial", "full", "partial", "none", "none", "none", "none"],
        ["Governance, proposals, and decisions", "full", "partial", "partial", "none", "partial", "none", "none", "none", "none"],
        ["Subgroup treasuries and budgets", "full", "none", "none", "none", "none", "none", "none", "none", "none"],
        ["Cards by subgroup or project", "stripe", "none", "none", "none", "none", "none", "none", "none", "none"],
        ["Time tracking and paid project work", "full", "none", "none", "partial", "partial", "full", "partial", "none", "none"],
        ["Payouts and automatic tax reserve", "full", "none", "none", "none", "none", "partial", "partial", "none", "none"],
        ["Events and ticketing", "full", "full", "full", "partial", "partial", "none", "none", "none", "full"],
        ["Storefront, inventory, and orders", "full", "partial", "none", "none", "none", "none", "full", "full", "none"],
        ["Tap-to-pay POS", "native", "none", "none", "none", "none", "none", "full", "full", "none"],
        ["Cross-organization collaboration", "full", "none", "partial", "partial", "partial", "none", "none", "none", "none"]
      ],
      sources: ["facebook", "discord", "asana", "slack", "squarePayroll", "square", "shopify", "luma", "eventbrite", "stripeTreasury", "stripeTerminal", "stripeIssuing"]
    }
  };

  var order = ["collaborator", "host", "seller", "provider", "organization"];
  var selected = "organization";

  function money(value) { return "$" + Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function percent(value) { return Math.round(value * 10) / 10 + "%"; }
  function stackTotal(product) { return product.stack.reduce(function (sum, item) { return sum + item.cost; }, 0); }
  function monthlySavings(product) { return stackTotal(product) - product.monthly; }
  function annualSavings(product) { return stackTotal(product) * 12 - product.yearly; }

  function sourceLink(key, compact) {
    var item = sources[key];
    return '<a href="' + item.url + '" target="_blank" rel="noopener noreferrer">' + (compact ? "Source ↗" : item.name + " ↗") + '</a>';
  }

  function header() {
    return '<header class="compare-header"><a class="compare-brand" href="/concepts/" aria-label="Rivr concept directions"><img src="/assets/rivr-symbol-light.png" alt=""><span>Rivr</span></a><nav aria-label="Product concept navigation"><a href="/concepts/catalog/">Catalog</a><a href="/concepts/finder/">Finder</a><a href="/concepts/journeys/">Journeys</a><a href="/concepts/comparison/" aria-current="page">Compare</a></nav><a class="compare-cta" href="https://app.rivr.social/subscribe">See plans <span>↗</span></a></header>';
  }

  function hero() {
    var maxSave = monthlySavings(products.organization);
    return '<section class="compare-hero"><div class="hero-grid"><div><p class="eyebrow">Product stack study · US pricing · August 5, 2026</p><h1>Rivr versus<br><em>the usual stack.</em></h1><p class="hero-copy">See the actual feature table: Luma, Eventbrite, Etsy, eBay, Amazon, Facebook, Instagram, Square, Shopify, Asana, Slack, payroll, and the rest—compared product by product.</p></div><div class="hero-signal" aria-label="Largest modeled monthly stack savings"><span>Modeled savings up to</span><strong>' + money(maxSave) + '</strong><small>per month for a five-person organization</small><i></i></div></div><div class="research-rule"><span>' + Object.keys(sources).length + ' official source pages</span><span>5 Rivr products</span><span>Free apps shown honestly</span><span>POS and selling fees included</span></div></section>';
  }

  function productRail() {
    return '<nav class="product-rail" aria-label="Select a Rivr product">' + order.map(function (key) {
      var p = products[key];
      return '<button type="button" data-select-product="' + key + '" aria-pressed="' + (key === selected) + '"><span>' + p.number + '</span><strong>' + p.name + '</strong><small>' + p.segment + '</small></button>';
    }).join("") + '</nav>';
  }

  function savingsPanel(product) {
    var total = stackTotal(product);
    var saved = monthlySavings(product);
    var annual = annualSavings(product);
    var equation = product.noSavingsClaim
      ? '<div class="savings-equation channel-equation"><div><small>Familiar channels</small><strong>4 apps</strong><span>$0 base + optional ads</span></div><b>→</b><div><small>What stays fragmented</small><strong>4 contexts</strong><span>profiles, groups, events, and work</span></div><b>vs</b><div class="save"><small>Rivr Collaborator</small><strong>' + money(product.monthly) + '</strong><span>/ month · one cumulative context</span></div></div><div class="annual-note">This tier is a consolidation comparison, not a subscription-savings claim: the familiar channels are free at entry.</div>'
      : '<div class="savings-equation"><div><small>Recognizable app stack</small><strong>' + money(total) + '</strong><span>/ month before variable fees</span></div><b>−</b><div><small>Rivr ' + product.name + '</small><strong>' + money(product.monthly) + '</strong><span>/ month</span></div><b>=</b><div class="save"><small>Modeled savings</small><strong>' + money(saved) + '</strong><span>/ month · ' + percent(saved / total * 100) + '</span></div></div><div class="annual-note">Choose Rivr yearly and this modeled stack costs <strong>' + money(annual) + ' more per year</strong>.</div>';
    return '<section class="savings-panel" aria-labelledby="savings-title"><div class="savings-copy"><p class="eyebrow">The apps you would actually recognize</p><h2 id="savings-title">' + product.name + ' vs. assembling the parts</h2><p>' + product.thesis + '</p></div>' + equation + '<div class="stack-list">' + product.stack.map(function (item) {
      return '<article><div><strong>' + item.name + '</strong><span>' + item.why + '</span></div><div><b>' + (item.price || money(item.cost)) + '</b>' + (item.price ? '' : '<small>/mo</small>') + sourceLink(item.source, true) + '</div></article>';
    }).join("") + '</div><aside class="truth-note"><strong>Why consolidation matters</strong><p>' + product.caveat + '</p></aside></section>';
  }

  function statusCell(status) {
    var labels = { full: "Included", native: "Rivr Pay", stripe: "Project cards", partial: "Some", none: "—" };
    return '<td><span class="status status-' + status + '"><i aria-hidden="true"></i>' + labels[status] + '</span></td>';
  }

  function featureMatrix(product) {
    return '<section class="matrix-section matrix-first" aria-labelledby="matrix-title"><div class="section-heading"><p class="eyebrow">Visual feature table</p><h2 id="matrix-title">Rivr vs. the names people already use.</h2><p>Every column is a real competitor for this product. “Some” means that app covers part of the job. Scroll horizontally on small screens.</p></div><div class="matrix-scroll" tabindex="0" aria-label="Scrollable feature comparison for ' + product.name + '"><table><thead><tr><th scope="col">Feature</th>' + product.columns.map(function (column, index) { return '<th scope="col"' + (index === 0 ? ' class="rivr-column"' : '') + '>' + column + '<small>' + product.costs[index] + '</small></th>'; }).join("") + '</tr></thead><tbody>' + product.rows.map(function (row) { return '<tr><th scope="row">' + row[0] + '</th>' + row.slice(1).map(statusCell).join("") + '</tr>'; }).join("") + '</tbody></table></div></section>';
  }

  function moneyLayer(productKey) {
    if (["seller", "provider", "organization"].indexOf(productKey) === -1) return "";
    var cards = [
      '<article><span>01</span><div><small>Accept</small><h3>Rivr Pay</h3><p>Turn a compatible phone into a contactless point of sale. The Stripe Terminal settlement and fee rail is built; the dedicated native Rivr Pay experience is now being designed.</p></div></article>',
      '<article><span>02</span><div><small>Settle</small><h3>Connected payouts</h3><p>Online and in-person payments settle through the same connected seller account, keeping the offering, buyer, receipt, and payout in one operating context.</p></div></article>'
    ];
    if (productKey === "organization") {
      cards.push('<article><span>03</span><div><small>Reserve</small><h3>Choose a tax set-aside</h3><p>Members can choose a withholding rate so part of earned income stays reserved for taxes. It remains their money and is an estimate—not tax filing or tax advice.</p></div></article>');
      cards.push('<article><span>04</span><div><small>Hold</small><h3>Treasuries by subgroup</h3><p>Keep funds attached to the team, program, or project that owns their purpose instead of flattening every balance into one account.</p></div></article>');
      cards.push('<article><span>05</span><div><small>Control</small><h3>Cards by project</h3><p>Issue Stripe-powered virtual cards, fund them from the right treasury, and apply spending limits where the work happens.</p></div></article>');
    }
    return '<section class="money-layer" aria-labelledby="money-layer-title"><div class="money-layer-heading"><p class="eyebrow">One connected money layer</p><h2 id="money-layer-title">From receiving money to putting it to work.</h2><p>Rivr uses Stripe infrastructure without making teams leave Rivr to understand why money moved, who it belonged to, or which project authorized it.</p></div><div class="money-layer-grid">' + cards.join("") + '</div></section>';
  }

  function rivrCheckoutSurcharge(faceValue) {
    var faceCents = Math.round(faceValue * 100);
    var margin = Math.round(faceCents * 0.033) + 149;
    var buyerTotal = Math.ceil((faceCents + margin + 30) / (1 - 0.029));
    return (buyerTotal - faceCents) / 100;
  }

  function scenarioCard(name, value, detail, tone) {
    return '<article class="scenario-card ' + (tone || "") + '"><span>' + name + '</span><strong>' + (typeof value === "number" ? money(value) : value) + '</strong><p>' + detail + '</p></article>';
  }

  function scenario(productKey, product, quantity, average, team) {
    var revenue = quantity * average;
    if (productKey === "collaborator") {
      return '<div class="scenario-static"><div>' + scenarioCard("Familiar social channels", "$0 base", "Facebook, Instagram, LinkedIn, and Meetup are free at entry. Ads and premium upgrades are optional.") + scenarioCard("Rivr Collaborator", product.monthly, "One profile connects groups, events, messages, gigs, and contribution history.", "rivr") + scenarioCard("The real comparison", "4 apps", "Four separate apps and identities versus one cumulative participation context.") + '</div></div>';
    }
    if (productKey === "host") {
      var eventbriteFees = quantity * (average * 0.037 + 1.79) + revenue * 0.029;
      var lumaFreeFees = revenue * 0.05 + revenue * 0.029 + quantity * 0.30;
      var rivrBuyerFees = quantity * rivrCheckoutSurcharge(average);
      return '<div class="scenario-cards">' + scenarioCard("Rivr buyer checkout load", rivrBuyerFees, "Estimate for " + quantity + " single-ticket orders. Host receives the listed " + money(revenue) + "; membership is separate.", "rivr") + scenarioCard("Eventbrite buyer fees", eventbriteFees, "Default US ticketing + processing fees for the same single-ticket orders; organizer may choose to absorb them.") + scenarioCard("Luma Free + Stripe", lumaFreeFees, "5% Luma platform fee plus typical 2.9% + 30¢ Stripe processing. Luma Plus changes the 5% to a $59 monthly plan.") + '</div>';
    }
    if (productKey === "seller") {
      var shopify = 29 + revenue * 0.029 + quantity * 0.30;
      var etsy = quantity * 0.20 + revenue * 0.065 + revenue * 0.03 + quantity * 0.25;
      var ebay = revenue * 0.136 + quantity * 0.40;
      var square = 49 + revenue * 0.029 + quantity * 0.30;
      return '<div class="scenario-cards">' + scenarioCard("Rivr Seller", product.monthly, "Seller keeps the " + money(revenue) + " listed face value; buyers see Rivr and card costs at checkout.", "rivr") + scenarioCard("Etsy seller fees", etsy, "20¢ listings + 6.5% transaction + US Etsy Payments 3% + 25¢. Ads excluded.") + scenarioCard("eBay typical fees", ebay, "Modeled at 13.6% + 40¢ per order for a common category; category rates vary.") + scenarioCard("Square Plus + online payments", square, "$49 plan plus 2.9% + 30¢ per online payment.") + scenarioCard("Shopify Basic + online payments", shopify, "$29 annual-plan equivalent plus 2.9% + 30¢ online processing.") + '</div>';
    }
    if (productKey === "provider") {
      var specialistFixed = stackTotal(product);
      var specialistProcessing = revenue * 0.025 + quantity * 0.15;
      var rivrBuyer = quantity * rivrCheckoutSurcharge(average);
      return '<div class="scenario-cards">' + scenarioCard("Rivr Provider", product.monthly, "One provider identity; listed revenue is seller-net. Buyers cover an estimated " + money(rivrBuyer) + " in checkout costs for this scenario.", "rivr") + scenarioCard("Square Plus + Luma Plus", specialistFixed, "Recognizable booking/POS and event stack before processing, marketplace fees, or ads.") + scenarioCard("Stack + Square processing", specialistFixed + specialistProcessing, "Illustrative if all " + quantity + " transactions run in person through Square Plus at 2.5% + 15¢.") + '</div>';
    }
    var projectAndChat = team * (10.99 + 7.25);
    var payroll = 35 + team * 6;
    var commerceAndEvents = 49 + 29 + 59;
    var standardStack = projectAndChat + payroll + commerceAndEvents;
    return '<div class="scenario-cards">' + scenarioCard("Rivr Organization", product.monthly, "Social community, docs, governance, projects, paid work, treasuries, project cards, Rivr Pay, events, offerings, analytics, and API access.", "rivr") + scenarioCard("Asana + Slack", projectAndChat, team + " annual-billed seats for project management and team communication.") + scenarioCard("Square Payroll", payroll, "$35 base + $6 × " + team + " people for full-service payroll and payroll-tax filing.") + scenarioCard("Square + Shopify + Luma", commerceAndEvents, "POS/customer tools, storefront/inventory, and event ticketing before processing or sales fees.") + scenarioCard("Recognizable full stack", standardStack, money(standardStack - product.monthly) + " more each month than Rivr, before variable fees.") + '</div>';
  }

  function scenarioSection(productKey, product) {
    var isOrg = productKey === "organization";
    var isCollab = productKey === "collaborator";
    var quantityLabel = productKey === "host" ? "Paid tickets / month" : productKey === "provider" ? "Paid bookings, orders, or tickets" : "Orders / month";
    var averageLabel = productKey === "host" ? "Ticket price" : "Average transaction";
    return '<section class="scenario-section" aria-labelledby="scenario-title"><div class="section-heading"><p class="eyebrow">Put the fees in context</p><h2 id="scenario-title">A transparent working scenario.</h2><p>Change the assumptions. Fixed subscriptions, per-seat costs, marketplace fees, and payment processing stay separate.</p></div>' + (isCollab ? '' : '<form class="scenario-controls" data-scenario-controls>' + (isOrg ? '<label>Team members<input type="number" min="1" max="150" step="1" value="5" data-team></label>' : '<label>' + quantityLabel + '<input type="number" min="1" max="10000" step="1" value="' + (productKey === "host" ? "100" : productKey === "provider" ? "40" : "40") + '" data-quantity></label><label>' + averageLabel + '<span><b>$</b><input type="number" min="1" max="10000" step="1" value="50" data-average></span></label>') + '</form>') + '<div data-scenario-output>' + scenario(productKey, product, productKey === "host" ? 100 : 40, 50, 5) + '</div><p class="scenario-disclaimer">Illustrations use current US list pricing, exclude tax and temporary promotions, and are not quotes. Rivr checkout estimates model its current margin plus domestic card gross-up; categories, ads, referrals, international cards, and payout corridors can change totals.</p></section>';
  }

  function sourcesSection(product) {
    return '<section class="sources-section" aria-labelledby="sources-title"><div class="section-heading"><p class="eyebrow">Evidence ledger</p><h2 id="sources-title">Primary sources behind this view.</h2><p>Reviewed August 5, 2026. Competitors can change plans at any time; follow the source before making a purchase decision.</p></div><div class="source-grid">' + product.sources.map(function (key, index) { var item = sources[key]; return '<article><span>' + String(index + 1).padStart(2, "0") + '</span><div><h3>' + item.name + '</h3><p>' + item.note + '</p>' + sourceLink(key, false) + '</div></article>'; }).join("") + '</div></section>';
  }

  function methodology() {
    return '<section class="methodology"><div><p class="eyebrow">Method</p><h2>Show the table.<br>Then count the stack.</h2></div><ol><li><span>01</span><div><strong>Known competitors first</strong><p>The matrix uses products a public audience already understands: Facebook, Instagram, Luma, Eventbrite, Etsy, eBay, Square, Shopify, Asana, Slack, and payroll.</p></div></li><li><span>02</span><div><strong>Free stays free</strong><p>Free social channels appear in the table and stack, but never masquerade as subscription savings.</p></div></li><li><span>03</span><div><strong>Paid components are explicit</strong><p>Annual equivalents lower the model where available. Per-seat, sales, ticketing, and payment fees stay visible.</p></div></li><li><span>04</span><div><strong>System capability matters</strong><p>For organizations, the comparison includes docs, governance, treasuries, project cards, paid work, commerce, events, and cross-organization coordination—not just chat and tasks.</p></div></li></ol></section>';
  }

  function renderProduct() {
    var product = products[selected];
    var target = document.querySelector("[data-product-detail]");
    target.innerHTML = featureMatrix(product) + savingsPanel(product) + moneyLayer(selected) + scenarioSection(selected, product) + sourcesSection(product);
    document.querySelectorAll("[data-select-product]").forEach(function (button) { button.setAttribute("aria-pressed", String(button.dataset.selectProduct === selected)); });
    bindScenario();
  }

  function bindScenario() {
    var controls = document.querySelector("[data-scenario-controls]");
    if (!controls) return;
    controls.addEventListener("input", function () {
      var quantityInput = controls.querySelector("[data-quantity]");
      var averageInput = controls.querySelector("[data-average]");
      var teamInput = controls.querySelector("[data-team]");
      var quantity = quantityInput ? Math.max(1, Number(quantityInput.value) || 1) : 40;
      var average = averageInput ? Math.max(1, Number(averageInput.value) || 1) : 50;
      var team = teamInput ? Math.max(1, Number(teamInput.value) || 1) : 5;
      document.querySelector("[data-scenario-output]").innerHTML = scenario(selected, products[selected], quantity, average, team);
    });
  }

  root.innerHTML = header() + '<main>' + hero() + '<section class="comparison-workspace"><div class="workspace-intro"><p class="eyebrow">Choose a Rivr product</p><h2>See its competitors feature by feature.</h2></div>' + productRail() + '<div data-product-detail></div></section>' + methodology() + '</main><footer class="compare-footer"><img src="/assets/rivr-symbol-light.png" alt=""><p>A sourced, product-by-product view of how one connected system can replace a fragmented operating stack.</p><a href="https://app.rivr.social/subscribe">Choose your Rivr product ↗</a></footer>';

  document.querySelector(".product-rail").addEventListener("click", function (event) {
    var button = event.target.closest("[data-select-product]");
    if (!button) return;
    selected = button.dataset.selectProduct;
    renderProduct();
    document.querySelector("[data-product-detail]").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  });

  renderProduct();
})();
