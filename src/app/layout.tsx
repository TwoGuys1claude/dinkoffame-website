import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/jsonld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Make Pickleball Social Again`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "pickleball",
    "pickleball app",
    "pickleball social",
    "pickleball tracker",
    "pickleball XP",
    "pickleball leaderboard",
    "pickleball community",
    "pickleball match tracker",
    "pickleball badges",
    "pickleball players",
    "pickleball scoring rules",
    "pickleball kitchen rules",
    "pickleball drills",
    "pickleball skill level",
    "pickleball rating calculator",
  ],
  openGraph: {
    title: `${SITE_NAME} - Make Pickleball Social Again`,
    description:
      "Track matches, earn XP, collect badges, and climb your facility leaderboard. The social layer pickleball has been missing.",
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Make Pickleball Social Again`,
    description:
      "Track matches, earn XP, collect badges, and climb your facility leaderboard.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebSiteSchema()} />
        {children}
      </body>
    </html>
  );
}
