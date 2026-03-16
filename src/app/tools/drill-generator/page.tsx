"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  generateDrillPlan,
  FOCUS_AREAS,
  SKILL_LEVELS,
  type FocusArea,
  type SkillLevel,
  type DrillPlan,
  type Drill,
} from "@/lib/drill-data";

const DURATION_PRESETS = [15, 30, 45, 60, 90];
const PLAYER_PRESETS = [1, 2, 4];

export default function DrillGeneratorPage() {
  const [selectedFocus, setSelectedFocus] = useState<FocusArea[]>([]);
  const [skillLevel, setSkillLevel] = useState<SkillLevel | "any">("any");
  const [players, setPlayers] = useState(2);
  const [duration, setDuration] = useState(30);
  const [plan, setPlan] = useState<DrillPlan | null>(null);
  const [expandedDrill, setExpandedDrill] = useState<number | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  function toggleFocus(area: FocusArea) {
    setSelectedFocus((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  }

  function handleGenerate() {
    const result = generateDrillPlan({
      focusAreas: selectedFocus,
      skillLevel,
      players,
      duration,
    });
    setPlan(result);
    setExpandedDrill(null);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  function handleShuffle() {
    handleGenerate();
  }

  function handleCopyText() {
    if (!plan) return;
    let text = `Pickleball Drill Plan\n`;
    text += `${plan.totalDuration} min · ${plan.drills.length} drills\n\n`;

    for (let i = 0; i < plan.drills.length; i++) {
      const d = plan.drills[i];
      text += `${i + 1}. ${d.name} (${d.duration} min)\n`;
      text += `   ${d.description}\n`;
      text += `   How to: ${d.howTo}\n`;
      text += `   Tip: ${d.tip}\n\n`;
    }

    text += `Generated at dinkoffame.com/tools/drill-generator\n`;
    navigator.clipboard.writeText(text);
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
              <span className="text-gradient">Drill Generator</span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Get a personalized practice plan in seconds. Choose your focus
              areas, skill level, and session length — we will build the perfect
              drill routine for you.
            </p>
          </div>

          {/* Generator Form */}
          <div className="animate-fade-up-delay-1">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 card-shine">
              {/* Focus Areas */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Focus Areas{" "}
                  <span className="normal-case font-normal">
                    (select any or leave empty for all)
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {FOCUS_AREAS.map((area) => (
                    <button
                      key={area.value}
                      onClick={() => toggleFocus(area.value)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedFocus.includes(area.value)
                          ? "bg-primary/15 text-primary border-2 border-primary/40"
                          : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                      }`}
                    >
                      {area.emoji} {area.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skill Level */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Skill Level
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSkillLevel("any")}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      skillLevel === "any"
                        ? "bg-primary/15 text-primary border-2 border-primary/40"
                        : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                    }`}
                  >
                    Any Level
                  </button>
                  {SKILL_LEVELS.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => setSkillLevel(level.value)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        skillLevel === level.value
                          ? "bg-primary/15 text-primary border-2 border-primary/40"
                          : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Players */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Players Available
                </label>
                <div className="flex gap-2">
                  {PLAYER_PRESETS.map((n) => (
                    <button
                      key={n}
                      onClick={() => setPlayers(n)}
                      className={`w-16 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        players === n
                          ? "bg-accent/15 text-accent border-2 border-accent/40"
                          : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                      }`}
                    >
                      {n === 1 ? "Solo" : n === 2 ? "2" : "4+"}
                    </button>
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-muted/50">
                  {players === 1
                    ? "Solo drills you can do alone or against a wall."
                    : players === 2
                      ? "Drills for you and a partner."
                      : "Drills for a group of 4 or more."}
                </p>
              </div>

              {/* Duration */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Session Length (minutes)
                </label>
                <div className="flex flex-wrap gap-2">
                  {DURATION_PRESETS.map((n) => (
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

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                className="w-full py-4 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors animate-pulse-ring"
              >
                Generate My Drill Plan
              </button>
            </div>
          </div>

          {/* Results */}
          {plan && plan.drills.length > 0 && (
            <div ref={resultsRef} className="mt-10 animate-fade-up">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold">Your Drill Plan</h2>
                  <p className="text-sm text-muted mt-1">
                    {plan.drills.length} drill
                    {plan.drills.length > 1 ? "s" : ""} ·{" "}
                    {plan.totalDuration} minutes ·{" "}
                    {plan.focusAreas.length} focus area
                    {plan.focusAreas.length > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleShuffle}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border transition-colors"
                  >
                    Shuffle
                  </button>
                  <button
                    onClick={handleCopyText}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary/15 border border-primary/30 text-primary hover:bg-primary/25 transition-colors"
                  >
                    Copy Plan
                  </button>
                </div>
              </div>

              {/* Drill Cards */}
              <div className="space-y-3">
                {plan.drills.map((drill, idx) => (
                  <DrillCard
                    key={drill.id}
                    drill={drill}
                    index={idx + 1}
                    isExpanded={
                      expandedDrill === null || expandedDrill === drill.id
                    }
                    onToggle={() =>
                      setExpandedDrill(
                        expandedDrill === drill.id ? null : drill.id
                      )
                    }
                  />
                ))}
              </div>

              {/* App CTA */}
              <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center card-shine">
                <div className="text-2xl mb-2">🏓</div>
                <h3 className="text-lg font-bold mb-2">
                  Track your drills in{" "}
                  <span className="text-primary">Dink of Fame</span>
                </h3>
                <p className="text-sm text-muted max-w-md mx-auto mb-5">
                  Log your practice sessions, earn XP for every drill
                  completed, and watch your skill rating climb over time.
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

          {plan && plan.drills.length === 0 && (
            <div
              ref={resultsRef}
              className="mt-10 text-center py-12 rounded-2xl border border-border/40 bg-card/60"
            >
              <p className="text-muted text-sm">
                No drills match your filters. Try selecting fewer focus areas or
                a different skill level.
              </p>
            </div>
          )}

          {/* SEO Content */}
          <div className="mt-20 space-y-12 animate-fade-up-delay-2">
            {/* How it works */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                How the Pickleball Drill Generator Works
              </h2>
              <div className="prose prose-sm max-w-none text-muted">
                <p>
                  Our free pickleball drill generator builds a custom practice
                  routine based on what you want to improve. Choose from 11
                  focus areas including dinking, serving, third shot drops,
                  volleys, and more. The algorithm selects drills that match your
                  skill level, fit your available time, and cover the areas that
                  matter most to you.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  {
                    step: "1",
                    title: "Pick your focus",
                    desc: "Select the skills you want to work on — dinking, serving, transition, or all of the above.",
                  },
                  {
                    step: "2",
                    title: "Set your session",
                    desc: "Choose your skill level, how many players you have, and your total practice time.",
                  },
                  {
                    step: "3",
                    title: "Get your plan",
                    desc: "Receive a step-by-step drill plan with instructions, pro tips, and time allocation for each drill.",
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

            {/* Why drill */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Why Pickleball Drills Matter More Than Playing Games
              </h2>
              <div className="prose prose-sm max-w-none text-muted space-y-3">
                <p>
                  Most pickleball players only play games and never practice
                  drills. That is the number one reason players plateau. Games
                  reinforce existing habits — good and bad. Drills isolate
                  specific skills so you can build muscle memory for the shots
                  that matter.
                </p>
                <p>
                  Research shows that focused, deliberate practice is 3-5x more
                  effective at building skills than unstructured play. Even 15
                  minutes of targeted drilling before your games can accelerate
                  improvement dramatically.
                </p>
                <p>
                  Our drill generator takes the guesswork out of practice. Instead
                  of standing around wondering what to work on, you get a ready-made
                  plan that targets your weak spots and fits your schedule.
                </p>
              </div>
            </section>

            {/* Drill categories guide */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                What to Practice at Each Skill Level
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Beginner (2.0-3.0)",
                    desc: "Focus on consistency and basic mechanics. Key drills: cross-court dinks, serve placement, drop shot progression, and rapid-fire volleys. Build a foundation before adding complexity.",
                  },
                  {
                    title: "Intermediate (3.0-4.0)",
                    desc: "Develop your transition game and placement. Key drills: kitchen run, deep returns, three-and-go transition, and directional returns. This is where most players plateau — targeted drills break through.",
                  },
                  {
                    title: "Advanced (4.0+)",
                    desc: "Refine advanced tactics and shot variety. Key drills: dead dink attacks, spin serve variations, drive-and-drop, and body shot defense. Focus on deception, shot selection, and competitive pressure.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border/40 bg-card/60 p-5"
                  >
                    <h3 className="font-bold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
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
                    q: "How long should a pickleball practice session be?",
                    a: "A focused 30-minute drill session is more effective than hours of unfocused play. For best results, drill for 15-30 minutes before playing games. If you have more time, a 45-60 minute dedicated practice session lets you cover multiple skill areas thoroughly.",
                  },
                  {
                    q: "Can I practice pickleball alone?",
                    a: "Absolutely. Solo drills like serve placement, target drives, drop shot progression, footwork drills, and wall practice are all effective. Our generator includes solo drills when you select 1 player — you can have a great practice session without a partner.",
                  },
                  {
                    q: "What pickleball drills should beginners focus on?",
                    a: "Beginners should prioritize dinking consistency, serve accuracy, basic volleys, and the third shot drop. These four skills form the foundation of every pickleball rally. Master them before moving to advanced tactics like stacking or Erne shots.",
                  },
                  {
                    q: "How do I improve my dink game?",
                    a: "Cross-court dink rallies are the single best drill. Start by counting consecutive dinks without a miss (aim for 20+), then progress to the triangle dink drill for placement, and finally dink scoring games for competitive pressure. Practice 10 minutes per session.",
                  },
                  {
                    q: "What is the most important pickleball skill to practice?",
                    a: "The third shot drop and transition game are what separate intermediate players from advanced players. If you only have time for one drill, practice the kitchen run drill — it combines drops, resets, and advancing to the net into one realistic sequence.",
                  },
                  {
                    q: "How often should I drill vs. play games?",
                    a: "A good ratio is 30% drilling, 70% playing for recreational players. If you play 3 times a week, dedicate at least one session (or part of each session) to drills. Competitive players often flip this to 50/50 or even 60% drilling during training blocks.",
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
              <div className="grid sm:grid-cols-2 gap-4">
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
                    group. Singles, doubles mixer, any court count.
                  </p>
                </Link>
                <Link
                  href="/tools/skill-quiz"
                  className="rounded-xl border border-border/40 bg-card/60 p-5 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-xl">🎯</span>
                  <h3 className="font-bold text-sm mt-2 mb-1 group-hover:text-primary transition-colors">
                    Pickleball Skill Quiz
                  </h3>
                  <p className="text-xs text-muted">
                    Find your skill rating from 2.0 to 4.5+ with our
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

function DrillCard({
  drill,
  index,
  isExpanded,
  onToggle,
}: {
  drill: Drill;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const focusLabel =
    FOCUS_AREAS.find((f) => f.value === drill.focusArea)?.label ?? "";
  const focusEmoji =
    FOCUS_AREAS.find((f) => f.value === drill.focusArea)?.emoji ?? "";

  return (
    <div className="rounded-xl border border-border/40 bg-card/60 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-card-hover/50 transition-colors text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-8 h-8 rounded-lg bg-primary/15 text-primary font-bold text-xs flex items-center justify-center shrink-0">
            {index}
          </span>
          <div className="min-w-0">
            <span className="text-sm font-semibold block truncate">
              {drill.name}
            </span>
            <span className="text-xs text-muted/50">
              {focusEmoji} {focusLabel} · {drill.duration} min ·{" "}
              {drill.players === 1
                ? "Solo"
                : `${drill.players} players`}
            </span>
          </div>
        </div>
        <span
          className={`text-muted/40 transition-transform text-sm shrink-0 ml-2 ${
            isExpanded ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>

      {isExpanded && (
        <div className="border-t border-border/30 px-5 py-4 space-y-3">
          <p className="text-sm text-muted/80">{drill.description}</p>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted/50 mb-1">
              How to do it
            </h4>
            <p className="text-xs text-muted leading-relaxed">{drill.howTo}</p>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-primary/5 border border-primary/10 px-3 py-2">
            <span className="text-xs mt-0.5">💡</span>
            <p className="text-xs text-primary/80 leading-relaxed">
              {drill.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
