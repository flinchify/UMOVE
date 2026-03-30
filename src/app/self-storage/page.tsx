import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self Storage Perth | Affordable Container Storage Delivered to Your Door",
  description:
    "U-Move delivers secure shipping containers to your door for easy, affordable self-storage in Perth. Up to 50% cheaper than traditional storage. Pack at your pace, we store it safely. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/self-storage" },
};

const steps = [
  { num: "01", title: "We Deliver", desc: "We bring a clean, secure container to your home or business — anywhere in Perth metro." },
  { num: "02", title: "You Pack", desc: "Take your time. Pack at your own pace, or ask us to arrange professional packing for you." },
  { num: "03", title: "We Store", desc: "Leave it on-site, or we collect and store it at our 24/7 monitored Henderson facility." },
  { num: "04", title: "You Retrieve", desc: "Need something back? We deliver your container or provide access at our facility." },
];

export default function SelfStoragePage() {
  return (
    <>
      <PageHero
        title="Self Storage Perth"
        subtitle="Secure, mobile container storage delivered to your door. Up to 50% cheaper than traditional self-storage facilities."
        image="/images/U-Move-Storage-Container-Outside-House.jpg"
        imageAlt="U-Move shipping container delivered to a Perth home for self-storage"
        breadcrumbs={[{ label: "Self Storage", href: "/self-storage" }]}
      />

      {/* Answer-first section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">How it works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Storage that comes to you
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                At U-Move Australia, we make storage easy. No more multiple trips to a storage unit — we deliver the container to your door, so you can pack it yourself or let us arrange professional packing for you. Once you&apos;re ready, we collect and store it at our secure facility or transport it to your next destination.
              </p>
              <ul className="mt-6 space-y-3">
                {["Up to 50% cheaper than traditional self-storage", "10ft, 20ft, and 40ft containers available", "Wind, water, and vermin-proof — fully lockable", "24/7 monitored storage facility in Henderson", "Delivery and collection across Perth and WA"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[var(--color-umove-red)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/IMG_1486-1024x565.jpg"
                  alt="U-Move secure storage facility in Henderson Perth with rows of containers"
                  width={1024}
                  height={565}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-[var(--color-umove-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple 4-Step Process</h2>
            <p className="mt-4 text-lg text-gray-600">From delivery to retrieval, we handle the heavy lifting.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-4xl font-bold text-[var(--color-umove-red)]/20">{step.num}</div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Short vs Long term */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Short-Term or Long-Term</h2>
            <p className="mt-4 text-lg text-gray-600">Flexible storage for every situation.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="border-2 border-gray-100 rounded-2xl p-8 hover:border-[var(--color-umove-red)]/20 transition-colors h-full">
                <h3 className="text-2xl font-bold text-gray-900">Short-Term Storage</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">Need storage for a few weeks or months? Perfect for renovations, moving between homes, decluttering, or temporary business storage.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>- No minimum term</li>
                  <li>- Flexible scheduling</li>
                  <li>- Quick delivery turnaround</li>
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-[var(--color-umove-red)] font-semibold hover:gap-3 transition-all">
                  Get a short-term quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="border-2 border-gray-100 rounded-2xl p-8 hover:border-[var(--color-umove-red)]/20 transition-colors h-full">
                <h3 className="text-2xl font-bold text-gray-900">Long-Term Storage</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">Storing for months or years? Overseas relocations, estate storage, business archives, or vehicle and boat storage — all secure and protected.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>- Up to 50% cheaper than traditional facilities</li>
                  <li>- Vehicle and boat storage available</li>
                  <li>- 24/7 monitored, fully lockable</li>
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-[var(--color-umove-red)] font-semibold hover:gap-3 transition-all">
                  Get a long-term quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Need storage in Perth?</h2>
          <p className="mt-4 text-white/80 text-lg">Get a free quote for container storage delivered to your door.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[var(--color-umove-red)] font-bold px-8 py-4 rounded-none hover:bg-gray-100 transition-all">
              Get a Free Quote
            </Link>
            <a href="tel:0894598888" className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-none hover:bg-white/10 transition-all">
              (08) 9459 8888
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
