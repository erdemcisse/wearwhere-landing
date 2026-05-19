# Real iPhone screenshot drop-in folder

Drop real exported iPhone screenshots here when the beta is ready to
swap mock visuals for actual screen captures.

## Target files

The data file `src/data/appPreviews.ts` already references these paths.
Today they don't exist — the showcase falls back to editorial mock
visuals. Adding any of these files unblocks the swap procedure below.

| File                          | Used in                              | Card    |
| ----------------------------- | ------------------------------------ | ------- |
| `hero-plan.png`               | homepage hero (back-left phone)      | Plan    |
| `hero-results.png`            | homepage hero (centred phone)        | Results |
| `hero-vote.png`               | homepage hero (back-right phone)     | Vote    |
| `plan.png`                    | App preview card · Plan              | Step 01 |
| `results.png`                 | App preview card · Outfit results    | Step 02 |
| `shop.png`                    | App preview card · Shop at seller    | Step 03 |
| `vote.png`                    | App preview card · Friend vote       | Step 04 |
| `events.png`                  | `/brands` long preview · Events      | Bonus   |
| `share.png`                   | `/brands` long preview · Share card  | Bonus   |

## Recommended export specs

- **Source device:** iPhone 15 / 15 Pro (393 × 852 logical, 1179 × 2556 physical) or 14 Pro.
- **Format:** PNG, sRGB, no alpha around the phone (each preview card already provides the frame).
- **Aspect ratio:** 4:5 portrait crop preferred for the App Preview cards (`plan.png`, `results.png`, `shop.png`, `vote.png`, `events.png`, `share.png`). Trim to the screen content only — drop the iOS status bar and home indicator if it makes the composition look cropped.
- **Dimensions:** export at 1080 × 1350 minimum so retina displays stay sharp. Larger is fine; `next/image` will resize.
- **Hero phones (`hero-plan.png`, `hero-results.png`, `hero-vote.png`):** the rotated side phones are clipped to a fixed 220 px width, so 9:19 portrait cropped to the screen content works best (e.g. 720 × 1520).

## Safety rules for screenshot content

- **No real user data.** No real names, real friend avatars, real share-token URLs, real account emails.
- **No real brand names** that haven't approved WearWhere on Awin yet. Use placeholder brand strings ("Curated brand", "Editorial label") if needed.
- **No fake live prices.** Use the existing "Preview price" treatment until prices are real and recently checked.
- **No fake stock signals.** "In stock" / "Out of stock" labels should reflect the verified state on the seller's page at capture time, or be replaced with "Availability unknown".
- **No private/sizing/body data.** None of those should appear in any captured screen.
- **City-level location only.** No GPS, no street address.

## Swap procedure

Once the screenshot files are in this folder:

1. Open `src/components/AppPreviewShowcase.tsx`. Find the comment block
   labelled `IMAGE SWAP POINT`.
2. Replace the `<MockVisual kind={p.visualType} />` line with:

   ```tsx
   <Image
     src={p.imagePath}
     alt={`${p.title} — iOS screenshot`}
     fill
     sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
     className="object-cover"
   />
   ```

   …and add `import Image from "next/image";` at the top of the file.

3. Update the badge label from `Beta interface preview` to
   `iOS preview` once the swap covers all featured cards.
4. For the hero-page phones in `src/app/page.tsx`, repeat the same
   swap inside each `MockPhoneFrame` body — replace the JSX content
   with `<Image src="/previews/hero-results.png" … />` etc.
5. Run `npm run build` to confirm `next/image` resolves every path.
   Missing files fail loudly at build time, which is what we want once
   we've committed to the swap.

Until then, this folder stays empty and the homepage stays on safe
labelled mocks.

## Reminders

- Do **not** commit screenshots that show pre-approval brand logos in a
  way that implies partnership.
- Do **not** commit the official Apple "Download on the App Store" badge
  here — that asset is governed by Apple's marketing guidelines and
  belongs in `AppStoreComingSoonButton.tsx` only once the App Store
  listing is live.
- Re-export when the app's visual system shifts so screenshots don't
  drift from the live build.
