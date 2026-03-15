"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PersonalTab from "@/components/PersonalTab";
import BusinessTab from "@/components/BusinessTab";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem("unifiActiveTab");
    if (saved === "personal" || saved === "business") setActiveTab(saved);
  }, []);

  const handleTabChange = (tab: "personal" | "business") => {
    setActiveTab(tab);
    sessionStorage.setItem("unifiActiveTab", tab);
  };

  // Prevent hydration mismatch by optionally rendering children only after mount if needed, or just let it flip.
  // Actually, just standard render is fine, but to avoid flash we just update state.

  return (
    <main>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      <HeroSection activeTab={activeTab} />

      {/* Tab content */}
      <div>
        {activeTab === "personal" ? <PersonalTab /> : <BusinessTab />}
      </div>

      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <MobileCtaBar />
    </main>
  );
}
