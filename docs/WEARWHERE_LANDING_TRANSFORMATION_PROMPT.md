# WearWhere Landing Page — Full Transformation Prompt
## For Claude Code / Cursor / AI coding assistant

---

## CONTEXT & GOAL

You are working on `wearwhere-landing`, a Next.js App Router site hosted on Vercel.
The current URL is https://wearwhere-landing.vercel.app.

This landing page serves two audiences simultaneously:
1. **Potential users** — women 16–35 in Europe who want to know what to wear to events
2. **Affiliate marketing partners** — brands/retailers (e.g. Zara, Mango, ASOS) reviewing our Awin publisher application

The landing page already exists and has a good structural foundation. This prompt describes a **complete transformation** — new sections, real screenshots, revised copy, new pages, and a partnership-ready brands page — that makes it ready for (a) public launch and (b) affiliate application submissions.

Do not remove or break anything that currently works. Enhance, replace weak mock elements with real content, and add what is missing.

---

## BRAND SYSTEM — apply everywhere

```
Colors:
  --ww-ink:     #141414   (primary text, primary CTA, headers)
  --ww-ivory:   #F6F1EA   (primary surface, app background)
  --ww-coral:   #FF6A4A   (accent, active state, important moments — use sparingly)
  --ww-sage:    #7D8F7A   (status badges, supporting, good weather)
  --ww-mist:    #D9D5CE   (borders, dividers, muted UI)
  --ww-surface: #FFFBF4   (slightly elevated surface)
  --ww-white:   #FFFFFF   (cards on top of paper)
  --ww-text-secondary: #3A3733
  --ww-text-muted: #8A8580

Typography direction:
  Display / headlines: editorial serif feel (use Georgia or a serif web font for major headings)
  Body / UI: modern sans (system-ui, -apple-system, or Inter)
  Micro-labels: uppercase, letter-spaced, small (11–12px)

Voice: confident, warm, practical, never pushy. Like a stylish best friend who also knows the weather forecast.
```

---

## PART 1 — GLOBAL CHANGES

### 1.1 — Persistent Beta Banner
Add a thin strip **above the nav** that reads:

> **WearWhere is in private iOS beta.** Android and web are not planned. [Join the waitlist ↓](#waitlist)

Style: `background: #141414`, white text, 12px, centered. Full width. Fixed to top or static — both work. Include a subtle dismiss (`×`) that hides it for the session via localStorage.

Remove this banner only when the App Store version goes live (add a `NEXT_PUBLIC_SHOW_BETA_BANNER=true` env var to control it).

---

### 1.2 — Nav updates
Current nav: `How it works | App preview | For brands | Privacy | Contact`

Update to:
```
WearWhere logo  |  How it works  |  App  |  For brands  |  About
                                                         [Join beta →]  ← coral button
```

- `App` links to `#app-showcase`
- `About` links to `/about` (new page — see Part 5)
- `[Join beta →]` is a coral pill button linking to `#waitlist`
- Nav becomes a hamburger on mobile

---

### 1.3 — Email/waitlist capture — replace mailto with a real form
Current implementation opens a mail client. Replace with a proper form:

**Option A (preferred):** Use [Resend](https://resend.com) or [Loops](https://loops.so) to collect emails. Create a Next.js API route `/api/waitlist` that POSTs to their API. Store `RESEND_API_KEY` or `LOOPS_API_KEY` in `.env.local`.

**Option B (fallback):** Use a Tally.so or Typeform embed for the form until the API route is ready.

The submit button should say **"Tell me when it launches"**. After submission, show an inline success message:
> ✓ You're on the list. We'll email you from erdemcisse98@icloud.com when the iOS beta opens.

Keep the existing honesty note below the form: *"Submitting opens your mail app — no form backend, no automated drips."* → Update this to: *"No spam. We only email when the beta opens."*

There are two places this form appears (hero and #waitlist section) — both should use the same form component.

---

### 1.4 — SEO & meta improvements
- Add `og:image` — create a simple OG image (1200×630px) showing the WearWhere wordmark on ivory background with the tagline "What to wear. Where to go."
- Add JSON-LD structured data for `WebSite` and `MobileApplication` schema on the homepage
- Add canonical URLs to all pages
- Update meta descriptions:
  - Home: "WearWhere helps you decide what to wear to concerts, dinners, festivals, and dates. Event-aware, weather-aware, style-aware. iOS app — Europe first."
  - Brands: "Apply for the WearWhere affiliate programme. A curated, event-driven fashion app sending high-intent mobile traffic to official seller pages across 19 European markets."

---

## PART 2 — HOMEPAGE OVERHAUL

### 2.1 — Hero section rebuild

**Current:** Text-heavy hero with a mock floating UI card.

**New hero layout:**
```
[LEFT COLUMN — 55% width on desktop, full width on mobile]
  Micro-label:  iOS · Europe-first · Beta
  Headline:     Outfits for the plans you actually have.
  Sub-headline: Tell WearWhere where you're going.
                We build the look around the event,
                the weather, and your style.
  
  [Email input] [Tell me when it launches]
  
  ↓ See how it works  (text link, scrolls to #how-it-works)

[RIGHT COLUMN — 45% width on desktop, hidden on mobile]
  iPhone mockup frame containing a real screenshot
  Use: /images/app_screenshots/[first or most visually striking screenshot]
  The mockup frame is a CSS/SVG iPhone outline — see implementation note below
```

**iPhone mockup frame** — implement as a simple CSS-drawn phone outline:
```css
.phone-frame {
  width: 280px;
  aspect-ratio: 9/19.5;
  border: 8px solid #141414;
  border-radius: 44px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 40px 80px rgba(0,0,0,0.18);
}
.phone-frame::before {
  /* Dynamic Island notch */
  content: '';
  position: absolute;
  top: 10px; left: 50%;
  transform: translateX(-50%);
  width: 90px; height: 30px;
  background: #141414;
  border-radius: 20px;
  z-index: 10;
}
.phone-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
```

Use the most visually striking screenshot as the hero phone image. Based on the screenshots in `/public/images/app_screenshots/`, pick the one showing outfit results with fashion imagery (likely around the 19.17.18 or 19.17.31 timestamp — the ones with fashion photos visible in the gallery view).

---

### 2.2 — Stats/trust strip
Add a full-width strip **between the hero and how-it-works**, with 4 numbers:

```
  19          16+          Today's         Official
markets   event types   weather         seller links
  DE→EU    concert to      built in         only
           wedding
```

Style: ivory background, thin top/bottom border in `--ww-mist`. Numbers in large ink-black serif. Labels in muted 12px uppercase.

---

### 2.3 — How it works — enhance with real screenshots

Current: 4 steps with mock text card UIs.

Keep the 4-step structure but replace the "Beta interface preview" mock cards with **actual screenshots** from `/public/images/app_screenshots/`. Assign screenshots based on what they show:

- Step 01 "Plan around the event" → screenshot showing the event/date selection wizard (likely the plan-building screens in rows 1–2 of the gallery)
- Step 02 "Get the look" → screenshot showing outfit results with scores
- Step 03 "Shop at the seller" → screenshot showing a product card with "View at seller"
- Step 04 "Send to friends" → screenshot showing the share/vote screen (if available)

Each screenshot sits inside a smaller phone frame (200px wide). Add a caption label below each frame with the step name.

**Implementation note:** Use Next.js `<Image>` component for all screenshots. The images are already in `/public/images/app_screenshots/`. Map each file to the right step — look at file sizes as a guide (larger file = more visual content), and if needed view them to pick the right ones.

---

### 2.4 — App showcase section (NEW — replace current #app-preview)

This section is the **centrepiece** — it uses all the real screenshots. Replace the existing `#app-preview` section entirely.

**Layout:** A horizontal scrollable row of phones on desktop. Vertically stacked on mobile.

**Section header:**
```
Micro-label: REAL SCREENS FROM THE BETA
Heading:     Open it before the night out.
Subheading:  Every screen you see is from the actual build. Demo content is labeled as such.
```

**Show 5 key screens in phone frames, each with a caption below:**

1. **"Pick the moment"** — Home screen showing events/tonight view
2. **"Set the plan"** — The planning wizard (event type, date, weather)
3. **"Get the look"** — Outfit results with match scores
4. **"See the pieces"** — Product detail / look breakdown
5. **"Share & vote"** — The friend vote / share card screen

If any of the 20 screenshots in `/public/images/app_screenshots/` do not correspond to one of these 5 screens exactly, use the closest match.

**Scroll implementation:** On desktop, use `overflow-x: auto; scroll-snap-type: x mandatory` with `scroll-snap-align: start` on each phone frame. Add left/right chevron buttons. On mobile, stack vertically.

Below the phone row, add a small note:
> *Every screen runs real WearWhere data. Demo and editorial content is explicitly labeled in the app — we never display fake prices, fake stock, or fake popularity.*

---

### 2.5 — Problem/solution section (NEW)

Insert between stats strip and how-it-works. This is a short, punchy section:

**Heading:** You know the feeling.

**6 short problem statements in a 2×3 grid, each with a small Tabler icon:**
```
📱  Six tabs open, still unsure         👠  Wrong shoes for four hours
🥶  Freezing at an outdoor show         🤔  Overdressed or underdressed
📸  Nothing photographs right           💬  Three selfies sent to the group chat
```

**Below the grid, one line in coral:** WearWhere collapses that into one flow.

---

### 2.6 — Who it's for section (NEW — replaces generic feature list)

Brief section, clean layout. Heading: **"Made for real plans."**

Three columns, each with an event emoji, a one-line occasion, and a one-line weather/context note:

```
🎵 Concert tonight      🍽 Saturday dinner     🎪 Festival weekend
   "Indoor venue,          "Dress code:            "Three-day outdoor,
    standing crowd"         smart-casual"           pack light"

✈ Early flight         🎂 Wedding guest        ☕ Rooftop brunch
  "7am airport,           "Not the bride,          "Warm afternoon,
   comfort first"          still chic"              cool evening"
```

---

### 2.7 — Waitlist section rebuild (#waitlist anchor)

Current section heading: "Want early access?" — keep this.

**Add above the email form:**

> **The iOS beta is filling up.** We're starting with a small group of users in Germany and expanding city by city. Drop your email and we'll let you know when your market opens.

Form: same `<WaitlistForm>` component from 1.3.

Below the form, add three small trust tokens inline:
```
🔒 No spam  ·  📱 iOS only  ·  🇪🇺 Europe-first
```

---

## PART 3 — BRANDS PAGE — COMPLETE OVERHAUL

The current brands page is a reasonable start but needs to become a full publisher application document that a brand manager at Zara or ASOS could land on and decide to approve us. This is the most important page for partnership applications.

**Base the content on the partnership application document already written** (which contains the definitive language for each section). The headings and copy below pull directly from that document.

---

### 3.1 — Brands hero

```
Micro-label:  FOR BRANDS & RETAILERS
Heading:      A calm, contextual lane to discovery.
Subhead:      WearWhere recommends event-appropriate outfits to a young European
              fashion audience and links every product back to your official page.
              We hand the user to you at the moment of highest purchase intent.
```

Below the headline, a single-paragraph "elevator pitch" in a subtle blockquote/callout box, matching the one-paragraph version from the application document:

> *WearWhere is a Europe-first iOS app that recommends event-appropriate outfits accounting for venue, weather, comfort, and budget, and links users to brands' official product pages. We currently send users to sellers directly; we are applying to track and attribute that traffic through your programme. No checkout happens inside the app — the retailer owns the customer and the transaction.*

Two CTAs:
- `[Apply for partnership →]` (coral, links to #partnership-form)
- `[Read our disclosure ↓]` (outline, links to #disclosure)

---

### 3.2 — Audience section (NEW — critical for advertiser applications)

**Heading:** Who she is. Where she shops.

Three-column stat layout:

```
Column 1 — The person:
  Women and young women, approximately 16–35.
  Students and young professionals.
  Goes to concerts, festivals, dinners, dates, club nights, and brunches.
  Asks friends "which outfit should I wear?" before going out.

Column 2 — Where she shops:
  Zara · Bershka · Stradivarius · Mango
  H&M · COS · Arket · Weekday
  ASOS · Zalando · About You · NA-KD
  Uniqlo · Pull&Bear · Trendyol

Column 3 — Why her intent is high:
  A WearWhere user is not idly browsing — she has a specific event
  on a specific date and a budget she has already told us.
  By the time she taps a product, the occasion, weather, and price
  range have already been matched. That click is qualified,
  near-term purchase intent.
```

Below, a Europe map or stats strip:
```
  Launch market: Germany (DE)
  Supported: 19 European shopping markets
  Browse-only: Türkiye (commerce pending)
  Audience language: English UI, local currency display
```

---

### 3.3 — The four placements (NEW — critical for advertiser applications)

**Heading:** Where your products appear.

**Sub-heading:** Four high-intent surfaces inside WearWhere. Every call-to-action opens your official product page.

Four placement cards, each with a screenshot thumbnail (from the real app screenshots), a placement name, and a one-paragraph description:

**Placement 1 — Outfit Breakdown**
> The core placement. The user has picked her event — say, a concert in Berlin on Friday. WearWhere generates complete outfits scored on weather, comfort, and her vibe. Each look lists its component products (top, bottom, shoes, accessories) with brand, price preview, and an "Open seller" button. She's already committed to the occasion; she's deciding which version of the look to buy.

Screenshot to use: the outfit results / product card screenshot

**Placement 2 — Editorial Collection Rails**
> Curated rows on the Home screen and Style Feed — "Festival Fits", "Date Night", "Summer Collection", city-style capsules. Seasonal products shown in a contextual, editorial frame. No chaotic grid, no feed overwhelm.

Screenshot to use: home screen or editorial rail screenshot

**Placement 3 — Closet "Pieces"**
> Users save individual products to a personal wardrobe and return to them later. Saved pieces keep their seller link and show price freshness honestly ("price checked X days ago"). A saved product is a product the user has already decided she wants.

Screenshot to use: closet/saved screen

**Placement 4 — Shared Looks & Friend Votes**
> Users share outfit cards to WhatsApp and Instagram and run private polls ("which one should I wear?"). Every shared look carries its brand line-up, putting products in front of new users organically — zero extra spend from us.

Screenshot to use: share card / vote screen

Style: 2×2 card grid on desktop, stacked on mobile. Each card has the phone screenshot at top (constrained height, object-fit cover), then text below.

---

### 3.4 — How linking & tracking works (NEW — compliance section for Awin reviewers)

**Heading:** Built for network compliance from day one.

Present as 6 numbered items (from the application document Section 5):

1. **Official URLs only.** Every product stores the retailer's canonical product URL. We never deep-link to mirrors, resellers, or cached pages, and we preserve the retailer's URL rather than rewriting it.

2. **Server-side link assembly.** Affiliate tracking parameters are attached server-side at click time, per approved advertiser. No affiliate credentials or tokens ever ship inside the mobile app.

3. **Per-advertiser activation.** Tracking activates only for brands whose programmes have approved us. Products from non-approved brands continue to link to the seller without tracking — the user experience never degrades and no commission is ever implied where none exists.

4. **Clear disclosure.** When a tracked link exists, the product card shows "WearWhere may earn a commission." The disclosure is per-product and only appears when true.

5. **No incentivised clicking, no cookie stuffing, no ad-on-brand bidding.** Clicks come exclusively from a user choosing a product inside her outfit. We do not run paid search on brand terms and have no toolbar or extension behaviour.

6. **Privacy-respecting analytics.** Outbound click logging stores the destination domain only — no full URLs, no raw IPs, no personal identifiers tied to clicks. GDPR-conscious by design for our young European audience.

Style: numbered list in a slightly elevated card or bordered container. Icon per item (use Tabler icons: ti-link, ti-server, ti-toggle-right, ti-receipt, ti-ban, ti-shield).

---

### 3.5 — Trust & brand-safety commitments (NEW)

**Heading:** Five lines you can quote in your application review.

Present as a 5-item list with checkmarks, directly from application Section 6:

✓ We describe ourselves as an independent recommendation app. We never claim partnership, sponsorship, or endorsement by any brand unless a formal agreement exists.

✓ Brand product imagery is used only as permitted — via programme product feeds once approved, or in linking contexts that comply with the retailer's terms. We do not scrape retailer websites.

✓ Editorial and demo content is always labeled as such in the interface.

✓ The app is held to a high standard: private-by-default social features, no public comments before moderation infrastructure, no manipulative monetisation, and no resale of personal data — ever.

✓ A live privacy policy and support contact are published on this website.

---

### 3.6 — What we're building toward (NEW — roadmap for advertisers)

**Heading:** Where the product is going.

Short intro: *WearWhere is launching with a complete private loop. On the near-term roadmap:*

Four items in a 2×2 grid:

- **Live product feeds** — Replacing hand-curated catalogue with official programme feeds (richer inventory, live prices, stock-aware recommendations) as advertiser approvals land.
- **Deeper shopping surfaces** — "Complete the look" suggestions and a budget ladder (same look at three price points), both of which increase products surfaced per session.
- **Seasonal editorial capsules** — Festival season, party season, city-style collections concentrating high-intent traffic.
- **AI stylist refinements** — Natural-language outfit adjustments ("under €100", "more black", "rain-proof it") that keep users iterating — and shopping — inside one session.

Closing line:
> *Affiliate commerce is our primary and first monetisation channel. We are building the catalogue, the placements, and the audience around it.*

---

### 3.7 — Application summary table (NEW)

**Heading:** Partnership at a glance.

A clean table (or card-based equivalent) matching the application document Section 8:

| | |
|---|---|
| **What we ask** | Acceptance into your publisher programme so qualified outfit-driven traffic to your product pages can be tracked and attributed. |
| **What you get** | A new, brand-safe, high-intent mobile placement in front of a young European fashion audience at the exact moment of outfit decision. |
| **Integration** | Server-side deep links per your programme's specification; product feeds consumed server-side; per-product disclosure. |
| **Compliance** | No brand bidding, no incentivised clicks, no scraping, no fake commerce signals, GDPR-conscious analytics, full disclosure. |
| **Network** | Awin (publisher approved) — per-advertiser programme application required |

Style: alternating row background between `--ww-ivory` and `--ww-surface`.

---

### 3.8 — Partnership inquiry form (REPLACE current mailto-only CTA)

**Heading:** Partnership review or affiliate question?

**Sub-heading:** *One email reaches us directly. No automated drips, no sales team.*

Build a proper HTML form with the following fields:

```
Company / brand name *         [text input]
Your name *                    [text input]
Email *                        [email input]
Affiliate network              [select: Awin / Impact / Partnerize / Other / Not yet on a network]
Primary market(s)              [text input, placeholder: "DE, NL, FR..."]
Message                        [textarea, placeholder: "Tell us about the programme and any questions you have."]

[Send enquiry →]               (coral button)
```

Below the form:
> *We respond to all genuine partnership enquiries within 2 business days. If you are an Awin publisher account manager, please reference your advertiser ID in the message.*

**Implementation:** POST to `/api/partnership` → send via Resend to erdemcisse98@icloud.com with a formatted email. If Resend is not yet set up, fall back to a mailto link that pre-populates subject and body from the form fields using JavaScript (graceful degradation).

---

### 3.9 — Keep the existing disclosure section

Keep the existing `#disclosure` anchor and the affiliate disclosure text. Ensure it still works as a jump target from other pages.

---

## PART 4 — NEW PAGE: /about

Create `/app/about/page.tsx`.

**Purpose:** Trust signal for advertisers and curious users. Answers "who is behind this?"

**Sections:**

**4.1 — Hero**
```
Micro-label: ABOUT WEARWHERE
Heading:     Built because the question is real.
Body:        Every person going to a concert, dinner, or date faces the same
             ten-tab problem: event page, weather app, Pinterest, Instagram, Zara,
             the group chat. WearWhere closes those tabs.
```

**4.2 — Origin story (1–2 paragraphs)**
Write something honest and brief — founder-voice, not press-release voice. Adapt:
> *WearWhere started as a personal frustration. The outfit-for-tonight question is genuinely hard — it involves your event, the weather, the venue's vibe, your comfort, your budget, and often your friends' opinions. Every existing app solves a piece of it. WearWhere tries to solve it whole.*

> *The app is being built by a solo founder in Germany, with a Europe-first focus and a deliberate philosophy: no fake data, no manipulative patterns, no body-shaming language. Just useful recommendations at the right moment.*

**4.3 — The values, as stated (5 short cards)**

- **Useful, not impressive** — recommendations that actually account for standing for four hours
- **Honest** — no fake prices, no fake stock, no fake popularity
- **Private-first** — share features are link-based and revocable; no public feed
- **Europe-first** — built for the European high street, not US-only retailers
- **Affiliate, not marketplace** — we send users to the brand's site; the transaction is always theirs

**4.4 — Contact**
```
Support:         erdemcisse98@icloud.com
Partnerships:    erdemcisse98@icloud.com (subject: WearWhere partnership)
Press:           erdemcisse98@icloud.com (subject: WearWhere press)
Location:        Germany · Europe-first
```

**4.5 — Link back** to /brands for the partnership section.

---

## PART 5 — SCREENSHOT INTEGRATION DETAILS

The 20 simulator screenshots are in:
`/public/images/app_screenshots/` — filenames follow the pattern `Simulator Screenshot - iPhone 17 Pro Max - 2026-06-10 at 19.XX.XX.png`

**Screenshot assignment map (review each file and assign based on content):**

Look at the screenshots and assign them to roles. Based on the recording flow (the user walked through the app from open to share over ~4 minutes), the likely content order is:

```
~19.15.56  → Welcome / Home screen                → Hero phone, App showcase "Pick the moment"
~19.16.02  → Event browse / discovery              → How it works Step 01, Placement 2 (editorial)
~19.16.16  → Event selection / plan start          → How it works Step 01 alt
~19.16.25  → Plan wizard - occasion type           → App showcase "Set the plan"
~19.16.31  → Plan wizard - date/weather            → How it works Step 01 (with weather)
~19.16.37  → Plan wizard - style vibe              → App showcase "Set the plan" alt
~19.16.42  → Plan wizard - budget                  → Plan wizard step
~19.16.49  → Plan review / confirm                 → App showcase "Set the plan" final step
~19.16.53  → Generating / loading state            → (skip or use as transition)
~19.17.05  → Outfit results list                   → How it works Step 02, Placement 1
~19.17.18  → Outfit detail / look breakdown        → App showcase "Get the look" — HERO CANDIDATE
~19.17.31  → Product detail / seller card          → How it works Step 03, Placement 1 detail
~19.17.37  → Product / look detail (more items)    → App showcase "See the pieces"
~19.17.49  → Closet / saved looks                  → Placement 3 (closet)
~19.17.52  → Wardrobe / pieces view                → Placement 3 alt
~19.17.56  → More closet / profile                 → (supporting)
~19.18.02  → Style feed / editorial rail           → Placement 2 (editorial rails)
~19.18.30  → Share card / vote screen              → How it works Step 04, Placement 4, App showcase "Share & vote"
~19.19.17  → Share result / another screen         → (supporting)
~19.19.31  → Recent / profile or end screen        → (supporting / About page)
```

**Important:** Open each file and verify what it actually shows before assigning. The timestamps give the likely order but you must confirm by viewing.

**Reusable component:** Create `<PhoneFrame src={imageSrc} caption={captionText} size="sm|md|lg" />` — a component that wraps an image in an iPhone frame. Export it from `components/PhoneFrame.tsx`. Use it across all sections.

```tsx
// components/PhoneFrame.tsx
// Props: src, alt, caption, size ('sm' = 200px, 'md' = 280px, 'lg' = 320px)
// Renders: CSS iPhone frame (Dynamic Island style) wrapping a Next.js Image
// Frame color: #141414
// Border radius: 44px (lg), 36px (md), 28px (sm) — scale with size
// Optional caption below frame in muted 13px text
```

---

## PART 6 — EXISTING PAGES — MINOR FIXES

### 6.1 — Privacy page
Add a note at the top: *"Last updated: June 2026"*
Ensure the account deletion section is clear and prominent (advertisers check this).

### 6.2 — Terms page
Same date stamp.

### 6.3 — Contact page
Replace the current contact page (if it's just a mailto link) with a brief page showing:
- A simple contact form (name, email, subject dropdown: General / Beta access / Partnership / Press / Bug report, message)
- Or link to the same `/api/partnership` endpoint with the subject pre-filled
- Below: the erdemcisse98@icloud.com address for people who prefer to email directly

### 6.4 — Footer update
Add the new pages to the footer:

```
WearWhere          Legal              Contact
How it works       Privacy            Email
App                Terms              Partnership enquiry
For brands         Affiliate disclosure
About
```

---

## PART 7 — PERFORMANCE & QUALITY REQUIREMENTS

1. **All screenshots use `next/image`** with proper `width`, `height`, and `priority` for above-the-fold images.

2. **No cumulative layout shift** — phone frames must have fixed aspect-ratio containers so images don't cause layout jumps on load.

3. **Responsive breakpoints:**
   - `< 640px` (mobile): single column, no horizontal scrolling carousels, all phone frames stack
   - `640–1024px` (tablet): 2-column grids where 3-column is used on desktop
   - `> 1024px` (desktop): full layout as described

4. **Accessibility:**
   - Every `<img>` and `<Image>` has a descriptive `alt` attribute ("WearWhere app showing outfit results for a concert in Berlin")
   - Form inputs have associated `<label>` elements
   - Color contrast: all text meets WCAG AA

5. **Do not add any tracking pixels, ad scripts, or retargeting tags.** Vercel Analytics (privacy-respecting) is fine if already installed.

6. **Page weight:** Keep images optimised. Next.js Image handles this automatically — make sure `sizes` prop is set correctly for responsive images.

---

## PART 8 — FILE STRUCTURE OVERVIEW

After this transformation, the key additions should be:

```
app/
  page.tsx                    ← Major updates (hero, showcase, problem section, etc.)
  brands/
    page.tsx                  ← Complete overhaul (audience, placements, tracking, form)
  about/
    page.tsx                  ← NEW
  contact/
    page.tsx                  ← Minor update
  privacy/
    page.tsx                  ← Date stamp update
  terms/
    page.tsx                  ← Date stamp update
  api/
    waitlist/
      route.ts                ← NEW (Resend/Loops integration)
    partnership/
      route.ts                ← NEW (Resend integration for partnership form)

components/
  PhoneFrame.tsx              ← NEW (reusable iPhone mockup frame)
  WaitlistForm.tsx            ← NEW or refactor of existing email form
  BetaBanner.tsx              ← NEW (persistent top banner)
  PartnershipForm.tsx         ← NEW (brands page form)

public/
  images/
    app_screenshots/          ← Already exists — 20 screenshots ready to use
    og-image.png              ← NEW (1200×630 OG image)
```

---

## FINAL CHECKLIST — verify before marking done

- [ ] Beta banner appears on all pages and is dismissable
- [ ] Hero shows a real app screenshot in a phone frame
- [ ] Stats strip shows 19 markets, 16+ event types, weather-aware, official seller links
- [ ] App showcase uses real screenshots (not mock text cards) in phone frames
- [ ] `#how-it-works` steps use real screenshots as illustrations
- [ ] Problem/solution section is present
- [ ] Waitlist form does not open a mail client — submits properly
- [ ] Brands page has: audience section, four placements, tracking compliance, trust commitments, roadmap, summary table, partnership form
- [ ] `/about` page exists with founder context and values
- [ ] `/api/waitlist` route accepts POST and sends email (or gracefully falls back)
- [ ] `/api/partnership` route accepts POST and sends email (or gracefully falls back)
- [ ] `PhoneFrame` component is reused across hero, showcase, and brands sections
- [ ] Footer links include About and all new pages
- [ ] All images use `next/image` with alt text
- [ ] Mobile layout is usable and tested at 375px wide
- [ ] No fake testimonials, no fake press logos, no inflated claims
- [ ] Affiliate disclosure is still present and accurate on /brands
- [ ] `og:image` meta tag is set on all pages
- [ ] Vercel preview deploy works without errors

---

## COPY REFERENCE

If you need exact voice for any section, use these samples from the product's defined voice (from `PRODUCT_VISION.md`):

```
"Where are we going?"
"Pick the event. We'll handle the outfit math."
"This venue changes the shoe decision."
"Weather can ruin a look. We won't let it."
"Cute is good. Cute and comfortable is elite."
"This look survives the night."
"Send this to the group chat and let them vote."
"Make it cheaper." / "Make it more expensive-looking."
"More modest." / "More statement."
```

And from the brand system — things we never say:
- Body-shaming language of any kind
- "Flattering for your body type"
- Fake live availability ("hurry, only 2 left!")
- Fake prices or mock data presented as real
- Overconfident weather claims
