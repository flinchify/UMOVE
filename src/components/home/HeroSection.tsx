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
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { y: 60, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
      gsap.from(subRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.5 });
      gsap.from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.7 });
      gsap.from(imgRef.current, { x: 80, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.4 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-[var(--color-umove-navy)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/Various-20ft-New-Build-Containers-min.jpg" alt="" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 container-grid" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[75vh] py-16 lg:py-24">
          {/* Text */}
          <div>
            <h1 ref={titleRef} className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] text-white uppercase leading-[1.05]">
              Your container
              <br />
              solution starts
              <br />
              <span className="text-[var(--color-umove-red)]">right here</span>
            </h1>
            <p ref={subRef} className="mt-6 text-gray-400 text-lg max-w-lg leading-relaxed">
              Buy, hire, store, or modify — choose U-Move Australia to match you with the right container at the right price. Stock ready for delivery across WA.
            </p>
            <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={openQuoteModal}
                className="group inline-flex items-center justify-center gap-3 bg-[var(--color-umove-red)] text-white font-bold px-8 py-4 uppercase text-sm tracking-wider btn-fill hover:shadow-xl hover:shadow-red-900/20 transition-all"
              >
                Get a Free Quote
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <a href="tel:0894598888" className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white font-bold px-8 py-4 uppercase text-sm tracking-wider hover:bg-white/5 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (08) 9459 8888
              </a>
            </div>
          </div>

          {/* Image with floating badges */}
          <div ref={imgRef} className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Various-20ft-New-Build-Containers-min.jpg"
                alt="New shipping containers at U-Move Henderson depot Perth"
                width={800}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
            {/* 25+ years badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-[var(--color-umove-red)] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="font-bold text-[var(--color-umove-navy)] text-sm">25+ Years</div>
                <div className="text-xs text-gray-400">Trusted in Perth</div>
              </div>
            </div>
            {/* Price badge */}
            <div className="absolute -top-4 -right-4 bg-[var(--color-umove-red)] text-white rounded-xl shadow-xl p-4 text-center">
              <div className="text-xs uppercase tracking-wider opacity-80">Containers from</div>
              <div className="font-display text-2xl">$2,500</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
