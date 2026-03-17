"use client";

import { CATEGORY_META, type Category } from "@/lib/iq-quiz-data";

export function IQQuizProgress({
  current,
  total,
  category,
}: {
  current: number;
  total: number;
  category: Category;
}) {
  const meta = CATEGORY_META[category];
  const pct = (current / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted">
          Question {current} of {total}
        </span>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full border border-border/40"
          style={{ color: meta.color }}
        >
          {meta.emoji} {meta.label}
        </span>
      </div>
      <div className="h-2 bg-card rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${meta.color}, #4ade80)`,
          }}
        />
      </div>
    </div>
  );
}
