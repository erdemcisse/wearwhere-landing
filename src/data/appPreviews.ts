/**
 * App preview panels rendered in the AppPreviewShowcase section.
 *
 * Each item carries an `imagePath` placeholder pointing at /public/previews/.
 * The renderer probes the path: if the file exists, it shows the real
 * screenshot via next/image; if it 404s, it falls back to the labelled
 * editorial mock visual. This means we can drop real iPhone screenshots
 * into /public/previews/ later without touching this file or breaking
 * the build today (no images bundled yet).
 *
 * Set `featured: true` to surface a card on the homepage. The full set
 * (featured + non-featured) renders on /brands or wherever else we want
 * the longer flow.
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
  /**
   * Path under /public. Today these files do not exist — the showcase
   * shows the mock visual until you drop real screenshots in.
   */
  imagePath: string;
  /** Featured cards appear on the homepage's tightened App Preview. */
  featured: boolean;
}

export const appPreviews: AppPreviewItem[] = [
  {
    slug: "build-a-plan",
    eyebrow: "Step 01",
    title: "Plan around the event",
    description:
      "Pick the concert, dinner, or city plan. Date, venue, and weather come for free.",
    visualType: "plan",
    imagePath: "/previews/plan.png",
    featured: true,
  },
  {
    slug: "outfit-results",
    eyebrow: "Step 02",
    title: "Get the look",
    description:
      "A small, scored set of outfits — never an overwhelming list.",
    visualType: "outfit",
    imagePath: "/previews/results.png",
    featured: true,
  },
  {
    slug: "shop-at-seller",
    eyebrow: "Step 03",
    title: "Shop at the seller",
    description:
      "Each piece links straight to the brand's official site.",
    visualType: "shop",
    imagePath: "/previews/shop.png",
    featured: true,
  },
  {
    slug: "friend-vote",
    eyebrow: "Step 04",
    title: "Send to friends",
    description:
      "Share 2–4 looks. Friends pick a favourite. Results stay between you.",
    visualType: "vote",
    imagePath: "/previews/vote.png",
    featured: true,
  },
  {
    slug: "discover-events",
    eyebrow: "Bonus",
    title: "Discover events",
    description:
      "Curated event surfaces with weather already factored in.",
    visualType: "event",
    imagePath: "/previews/events.png",
    featured: false,
  },
  {
    slug: "share-a-look",
    eyebrow: "Bonus",
    title: "Share a private look",
    description:
      "Export a revocable share card. No public feed, no public profile.",
    visualType: "share",
    imagePath: "/previews/share.png",
    featured: false,
  },
];

export const featuredAppPreviews = appPreviews.filter((p) => p.featured);
