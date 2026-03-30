import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Shipping Container Guides, Tips & News Perth",
  description: "Expert guides on shipping container storage, hire, sales, and modifications in Perth. Tips for mining containers, moving house, and saving on storage costs.",
  alternates: { canonical: "https://u-move.com.au/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Guides, tips, and insights on shipping container storage, hire, and modifications in Perth."
        image="/images/shipping-containers-pros-cons.jpg"
        imageAlt="Shipping containers - U-Move Australia blog"
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-56 overflow-hidden">
                      <Image src={post.image} alt={post.imageAlt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-[var(--color-umove-red)] text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span>{new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-[var(--color-umove-red)] transition-colors leading-snug">{post.title}</h2>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.description}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
