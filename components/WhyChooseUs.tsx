"use client";

import Image from "next/image";

import { Wrench, BadgeCheck, Router } from "lucide-react";

const reasons = [
    {
        id: "reason-installation",
        icon: Wrench,
        title: "Free Installation",
        subtitle: "No upfront cost at all",
        description:
            "We handle everything from scheduling to setup — completely free. No surprises, no hidden installation fees.",
        color: "var(--cobalt-blue)",
        lightBg: "#f0f2ff",
    },
    {
        id: "reason-no-hidden",
        icon: BadgeCheck,
        title: "No Hidden Cost",
        subtitle: "Monthly fixed price",
        description:
            "What you see is what you pay. One transparent monthly price — no extra charges, ever.",
        color: "#7c3aed",
        lightBg: "#f5f0ff",
    },
    {
        id: "reason-modem",
        icon: Router,
        title: "Free Modem & Router",
        subtitle: "Total worth RM800",
        description:
            "Get a premium Wi-Fi 6 or Wi-Fi 7 combo box included with your plan — no equipment rental fees.",
        color: "var(--orange)",
        lightBg: "#fff5ed",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            id="why-choose-us"
            style={{
                background: "linear-gradient(160deg, #f8f9ff 0%, #fff 60%, #fffaf5 100%)",
                padding: "80px 24px 90px",
            }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <span className="section-label" style={{ marginBottom: "12px", display: "block" }}>
                        Why Choose Us
                    </span>
                    <h2
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                            color: "var(--cobalt-blue)",
                            marginBottom: "14px",
                            lineHeight: 1.15,
                        }}
                    >
                        Register With Us — <span style={{ color: "var(--orange)" }}>Zero Hassle</span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: 300,
                            fontSize: "1.05rem",
                            color: "#555",
                            maxWidth: "500px",
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        As your authorized Unifi reseller, we make signing up the easiest decision you&apos;ll ever make.
                    </p>
                </div>

                {/* Cards */}
                <div className="why-grid">
                    {reasons.map((reason) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={reason.id}
                                id={reason.id}
                                style={{
                                    background: "#fff",
                                    borderRadius: "20px",
                                    padding: "36px 28px",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                                    border: "1px solid #f0f0f0",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLDivElement;
                                    el.style.transform = "translateY(-6px)";
                                    el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLDivElement;
                                    el.style.transform = "translateY(0)";
                                    el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                                }}
                            >
                                {/* Icon container */}
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "14px",
                                        background: reason.lightBg,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "20px",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon size={26} color={reason.color} strokeWidth={2} />
                                </div>

                                <p
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 900,
                                        fontSize: "1.15rem",
                                        color: "#111",
                                        marginBottom: "4px",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {reason.title}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 700,
                                        fontSize: "12px",
                                        color: reason.color,
                                        marginBottom: "14px",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {reason.subtitle}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        color: "#666",
                                        lineHeight: 1.65,
                                    }}
                                >
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Promo Banner */}
                <div
                    id="promo-banner"
                    style={{
                        marginTop: "56px",
                        borderRadius: "24px",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateColumns: "360px 1fr",
                        minHeight: "300px",
                        boxShadow: "0 8px 48px rgba(255,94,0,0.25), 0 2px 8px rgba(0,0,0,0.08)",
                    }}
                    className="promo-banner-grid"
                >
                    {/* LEFT — orange */}
                    <div
                        style={{
                            background: "#FF7A00",
                            padding: "44px 44px 44px 48px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            position: "relative",
                            overflow: "hidden",
                        }}
                        className="promo-left-panel"
                    >
                        {/* decorative circles */}
                        <div style={{ position: "absolute", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(255,255,255,0.09)", bottom: "-110px", right: "-90px" }} />
                        <div style={{ position: "absolute", width: "130px", height: "130px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", top: "-40px", left: "-30px" }} />


                        {/* Text */}
                        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "2px" }}>
                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "13px", fontWeight: 700, fontFamily: "Roboto, sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "10px" }}>
                                ✦ Exclusive Promotion
                            </span>
                            <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: "Roboto, sans-serif", color: "#fff", textTransform: "uppercase", letterSpacing: "0.14em", background: "rgba(255,255,255,0.18)", display: "inline-block", padding: "3px 12px", borderRadius: "100px", width: "fit-content", marginBottom: "8px" }}>
                                Free
                            </span>
                            <div style={{ fontSize: "28px", fontWeight: 900, fontFamily: "Inter, sans-serif", color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1.25 }}>
                                Equipment &amp;<br />Installation
                            </div>
                            
                            <div style={{ marginTop: "12px" }}>
                                <div style={{ fontSize: "18px", fontWeight: 900, fontFamily: "Inter, sans-serif", color: "#fff", textTransform: "uppercase", opacity: 0.9 }}>
                                    Worth 
                                </div>
                                <div style={{ fontSize: "48px", fontWeight: 900, fontFamily: "Inter, sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, textShadow: "0 2px 12px rgba(0,0,0,0.15)", marginTop: "-4px" }}>
                                    <span style={{ fontSize: "32px", display: "inline-block", marginRight: "4px", verticalAlign: "middle" }}>RM</span>800
                                </div>
                            </div>
                        </div>
                        <div />
                    </div>

                    {/* RIGHT — white with device cards */}
                    <div
                        style={{
                            background: "#fff",
                            padding: "40px 44px 40px 36px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "14px",
                                width: "100%",
                            }}
                        >
                            {/* DECT Phone */}
                            <div className="device-card-promo">
                                <div style={{ width: "110px", height: "110px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                                        <rect x="24" y="4" width="32" height="58" rx="9" fill="#222" />
                                        <rect x="28" y="9" width="24" height="15" rx="3.5" fill="#1e3a6e" fillOpacity="0.9" />
                                        <rect x="29" y="10" width="22" height="13" rx="2.5" fill="#2a4a8a" fillOpacity="0.5" />
                                        <circle cx="33" cy="31" r="3" fill="#FF7A00" fillOpacity="0.85" />
                                        <circle cx="40" cy="31" r="3" fill="#FF7A00" fillOpacity="0.85" />
                                        <circle cx="47" cy="31" r="3" fill="#FF7A00" fillOpacity="0.85" />
                                        <circle cx="33" cy="39" r="3" fill="#555" />
                                        <circle cx="40" cy="39" r="3" fill="#FF7A00" />
                                        <circle cx="47" cy="39" r="3" fill="#555" />
                                        <circle cx="33" cy="47" r="3" fill="#555" />
                                        <circle cx="40" cy="47" r="3" fill="#555" />
                                        <circle cx="47" cy="47" r="3" fill="#555" />
                                        <circle cx="33" cy="55" r="3" fill="#333" />
                                        <circle cx="40" cy="55" r="3" fill="#333" />
                                        <circle cx="47" cy="55" r="3" fill="#333" />
                                        <rect x="18" y="62" width="44" height="14" rx="7" fill="#111" />
                                        <rect x="24" y="60" width="32" height="7" rx="3.5" fill="#1a1a1a" />
                                    </svg>
                                </div>
                                <span style={{ fontSize: "16px", fontWeight: 700, fontFamily: "Roboto, sans-serif", color: "#ff5e00", textAlign: "center" }}>DECT Phone</span>
                                <span style={{ background: "#FF7A00", color: "#fff", fontSize: "13px", fontWeight: 700, fontFamily: "Roboto, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "100px" }}>Free</span>
                            </div>

                            {/* TV Box */}
                            <div className="device-card-promo">
                                <div style={{ width: "110px", height: "110px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                                        <rect x="6" y="34" width="68" height="30" rx="7" fill="#1a1a1a" />
                                        <rect x="13" y="39" width="42" height="20" rx="3.5" fill="#1a1a3e" fillOpacity="0.85" />
                                        <rect x="14" y="40" width="40" height="18" rx="3" fill="#1e2560" fillOpacity="0.3" />
                                        <circle cx="65" cy="49" r="4.5" fill="#FF7A00" fillOpacity="0.9" />
                                        <rect x="32" y="64" width="16" height="5" rx="2.5" fill="#333" />
                                        <rect x="28" y="5" width="24" height="36" rx="12" fill="#222" />
                                        <circle cx="40" cy="17" r="7" fill="#FF7A00" fillOpacity="0.9" />
                                        <rect x="36" y="28" width="8" height="2.5" rx="1.2" fill="#555" />
                                        <rect x="36" y="33" width="8" height="2.5" rx="1.2" fill="#555" />
                                    </svg>
                                </div>
                                <span style={{ fontSize: "16px", fontWeight: 700, fontFamily: "Roboto, sans-serif", color: "#ff5e00", textAlign: "center" }}>TV Box</span>
                                <span style={{ background: "#FF7A00", color: "#fff", fontSize: "13px", fontWeight: 700, fontFamily: "Roboto, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "100px" }}>Free</span>
                            </div>

                            {/* Combo Box */}
                            <div className="device-card-promo">
                                <div style={{ width: "110px", height: "110px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                                        <rect x="2" y="48" width="34" height="20" rx="5" fill="#2a2a2a" stroke="#FF7A00" strokeWidth="1.2" strokeOpacity="0.4" />
                                        <rect x="7" y="53" width="10" height="7" rx="2" fill="#1e3a6e" fillOpacity="0.9" />
                                        <circle cx="30" cy="58" r="3" fill="#FF7A00" fillOpacity="0.9" />
                                        <circle cx="22" cy="58" r="3" fill="#4ade80" fillOpacity="0.7" />
                                        <path d="M36 58 Q42 58 44 58" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                                        <rect x="44" y="46" width="34" height="22" rx="5" fill="#2a2a2a" stroke="#FF7A00" strokeWidth="1.2" strokeOpacity="0.4" />
                                        <line x1="50" y1="46" x2="47" y2="24" stroke="#555" strokeWidth="3" strokeLinecap="round" />
                                        <line x1="61" y1="46" x2="61" y2="18" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.9" />
                                        <line x1="72" y1="46" x2="75" y2="24" stroke="#555" strokeWidth="3" strokeLinecap="round" />
                                        <circle cx="52" cy="57" r="2.8" fill="#FF7A00" fillOpacity="0.9" />
                                        <circle cx="60" cy="57" r="2.8" fill="#4ade80" fillOpacity="0.7" />
                                        <circle cx="68" cy="57" r="2.8" fill="#4ade80" fillOpacity="0.5" />
                                    </svg>
                                </div>
                                <span style={{ fontSize: "16px", fontWeight: 700, fontFamily: "Roboto, sans-serif", color: "#ff5e00", textAlign: "center" }}>Combo Box</span>
                                <span style={{ fontSize: "12px", color: "#ff5e00", fontFamily: "Roboto, sans-serif", fontWeight: 400, textAlign: "center", marginTop: "-6px" }}>ONT Modem + WiFi Router</span>
                                <span style={{ background: "#FF7A00", color: "#fff", fontSize: "13px", fontWeight: 700, fontFamily: "Roboto, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "100px" }}>Free</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
