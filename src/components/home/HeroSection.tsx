"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[var(--color-umove-navy)]">
      {/* Parallax background image — full bleed */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/Various-20ft-New-Build-Containers-min.jpg"
          alt="Row of new shipping containers at U-Move Henderson facility Perth WA"
          fill
          priority
          className="object-cover"
        />
        {/* Diagonal cut overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, var(--color-umove-navy) 45%, transparent 45.5%)`,
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-umove-navy)] to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-7xl mx-auto px-6" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Left — text content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">
                  Est. 2000 — Henderson, WA
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              We move
              <br />
              <span className="gradient-text">containers.</span>
              <br />
              You move on.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              Hire. Buy. Store. Modify. Whatever you need a shipping container for, we&apos;ve been doing it across Perth and WA for over 25 years.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[var(--color-umove-red)] text-white font-bold px-8 py-4 rounded-none text-base transition-all duration-300 hover:bg-[var(--color-umove-red-light)] hover:pr-10"
              >
                Get a free quote
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href="tel:0894598888"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-none text-base transition-all duration-300 hover:border-white/50 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (08) 9459 8888
              </a>
            </motion.div>
          </div>

          {/* Right — stacked image cards with stagger */}
          <div className="order-1 lg:order-2 relative hidden lg:block">
            <div className="relative h-[600px]">
              {/* Card 1 — main */}
              <motion.div
                initial={{ opacity: 0, x: 60, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 2 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 right-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image
                  src="/images/Qualiity_containers_to_buy-scaled-1-768x1024.jpg"
                  alt="Quality shipping containers for sale at U-Move Perth"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <div className="text-white text-sm font-semibold">Container Sales</div>
                  <div className="text-white/60 text-xs">New & used from $2,500</div>
                </div>
              </motion.div>

              {/* Card 2 — offset */}
              <motion.div
                initial={{ opacity: 0, x: -40, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -3 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-32 left-0 w-72 h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image
                  src="/images/Work-Shop-1024x768.jpg"
                  alt="U-Move container modification workshop Henderson"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <div className="text-white text-sm font-semibold">Modifications</div>
                  <div className="text-white/60 text-xs">Built to spec in Henderson</div>
                </div>
              </motion.div>

              {/* Card 3 — small accent */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-0 right-12 w-60 h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image
                  src="/images/Craig-0816-018-1024x768.jpg"
                  alt="U-Move delivery truck transporting container in Perth"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-white text-sm font-semibold">Delivery & Storage</div>
                  <div className="text-white/60 text-xs">Across all of WA</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom service marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[var(--color-umove-red)] py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {["Self Storage", "Container Sales", "Container Hire", "Custom Modifications", "Mining Solutions", "Removals", "10ft  20ft  40ft Containers", "24/7 Secure Facility", "25+ Years Experience", "Perth & All of WA"].map((text) => (
                <span key={`${i}-${text}`} className="text-white/90 text-sm font-medium flex items-center gap-8">
                  {text}
                  <span className="text-white/40">///</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
