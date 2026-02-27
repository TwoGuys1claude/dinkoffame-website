import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Badges", href: "#badges" },
  { label: "Leaderboard", href: "#leaderboard" },
];

const FEATURES = [
  {
    icon: "🎯",
    title: "Log Every Match",
    description:
      "Singles or doubles — tap in your score in seconds. We handle the XP math, you handle the dinks.",
  },
  {
    icon: "⚡",
    title: "Earn XP for Playing",
    description:
      "Every match earns base XP. Play someone new? Bonus +100 XP. We reward connection over competition.",
  },
  {
    icon: "🏷️",
    title: "Badge Reputation",
    description:
      'Tag opponents after each match: "Strategist," "Good Sport," "Fast Hands." Earn 5+ of a badge and it\'s yours forever.',
  },
  {
    icon: "🏆",
    title: "Dink of Fame",
    description:
      "Monthly facility leaderboard. Top 3 earn prizes. Resets every month so everyone gets a fresh shot.",
  },
  {
    icon: "🤝",
    title: "Grow Your Network",
    description:
      "Connect with players at your court. See who's looking for a game. Never show up to an empty court again.",
  },
  {
    icon: "📊",
    title: "Track Your Growth",
    description:
      "Win streaks, match history, skill progression. See how far you've come without obsessing over ratings.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Sign up & set your home court",
    description:
      "Create your profile, pick your skill level, and tag your favorite facility. Takes 30 seconds.",
  },
  {
    step: "02",
    title: "Play & log matches",
    description:
      "After each game, log the score and players. Tap, tap, done. Earn base XP + new opponent bonuses.",
  },
  {
    step: "03",
    title: "Tag your players",
    description:
      'Quick-tap badges on your opponents: "Good Sport," "The Wall," "Dink Master." Build their reputation.',
  },
  {
    step: "04",
    title: "Climb the leaderboard",
    description:
      "XP accumulates monthly. Top your facility, then your state. Monthly reset keeps it fresh.",
  },
];

const BADGES = [
  { emoji: "🔥", label: "Hot Streak", color: "text-orange-400", bg: "bg-orange-500/10", ring: "ring-orange-500/20" },
  { emoji: "🧠", label: "Strategist", color: "text-violet-400", bg: "bg-violet-500/10", ring: "ring-violet-500/20" },
  { emoji: "🤝", label: "Good Sport", color: "text-emerald-400", bg: "bg-emerald-500/10", ring: "ring-emerald-500/20" },
  { emoji: "🎯", label: "Precision", color: "text-sky-400", bg: "bg-sky-500/10", ring: "ring-sky-500/20" },
  { emoji: "⚡", label: "Fast Hands", color: "text-amber-400", bg: "bg-amber-500/10", ring: "ring-amber-500/20" },
  { emoji: "🛡️", label: "The Wall", color: "text-slate-300", bg: "bg-slate-500/10", ring: "ring-slate-500/20" },
  { emoji: "😊", label: "Fun Vibes", color: "text-pink-400", bg: "bg-pink-500/10", ring: "ring-pink-500/20" },
  { emoji: "👑", label: "Dink of Fame", color: "text-amber-500", bg: "bg-amber-500/10", ring: "ring-amber-500/20" },
  { emoji: "🌶️", label: "Competitive", color: "text-red-400", bg: "bg-red-500/10", ring: "ring-red-500/20" },
  { emoji: "💧", label: "Dink Master", color: "text-cyan-400", bg: "bg-cyan-500/10", ring: "ring-cyan-500/20" },
];

const XP_TABLE = [
  { action: "Log a match", xp: "+30 XP", note: "base" },
  { action: "Play a new opponent", xp: "+100 XP", note: "bonus" },
  { action: "Win the match", xp: "+10 XP", note: "minimal — it's social, not sweaty" },
  { action: "Tag a badge", xp: "+5 XP", note: "per tag given" },
  { action: "Refer a friend", xp: "+200 XP", note: "up to 5/month" },
  { action: "7-day streak", xp: "+50 XP", note: "keep showing up" },
];

const LEADERBOARD_DEMO = [
  { rank: 1, name: "Mike R.", xp: "2,840", badge: "🧠", medal: "👑" },
  { rank: 2, name: "Sarah M.", xp: "2,610", badge: "🤝", medal: "🥈" },
  { rank: 3, name: "Jake T.", xp: "2,490", badge: "😊", medal: "🥉" },
  { rank: 4, name: "Lisa K.", xp: "2,350", badge: "🛡️", medal: "" },
  { rank: 5, name: "Derek H.", xp: "2,100", badge: "🔥", medal: "" },
  { rank: 6, name: "You", xp: "1,980", badge: "⚡", medal: "", isYou: true },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-lg">🥒</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Dink of <span className="text-primary">Fame</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="px-5 py-2.5 bg-primary text-background text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Coming soon — join the waitlist
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Make Pickleball{" "}
            <span className="text-gradient">Social</span> Again
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Every match earns XP. Every new opponent grows your network.
            Every badge builds your reputation. The social layer pickleball
            has been missing.
          </p>

          {/* CTA */}
          <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="px-8 py-4 bg-primary text-background text-base font-bold rounded-full hover:bg-primary-dark transition-all hover:scale-105 glow-green"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 text-base font-semibold text-muted border border-border rounded-full hover:text-foreground hover:border-primary/40 transition-all"
            >
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center justify-center gap-8 text-muted">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs text-muted mt-0.5">Free to play</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">30 sec</div>
              <div className="text-xs text-muted mt-0.5">To log a match</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">10</div>
              <div className="text-xs text-muted mt-0.5">Unique badges</div>
            </div>
          </div>

          {/* App preview mock */}
          <div className="mt-20 relative mx-auto max-w-sm">
            <div className="glow-green-lg rounded-3xl">
              <div className="bg-card border border-border/60 rounded-3xl p-6 space-y-4 card-shine">
                {/* Mini app header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">
                      S
                    </div>
                    <div>
                      <div className="text-sm font-bold">Sean M.</div>
                      <div className="text-[10px] text-muted">Level 12</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-primary/15 rounded-full">
                    <span className="text-xs font-bold text-primary">
                      1,240 XP
                    </span>
                  </div>
                </div>
                {/* Mini match card */}
                <div className="bg-surface rounded-xl p-4 border border-border/40">
                  <div className="text-[10px] text-muted mb-2">
                    Latest Match
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">You & Mike R.</div>
                    <div className="text-lg font-extrabold text-primary">
                      11-7
                    </div>
                    <div className="text-sm font-medium text-muted">
                      Jake & Lisa
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-primary/15 rounded-full text-[10px] font-bold text-primary">
                      +30 XP
                    </span>
                    <span className="px-2 py-0.5 bg-accent/15 rounded-full text-[10px] font-bold text-accent">
                      +100 New Opponent
                    </span>
                  </div>
                </div>
                {/* Mini badges */}
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-emerald-500/10 rounded-full text-[10px] font-bold text-emerald-400 ring-1 ring-emerald-500/20">
                    🤝 Good Sport · 8
                  </span>
                  <span className="px-2 py-1 bg-orange-500/10 rounded-full text-[10px] font-bold text-orange-400 ring-1 ring-orange-500/20">
                    🔥 Hot Streak · 6
                  </span>
                  <span className="px-2 py-1 bg-pink-500/10 rounded-full text-[10px] font-bold text-pink-400 ring-1 ring-pink-500/20">
                    😊 Fun Vibes · 5
                  </span>
                </div>
              </div>
            </div>
            {/* Floating badges decoration */}
            <div className="absolute -top-4 -right-4 animate-float text-2xl">
              🏓
            </div>
            <div className="absolute -bottom-4 -left-4 animate-float-slow text-2xl">
              🥒
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ────────────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Features
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Everything you need to{" "}
              <span className="text-gradient">level up</span>
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              XP rewards connection over competition. Play more people, build
              your reputation, rise on the leaderboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group p-6 bg-card border border-border/40 rounded-2xl hover:border-primary/30 transition-all card-shine"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              From court to{" "}
              <span className="text-gradient">leaderboard</span> in 4 steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {HOW_IT_WORKS.map((item) => (
              <div
                key={item.step}
                className="relative p-6 bg-card border border-border/40 rounded-2xl card-shine"
              >
                <div className="text-5xl font-extrabold text-primary/10 absolute top-4 right-6">
                  {item.step}
                </div>
                <div className="relative">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── XP System ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              XP System
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Play more people,{" "}
              <span className="text-gradient-warm">earn more XP</span>
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              We reward you for meeting new players — not for beating the
              same ones. Connection {">"} competition.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-card border border-border/40 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-0 text-sm font-semibold text-muted border-b border-border/40 px-6 py-3">
              <span>Action</span>
              <span className="text-center">XP</span>
              <span className="text-right">Note</span>
            </div>
            {XP_TABLE.map((row) => (
              <div
                key={row.action}
                className="grid grid-cols-[1fr_auto_1fr] gap-0 px-6 py-4 border-b border-border/20 last:border-0 hover:bg-card-hover transition-colors"
              >
                <span className="text-sm font-medium">{row.action}</span>
                <span className="text-sm font-bold text-primary text-center min-w-[80px]">
                  {row.xp}
                </span>
                <span className="text-sm text-muted text-right">
                  {row.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Badges ──────────────────────────────────────────────────── */}
      <section id="badges" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Reputation Badges
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Your rep,{" "}
              <span className="text-gradient">earned on the court</span>
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              After each match, tag your opponents with quick-tap badges.
              Earn 5+ of the same badge and it becomes a permanent part of
              your profile.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {BADGES.map((b) => (
              <div
                key={b.label}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl ${b.bg} ring-1 ${b.ring} hover:scale-105 transition-transform`}
              >
                <span className="text-2xl">{b.emoji}</span>
                <span className={`text-xs font-bold ${b.color}`}>
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leaderboard Preview ─────────────────────────────────────── */}
      <section id="leaderboard" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Dink of Fame
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Monthly leaderboard,{" "}
              <span className="text-gradient-warm">fresh every month</span>
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              No permanent hierarchy. XP resets monthly so every player gets
              a fair shot at the top. Top 3 win prizes at their facility.
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-card border border-border/40 rounded-2xl overflow-hidden glow-green">
            <div className="px-6 py-4 border-b border-border/40 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold">Red Herring Ranch</h3>
                <p className="text-[10px] text-muted">
                  Monthly XP Leaderboard
                </p>
              </div>
              <span className="px-3 py-1 bg-accent/15 rounded-full text-[10px] font-bold text-accent">
                6d left
              </span>
            </div>
            {LEADERBOARD_DEMO.map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center gap-3 px-6 py-3.5 border-b border-border/20 last:border-0 ${
                  entry.isYou ? "bg-primary/5" : ""
                }`}
              >
                <span className="w-6 text-center text-sm font-bold text-muted">
                  {entry.medal || entry.rank}
                </span>
                <div className="w-8 h-8 rounded-full bg-card-hover ring-1 ring-border/40 flex items-center justify-center text-xs font-bold text-muted">
                  {entry.name.charAt(0)}
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <span
                    className={`text-sm font-semibold ${
                      entry.isYou ? "text-primary" : ""
                    }`}
                  >
                    {entry.name}
                  </span>
                  {entry.isYou && (
                    <span className="text-[10px] text-primary">(You)</span>
                  )}
                  <span className="text-sm">{entry.badge}</span>
                </div>
                <span className="text-sm font-bold text-primary">
                  {entry.xp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Top Community Plays ────────────────────────────────────── */}
      <section id="plays" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Community Playbook
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Top plays from{" "}
              <span className="text-gradient">the community</span>
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              Players share strategies, stacking formations, and signature
              plays. The best rise to the top.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "The Ernie Ambush",
                author: "Mike R.",
                skill: "Advanced",
                skillColor: "text-violet-400",
                upvotes: 142,
                saves: 89,
                tags: ["Doubles", "Kitchen"],
                description:
                  "Partner dinks cross-court to draw the opponent, you sprint around the post for the Ernie winner.",
              },
              {
                title: "Third Shot Reset Drill",
                author: "Sarah M.",
                skill: "Intermediate",
                skillColor: "text-amber-400",
                upvotes: 118,
                saves: 203,
                tags: ["Drill", "Singles"],
                description:
                  "3-step progression to nail the third shot drop consistently. Start at kitchen, move back to baseline.",
              },
              {
                title: "Stack Left Formation",
                author: "Jake T.",
                skill: "Beginner",
                skillColor: "text-sky-400",
                upvotes: 97,
                saves: 156,
                tags: ["Doubles", "Strategy"],
                description:
                  "Simple stacking play for beginners. Strong forehand always takes the middle. Diagram included.",
              },
            ].map((play) => (
              <div
                key={play.title}
                className="group p-5 bg-card border border-border/40 rounded-2xl hover:border-primary/30 transition-all card-shine"
              >
                <div className="flex items-center gap-2 mb-3">
                  {play.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-primary/10 rounded-full text-[10px] font-bold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors">
                  {play.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  {play.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-card-hover ring-1 ring-border/40 flex items-center justify-center text-[10px] font-bold text-muted">
                      {play.author.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-muted">
                      {play.author}
                    </span>
                    <span className={`text-[10px] font-semibold ${play.skillColor}`}>
                      {play.skill}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>▲ {play.upvotes}</span>
                    <span>★ {play.saves}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary hover:bg-primary/20 transition-all"
            >
              Create your own plays in the app
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Social Proof / Testimonial placeholder ──────────────────── */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Finally an app that gets it. I don't need another rating system — I need to meet people to play with.",
                name: "Mike R.",
                detail: "Advanced · Austin, TX",
              },
              {
                quote:
                  "The badge system is genius. I got tagged 'Good Sport' after my first session and it made my week.",
                name: "Sarah M.",
                detail: "Intermediate · Austin, TX",
              },
              {
                quote:
                  "I used to show up to courts hoping someone was there. Now I just check Dink of Fame and know exactly who's playing.",
                name: "Jake T.",
                detail: "Beginner · Round Rock, TX",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-6 bg-card border border-border/40 rounded-2xl card-shine"
              >
                <p className="text-sm text-muted leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Waitlist CTA ────────────────────────────────────────────── */}
      <section id="waitlist" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm">🥒</span>
            <span className="text-sm text-primary font-medium">
              Be first on the court
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to <span className="text-gradient">earn your rep</span>?
          </h2>
          <p className="mt-4 text-lg text-muted max-w-lg mx-auto">
            Join the waitlist and be one of the first players at your
            facility. Early members get a special founding badge.
          </p>

          <WaitlistForm />

          <p className="mt-4 text-xs text-muted/50">
            No spam. Just a heads up when we launch in your area.
          </p>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-sm">🥒</span>
              </div>
              <span className="text-sm font-bold tracking-tight">
                Dink of <span className="text-primary">Fame</span>
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted">
              <a href="#features" className="hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#badges" className="hover:text-foreground transition-colors">
                Badges
              </a>
              <a href="#leaderboard" className="hover:text-foreground transition-colors">
                Leaderboard
              </a>
              <a href="#waitlist" className="hover:text-foreground transition-colors">
                Waitlist
              </a>
            </div>

            <p className="text-xs text-muted/50">
              &copy; 2026 Dink of Fame. Make Pickleball Social Again.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
