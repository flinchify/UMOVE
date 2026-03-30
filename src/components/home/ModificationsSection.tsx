"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

const mods = [
  { title: "Workshops", image: "/images/Work-Shop-1024x768.jpg", alt: "Container workshop" },
  { title: "Ablution Blocks", image: "/images/20ft-Aublution-0011-1024x768.jpg", alt: "Container ablution" },
  { title: "Crib Rooms", image: "/images/Crib-room-scaled-1-768x1024.jpeg", alt: "Container crib room" },
];

export default function ModificationsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
            <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">Modifications</span>
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-umove-navy)] uppercase tracking-tight">
            Sea Container Modifications — We Build It All
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Our Henderson workshop customises containers for any industry. Electrical fit-outs, plumbing, insulation, windows, doors, and more.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {mods.map((m, i) => (
            <AnimatedSection key={m.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden h-96 card-hover">
                <Image src={m.image} alt={m.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-umove-navy)] to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-2xl uppercase">{m.title}</h3>
                  <div className="mt-2 h-0.5 w-0 group-hover:w-16 bg-[var(--color-umove-red)] transition-all duration-500" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Marquee of modification types */}
        <div className="mt-12 py-4 border-y border-gray-200 overflow-hidden">
          <div className="animate-marquee-slow flex whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                {["Workshops", "Offices", "Hospitality", "Switchrooms", "Ablution Blocks", "Lunch Rooms", "First Aid", "Custom Builds", "Container Living", "Tool Stores", "Hydration Stations", "Dangerous Goods"].map(t => (
                  <span key={`${i}-${t}`} className="text-[var(--color-umove-navy)] font-bold text-sm uppercase tracking-wider flex items-center gap-8">
                    {t}
                    <span className="text-gray-300">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/modifications" className="inline-flex items-center gap-2 bg-[var(--color-umove-red)] text-white font-bold px-8 py-4 uppercase text-sm tracking-wider btn-fill hover:shadow-lg transition-shadow">
            View all modifications
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
