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

const SITE_URL = "https://wearwhere-landing.vercel.app";
const TITLE = "WearWhere — Know what to wear before the night starts";
const DESCRIPTION =
  "WearWhere is an iOS-first fashion app that plans outfits around real events, weather, comfort, style, and official seller links.";

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
