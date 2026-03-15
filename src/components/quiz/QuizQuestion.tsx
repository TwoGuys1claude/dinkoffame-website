"use client";

import type { QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";

export function QuizQuestion({
  question,
  onAnswer,
}: {
  question: QuizQuestionType;
  onAnswer: (value: number) => void;
}) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-xl md:text-2xl font-bold mb-8">{question.question}</h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className="w-full text-left p-4 bg-card border border-border/40 rounded-xl hover:border-primary/50 hover:bg-card-hover transition-all text-sm md:text-base"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
