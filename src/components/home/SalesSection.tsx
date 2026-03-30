"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export default function SalesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/Various-20ft-New-Build-Containers-min.jpg" alt="New shipping containers for sale at U-Move Perth" width={800} height={600} className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[var(--color-umove-red)] text-white px-6 py-4 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">From $2,500</div>
                <div className="text-white/70 text-sm">New & used containers</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
              <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">Container sales</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-umove-navy)] uppercase tracking-tight">
              New & Used Sea Containers, Delivered Anywhere in WA
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We stock one of WA&apos;s largest inventories of shipping containers. From budget-friendly used units to brand new builds, in every size and configuration. All containers are wind, water, and vermin-proof.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["10ft, 20ft, 40ft sizes", "Standard & High Cube", "Side-Opening", "Refrigerated", "Insulated", "Dangerous Goods", "Flat Rack", "Double Door"].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-[var(--color-umove-red)] rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <Link href="/container-sales" className="inline-flex items-center gap-2 bg-[var(--color-umove-red)] text-white font-bold px-8 py-4 uppercase text-sm tracking-wider btn-fill hover:shadow-lg transition-shadow">
                View Container Range
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
