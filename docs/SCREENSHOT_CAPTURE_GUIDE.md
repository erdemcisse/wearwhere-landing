# Screenshot capture guide — WearWhere landing page

Procedure for exporting real iPhone screenshots from the WearWhere
Expo app into the landing page (`wearwhere-landing` repo).

This is the *capture* guide. The *swap-in* guide and exact target
filenames live in [`public/previews/README.md`](../public/previews/README.md).

---

## When to do this

Run a fresh capture pass:

- Before applying to a new Awin advertiser cohort.
- Before publishing the landing page to a new domain or press surface.
- After any major UI change in the Expo app (so screenshots don't
  drift from the live build).

Until then, the showcase falls back to the labelled editorial mock
visuals — adding screenshots is purely additive.

---

## What you'll need

- A clean iPhone running the WearWhere Expo dev client (or TestFlight
  build once available). Recommended device: **iPhone 15 / 15 Pro**.
- Light Mode (the brand palette is built around the warm-ivory light
  surface).
- A test account with a *fictional* style profile and saved looks.
  **No real names, real addresses, real friend avatars, or real
  payment data.**
- A Mac for cropping (Preview app is fine; no Photoshop required).

---

## Suggested screens to capture

These map 1:1 to the slots in `src/data/appPreviews.ts`. Capture all
of them in one pass so the visual system stays consistent.

| Source screen in app          | Export filename               | Used in                          |
| ----------------------------- | ----------------------------- | -------------------------------- |
| Discover / Home               | `events.png`                  | `/brands` long preview           |
| Plan wizard (style step)      | `plan.png` + `hero-plan.png`  | App preview · Plan + hero        |
| Outfit results                | `results.png` + `hero-results.png` | App preview · Results + hero |
| Outfit detail (single look)   | (optional) reuse `results.png` |                                 |
| Closet                        | (future)                      |                                  |
| Vote route `/vote/[token]`    | `vote.png` + `hero-vote.png`  | App preview · Vote + hero        |
| Product card / seller link    | `shop.png`                    | App preview · Shop               |
| Share card export             | `share.png`                   | `/brands` long preview           |

If a slot doesn't exist in the app yet, leave it out — the showcase
will keep rendering the mock for that step and you can fill it in
later.

---

## Capture procedure

### 1. Set the device

- Battery > 50%, no low-power yellow.
- Status bar shows full bars + Wi-Fi (no SOS / no data warnings).
- Time set to a clean reading (e.g. 21:00 — matches the brand line
  "before the night starts").
- Do Not Disturb / Focus on so no notifications crash the screen.

### 2. Set the app state

- Pick a **fictional** event in a recognisable city (Berlin, Lisbon,
  Paris, London, Barcelona). The hero composition references Berlin
  21:00 — that's a safe default.
- Run the Plan wizard with neutral preferences (no body / sizing /
  profile data shown on the captured screen).
- Pick an outfit result that does **not** include a brand name from a
  retailer who has not approved WearWhere on Awin yet. Use a
  placeholder brand string ("Curated brand", "Editorial label") if
  needed.
- For the product card, leave price as the existing "Preview price"
  treatment unless the price is real and was just verified on the
  seller page.

### 3. Capture

- iOS native capture: **Side button + Volume Up**.
- Save to Photos. AirDrop / iCloud-sync to your Mac.

### 4. Crop on the Mac

- Open in Preview.
- For App Preview cards (4:5 portrait):
  - **Aspect ratio**: 4:5.
  - **Output**: 1080 × 1350 minimum (export at higher if the source
    allows; `next/image` resizes down).
  - Crop to remove the iOS status bar **and** home indicator if they
    create awkward whitespace inside the rounded card. Keep the
    visible app chrome (top tab bar, primary CTA) — that's the
    recognisable iOS feel.
- For hero phones (`hero-*.png`):
  - **Aspect ratio**: 9:19 portrait (the rounded `MockPhoneFrame`
    clips its children to a 9:19 inner screen).
  - **Output**: 720 × 1520 minimum.
  - Trim to the screen content only — the frame, notch, and bezel
    are drawn by the page.

### 5. Save as PNG

- File format: **PNG**, sRGB.
- Filename: lowercase, exactly matching the table above.
- No alpha around the phone frame (we already render the chrome).
- Keep total size reasonable (target < 400 KB per file). If
  significantly larger, run through ImageOptim or `pngquant`.

### 6. Drop into the repo

```
wearwhere-landing/public/previews/
  ├── plan.png
  ├── results.png
  ├── shop.png
  ├── vote.png
  ├── events.png
  ├── share.png
  ├── hero-plan.png
  ├── hero-results.png
  └── hero-vote.png
```

You only need to add the files you've actually captured. Missing
files fall back to the mock — no build error.

### 7. Verify

```bash
npm run build
```

The build runs the server-side `hasPublicAsset()` probe at static
generation time. Each preview card and the hero phone log silently
switch from mock to `next/image` for the slots whose file exists.

Open the site locally:

```bash
npm run dev
```

Confirm:

- The "Beta interface preview" badge flips to "iOS preview" only on
  cards backed by a real screenshot.
- No layout shift compared to the mock — screenshots respect the
  4:5 / 9:19 aspect ratios above.
- Screenshots load sharply at retina sizes.

---

## Content safety rules (non-negotiable)

- **No real user data.** No real names in the avatar, friend list, or
  share recipient list. No real share-token URLs visible in the URL
  bar. No real account email visible.
- **No real brand names** that haven't approved WearWhere on Awin
  yet. Use placeholder strings.
- **No fake live prices.** Use the in-app "Preview price" treatment
  unless the price is real and recently checked on the seller page.
- **No fake stock signals.** "In stock" / "Out of stock" badges must
  match what the seller page actually shows at capture time, or be
  replaced with "Availability unknown".
- **No body, sizing, or profile data** visible on any captured
  surface.
- **City-level location only.** No GPS coordinates, no street address,
  no venue address.
- **No private vote-link identifiers.** If capturing
  `/vote/[token]`, paste a fake token like `demo-token-001` rather
  than using a real one.

If a screenshot violates any rule, re-capture or drop a different
screen — the safe fallback is "no screenshot for that slot".

---

## Re-capture cadence

- **Hard re-capture** after any change to: brand palette, type
  scale, primary CTA pattern, score-display format, share-card
  layout. Anything that would make a viewer feel "the app looks
  different from the website".
- **Soft re-capture** every 60 days during the beta so the
  screenshots don't drift from the live build.

---

## What this document does NOT cover

- **Apple App Store screenshots.** Those have their own size and
  metadata requirements (`docs/APP_STORE_COMPLIANCE.md` in the Expo
  app repo) and are not used on this landing page.
- **Marketing video / GIF.** Not in scope for the static landing
  page; revisit if Phase 13 adds a hero video.
- **Pixel-art / illustration replacement.** All visuals on the
  landing page are either editorial mocks or real screenshots — no
  third-party stock illustrations.

---

## References

- [`public/previews/README.md`](../public/previews/README.md) — exact
  filenames + the in-code IMAGE SWAP POINT procedure.
- [`src/data/appPreviews.ts`](../src/data/appPreviews.ts) — the
  source of truth for which slots exist and which are featured.
- [`src/lib/publicAssets.ts`](../src/lib/publicAssets.ts) — the
  server-side `hasPublicAsset()` probe that picks between
  `next/image` and the mock.
