import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "40ft Shipping Container Perth | Maximum Capacity | Buy or Hire",
  description: "40ft shipping containers for sale and hire in Perth. Maximum storage capacity for industrial, mining, and large-scale projects. 12.19m x 2.44m x 2.59m. U-Move Australia.",
  alternates: { canonical: "https://u-move.com.au/40ft-container" },
};

export default function FortyFtPage() {
  return (
    <>
      <PageHero title="40ft Container" subtitle="Maximum capacity for large-scale storage, industrial use, and container conversion projects." image="/images/IMG_7419-1024x768.jpg" imageAlt="40ft shipping container Perth" breadcrumbs={[{ label: "Container Sizes", href: "/container-sizes" }, { label: "40ft Container", href: "/40ft-container" }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <Image src="/images/40ft-1024x1024.png" alt="40ft shipping container dimensions" width={500} height={500} className="mx-auto" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="font-display text-3xl md:text-4xl text-[var(--color-umove-navy)] uppercase">40 Foot Shipping Container</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">Our largest standard container. The 40ft provides massive capacity for warehouse overflow, industrial applications, mining operations, or ambitious conversion projects like offices, cafes, and container homes.</p>
              <div className="mt-6 bg-[var(--color-umove-cream)] rounded-xl p-6">
                <h3 className="font-bold text-[var(--color-umove-navy)] mb-3">Dimensions</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><div className="text-gray-400 text-xs uppercase tracking-wider mb-1">External (L x W x H)</div><div className="font-bold text-[var(--color-umove-navy)]">12.19m x 2.44m x 2.59m</div></div>
                  <div><div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Internal (L x W x H)</div><div className="font-bold text-[var(--color-umove-navy)]">12.01m x 2.35m x 2.38m</div></div>
                </div>
              </div>
              <h3 className="mt-6 font-bold text-[var(--color-umove-navy)]">Ideal for:</h3>
              <ul className="mt-2 space-y-2">{["Large-scale warehouse and stock storage", "Mining crib rooms and tool stores", "Container homes and office conversions", "Multi-vehicle storage (2-3 cars)", "Container cafes and retail spaces", "Available in standard and high cube"].map(i => (<li key={i} className="flex items-center gap-2 text-sm text-gray-700"><div className="w-1.5 h-1.5 bg-[var(--color-umove-red)] rounded-full flex-shrink-0" />{i}</li>))}</ul>
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
