"use client";

export function QuizProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-muted mb-2">
        <span>
          Question {current} of {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
