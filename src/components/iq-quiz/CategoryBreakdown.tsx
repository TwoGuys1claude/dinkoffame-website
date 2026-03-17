"use client";

import { useEffect, useState } from "react";
import { CATEGORY_META, type Category } from "@/lib/iq-quiz-data";

export function CategoryBreakdown({
  categoryScores,
}: {
  categoryScores: Record<Category, { correct: number; total: number }>;
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(t);
  }, []);

  const categories = Object.entries(categoryScores) as [
    Category,
    { correct: number; total: number },
  ][];

  return (
    <div className="space-y-4">
      {categories.map(([cat, score]) => {
        const meta = CATEGORY_META[cat];
        const pct = score.total > 0 ? (score.correct / score.total) * 100 : 0;

        return (
          <div key={cat}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium">
                {meta.emoji} {meta.label}
              </span>
              <span className="text-xs text-muted">
                {score.correct}/{score.total}
              </span>
            </div>
            <div className="h-2.5 bg-card rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: animate ? `${pct}%` : "0%",
                  backgroundColor: meta.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
