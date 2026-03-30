import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Container Removals Perth | Moving Made Easy with Shipping Containers",
  description:
    "U-Move offers container-based removals in Perth. We deliver, you pack, we transport or store. Trusted by Perth families for 25+ years. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/removals" },
};

export default function RemovalsPage() {
  return (
    <>
      <PageHero
        title="Removals"
        subtitle="A smarter way to move. We deliver a container, you pack at your pace, and we handle the rest."
        image="/images/Craig-0816-018-1024x768.jpg"
        imageAlt="U-Move container delivery truck for removals in Perth"
        breadcrumbs={[{ label: "Self-Storage", href: "/self-storage" }, { label: "Removals", href: "/removals" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">Removals</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Moving house? Skip the stress.</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Are you moving home, downsizing, renovating, or relocating? U-Move Australia offers a smarter way to move and store your belongings. With more than 25 years of experience, we provide secure container-based removals and storage, trusted by families across Perth and WA.
              </p>
              <ul className="mt-6 space-y-3">
                {["No time pressure — pack over days, not hours", "No multiple trips to a storage unit", "Professional packing available on request", "Store on-site or at our secure Henderson facility", "Transport to your new location when you're ready"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[var(--color-umove-red)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-[var(--color-umove-red)] text-white font-bold px-8 py-4 rounded-none hover:bg-[var(--color-umove-red-light)] transition-all">
                Get a removals quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/Storage-1024x768.jpg" alt="Packed shipping container for removals" width={1024} height={768} className="w-full h-auto" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/classic_car.jpg" alt="Classic car stored in U-Move shipping container" width={800} height={600} className="w-full h-auto" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--color-umove-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Perfect For</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Moving House", desc: "Pack before settlement, unpack after. No overlap stress." },
              { title: "Downsizing", desc: "Store what you can't fit while you decide what stays." },
              { title: "Renovating", desc: "Keep furniture safe and out of the way during the build." },
              { title: "Relocating Interstate", desc: "We store while you sort your new place interstate or overseas." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to move?</h2>
          <p className="mt-4 text-white/80 text-lg">Get a free removals quote. We deliver across Perth and WA.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[var(--color-umove-red)] font-bold px-8 py-4 rounded-none hover:bg-gray-100 transition-all">Get a Free Quote</Link>
            <a href="tel:0894598888" className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-none hover:bg-white/10 transition-all">(08) 9459 8888</a>
          </div>
        </div>
      </section>
    </>
  );
}
