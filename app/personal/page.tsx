import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PersonalTab from "@/components/PersonalTab";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCtaBar from "@/components/MobileCtaBar";


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
