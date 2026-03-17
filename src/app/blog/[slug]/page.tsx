import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: SITE_NAME,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const mdxModules: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "what-is-stacking-in-pickleball": () =>
    import("@/content/blog/what-is-stacking-in-pickleball.mdx"),
  "pickleball-scoring-rules-explained": () =>
    import("@/content/blog/pickleball-scoring-rules-explained.mdx"),
  "pickleball-drills-improve-dink-game": () =>
    import("@/content/blog/pickleball-drills-improve-dink-game.mdx"),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const loadModule = mdxModules[slug];
  if (!loadModule) notFound();

  const { default: Content } = await loadModule();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <JsonLd data={buildArticleSchema(post)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ])}
      />

      <main className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          {/* Post header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-primary/10 rounded-full text-[10px] font-bold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>

          {/* MDX content */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-primary prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
            <Content />
          </article>

          {/* CTA */}
          <div className="mt-16 p-8 bg-card border border-border/40 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">
              Ready to track your pickleball journey?
            </h3>
            <p className="text-sm text-muted mb-6">
              Join Dink of Fame to log matches, earn XP, and build your
              reputation on the court.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#waitlist"
                className="px-6 py-3 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
              >
                Join the Waitlist
              </Link>
              <Link
                href="/tools/pickleball-iq-test"
                className="px-6 py-3 text-sm font-semibold text-muted border border-border rounded-full hover:text-foreground hover:border-primary/40 transition-all"
              >
                Take the IQ Test
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
