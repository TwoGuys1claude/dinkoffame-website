import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/jsonld";

const PAGE_URL = `${SITE_URL}/tools/skill-quiz`;
const PAGE_TITLE = "What Level Pickleball Player Am I? | Free Skill Quiz";
const PAGE_DESCRIPTION =
  "Take our free 10-question pickleball skill quiz to find your rating from 2.0 to 4.5+. Get personalized tips to improve your game. No signup required.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "pickleball skill level",
    "pickleball rating quiz",
    "what level pickleball player am I",
    "pickleball skill assessment",
    "pickleball rating calculator",
    "pickleball DUPR rating",
    "pickleball player rating",
    "pickleball beginner intermediate advanced",
    "pickleball skill test",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
    url: PAGE_URL,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const FAQ_ITEMS = [
  {
    question: "How accurate is this pickleball skill quiz?",
    answer:
      "This quiz provides an estimated self-rating based on 10 key areas of your game. While it closely aligns with USAPA/USA Pickleball skill level descriptions, an official rating requires evaluation by a certified referee or a platform like DUPR that uses match results.",
  },
  {
    question: "What do pickleball skill ratings mean?",
    answer:
      "Pickleball ratings range from 1.0 (brand new) to 5.5+ (professional). Most recreational players are between 2.5 and 4.0. A 2.5 is a beginner who knows basic rules, 3.0-3.5 is intermediate with consistent rallies, and 4.0+ players use advanced strategy like stacking, Erné shots, and targeted placement.",
  },
  {
    question: "How often should I retake the skill quiz?",
    answer:
      "We recommend retaking the quiz every 2-3 months or after a period of focused practice. Your skill level can change significantly with regular play and targeted drills.",
  },
  {
    question: "What is the difference between DUPR and self-rated skill levels?",
    answer:
      "DUPR (Dynamic Universal Pickleball Rating) uses actual match results to calculate a dynamic rating. Self-ratings, like this quiz provides, are based on your honest assessment of your skills. Both are useful — self-ratings help you find the right playing group, while DUPR provides objective match-based tracking.",
  },
];

export default function SkillQuizLayout({
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
          { name: "Skill Quiz", url: PAGE_URL },
        ])}
      />
      <JsonLd data={buildFAQSchema(FAQ_ITEMS)} />
      {children}
    </>
  );
}
