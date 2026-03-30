import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Long-Term Storage Perth | Up to 50% Cheaper Than Self-Storage",
  description: "Long-term container storage in Perth up to 50% cheaper than traditional self-storage. Secure, weatherproof, 24/7 monitored. Vehicle and boat storage available. U-Move Australia.",
  alternates: { canonical: "https://u-move.com.au/long-term-storage" },
};

export default function LongTermStoragePage() {
  return (
    <>
      <PageHero title="Long-Term Storage" subtitle="Safe, affordable storage for months or years. Up to 50% cheaper than traditional self-storage facilities." image="/images/shipping-containers-pros-cons.jpg" imageAlt="Long-term container storage facility Perth" breadcrumbs={[{ label: "Self-Storage", href: "/self-storage" }, { label: "Long-Term Storage", href: "/long-term-storage" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">Long-term storage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Storage you can set and forget</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">Looking for safe, affordable storage for months or years? U-Move offers long-term container storage in Perth that keeps your belongings secure, protected, and accessible for as long as you need.</p>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Why long-term container storage?</h3>
              <ul className="mt-4 space-y-3">
                {["Up to 50% cheaper than traditional storage facilities", "On-site or off-site at our 24/7 monitored facility", "All containers are lockable, sealed, and weatherproof", "Durable — dust, water, and vermin-proof for the long haul", "Vehicle, boat, and classic car storage available", "We deliver, you pack, we store — simple retrieval when needed"].map(item => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[var(--color-umove-red)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/IMG_1486-1024x565.jpg" alt="Secure long-term container storage Henderson Perth" width={1024} height={565} className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image src="/images/classic_car.jpg" alt="Classic car stored in shipping container long-term" width={800} height={600} className="w-full h-auto" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--color-umove-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ideal For Long-Term Storage</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Overseas Relocations", desc: "Store your household while you're abroad. Access when you return." },
              { title: "Downsizing", desc: "Keep furniture and valuables you're not ready to part with." },
              { title: "Estate Storage", desc: "Secure storage during property transitions and probate." },
              { title: "Business Archives", desc: "Documents, equipment, and stock that need long-term safekeeping." },
              { title: "Vehicle & Boat Storage", desc: "Weatherproof containers protect cars, boats, and recreational vehicles." },
              { title: "Investment Property Staging", desc: "Store furniture between tenants or property makeovers." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Need long-term storage?</h2>
          <p className="mt-4 text-white/80 text-lg">Save up to 50% vs traditional storage. Get a free quote today.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[var(--color-umove-red)] font-bold px-8 py-4 hover:bg-gray-100 transition-all">Get a Free Quote</Link>
            <a href="tel:0894598888" className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-all">(08) 9459 8888</a>
          </div>
        </div>
      </section>
    </>
  );
}
