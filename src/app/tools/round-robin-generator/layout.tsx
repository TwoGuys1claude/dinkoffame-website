import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Pickleball Round Robin Generator",
  description:
    "Generate pickleball round robin schedules instantly. Supports singles & doubles mixer formats, custom court counts, bye management, and printable brackets. Free — no signup required.",
  keywords: [
    "pickleball round robin generator",
    "pickleball round robin schedule",
    "pickleball round robin bracket",
    "pickleball mixer generator",
    "pickleball doubles mixer schedule",
    "round robin tournament pickleball",
    "pickleball schedule maker",
    "pickleball court rotation",
    "free pickleball bracket generator",
  ],
  openGraph: {
    title: "Free Pickleball Round Robin Generator",
    description:
      "Generate round robin schedules for pickleball in seconds. Singles, doubles mixer, any court count. Print-ready brackets with score lines.",
    type: "website",
    siteName: SITE_NAME,
    url: `${SITE_URL}/tools/round-robin-generator`,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Pickleball Round Robin Generator",
    description:
      "Generate round robin schedules for pickleball in seconds. Singles, doubles mixer, any court count.",
  },
  alternates: {
    canonical: `${SITE_URL}/tools/round-robin-generator`,
  },
};

export default function RoundRobinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
