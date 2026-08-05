(function () {
  "use strict";

  var root = document.querySelector("#comparison-root");
  if (!root) return;

  var sources = {
    linktree: { name: "Linktree pricing", url: "https://linktr.ee/s/pricing", note: "Pro $9/month; free and lower-cost plans available." },
    discord: { name: "Discord Nitro pricing", url: "https://support.discord.com/hc/en-us/articles/4407269525911-Nitro-Localized-Pricing-FAQ", note: "Nitro $9.99/month in USD; Discord's core service remains free." },
    linkedin: { name: "LinkedIn Premium FAQ", url: "https://www.linkedin.com/help/linkedin/answer/a570070/premium-faq-", note: "Premium pricing is personalized and shown during checkout, so it is not included in our stack total." },
    meetup: { name: "Meetup organizer pricing", url: "https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview", note: "Standard starts at $29.99 monthly or $174.99 yearly ($14.58/month equivalent); location and offers can change it." },
    eventbrite: { name: "Eventbrite organizer pricing", url: "https://www.eventbrite.com/organizer/pricing/", note: "Free publishing; US paid tickets carry 3.7% + $1.79 per ticket and 2.9% per order. Pro email starts at $15/month." },
    luma: { name: "Luma events pricing", url: "https://luma.com/pricing", note: "Free plan has a 5% platform fee; Plus is $59/month billed annually with 0% platform fee. Stripe processing remains." },
    mailchimp: { name: "Mailchimp pricing", url: "https://mailchimp.com/pricing/marketing/", note: "Essentials starts at $13/month for up to 500 contacts; limits and overages apply." },
    shopify: { name: "Shopify pricing", url: "https://www.shopify.com/pricing", note: "Basic is $39 monthly or $29/month billed yearly; online card rate starts at 2.9% + 30¢." },
    etsy: { name: "Etsy fee basics", url: "https://help.etsy.com/hc/en-us/articles/360035902374-Etsy-Fee-Basics", note: "20¢ listing fee and 6.5% transaction fee, plus payment processing." },
    etsyPayments: { name: "Etsy Payments fees", url: "https://help.etsy.com/hc/en-gb/articles/115015628847-What-are-Payment-Processing-Fees-for-Selling-on-Etsy", note: "US Etsy Payments processing is 3% + 25¢ per order." },
    amazon: { name: "Amazon seller pricing", url: "https://sell.amazon.com/pricing", note: "Professional plan $39.99/month plus category referral fees; many common categories are 15%. Fulfillment and ads can add cost." },
    craigslist: { name: "Craigslist posting fees", url: "https://www.craigslist.org/about/help/faqs/payment", note: "Most categories are free; selected categories and locations charge per posting." },
    calendly: { name: "Calendly pricing", url: "https://calendly.com/pricing/", note: "Standard is $10/seat/month billed yearly; free plan available with narrower limits." },
    connecteam: { name: "Connecteam pricing", url: "https://connecteam.com/pricing/", note: "Basic is $29/month per hub billed yearly, up to 30 users. Operations, Communications, and HR are separate hubs: $87/month together." },
    qbTime: { name: "QuickBooks Time pricing", url: "https://quickbooks.intuit.com/time-tracking/pricing/?type=business", note: "Time Premium list price is $20/month + $8/user/month and requires QuickBooks Online; temporary intro discounts excluded." },
    qbPayroll: { name: "QuickBooks Payroll pricing", url: "https://quickbooks.intuit.com/payroll/pricing/?product=core", note: "Payroll Core + Simple Start list price is $88/month + $6.50/employee/month; temporary intro discounts excluded." },
    clover: { name: "Clover pricing", url: "https://www.clover.com/pricing", note: "Hardware, software, processing, contract terms, and pricing vary by business type and reseller; contact sales." }
  };

  var products = {
    collaborator: {
      number: "01", name: "Collaborator", segment: "Participants and contributors", monthly: 13.06, yearly: 135.72,
      stack: [{ name: "Linktree Pro", cost: 9, source: "linktree", why: "public profile hub" }, { name: "Discord Nitro", cost: 9.99, source: "discord", why: "premium community identity + messaging" }],
      thesis: "One trusted identity for discovering communities, joining events, messaging people, and carrying contribution context into real work.",
      caveat: "Collaborator replaces the paid identity-and-community layer while adding what the stack cannot connect: groups, events, project jobs, contribution badges, and a record that becomes more useful with every participation.",
      columns: ["Rivr Collaborator", "Linktree Pro", "Discord", "Meetup attendee", "LinkedIn Basic"],
      costs: ["$13.06/mo", "$9/mo", "$0 core · $9.99 Nitro", "$0 to attend", "$0 basic · Premium varies"],
      rows: [
        ["One portable public identity", "full", "partial", "partial", "partial", "full"],
        ["Find groups and local events", "full", "none", "partial", "full", "partial"],
        ["Direct person-to-person messaging", "full", "none", "full", "partial", "full"],
        ["Claim project jobs", "full", "none", "none", "none", "partial"],
        ["Earn contribution badges", "full", "none", "none", "none", "partial"],
        ["Context carries between communities", "full", "none", "partial", "none", "partial"]
      ],
      sources: ["linktree", "discord", "linkedin", "meetup"]
    },
    host: {
      number: "02", name: "Host", segment: "Conveners and event makers", monthly: 24.06, yearly: 222.72,
      stack: [{ name: "Meetup Standard", cost: 14.58, source: "meetup", why: "persistent group + events" }, { name: "Eventbrite Pro", cost: 15, source: "eventbrite", why: "ticketing + expanded email" }],
      thesis: "Paid tickets, RSVPs, waitlists, event communication, discovery, and the community relationship around the gathering in one place.",
      caveat: "Host covers the complete loop from community invitation through ticketing, attendance, communication, and continuity after the event—so every gathering can strengthen the next one.",
      columns: ["Rivr Host", "Meetup Standard", "Eventbrite", "Luma Plus", "Mailchimp Essentials"],
      costs: ["$24.06/mo", "$14.58 equivalent", "$0 base · Pro $15", "$59/mo annual", "from $13/mo"],
      rows: [
        ["Paid tickets and registration", "full", "partial", "full", "full", "none"],
        ["RSVPs, waitlists, and check-in", "full", "full", "full", "full", "none"],
        ["Persistent group around events", "full", "full", "partial", "partial", "none"],
        ["Attendee communication", "full", "partial", "full", "full", "full"],
        ["Public event discovery", "full", "full", "full", "partial", "none"],
        ["Event analytics", "full", "partial", "full", "full", "partial"]
      ],
      sources: ["meetup", "eventbrite", "luma", "mailchimp"]
    },
    seller: {
      number: "03", name: "Seller", segment: "Makers and independent sellers", monthly: 24.06, yearly: 207.72,
      stack: [{ name: "Shopify Basic", cost: 29, source: "shopify", why: "storefront + orders" }, { name: "Mailchimp Essentials", cost: 13, source: "mailchimp", why: "customer communication" }, { name: "Linktree Pro", cost: 9, source: "linktree", why: "public identity hub" }],
      thesis: "A storefront, paid offerings, orders, communication, and a trusted identity inside the same network where relationships already live.",
      caveat: "Seller covers the complete selling workflow—publishing, discovery, storefront identity, orders, buyer communication, payment, and analytics—inside the relationships that give an offering its context.",
      columns: ["Rivr Seller", "Shopify Basic", "Etsy", "Amazon Pro", "Craigslist"],
      costs: ["$24.06/mo", "$29 annual · $39 monthly", "$0 base + listing/sale fees", "$39.99 + referral fees", "mostly free · some paid posts"],
      rows: [
        ["Paid product/service listings", "full", "full", "full", "full", "full"],
        ["Storefront and seller identity", "full", "full", "full", "full", "partial"],
        ["Inventory and order workflow", "full", "full", "full", "full", "none"],
        ["Built-in marketplace discovery", "full", "partial", "full", "full", "full"],
        ["Direct buyer communication", "full", "partial", "full", "partial", "full"],
        ["Community and contribution context", "full", "none", "partial", "none", "none"],
        ["Seller keeps listed face price", "full", "partial", "none", "none", "full"]
      ],
      sources: ["shopify", "etsy", "etsyPayments", "amazon", "craigslist", "mailchimp", "linktree"]
    },
    provider: {
      number: "04", name: "Provider", segment: "Operators who host and sell", monthly: 35.06, yearly: 304.72,
      stack: [{ name: "Meetup Standard", cost: 14.58, source: "meetup", why: "group + events" }, { name: "Eventbrite Pro", cost: 15, source: "eventbrite", why: "ticketing" }, { name: "Shopify Basic", cost: 29, source: "shopify", why: "storefront" }, { name: "Calendly Standard", cost: 10, source: "calendly", why: "service scheduling" }, { name: "Mailchimp Essentials", cost: 13, source: "mailchimp", why: "audience communication" }],
      thesis: "The whole shape of independent work—events, services, offerings, bookings, orders, and audience—under one provider identity.",
      caveat: "Provider completes the combined host-and-seller loop in one identity: invite, schedule, ticket, offer, transact, communicate, and turn one-time customers or attendees into repeat participation.",
      columns: ["Rivr Provider", "Meetup", "Eventbrite", "Shopify", "Calendly", "Mailchimp"],
      costs: ["$35.06/mo", "$14.58 equivalent", "$0 base · Pro $15", "$29 annual", "$10/seat annual", "from $13/mo"],
      rows: [
        ["Persistent community identity", "full", "full", "partial", "partial", "partial", "none"],
        ["Paid events and tickets", "full", "partial", "full", "none", "partial", "none"],
        ["Services and paid offerings", "full", "none", "partial", "full", "partial", "none"],
        ["Appointments / booking workflow", "full", "partial", "partial", "partial", "full", "none"],
        ["Inventory and orders", "full", "none", "partial", "full", "none", "none"],
        ["Audience communication", "full", "partial", "full", "partial", "partial", "full"],
        ["Unified participant/customer context", "full", "none", "partial", "partial", "partial", "partial"]
      ],
      sources: ["meetup", "eventbrite", "shopify", "calendly", "mailchimp"]
    },
    organization: {
      number: "05", name: "Organization", segment: "Teams, co-ops, nonprofits, and programs", monthly: 46.06, yearly: 391.72,
      stack: [{ name: "Connecteam · 3 Basic hubs", cost: 87, source: "connecteam", why: "operations + communications + HR" }, { name: "Shopify Basic", cost: 29, source: "shopify", why: "offerings + orders" }, { name: "Meetup Standard", cost: 14.58, source: "meetup", why: "public community + events" }, { name: "Eventbrite Pro", cost: 15, source: "eventbrite", why: "ticketing + event email" }],
      thesis: "Roles, projects, job timers, paid work, events, offerings, communication, analytics, and shared context without splitting the mission across an operations stack.",
      caveat: "Organization covers the whole operating loop: roles, projects, timers, hourly or fixed work, contributor payouts, events, commerce, communication, analytics, and API access—with the mission and relationships still attached.",
      columns: ["Rivr Organization", "Connecteam", "QuickBooks Time", "QB Payroll", "Clover", "Shopify", "Meetup"],
      costs: ["$46.06/mo", "$29/hub annual", "$20 + $8/user", "$88 + $6.50/employee", "variable + hardware/fees", "$29 annual", "$14.58 equivalent"],
      rows: [
        ["Team roles and communication", "full", "full", "partial", "partial", "partial", "partial", "partial"],
        ["Projects, jobs, and task ownership", "full", "full", "partial", "none", "none", "none", "none"],
        ["Timers and tracked-time records", "full", "full", "full", "partial", "partial", "none", "none"],
        ["Pay fixed/hourly project work", "full", "partial", "none", "full", "none", "none", "none"],
        ["Paid events and tickets", "full", "partial", "none", "none", "none", "none", "full"],
        ["Offerings, inventory, and orders", "full", "none", "none", "none", "full", "full", "none"],
        ["Community + governance context", "full", "partial", "none", "none", "none", "none", "partial"],
        ["Analytics and API access", "full", "partial", "partial", "partial", "partial", "partial", "partial"]
      ],
      sources: ["connecteam", "qbTime", "qbPayroll", "clover", "shopify", "meetup", "eventbrite"]
    }
  };

  var order = ["collaborator", "host", "seller", "provider", "organization"];
  var selected = "organization";

  function money(value) { return "$" + value.toFixed(2); }
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
    return '<section class="compare-hero"><div class="hero-grid"><div><p class="eyebrow">Product stack study · US pricing · August 5, 2026</p><h1>One subscription.<br><em>Fewer fragments.</em></h1><p class="hero-copy">Rivr is not five unrelated apps bundled behind one login. It connects identity, community, exchange, events, and coordinated work so information can keep its context as people move between them.</p></div><div class="hero-signal" aria-label="Largest modeled monthly stack savings"><span>Modeled savings up to</span><strong>' + money(maxSave) + '</strong><small>per month before transaction fees</small><i></i></div></div><div class="research-rule"><span>17 official source pages</span><span>5 product models</span><span>Fees separated by who pays</span><span>Limits named, not hidden</span></div></section>';
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
    return '<section class="savings-panel" aria-labelledby="savings-title"><div class="savings-copy"><p class="eyebrow">Conservative replacement stack</p><h2 id="savings-title">' + product.name + ' vs. assembling the parts</h2><p>' + product.thesis + '</p></div><div class="savings-equation"><div><small>Modeled stack</small><strong>' + money(total) + '</strong><span>/ month</span></div><b>−</b><div><small>Rivr ' + product.name + '</small><strong>' + money(product.monthly) + '</strong><span>/ month</span></div><b>=</b><div class="save"><small>Modeled savings</small><strong>' + money(saved) + '</strong><span>/ month · ' + percent(saved / total * 100) + '</span></div></div><div class="annual-note">Choose Rivr yearly and the same modeled stack is <strong>' + money(annual) + ' more per year</strong>.</div><div class="stack-list">' + product.stack.map(function (item) {
      return '<article><div><strong>' + item.name + '</strong><span>' + item.why + '</span></div><div><b>' + money(item.cost) + '</b><small>/mo</small>' + sourceLink(item.source, true) + '</div></article>';
    }).join("") + '</div><aside class="truth-note"><strong>Why consolidation matters</strong><p>' + product.caveat + '</p></aside></section>';
  }

  function statusCell(status) {
    var labels = { full: "Included", partial: "Partial / adjacent", none: "Not included" };
    return '<td><span class="status status-' + status + '"><i aria-hidden="true"></i>' + labels[status] + '</span></td>';
  }

  function featureMatrix(product) {
    return '<section class="matrix-section" aria-labelledby="matrix-title"><div class="section-heading"><p class="eyebrow">Functional outcome map</p><h2 id="matrix-title">How each product gets the work done.</h2><p>“Partial” means the service contributes to the outcome but needs another tool to complete it. Scroll horizontally on small screens.</p></div><div class="matrix-scroll" tabindex="0" aria-label="Scrollable feature comparison for ' + product.name + '"><table><thead><tr><th scope="col">Capability</th>' + product.columns.map(function (column, index) { return '<th scope="col"' + (index === 0 ? ' class="rivr-column"' : '') + '>' + column + '<small>' + product.costs[index] + '</small></th>'; }).join("") + '</tr></thead><tbody>' + product.rows.map(function (row) { return '<tr><th scope="row">' + row[0] + '</th>' + row.slice(1).map(statusCell).join("") + '</tr>'; }).join("") + '</tbody></table></div></section>';
  }

  function rivrCheckoutSurcharge(faceValue) {
    var faceCents = Math.round(faceValue * 100);
    var margin = Math.round(faceCents * 0.033) + 149;
    var buyerTotal = Math.ceil((faceCents + margin + 30) / (1 - 0.029));
    return (buyerTotal - faceCents) / 100;
  }

  function scenarioCard(name, value, detail, tone) {
    return '<article class="scenario-card ' + (tone || "") + '"><span>' + name + '</span><strong>' + money(value) + '</strong><p>' + detail + '</p></article>';
  }

  function scenario(productKey, product, quantity, average, team) {
    var revenue = quantity * average;
    if (productKey === "collaborator") {
      return '<div class="scenario-static"><div>' + scenarioCard("Premium personal stack", stackTotal(product), "Linktree Pro + Discord Nitro, before any paid professional-network plan.") + scenarioCard("Rivr Collaborator", product.monthly, money(monthlySavings(product)) + " less each month, with groups, events, jobs, badges, and identity connected.", "rivr") + scenarioCard("Connected value", annualSavings(product), "Annual savings against that paid stack when Collaborator is billed yearly—plus one cumulative contribution record.") + '</div></div>';
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
      var amazon = 39.99 + revenue * 0.15;
      return '<div class="scenario-cards">' + scenarioCard("Rivr seller cost", product.monthly, "Seller keeps the " + money(revenue) + " listed face value; buyers see Rivr and card costs at checkout.", "rivr") + scenarioCard("Shopify Basic seller cost", shopify, "$29 annual-plan equivalent plus 2.9% + 30¢ online processing.") + scenarioCard("Etsy seller fees", etsy, "20¢ listings + 6.5% transaction + US Etsy Payments 3% + 25¢. Ads and other fees excluded.") + scenarioCard("Amazon Pro seller fees", amazon, "$39.99 plan + modeled 15% referral fee. Fulfillment, storage, and advertising excluded.") + '</div>';
    }
    if (productKey === "provider") {
      var specialistFixed = stackTotal(product);
      var specialistProcessing = revenue * 0.029 + quantity * 0.30;
      var rivrBuyer = quantity * rivrCheckoutSurcharge(average);
      return '<div class="scenario-cards">' + scenarioCard("Rivr provider cost", product.monthly, "One provider identity; listed revenue is seller-net. Buyers cover an estimated " + money(rivrBuyer) + " in checkout costs for this scenario.", "rivr") + scenarioCard("Five-tool fixed stack", specialistFixed, "Meetup + Eventbrite Pro + Shopify + Calendly + Mailchimp, before payment processing.") + scenarioCard("Stack + Shopify processing", specialistFixed + specialistProcessing, "Illustrative if all " + quantity + " transactions run through Shopify at 2.9% + 30¢; event fees can add more.") + '</div>';
    }
    var connecteam = 87;
    var qbTime = 20 + team * 8;
    var qbPayroll = 88 + team * 6.5;
    return '<div class="scenario-cards">' + scenarioCard("Rivr Organization", product.monthly, "Roles, projects, timers, paid project work, events, offerings, analytics, and API access.", "rivr") + scenarioCard("Connecteam · 3 Basic hubs", connecteam, "Annual-billed Operations + Communications + HR, up to 30 users.") + scenarioCard("QuickBooks Time", qbTime, "$20 base + $8 × " + team + " users for the time-tracking portion alone; QuickBooks Online is also required.") + scenarioCard("QuickBooks Payroll", qbPayroll, "$88 + $6.50 × " + team + " employees for payroll and accounting. Rivr connects tracked project work directly to contributor payout.") + '</div>';
  }

  function scenarioSection(productKey, product) {
    var isOrg = productKey === "organization";
    var isCollab = productKey === "collaborator";
    var quantityLabel = productKey === "host" ? "Paid tickets / month" : productKey === "provider" ? "Paid bookings, orders, or tickets" : "Orders / month";
    var averageLabel = productKey === "host" ? "Ticket price" : "Average transaction";
    return '<section class="scenario-section" aria-labelledby="scenario-title"><div class="section-heading"><p class="eyebrow">Put the fees in context</p><h2 id="scenario-title">A transparent working scenario.</h2><p>Change the assumptions. Subscription savings and transaction economics are different claims, so we keep them separate.</p></div>' + (isCollab ? '' : '<form class="scenario-controls" data-scenario-controls>' + (isOrg ? '<label>Team members<input type="number" min="1" max="150" step="1" value="5" data-team></label>' : '<label>' + quantityLabel + '<input type="number" min="1" max="10000" step="1" value="' + (productKey === "host" ? "100" : productKey === "provider" ? "40" : "40") + '" data-quantity></label><label>' + averageLabel + '<span><b>$</b><input type="number" min="1" max="10000" step="1" value="50" data-average></span></label>') + '</form>') + '<div data-scenario-output>' + scenario(productKey, product, productKey === "host" ? 100 : 40, 50, 5) + '</div><p class="scenario-disclaimer">Illustrations use US list pricing, exclude tax and temporary promotions, and are not quotes. Rivr checkout estimate models its current 3.3% + $1.49 margin plus domestic card gross-up; actual tax, commissions, referrals, international cards, and payout corridors can change totals.</p></section>';
  }

  function sourcesSection(product) {
    return '<section class="sources-section" aria-labelledby="sources-title"><div class="section-heading"><p class="eyebrow">Evidence ledger</p><h2 id="sources-title">Primary sources behind this view.</h2><p>Reviewed August 5, 2026. Competitors can change plans at any time; follow the source before making a purchase decision.</p></div><div class="source-grid">' + product.sources.map(function (key, index) { var item = sources[key]; return '<article><span>' + String(index + 1).padStart(2, "0") + '</span><div><h3>' + item.name + '</h3><p>' + item.note + '</p>' + sourceLink(key, false) + '</div></article>'; }).join("") + '</div></section>';
  }

  function methodology() {
    return '<section class="methodology"><div><p class="eyebrow">Method</p><h2>Compare the work,<br>then count the tools.</h2></div><ol><li><span>01</span><div><strong>Functional outcomes first</strong><p>Every model starts with what a person or organization needs to accomplish, not one-to-one menu-item matching.</p></div></li><li><span>02</span><div><strong>Lowest credible stack</strong><p>Published annual equivalents are used when they lower competitor cost. Promotions and tax are excluded.</p></div></li><li><span>03</span><div><strong>No double counting</strong><p>Alternative channels such as Etsy and Amazon appear in feature and fee comparisons but are not both forced into the replacement-stack total.</p></div></li><li><span>04</span><div><strong>Relevant pitfalls only</strong><p>Free tiers, marketplace reach, physical POS, fulfillment, payroll compliance, and buyer-paid fees appear only where they materially change the decision.</p></div></li></ol></section>';
  }

  function renderProduct() {
    var product = products[selected];
    var target = document.querySelector("[data-product-detail]");
    target.innerHTML = savingsPanel(product) + featureMatrix(product) + scenarioSection(selected, product) + sourcesSection(product);
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

  root.innerHTML = header() + '<main>' + hero() + '<section class="comparison-workspace"><div class="workspace-intro"><p class="eyebrow">Choose the product, then inspect the stack</p><h2>The comparison changes with the job.</h2></div>' + productRail() + '<div data-product-detail></div></section>' + methodology() + '</main><footer class="compare-footer"><img src="/assets/rivr-symbol-light.png" alt=""><p>Not a blanket “all-in-one” claim. A sourced map of what one connected system can replace—and what it cannot.</p><a href="https://app.rivr.social/subscribe">Choose your Rivr product ↗</a></footer>';

  document.querySelector(".product-rail").addEventListener("click", function (event) {
    var button = event.target.closest("[data-select-product]");
    if (!button) return;
    selected = button.dataset.selectProduct;
    renderProduct();
    document.querySelector("[data-product-detail]").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  });

  renderProduct();
})();
