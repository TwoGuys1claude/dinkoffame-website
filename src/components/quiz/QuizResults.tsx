"use client";

import Link from "next/link";
import type { SkillLevel } from "@/lib/quiz-data";

export function QuizResults({
  result,
  onRetake,
}: {
  result: SkillLevel;
  onRetake: () => void;
}) {
  const shareText = `I just took the Dink of Fame Pickleball Skill Quiz and rated a ${result.rating} (${result.label})! Find your level:`;

  return (
    <div className="animate-fade-up text-center">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary mb-4">
          <span className="text-3xl font-extrabold text-primary">
            {result.rating}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          {result.label}
        </h2>
        <p className="text-muted max-w-lg mx-auto">{result.description}</p>
      </div>

      <div className="bg-card border border-border/40 rounded-2xl p-6 mb-8 text-left">
        <h3 className="font-bold mb-4">Tips to Level Up</h3>
        <ul className="space-y-3">
          {result.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted">
              <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                {i + 1}
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <button
          onClick={onRetake}
          className="px-6 py-3 text-sm font-semibold text-muted border border-border rounded-full hover:text-foreground hover:border-primary/40 transition-all"
        >
          Retake Quiz
        </button>
        <Link
          href="/#waitlist"
          className="px-6 py-3 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
        >
          Join the Waitlist
        </Link>
      </div>

      <div className="flex items-center justify-center gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent("https://dinkoffame.com/tools/skill-quiz")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-semibold text-muted border border-border rounded-full hover:text-foreground hover:border-primary/40 transition-all"
        >
          Share on X
        </a>
      </div>

      <div className="mt-12 pt-8 border-t border-border/40">
        <h3 className="font-bold mb-4">Keep Improving</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <Link
            href="/blog/what-is-stacking-in-pickleball"
            className="text-primary hover:underline"
          >
            Learn About Stacking
          </Link>
          <Link
            href="/blog/pickleball-drills-improve-dink-game"
            className="text-primary hover:underline"
          >
            Dinking Drills
          </Link>
          <Link
            href="/blog/pickleball-scoring-rules-explained"
            className="text-primary hover:underline"
          >
            Scoring Rules Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
