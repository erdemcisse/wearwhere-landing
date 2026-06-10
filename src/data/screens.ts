/**
 * Registry of real beta screenshots living in /public/images/app_screenshots/.
 *
 * Every screenshot is a 1320×2868 iPhone 17 Pro Max simulator capture from
 * the 2026-06-10 walkthrough (home → plan wizard → look → breakdown →
 * closet → feed → share → account). Reference screens from here so alt
 * text and paths stay consistent across the hero, showcase, how-it-works,
 * and the brands placements.
 */

export interface AppScreen {
  src: string;
  alt: string;
}

const DIR = "/images/app_screenshots";

export const screens = {
  homeTonight: {
    src: `${DIR}/home-tonight.png`,
    alt: "WearWhere home screen asking “Where are we going?” with tonight's open-air concert in Istanbul as the featured event",
  },
  styleFeedRails: {
    src: `${DIR}/style-feed-rails.png`,
    alt: "WearWhere Style Feed with editorial rails — late-night club in Istanbul, Berlin club night, and Paris dinner collections",
  },
  eventsBrowse: {
    src: `${DIR}/events-browse.png`,
    alt: "WearWhere event browser with concert, dinner, and festival filters and featured events across Europe",
  },
  eventsConcerts: {
    src: `${DIR}/events-concerts.png`,
    alt: "WearWhere event browser filtered to concerts, showing Berlin and Hamburg open-air concerts",
  },
  planOccasion: {
    src: `${DIR}/plan-occasion.png`,
    alt: "WearWhere plan wizard step 1 — choosing the occasion: dinner, concert, club night, festival, or rooftop",
  },
  planOccasionMore: {
    src: `${DIR}/plan-occasion-more.png`,
    alt: "WearWhere plan wizard with more occasions — theatre, travel day, office, wedding guest, and custom",
  },
  planWhereWhen: {
    src: `${DIR}/plan-where-when.png`,
    alt: "WearWhere plan wizard step 2 — picking country, city, date, time of day, with live weather pulled in automatically",
  },
  planVibe: {
    src: `${DIR}/plan-vibe.png`,
    alt: "WearWhere plan wizard step 3 — choosing the vibe: elegant, dark chic, cool, sexy but classy, or modest",
  },
  planBudget: {
    src: `${DIR}/plan-budget.png`,
    alt: "WearWhere plan wizard step 4 — setting a budget from under €100 to premium",
  },
  planReview: {
    src: `${DIR}/plan-review.png`,
    alt: "WearWhere plan review — dinner in Berlin tonight, elegant vibe, up to €200, ready to build outfits",
  },
  lookResults: {
    src: `${DIR}/look-results.png`,
    alt: "WearWhere outfit result for dinner in Berlin — “The cream skirt set” with excellent match and comfort scores",
  },
  lookDetail: {
    src: `${DIR}/look-detail.png`,
    alt: "WearWhere look detail for “The cream skirt set” with stylist notes and save, share, and post options",
  },
  outfitBreakdown: {
    src: `${DIR}/outfit-breakdown.png`,
    alt: "WearWhere outfit breakdown showing a cream silk-feel blouse product card with price and seller catalog preview",
  },
  closetLooks: {
    src: `${DIR}/closet-looks.png`,
    alt: "WearWhere closet with saved looks, pieces, boards, and private friend-vote links",
  },
  closetEmpty: {
    src: `${DIR}/closet-empty.png`,
    alt: "WearWhere closet onboarding — a curated wardrobe that is private by default and organised by event",
  },
  profileStyle: {
    src: `${DIR}/profile-style.png`,
    alt: "WearWhere style profile — sizes, vibe, and comfort preferences used only for recommendations",
  },
  profileSizes: {
    src: `${DIR}/profile-sizes.png`,
    alt: "WearWhere style profile detail — sizes, fit preference, and comfort notes like avoiding high heels",
  },
  feedEditorial: {
    src: `${DIR}/feed-editorial.png`,
    alt: "WearWhere editorial feed card for a Berlin club night look with price and outfit notes",
  },
  shareVote: {
    src: `${DIR}/share-vote.png`,
    alt: "WearWhere share preview with friend-vote link and quick adjustments — cheaper, remove heels, add jacket",
  },
  accountPrivate: {
    src: `${DIR}/account-private.png`,
    alt: "WearWhere account screen — private by default, works on-device as a guest with optional sync",
  },
} as const satisfies Record<string, AppScreen>;

/** Native dimensions of all simulator captures. */
export const SCREEN_WIDTH = 1320;
export const SCREEN_HEIGHT = 2868;
