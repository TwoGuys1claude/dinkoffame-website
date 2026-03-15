import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group p-6 bg-card border border-border/40 rounded-2xl hover:border-primary/30 transition-all card-shine"
    >
      <div className="flex items-center gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-primary/10 rounded-full text-[10px] font-bold text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-4">
        {post.description}
      </p>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>{post.author}</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
