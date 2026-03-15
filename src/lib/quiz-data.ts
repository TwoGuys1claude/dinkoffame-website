export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; value: number }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How often do you play pickleball?",
    options: [
      { label: "Just starting out / a few times ever", value: 1 },
      { label: "A few times a month", value: 2 },
      { label: "1-3 times per week", value: 3 },
      { label: "4+ times per week", value: 4 },
    ],
  },
  {
    id: 2,
    question: "How consistent is your serve?",
    options: [
      { label: "I often fault or miss the service box", value: 1 },
      { label: "I get it in most of the time but without much control", value: 2 },
      { label: "I can place my serve to specific areas reliably", value: 3 },
      { label: "I use spin, power, and placement strategically on every serve", value: 4 },
    ],
  },
  {
    id: 3,
    question: "How do you handle the return of serve?",
    options: [
      { label: "I just try to get it back over the net", value: 1 },
      { label: "I aim deep but don't always get there", value: 2 },
      { label: "I consistently hit deep returns and move to the kitchen line", value: 3 },
      { label: "I vary depth, spin, and placement based on my opponent's position", value: 4 },
    ],
  },
  {
    id: 4,
    question: "What's your third shot strategy?",
    options: [
      { label: "What's a third shot?", value: 1 },
      { label: "I usually drive it hard", value: 2 },
      { label: "I can hit a third shot drop but it's inconsistent", value: 3 },
      { label: "I choose between a drop, drive, or lob based on the situation", value: 4 },
    ],
  },
  {
    id: 5,
    question: "How comfortable are you at the kitchen (non-volley zone)?",
    options: [
      { label: "I'm not sure when I can or can't volley there", value: 1 },
      { label: "I know the rules but prefer to stay back", value: 2 },
      { label: "I'm comfortable dinking and resetting at the kitchen", value: 3 },
      { label: "I control rallies from the kitchen with placement, spin, and speed-ups", value: 4 },
    ],
  },
  {
    id: 6,
    question: "How would you rate your dinking ability?",
    options: [
      { label: "I pop the ball up a lot during dink rallies", value: 1 },
      { label: "I can sustain short dink rallies but lose patience", value: 2 },
      { label: "I dink with purpose and can hit cross-court consistently", value: 3 },
      { label: "I use dinks to set up attacks, change pace, and move my opponents", value: 4 },
    ],
  },
  {
    id: 7,
    question: "Do you know what stacking is in doubles?",
    options: [
      { label: "No idea what that means", value: 1 },
      { label: "I've heard of it but haven't tried it", value: 2 },
      { label: "I use it sometimes to keep forehands in the middle", value: 3 },
      { label: "I stack strategically and switch based on game situations", value: 4 },
    ],
  },
  {
    id: 8,
    question: "How's your court positioning in doubles?",
    options: [
      { label: "I usually stand wherever feels right", value: 1 },
      { label: "I know I should be at the kitchen but sometimes forget", value: 2 },
      { label: "I move with my partner and cover the court as a team", value: 3 },
      { label: "I anticipate shots, close gaps, and poach when the time is right", value: 4 },
    ],
  },
  {
    id: 9,
    question: "Can you hit an Erne or Around-The-Post (ATP) shot?",
    options: [
      { label: "I don't know what those are", value: 1 },
      { label: "I know what they are but have never tried", value: 2 },
      { label: "I've hit a few but can't do it on command", value: 3 },
      { label: "I look for Erne and ATP opportunities and execute them", value: 4 },
    ],
  },
  {
    id: 10,
    question: "How do you handle pressure points (like 9-9)?",
    options: [
      { label: "I get nervous and make more mistakes", value: 1 },
      { label: "I try to play safe but sometimes rush", value: 2 },
      { label: "I stay calm and stick to high-percentage shots", value: 3 },
      { label: "I thrive under pressure and execute my game plan", value: 4 },
    ],
  },
];

export interface SkillLevel {
  rating: string;
  label: string;
  description: string;
  tips: string[];
}

export const SKILL_LEVELS: SkillLevel[] = [
  {
    rating: "2.0",
    label: "Beginner",
    description:
      "You're just getting started on your pickleball journey. You're learning the basic rules, getting comfortable with the paddle, and figuring out where to stand.",
    tips: [
      "Focus on getting your serve in consistently",
      "Learn the kitchen (non-volley zone) rules",
      "Practice your ready position and footwork",
      "Play as much as possible to build comfort",
    ],
  },
  {
    rating: "2.5",
    label: "Advanced Beginner",
    description:
      "You know the rules and can keep a rally going. You're starting to understand court positioning but still working on consistency.",
    tips: [
      "Work on hitting deep returns of serve",
      "Start moving to the kitchen line after your return",
      "Practice dinking drills to build your soft game",
      "Focus on reducing unforced errors",
    ],
  },
  {
    rating: "3.0",
    label: "Intermediate",
    description:
      "You're a solid recreational player. You have decent consistency, understand basic strategy, and can sustain dink rallies.",
    tips: [
      "Learn the third shot drop and when to use it",
      "Practice cross-court dinking patterns",
      "Start learning about stacking in doubles",
      "Work on shot selection under pressure",
    ],
  },
  {
    rating: "3.5",
    label: "Upper Intermediate",
    description:
      "You're becoming a well-rounded player. You use strategy intentionally, have a reliable soft game, and understand when to be aggressive.",
    tips: [
      "Refine your third shot drop consistency",
      "Learn to speed up from the kitchen at the right time",
      "Practice Erne setups and around-the-post shots",
      "Work on varying spin and pace in your dinks",
    ],
  },
  {
    rating: "4.0",
    label: "Advanced",
    description:
      "You're a strong competitive player. You control rallies, use advanced shots consistently, and make smart tactical decisions.",
    tips: [
      "Focus on reducing unforced errors in tournament play",
      "Develop your two-handed backhand or backhand roll",
      "Work on aggressive stacking and switching strategies",
      "Analyze your opponents' weaknesses mid-match",
    ],
  },
  {
    rating: "4.5+",
    label: "Expert / Tournament",
    description:
      "You're among the best recreational and competitive players. You execute advanced shots on demand, control pace, and dominate with strategy.",
    tips: [
      "Compete in sanctioned tournaments to sharpen your game",
      "Study professional matches for advanced tactics",
      "Work with a coach on sport-specific conditioning",
      "Focus on mental game and point construction",
    ],
  },
];

export function getSkillLevel(totalScore: number): SkillLevel {
  // totalScore ranges from 10 (all 1s) to 40 (all 4s)
  if (totalScore <= 13) return SKILL_LEVELS[0]; // 2.0
  if (totalScore <= 17) return SKILL_LEVELS[1]; // 2.5
  if (totalScore <= 23) return SKILL_LEVELS[2]; // 3.0
  if (totalScore <= 29) return SKILL_LEVELS[3]; // 3.5
  if (totalScore <= 35) return SKILL_LEVELS[4]; // 4.0
  return SKILL_LEVELS[5]; // 4.5+
}
