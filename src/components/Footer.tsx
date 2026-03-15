import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Dink of Fame"
              className="w-7 h-7 rounded-lg"
            />
            <span className="text-sm font-bold tracking-tight">
              Dink of <span className="text-primary">Fame</span>
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-muted">
            <Link
              href="/#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/tools/round-robin-generator"
              className="hover:text-foreground transition-colors"
            >
              Round Robin
            </Link>
            <Link
              href="/tools/skill-quiz"
              className="hover:text-foreground transition-colors"
            >
              Skill Quiz
            </Link>
            <Link
              href="/#waitlist"
              className="hover:text-foreground transition-colors"
            >
              Waitlist
            </Link>
          </div>

          <p className="text-xs text-muted/50">
            &copy; 2026 Dink of Fame. Make Pickleball Social Again.
          </p>
        </div>
      </div>
    </footer>
  );
}
