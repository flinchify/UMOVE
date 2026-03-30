import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "U-Move Australia terms and conditions for container hire, sales, storage, and modifications.",
  alternates: { canonical: "https://u-move.com.au/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
      <p className="mt-4 text-gray-500">Last updated: March 2026</p>
      <div className="mt-8 prose prose-gray max-w-none">
        <h2>1. General</h2>
        <p>These terms and conditions apply to all services provided by U-Move Australia Pty Ltd, including container hire, sales, storage, modifications, and delivery services.</p>
        <h2>2. Quotes & Pricing</h2>
        <p>All quotes are valid for 14 days unless otherwise stated. Prices are in Australian Dollars (AUD) and exclude GST unless specified. Final pricing may vary based on delivery distance, container condition, and modification specifications.</p>
        <h2>3. Container Hire</h2>
        <p>Hire periods commence from the date of delivery. The hirer is responsible for maintaining the container in good condition and ensuring safe access for delivery and collection. Containers must not be modified without written consent from U-Move.</p>
        <h2>4. Container Sales</h2>
        <p>Ownership transfers upon receipt of full payment. All containers are sold as inspected. Used containers may have cosmetic wear but are guaranteed to be wind, water, and vermin-proof at the time of sale.</p>
        <h2>5. Storage</h2>
        <p>Storage fees are charged weekly or monthly as agreed. U-Move is not liable for loss or damage to stored goods beyond what is covered by our facility insurance. Customers are encouraged to arrange their own contents insurance.</p>
        <h2>6. Delivery</h2>
        <p>Delivery requires adequate access for our trucks. The customer is responsible for ensuring the delivery site is accessible, level, and free of obstructions. Additional charges may apply for difficult access or remote locations.</p>
        <h2>7. Modifications</h2>
        <p>Modification quotes are provided based on specifications discussed. Changes to specifications after work commences may incur additional costs. Completed modifications are warranted for 12 months against defects in workmanship.</p>
        <h2>8. Limitation of Liability</h2>
        <p>U-Move Australia&apos;s liability is limited to the value of services provided. We are not liable for indirect or consequential losses arising from the use of our containers or services.</p>
        <h2>9. Governing Law</h2>
        <p>These terms are governed by the laws of Western Australia, Australia.</p>
        <h2>10. Contact</h2>
        <p>U-Move Australia<br />836 Cockburn Road, Henderson WA 6166<br />Phone: (08) 9459 8888<br />Email: sales@u-move.com.au</p>
      </div>
    </div>
  );
}
