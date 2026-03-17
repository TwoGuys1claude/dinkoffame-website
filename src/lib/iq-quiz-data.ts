export type Category =
  | "rules"
  | "strategy"
  | "situational"
  | "shots"
  | "history";
export type Difficulty = "easy" | "medium" | "hard";

export interface IQQuizQuestion {
  id: number;
  question: string;
  category: Category;
  difficulty: Difficulty;
  options: { id: string; label: string }[];
  correctAnswer: string;
  explanation: string;
}

export interface IQTier {
  minIQ: number;
  maxIQ: number;
  title: string;
  description: string;
  percentile: string;
}

export const CATEGORY_META: Record<
  Category,
  { label: string; emoji: string; color: string }
> = {
  rules: { label: "Rules & Officiating", emoji: "📋", color: "#4ade80" },
  strategy: { label: "Strategy & Tactics", emoji: "🧠", color: "#22d3ee" },
  situational: {
    label: "Situational Awareness",
    emoji: "👁️",
    color: "#f59e0b",
  },
  shots: { label: "Shot Knowledge", emoji: "🏓", color: "#a78bfa" },
  history: { label: "History & Culture", emoji: "📖", color: "#f87171" },
};

export const IQ_TIERS: IQTier[] = [
  {
    minIQ: 0,
    maxIQ: 69,
    title: "Casual Dinker",
    description:
      "You enjoy the game but the finer details haven't clicked yet. Hit the courts more and pay attention to the rules — your IQ will climb fast.",
    percentile: "Bottom 20%",
  },
  {
    minIQ: 70,
    maxIQ: 84,
    title: "Social Player",
    description:
      "You know enough to hold your own in rec play. A few blind spots in strategy and shot knowledge are holding you back from the next level.",
    percentile: "Top 60–80%",
  },
  {
    minIQ: 85,
    maxIQ: 99,
    title: "Court Smart",
    description:
      "Solid understanding of the game. You know the rules, have decent strategy, and can read most situations. You're the player people want on their team.",
    percentile: "Top 25–40%",
  },
  {
    minIQ: 100,
    maxIQ: 114,
    title: "Strategist",
    description:
      "You think two shots ahead. Your knowledge of rules, positioning, and shot selection puts you well above the average player.",
    percentile: "Top 10–25%",
  },
  {
    minIQ: 115,
    maxIQ: 129,
    title: "Pickleball Scholar",
    description:
      "Exceptional game knowledge. You understand the nuances that most players miss — from obscure rules to advanced shot setups.",
    percentile: "Top 5%",
  },
  {
    minIQ: 130,
    maxIQ: 200,
    title: "Pickleball Genius",
    description:
      "You are a walking rulebook and tactical encyclopedia. Your game IQ is elite — you see angles, setups, and plays that others can't.",
    percentile: "Top 1%",
  },
];

export const DIFFICULTY_POINTS: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
};

export const IQ_QUESTIONS: IQQuizQuestion[] = [
  // ═══════════════════════════════════════
  // RULES & OFFICIATING (7 questions)
  // ═══════════════════════════════════════
  {
    id: 1,
    question: "In doubles pickleball, what is the correct starting score call?",
    category: "rules",
    difficulty: "easy",
    options: [
      { id: "a", label: "0-0" },
      { id: "b", label: "0-0-2" },
      { id: "c", label: "0-0-1" },
      { id: "d", label: "1-0-1" },
    ],
    correctAnswer: "b",
    explanation:
      "The game starts at 0-0-2. The starting team only gets one serve (server 2) to prevent a first-serve advantage.",
  },
  {
    id: 2,
    question:
      "You hit a volley while your momentum carries you into the kitchen. Is this a fault?",
    category: "rules",
    difficulty: "medium",
    options: [
      { id: "a", label: "No, the ball was already dead" },
      { id: "b", label: "Only if it happens within 2 seconds" },
      { id: "c", label: "Yes, it's always a fault" },
      { id: "d", label: "Only if you touch the kitchen line" },
    ],
    correctAnswer: "c",
    explanation:
      "If your momentum from a volley carries you into the kitchen or you touch any kitchen line, it's a fault — even if the ball is already dead.",
  },
  {
    id: 3,
    question:
      'What does the "Two-Bounce Rule" (double bounce rule) require?',
    category: "rules",
    difficulty: "easy",
    options: [
      { id: "a", label: "The ball must bounce twice on each side" },
      {
        id: "b",
        label:
          "The serve and the return of serve must each bounce before being hit",
      },
      { id: "c", label: "You must let the ball bounce twice before volleying" },
      {
        id: "d",
        label: "The ball must bounce in the kitchen before being played",
      },
    ],
    correctAnswer: "b",
    explanation:
      "The serve must bounce before the receiving team hits it, and the return must bounce before the serving team hits it. After both bounces, either team can volley.",
  },
  {
    id: 4,
    question:
      "Your partner's hat falls into the kitchen during a rally. What happens?",
    category: "rules",
    difficulty: "hard",
    options: [
      { id: "a", label: "Play continues, no fault" },
      { id: "b", label: "The rally is replayed" },
      { id: "c", label: "It's a fault on your team" },
      {
        id: "d",
        label: "It's only a fault if a player was hitting a volley",
      },
    ],
    correctAnswer: "c",
    explanation:
      "If anything a player is wearing or carrying lands in the kitchen during a volley or due to momentum, it's a fault. A hat falling into the kitchen during a rally is a fault.",
  },
  {
    id: 5,
    question:
      "The serve hits the net and lands in the correct service court. What's the call?",
    category: "rules",
    difficulty: "medium",
    options: [
      { id: "a", label: "Let — serve again" },
      { id: "b", label: "Fault — point to the receiver" },
      { id: "c", label: "The serve is played as live" },
      { id: "d", label: "Side out" },
    ],
    correctAnswer: "c",
    explanation:
      "Since 2021, there are no let serves in pickleball. If the serve hits the net and lands in the correct court, it's a live ball and must be played.",
  },
  {
    id: 6,
    question:
      "In rally scoring (used in some MLP/PPA formats), what happens when the receiving team wins the rally?",
    category: "rules",
    difficulty: "medium",
    options: [
      { id: "a", label: "They score a point and serve next" },
      { id: "b", label: "They just get the serve, no point" },
      { id: "c", label: "Both teams score a point" },
      { id: "d", label: "The rally is replayed" },
    ],
    correctAnswer: "a",
    explanation:
      "In rally scoring, a point is awarded on every rally regardless of who served. The team that wins the rally scores and serves next.",
  },
  {
    id: 7,
    question:
      "You are standing in the kitchen. A ball is hit to you in the air. Can you hit it before it bounces?",
    category: "rules",
    difficulty: "hard",
    options: [
      { id: "a", label: "Never — you can't volley in the kitchen" },
      { id: "b", label: "Yes, if you jump and land outside the kitchen" },
      {
        id: "c",
        label: "Yes, as long as you don't hit it above your waist",
      },
      {
        id: "d",
        label: "You must let it bounce first, then you can hit it",
      },
    ],
    correctAnswer: "d",
    explanation:
      "You can stand in the kitchen any time, but you cannot volley (hit the ball out of the air) while in the kitchen. You must let it bounce first, then you may hit it.",
  },

  // ═══════════════════════════════════════
  // STRATEGY & TACTICS (7 questions)
  // ═══════════════════════════════════════
  {
    id: 8,
    question: "Why is the third shot drop considered a key strategy?",
    category: "strategy",
    difficulty: "easy",
    options: [
      { id: "a", label: "It scores aces regularly" },
      {
        id: "b",
        label:
          "It gives the serving team time to move to the kitchen line",
      },
      { id: "c", label: "It confuses the referee" },
      { id: "d", label: "It forces the opponent to hit a lob" },
    ],
    correctAnswer: "b",
    explanation:
      "The third shot drop lands softly in the opponent's kitchen, giving the serving team time to advance to the net — the most advantageous position on the court.",
  },
  {
    id: 9,
    question:
      "Your opponents are both at the net. You're at the baseline. What's the highest-percentage play?",
    category: "strategy",
    difficulty: "medium",
    options: [
      { id: "a", label: "Hit a hard drive between them" },
      { id: "b", label: "Lob over both of them" },
      { id: "c", label: "Hit a third shot drop into the kitchen" },
      { id: "d", label: "Hit to the opponent with the weaker backhand" },
    ],
    correctAnswer: "c",
    explanation:
      "A drop into the kitchen neutralizes their net position and lets you advance. Hard drives and lobs are lower-percentage plays against a set net team.",
  },
  {
    id: 10,
    question: 'What does "stacking" in doubles primarily accomplish?',
    category: "strategy",
    difficulty: "medium",
    options: [
      { id: "a", label: "It hides your serve" },
      {
        id: "b",
        label:
          "It keeps players on their preferred forehand/backhand side",
      },
      { id: "c", label: "It confuses the referee's score tracking" },
      { id: "d", label: "It reduces the court coverage area" },
    ],
    correctAnswer: "b",
    explanation:
      "Stacking lets both partners stay on their preferred side regardless of who is serving or receiving, keeping forehands in the middle and covering weaknesses.",
  },
  {
    id: 11,
    question: "Where should you aim most of your dinks in a cross-court rally?",
    category: "strategy",
    difficulty: "easy",
    options: [
      { id: "a", label: "Straight ahead at the opponent" },
      { id: "b", label: "At their feet" },
      { id: "c", label: "Cross-court to their backhand" },
      { id: "d", label: "Deep to their baseline" },
    ],
    correctAnswer: "c",
    explanation:
      "Cross-court dinks travel over the lowest part of the net and have the most margin for error. Targeting the backhand forces weaker replies and sets up attacks.",
  },
  {
    id: 12,
    question:
      "When is the best time to speed up a ball during a dink rally?",
    category: "strategy",
    difficulty: "medium",
    options: [
      { id: "a", label: "As soon as the rally starts" },
      {
        id: "b",
        label: "When your opponent pops the ball up above the net",
      },
      { id: "c", label: "On every third dink" },
      { id: "d", label: "When you're behind in the score" },
    ],
    correctAnswer: "b",
    explanation:
      "The ideal time to speed up is when the ball is above net height — a 'pop-up' — giving you a downward attack angle. Speeding up low balls creates errors.",
  },
  {
    id: 13,
    question:
      "In doubles, your partner gets pulled wide. What should you do?",
    category: "strategy",
    difficulty: "hard",
    options: [
      { id: "a", label: "Stay on your side and hold your ground" },
      { id: "b", label: "Slide toward the middle to cover the gap" },
      { id: "c", label: "Rush the net aggressively" },
      { id: "d", label: "Move back to the baseline" },
    ],
    correctAnswer: "b",
    explanation:
      "When your partner is pulled wide, slide toward the center to close the middle gap. You move as a unit — think of it as being connected by an invisible rope.",
  },
  {
    id: 14,
    question:
      "Your opponent consistently attacks your backhand. What's the smartest adjustment?",
    category: "strategy",
    difficulty: "hard",
    options: [
      { id: "a", label: "Switch to hitting everything with your forehand" },
      {
        id: "b",
        label:
          "Shade your positioning slightly to favor your backhand side",
      },
      { id: "c", label: "Always hit drop shots to avoid backhand rallies" },
      { id: "d", label: "Stand further back from the kitchen line" },
    ],
    correctAnswer: "b",
    explanation:
      "Shading your position slightly toward your backhand creates better coverage without opening up your forehand side too much. It's a subtle adjustment that pays dividends.",
  },

  // ═══════════════════════════════════════
  // SITUATIONAL AWARENESS (5 questions)
  // ═══════════════════════════════════════
  {
    id: 15,
    question:
      "Your opponent drives a ball right at your body at the kitchen line. What's the best response?",
    category: "situational",
    difficulty: "medium",
    options: [
      { id: "a", label: "Jump out of the way" },
      { id: "b", label: "Try to hit a forehand winner" },
      {
        id: "c",
        label: "Use a compact backhand block to reset into the kitchen",
      },
      { id: "d", label: "Catch the ball and claim a hinder" },
    ],
    correctAnswer: "c",
    explanation:
      "Body shots are designed to jam you. A compact backhand block (paddle in front, absorb the pace) resets the ball into the kitchen and neutralizes the attack.",
  },
  {
    id: 16,
    question:
      "You notice your opponents always poach the middle. What should you change?",
    category: "situational",
    difficulty: "medium",
    options: [
      { id: "a", label: "Hit everything down the line" },
      { id: "b", label: "Lob over them every time" },
      {
        id: "c",
        label:
          "Mix in more down-the-line and wide-angle shots to keep them honest",
      },
      { id: "d", label: "Hit harder to the middle" },
    ],
    correctAnswer: "c",
    explanation:
      "If opponents cheat to the middle, punish them with down-the-line shots and wide angles. Mixing targets prevents them from anticipating and poaching.",
  },
  {
    id: 17,
    question:
      "Both you and your partner are at the kitchen line. A lob goes over your partner's head. Who should take it?",
    category: "situational",
    difficulty: "hard",
    options: [
      { id: "a", label: "Your partner should always run back for it" },
      {
        id: "b",
        label:
          "The partner who got lobbed should chase it; the other player shifts to cover center",
      },
      { id: "c", label: "Whoever has the better overhead should take it" },
      { id: "d", label: "Let it bounce and hope it goes out" },
    ],
    correctAnswer: "b",
    explanation:
      "The lobbed player turns and chases. Their partner shifts to the middle of the court to cover the gap. This is standard court rotation in doubles.",
  },
  {
    id: 18,
    question:
      "You're about to serve and notice the receiver is standing very deep. What should you consider?",
    category: "situational",
    difficulty: "easy",
    options: [
      { id: "a", label: "Serve as hard as possible" },
      { id: "b", label: "Hit a short, soft serve near the kitchen line" },
      { id: "c", label: "Aim for their body" },
      { id: "d", label: "Serve to the same spot every time" },
    ],
    correctAnswer: "b",
    explanation:
      "If the receiver stands deep, a short serve forces them to sprint forward, disrupting their rhythm and making their return more difficult.",
  },
  {
    id: 19,
    question:
      "Your opponent keeps hitting the same cross-court dink. What does this usually mean?",
    category: "situational",
    difficulty: "medium",
    options: [
      { id: "a", label: "They're trying to tire you out" },
      {
        id: "b",
        label: "They're waiting for you to pop the ball up so they can attack",
      },
      { id: "c", label: "They don't know any other shots" },
      { id: "d", label: "They're stalling for time" },
    ],
    correctAnswer: "b",
    explanation:
      "Repeating cross-court dinks is a patience play — they're waiting for you to hit one too high (a pop-up) so they can speed up or attack. Stay disciplined.",
  },

  // ═══════════════════════════════════════
  // SHOT KNOWLEDGE (5 questions)
  // ═══════════════════════════════════════
  {
    id: 20,
    question: "What is an Erne in pickleball?",
    category: "shots",
    difficulty: "easy",
    options: [
      { id: "a", label: "A serve that lands on the line" },
      {
        id: "b",
        label:
          "A volley hit while jumping around or over the kitchen, landing outside the court",
      },
      { id: "c", label: "A backhand slice that stays low" },
      { id: "d", label: "A deep lob to the baseline" },
    ],
    correctAnswer: "b",
    explanation:
      "An Erne involves jumping or running around the kitchen to volley the ball from outside the sideline, bypassing the non-volley zone rules. Named after Erne Perry.",
  },
  {
    id: 21,
    question: 'What is a "Bert" shot?',
    category: "shots",
    difficulty: "medium",
    options: [
      { id: "a", label: "An around-the-post shot" },
      {
        id: "b",
        label:
          "An Erne performed by crossing in front of your partner to their side",
      },
      { id: "c", label: "A behind-the-back shot" },
      { id: "d", label: "A drop serve with extreme spin" },
    ],
    correctAnswer: "b",
    explanation:
      "A Bert is essentially an Erne on your partner's side — you cross in front of your partner to volley from outside the sideline on their side of the court.",
  },
  {
    id: 22,
    question:
      "When should you hit a third shot drive instead of a third shot drop?",
    category: "shots",
    difficulty: "medium",
    options: [
      { id: "a", label: "Every time — drives are always better" },
      {
        id: "b",
        label:
          "When the return is short or high, giving you an attackable ball",
      },
      { id: "c", label: "Only when you're losing" },
      { id: "d", label: "When your partner tells you to" },
    ],
    correctAnswer: "b",
    explanation:
      "A third shot drive is best when the return sits up high or lands short, giving you an aggressive angle. Driving a deep, low return is a lower-percentage play.",
  },
  {
    id: 23,
    question: "What is an Around-The-Post (ATP) shot?",
    category: "shots",
    difficulty: "easy",
    options: [
      { id: "a", label: "A shot hit over the net at an extreme angle" },
      {
        id: "b",
        label:
          "A shot that travels around the outside of the net post, not over the net",
      },
      { id: "c", label: "A shot hit from behind the baseline" },
      { id: "d", label: "A shot that bounces twice before crossing the net" },
    ],
    correctAnswer: "b",
    explanation:
      "An ATP goes around the net post rather than over the net. It's legal as long as the ball doesn't go over the net — it just has to land in the court.",
  },
  {
    id: 24,
    question:
      "What type of spin is most effective on a third shot drop?",
    category: "shots",
    difficulty: "hard",
    options: [
      { id: "a", label: "Heavy topspin" },
      { id: "b", label: "Backspin (slice)" },
      { id: "c", label: "Sidespin" },
      { id: "d", label: "No spin is best" },
    ],
    correctAnswer: "b",
    explanation:
      "Backspin (slice) helps the ball die in the kitchen by reducing its forward momentum after the bounce, making it harder for the opponent to attack.",
  },

  // ═══════════════════════════════════════
  // HISTORY & CULTURE (4 questions)
  // ═══════════════════════════════════════
  {
    id: 25,
    question: "In what year was pickleball invented?",
    category: "history",
    difficulty: "easy",
    options: [
      { id: "a", label: "1955" },
      { id: "b", label: "1965" },
      { id: "c", label: "1975" },
      { id: "d", label: "1985" },
    ],
    correctAnswer: "b",
    explanation:
      "Pickleball was invented in 1965 on Bainbridge Island, Washington by Joel Pritchard, Bill Bell, and Barney McCallum.",
  },
  {
    id: 26,
    question: "How does a pickleball court compare in size to a tennis court?",
    category: "history",
    difficulty: "medium",
    options: [
      { id: "a", label: "Same size" },
      { id: "b", label: "About half the size" },
      { id: "c", label: "About one-third the size" },
      { id: "d", label: "About one-quarter the size" },
    ],
    correctAnswer: "c",
    explanation:
      "A pickleball court is 44' × 20' (880 sq ft) while a tennis doubles court is 78' × 36' (2,808 sq ft) — roughly one-third the size.",
  },
  {
    id: 27,
    question: "What is the governing body for pickleball in the United States?",
    category: "history",
    difficulty: "medium",
    options: [
      { id: "a", label: "PPA (Professional Pickleball Association)" },
      { id: "b", label: "USA Pickleball" },
      { id: "c", label: "MLP (Major League Pickleball)" },
      { id: "d", label: "IFP (International Federation of Pickleball)" },
    ],
    correctAnswer: "b",
    explanation:
      "USA Pickleball (USAP) is the national governing body that sets the official rules, sanctions tournaments, and manages player ratings.",
  },
  {
    id: 28,
    question:
      "What is the most widely accepted origin of the name 'pickleball'?",
    category: "history",
    difficulty: "hard",
    options: [
      { id: "a", label: "Named after a pickle factory near the first court" },
      {
        id: "b",
        label:
          "Named after the Pritchard family dog, Pickles",
      },
      {
        id: "c",
        label:
          'From the "pickle boat" in rowing — a crew made of leftover rowers',
      },
      { id: "d", label: "Named after a brand of paddle" },
    ],
    correctAnswer: "c",
    explanation:
      "While the dog story is popular, Joan Pritchard (Joel's wife) said she named it after the pickle boat in rowing — a boat crewed by leftover oarsmen from other boats, just as the game combined elements of other sports. The dog came later and was named after the game.",
  },
];

export const MAX_RAW_SCORE = IQ_QUESTIONS.reduce(
  (sum, q) => sum + DIFFICULTY_POINTS[q.difficulty],
  0
);

export interface IQResult {
  iq: number;
  tier: IQTier;
  rawScore: number;
  maxScore: number;
  totalCorrect: number;
  categoryScores: Record<Category, { correct: number; total: number }>;
}

export function calculateIQScore(
  answers: Record<number, string>
): IQResult {
  let rawScore = 0;
  let totalCorrect = 0;

  const categoryScores: Record<Category, { correct: number; total: number }> = {
    rules: { correct: 0, total: 0 },
    strategy: { correct: 0, total: 0 },
    situational: { correct: 0, total: 0 },
    shots: { correct: 0, total: 0 },
    history: { correct: 0, total: 0 },
  };

  for (const q of IQ_QUESTIONS) {
    categoryScores[q.category].total++;
    if (answers[q.id] === q.correctAnswer) {
      rawScore += DIFFICULTY_POINTS[q.difficulty];
      totalCorrect++;
      categoryScores[q.category].correct++;
    }
  }

  const iq = Math.round(50 + (rawScore / MAX_RAW_SCORE) * 95);

  const tier =
    IQ_TIERS.find((t) => iq >= t.minIQ && iq <= t.maxIQ) ??
    IQ_TIERS[IQ_TIERS.length - 1];

  return { iq, tier, rawScore, maxScore: MAX_RAW_SCORE, totalCorrect, categoryScores };
}
