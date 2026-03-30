"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade out on scroll
      gsap.to(overlayRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "60% top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Title — character-by-character reveal
      if (titleRef.current) {
        const lines = titleRef.current.querySelectorAll(".hero-line");
        lines.forEach((line, i) => {
          const chars = line.querySelectorAll(".hero-char");
          gsap.from(chars, {
            y: 120,
            rotateX: -80,
            opacity: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: "power4.out",
            delay: 0.3 + i * 0.15,
          });
        });
      }

      // Badge slide in
      gsap.from(badgeRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      // Subtitle
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9,
      });

      // CTA
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1,
      });

      // Photo cards stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".hero-card");
        cards.forEach((card, i) => {
          gsap.from(card, {
            x: 100 + i * 30,
            y: 60 - i * 20,
            opacity: 0,
            rotation: 5 - i * 4,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5 + i * 0.2,
          });
        });

        // Float animation on cards
        cards.forEach((card, i) => {
          gsap.to(card, {
            y: `+=${10 + i * 5}`,
            duration: 3 + i * 0.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitLine = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="hero-char inline-block" style={{ display: char === " " ? "inline" : "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[var(--color-umove-dark)]">
      {/* Parallax BG */}
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <Image
          src="/images/Various-20ft-New-Build-Containers-min.jpg"
          alt="Row of new shipping containers at U-Move Henderson facility Perth WA"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-umove-dark)]/75" />
      </div>

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block" style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-umove-red)]/10 to-transparent" />
      </div>

      {/* Content */}
      <div ref={overlayRef} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-28">
          {/* Left — 7 cols */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Badge */}
            <div ref={badgeRef} className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-16 bg-[var(--color-umove-red)]" />
              <span className="text-[var(--color-umove-red)] font-semibold text-xs uppercase tracking-[0.3em]">
                Perth&apos;s container specialists since 2000
              </span>
            </div>

            {/* Title with split characters */}
            <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.02] tracking-tight">
              <span className="hero-line block overflow-hidden">
                {splitLine("We move")}
              </span>
              <span className="hero-line block overflow-hidden">
                <span className="gradient-text">{splitLine("containers.")}</span>
              </span>
              <span className="hero-line block overflow-hidden text-white/50">
                {splitLine("You move on.")}
              </span>
            </h1>

            <p ref={subtitleRef} className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
              Hire. Buy. Store. Modify. Whatever you need a shipping container for, we&apos;ve been doing it across Perth and WA for over 25 years.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-[var(--color-umove-red)] text-white font-bold px-10 py-5 text-base overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get a free quote
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
                <span className="absolute inset-0 bg-[var(--color-umove-red-light)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <a
                href="tel:0894598888"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold px-10 py-5 text-base transition-all duration-300 hover:border-white/50 hover:bg-white/5 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (08) 9459 8888
              </a>
            </div>
          </div>

          {/* Right — 5 cols, stacked cards */}
          <div className="lg:col-span-5 order-1 lg:order-2 hidden lg:block">
            <div ref={cardsRef} className="relative h-[620px]">
              {/* Card 1 */}
              <div className="hero-card absolute top-0 right-0 w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-2">
                <Image src="/images/Qualiity_containers_to_buy-scaled-1-768x1024.jpg" alt="Shipping containers for sale U-Move Perth" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-bold text-sm">Container Sales</div>
                  <div className="text-white/50 text-xs mt-0.5">New & used from $2,500</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="hero-card absolute top-36 -left-4 w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 -rotate-3">
                <Image src="/images/Work-Shop-1024x768.jpg" alt="Container modification workshop U-Move Henderson" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-bold text-sm">Modifications</div>
                  <div className="text-white/50 text-xs mt-0.5">Built to spec in Henderson</div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="hero-card absolute bottom-0 right-8 w-[260px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-1">
                <Image src="/images/Craig-0816-018-1024x768.jpg" alt="Container delivery truck Perth WA" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-sm">Delivery & Storage</div>
                  <div className="text-white/50 text-xs mt-0.5">Across all of WA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[var(--color-umove-red)] py-3.5 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {["Self Storage", "Container Sales", "Container Hire", "Custom Modifications", "Mining Solutions", "Removals", "10ft  20ft  40ft Containers", "24/7 Secure Facility", "25+ Years Experience", "Perth & All of WA"].map((text) => (
                <span key={`${i}-${text}`} className="text-white/90 text-sm font-medium flex items-center gap-8">
                  {text}
                  <span className="text-white/30">///</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
