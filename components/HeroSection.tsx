"use client";

import Image from "next/image";
import { fireWhatsAppConversion } from "@/lib/gtag";

const WHATSAPP_NUMBER = "601169497969";
const WHATSAPP_MSG = encodeURIComponent("Hi, I'm interested in a Unifi plan. Can you help me?");

interface HeroSectionProps {
    activeTab: "personal" | "business";
}

const heroContent = {
    personal: {
        label: "TM Authorized Reseller · Malaysia",
        heading: "FREE Smart TV. 500Mbps Speed.",
        highlight: "From just RM7/Day!",
        sub: "Free installation, free Wi-Fi router, and no hidden costs. Plans from 100Mbps to 2Gbps — sign up in minutes.",
        bg: "linear-gradient(150deg, #fbe1c6 0%, #f8a55a 48%, #ef6c1d 100%)",
    },
    business: {
        label: "TM Authorized Reseller · Malaysia",
        heading: "Unifi Business Broadband",
        highlight: "From RM99/mth.",
        sub: "Ultra-fast fibre up to 2Gbps for offices, retail outlets, and enterprises — with FREE call plan and priority support.",
        bg: "linear-gradient(135deg, #0f0f2e 0%, #0c004a 40%, #1a0070 100%)",
    },
};

const trustBadges = [
    "✓ TM Authorized Reseller",
    "⚡ Free Installation",
    "✓ No Hidden Fees",
    "💬 Reply in Minutes",
];

export default function HeroSection({ activeTab }: HeroSectionProps) {
    const content = heroContent[activeTab];

    // Personal tab now uses a light orange background (matching the promo banner),
    // so its text/controls switch to dark-blue ink. Business keeps the dark theme.
    const palette = activeTab === "personal"
        ? {
            label: "var(--cobalt-blue)",
            heading: "var(--cobalt-blue)",
            highlight: "#0a0050",
            sub: "rgba(10,10,60,0.80)",
            primaryBg: "var(--cobalt-blue)",
            primaryColor: "#fff",
            primaryShadow: "0 4px 20px rgba(24,0,231,0.35)",
            secondaryBg: "rgba(255,255,255,0.85)",
            secondaryHoverBg: "#ffffff",
            secondaryColor: "var(--cobalt-blue)",
            secondaryBorder: "1.5px solid rgba(24,0,231,0.35)",
            waIcon: "var(--cobalt-blue)",
            badgeBg: "rgba(255,255,255,0.55)",
            badgeBorder: "1px solid rgba(24,0,231,0.20)",
            badgeColor: "var(--navy-blue)",
        }
        : {
            label: "var(--orange)",
            heading: "#fff",
            highlight: "var(--orange)",
            sub: "rgba(255,255,255,0.82)",
            primaryBg: "var(--orange)",
            primaryColor: "#fff",
            primaryShadow: "0 4px 20px rgba(255,122,0,0.4)",
            secondaryBg: "rgba(255,255,255,0.12)",
            secondaryHoverBg: "rgba(255,255,255,0.2)",
            secondaryColor: "#fff",
            secondaryBorder: "1.5px solid rgba(255,255,255,0.3)",
            waIcon: "white",
            badgeBg: "rgba(255,255,255,0.1)",
            badgeBorder: "1px solid rgba(255,255,255,0.18)",
            badgeColor: "rgba(255,255,255,0.75)",
        };

    const scrollToPlans = () => {
        document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            style={{
                background: content.bg,
                padding: "48px 24px 64px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.4s ease",
            }}
        >
            {/* Decorative circles */}
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,122,0,0.13)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-80px", left: "-40px", width: "260px", height: "260px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            {/* Orange accent stripe */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "linear-gradient(90deg, var(--orange), var(--accent-orange))" }} />

            <div
                className={activeTab === "personal" ? "hero-personal-grid" : undefined}
                style={{ maxWidth: activeTab === "personal" ? "1100px" : "820px", margin: "0 auto", position: "relative", zIndex: 1 }}
            >
            {/* Text content */}
            <div className={activeTab === "personal" ? "hero-text" : undefined} style={{ textAlign: activeTab === "personal" ? "left" : "center" }}>
                <span className="section-label" style={{ color: palette.label, marginBottom: "12px", display: "block" }}>
                    {content.label}
                </span>

                <h1 style={{
                    fontFamily: "Inter, sans-serif", fontWeight: 900,
                    fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
                    color: palette.heading, lineHeight: 1.5, marginBottom: "24px",
                }}>
                    {content.heading} <br />
                    <span style={{ color: palette.highlight }}>{content.highlight}</span>
                </h1>

                <p style={{
                    fontFamily: "Roboto, sans-serif", fontWeight: 300,
                    fontSize: "clamp(0.95rem, 2vw, 1.08rem)",
                    color: palette.sub, lineHeight: 1.75,
                    maxWidth: "540px",
                    margin: activeTab === "personal" ? "0 0 32px" : "0 auto 32px",
                }}>
                    {content.sub}
                </p>

                {/* CTA Buttons */}
                <div style={{ display: "flex", gap: "12px", justifyContent: activeTab === "personal" ? "flex-start" : "center", flexWrap: "wrap", marginBottom: "32px" }}>
                    <button
                        onClick={scrollToPlans}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            background: palette.primaryBg, color: palette.primaryColor,
                            fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "15px",
                            padding: "14px 28px", borderRadius: "12px", border: "none",
                            cursor: "pointer", transition: "transform 0.15s, opacity 0.15s",
                            boxShadow: palette.primaryShadow,
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                        View Plans ↓
                    </button>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={fireWhatsAppConversion}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            background: palette.secondaryBg, color: palette.secondaryColor,
                            fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "15px",
                            padding: "14px 28px", borderRadius: "12px",
                            border: palette.secondaryBorder,
                            textDecoration: "none", transition: "background 0.15s, transform 0.15s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = palette.secondaryHoverBg; e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = palette.secondaryBg; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill={palette.waIcon}>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp Us
                    </a>
                </div>

                {/* Trust badges */}
                <div className="hero-trust-badges" style={{ display: "flex", gap: "8px", justifyContent: activeTab === "personal" ? "flex-start" : "center", flexWrap: "wrap" }}>
                    {trustBadges.map((badge) => (
                        <span key={badge} style={{
                            fontFamily: "Roboto, sans-serif", fontWeight: 500, fontSize: "12px",
                            color: palette.badgeColor,
                            background: palette.badgeBg,
                            border: palette.badgeBorder,
                            padding: "5px 13px", borderRadius: "100px",
                        }}>
                            {badge}
                        </span>
                    ))}
                </div>
            </div>

            {/* Promo banner image — personal tab only */}
            {activeTab === "personal" && (
                <div className="hero-personal-tv" style={{ flexShrink: 0, width: "470px", height: "302px", position: "relative" }}>
                    <Image
                        src="/images/hero-exclusive-treat.jpg"
                        alt="Exclusive treat for Unifi Home customers — devices from RM1/month"
                        fill
                        priority
                        sizes="(max-width: 768px) 90vw, 470px"
                        style={{ objectFit: "contain", objectPosition: "center", borderRadius: "16px" }}
                    />
                </div>
            )}
        </div>
        </section>
    );
}
