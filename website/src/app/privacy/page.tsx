import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "U-Move Australia privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://u-move.com.au/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-4 text-gray-500">Last updated: March 2026</p>
      <div className="mt-8 prose prose-gray max-w-none">
        <h2>1. Information We Collect</h2>
        <p>When you contact us via our website, phone, or email, we may collect your name, email address, phone number, company name, and details about your enquiry. We collect this information to provide you with quotes and services.</p>
        <h2>2. How We Use Your Information</h2>
        <p>We use your personal information to respond to enquiries, provide quotes, deliver services, and communicate about your orders. We do not sell or share your information with third parties for marketing purposes.</p>
        <h2>3. Data Security</h2>
        <p>We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access. Our website uses HTTPS encryption for all data transmission.</p>
        <h2>4. Cookies</h2>
        <p>Our website may use cookies to improve your browsing experience and analyse site traffic. You can control cookies through your browser settings.</p>
        <h2>5. Your Rights</h2>
        <p>Under the Australian Privacy Act 1988, you have the right to access and correct your personal information. Contact us at sales@u-move.com.au to make a request.</p>
        <h2>6. Contact</h2>
        <p>For privacy enquiries, contact U-Move Australia at:<br />Phone: (08) 9459 8888<br />Email: sales@u-move.com.au<br />Address: 836 Cockburn Road, Henderson WA 6166</p>
      </div>
    </div>
  );
}
