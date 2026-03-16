// Pickleball Calorie Burn Calculator – data & logic

export type IntensityLevel = "light" | "moderate" | "vigorous" | "tournament";
export type PlayType =
  | "doubles_casual"
  | "doubles_competitive"
  | "singles_casual"
  | "singles_competitive"
  | "drilling";

export interface IntensityOption {
  value: IntensityLevel;
  label: string;
  met: number;
  description: string;
}

export interface PlayTypeOption {
  value: PlayType;
  label: string;
  metAdjust: number; // added to base MET
}

export interface ComparisonSport {
  label: string;
  met: number;
  emoji: string;
}

export interface CalorieResult {
  totalCalories: number;
  caloriesPerMinute: number;
  met: number;
  weightKg: number;
  durationMin: number;
  comparisons: { label: string; emoji: string; calories: number }[];
  equivalents: { label: string; value: string }[];
}

export const INTENSITY_LEVELS: IntensityOption[] = [
  {
    value: "light",
    label: "Light / Casual",
    met: 4.5,
    description: "Casual rallies, warming up, teaching",
  },
  {
    value: "moderate",
    label: "Moderate / Recreational",
    met: 5.5,
    description: "Typical social doubles, rec league play",
  },
  {
    value: "vigorous",
    label: "Vigorous / Competitive",
    met: 6.5,
    description: "Fast-paced games, competitive play",
  },
  {
    value: "tournament",
    label: "Tournament / Max Effort",
    met: 7.5,
    description: "Tournament singles, all-out intensity",
  },
];

export const PLAY_TYPES: PlayTypeOption[] = [
  { value: "doubles_casual", label: "Doubles (Casual)", metAdjust: 0 },
  {
    value: "doubles_competitive",
    label: "Doubles (Competitive)",
    metAdjust: 0.5,
  },
  { value: "singles_casual", label: "Singles (Casual)", metAdjust: 0.8 },
  {
    value: "singles_competitive",
    label: "Singles (Competitive)",
    metAdjust: 1.5,
  },
  { value: "drilling", label: "Drilling / Practice", metAdjust: -0.5 },
];

export const COMPARISON_SPORTS: ComparisonSport[] = [
  { label: "Tennis (Singles)", met: 8.0, emoji: "🎾" },
  { label: "Tennis (Doubles)", met: 6.0, emoji: "🎾" },
  { label: "Walking (3 mph)", met: 3.5, emoji: "🚶" },
  { label: "Brisk Walking (4 mph)", met: 5.0, emoji: "🚶‍♂️" },
  { label: "Jogging", met: 7.0, emoji: "🏃" },
  { label: "Cycling (moderate)", met: 8.0, emoji: "🚴" },
  { label: "Swimming (moderate)", met: 5.8, emoji: "🏊" },
  { label: "Golf (walking)", met: 4.3, emoji: "⛳" },
  { label: "Badminton", met: 5.5, emoji: "🏸" },
  { label: "Table Tennis", met: 4.0, emoji: "🏓" },
];

export const WEIGHT_PRESETS_LBS = [120, 140, 160, 180, 200, 220, 240];
export const DURATION_PRESETS_MIN = [30, 45, 60, 90, 120];

function lbsToKg(lbs: number): number {
  return lbs / 2.205;
}

/** Scientific formula: cal/min = (MET × 3.5 × weightKg) / 200 */
function caloriesPerMinute(met: number, weightKg: number): number {
  return (met * 3.5 * weightKg) / 200;
}

export function calculateCalories(
  weightLbs: number,
  durationMin: number,
  intensity: IntensityLevel,
  playType: PlayType
): CalorieResult {
  const baseIntensity = INTENSITY_LEVELS.find((i) => i.value === intensity)!;
  const typeOption = PLAY_TYPES.find((p) => p.value === playType)!;
  const effectiveMet = Math.max(2, baseIntensity.met + typeOption.metAdjust);
  const weightKg = lbsToKg(weightLbs);

  const calPerMin = caloriesPerMinute(effectiveMet, weightKg);
  const totalCalories = Math.round(calPerMin * durationMin);

  // Comparison sports at same weight & duration
  const comparisons = COMPARISON_SPORTS.map((sport) => ({
    label: sport.label,
    emoji: sport.emoji,
    calories: Math.round(caloriesPerMinute(sport.met, weightKg) * durationMin),
  }));

  // Fun equivalents
  const equivalents = [
    {
      label: "Slices of pizza",
      value: (totalCalories / 285).toFixed(1),
    },
    {
      label: "Miles walked",
      value: (totalCalories / 80).toFixed(1),
    },
    {
      label: "Minutes of sitting",
      value: Math.round(
        totalCalories / caloriesPerMinute(1.0, weightKg)
      ).toString(),
    },
  ];

  return {
    totalCalories,
    caloriesPerMinute: Math.round(calPerMin * 10) / 10,
    met: Math.round(effectiveMet * 10) / 10,
    weightKg: Math.round(weightKg * 10) / 10,
    durationMin,
    comparisons,
    equivalents,
  };
}
