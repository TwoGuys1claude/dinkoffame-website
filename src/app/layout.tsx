import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dink of Fame — Make Pickleball Social Again",
  description:
    "The social pickleball app where every game earns XP, every opponent builds your network, and every court is a community. Track matches, earn badges, climb leaderboards.",
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
  ],
  openGraph: {
    title: "Dink of Fame — Make Pickleball Social Again",
    description:
      "Track matches, earn XP, collect badges, and climb your facility leaderboard. The social layer pickleball has been missing.",
    type: "website",
    siteName: "Dink of Fame",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dink of Fame — Make Pickleball Social Again",
    description:
      "Track matches, earn XP, collect badges, and climb your facility leaderboard.",
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}
