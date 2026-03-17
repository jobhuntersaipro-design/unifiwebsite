import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.unifi.co.com'),
  title: "Unifi Broadband Plans Malaysia | Authorized Reseller — From RM89/mth",
  description:
    "Sign up for Unifi broadband in Malaysia from RM89/mth. Pakej rumah (100Mbps–2Gbps) dan perniagaan. Free installation, free Wi-Fi router, no hidden fees. WhatsApp us for fast approval.",
  keywords: [
    // Malay
    "daftar unifi",
    "pasang unifi",
    "pakej unifi murah",
    "unifi rumah malaysia",
    "broadband murah malaysia",
    "pakej internet rumah",
    "internet laju malaysia",
    "cara daftar unifi",
    "unifi perniagaan",
    "pakej unifi terbaik",
    "unifi reseller malaysia",
    // English
    "unifi broadband malaysia",
    "unifi plan malaysia",
    "unifi authorized reseller",
    "unifi home broadband",
    "unifi business broadband",
    "unifi fibre malaysia",
    "unifi 300mbps",
    "unifi 1gbps",
    "tm unifi reseller",
  ],
  alternates: {
    canonical: 'https://www.unifi.co.com',
  },
  openGraph: {
    title: "Unifi Broadband Plans Malaysia | From RM89/mth — Free Installation",
    description:
      "Daftar Unifi rumah atau perniagaan di Malaysia. Plans from RM89/mth with free installation and free Wi-Fi router. WhatsApp us for fast approval.",
    url: 'https://www.unifi.co.com',
    siteName: 'Unifi Authorized Reseller Malaysia',
    type: "website",
    locale: "en_MY",
    alternateLocale: ["ms_MY"],
    images: [
      {
        url: 'https://www.unifi.co.com/unifi-icon.png',
        width: 1150,
        height: 603,
        alt: 'Unifi Authorized Reseller Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Unifi Broadband Plans Malaysia | From RM89/mth — Free Installation",
    description:
      "Daftar Unifi rumah atau perniagaan di Malaysia. Plans from RM89/mth with free installation and free Wi-Fi router.",
    images: ['https://www.unifi.co.com/unifi-icon.png'],
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
