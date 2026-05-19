export interface TrustBullet {
  title: string;
  description: string;
}

/**
 * Compact 4-card trust signal block sitting directly under the hero.
 * Max 3 columns on desktop so the grid never feels cramped.
 */
export const heroTrustSignals: TrustBullet[] = [
  {
    title: "No login to start",
    description:
      "Browse events and build a first look without creating an account.",
  },
  {
    title: "Real events + weather",
    description:
      "City, venue, and forecast already factored in.",
  },
  {
    title: "Official seller links",
    description:
      "Tap through to the brand's own product page. No marketplace, no checkout interception.",
  },
  {
    title: "Private-first sharing",
    description:
      "Share and vote links are revocable. No public feed, no public profile.",
  },
];

/**
 * Full 5-line trust posture used on /brands and in the footer note.
 */
export const fullTrustPosture: TrustBullet[] = [
  ...heroTrustSignals,
  {
    title: "Account deletion in-app",
    description:
      "Beta accounts can be deleted from inside the app at any time.",
  },
];

export const brandTrustPoints: string[] = [
  "Europe-first style discovery",
  "High-intent event & weather contexts",
  "Official seller links — no marketplace",
  "No scraping, ever",
  "Checkout remains on the retailer site",
  "Affiliate disclosure when approved links go live",
  "Beta-stage transparency in copy",
];
