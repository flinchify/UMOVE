"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--color-umove-navy)] container-grid overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/IMG_2795-1024x736.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Tell Us What You Need & We&apos;ll Send Our Best Price
            </h2>
            <p className="mt-4 text-gray-400 text-lg">Container hire, sales, storage, or modifications. Get a clear, accurate quote within 1 business day.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[var(--color-umove-red)] text-white font-bold px-8 py-5 uppercase text-sm tracking-wider btn-fill hover:shadow-lg transition-shadow">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:0894598888" className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white font-bold px-8 py-5 uppercase text-sm tracking-wider hover:bg-white/5 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (08) 9459 8888
              </a>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-umove-red)]/20 rounded-xl flex items-center justify-center text-[var(--color-umove-red)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-white font-bold">(08) 9459 8888</div>
                  <div className="text-gray-400 text-sm">Mon-Fri 8am-4pm</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-umove-red)]/20 rounded-xl flex items-center justify-center text-[var(--color-umove-red)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-white font-bold">sales@u-move.com.au</div>
                  <div className="text-gray-400 text-sm">Reply within 1 business day</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-umove-red)]/20 rounded-xl flex items-center justify-center text-[var(--color-umove-red)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-white font-bold">836 Cockburn Road</div>
                  <div className="text-gray-400 text-sm">Henderson, WA 6166</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
