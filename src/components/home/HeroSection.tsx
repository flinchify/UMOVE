"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function openQuoteModal() {
  window.dispatchEvent(new Event("open-quote-modal"));
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { y: 60, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
      gsap.from(subRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.5 });
      gsap.from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.7 });
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".hero-service");
        gsap.from(cards, { y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.8 });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-[var(--color-umove-navy)] overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <Image src="/images/Various-20ft-New-Build-Containers-min.jpg" alt="" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 container-grid" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-8">
        {/* Centered hero text */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[var(--color-umove-red)]/10 border border-[var(--color-umove-red)]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[var(--color-umove-red)] rounded-full animate-pulse" />
            <span className="text-[var(--color-umove-red)] text-xs font-bold uppercase tracking-wider">25+ Years in Perth — Henderson Depot</span>
          </div>

          <h1 ref={titleRef} className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.95]">
            Shipping Container
            <br />
            <span className="text-[var(--color-umove-red)]">Hire, Sales</span>
            <br />
            <span className="text-white/40">&amp; Modifications</span>
          </h1>

          <p ref={subRef} className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose from 10ft, 20ft &amp; 40ft containers — new or used. Delivered direct from our Henderson yard to anywhere in WA.
          </p>

          <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openQuoteModal}
              className="group inline-flex items-center justify-center gap-3 bg-[var(--color-umove-red)] text-white font-bold px-10 py-5 uppercase text-sm tracking-wider btn-fill hover:shadow-xl hover:shadow-red-900/20 transition-all"
            >
              Get a Free Quote
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <a href="tel:0894598888" className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white font-bold px-10 py-5 uppercase text-sm tracking-wider hover:bg-white/5 transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (08) 9459 8888
            </a>
          </div>
        </div>

        {/* Service cards grid below hero text */}
        <div ref={gridRef} className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pb-8">
          {[
            { label: "Self Storage", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", href: "/self-storage" },
            { label: "Container Sales", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z", href: "/container-sales" },
            { label: "Container Hire", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", href: "/container-hire" },
            { label: "Modifications", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", href: "/modifications" },
            { label: "Mining", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", href: "/mining-operations" },
            { label: "Removals", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", href: "/removals" },
          ].map((s) => (
            <a key={s.label} href={s.href} className="hero-service group flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[var(--color-umove-red)]/30 transition-all duration-300">
              <svg className="w-6 h-6 text-[var(--color-umove-red)] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
              <span className="text-white/70 text-xs font-bold uppercase tracking-wider text-center group-hover:text-white transition-colors">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
