/**
 * App preview panels rendered in the AppPreviewShowcase section.
 *
 * Each item carries an `imagePath` placeholder that is intentionally null
 * today. When real App Store-quality screenshots exist, drop them under
 * /public/previews/<slug>.png and set `imagePath: '/previews/<slug>.png'`
 * — the showcase will fall back to the labelled mock visual until then.
 */

export type AppPreviewVisual =
  | "event"
  | "plan"
  | "outfit"
  | "shop"
  | "share"
  | "vote";

export interface AppPreviewItem {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  visualType: AppPreviewVisual;
  imagePath: string | null;
}

export const appPreviews: AppPreviewItem[] = [
  {
    slug: "discover-events",
    eyebrow: "Step 01",
    title: "Discover events",
    description:
      "Concerts, dinners, festivals, city days. WearWhere reads the date, venue, and weather around it.",
    visualType: "event",
    imagePath: null,
  },
  {
    slug: "build-a-plan",
    eyebrow: "Step 02",
    title: "Build a plan",
    description:
      "A short, calm wizard. Tell WearWhere who you are going with and how dressed-up you want to feel.",
    visualType: "plan",
    imagePath: null,
  },
  {
    slug: "outfit-results",
    eyebrow: "Step 03",
    title: "Get outfit results",
    description:
      "A small set of looks scored on weather, formality, comfort, and your style. Never an overwhelming list.",
    visualType: "outfit",
    imagePath: null,
  },
  {
    slug: "shop-at-seller",
    eyebrow: "Step 04",
    title: "Shop at seller",
    description:
      "Each piece links to the brand's official site. WearWhere never handles checkout, payment, or delivery.",
    visualType: "shop",
    imagePath: null,
  },
  {
    slug: "share-a-look",
    eyebrow: "Step 05",
    title: "Share a look",
    description:
      "Export a private share card or a revocable vote link. No public feed, no public profile.",
    visualType: "share",
    imagePath: null,
  },
  {
    slug: "friend-vote",
    eyebrow: "Step 06",
    title: "Friend vote",
    description:
      "Send 2–4 outfit options. Friends pick a favourite. Results stay between you.",
    visualType: "vote",
    imagePath: null,
  },
];
