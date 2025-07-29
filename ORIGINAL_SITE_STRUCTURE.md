# Original ONE Local Website Structure

## I. Overall Structure
The website is a single-page application built with React and Material-UI. It features a main navigation bar, a central content area that switches between different pages, and a global footer.

## II. Main Navigation Bar (NavigationBar)
The navigation bar is responsive, showing a full menu on desktops and a hamburger menu on mobile.
- **Logo**: An image of the ONE Local logo.
- **Brand Name**: "ONE Local" (clickable, leads to Home page).
- **Desktop Menu Items**:
  - Home (Button) -> Navigates to the LandingPage.
  - About (Dropdown Menu)
    - Manifesto -> Navigates to ManifestoPage.
    - Team -> Navigates to TeamPage.
    - Whitepaper -> Navigates to WhitepaperPage.
    - Investors -> Navigates to InvestorsPage.
  - Features (Dropdown Menu)
    - Overview -> Navigates to FeaturesOverviewPage.
    - For Local Members -> Navigates to LocalMembersPage.
    - For Event Hosts -> Navigates to EventHostsPage.
    - For Sellers -> Navigates to SellersPage.
    - For Organizations -> Navigates to OrganizationsPage.
  - Community (Dropdown Menu)
    - Impact Stories -> Navigates to ImpactStoriesPage.
    - Blog -> Navigates to BlogPage.
  - Download App (Button) -> Navigates to DownloadAppPage.
- **Mobile Menu**: A hamburger icon that opens a menu with the same top-level categories: Home, About, Features, Community, and Download App. Sub-menus are accessed via nested interactions.

## III. Pages & Content

### A. Home (LandingPage)
This is the main landing page, composed of multiple sections designed to give a comprehensive overview of ONE Local.

#### Hero Section:
- **Headline**: "Empower Your Community, Enrich Your Life."
- **Sub-headline/Mission**: "Together, we build the future — one connection, one offering, one moment at a time."
- **Buttons**:
  - "Download the App" (CTA)
  - "Learn More" (links to Impact Stories page)
- **Image**: A visual representing the community.

#### Hero Carousel:
An auto-scrolling, full-width carousel with text overlays on images.
Slides include:
- Find Your Community / Enrich Your Life
- Find A Gig / Or Build A Gig Economy
- Find Markets Near You / Or Manage Your Market
- Find a Job / Or Find Someone To Help You
- Borrow Equipment / Or Loan Hardware You Own
- Find Wellness Professionals / Or Offer Your Services To Others
- Find Business Opportunities / Or Manage Your Organization
- Find Events Near You / Or Manage And Promote Events

#### Essential Features Section:
- **Headline**: "Discover ONE Local's Essential Features"
- **Content**: A row of 5 clickable cards, each with an image, title, and description.
  - **Share**: "find what you need, and share what you have"
  - **Groups**: "Join local groups doing things you care about"
  - **Events**: "Host or attend local events"
  - **Marketplace**: "Buy & sell products or services locally"
  - **Community**: "Manage tasks, make decisions, and earn stake in collaborative projects" (text has an animated gradient).
- **CTA**: Each card has an "Explore" button.

#### Affiliated Orgs (LogoCollection)
- **Headline**: "Affiliated Orgs"
- **Content**: A grid of logos of affiliated organizations. Clicking a logo opens a modal.
- **Organizations**: Open Civics, Mystery Works, Cohere, Riverside, Regen Hub.
- **Modal Content**: Shows the organization's name, description, and "Visit Website" / "Close" buttons.

#### What We Offer (FeaturesSection)
- **Headline**: "Explore What We Offer"
- **Content**: Four clickable cards, each with an icon, title, and short description. Clicking a card opens a modal with more details.
  - **Connect**: "A message away from neighbors you haven't met yet."
  - **Share**: "Tools, time, talents — give what you can, receive what you need."
  - **Skill Development**: "Workshops, mentorships, hands-on learning — grow your gifts."
  - **Governance**: "Democracy in action. Voice your vision, shape your surroundings."

#### Membership Types (MembershipTypes)
- **Headline**: "How Will You Show Up?"
- **Content**: Six clickable cards detailing different ways to participate. Clicking a card opens a modal that links to the relevant page.
  - Local Members
  - Event Hosts
  - Sellers
  - Gig Workers
  - Organizations
  - Stewardship

#### Meet the Team (TeamSection)
- **Headline**: "Meet the Team"
- **Content**: A condensed view of the team, organized by group. Shows member photos, names, and roles. Clicking a member opens a modal with their full bio.
- **Groups Shown**: Admin + Org Structure, Funding and Finance, Community Outreach, etc.

#### Community Impact (CommunityImpact)
- **Headline**: "Our Community in Numbers"
- **Content**: Four animated counters that display key metrics.
  - Total Members: 3,800
  - $ Local Economic Activity: 389,386
  - Gratitude Points Circulated: 395,877
  - Events Hosted: 3,605

#### Testimonials (TestimonialsCarousel)
- **Headline**: "What Our Members Say"
- **Content**: An auto-scrolling carousel of testimonials, each with a member's avatar, name, role, and quote.

#### Call To Action (CallToAction)
- **Headline**: "Help Us Grow"
- **Sub-headline**: ""Every dollar sown grows a forest of connection.""
- **Buttons**: "Donate Now", "Take the Survey", "Become an Investor".

### B. About Pages

#### Manifesto (ManifestoPage)
A long-form text page detailing the philosophy, mission, and vision of ONE Local.
**Sections/Headings**:
- Nurturing the Tree of Community in the Rising Tide
- Our Mission and Values
- Do You Crave Connection?
- The Rising Tides
- Stakeholder Governance
- Governance and Co-creation
- A Vision of Economic Revolution and Local Empowerment
- Reconnecting to Our Roots and Community Needs
- Reclaiming Our Identities as Agents of Civil Society
- Civility and Civic Engagement (with sub-sections on Data Sovereignty, Public Will Visibility, Ethelo)
- A Call to Action (mentions a list of aligned groups like Mystery Works, Hylo, etc.)
- Closing Statement

#### Team (TeamPage)
- **Headline**: "Meet the Team"
- **Content**: A grid layout of team members, organized by functional groups. Each member is on a clickable card.
- **Groups**: Admin + Org Structure, Funding and Finance, Community Outreach, Operations, Tech Development, Product Design.
- **Member Cards**: Show image, name, role, and a short bio.
- **Open Positions**: Includes cards for "Open Position" roles (e.g., Assistant Operations Manager).
- **Interaction**: Clicking a card opens a modal.
  - **Member Modal**: Shows full bio and details.
  - **Open Position Modal**: Allows a user to "Claim Role".

#### Whitepaper (WhitepaperPage)
- **Headline**: "Whitepaper"
- **Content**: A brief description of the technical roadmap.
- **CTA**: A "Download Whitepaper" button that links to a Google Doc.

#### Investors (InvestorsPage)
- **Headline**: "Invest in a New Kind of Social Infrastructure"
- **Content**: Explains the co-op structure and investment opportunity.
- **Sections**:
  - Introductory text on fueling a movement.
  - "How the Co-op Works": Describes the multi-stakeholder model and member classes.
  - "Steward Class Shares": Details benefits for investors (equity, surplus distributions, influence).
- **CTA**: A "Join the Movement — Invest Today" button linking to a Google Doc.

### C. Features Pages (FeaturesOverviewPage and sub-pages)
This page uses a tabbed layout to present different feature sets.
**Side Menu / Tabs**:
- Overview
- Local Members
- Event Hosts
- Sellers
- Organizations

**Tab Content**:
- **Overview Tab**: A summary of the features for each user type (Local Members, Event Hosts, Sellers, Organizations).
- **Local Members Tab (LocalMembersPage)**: Content dedicated to members, describing connection, events, and resource sharing. Includes a "Join Now" button.
- **Event Hosts Tab (EventHostsPage)**: Content for event organizers, describing creation tools, engagement tracking, and ticketing. Includes a "Start Hosting Events" button.
- **Sellers Tab (SellersPage)**: Content for sellers, describing storefronts, local connections, and promotion. Includes an "Open Your Shop" button.
- **Organizations Tab (OrganizationsPage)**: Content for organizations, describing collaborative management of tasks, events, stake, and governance. Includes a "Register Your Organization" button.

### D. Community Pages

#### Impact Stories (ImpactStoriesPage)
- **Headline**: "Impact Stories"
- **Content**: A carousel showcasing success stories.
- **Stories**: Artisans Unite, Youth Leadership, Circular Economy, Disaster Relief.
- **Layout**: Each slide shows a title, content, and an image within a card.

#### Blog (BlogPage)
- **Headline**: "Blog"
- **Content**: A carousel of blog posts. Clicking a post opens a modal with the full content.
- **Posts**: Building Sustainable Communities, The Power of Local Events, Supporting Local Businesses.
- **Layout**: Each post preview in the carousel has a title, excerpt, and image.

### E. Utility & Other Pages

#### Download App (DownloadAppPage)
- **Headline**: "Download the App"
- **Sub-headline**: "Step in, the door is open."
- **CTA**: A "Get the App Now" button.
- **Functionality**: The button detects the user's device (Android/iOS) and redirects them to the appropriate app store or to the web app.

#### Terms of Service (TermsOfServicePage)
A placeholder page with a headline and placeholder text for legal terms.

#### Privacy Policy (PrivacyPolicyPage)
A placeholder page with a headline and placeholder text for the privacy policy.

#### FAQ (FAQPage)
- **Headline**: "Frequently Asked Questions"
- **Content**: A list of questions and answers presented in an accordion style, where clicking a question reveals the answer.
- **Questions**: What is ONE Local?, How do I join?, How do I create an event?, etc.

#### Contact Us (ContactUsPage)
- **Headline**: "Contact Us"
- **Content**: A two-column layout.
  - **Left Column**: Contact information (Email, Phone, Address).
  - **Right Column**: A contact form with fields for Name, Email, Message, and a "Submit" button.

## IV. Footer
The footer appears on the bottom of every page.
- **Column 1: Links**
  A list of links to key pages: Home, About, Features, Community, Investors, Contact Us, FAQ.
- **Column 2: Follow Us**
  Social media icons: Facebook, Twitter, Instagram, LinkedIn.
- **Column 3: Newsletter Signup**
  An email input field and a "Subscribe" button.
- **Bottom Bar**:
  - Copyright notice: "© 2024 ONE Local. All rights reserved."
  - Links to Terms of Service and Privacy Policy.