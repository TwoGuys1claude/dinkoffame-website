"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResults } from "@/components/quiz/QuizResults";
import {
  QUIZ_QUESTIONS,
  getSkillLevel,
  type SkillLevel,
} from "@/lib/quiz-data";

type Stage = "intro" | "quiz" | "results";

export default function SkillQuizPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<SkillLevel | null>(null);

  function handleStart() {
    setStage("quiz");
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  }

  function handleAnswer(value: number) {
    const next = [...answers, value];
    setAnswers(next);

    if (next.length === QUIZ_QUESTIONS.length) {
      const total = next.reduce((sum, v) => sum + v, 0);
      setResult(getSkillLevel(total));
      setStage("results");
    } else {
      setCurrentQ(currentQ + 1);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-2xl px-6">
          {stage === "intro" && (
            <div className="text-center animate-fade-up">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Free Tool
              </span>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
                What Level Pickleball{" "}
                <span className="text-gradient">Player Am I?</span>
              </h1>
              <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                Answer 10 quick questions about your game and get your estimated
                skill rating from 2.0 to 4.5+, plus personalized tips to
                improve.
              </p>
              <button
                onClick={handleStart}
                className="mt-8 px-8 py-4 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
              >
                Start the Quiz
              </button>
              <p className="mt-4 text-xs text-muted">
                Takes about 2 minutes. No signup required.
              </p>
            </div>
          )}

          {stage === "quiz" && (
            <div>
              <QuizProgress
                current={currentQ + 1}
                total={QUIZ_QUESTIONS.length}
              />
              <div className="mt-8" key={currentQ}>
                <QuizQuestion
                  question={QUIZ_QUESTIONS[currentQ]}
                  onAnswer={handleAnswer}
                />
              </div>
            </div>
          )}

          {stage === "results" && result && (
            <QuizResults result={result} onRetake={handleStart} />
          )}

          {/* SEO content below the fold */}
          <div className="mt-20 pt-12 border-t border-border/40">
            <h2 className="text-xl font-bold mb-4">
              How Pickleball Skill Ratings Work
            </h2>
            <div className="prose prose-invert prose-sm max-w-none text-muted">
              <p>
                Pickleball skill ratings range from 1.0 (brand new) to 5.5+
                (professional). Most recreational players fall between 2.5 and
                4.0. Your rating reflects your consistency, shot selection,
                strategy, and ability to execute under pressure.
              </p>
              <p>
                This quiz evaluates 10 key areas of your game: serve
                consistency, return of serve, third shot strategy, kitchen play,
                dinking ability, knowledge of stacking, court positioning,
                advanced shots (Erne, ATP), and mental game under pressure.
              </p>
              <p>
                Whether you are a beginner learning the{" "}
                <Link
                  href="/blog/pickleball-scoring-rules-explained"
                  className="text-primary hover:underline"
                >
                  pickleball scoring rules
                </Link>{" "}
                or an advanced player refining your{" "}
                <Link
                  href="/blog/what-is-stacking-in-pickleball"
                  className="text-primary hover:underline"
                >
                  stacking strategy
                </Link>
                , knowing your level helps you find the right opponents and
                target the right{" "}
                <Link
                  href="/blog/pickleball-drills-improve-dink-game"
                  className="text-primary hover:underline"
                >
                  drills to improve
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
