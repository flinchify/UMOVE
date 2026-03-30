"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, image, imageAlt, breadcrumbs }: Props) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-[var(--color-umove-navy)]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-umove-navy)] via-[var(--color-umove-navy)]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-4"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-gray-600">/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-lg text-gray-300 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
