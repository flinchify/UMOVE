"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function AuthoritySection() {
  return (
    <section className="py-16 bg-[var(--color-umove-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-[var(--color-umove-navy)] uppercase">Industry Standards & Compliance</h2>
          <p className="mt-2 text-gray-500 text-sm">Our operations and modifications meet Australian industry standards. Updated March 2026.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "ISO 6346 Compliant",
              desc: "All shipping containers conform to the International Organisation for Standardisation (ISO) 6346 standard for container identification and marking.",
              source: "ISO 6346:2022",
            },
            {
              title: "AS1940 DG Storage",
              desc: "Our dangerous goods containers are built to comply with AS1940 — the Australian Standard for the Storage and Handling of Flammable and Combustible Liquids.",
              source: "Standards Australia",
            },
            {
              title: "National Construction Code",
              desc: "Container modifications for habitable use (offices, homes) are designed to meet NCC requirements as applicable under Western Australian building regulations.",
              source: "Australian Building Codes Board",
            },
            {
              title: "WorkSafe WA Aligned",
              desc: "Mining and industrial container solutions are designed with consideration for WorkSafe WA workplace health and safety requirements for remote site infrastructure.",
              source: "WorkSafe WA",
            },
          ].map((item) => (
            <AnimatedSection key={item.title}>
              <div className="bg-white rounded-xl p-5 h-full shadow-sm border border-gray-100">
                <h3 className="font-bold text-[var(--color-umove-navy)] text-sm">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                <div className="mt-3 text-[10px] text-gray-400 uppercase tracking-wider">Ref: {item.source}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
