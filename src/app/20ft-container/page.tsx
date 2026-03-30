import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "20ft Shipping Container Perth | Most Popular Size | Buy or Hire",
  description: "20ft shipping containers for sale and hire in Perth. The most popular size for storage, workshops, and conversions. 6.05m x 2.44m x 2.59m. U-Move Australia.",
  alternates: { canonical: "https://u-move.com.au/20ft-container" },
};

export default function TwentyFtPage() {
  return (
    <>
      <PageHero title="20ft Container" subtitle="Our most popular container size. Perfect for household storage, business, workshops, and conversions." image="/images/20ft-Standard-Tall.jpg" imageAlt="20ft shipping container Perth" breadcrumbs={[{ label: "Container Sizes", href: "/container-sizes" }, { label: "20ft Container", href: "/20ft-container" }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <Image src="/images/20ft-1024x1024.png" alt="20ft shipping container dimensions" width={500} height={500} className="mx-auto" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="inline-block bg-[var(--color-umove-red)] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4">Most Popular</div>
              <h2 className="font-display text-3xl md:text-4xl text-[var(--color-umove-navy)] uppercase">20 Foot Shipping Container</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">The 20ft container is our best seller. It comfortably fits the contents of a 2-3 bedroom house, holds approximately 10 standard pallets, and is the ideal starting point for workshop or office conversions.</p>
              <div className="mt-6 bg-[var(--color-umove-cream)] rounded-xl p-6">
                <h3 className="font-bold text-[var(--color-umove-navy)] mb-3">Dimensions</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><div className="text-gray-400 text-xs uppercase tracking-wider mb-1">External (L x W x H)</div><div className="font-bold text-[var(--color-umove-navy)]">6.05m x 2.44m x 2.59m</div></div>
                  <div><div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Internal (L x W x H)</div><div className="font-bold text-[var(--color-umove-navy)]">5.90m x 2.35m x 2.38m</div></div>
                </div>
              </div>
              <h3 className="mt-6 font-bold text-[var(--color-umove-navy)]">What fits in a 20ft container?</h3>
              <ul className="mt-2 space-y-2">{["Contents of a 2-3 bedroom house", "10 standard pallets", "1 standard car or 2 motorcycles", "1,200 archive boxes", "Workshop with workbench and tools"].map(i => (<li key={i} className="flex items-center gap-2 text-sm text-gray-700"><div className="w-1.5 h-1.5 bg-[var(--color-umove-red)] rounded-full flex-shrink-0" />{i}</li>))}</ul>
              <div className="mt-8 flex gap-4">
                <QuoteButton className="px-8 py-4">Get Best Price</QuoteButton>
                <Link href="/container-sizes" className="border-2 border-gray-200 text-gray-700 font-bold px-8 py-4 uppercase text-sm tracking-wider hover:border-[var(--color-umove-red)] hover:text-[var(--color-umove-red)] transition-all">Compare Sizes</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
