import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/jsonld";

const PAGE_URL = `${SITE_URL}/tools/calorie-calculator`;
const PAGE_TITLE =
  "Pickleball Calorie Calculator | How Many Calories Does Pickleball Burn?";
const PAGE_DESCRIPTION =
  "Calculate how many calories you burn playing pickleball. Science-based MET formula adjusted for intensity, play type, weight, and duration. Compare pickleball to tennis, walking, cycling, and more.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "pickleball calories burned",
    "how many calories does pickleball burn",
    "pickleball calorie calculator",
    "calories burned playing pickleball",
    "pickleball exercise",
    "pickleball workout",
    "pickleball fitness",
    "pickleball MET value",
    "is pickleball good exercise",
    "pickleball vs tennis calories",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Calculate how many calories you burn playing pickleball. Science-based formula for singles, doubles, drills, and tournament play.",
    type: "website",
    siteName: SITE_NAME,
    url: PAGE_URL,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Calculate how many calories you burn playing pickleball. Science-based MET formula for every play style.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const FAQ_ITEMS = [
  {
    question: "How many calories does pickleball burn per hour?",
    answer:
      "A 160-pound person burns approximately 350-530 calories per hour playing pickleball, depending on intensity and play type. Casual doubles burns around 350 calories, while competitive singles can burn over 530 calories per hour.",
  },
  {
    question: "Is pickleball a good workout?",
    answer:
      "Yes. Pickleball provides a moderate-to-vigorous cardiovascular workout with MET values ranging from 4.5 to 8.0 depending on intensity. It improves heart health, burns calories, builds agility, and is easier on joints than running or tennis.",
  },
  {
    question: "Does pickleball burn more calories than walking?",
    answer:
      "Yes. Moderate pickleball (MET 5.5) burns roughly 50-60% more calories than brisk walking (MET 3.5). A 160-pound person burns about 350 calories per hour playing casual doubles vs. 220 calories walking at 3 mph.",
  },
  {
    question: "How does pickleball compare to tennis for calories burned?",
    answer:
      "Singles tennis (MET 8.0) burns more calories than most pickleball play styles. However, competitive pickleball singles (MET ~8.0) is comparable. Pickleball doubles (MET 5.5-6.5) burns slightly less than tennis doubles (MET 6.0).",
  },
  {
    question: "What is a MET value and how is it used?",
    answer:
      "MET (Metabolic Equivalent of Task) measures exercise intensity relative to rest. A MET of 1.0 is sitting still. Pickleball ranges from 4.5 METs (casual) to 7.5+ METs (tournament). The calorie formula is: calories/min = (MET x 3.5 x weight in kg) / 200.",
  },
  {
    question: "How can I burn more calories playing pickleball?",
    answer:
      "Play singles instead of doubles, increase rally intensity, minimize rest between points, play competitive games rather than casual rallies, and add dedicated drilling sessions. Tournament-style play burns nearly twice the calories of casual doubles.",
  },
];

export default function CalorieCalculatorLayout({
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
          { name: "Calorie Calculator", url: PAGE_URL },
        ])}
      />
      <JsonLd data={buildFAQSchema(FAQ_ITEMS)} />
      {children}
    </>
  );
}
