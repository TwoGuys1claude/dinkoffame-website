"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { IQResult } from "@/lib/iq-quiz-data";
import { CategoryBreakdown } from "./CategoryBreakdown";

export function IQQuizResults({
  result,
  onRetake,
}: {
  result: IQResult;
  onRetake: () => void;
}) {
  const [displayIQ, setDisplayIQ] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const target = result.iq;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayIQ(Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [result.iq]);

  const shareText = `My Pickleball IQ is ${result.iq} — "${result.tier.title}" (${result.tier.percentile}). Think you can beat it?`;
  const shareUrl = "https://dinkoffame.com/tools/pickleball-iq-test";

  function handleCopy() {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="animate-fade-up text-center">
      {/* IQ Score */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Your Pickleball IQ
        </p>
        <div className="inline-flex items-center justify-center w-36 h-36 rounded-full border-4 border-primary glow-green-lg mb-4 animate-pulse-ring">
          <span className="text-5xl font-extrabold text-primary tabular-nums">
            {displayIQ}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-1">
          {result.tier.title}
        </h2>
        <p className="text-sm text-accent font-semibold mb-3">
          {result.tier.percentile}
        </p>
        <p className="text-muted max-w-lg mx-auto text-sm leading-relaxed">
          {result.tier.description}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border/40 rounded-xl p-4">
          <p className="text-2xl font-bold text-primary">{result.totalCorrect}</p>
          <p className="text-xs text-muted">Correct</p>
        </div>
        <div className="bg-card border border-border/40 rounded-xl p-4">
          <p className="text-2xl font-bold">{28 - result.totalCorrect}</p>
          <p className="text-xs text-muted">Missed</p>
        </div>
        <div className="bg-card border border-border/40 rounded-xl p-4">
          <p className="text-2xl font-bold text-accent">{result.rawScore}</p>
          <p className="text-xs text-muted">of {result.maxScore} pts</p>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-card border border-border/40 rounded-2xl p-6 mb-8 text-left">
        <h3 className="font-bold mb-5">Category Breakdown</h3>
        <CategoryBreakdown categoryScores={result.categoryScores} />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <button
          onClick={onRetake}
          className="px-6 py-3 text-sm font-semibold text-muted border border-border rounded-full hover:text-foreground hover:border-primary/40 transition-all"
        >
          Retake Test
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
        >
          Share on X
        </a>
        <button
          onClick={handleCopy}
          className="px-6 py-3 text-sm font-semibold text-muted border border-border rounded-full hover:text-foreground hover:border-primary/40 transition-all"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>

      {/* Related tools */}
      <div className="mt-12 pt-8 border-t border-border/40">
        <h3 className="font-bold mb-4">Keep Improving</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <Link
            href="/tools/drill-generator"
            className="text-primary hover:underline"
          >
            Practice Drills
          </Link>
          <Link
            href="/blog/what-is-stacking-in-pickleball"
            className="text-primary hover:underline"
          >
            Learn Stacking
          </Link>
          <Link
            href="/blog/pickleball-scoring-rules-explained"
            className="text-primary hover:underline"
          >
            Scoring Rules
          </Link>
          <Link
            href="/tools/court-dimensions"
            className="text-primary hover:underline"
          >
            Court Dimensions
          </Link>
        </div>
      </div>
    </div>
  );
}
