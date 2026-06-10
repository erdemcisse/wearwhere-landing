import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { BetaBanner } from "@/components/BetaBanner";
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

const SITE_URL = "https://wearwhere-landing.vercel.app";
const TITLE = "WearWhere — What to wear. Where to go.";
const DESCRIPTION =
  "WearWhere helps you decide what to wear to concerts, dinners, festivals, and dates. Event-aware, weather-aware, style-aware. iOS app — Europe first.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — WearWhere",
  },
  description: DESCRIPTION,
  applicationName: "WearWhere",
  keywords: [
    "event outfit planner",
    "fashion app",
    "outfit ideas",
    "iOS fashion app",
    "event styling",
    "weather outfit app",
    "WearWhere",
    "Europe fashion",
  ],
  authors: [{ name: "WearWhere" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "WearWhere",
    locale: "en_GB",
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

// Set NEXT_PUBLIC_SHOW_BETA_BANNER=false once the App Store version is live.
const showBetaBanner = process.env.NEXT_PUBLIC_SHOW_BETA_BANNER !== "false";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-ivory text-ink antialiased">
        {showBetaBanner ? <BetaBanner /> : null}
        {children}
      </body>
    </html>
  );
}
