import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "Short-Term Storage Perth | Flexible Container Storage from 1 Week",
  description: "Need storage for a few weeks or months? U-Move offers short-term container storage in Perth from just 1 week. Flexible, affordable, delivered to your door. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/short-term-storage" },
};

export default function ShortTermStoragePage() {
  return (
    <>
      <PageHero title="Short-Term Storage" subtitle="Flexible container storage from as little as 1 week. Perfect for moves, renovations, and temporary overflow." image="/images/Mods-3566-1024x768.jpg" imageAlt="Short-term container storage Perth" breadcrumbs={[{ label: "Self-Storage", href: "/self-storage" }, { label: "Short-Term Storage", href: "/short-term-storage" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">Short-term storage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Storage that flexes with your schedule</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">Need storage for just a few weeks or months? U-Move offers short-term storage in Perth that&apos;s flexible, affordable, and completely hassle-free. We deliver a secure container to your door, you pack at your pace, and we store it for as long as you need.</p>
              <ul className="mt-6 space-y-3">
                {["No minimum contract — store from 1 week", "10ft, 20ft, and 40ft containers available", "Delivered to your door across Perth metro", "Wind, water, and vermin-proof", "24/7 monitored Henderson facility", "Quick delivery turnaround (2-3 business days)"].map(item => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[var(--color-umove-red)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/IMG_2795-1024x736.png" alt="U-Move short-term storage facility Perth" width={1024} height={736} className="w-full h-auto" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--color-umove-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">When You Need Short-Term Storage</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Moving House", desc: "Gap between settlement dates? Pack before you move, store until your new place is ready." },
              { title: "Home Renovations", desc: "Protect your furniture and belongings while builders work. Container stays on your property." },
              { title: "Decluttering for Sale", desc: "Clear the house for open inspections. Store furniture off-site and present a clean, spacious home." },
              { title: "Seasonal Business Stock", desc: "Scale storage up for busy periods and down when demand drops. No warehouse lease needed." },
              { title: "Event Equipment", desc: "Store marquees, staging, audio gear, and supplies between events." },
              { title: "Emergency Storage", desc: "Insurance claim, flood, fire? We deliver fast for urgent temporary storage needs." },
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">Need short-term storage?</h2>
          <p className="mt-4 text-white/80 text-lg">Flexible terms, fast delivery. Get a free quote today.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton variant="white" className="px-8 py-4">Get a Free Quote</QuoteButton>
            <a href="tel:0894598888" className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-all">(08) 9459 8888</a>
          </div>
        </div>
      </section>
    </>
  );
}
