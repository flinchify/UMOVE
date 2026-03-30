"use client";

import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  { name: "James T.", role: "Mining Operations Manager", text: "U-Move delivered 5 modified crib rooms to our Pilbara site in under 3 weeks. Quality build, on time, competitive pricing. Will use again for our next shutdown.", rating: 5 },
  { name: "Sarah M.", role: "Homeowner, Fremantle", text: "Made our house move so much easier. They dropped off the container, we packed over the weekend, and they stored it for 2 months until our new place was ready. Half the price of Kennards.", rating: 5 },
  { name: "David C.", role: "Construction Site Manager", text: "We've been hiring containers from U-Move for 3 years now. Always reliable, containers are in great condition, and the team is easy to work with. Highly recommend.", rating: 5 },
  { name: "Lisa W.", role: "Business Owner, Welshpool", text: "Had them build a custom container office for our yard. Power, AC, network, the lot. Professional job and way cheaper than a donga. Really impressed with the finished product.", rating: 5 },
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
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
