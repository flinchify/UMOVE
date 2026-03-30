"use client";

import Image from "next/image";
import Link from "next/link";

export default function DeliveryBanner() {
  return (
    <section className="bg-[var(--color-umove-cream)] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/Craig-0816-018-1024x768.jpg"
            alt="U-Move container delivery truck Perth"
            width={240}
            height={160}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl uppercase text-[var(--color-umove-navy)]">
            Direct Delivery from Our Henderson Depot
          </h3>
          <p className="text-gray-500 text-sm mt-1 leading-relaxed">
            Straight from our Henderson container yard to your doorstep, our direct delivery service makes <Link href="/container-hire" className="text-[var(--color-umove-red)] underline hover:no-underline">container hire</Link> and <Link href="/container-sales" className="text-[var(--color-umove-red)] underline hover:no-underline">container purchase</Link> seamless.
          </p>
        </div>
        <a href="tel:0894598888" className="flex-shrink-0 bg-[var(--color-umove-red)] text-white font-bold px-6 py-3 uppercase text-sm tracking-wider hover:bg-[var(--color-umove-red-light)] transition-all whitespace-nowrap">
          Call Us to Book a Visit
        </a>
      </div>
    </section>
  );
}
