import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BusinessTab from "@/components/BusinessTab";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCtaBar from "@/components/MobileCtaBar";


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
