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
  alternates: {
    canonical: 'https://www.unifi.co.com/business',
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
