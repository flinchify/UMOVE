"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export default function HireSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-umove-navy)] container-grid text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
              <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">Container hire</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              On a Budget? Hire a Container in Perth
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Hiring a shipping container can be a cheap short-term storage solution. Flexible terms, no large upfront cost, and we handle maintenance. Available in all sizes with fast delivery.
            </p>
            <ul className="mt-6 space-y-3">
              {["Reduced rates the longer you keep it", "10ft, 20ft, 40ft & high cube available", "Competitive rates from just $5/day", "Short or long-term — no lock-in contracts", "Delivered to your door across Perth & WA"].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-umove-red)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/container-hire" className="inline-flex items-center gap-2 bg-[var(--color-umove-red)] text-white font-bold px-8 py-4 uppercase text-sm tracking-wider btn-fill hover:shadow-lg transition-shadow">
                View Hire Options
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/Mods-3566-1024x768.jpg" alt="Container hire Perth U-Move" width={1024} height={768} className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
