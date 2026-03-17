import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/jsonld";

const PAGE_URL = `${SITE_URL}/tools/pickleball-iq-test`;
const PAGE_TITLE =
  "Pickleball IQ Test — 28 Questions to Find Your True Game IQ";
const PAGE_DESCRIPTION =
  "Take the ultimate Pickleball IQ Test. 28 knowledge-based questions across rules, strategy, shots, situational awareness, and history. Get your IQ score, category breakdown, and share with friends.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "pickleball iq test",
    "pickleball knowledge quiz",
    "pickleball trivia",
    "pickleball rules quiz",
    "pickleball strategy test",
    "pickleball quiz",
    "how much do you know about pickleball",
    "pickleball brain test",
    "pickleball knowledge test",
    "pickleball game iq",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description:
      "28 questions. 5 categories. One IQ score. How smart is your pickleball game? Take the test and challenge your friends.",
    type: "website",
    siteName: SITE_NAME,
    url: PAGE_URL,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "28 questions across rules, strategy, shots, and more. Find your Pickleball IQ and share it.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const FAQ_ITEMS = [
  {
    question: "What is the Pickleball IQ Test?",
    answer:
      "The Pickleball IQ Test is a 28-question knowledge quiz that measures your understanding of pickleball rules, strategy, shot knowledge, situational awareness, and history. You receive an IQ score from 50 to 145 along with a tier ranking and category breakdown.",
  },
  {
    question: "How is the Pickleball IQ score calculated?",
    answer:
      "Questions are weighted by difficulty: easy (1 point), medium (2 points), and hard (3 points). Your raw score is converted to an IQ scale from 50 to 145. The maximum raw score is 56 points across all 28 questions.",
  },
  {
    question: "What categories does the test cover?",
    answer:
      "The test covers 5 categories: Rules & Officiating (7 questions), Strategy & Tactics (7 questions), Situational Awareness (5 questions), Shot Knowledge (5 questions), and History & Culture (4 questions).",
  },
  {
    question: "What are the IQ tier rankings?",
    answer:
      "There are 6 tiers: Casual Dinker (below 70), Social Player (70-84), Court Smart (85-99), Strategist (100-114), Pickleball Scholar (115-129), and Pickleball Genius (130+).",
  },
  {
    question: "Can I retake the Pickleball IQ Test?",
    answer:
      "Yes! You can retake the test as many times as you want. The questions stay the same so you can study up and try to improve your score.",
  },
];

export default function PickleballIQTestLayout({
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
          { name: "Pickleball IQ Test", url: PAGE_URL },
        ])}
      />
      <JsonLd data={buildFAQSchema(FAQ_ITEMS)} />
      {children}
    </>
  );
}
