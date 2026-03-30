import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import PageHero from "@/components/PageHero";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://u-move.com.au/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, images: [{ url: post.image }] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://u-move.com.au${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "U-Move Australia" },
    publisher: {
      "@type": "Organization",
      name: "U-Move Australia",
      logo: { "@type": "ImageObject", url: "https://u-move.com.au/images/U-Move-logo-copy.png" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageHero
        title={post.title}
        subtitle={`${new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })} · ${post.readTime}`}
        image={post.image}
        imageAlt={post.imageAlt}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]}
      />
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-gray prose-headings:text-gray-900 prose-a:text-[var(--color-umove-red)]">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("### ")) return <h3 key={i}>{line.replace("### ", "")}</h3>;
            if (line.startsWith("## ")) return <h2 key={i}>{line.replace("## ", "")}</h2>;
            if (line.startsWith("- **")) return <li key={i} dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
            if (line.startsWith("- ")) return <li key={i}>{line.replace("- ", "")}</li>;
            if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ") || line.startsWith("5. ")) return <li key={i} dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
            if (line.startsWith("| ")) return null;
            if (line.startsWith("**") && line.endsWith("**")) return <p key={i}><strong>{line.replace(/\*\*/g, "")}</strong></p>;
            if (line.trim() === "") return null;
            return <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
          })}
        </div>
        <div className="max-w-3xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-[var(--color-umove-red)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
