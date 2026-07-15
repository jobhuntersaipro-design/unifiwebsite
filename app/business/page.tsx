import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BusinessTab from "@/components/BusinessTab";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Unifi Business Broadband | Pakej Perniagaan SME dari RM99/mth",
  description:
    "Unifi Business Fibre untuk perniagaan dan SME di Malaysia dari RM99/mth. Dedicated support, static IP tersedia, free installation. WhatsApp kami untuk sebut harga pantas.",
  alternates: {
    canonical: 'https://www.unifi.co.com/business',
  },
  // Next replaces the parent openGraph wholesale rather than merging, so the
  // image has to be repeated here or this page ships with no share preview.
  openGraph: {
    title: "Unifi Business Broadband | Pakej Perniagaan SME dari RM99/mth",
    description:
      "Unifi Business Fibre untuk perniagaan dan SME di Malaysia dari RM99/mth. Dedicated support dan free installation.",
    url: 'https://www.unifi.co.com/business',
    siteName: 'Unifi Authorized Reseller Malaysia',
    type: 'website',
    locale: 'en_MY',
    alternateLocale: ['ms_MY'],
    images: [
      {
        url: 'https://www.unifi.co.com/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Unifi Business Broadband Malaysia',
      },
    ],
  },
};

export default function BusinessPage() {
  return (
    <main>
      <Navbar />
      <HeroSection activeTab="business" />
      <div>
        <BusinessTab />
      </div>
      <WhyChooseUs />
      <BlogSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <MobileCtaBar />
    </main>
  );
}
