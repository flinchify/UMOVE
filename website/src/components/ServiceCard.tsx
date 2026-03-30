"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, href, image, imageAlt, icon, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          <div className="relative h-56 overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-[var(--color-umove-orange)] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--color-umove-orange)] transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[var(--color-umove-orange)] font-semibold text-sm group-hover:gap-3 transition-all">
              Learn more
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
