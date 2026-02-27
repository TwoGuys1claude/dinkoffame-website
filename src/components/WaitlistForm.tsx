"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to Supabase or email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-10 flex flex-col items-center gap-2 max-w-md mx-auto">
        <div className="text-3xl">🎉</div>
        <p className="text-lg font-bold text-primary">You&apos;re on the list!</p>
        <p className="text-sm text-muted">
          We&apos;ll let you know when Dink of Fame launches in your area.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 w-full px-5 py-3.5 bg-card border border-border/60 rounded-full text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-all hover:scale-105 glow-green animate-pulse-ring"
      >
        Join Waitlist
      </button>
    </form>
  );
}
