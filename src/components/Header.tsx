import Link from "next/link";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Blog", href: "/blog" },
  { label: "Round Robin", href: "/tools/round-robin-generator" },
  { label: "Skill Quiz", href: "/tools/skill-quiz" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Dink of Fame"
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Dink of <span className="text-primary">Fame</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#waitlist"
            className="px-5 py-2.5 bg-primary text-background text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
