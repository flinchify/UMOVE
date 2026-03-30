import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10ft Shipping Container Perth | Buy or Hire 10ft Containers",
  description: "10ft shipping containers for sale and hire in Perth. Compact storage for tight spaces. 3.10m x 2.44m x 2.59m. New and used. Fast delivery across WA. U-Move Australia.",
  alternates: { canonical: "https://u-move.com.au/10ft-container" },
};

export default function TenFtPage() {
  return (
    <>
      <PageHero title="10ft Container" subtitle="Compact, versatile shipping containers for tight spaces. Available for sale and hire." image="/images/Qualiity_containers_to_buy-scaled-1-768x1024.jpg" imageAlt="10ft shipping containers Perth" breadcrumbs={[{ label: "Container Sizes", href: "/container-sizes" }, { label: "10ft Container", href: "/10ft-container" }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <Image src="/images/10ft-1024x1024.png" alt="10ft shipping container dimensions" width={500} height={500} className="mx-auto" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="font-display text-3xl md:text-4xl text-[var(--color-umove-navy)] uppercase">10 Foot Shipping Container</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">The 10ft container is our most compact option. Ideal for residential backyards, small storage needs, garden sheds, or tight commercial spaces where a full-size container won&apos;t fit.</p>
              <div className="mt-6 bg-[var(--color-umove-cream)] rounded-xl p-6">
                <h3 className="font-bold text-[var(--color-umove-navy)] mb-3">Dimensions</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><div className="text-gray-400 text-xs uppercase tracking-wider mb-1">External (L x W x H)</div><div className="font-bold text-[var(--color-umove-navy)]">3.10m x 2.44m x 2.59m</div></div>
                  <div><div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Internal (L x W x H)</div><div className="font-bold text-[var(--color-umove-navy)]">2.98m x 2.35m x 2.38m</div></div>
                </div>
              </div>
              <ul className="mt-6 space-y-2">{["Wind, water, and vermin-proof", "Heavy-duty lockbox fitted", "Forklift pockets for easy transport", "Available new and used", "Delivery across Perth & WA"].map(i => (<li key={i} className="flex items-center gap-2 text-sm text-gray-700"><div className="w-1.5 h-1.5 bg-[var(--color-umove-red)] rounded-full flex-shrink-0" />{i}</li>))}</ul>
              <div className="mt-8 flex gap-4">
                <Link href="/contact" className="bg-[var(--color-umove-red)] text-white font-bold px-8 py-4 uppercase text-sm tracking-wider btn-fill hover:shadow-lg transition-shadow">Get Best Price</Link>
                <Link href="/container-sizes" className="border-2 border-gray-200 text-gray-700 font-bold px-8 py-4 uppercase text-sm tracking-wider hover:border-[var(--color-umove-red)] hover:text-[var(--color-umove-red)] transition-all">Compare Sizes</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
