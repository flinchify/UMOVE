"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--color-umove-navy)] container-grid">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Various-20ft-New-Build-Containers-min.jpg"
          alt="Row of new shipping containers at U-Move Australia Henderson facility"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-umove-navy)] via-[var(--color-umove-navy)]/90 to-[var(--color-umove-navy)]/70" />
      </div>

      {/* Floating container accent */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/IMG_2081-768x1024.jpg"
          alt="U-Move shipping container"
          width={400}
          height={533}
          className="rounded-3xl shadow-2xl opacity-60 border-2 border-white/10"
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium">25+ Years Serving Perth & WA</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Shipping Container{" "}
            <span className="gradient-text">Solutions</span>{" "}
            Made Simple
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            U-Move Australia delivers container hire, sales, custom modifications, and affordable self-storage across Perth and Western Australia. From your backyard to remote mine sites.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-umove-orange)] hover:bg-[var(--color-umove-orange-light)] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:0894598888"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (08) 9459 8888
            </a>
          </div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              { label: "Self Storage", href: "/self-storage" },
              { label: "Container Sales", href: "/container-sales" },
              { label: "Container Hire", href: "/container-hire" },
              { label: "Modifications", href: "/modifications" },
              { label: "Mining Solutions", href: "/mining-operations" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </motion.div>
    </section>
  );
}
