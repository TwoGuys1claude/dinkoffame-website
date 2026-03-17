"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  generateSchedule,
  type Format,
  type Schedule,
  type Round,
} from "@/lib/round-robin";

const PLAYER_PRESETS = [4, 6, 8, 10, 12, 16, 20, 24];
const COURT_PRESETS = [1, 2, 3, 4, 6, 8];

export default function RoundRobinGeneratorPage() {
  const [format, setFormat] = useState<Format>("doubles");
  const [playerCount, setPlayerCount] = useState(8);
  const [courtCount, setCourtCount] = useState(2);
  const [useNames, setUseNames] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [expandedRound, setExpandedRound] = useState<number | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  function getPlayerNames(): string[] {
    if (useNames && nameInput.trim()) {
      const names = nameInput
        .split(/[\n,]+/)
        .map((n) => n.trim())
        .filter(Boolean);
      if (names.length >= 4) return names;
    }
    return Array.from({ length: playerCount }, (_, i) => `Player ${i + 1}`);
  }

  function handleGenerate() {
    const names = getPlayerNames();
    const result = generateSchedule(names, courtCount, format);
    setSchedule(result);
    setExpandedRound(null);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function handlePrint() {
    window.print();
  }

  function handleCopyText() {
    if (!schedule) return;
    let text = `${format === "singles" ? "Singles" : "Doubles"} Round Robin\n`;
    text += `${schedule.players.length} Players · ${schedule.courts} Courts · ${schedule.rounds.length} Rounds\n\n`;

    for (const round of schedule.rounds) {
      text += `--- Round ${round.roundNumber} ---\n`;
      for (const match of round.matches) {
        if (format === "singles") {
          text += `  Court ${match.court}: ${match.team1[0]} vs ${match.team2[0]}\n`;
        } else {
          text += `  Court ${match.court}: ${match.team1.join(" & ")} vs ${match.team2.join(" & ")}\n`;
        }
      }
      if (round.byes.length > 0) {
        text += `  Bye: ${round.byes.join(", ")}\n`;
      }
      text += "\n";
    }

    navigator.clipboard.writeText(text);
  }

  const effectivePlayerCount = useNames && nameInput.trim()
    ? nameInput.split(/[\n,]+/).map((n) => n.trim()).filter(Boolean).length
    : playerCount;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-4xl px-6">
          {/* Hero / SEO Section */}
          <div className="text-center animate-fade-up mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Free Tool
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Pickleball{" "}
              <span className="text-gradient">Round Robin Generator</span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Generate a complete round robin schedule for your pickleball group
              in seconds. Supports singles, doubles mixer, and custom court
              counts. No signup required.
            </p>
          </div>

          {/* Generator Form */}
          <div className="animate-fade-up-delay-1">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 card-shine">
              {/* Format Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Format
                </label>
                <div className="flex gap-3">
                  {(["doubles", "singles"] as Format[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFormat(f)}
                      className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                        format === f
                          ? "bg-primary/15 text-primary border-2 border-primary/40"
                          : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                      }`}
                    >
                      {f === "doubles" ? "Doubles (Mixer)" : "Singles"}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted/50">
                  {format === "doubles"
                    ? "Random partner rotation each round — everyone plays with different partners."
                    : "Each player faces every other player once."}
                </p>
              </div>

              {/* Player Count or Names */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted/60">
                    Players
                  </label>
                  <button
                    onClick={() => setUseNames(!useNames)}
                    className="text-xs text-primary hover:text-primary-dark transition-colors font-medium"
                  >
                    {useNames ? "Use count instead" : "Enter player names"}
                  </button>
                </div>

                {useNames ? (
                  <div>
                    <textarea
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder={"Enter player names (one per line or comma-separated):\nJohn Smith\nSarah Johnson\nMike Williams\n..."}
                      rows={6}
                      className="w-full rounded-xl bg-surface border border-border/40 px-4 py-3 text-sm text-foreground placeholder:text-muted/30 focus:outline-none focus:border-primary/40 resize-none"
                    />
                    <p className="mt-1.5 text-xs text-muted/50">
                      {effectivePlayerCount} player{effectivePlayerCount !== 1 ? "s" : ""} detected
                      {effectivePlayerCount < 4 && " (minimum 4 required)"}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {PLAYER_PRESETS.map((n) => (
                        <button
                          key={n}
                          onClick={() => setPlayerCount(n)}
                          className={`w-12 h-11 rounded-xl text-sm font-bold transition-all ${
                            playerCount === n
                              ? "bg-primary/15 text-primary border-2 border-primary/40"
                              : "bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                      <input
                        type="number"
                        min={4}
                        max={64}
                        value={playerCount}
                        onChange={(e) =>
                          setPlayerCount(
                            Math.max(4, Math.min(64, parseInt(e.target.value) || 4))
                          )
                        }
                        className="w-16 h-11 rounded-xl bg-surface border border-border/40 text-center text-sm font-bold text-foreground focus:outline-none focus:border-primary/40"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-muted/50">
                      {format === "doubles"
                        ? `${playerCount} players on ${courtCount} courts = ${Math.min(Math.floor(playerCount / 4), courtCount) * 4} active per round`
                        : `${playerCount} players = ${Math.ceil(playerCount / 2) - (playerCount % 2 === 0 ? 0 : 0)} matches per round`}
                    </p>
                  </div>
                )}
              </div>

              {/* Court Count */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted/60 mb-3">
                  Courts Available
                </label>
                <div className="flex flex-wrap gap-2">
                  {COURT_PRESETS.map((n) => (
                    <button
                      key={n}
                      onClick={() => setCourtCount(n)}
                      className={`w-12 h-11 rounded-xl text-sm font-bold transition-all ${
                        courtCount === n
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
                disabled={effectivePlayerCount < 4}
                className="w-full py-4 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed animate-pulse-ring"
              >
                Generate Schedule
              </button>
            </div>
          </div>

          {/* Results */}
          {schedule && (
            <div ref={resultsRef} className="mt-10 animate-fade-up">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold">Your Schedule</h2>
                  <p className="text-sm text-muted mt-1">
                    {schedule.players.length} players ·{" "}
                    {schedule.courts} court{schedule.courts > 1 ? "s" : ""} ·{" "}
                    {schedule.rounds.length} rounds ·{" "}
                    {schedule.totalGames} total games
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyText}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface border border-border/40 text-muted hover:text-foreground hover:border-border transition-colors"
                  >
                    Copy Text
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary/15 border border-primary/30 text-primary hover:bg-primary/25 transition-colors"
                  >
                    Print / PDF
                  </button>
                </div>
              </div>

              {/* Rounds */}
              <div className="space-y-3">
                {schedule.rounds.map((round) => (
                  <RoundCard
                    key={round.roundNumber}
                    round={round}
                    format={schedule.format}
                    isExpanded={expandedRound === null || expandedRound === round.roundNumber}
                    onToggle={() =>
                      setExpandedRound(
                        expandedRound === round.roundNumber
                          ? null
                          : round.roundNumber
                      )
                    }
                  />
                ))}
              </div>

              {/* App CTA */}
              <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center card-shine">
                <div className="text-2xl mb-2">🏓</div>
                <h3 className="text-lg font-bold mb-2">
                  Run this live in <span className="text-primary">Dink of Fame</span>
                </h3>
                <p className="text-sm text-muted max-w-md mx-auto mb-5">
                  Track scores in real-time, auto-calculate standings, earn XP
                  for every game, and build your player reputation.
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

          {/* Print-only section */}
          {schedule && (
            <div className="hidden print:block mt-8">
              <h1 className="text-2xl font-bold mb-2">
                {schedule.format === "singles" ? "Singles" : "Doubles"} Round Robin Schedule
              </h1>
              <p className="text-sm mb-4">
                {schedule.players.length} Players · {schedule.courts} Courts · {schedule.rounds.length} Rounds
              </p>
              <p className="text-xs text-gray-500 mb-6">Generated at dinkoffame.com/tools/round-robin-generator</p>
            </div>
          )}

          {/* SEO Content Section */}
          <div className="mt-20 space-y-12 animate-fade-up-delay-2">
            {/* How it works */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                How the Pickleball Round Robin Generator Works
              </h2>
              <div className="prose prose-sm max-w-none text-muted">
                <p>
                  Our free pickleball round robin generator creates an optimized
                  schedule based on your number of players and available courts.
                  The algorithm ensures fair play by rotating matchups so every
                  player faces different opponents (and partners in doubles
                  mixer format).
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  {
                    step: "1",
                    title: "Enter your setup",
                    desc: "Choose singles or doubles, enter player count (or names), and how many courts you have.",
                  },
                  {
                    step: "2",
                    title: "Generate instantly",
                    desc: "Our algorithm creates an optimized schedule with court assignments and balanced matchups.",
                  },
                  {
                    step: "3",
                    title: "Print or share",
                    desc: "Print the schedule, copy it as text, or save as PDF. Ready to play in seconds.",
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

            {/* Common formats */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Popular Round Robin Formats for Pickleball
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Doubles Mixer (Most Popular)",
                    desc: "Partners rotate every round so you play with everyone. Best for social open play, club nights, and meetups. Works great with 8-24 players on 2-4 courts.",
                  },
                  {
                    title: "Singles Round Robin",
                    desc: "Every player faces every other player once. Ideal for competitive play, skill assessment, or small groups of 4-8 players. Clear winner determination.",
                  },
                  {
                    title: "Fixed-Partner Doubles",
                    desc: "Teams stay together and face every other team. Good for league play and tournament pool play. Use our generator with player names formatted as team names.",
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

            {/* Quick reference table */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Best Format for Your Group Size
              </h2>
              <div className="rounded-xl border border-border/40 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-card/80 border-b border-border/40">
                      <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted/60">
                        Players
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted/60">
                        Courts
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted/60">
                        Recommended
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted/60 hidden sm:table-cell">
                        Rounds
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    {[
                      { players: "4", courts: "1", rec: "Singles RR", rounds: "3" },
                      { players: "6", courts: "1-2", rec: "Singles or Doubles", rounds: "5" },
                      { players: "8", courts: "2", rec: "Doubles Mixer", rounds: "7" },
                      { players: "12", courts: "3", rec: "Doubles Mixer", rounds: "8" },
                      { players: "16", courts: "4", rec: "Doubles Mixer", rounds: "8-10" },
                      { players: "20-24", courts: "4-6", rec: "Doubles Mixer", rounds: "10-12" },
                    ].map((row) => (
                      <tr key={row.players} className="hover:bg-card/40">
                        <td className="px-4 py-2.5 font-medium">{row.players}</td>
                        <td className="px-4 py-2.5 text-muted">{row.courts}</td>
                        <td className="px-4 py-2.5 text-primary font-medium">{row.rec}</td>
                        <td className="px-4 py-2.5 text-muted hidden sm:table-cell">{row.rounds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                    q: "What is a round robin in pickleball?",
                    a: "A round robin is a tournament format where every player (or team) plays against every other player at least once. In pickleball, this is the most common format for open play sessions, mixers, and social events because everyone gets to play multiple games.",
                  },
                  {
                    q: "How does a doubles mixer round robin work?",
                    a: "In a doubles mixer, partners rotate each round so you play with a different partner every time. This maximizes the social aspect — you get to play with and against everyone in your group. Our generator optimizes these pairings automatically.",
                  },
                  {
                    q: "How many rounds do I need?",
                    a: "For singles, you need N-1 rounds where N is your player count. For doubles mixer, we recommend at least as many rounds as you have players to ensure good partner diversity. Our generator calculates the optimal number automatically.",
                  },
                  {
                    q: "What if I have an odd number of players?",
                    a: "The generator handles odd numbers automatically by assigning byes. Each round, one player will sit out while others play. Byes rotate so everyone sits out roughly the same amount.",
                  },
                  {
                    q: "Can I use this for a pickleball tournament?",
                    a: "Yes! Round robin is great for pool play in tournaments. Enter your pool size and courts, generate the schedule, then print it out. For full tournament brackets with elimination rounds, check back soon for our bracket generator.",
                  },
                  {
                    q: "How many courts do I need for my group?",
                    a: "A good rule of thumb: 1 court per 4-6 players for doubles, 1 court per 2-3 players for singles. More courts means less sitting out between games. Our generator adjusts the schedule to your available courts.",
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
              <h2 className="text-2xl font-bold mb-4">More Free Pickleball Tools</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/tools/pickleball-iq-test"
                  className="rounded-xl border border-border/40 bg-card/60 p-5 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-xl">🧠</span>
                  <h3 className="font-bold text-sm mt-2 mb-1 group-hover:text-primary transition-colors">
                    Pickleball IQ Test
                  </h3>
                  <p className="text-xs text-muted">
                    28 questions across rules, strategy, and shots. Find your Pickleball IQ.
                  </p>
                </Link>
                <div className="rounded-xl border border-border/40 bg-card/60 p-5 opacity-50">
                  <span className="text-xl">🏆</span>
                  <h3 className="font-bold text-sm mt-2 mb-1">
                    Bracket Generator
                  </h3>
                  <p className="text-xs text-muted">
                    Single and double elimination brackets for pickleball tournaments. Coming soon.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          header, footer, .no-print, button, .animate-pulse-ring {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          .print\\:block {
            display: block !important;
          }
          * {
            border-color: #ddd !important;
            color: black !important;
            background: white !important;
          }
          .bg-primary\\/15, .bg-primary\\/5, .bg-card\\/80, .bg-card\\/60, .bg-surface {
            background: #f5f5f5 !important;
          }
          .text-primary {
            color: #16a34a !important;
          }
        }
      `}</style>
    </div>
  );
}

// Round card component
function RoundCard({
  round,
  format,
  isExpanded,
  onToggle,
}: {
  round: Round;
  format: Format;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl border border-border/40 bg-card/60 overflow-hidden print:break-inside-avoid">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-card-hover/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-primary/15 text-primary font-bold text-xs flex items-center justify-center">
            R{round.roundNumber}
          </span>
          <span className="text-sm font-semibold">
            Round {round.roundNumber}
          </span>
          <span className="text-xs text-muted/50">
            {round.matches.length} game{round.matches.length > 1 ? "s" : ""}
            {round.byes.length > 0 && ` · ${round.byes.length} bye${round.byes.length > 1 ? "s" : ""}`}
          </span>
        </div>
        <span
          className={`text-muted/40 transition-transform text-sm ${
            isExpanded ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>

      {isExpanded && (
        <div className="border-t border-border/30 px-5 py-3 space-y-2">
          {round.matches.map((match) => (
            <div
              key={match.court}
              className="flex items-center gap-3 py-1.5"
            >
              <span className="w-16 text-xs text-accent font-semibold shrink-0">
                Court {match.court}
              </span>
              <div className="flex-1 flex items-center gap-2 text-sm">
                <span className="font-medium">
                  {format === "singles"
                    ? match.team1[0]
                    : match.team1.join(" & ")}
                </span>
                <span className="text-muted/40 text-xs">vs</span>
                <span className="font-medium">
                  {format === "singles"
                    ? match.team2[0]
                    : match.team2.join(" & ")}
                </span>
              </div>
              {/* Score input placeholder for print */}
              <div className="hidden print:flex gap-1">
                <span className="inline-block w-8 border-b border-gray-400" />
                <span className="text-xs">-</span>
                <span className="inline-block w-8 border-b border-gray-400" />
              </div>
            </div>
          ))}
          {round.byes.length > 0 && (
            <div className="flex items-center gap-3 py-1.5 text-xs text-muted/50">
              <span className="w-16 shrink-0">Bye</span>
              <span>{round.byes.join(", ")}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
