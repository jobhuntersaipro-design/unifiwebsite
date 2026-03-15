import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unifi Broadband Plans Malaysia | Authorized Reseller — Home & Business",
  description:
    "Sign up for Unifi broadband in Malaysia from RM89/mth. Home plans (100Mbps–2Gbps) and Business fibre plans. Free installation, free Wi-Fi router, no hidden fees. Fast approval — WhatsApp us today.",
  keywords: [
    "unifi broadband malaysia",
    "unifi plan malaysia",
    "unifi authorized reseller",
    "internet malaysia",
    "unifi home broadband",
    "unifi business broadband",
    "daftar unifi",
    "unifi fibre malaysia",
    "broadband murah malaysia",
    "unifi 300mbps",
    "unifi 1gbps",
    "tm unifi reseller",
    "pasang unifi",
  ],
  openGraph: {
    title: "Unifi Broadband Plans Malaysia | From RM89/mth — Free Installation",
    description:
      "Sign up for Unifi home or business broadband in Malaysia. Plans from RM89/mth with free installation and free Wi-Fi router. WhatsApp us for fast approval.",
    type: "website",
    locale: "en_MY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Unifi Authorized Reseller Malaysia",
  description:
    "Authorized Unifi reseller in Malaysia offering home and business broadband plans from RM89/mth with free installation.",
  telephone: "+60164609428",
  email: "hello@unifi.co.com",
  areaServed: {
    "@type": "Country",
    name: "Malaysia",
  },
  priceRange: "RM89–RM369/mth",
  sameAs: ["https://www.unifi.com.my"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Unifi Broadband Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Unifi Home 100Mbps",
        price: "89",
        priceCurrency: "MYR",
      },
      {
        "@type": "Offer",
        name: "Unifi Home 300Mbps",
        price: "129",
        priceCurrency: "MYR",
      },
      {
        "@type": "Offer",
        name: "Unifi Business 100Mbps",
        price: "99",
        priceCurrency: "MYR",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
