import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { BlogCard } from "@/components/blog/BlogCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: `Pickleball Tips & Guides | ${SITE_NAME}`,
  description:
    "Learn pickleball strategy, rules, drills, and tips from the Dink of Fame community. Level up your game with our expert guides.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Pickleball Tips & Guides | ${SITE_NAME}`,
    description:
      "Learn pickleball strategy, rules, drills, and tips. Level up your game with our expert guides.",
    type: "website",
    siteName: SITE_NAME,
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <JsonLd
        data={buildWebPageSchema(
          "Pickleball Tips & Guides",
          "Learn pickleball strategy, rules, drills, and tips.",
          `${SITE_URL}/blog`
        )}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
        ])}
      />

      <main className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Blog
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Pickleball Tips &{" "}
              <span className="text-gradient">Guides</span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              Strategy, rules, drills, and everything you need to level up your
              pickleball game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
