"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  calculateCalories,
  INTENSITY_LEVELS,
  PLAY_TYPES,
  WEIGHT_PRESETS_LBS,
  DURATION_PRESETS_MIN,
  type IntensityLevel,
  type PlayType,
  type CalorieResult,
} from "@/lib/calorie-data";

export default function CalorieCalculatorPage() {
  const [weightLbs, setWeightLbs] = useState(160);
  const [customWeight, setCustomWeight] = useState("");
  const [duration, setDuration] = useState(60);
  const [intensity, setIntensity] = useState<IntensityLevel>("moderate");
  const [playType, setPlayType] = useState<PlayType>("doubles_casual");
  const [result, setResult] = useState<CalorieResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const effectiveWeight = customWeight ? parseInt(customWeight, 10) : weightLbs;

  function handleCalculate() {
    if (!effectiveWeight || effectiveWeight < 60 || effectiveWeight > 500)
      return;
    const r = calculateCalories(effectiveWeight, duration, intensity, playType);
    setResult(r);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-4xl px-6">
          {/* Hero */}
          <div className="text-center animate-fade-up mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Free Tool
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Pickleball{" "}
              <span className="text-gradient">Calorie Calculator</span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Find out how many calories you burn playing pickleball. Enter your
              weight, session length, and intensity — get science-backed results
              instantly.
            </p>
          </div>

          {/* Calculator Form */}
          <div className="animate-fade-up-delay-1">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 card-shine">
              {/* Weight */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Your Weight (lbs)
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {WEIGHT_PRESETS_LBS.map((w) => (
                    <button
                      key={w}
                      onClick={() => {
                        setWeightLbs(w);
                        setCustomWeight("");
                      }}
                      className={`w-16 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        effectiveWeight === w && !customWeight
                          ? "bg-primary/15 text-primary border-2 border-primary/40"
                          : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted/50">or</span>
                  <input
                    type="number"
                    min={60}
                    max={500}
                    placeholder="Custom weight"
                    value={customWeight}
                    onChange={(e) => setCustomWeight(e.target.value)}
                    className="w-36 px-3 py-2 rounded-xl text-xs font-bold bg-surface border border-border/40 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-primary/50"
                  />
                  <span className="text-xs text-muted/40">lbs</span>
                </div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Session Length (minutes)
                </label>
                <div className="flex flex-wrap gap-2">
                  {DURATION_PRESETS_MIN.map((n) => (
                    <button
                      key={n}
                      onClick={() => setDuration(n)}
                      className={`w-14 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        duration === n
                          ? "bg-accent/15 text-accent border-2 border-accent/40"
                          : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Intensity
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {INTENSITY_LEVELS.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => setIntensity(level.value)}
                      className={`px-3 py-3 rounded-xl text-left transition-all ${
                        intensity === level.value
                          ? "bg-primary/15 text-primary border-2 border-primary/40"
                          : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                      }`}
                    >
                      <span className="block text-xs font-bold">
                        {level.label}
                      </span>
                      <span className="block text-[10px] mt-0.5 opacity-60">
                        {level.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Play Type */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Play Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {PLAY_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setPlayType(type.value)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        playType === type.value
                          ? "bg-accent/15 text-accent border-2 border-accent/40"
                          : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                className="w-full py-4 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors animate-pulse-ring"
              >
                Calculate Calories Burned
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div ref={resultsRef} className="mt-10 animate-fade-up">
              {/* Big Number */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center card-shine mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted/60 mb-2">
                  Estimated Calories Burned
                </p>
                <p className="text-5xl md:text-7xl font-extrabold text-primary">
                  {result.totalCalories.toLocaleString()}
                </p>
                <p className="text-sm text-muted mt-2">
                  calories in {result.durationMin} minutes at MET{" "}
                  {result.met}
                </p>
                <p className="text-xs text-muted/50 mt-1">
                  {result.caloriesPerMinute} cal/min · {result.weightKg} kg body
                  weight
                </p>
              </div>

              {/* Fun Equivalents */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {result.equivalents.map((eq) => (
                  <div
                    key={eq.label}
                    className="rounded-xl border border-border/40 bg-card/60 p-4 text-center"
                  >
                    <p className="text-2xl font-extrabold text-foreground">
                      {eq.value}
                    </p>
                    <p className="text-[10px] text-muted/60 mt-1 uppercase font-bold tracking-wide">
                      {eq.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Comparison Chart */}
              <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8">
                <h3 className="text-sm font-bold mb-4">
                  Pickleball vs. Other Activities
                </h3>
                <p className="text-xs text-muted/50 mb-4">
                  Same weight and duration — see how pickleball stacks up.
                </p>
                <div className="space-y-2.5">
                  {/* Pickleball (yours) */}
                  <ComparisonBar
                    label="Pickleball (your session)"
                    emoji="🏓"
                    calories={result.totalCalories}
                    maxCalories={Math.max(
                      result.totalCalories,
                      ...result.comparisons.map((c) => c.calories)
                    )}
                    isHighlighted
                  />
                  {result.comparisons.map((comp) => (
                    <ComparisonBar
                      key={comp.label}
                      label={comp.label}
                      emoji={comp.emoji}
                      calories={comp.calories}
                      maxCalories={Math.max(
                        result.totalCalories,
                        ...result.comparisons.map((c) => c.calories)
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* App CTA */}
              <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center card-shine">
                <div className="text-2xl mb-2">🔥</div>
                <h3 className="text-lg font-bold mb-2">
                  Track every calorie in{" "}
                  <span className="text-primary">Dink of Fame</span>
                </h3>
                <p className="text-sm text-muted max-w-md mx-auto mb-5">
                  Log your sessions, track calories burned over time, earn XP
                  for staying active, and watch your fitness stats climb.
                </p>
                <Link
                  href="/#waitlist"
                  className="inline-block px-6 py-3 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
                >
                  Join the Waitlist
                </Link>
              </div>
            </div>
          )}

          {/* SEO Content */}
          <div className="mt-20 space-y-12 animate-fade-up-delay-2">
            {/* How it works */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                How the Pickleball Calorie Calculator Works
              </h2>
              <div className="prose prose-sm max-w-none text-muted">
                <p>
                  Our calculator uses the scientifically validated MET (Metabolic
                  Equivalent of Task) formula to estimate calorie burn. MET
                  values represent the energy cost of an activity relative to
                  rest. The formula is: <strong>Calories per minute = (MET
                  &times; 3.5 &times; body weight in kg) &divide; 200</strong>.
                  Pickleball MET values range from 4.5 (casual play) to 7.5
                  (tournament singles), based on exercise science research.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  {
                    step: "1",
                    title: "Enter your details",
                    desc: "Input your weight, session length, and how intensely you play.",
                  },
                  {
                    step: "2",
                    title: "Choose play type",
                    desc: "Singles burns more than doubles. Competitive burns more than casual. We adjust the MET value accordingly.",
                  },
                  {
                    step: "3",
                    title: "See your results",
                    desc: "Get your calorie estimate plus a head-to-head comparison against 10 other activities.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-xl border border-border/40 bg-card/60 p-5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary font-bold text-sm flex items-center justify-center mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Is pickleball a good workout */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Is Pickleball a Good Workout?
              </h2>
              <div className="prose prose-sm max-w-none text-muted space-y-3">
                <p>
                  Yes. Research consistently shows pickleball qualifies as
                  moderate-to-vigorous intensity exercise. Players maintain an
                  average heart rate of around 111 bpm — roughly 70% of
                  age-predicted maximum — which falls within the recommended
                  zone for cardiovascular fitness.
                </p>
                <p>
                  A 6-week study of players exercising 3 times per week found a
                  12% improvement in cardiorespiratory fitness, along with
                  improvements in blood pressure and cholesterol. Pickleball also
                  functions as natural HIIT training — alternating bursts of
                  intense rallies with brief recovery periods between points.
                </p>
                <p>
                  The typical recreational player burns 350-500 calories per
                  hour, and many play for 2-3 hours per session. That adds up to
                  serious calorie expenditure without the injury risk of
                  higher-impact sports like running or tennis.
                </p>
              </div>
            </section>

            {/* Pickleball vs other sports */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Pickleball vs. Other Sports: Calorie Comparison
              </h2>
              <div className="prose prose-sm max-w-none text-muted space-y-3">
                <p>
                  For a 160-pound person playing for one hour, here is how
                  pickleball compares to other popular activities:
                </p>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border/40">
                      <th className="text-left py-2 pr-4 text-muted/60 font-bold uppercase tracking-wider">
                        Activity
                      </th>
                      <th className="text-right py-2 text-muted/60 font-bold uppercase tracking-wider">
                        Cal/Hour
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20">
                    {[
                      { label: "Pickleball (casual doubles)", cal: 343 },
                      { label: "Pickleball (moderate doubles)", cal: 419 },
                      { label: "Pickleball (competitive)", cal: 496 },
                      { label: "Pickleball (tournament singles)", cal: 572 },
                      { label: "Tennis (doubles)", cal: 457 },
                      { label: "Tennis (singles)", cal: 610 },
                      { label: "Walking (3 mph)", cal: 267 },
                      { label: "Jogging", cal: 534 },
                      { label: "Cycling (moderate)", cal: 610 },
                      { label: "Swimming (moderate)", cal: 442 },
                      { label: "Golf (walking)", cal: 328 },
                    ].map((row) => (
                      <tr
                        key={row.label}
                        className={
                          row.label.startsWith("Pickleball")
                            ? "text-primary font-semibold"
                            : "text-muted"
                        }
                      >
                        <td className="py-2 pr-4">{row.label}</td>
                        <td className="py-2 text-right">{row.cal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-muted/40 mt-2">
                  Based on 160 lbs body weight. Actual results vary by individual.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How many calories does 1 hour of pickleball burn?",
                    a: "For a 160-pound person, one hour of moderate recreational doubles burns approximately 400-420 calories. Competitive singles can push that to 500-575 calories. Lighter players burn less, heavier players burn more — our calculator gives you a personalized estimate.",
                  },
                  {
                    q: "Is pickleball better exercise than walking?",
                    a: "Pickleball burns 40-60% more calories per hour than walking at 3 mph. For a 160-pound person, moderate pickleball burns ~420 cal/hr vs. ~267 cal/hr for walking. Pickleball also adds lateral movement, hand-eye coordination, and interval-style intensity that walking doesn't provide.",
                  },
                  {
                    q: "Does pickleball count as cardio?",
                    a: "Yes. Players maintain an average heart rate of ~70% of age-predicted maximum during play, which meets the American Heart Association's definition of moderate-to-vigorous cardiovascular exercise. Playing 3-4 times per week satisfies the CDC recommendation of 150-300 minutes of weekly aerobic activity.",
                  },
                  {
                    q: "How does pickleball compare to tennis for calories?",
                    a: "Tennis singles burns about 15-25% more calories per hour than pickleball due to the larger court. However, pickleball players typically play longer sessions (2-3 hours vs. 1-1.5 for tennis), so total calorie burn per session is often comparable. Pickleball also has a lower injury rate.",
                  },
                  {
                    q: "Does singles burn more calories than doubles?",
                    a: "Yes — singles pickleball burns roughly 20-25% more calories than doubles because you cover the entire court yourself. In singles, players spend up to 80% of court time with elevated heart rate compared to ~50% in doubles.",
                  },
                  {
                    q: "How accurate is this calorie calculator?",
                    a: "MET-based calorie calculations are the standard used in exercise science and are accurate to within 10-20% for most people. Individual variation depends on fitness level, body composition, age, and playing style. For the most accurate tracking, combine our estimate with a heart rate monitor.",
                  },
                ].map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-border/40 bg-card/60"
                  >
                    <summary className="cursor-pointer px-5 py-4 text-sm font-semibold flex items-center justify-between">
                      {faq.q}
                      <span className="text-muted/40 group-open:rotate-45 transition-transform text-lg">
                        +
                      </span>
                    </summary>
                    <p className="px-5 pb-4 text-xs text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related tools */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                More Free Pickleball Tools
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="/tools/drill-generator"
                  className="rounded-xl border border-border/40 bg-card/60 p-5 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-xl">🏋️</span>
                  <h3 className="font-bold text-sm mt-2 mb-1 group-hover:text-primary transition-colors">
                    Drill Generator
                  </h3>
                  <p className="text-xs text-muted">
                    Get a custom practice plan with 30 drills across 11 focus
                    areas for every skill level.
                  </p>
                </Link>
                <Link
                  href="/tools/round-robin-generator"
                  className="rounded-xl border border-border/40 bg-card/60 p-5 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-xl">🔄</span>
                  <h3 className="font-bold text-sm mt-2 mb-1 group-hover:text-primary transition-colors">
                    Round Robin Generator
                  </h3>
                  <p className="text-xs text-muted">
                    Create optimized round robin schedules for your pickleball
                    group.
                  </p>
                </Link>
                <Link
                  href="/tools/skill-quiz"
                  className="rounded-xl border border-border/40 bg-card/60 p-5 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-xl">🎯</span>
                  <h3 className="font-bold text-sm mt-2 mb-1 group-hover:text-primary transition-colors">
                    Skill Quiz
                  </h3>
                  <p className="text-xs text-muted">
                    Find your pickleball rating from 2.0 to 4.5+ with our
                    10-question assessment.
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ComparisonBar({
  label,
  emoji,
  calories,
  maxCalories,
  isHighlighted = false,
}: {
  label: string;
  emoji: string;
  calories: number;
  maxCalories: number;
  isHighlighted?: boolean;
}) {
  const pct = Math.round((calories / maxCalories) * 100);
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm w-5 text-center shrink-0">{emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <span
            className={`text-xs truncate ${isHighlighted ? "font-bold text-primary" : "text-muted/70"}`}
          >
            {label}
          </span>
          <span
            className={`text-xs font-bold ml-2 shrink-0 ${isHighlighted ? "text-primary" : "text-muted/50"}`}
          >
            {calories.toLocaleString()} cal
          </span>
        </div>
        <div className="h-2 rounded-full bg-surface overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${isHighlighted ? "bg-primary" : "bg-muted/20"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
