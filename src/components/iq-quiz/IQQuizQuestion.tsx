"use client";

import { useState } from "react";
import type { IQQuizQuestion as IQQ } from "@/lib/iq-quiz-data";

const DIFFICULTY_BADGE: Record<string, { label: string; cls: string }> = {
  easy: { label: "Easy", cls: "text-green-400 border-green-400/30" },
  medium: { label: "Medium", cls: "text-amber-400 border-amber-400/30" },
  hard: { label: "Hard", cls: "text-red-400 border-red-400/30" },
};

export function IQQuizQuestion({
  question,
  onAnswer,
}: {
  question: IQQ;
  onAnswer: (answerId: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const badge = DIFFICULTY_BADGE[question.difficulty];

  function handleSelect(id: string) {
    if (revealed) return;
    setSelected(id);
    setRevealed(true);
    setTimeout(() => onAnswer(id), 1800);
  }

  return (
    <div className="animate-fade-up">
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.cls}`}
        >
          {badge.label}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-6 leading-snug">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((opt) => {
          const isCorrect = opt.id === question.correctAnswer;
          const isSelected = opt.id === selected;
          let borderClass =
            "border-border/40 hover:border-primary/50 hover:bg-card-hover";

          if (revealed) {
            if (isCorrect) {
              borderClass = "border-green-500 bg-green-500/10";
            } else if (isSelected && !isCorrect) {
              borderClass = "border-red-500 bg-red-500/10";
            } else {
              borderClass = "border-border/20 opacity-50";
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={revealed}
              className={`w-full text-left p-4 bg-card border rounded-xl transition-all duration-200 flex items-start gap-3 ${borderClass}`}
            >
              <span
                className={`mt-0.5 w-7 h-7 shrink-0 rounded-lg flex items-center justify-center text-xs font-bold ${
                  revealed && isCorrect
                    ? "bg-green-500/20 text-green-400"
                    : revealed && isSelected && !isCorrect
                      ? "bg-red-500/20 text-red-400"
                      : "bg-card-hover text-muted"
                }`}
              >
                {opt.id.toUpperCase()}
              </span>
              <span className="text-sm leading-relaxed">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-4 p-4 bg-card border border-border/40 rounded-xl animate-fade-up">
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-semibold text-foreground">
              {selected === question.correctAnswer ? "Correct! " : "Not quite. "}
            </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
