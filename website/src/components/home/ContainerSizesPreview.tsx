"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

const containers = [
  {
    size: "10ft",
    name: "10 Foot Container",
    external: "3.10m x 2.44m x 2.59m",
    internal: "2.98m x 2.35m x 2.38m",
    image: "/images/10ft-1024x1024.png",
    description: "Compact and versatile. Ideal for small storage needs, garden sheds, or tight spaces where a full-size container won't fit.",
    href: "/10ft-container",
  },
  {
    size: "20ft",
    name: "20 Foot Container",
    external: "6.05m x 2.44m x 2.59m",
    internal: "5.90m x 2.35m x 2.38m",
    image: "/images/20ft-1024x1024.png",
    description: "The most popular size. Perfect for household storage, small business inventory, workshop conversions, or construction site storage.",
    href: "/20ft-container",
  },
  {
    size: "40ft",
    name: "40 Foot Container",
    external: "12.19m x 2.44m x 2.59m",
    internal: "12.01m x 2.35m x 2.38m",
    image: "/images/40ft-1024x1024.png",
    description: "Maximum capacity for large-scale storage, industrial applications, or container conversion projects like offices, cafes, and homes.",
    href: "/40ft-container",
  },
];

export default function ContainerSizesPreview() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-umove-navy)] container-grid text-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Choose the Right Container Size
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            We stock a full range of standard container sizes suitable for everything from household storage to large-scale commercial projects. All containers are wind, water, and vermin-proof.
          </p>
        </AnimatedSection>

        {/* Size tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {containers.map((c, i) => (
            <button
              key={c.size}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                active === i
                  ? "bg-[var(--color-umove-orange)] text-white shadow-lg shadow-orange-500/30"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {c.size}
            </button>
          ))}
        </div>

        {/* Active container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="flex justify-center">
              <Image
                src={containers[active].image}
                alt={`${containers[active].name} dimensions diagram`}
                width={500}
                height={500}
                className="max-w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">{containers[active].name}</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{containers[active].description}</p>

              <div className="mt-8 space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">External Dimensions (L x W x H)</div>
                  <div className="text-lg font-semibold">{containers[active].external}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">Internal Dimensions (L x W x H)</div>
                  <div className="text-lg font-semibold">{containers[active].internal}</div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href={containers[active].href}
                  className="bg-[var(--color-umove-orange)] hover:bg-[var(--color-umove-orange-light)] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  View Details
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <Link href="/container-sizes" className="text-[var(--color-umove-orange)] hover:text-[var(--color-umove-orange-light)] font-semibold inline-flex items-center gap-2 transition-colors">
            View all container sizes & specifications
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
