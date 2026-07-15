import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PersonalTab from "@/components/PersonalTab";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Pakej Unifi Rumah | 100Mbps–2Gbps dari RM89/mth — Free Installation",
  description:
    "Bandingkan pakej Unifi rumah di Malaysia: 100Mbps, 300Mbps, 500Mbps hingga 2Gbps dari RM89/mth. Free installation, free Wi-Fi router, tiada caj tersembunyi. WhatsApp kami untuk kelulusan cepat.",
  alternates: {
    canonical: 'https://www.unifi.co.com/personal',
  },
  // Next replaces the parent openGraph wholesale rather than merging, so the
  // image has to be repeated here or this page ships with no share preview.
  openGraph: {
    title: "Pakej Unifi Rumah | 100Mbps–2Gbps dari RM89/mth",
    description:
      "Bandingkan pakej Unifi rumah di Malaysia dari RM89/mth. Free installation dan free Wi-Fi router.",
    url: 'https://www.unifi.co.com/personal',
    siteName: 'Unifi Authorized Reseller Malaysia',
    type: 'website',
    locale: 'en_MY',
    alternateLocale: ['ms_MY'],
    images: [
      {
        url: 'https://www.unifi.co.com/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Pakej Unifi Rumah Malaysia',
      },
    ],
  },
};

export default function PersonalPage() {
  return (
    <main>
      <Navbar />
      <HeroSection activeTab="personal" />
      <div>
        <PersonalTab />
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
