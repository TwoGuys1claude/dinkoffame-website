import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/jsonld";

const PAGE_URL = `${SITE_URL}/tools/drill-generator`;
const PAGE_TITLE =
  "Free Pickleball Drill Generator | Custom Practice Plans";
const PAGE_DESCRIPTION =
  "Generate a personalized pickleball drill plan in seconds. 30 drills across 11 focus areas for beginners to advanced players. Solo and partner drills included. No signup required.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "pickleball drills",
    "pickleball drill generator",
    "pickleball practice plan",
    "pickleball drills for beginners",
    "pickleball dinking drills",
    "pickleball solo drills",
    "pickleball drill routine",
    "pickleball practice drills",
    "pickleball training plan",
    "pickleball warm up drills",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Generate a personalized pickleball drill plan in seconds. 30 drills across 11 focus areas. Solo and partner drills for every skill level.",
    type: "website",
    siteName: SITE_NAME,
    url: PAGE_URL,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Generate a personalized pickleball drill plan in seconds. 30 drills for every skill level.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const FAQ_ITEMS = [
  {
    question: "How long should a pickleball practice session be?",
    answer:
      "A focused 30-minute drill session is more effective than hours of unfocused play. For best results, drill for 15-30 minutes before playing games. A 45-60 minute dedicated session lets you cover multiple skill areas thoroughly.",
  },
  {
    question: "Can I practice pickleball alone?",
    answer:
      "Absolutely. Solo drills like serve placement, target drives, drop shot progression, footwork drills, and wall practice are all effective. Our generator includes solo drills when you select 1 player.",
  },
  {
    question: "What pickleball drills should beginners focus on?",
    answer:
      "Beginners should prioritize dinking consistency, serve accuracy, basic volleys, and the third shot drop. These four skills form the foundation of every pickleball rally.",
  },
  {
    question: "What is the most important pickleball skill to practice?",
    answer:
      "The third shot drop and transition game separate intermediate players from advanced players. The kitchen run drill combines drops, resets, and advancing to the net into one realistic sequence.",
  },
  {
    question: "How do I improve my dink game?",
    answer:
      "Cross-court dink rallies are the single best drill. Start by counting consecutive dinks without a miss (aim for 20+), then progress to triangle dinks for placement, and dink scoring games for competitive pressure.",
  },
  {
    question: "How often should I drill vs. play games?",
    answer:
      "A good ratio is 30% drilling, 70% playing for recreational players. If you play 3 times a week, dedicate at least one session to drills. Competitive players often train at 50/50 or 60% drilling.",
  },
];

export default function DrillGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema(PAGE_TITLE, PAGE_DESCRIPTION, PAGE_URL)}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Tools", url: `${SITE_URL}/tools` },
          { name: "Drill Generator", url: PAGE_URL },
        ])}
      />
      <JsonLd data={buildFAQSchema(FAQ_ITEMS)} />
      {children}
    </>
  );
}
