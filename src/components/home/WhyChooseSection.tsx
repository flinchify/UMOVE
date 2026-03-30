"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

const features = [
  {
    title: "25+ Years of Experience",
    description: "Founded and operated in Perth, we've spent over two decades building a reputation for reliability, safety, and value across Western Australia.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    ),
  },
  {
    title: "In-House Modification Workshop",
    description: "All custom work is done at our Henderson facility by our experienced team. No outsourcing, no delays — just quality builds to your exact specifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
  {
    title: "24/7 Secure Storage Facility",
    description: "Our Henderson facility is monitored around the clock. All containers are wind, water, and vermin-proof with heavy-duty lockboxes for complete peace of mind.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
  },
  {
    title: "Fast Delivery Across WA",
    description: "Whether it's Perth metro, regional WA, or a remote mine site, we deliver containers quickly and reliably with our dedicated fleet.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
  },
  {
    title: "Up to 50% Cheaper",
    description: "Our container storage is up to 50% cheaper than traditional self-storage facilities. Same security, more space, better value.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Flexible Hire Terms",
    description: "Short-term, long-term, or purchase — we offer flexible terms to suit your needs. No lock-in contracts, competitive rates, and hassle-free service.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Work-Shop-1024x768.jpg"
                  alt="U-Move Australia container modification workshop in Henderson Perth"
                  width={1024}
                  height={768}
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-[var(--color-umove-red)] text-white p-6 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years in Perth</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content side */}
          <div>
            <AnimatedSection direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Perth Trusts U-Move
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                U-Move Australia is one of Perth&apos;s most trusted names in shipping containers. Here&apos;s what sets us apart from the rest.
              </p>
            </AnimatedSection>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.1} direction="up">
                  <div className="group">
                    <div className="w-12 h-12 bg-[var(--color-umove-red)]/10 rounded-xl flex items-center justify-center text-[var(--color-umove-red)] group-hover:bg-[var(--color-umove-red)] group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="mt-3 font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

