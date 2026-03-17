"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IQQuizProgress } from "@/components/iq-quiz/IQQuizProgress";
import { IQQuizQuestion } from "@/components/iq-quiz/IQQuizQuestion";
import { IQQuizResults } from "@/components/iq-quiz/IQQuizResults";
import {
  IQ_QUESTIONS,
  CATEGORY_META,
  calculateIQScore,
  type IQResult,
  type Category,
} from "@/lib/iq-quiz-data";

type Stage = "intro" | "quiz" | "calculating" | "results";

const CATEGORY_ORDER: Category[] = [
  "rules",
  "strategy",
  "situational",
  "shots",
  "history",
];

export default function PickleballIQTestPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<IQResult | null>(null);

  function handleStart() {
    setStage("quiz");
    setCurrentQ(0);
    setAnswers({});
    setResult(null);
  }

  function handleAnswer(answerId: string) {
    const question = IQ_QUESTIONS[currentQ];
    const next = { ...answers, [question.id]: answerId };
    setAnswers(next);

    if (currentQ + 1 === IQ_QUESTIONS.length) {
      setStage("calculating");
      const r = calculateIQScore(next);
      setResult(r);
    } else {
      setCurrentQ(currentQ + 1);
    }
  }

  useEffect(() => {
    if (stage === "calculating") {
      const timer = setTimeout(() => setStage("results"), 2500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-2xl px-6">
          {/* ─── INTRO ─── */}
          {stage === "intro" && (
            <div className="text-center animate-fade-up">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Free Tool
              </span>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
                What&apos;s Your Pickleball{" "}
                <span className="text-gradient">IQ?</span>
              </h1>
              <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                28 knowledge-based questions across rules, strategy, shots,
                situational awareness, and history. Find out if you&apos;re a
                Casual Dinker or a Pickleball Genius.
              </p>

              {/* Category badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {CATEGORY_ORDER.map((cat) => {
                  const meta = CATEGORY_META[cat];
                  return (
                    <span
                      key={cat}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-card border border-border/40"
                      style={{ color: meta.color }}
                    >
                      {meta.emoji} {meta.label}
                    </span>
                  );
                })}
              </div>

              <button
                onClick={handleStart}
                className="mt-8 px-8 py-4 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
              >
                Start the IQ Test
              </button>
              <p className="mt-4 text-xs text-muted">
                Takes about 5 minutes. No signup required.
              </p>
            </div>
          )}

          {/* ─── QUIZ ─── */}
          {stage === "quiz" && (
            <div>
              <IQQuizProgress
                current={currentQ + 1}
                total={IQ_QUESTIONS.length}
                category={IQ_QUESTIONS[currentQ].category}
              />
              <div key={currentQ}>
                <IQQuizQuestion
                  question={IQ_QUESTIONS[currentQ]}
                  onAnswer={handleAnswer}
                />
              </div>
            </div>
          )}

          {/* ─── CALCULATING ─── */}
          {stage === "calculating" && (
            <div className="text-center py-20 animate-fade-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-6 animate-pulse-ring">
                <span className="text-3xl">🧠</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Analyzing your answers...
              </h2>
              <p className="text-muted text-sm">
                Calculating your Pickleball IQ across all 5 categories.
              </p>
              <div className="mt-8 mx-auto max-w-xs">
                <div className="h-2 bg-card rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{
                      animation: "calc-bar 2.5s ease-in-out forwards",
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ─── RESULTS ─── */}
          {stage === "results" && result && (
            <IQQuizResults result={result} onRetake={handleStart} />
          )}

          {/* ─── SEO CONTENT ─── */}
          <div className="mt-20 pt-12 border-t border-border/40">
            <h2 className="text-xl font-bold mb-4">
              About the Pickleball IQ Test
            </h2>
            <div className="prose prose-invert prose-sm max-w-none text-muted">
              <p>
                The Pickleball IQ Test measures your overall game knowledge
                across five categories: Rules &amp; Officiating, Strategy &amp;
                Tactics, Situational Awareness, Shot Knowledge, and History
                &amp; Culture. Each of the 28 questions is weighted by
                difficulty — easy questions earn 1 point, medium 2 points, and
                hard 3 points — for a maximum of 56 raw points converted to an
                IQ score from 50 to 145.
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
                , this test helps you identify knowledge gaps and target areas
                for improvement. Practice with our{" "}
                <Link
                  href="/tools/drill-generator"
                  className="text-primary hover:underline"
                >
                  drill generator
                </Link>{" "}
                and study the{" "}
                <Link
                  href="/tools/court-dimensions"
                  className="text-primary hover:underline"
                >
                  official court dimensions
                </Link>{" "}
                to boost your score.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
