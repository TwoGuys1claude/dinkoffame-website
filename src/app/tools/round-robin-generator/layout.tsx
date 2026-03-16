import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/jsonld";

const PAGE_URL = `${SITE_URL}/tools/round-robin-generator`;
const PAGE_TITLE = "Free Pickleball Round Robin Generator | Schedule Maker";
const PAGE_DESCRIPTION =
  "Generate pickleball round robin schedules instantly. Supports singles & doubles mixer formats, custom court counts, bye management, and printable brackets. Free — no signup required.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
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
    title: PAGE_TITLE,
    description:
      "Generate round robin schedules for pickleball in seconds. Singles, doubles mixer, any court count. Print-ready brackets with score lines.",
    type: "website",
    siteName: SITE_NAME,
    url: PAGE_URL,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Generate round robin schedules for pickleball in seconds. Singles, doubles mixer, any court count.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const FAQ_ITEMS = [
  {
    question: "What is a round robin in pickleball?",
    answer:
      "A round robin is a tournament format where every player (or team) plays against every other player at least once. In pickleball, this is the most common format for open play sessions, mixers, and social events because everyone gets to play multiple games.",
  },
  {
    question: "How does a doubles mixer round robin work?",
    answer:
      "In a doubles mixer, partners rotate each round so you play with a different partner every time. This maximizes the social aspect — you get to play with and against everyone in your group. Our generator optimizes these pairings automatically.",
  },
  {
    question: "How many rounds do I need?",
    answer:
      "For singles, you need N-1 rounds where N is your player count. For doubles mixer, we recommend at least as many rounds as you have players to ensure good partner diversity. Our generator calculates the optimal number automatically.",
  },
  {
    question: "What if I have an odd number of players?",
    answer:
      "The generator handles odd numbers automatically by assigning byes. Each round, one player will sit out while others play. Byes rotate so everyone sits out roughly the same amount.",
  },
  {
    question: "Can I use this for a pickleball tournament?",
    answer:
      "Yes! Round robin is great for pool play in tournaments. Enter your pool size and courts, generate the schedule, then print it out. For full tournament brackets with elimination rounds, check back soon for our bracket generator.",
  },
  {
    question: "How many courts do I need for my group?",
    answer:
      "A good rule of thumb: 1 court per 4-6 players for doubles, 1 court per 2-3 players for singles. More courts means less sitting out between games. Our generator adjusts the schedule to your available courts.",
  },
];

export default function RoundRobinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={buildWebPageSchema(PAGE_TITLE, PAGE_DESCRIPTION, PAGE_URL)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Tools", url: `${SITE_URL}/tools` },
          { name: "Round Robin Generator", url: PAGE_URL },
        ])}
      />
      <JsonLd data={buildFAQSchema(FAQ_ITEMS)} />
      {children}
    </>
  );
}
