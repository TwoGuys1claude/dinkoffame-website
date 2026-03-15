export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  slug: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    title: "What is Stacking in Pickleball? A Complete Guide",
    description:
      "Learn everything about stacking in pickleball doubles, including when to stack, left vs right formations, and common mistakes to avoid.",
    date: "2026-03-01",
    author: "Dink of Fame",
    tags: ["strategy", "doubles", "beginner"],
    image: "/logo.png",
    slug: "what-is-stacking-in-pickleball",
  },
  {
    title: "Pickleball Scoring Rules Explained for Beginners",
    description:
      "Confused by pickleball scoring? This beginner-friendly guide breaks down singles and doubles scoring, server numbers, and the 0-0-2 start rule.",
    date: "2026-02-28",
    author: "Dink of Fame",
    tags: ["rules", "beginner", "scoring"],
    image: "/logo.png",
    slug: "pickleball-scoring-rules-explained",
  },
  {
    title: "10 Pickleball Drills to Improve Your Dink Game",
    description:
      "Master the dink shot with these 10 drills for every skill level. From solo wall drills to competitive cross-court challenges.",
    date: "2026-02-25",
    author: "Dink of Fame",
    tags: ["drills", "dinking", "improvement"],
    image: "/logo.png",
    slug: "pickleball-drills-improve-dink-game",
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
