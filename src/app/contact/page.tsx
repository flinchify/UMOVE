import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Contact U-Move Australia Perth",
  description:
    "Request a free quote for container hire, sales, storage, or modifications in Perth. U-Move Australia — 836 Cockburn Road, Henderson WA. Call (08) 9459 8888 or email sales@u-move.com.au.",
  alternates: { canonical: "https://u-move.com.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get a Free Quote"
        subtitle="Tell us what you need and we'll provide a clear, accurate quote within 1 business day."
        image="/images/IMG_2795-1024x736.png"
        imageAlt="U-Move storage facility Henderson Perth"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <QuoteForm />
              </AnimatedSection>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
                    <p className="mt-2 text-gray-600">Prefer to call or email? We&apos;re here to help.</p>
                  </div>

                  <div className="space-y-6">
                    <a href="tel:0894598888" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-[var(--color-umove-red)]/10 rounded-xl flex items-center justify-center text-[var(--color-umove-red)] group-hover:bg-[var(--color-umove-red)] group-hover:text-white transition-all flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">(08) 9459 8888</div>
                        <div className="text-sm text-gray-500">Mon-Fri 8am-4pm</div>
                      </div>
                    </a>

                    <a href="mailto:sales@u-move.com.au" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-[var(--color-umove-red)]/10 rounded-xl flex items-center justify-center text-[var(--color-umove-red)] group-hover:bg-[var(--color-umove-red)] group-hover:text-white transition-all flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">sales@u-move.com.au</div>
                        <div className="text-sm text-gray-500">We reply within 1 business day</div>
                      </div>
                    </a>

                    <a href="https://maps.app.goo.gl/9Rhb2XPawxGWopno6" target="_blank" rel="noopener" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-[var(--color-umove-red)]/10 rounded-xl flex items-center justify-center text-[var(--color-umove-red)] group-hover:bg-[var(--color-umove-red)] group-hover:text-white transition-all flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">836 Cockburn Road</div>
                        <div className="text-sm text-gray-500">Henderson, WA 6166</div>
                      </div>
                    </a>
                  </div>

                  <div className="bg-[var(--color-umove-gray)] rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900">Opening Hours</h3>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex justify-between text-gray-600">
                        <span>Monday - Friday</span>
                        <span className="font-medium text-gray-900">8:00am - 4:00pm</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Saturday - Sunday</span>
                        <span className="font-medium text-gray-500">Closed</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Public Holidays</span>
                        <span className="font-medium text-gray-500">Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Map embed */}
                  <div className="rounded-2xl overflow-hidden shadow-md h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.1!2d115.7744!3d-32.1471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA4JzQ5LjYiUyAxMTXCsDQ2JzI3LjgiRQ!5e0!3m2!1sen!2sau!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="U-Move Australia location map — 836 Cockburn Road Henderson WA"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
