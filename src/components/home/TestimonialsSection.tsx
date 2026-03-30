"use client";

import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  { name: "Mark R.", role: "Mining Supervisor, Pilbara", date: "February 2026", text: "U-Move supplied crib rooms and tool stores to our mine site. Delivered on time, built solid, and the team was great to deal with. Already ordered more for the next shutdown.", rating: 5 },
  { name: "Karen L.", role: "Homeowner, Fremantle", date: "January 2026", text: "Used U-Move for our house move. Container arrived on time, we packed over the weekend, they stored it for 2 months. Way cheaper and easier than a traditional storage unit. Highly recommend.", rating: 5 },
  { name: "Tom B.", role: "Site Manager, Henderson", date: "March 2026", text: "We've hired from U-Move for 3 years straight. Containers are always clean, secure, and delivered fast. The office team is helpful and pricing is competitive. Won't go anywhere else.", rating: 5 },
  { name: "Angela S.", role: "Small Business Owner", date: "December 2025", text: "Had a 20ft container modified into a workshop for my business. Power, lighting, shelving — all done in-house at their Henderson yard. Professional result and great value for money.", rating: 5 },
  { name: "Craig D.", role: "Builder, Rockingham", date: "February 2026", text: "Needed a 40ft on site for tool storage during a build. U-Move had it delivered within 3 days. Container was in great nick, lockbox fitted, and the driver was spot on with placement.", rating: 5 },
  { name: "Jenny P.", role: "Homeowner, Mandurah", date: "January 2026", text: "Stored our furniture while renovating. The whole process was smooth — delivery, pickup, and storage. Our belongings were perfectly safe. Great service from start to finish.", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
            <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">Reviews</span>
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-umove-navy)] uppercase tracking-tight">
            What Our Customers Say
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-[var(--color-umove-cream)] rounded-2xl p-6 h-full flex flex-col card-hover">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[var(--color-umove-red)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="font-bold text-[var(--color-umove-navy)] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                  <div className="text-xs text-gray-300 mt-0.5">{t.date}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
