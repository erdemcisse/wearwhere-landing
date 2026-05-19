import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://wearwhere.app";
const TITLE = "WearWhere — Outfits for the plans you actually have";
const DESCRIPTION =
  "WearWhere is a Europe-first event-aware fashion app that helps you choose outfits for concerts, dinners, festivals, city days, and nights out using weather, style preferences, and curated product links.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — WearWhere",
  },
  description: DESCRIPTION,
  applicationName: "WearWhere",
  keywords: [
    "WearWhere",
    "outfit planner",
    "event outfits",
    "fashion app",
    "Europe fashion",
    "what to wear",
    "weather outfit",
  ],
  authors: [{ name: "WearWhere" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "WearWhere",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-ivory text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
