import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import StatCounter from "@/components/StatCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About U-Move Australia | 25+ Years in Perth Shipping Containers",
  description:
    "U-Move Australia has provided shipping container solutions in Perth for over 25 years. Based in Henderson WA, we specialise in container hire, sales, modifications, and storage across Western Australia.",
  alternates: { canonical: "https://u-move.com.au/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About U-Move"
        subtitle="Perth's trusted shipping container company. Over 25 years of delivering practical, affordable solutions across Western Australia."
        image="/images/shipping-containers-pros-cons.jpg"
        imageAlt="Shipping containers at U-Move Australia Henderson facility"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">Our story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built on experience, driven by service</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                At U-Move Australia, we specialise in shipping container hire, sales, modifications, and storage. Delivering practical, affordable solutions to homes, businesses, and industries across Western Australia.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Founded and operated in Perth, we&apos;ve spent over two decades building a reputation for reliability, safety, and value. Whether you need a simple storage option or a fully customised container fitout, we have the experience, equipment, and team to make it happen.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our Henderson facility houses our storage yard and a fully equipped modification workshop where we build everything from site offices to mining crib rooms, cafes to container homes — all in-house, all to spec.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/IMG_2081-768x1024.jpg"
                  alt="U-Move Australia container yard in Henderson Perth"
                  width={768}
                  height={1024}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-umove-navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={25} suffix="+" label="Years Experience" />
            <StatCounter end={5000} suffix="+" label="Containers Delivered" />
            <StatCounter end={100} suffix="%" label="WA Coverage" />
            <StatCounter end={24} suffix="/7" label="Secure Facility" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Sets Us Apart</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Local Perth Business", desc: "We're not a franchise or national chain. We're a Perth-born business that understands WA conditions, distances, and what our customers need." },
              { title: "In-House Everything", desc: "Sales, storage, modifications, and delivery — all handled by our team at our Henderson facility. No subcontractors, no middlemen." },
              { title: "Mining & Industry Experts", desc: "We've supported mining shutdowns, oil & gas projects, and construction sites across WA for decades. We know what worksites demand." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="border-t-4 border-[var(--color-umove-red)] p-8 bg-[var(--color-umove-gray)] rounded-b-2xl">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Want to work with us?</h2>
          <p className="mt-4 text-white/80 text-lg">Whether it&apos;s a single container or a fleet for a mine site, we&apos;re ready to help.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[var(--color-umove-red)] font-bold px-8 py-4 rounded-none hover:bg-gray-100 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
