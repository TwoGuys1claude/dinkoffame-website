// Pickleball Court Dimensions – data & reference

export interface CourtDimension {
  label: string;
  feet: string;
  meters: string;
  description: string;
}

export interface CourtZone {
  name: string;
  color: string;
  description: string;
}

export const COURT_DIMENSIONS: CourtDimension[] = [
  {
    label: "Overall Court",
    feet: '44\' × 20\'',
    meters: "13.41m × 6.10m",
    description:
      "The total playing surface from baseline to baseline, including all lines. Same dimensions for singles and doubles.",
  },
  {
    label: "Non-Volley Zone (Kitchen)",
    feet: '7\' deep × 20\' wide',
    meters: "2.13m × 6.10m",
    description:
      "Extends 7 feet from the net on each side. Players cannot volley (hit the ball out of the air) while standing in this zone.",
  },
  {
    label: "Service Area (each)",
    feet: '15\' deep × 10\' wide',
    meters: "4.57m × 3.05m",
    description:
      "Behind the kitchen on each side, divided by the centerline into right and left service courts.",
  },
  {
    label: "Net Height (center)",
    feet: '34"',
    meters: "0.86m",
    description:
      "The net sags slightly in the center. Regulation nets are 34 inches at center.",
  },
  {
    label: "Net Height (sidelines)",
    feet: '36"',
    meters: "0.91m",
    description:
      "The net is 36 inches at each sideline post, 2 inches higher than the center.",
  },
  {
    label: "Net Length",
    feet: "21' 9\"",
    meters: "6.63m",
    description:
      "The net extends at least 6 inches past each sideline (20-foot court + overhang on each side).",
  },
  {
    label: "Centerline",
    feet: '15\' long',
    meters: "4.57m",
    description:
      "Divides each service area into right (even) and left (odd) courts. Runs from kitchen line to baseline.",
  },
  {
    label: "Minimum Playing Area",
    feet: '54\' × 24\'',
    meters: "16.46m × 7.32m",
    description:
      "USA Pickleball recommends at least 5 feet of clearance behind each baseline and 2 feet on each side.",
  },
  {
    label: "Recommended Playing Area",
    feet: '64\' × 34\'',
    meters: "19.51m × 10.36m",
    description:
      "For tournament play, 10 feet behind each baseline and 7 feet on each side is preferred.",
  },
  {
    label: "Line Width",
    feet: '2"',
    meters: "5.08cm",
    description:
      "All lines on a pickleball court are 2 inches wide. Lines are part of the court (in-bounds).",
  },
];

export const COURT_ZONES: CourtZone[] = [
  {
    name: "Non-Volley Zone (Kitchen)",
    color: "#22c55e",
    description:
      "The 7-foot zone on each side of the net. You cannot hit volleys while touching this zone or its lines.",
  },
  {
    name: "Right Service Court (Even)",
    color: "#3b82f6",
    description:
      'Also called the "even" court. Serves are made from here when the score is even (0, 2, 4...).',
  },
  {
    name: "Left Service Court (Odd)",
    color: "#8b5cf6",
    description:
      'Also called the "odd" court. Serves are made from here when the score is odd (1, 3, 5...).',
  },
  {
    name: "Baseline",
    color: "#ef4444",
    description:
      "The back line of the court. Servers must stand behind the baseline when serving.",
  },
];

export const TENNIS_COMPARISON = {
  tennisArea: 78 * 36, // 2,808 sq ft (doubles)
  pickleballArea: 44 * 20, // 880 sq ft
  ratio: "About 3.2 tennis courts fit in one pickleball court's area... wait — it's the other way around. About 3.2 pickleball courts fit in one tennis court.",
  perTennis:
    "You can fit up to 4 pickleball courts on a single tennis court with temporary lines and portable nets.",
};

export const SURFACE_TYPES = [
  {
    name: "Concrete",
    pros: "Durable, low maintenance, consistent bounce",
    cons: "Hard on joints, can crack over time",
    best: "Outdoor permanent courts",
  },
  {
    name: "Asphalt",
    pros: "Cost-effective, easy to build",
    cons: "Rougher surface, harder on balls and joints",
    best: "Community outdoor courts",
  },
  {
    name: "Sport Tiles (e.g., SnapSports)",
    pros: "Shock-absorbing, great drainage, low maintenance",
    cons: "Higher initial cost, ball speed changes",
    best: "Indoor and premium outdoor courts",
  },
  {
    name: "Wood (Indoor Gym)",
    pros: "Excellent cushioning, fast play",
    cons: "Only for indoor use, requires maintenance",
    best: "Indoor recreation centers, gyms",
  },
  {
    name: "Acrylic (SportMaster, DecoTurf)",
    pros: "Cushioned, customizable speed, pro-level",
    cons: "Requires professional installation",
    best: "Tournament-grade courts",
  },
];
