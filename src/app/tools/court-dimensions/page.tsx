"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  COURT_DIMENSIONS,
  COURT_ZONES,
  SURFACE_TYPES,
} from "@/lib/court-data";

type Unit = "imperial" | "metric";

export default function CourtDimensionsPage() {
  const [unit, setUnit] = useState<Unit>("imperial");
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-4xl px-6">
          {/* Hero */}
          <div className="text-center animate-fade-up mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Free Reference Guide
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Pickleball{" "}
              <span className="text-gradient">Court Dimensions</span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Official pickleball court size, measurements, net height, kitchen
              dimensions, and layout — with an interactive diagram and
              feet/meters toggle.
            </p>
          </div>

          {/* Unit Toggle */}
          <div className="flex justify-center mb-8 animate-fade-up-delay-1">
            <div className="inline-flex rounded-xl border border-border/40 bg-card/80 p-1">
              <button
                onClick={() => setUnit("imperial")}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                  unit === "imperial"
                    ? "bg-primary/15 text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Feet / Inches
              </button>
              <button
                onClick={() => setUnit("metric")}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                  unit === "metric"
                    ? "bg-primary/15 text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Meters
              </button>
            </div>
          </div>

          {/* Interactive Court Diagram */}
          <div className="animate-fade-up-delay-1 mb-10">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-4 md:p-8 card-shine">
              <h2 className="text-sm font-bold mb-4 text-center">
                Interactive Court Diagram
              </h2>
              <p className="text-xs text-muted/50 text-center mb-6">
                Hover or tap on court zones to learn more
              </p>
              <CourtSVG
                unit={unit}
                hoveredZone={hoveredZone}
                onHoverZone={setHoveredZone}
              />
              {hoveredZone && (
                <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-4 text-center animate-fade-up">
                  <p className="text-sm font-bold text-primary">
                    {hoveredZone}
                  </p>
                  <p className="text-xs text-muted mt-1">
                    {COURT_ZONES.find((z) => z.name === hoveredZone)
                      ?.description ?? ""}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Dimensions Table */}
          <div className="animate-fade-up-delay-2 mb-10">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8">
              <h2 className="text-lg font-bold mb-1">
                All Official Measurements
              </h2>
              <p className="text-xs text-muted/50 mb-5">
                Per USA Pickleball / IFP rulebook
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border/40">
                      <th className="text-left py-2 pr-4 text-muted/60 font-bold uppercase tracking-wider">
                        Measurement
                      </th>
                      <th className="text-right py-2 pr-4 text-muted/60 font-bold uppercase tracking-wider">
                        {unit === "imperial" ? "Feet / Inches" : "Meters"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20">
                    {COURT_DIMENSIONS.map((dim) => (
                      <tr key={dim.label}>
                        <td className="py-3 pr-4">
                          <span className="font-semibold text-foreground">
                            {dim.label}
                          </span>
                          <span className="block text-[10px] text-muted/50 mt-0.5">
                            {dim.description}
                          </span>
                        </td>
                        <td className="py-3 text-right font-bold text-primary whitespace-nowrap">
                          {unit === "imperial" ? dim.feet : dim.meters}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Reference Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
              <p className="text-3xl font-extrabold text-primary">
                {unit === "imperial" ? "44' × 20'" : "13.41m × 6.10m"}
              </p>
              <p className="text-xs text-muted mt-2 font-bold uppercase tracking-wider">
                Court Size
              </p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 text-center">
              <p className="text-3xl font-extrabold text-accent">
                {unit === "imperial" ? '34"' : "0.86m"}
              </p>
              <p className="text-xs text-muted mt-2 font-bold uppercase tracking-wider">
                Net Height (Center)
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/60 p-5 text-center">
              <p className="text-3xl font-extrabold text-foreground">
                {unit === "imperial" ? "7'" : "2.13m"}
              </p>
              <p className="text-xs text-muted mt-2 font-bold uppercase tracking-wider">
                Kitchen Depth
              </p>
            </div>
          </div>

          {/* App CTA */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center card-shine mb-10">
            <div className="text-2xl mb-2">📐</div>
            <h3 className="text-lg font-bold mb-2">
              Build your court community with{" "}
              <span className="text-primary">Dink of Fame</span>
            </h3>
            <p className="text-sm text-muted max-w-md mx-auto mb-5">
              Find players near you, track your games, and level up your
              pickleball journey with XP, badges, and social features.
            </p>
            <Link
              href="/#waitlist"
              className="inline-block px-6 py-3 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>

          {/* SEO Content */}
          <div className="mt-20 space-y-12">
            {/* Tennis vs Pickleball */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Pickleball Court vs. Tennis Court
              </h2>
              <div className="prose prose-sm max-w-none text-muted space-y-3">
                <p>
                  A standard pickleball court is 44 feet long and 20 feet wide —
                  a total of 880 square feet. A regulation tennis doubles court
                  is 78 feet by 36 feet — 2,808 square feet. That means a
                  tennis court is roughly 3.2 times larger than a pickleball
                  court.
                </p>
                <p>
                  This size difference is why you can fit{" "}
                  <strong>up to 4 pickleball courts on a single tennis court</strong>{" "}
                  using temporary lines and portable nets. Many parks and
                  recreation centers convert underused tennis courts to
                  pickleball this way. With permanent conversion, you typically
                  get 2-4 dedicated pickleball courts from one tennis court.
                </p>
                <p>
                  The smaller court size is one reason pickleball is so
                  accessible — less ground to cover means players of all ages
                  and fitness levels can compete. It also makes pickleball courts
                  far cheaper to build. A new pickleball court costs $11,000-$22,000
                  on average vs. $25,000-$50,000+ for tennis.
                </p>
              </div>
            </section>

            {/* Kitchen Explained */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                What Is the Kitchen in Pickleball?
              </h2>
              <div className="prose prose-sm max-w-none text-muted space-y-3">
                <p>
                  The <strong>Non-Volley Zone (NVZ)</strong>, universally known
                  as the &quot;kitchen,&quot; is the 7-foot area on each side of
                  the net. It extends the full 20-foot width of the court. The
                  kitchen is marked by a line parallel to the net, and that line
                  itself is part of the kitchen.
                </p>
                <p>
                  The key rule: you <strong>cannot volley</strong> (hit the ball
                  out of the air) while any part of your body is touching the
                  kitchen or its lines. This includes your momentum — if you
                  volley the ball and your momentum carries you into the kitchen
                  after the shot, it&apos;s a fault.
                </p>
                <p>
                  You <em>can</em> enter the kitchen freely to hit a ball that
                  has bounced. Many winning strategies involve &quot;dinking&quot;
                  — hitting soft shots that land in the opponent&apos;s kitchen,
                  forcing them to let it bounce and hit upward.
                </p>
              </div>
            </section>

            {/* Surface Types */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Court Surface Types
              </h2>
              <div className="prose prose-sm max-w-none text-muted mb-6">
                <p>
                  The surface material affects ball speed, bounce, joint impact,
                  and maintenance costs. Here are the most common pickleball
                  court surfaces:
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {SURFACE_TYPES.map((surface) => (
                  <div
                    key={surface.name}
                    className="rounded-xl border border-border/40 bg-card/60 p-5"
                  >
                    <h3 className="font-bold text-sm mb-2">{surface.name}</h3>
                    <div className="space-y-1 text-xs text-muted">
                      <p>
                        <span className="text-green-400 font-semibold">+</span>{" "}
                        {surface.pros}
                      </p>
                      <p>
                        <span className="text-red-400 font-semibold">-</span>{" "}
                        {surface.cons}
                      </p>
                      <p className="text-muted/50 italic">
                        Best for: {surface.best}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Set Up */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                How to Set Up a Temporary Pickleball Court
              </h2>
              <div className="prose prose-sm max-w-none text-muted space-y-3">
                <p>
                  You can set up a pickleball court on any flat surface —
                  driveway, gym floor, parking lot, or tennis court. Here&apos;s
                  what you need:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {[
                  {
                    step: "1",
                    title: "Measure your space",
                    desc: "You need at least 30' × 60' for comfortable play (44' × 20' court plus buffer). A tennis court gives you room for 2-4 pickleball courts.",
                  },
                  {
                    step: "2",
                    title: "Mark the lines",
                    desc: "Use painter's tape (blue) for temporary lines or chalk for outdoor surfaces. Measure 44' long × 20' wide, then mark the kitchen 7' from each side of the net.",
                  },
                  {
                    step: "3",
                    title: "Set up the net",
                    desc: "A portable pickleball net should be 22' wide, 34\" at center, and 36\" at the posts. Quality portable nets cost $80-$200.",
                  },
                  {
                    step: "4",
                    title: "Mark the centerline",
                    desc: "Run a line from the kitchen line to the baseline on each side, splitting the service area into right (even) and left (odd) courts.",
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

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What are the official dimensions of a pickleball court?",
                    a: "A regulation pickleball court is 44 feet long and 20 feet wide (13.41m × 6.10m). This is the same size for both singles and doubles play. The court includes a 7-foot non-volley zone (kitchen) on each side of the net.",
                  },
                  {
                    q: "How high is a pickleball net?",
                    a: "A pickleball net is 36 inches (91.4 cm) high at the sideline posts and 34 inches (86.4 cm) high at the center. The 2-inch dip in the center is intentional and part of regulation play.",
                  },
                  {
                    q: "How big is the kitchen in pickleball?",
                    a: "The kitchen (Non-Volley Zone) is 7 feet deep and 20 feet wide on each side of the net (2.13m × 6.10m). That's 140 square feet per side. The kitchen line is considered part of the kitchen.",
                  },
                  {
                    q: "Can you fit a pickleball court on a tennis court?",
                    a: "Yes. A standard tennis court can accommodate up to 4 pickleball courts with temporary lines and portable nets. A single pickleball court fits easily within a tennis court with room to spare — a tennis court is over 3× the area.",
                  },
                  {
                    q: "Is a pickleball court the same size as a badminton court?",
                    a: "Nearly identical. A badminton doubles court is 44' × 20' — the exact same dimensions as a pickleball court. The main difference is net height: badminton nets are 5'1\" vs. pickleball's 34\"-36\".",
                  },
                  {
                    q: "How much space do I need around the court?",
                    a: "USA Pickleball recommends a minimum of 54' × 24' total space (5 feet behind each baseline, 2 feet on each side). For tournaments, 64' × 34' is preferred (10 feet behind baselines, 7 feet on each side).",
                  },
                  {
                    q: "How much does it cost to build a pickleball court?",
                    a: "A basic outdoor concrete pickleball court costs $11,000-$22,000 to build. A premium court with acrylic surfacing, fencing, and lighting can run $25,000-$40,000. Converting a tennis court is often cheaper at $5,000-$15,000 per pickleball court.",
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
                  href="/tools/calorie-calculator"
                  className="rounded-xl border border-border/40 bg-card/60 p-5 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-xl">🔥</span>
                  <h3 className="font-bold text-sm mt-2 mb-1 group-hover:text-primary transition-colors">
                    Calorie Calculator
                  </h3>
                  <p className="text-xs text-muted">
                    Find out how many calories you burn playing pickleball based
                    on weight, duration, and intensity.
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
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SVG Court Diagram                                                   */
/* ------------------------------------------------------------------ */

function CourtSVG({
  unit,
  hoveredZone,
  onHoverZone,
}: {
  unit: Unit;
  hoveredZone: string | null;
  onHoverZone: (zone: string | null) => void;
}) {
  // Court proportions: 44' long × 20' wide
  // SVG viewBox with padding for labels
  const courtW = 200; // represents 20'
  const courtH = 440; // represents 44'
  const pad = 60;
  const vw = courtW + pad * 2;
  const vh = courtH + pad * 2;

  // Zones (y from top)
  const baselineTop = pad;
  const kitchenTopStart = pad + 150; // 15' service area
  const netY = pad + 220; // 22' from top baseline = center
  const kitchenBottomEnd = pad + 290; // 22' + 7' kitchen
  const baselineBottom = pad + 440;

  const kitchenTopEnd = netY; // top kitchen: 15' mark to net
  const kitchenBottomStart = netY; // bottom kitchen: net to 29' mark

  const centerX = pad + courtW / 2;

  const isHovered = (name: string) => hoveredZone === name;

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      className="w-full max-w-md mx-auto"
      style={{ fontFamily: "inherit" }}
    >
      {/* Court outline */}
      <rect
        x={pad}
        y={pad}
        width={courtW}
        height={courtH}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="text-border"
      />

      {/* Top service areas */}
      {/* Right service (even) - top left */}
      <rect
        x={pad}
        y={baselineTop}
        width={courtW / 2}
        height={150}
        fill={isHovered("Right Service Court (Even)") ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.05)"}
        stroke="none"
        className="cursor-pointer transition-all"
        onMouseEnter={() => onHoverZone("Right Service Court (Even)")}
        onMouseLeave={() => onHoverZone(null)}
        onClick={() => onHoverZone("Right Service Court (Even)")}
      />
      {/* Left service (odd) - top right */}
      <rect
        x={pad + courtW / 2}
        y={baselineTop}
        width={courtW / 2}
        height={150}
        fill={isHovered("Left Service Court (Odd)") ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.05)"}
        stroke="none"
        className="cursor-pointer transition-all"
        onMouseEnter={() => onHoverZone("Left Service Court (Odd)")}
        onMouseLeave={() => onHoverZone(null)}
        onClick={() => onHoverZone("Left Service Court (Odd)")}
      />

      {/* Top kitchen */}
      <rect
        x={pad}
        y={kitchenTopStart}
        width={courtW}
        height={70}
        fill={isHovered("Non-Volley Zone (Kitchen)") ? "rgba(34,197,94,0.2)" : "rgba(34,197,94,0.08)"}
        stroke="none"
        className="cursor-pointer transition-all"
        onMouseEnter={() => onHoverZone("Non-Volley Zone (Kitchen)")}
        onMouseLeave={() => onHoverZone(null)}
        onClick={() => onHoverZone("Non-Volley Zone (Kitchen)")}
      />

      {/* Bottom kitchen */}
      <rect
        x={pad}
        y={kitchenBottomStart}
        width={courtW}
        height={70}
        fill={isHovered("Non-Volley Zone (Kitchen)") ? "rgba(34,197,94,0.2)" : "rgba(34,197,94,0.08)"}
        stroke="none"
        className="cursor-pointer transition-all"
        onMouseEnter={() => onHoverZone("Non-Volley Zone (Kitchen)")}
        onMouseLeave={() => onHoverZone(null)}
        onClick={() => onHoverZone("Non-Volley Zone (Kitchen)")}
      />

      {/* Bottom service areas */}
      <rect
        x={pad}
        y={kitchenBottomEnd}
        width={courtW / 2}
        height={150}
        fill={isHovered("Right Service Court (Even)") ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.05)"}
        stroke="none"
        className="cursor-pointer transition-all"
        onMouseEnter={() => onHoverZone("Right Service Court (Even)")}
        onMouseLeave={() => onHoverZone(null)}
        onClick={() => onHoverZone("Right Service Court (Even)")}
      />
      <rect
        x={pad + courtW / 2}
        y={kitchenBottomEnd}
        width={courtW / 2}
        height={150}
        fill={isHovered("Left Service Court (Odd)") ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.05)"}
        stroke="none"
        className="cursor-pointer transition-all"
        onMouseEnter={() => onHoverZone("Left Service Court (Odd)")}
        onMouseLeave={() => onHoverZone(null)}
        onClick={() => onHoverZone("Left Service Court (Odd)")}
      />

      {/* Lines */}
      {/* Net */}
      <line
        x1={pad - 10}
        y1={netY}
        x2={pad + courtW + 10}
        y2={netY}
        stroke="currentColor"
        strokeWidth={3}
        className="text-foreground"
      />

      {/* Kitchen lines */}
      <line
        x1={pad}
        y1={kitchenTopStart}
        x2={pad + courtW}
        y2={kitchenTopStart}
        stroke="currentColor"
        strokeWidth={1.5}
        className="text-green-500"
        strokeDasharray="4 3"
      />
      <line
        x1={pad}
        y1={kitchenBottomEnd}
        x2={pad + courtW}
        y2={kitchenBottomEnd}
        stroke="currentColor"
        strokeWidth={1.5}
        className="text-green-500"
        strokeDasharray="4 3"
      />

      {/* Centerlines */}
      <line
        x1={centerX}
        y1={baselineTop}
        x2={centerX}
        y2={kitchenTopStart}
        stroke="currentColor"
        strokeWidth={1}
        className="text-border"
      />
      <line
        x1={centerX}
        y1={kitchenBottomEnd}
        x2={centerX}
        y2={baselineBottom}
        stroke="currentColor"
        strokeWidth={1}
        className="text-border"
      />

      {/* Dimension Labels */}
      {/* Court width label (top) */}
      <text
        x={centerX}
        y={pad - 20}
        textAnchor="middle"
        className="text-primary"
        fontSize={12}
        fontWeight="bold"
        fill="currentColor"
      >
        {unit === "imperial" ? "20'" : "6.10m"}
      </text>
      {/* Width arrows */}
      <line x1={pad} y1={pad - 12} x2={pad + courtW} y2={pad - 12} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />
      <line x1={pad} y1={pad - 16} x2={pad} y2={pad - 8} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />
      <line x1={pad + courtW} y1={pad - 16} x2={pad + courtW} y2={pad - 8} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />

      {/* Court length label (right side) */}
      <text
        x={pad + courtW + 18}
        y={netY + 4}
        textAnchor="start"
        className="text-primary"
        fontSize={12}
        fontWeight="bold"
        fill="currentColor"
      >
        {unit === "imperial" ? "44'" : "13.41m"}
      </text>
      {/* Length arrows */}
      <line x1={pad + courtW + 12} y1={pad} x2={pad + courtW + 12} y2={pad + courtH} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />
      <line x1={pad + courtW + 8} y1={pad} x2={pad + courtW + 16} y2={pad} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />
      <line x1={pad + courtW + 8} y1={pad + courtH} x2={pad + courtW + 16} y2={pad + courtH} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />

      {/* Kitchen depth label (left side, top) */}
      <text
        x={pad - 18}
        y={kitchenTopStart + 35}
        textAnchor="end"
        className="text-green-500"
        fontSize={10}
        fontWeight="bold"
        fill="currentColor"
      >
        {unit === "imperial" ? "7'" : "2.13m"}
      </text>
      {/* Kitchen bracket */}
      <line x1={pad - 12} y1={kitchenTopStart} x2={pad - 12} y2={netY} stroke="currentColor" strokeWidth={0.5} className="text-green-500/50" />
      <line x1={pad - 16} y1={kitchenTopStart} x2={pad - 8} y2={kitchenTopStart} stroke="currentColor" strokeWidth={0.5} className="text-green-500/50" />
      <line x1={pad - 16} y1={netY} x2={pad - 8} y2={netY} stroke="currentColor" strokeWidth={0.5} className="text-green-500/50" />

      {/* Service area depth label (left side, very top) */}
      <text
        x={pad - 18}
        y={baselineTop + 75}
        textAnchor="end"
        className="text-muted"
        fontSize={10}
        fill="currentColor"
      >
        {unit === "imperial" ? "15'" : "4.57m"}
      </text>
      <line x1={pad - 12} y1={baselineTop} x2={pad - 12} y2={kitchenTopStart} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />
      <line x1={pad - 16} y1={baselineTop} x2={pad - 8} y2={baselineTop} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />
      <line x1={pad - 16} y1={kitchenTopStart} x2={pad - 8} y2={kitchenTopStart} stroke="currentColor" strokeWidth={0.5} className="text-muted/30" />

      {/* Zone labels inside court */}
      <text x={pad + courtW / 4} y={baselineTop + 80} textAnchor="middle" fontSize={8} fill="currentColor" className="text-muted/40">
        EVEN
      </text>
      <text x={pad + courtW * 3 / 4} y={baselineTop + 80} textAnchor="middle" fontSize={8} fill="currentColor" className="text-muted/40">
        ODD
      </text>
      <text x={centerX} y={kitchenTopStart + 40} textAnchor="middle" fontSize={8} fill="currentColor" className="text-green-500/60" fontWeight="bold">
        KITCHEN
      </text>
      <text x={centerX} y={netY + 4} textAnchor="middle" fontSize={8} fill="currentColor" className="text-foreground" fontWeight="bold">
        NET
      </text>
      <text x={centerX} y={kitchenBottomEnd - 25} textAnchor="middle" fontSize={8} fill="currentColor" className="text-green-500/60" fontWeight="bold">
        KITCHEN
      </text>
      <text x={pad + courtW / 4} y={kitchenBottomEnd + 80} textAnchor="middle" fontSize={8} fill="currentColor" className="text-muted/40">
        EVEN
      </text>
      <text x={pad + courtW * 3 / 4} y={kitchenBottomEnd + 80} textAnchor="middle" fontSize={8} fill="currentColor" className="text-muted/40">
        ODD
      </text>

      {/* Net height label */}
      <text
        x={pad + courtW + 18}
        y={netY - 6}
        textAnchor="start"
        fontSize={9}
        fill="currentColor"
        className="text-muted/50"
      >
        {unit === "imperial" ? 'Net: 34" center' : "Net: 0.86m center"}
      </text>

      {/* Baseline labels */}
      <text
        x={centerX}
        y={baselineTop - 4}
        textAnchor="middle"
        fontSize={8}
        fill="currentColor"
        className="text-muted/40"
        onMouseEnter={() => onHoverZone("Baseline")}
        onMouseLeave={() => onHoverZone(null)}
      >
        BASELINE
      </text>
      <text
        x={centerX}
        y={baselineBottom + 14}
        textAnchor="middle"
        fontSize={8}
        fill="currentColor"
        className="text-muted/40"
        onMouseEnter={() => onHoverZone("Baseline")}
        onMouseLeave={() => onHoverZone(null)}
      >
        BASELINE
      </text>
    </svg>
  );
}
