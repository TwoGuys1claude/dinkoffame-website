export type SkillLevel = "beginner" | "intermediate" | "advanced" | "all";
export type FocusArea =
  | "dinking"
  | "serving"
  | "returns"
  | "third-shot-drops"
  | "volleys"
  | "transition"
  | "groundstrokes"
  | "footwork"
  | "defense"
  | "lobs"
  | "game-sim";

export interface Drill {
  id: number;
  name: string;
  description: string;
  howTo: string;
  skillLevel: SkillLevel;
  focusArea: FocusArea;
  players: number; // minimum players needed
  duration: number; // minutes
  tip: string;
}

export const FOCUS_AREAS: { value: FocusArea; label: string; emoji: string }[] =
  [
    { value: "dinking", label: "Dinking", emoji: "🎯" },
    { value: "serving", label: "Serving", emoji: "🚀" },
    { value: "returns", label: "Returns", emoji: "↩️" },
    { value: "third-shot-drops", label: "3rd Shot Drops", emoji: "🪂" },
    { value: "volleys", label: "Volleys", emoji: "⚡" },
    { value: "transition", label: "Transition", emoji: "🏃" },
    { value: "groundstrokes", label: "Groundstrokes", emoji: "💪" },
    { value: "footwork", label: "Footwork", emoji: "👟" },
    { value: "defense", label: "Defense", emoji: "🛡️" },
    { value: "lobs", label: "Lobs & Overheads", emoji: "🌈" },
    { value: "game-sim", label: "Game Simulation", emoji: "🏆" },
  ];

export const SKILL_LEVELS: { value: SkillLevel; label: string }[] = [
  { value: "beginner", label: "Beginner (2.0-3.0)" },
  { value: "intermediate", label: "Intermediate (3.0-4.0)" },
  { value: "advanced", label: "Advanced (4.0+)" },
];

export const DRILLS: Drill[] = [
  // DINKING
  {
    id: 1,
    name: "Cross-Court Dinks",
    description:
      "Exchange soft dinks diagonally across the net, focusing on consistency and angle control.",
    howTo:
      "Both players stand at the kitchen line on opposite diagonal sides. Dink back and forth cross-court, keeping the ball low over the net. Count your streak — aim for 20 in a row without a miss.",
    skillLevel: "beginner",
    focusArea: "dinking",
    players: 2,
    duration: 10,
    tip: "Keep your paddle out in front and use your legs, not your wrist, to generate soft touch.",
  },
  {
    id: 2,
    name: "Triangle Dink Drill",
    description:
      "Dink to three target zones (left, center, right) in sequence, training placement variety.",
    howTo:
      "Place three markers across the kitchen from your partner. Dink to each target in order: left, center, right, then repeat. Your partner does the same back to you.",
    skillLevel: "intermediate",
    focusArea: "dinking",
    players: 2,
    duration: 10,
    tip: "Focus on changing the angle with your paddle face, not big arm swings. Small adjustments create big placement changes.",
  },
  {
    id: 3,
    name: "Dink Rally Scoring",
    description:
      "Play competitive dink rallies to 11 points — forces patience and removes the temptation to attack.",
    howTo:
      "Both players at the kitchen line. Rally dinks using rally scoring (point on every serve). The ball must bounce in the kitchen to count. First to 11, win by 2.",
    skillLevel: "intermediate",
    focusArea: "dinking",
    players: 2,
    duration: 15,
    tip: "Resist the urge to speed up. The player who stays patient and makes fewer errors wins dink battles.",
  },
  {
    id: 4,
    name: "Dead Dink Attack",
    description:
      "Practice recognizing and punishing a short, high dink — and defending against the attack.",
    howTo:
      "Dink back and forth normally. Randomly, one player intentionally pops a dink up high. The other player attacks it. The original player must then defend or reset. Alternate roles.",
    skillLevel: "advanced",
    focusArea: "dinking",
    players: 2,
    duration: 10,
    tip: "Watch for a ball above the net height — that's your green light to attack. On defense, get your paddle low and absorb the pace.",
  },
  {
    id: 5,
    name: "Dink to Target",
    description:
      "Place cones in the kitchen and practice hitting dinks to specific zones for pinpoint accuracy.",
    howTo:
      "Set up 2-3 cones or targets in the kitchen. From across the net, feed yourself balls and dink toward each target. Track how many you land within a paddle-length of each cone.",
    skillLevel: "beginner",
    focusArea: "dinking",
    players: 1,
    duration: 10,
    tip: "Start close to the net and gradually move back as your accuracy improves.",
  },

  // SERVING
  {
    id: 6,
    name: "Serve to Zones",
    description:
      "Target specific court zones with your serve to build placement accuracy.",
    howTo:
      "Divide the service box into three zones: deep left, deep center, deep right. Hit 10 serves to each zone. Track your hit rate per zone.",
    skillLevel: "beginner",
    focusArea: "serving",
    players: 1,
    duration: 10,
    tip: "A deep serve to the backhand corner is the most effective placement against most recreational players.",
  },
  {
    id: 7,
    name: "10-in-a-Row Challenge",
    description:
      "Land 10 consecutive serves in a target zone — restart your count on any miss.",
    howTo:
      "Pick a specific target area (e.g. deep backhand). Serve repeatedly, counting consecutive makes. If you miss, start over at zero. Goal: reach 10 without a miss.",
    skillLevel: "intermediate",
    focusArea: "serving",
    players: 1,
    duration: 10,
    tip: "This drill builds pressure tolerance. When you're at 8 or 9, you'll feel the same nerves as a real game.",
  },
  {
    id: 8,
    name: "Spin Serve Variations",
    description:
      "Alternate between flat, topspin, and slice serves to build a versatile serving arsenal.",
    howTo:
      "Hit 5 flat serves, then 5 topspin, then 5 slice, all to the same target. Focus on consistent ball toss and contact point for each spin type.",
    skillLevel: "advanced",
    focusArea: "serving",
    players: 1,
    duration: 10,
    tip: "For topspin, brush up the back of the ball. For slice, brush across the side. Keep your wrist loose.",
  },

  // RETURNS
  {
    id: 9,
    name: "Deep Returns Drill",
    description:
      "Return serves deep, aiming within two feet of the baseline, then immediately advance to the kitchen.",
    howTo:
      "Partner serves from one side. You return every serve as deep as possible, then sprint to the kitchen line. Partner checks if returns land past the service line.",
    skillLevel: "intermediate",
    focusArea: "returns",
    players: 2,
    duration: 10,
    tip: "Make contact out in front and follow through toward your target. A deep return buys you time to get to the kitchen.",
  },
  {
    id: 10,
    name: "Directional Returns",
    description:
      "Aim returns to specific zones: cross-court deep, down the line, or at the server's feet.",
    howTo:
      "Partner serves. Alternate your return placement: 5 cross-court deep, 5 down the line, 5 at their feet as they approach. Call your target before the serve.",
    skillLevel: "intermediate",
    focusArea: "returns",
    players: 2,
    duration: 10,
    tip: "Cross-court is the highest-percentage return — more court to work with and a lower net at the center.",
  },

  // THIRD SHOT DROPS
  {
    id: 11,
    name: "Drop Shot Progression",
    description:
      "Practice third shot drops from progressively further back on the court.",
    howTo:
      "Start at the kitchen line and hit soft drops over the net. Every 5 makes, take one step back. Continue until you're dropping from the baseline. 5 makes at each distance.",
    skillLevel: "beginner",
    focusArea: "third-shot-drops",
    players: 1,
    duration: 10,
    tip: "Use an open paddle face and lift through the ball. Think 'elevator up,' not 'push forward.'",
  },
  {
    id: 12,
    name: "Kitchen Run Drill",
    description:
      "Hit a third shot drop, then advance toward the kitchen — repeat until you reach the line.",
    howTo:
      "Start at the baseline. Partner feeds a ball. Hit a drop, then advance 2-3 steps. Partner returns it. Hit another drop, advance again. Keep going until you reach the kitchen.",
    skillLevel: "intermediate",
    focusArea: "third-shot-drops",
    players: 2,
    duration: 15,
    tip: "Don't rush to the kitchen in one sprint. Take it in stages — each drop buys you a few more steps forward.",
  },
  {
    id: 13,
    name: "Live Drop + Reset",
    description:
      "Partner feeds a hard return — execute a third shot drop, then handle the fourth shot response.",
    howTo:
      "Partner at the kitchen line drives a ball to you at the baseline. Hit a third shot drop. Partner puts the next ball back at you. You must reset or drop again. Play out the point.",
    skillLevel: "intermediate",
    focusArea: "third-shot-drops",
    players: 2,
    duration: 10,
    tip: "The third shot is rarely perfect. Being able to hit a fifth shot drop is just as important.",
  },

  // VOLLEYS
  {
    id: 14,
    name: "Rapid-Fire Volleys",
    description:
      "At the kitchen line, volley back and forth at controlled pace — building reflexes and compact strokes.",
    howTo:
      "Both players at the kitchen line, about 7 feet apart. Volley back and forth without letting the ball bounce. Start at 50% pace and gradually increase. Count your streak.",
    skillLevel: "beginner",
    focusArea: "volleys",
    players: 2,
    duration: 10,
    tip: "Keep your paddle up in the ready position between shots. Small, compact movements — no big backswings.",
  },
  {
    id: 15,
    name: "Volley Placement Control",
    description:
      "Volley at 60-75% power, focusing on redirecting the ball to different spots rather than hitting hard.",
    howTo:
      "Both players at the net. One player hits every volley to the same spot. The other redirects each volley to alternating sides (left, then right). Switch roles every 2 minutes.",
    skillLevel: "intermediate",
    focusArea: "volleys",
    players: 2,
    duration: 10,
    tip: "Use your paddle angle to redirect — turn the face slightly left or right rather than swinging across your body.",
  },
  {
    id: 16,
    name: "Initiator Attack Game",
    description:
      "One player attacks, the other can only counter or reset. Builds both offensive and defensive skills.",
    howTo:
      "Start a dink rally. The designated attacker can speed up any ball; the defender can only block, reset, or counter-punch (no attacks). Play to 5 points, then switch roles.",
    skillLevel: "advanced",
    focusArea: "volleys",
    players: 2,
    duration: 15,
    tip: "Attackers: only speed up balls above the net. Defenders: absorb pace with a loose grip and push the ball down into the kitchen.",
  },

  // TRANSITION
  {
    id: 17,
    name: "Three and Go",
    description:
      "From the transition zone, hit three reset shots before advancing to the kitchen line.",
    howTo:
      "Start in no-man's-land (between baseline and kitchen). Partner drives balls at you. Hit three soft resets into the kitchen. After the third, advance to the kitchen line and play out the point.",
    skillLevel: "intermediate",
    focusArea: "transition",
    players: 2,
    duration: 10,
    tip: "The transition zone is where most points are lost. Stay patient — three good resets is better than one risky sprint.",
  },
  {
    id: 18,
    name: "Drive and Drop",
    description:
      "Drive a deep ball, then follow with a drop shot to advance to the net in two stages.",
    howTo:
      "Start at baseline. Drive the first ball hard and deep. On the response, hit a drop shot and advance. Play out the point from wherever you end up.",
    skillLevel: "advanced",
    focusArea: "transition",
    players: 2,
    duration: 15,
    tip: "The drive keeps your opponent back. The drop lets you move up. Mixing the two makes you unpredictable.",
  },
  {
    id: 19,
    name: "Doubles Transition Drill",
    description:
      "Both partners work their way from the baseline to the kitchen together, moving as a unit.",
    howTo:
      "Both players start at the baseline. One team feeds to the other. The receiving team must advance to the kitchen together, using drops and resets. Focus on moving in sync.",
    skillLevel: "intermediate",
    focusArea: "transition",
    players: 4,
    duration: 15,
    tip: "Stay within one step of your partner — a gap between you is an easy target for your opponents.",
  },

  // GROUNDSTROKES
  {
    id: 20,
    name: "Cross-Court Rally",
    description:
      "Rally groundstrokes diagonally with a partner, focusing on depth and consistency.",
    howTo:
      "Each player stays on one diagonal half. Hit groundstrokes back and forth cross-court. Play to 21 using rally scoring — ball must land past the kitchen to count.",
    skillLevel: "beginner",
    focusArea: "groundstrokes",
    players: 2,
    duration: 15,
    tip: "Aim two feet inside the sideline for margin. Consistency beats power every time at the recreational level.",
  },
  {
    id: 21,
    name: "Target Drives",
    description:
      "Hit forehand and backhand drives toward cones placed deep in the court for accuracy.",
    howTo:
      "Place cones near the baseline corners. From mid-court, hit alternating forehand and backhand drives toward the cones. Track hits per 10 attempts.",
    skillLevel: "intermediate",
    focusArea: "groundstrokes",
    players: 1,
    duration: 10,
    tip: "Stay low and drive through the ball. Contact point should be slightly in front of your body.",
  },

  // FOOTWORK
  {
    id: 22,
    name: "Lateral Shuffle Drill",
    description:
      "Shuffle between two markers to build side-to-side speed and defensive court coverage.",
    howTo:
      "Place two markers 10 feet apart. Start in an athletic stance. Shuffle laterally to one marker, touch it, shuffle back. Do 10 reps as fast as possible. Rest 30 seconds. Repeat 3 sets.",
    skillLevel: "all",
    focusArea: "footwork",
    players: 1,
    duration: 5,
    tip: "Stay low with knees bent. Never cross your feet — always shuffle. Quick, choppy steps are faster than long strides.",
  },
  {
    id: 23,
    name: "Split-Step Timing",
    description:
      "Practice the split-step hop that prepares you to move in any direction after your opponent hits.",
    howTo:
      "Partner hits balls to random spots. Before each hit, perform a split-step (small hop landing on both feet). React and move to the ball. Focus on timing the hop to your opponent's contact.",
    skillLevel: "beginner",
    focusArea: "footwork",
    players: 2,
    duration: 10,
    tip: "Land your split-step exactly as your opponent makes contact. This loads your legs like springs for explosive movement.",
  },
  {
    id: 24,
    name: "Serve and Advance Footwork",
    description:
      "Combine serve practice with the footwork pattern of advancing to the kitchen line.",
    howTo:
      "Serve, then immediately perform split-step hops advancing toward the kitchen. Stop in the transition zone, simulate a third shot, then continue to the kitchen. 10 reps each side.",
    skillLevel: "intermediate",
    focusArea: "footwork",
    players: 1,
    duration: 10,
    tip: "The serving team's job is to get to the kitchen. Practice the footwork pattern until it's automatic.",
  },

  // DEFENSE
  {
    id: 25,
    name: "Reset and Defend",
    description:
      "Partner drives hard at you — practice absorbing pace and softly resetting into the kitchen.",
    howTo:
      "Stand at the kitchen line. Partner stands at mid-court and drives balls at your body and feet. Reset each ball softly into the kitchen. Focus on loose grip and absorbing pace.",
    skillLevel: "intermediate",
    focusArea: "defense",
    players: 2,
    duration: 10,
    tip: "Loosen your grip to about 3/10 pressure. A tight grip reflects pace; a loose grip absorbs it.",
  },
  {
    id: 26,
    name: "Body Shot Defense",
    description:
      "Practice defending against balls hit directly at your body — the hardest shot to handle.",
    howTo:
      "Partner aims drives at your chest and hips from 14 feet away. Practice turning your paddle to block and redirect. Alternate forehand and backhand blocks. 20 reps each side.",
    skillLevel: "advanced",
    focusArea: "defense",
    players: 2,
    duration: 10,
    tip: "Default to your backhand for body shots — it covers more of your center. Step slightly to one side to create space.",
  },

  // LOBS & OVERHEADS
  {
    id: 27,
    name: "Overhead Smash Practice",
    description:
      "Partner feeds lobs while you practice overhead smashes with placement and power.",
    howTo:
      "Partner at the kitchen line hits high lobs to you. Move your feet to get behind the ball, then hit an overhead smash. Aim for specific zones. Partner tries to defend. 10 reps each.",
    skillLevel: "intermediate",
    focusArea: "lobs",
    players: 2,
    duration: 10,
    tip: "Point at the ball with your non-paddle hand to track it. Your feet should be set before you swing.",
  },
  {
    id: 28,
    name: "Lob Recovery Drill",
    description:
      "Dink normally, then one player lobs unexpectedly — the other must retreat, recover, and reset.",
    howTo:
      "Start a dink rally. At any point, either player can throw a lob. The lobbed player must turn, sprint back, return the ball, and work back to the kitchen. Play out the point.",
    skillLevel: "advanced",
    focusArea: "lobs",
    players: 2,
    duration: 15,
    tip: "When lobbed, turn sideways and run — don't backpedal. Get behind the ball so you can hit it moving forward.",
  },

  // GAME SIMULATION
  {
    id: 29,
    name: "Skinny Singles",
    description:
      "Play singles using only one half of the court — builds precision, stamina, and the full shot arsenal.",
    howTo:
      "Use only the cross-court half of the court (one service box per player). Play standard pickleball rules. Everything must land in the skinny court. First to 11, win by 2.",
    skillLevel: "all",
    focusArea: "game-sim",
    players: 2,
    duration: 20,
    tip: "Skinny singles is the best way to improve quickly. It forces you to hit every shot precisely because there's nowhere to hide.",
  },
  {
    id: 30,
    name: "King of the Court",
    description:
      "Rotating winner-stays format — the winning team stays on while challengers rotate in.",
    howTo:
      "One team is on the 'king' side. Challengers line up on the other side. Play to 3 points. If the king wins, challengers rotate out. If challengers win, they become the new king.",
    skillLevel: "all",
    focusArea: "game-sim",
    players: 4,
    duration: 20,
    tip: "Great for groups of 6-12 players. Keeps everyone engaged and adds competitive pressure.",
  },
];

export interface DrillFilters {
  focusAreas: FocusArea[];
  skillLevel: SkillLevel | "any";
  players: number;
  duration: number; // total session duration in minutes
}

export interface DrillPlan {
  drills: Drill[];
  totalDuration: number;
  focusAreas: FocusArea[];
}

export function generateDrillPlan(filters: DrillFilters): DrillPlan {
  let pool = DRILLS.filter((d) => d.players <= filters.players);

  if (filters.skillLevel !== "any") {
    pool = pool.filter(
      (d) => d.skillLevel === filters.skillLevel || d.skillLevel === "all"
    );
  }

  if (filters.focusAreas.length > 0) {
    pool = pool.filter((d) => filters.focusAreas.includes(d.focusArea));
  }

  // Shuffle the pool
  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  // Pick drills that fit within the time budget
  const selected: Drill[] = [];
  let timeLeft = filters.duration;

  for (const drill of shuffled) {
    if (drill.duration <= timeLeft) {
      selected.push(drill);
      timeLeft -= drill.duration;
    }
    if (timeLeft < 5) break;
  }

  // Sort selected by a logical order: warm up dinking first, game sim last
  const order: FocusArea[] = [
    "footwork",
    "dinking",
    "serving",
    "returns",
    "third-shot-drops",
    "groundstrokes",
    "volleys",
    "transition",
    "defense",
    "lobs",
    "game-sim",
  ];
  selected.sort(
    (a, b) => order.indexOf(a.focusArea) - order.indexOf(b.focusArea)
  );

  const totalDuration = selected.reduce((sum, d) => sum + d.duration, 0);
  const focusAreas = [...new Set(selected.map((d) => d.focusArea))];

  return { drills: selected, totalDuration, focusAreas };
}
