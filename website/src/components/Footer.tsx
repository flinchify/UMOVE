import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Self Storage", href: "/self-storage" },
    { label: "Container Sales", href: "/container-sales" },
    { label: "Container Hire", href: "/container-hire" },
    { label: "Modifications", href: "/modifications" },
    { label: "Mining & Operations", href: "/mining-operations" },
    { label: "Removals", href: "/removals" },
  ],
  containers: [
    { label: "Container Sizes", href: "/container-sizes" },
    { label: "10ft Container", href: "/10ft-container" },
    { label: "20ft Container", href: "/20ft-container" },
    { label: "40ft Container", href: "/40ft-container" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "FAQs", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-umove-navy)] text-white">
      {/* CTA banner */}
      <div className="bg-gradient-to-r from-[var(--color-umove-orange)] to-[var(--color-umove-orange-light)] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Quality Container Hire, Sales, Storage & Modifications
            </h2>
            <p className="text-white/90 mt-2 text-lg">
              Affordable rates across Perth and Western Australia
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-[var(--color-umove-orange)] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-lg whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/U-Move-logo-WHITE.png"
              alt="U-Move Australia"
              width={160}
              height={48}
              className="mb-4"
            />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Perth&apos;s trusted shipping container company with over 25 years of experience. Delivering practical, affordable container solutions across Western Australia.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:0894598888" className="flex items-center gap-3 text-gray-300 hover:text-[var(--color-umove-orange)] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-umove-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (08) 9459 8888
              </a>
              <a href="mailto:sales@u-move.com.au" className="flex items-center gap-3 text-gray-300 hover:text-[var(--color-umove-orange)] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-umove-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                sales@u-move.com.au
              </a>
              <a href="https://maps.app.goo.gl/9Rhb2XPawxGWopno6" target="_blank" rel="noopener" className="flex items-center gap-3 text-gray-300 hover:text-[var(--color-umove-orange)] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-umove-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                836 Cockburn Road, Henderson WA 6166
              </a>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/umoveaustralia/" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-umove-orange)] transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
              </a>
              <a href="https://www.instagram.com/umove_australia/" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-umove-orange)] transition-all duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@u.move.australia" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-umove-orange)] transition-all duration-300" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11v-3.52a6.37 6.37 0 00-.82-.05A6.34 6.34 0 003.14 15.2a6.34 6.34 0 0010.49 4.79 6.29 6.29 0 001.88-4.49V9.4a8.16 8.16 0 004.72 1.5V7.48a4.85 4.85 0 01-.64-.79z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[var(--color-umove-orange)] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Containers */}
          <div>
            <h3 className="text-white font-semibold mb-4">Containers</h3>
            <ul className="space-y-2.5">
              {footerLinks.containers.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[var(--color-umove-orange)] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[var(--color-umove-orange)] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <h4 className="text-sm font-semibold text-white mb-1">Opening Hours</h4>
              <p className="text-xs text-gray-400">Mon–Fri: 8:00am – 4:00pm</p>
              <p className="text-xs text-gray-400">Weekends & Holidays: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} U-Move Australia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-umove-orange)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-umove-orange)] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
