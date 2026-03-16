import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/jsonld";

const PAGE_URL = `${SITE_URL}/tools/court-dimensions`;
const PAGE_TITLE =
  "Pickleball Court Dimensions & Size Guide | Official Measurements";
const PAGE_DESCRIPTION =
  "Official pickleball court dimensions: 44' × 20' with interactive diagram. Net height, kitchen size, service areas, line spacing, and more. Feet and meters with comparison to tennis courts.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "pickleball court dimensions",
    "pickleball court size",
    "pickleball court measurements",
    "pickleball net height",
    "pickleball kitchen size",
    "pickleball court diagram",
    "pickleball court layout",
    "pickleball court vs tennis court",
    "how big is a pickleball court",
    "pickleball non-volley zone dimensions",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Official pickleball court dimensions with interactive diagram. 44' × 20' court, 34\" net height, 7' kitchen depth — all measurements in feet and meters.",
    type: "website",
    siteName: SITE_NAME,
    url: PAGE_URL,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Official pickleball court dimensions with interactive diagram. All measurements in feet and meters.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const FAQ_ITEMS = [
  {
    question: "What are the official dimensions of a pickleball court?",
    answer:
      "A regulation pickleball court is 44 feet long and 20 feet wide (13.41m × 6.10m). This is the same size for both singles and doubles play. The court includes a 7-foot non-volley zone (kitchen) on each side of the net.",
  },
  {
    question: "How high is a pickleball net?",
    answer:
      "A pickleball net is 36 inches (91.4 cm) high at the sideline posts and 34 inches (86.4 cm) high at the center. The 2-inch dip in the center is intentional and part of regulation play.",
  },
  {
    question: "How big is the kitchen in pickleball?",
    answer:
      "The kitchen (Non-Volley Zone) is 7 feet deep and 20 feet wide on each side of the net (2.13m × 6.10m). That's 140 square feet per side. The kitchen line is considered part of the kitchen.",
  },
  {
    question: "Can you fit a pickleball court on a tennis court?",
    answer:
      "Yes. A standard tennis court can accommodate up to 4 pickleball courts with temporary lines and portable nets. A single pickleball court fits easily within a tennis court with room to spare — a tennis court is over 3× the area.",
  },
  {
    question: "Is a pickleball court the same size as a badminton court?",
    answer:
      "Nearly identical. A badminton doubles court is 44' × 20' — the exact same dimensions as a pickleball court. The main difference is net height: badminton nets are 5'1\" vs. pickleball's 34\"-36\".",
  },
  {
    question: "How much space do I need around the court?",
    answer:
      "USA Pickleball recommends a minimum of 54' × 24' total space (5 feet behind each baseline, 2 feet on each side). For tournaments, 64' × 34' is preferred (10 feet behind baselines, 7 feet on each side).",
  },
  {
    question: "How much does it cost to build a pickleball court?",
    answer:
      "A basic outdoor concrete pickleball court costs $11,000-$22,000 to build. A premium court with acrylic surfacing, fencing, and lighting can run $25,000-$40,000. Converting a tennis court is often cheaper at $5,000-$15,000 per pickleball court.",
  },
];

export default function CourtDimensionsLayout({
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
          { name: "Court Dimensions", url: PAGE_URL },
        ])}
      />
      <JsonLd data={buildFAQSchema(FAQ_ITEMS)} />
      {children}
    </>
  );
}
