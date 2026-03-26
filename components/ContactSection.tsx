"use client";

import { MessageCircle, Mail } from "lucide-react";
import { fireWhatsAppConversion } from "@/lib/gtag";

const WHATSAPP_NUMBER = "601169497969";
const WHATSAPP_MSG = encodeURIComponent("Hi, I'm interested in Unifi plan. Can you help me?");

const contacts = [
    {
        id: "contact-whatsapp",
        icon: <MessageCircle size={28} />,
        label: "WhatsApp",
        value: "+6011 6949 7969",
        sub: "Chat with us anytime",
        href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
        bg: "#25D366",
        hoverBg: "#1da851",
        external: true,
    },
    {
        id: "contact-email",
        icon: <Mail size={28} />,
        label: "Email",
        value: "hello@unifi.co.com",
        sub: "We'll get back to you within 30 minutes",
        href: "mailto:hello@unifi.co.com",
        bg: "var(--orange)",
        hoverBg: "var(--accent-orange)",
        external: false,
    },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            style={{
                background: "#f8f9ff",
                padding: "72px 24px 80px",
                borderTop: "1px solid #e8ebff",
            }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <span className="section-label">Get In Touch</span>
                    <h2
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                            color: "var(--cobalt-blue)",
                            marginTop: "10px",
                            marginBottom: "14px",
                        }}
                    >
                        Sign Up Today —{" "}
                        <span style={{ color: "var(--orange)" }}>We Reply Fast.</span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: 300,
                            fontSize: "1rem",
                            color: "#555",
                            maxWidth: "480px",
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        WhatsApp us now and our Unifi specialist will get your line set up — usually same week.
                    </p>
                </div>

                {/* Contact cards */}
                <div className="contact-grid">
                    {contacts.map((c) => {
                        const isWhatsApp = c.id === "contact-whatsapp";
                        return (
                            <a
                                key={c.id}
                                id={c.id}
                                className="contact-card"
                                href={c.href}
                                target={c.external ? "_blank" : undefined}
                                rel={c.external ? "noopener noreferrer" : undefined}
                                onClick={isWhatsApp ? fireWhatsAppConversion : undefined}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    padding: isWhatsApp ? "40px 24px" : "36px 24px",
                                    background: isWhatsApp ? "#f0fdf4" : "#fff",
                                    border: isWhatsApp ? "2px solid #25D366" : "1.5px solid #e8ebff",
                                    borderRadius: "20px",
                                    textDecoration: "none",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                    boxShadow: isWhatsApp ? "0 4px 24px rgba(37,211,102,0.18)" : "none",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-6px)";
                                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = isWhatsApp
                                        ? "0 16px 48px rgba(37,211,102,0.25)"
                                        : "0 16px 48px rgba(0,0,0,0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = isWhatsApp
                                        ? "0 4px 24px rgba(37,211,102,0.18)"
                                        : "none";
                                }}
                            >
                                {/* "Fastest Response" badge on WhatsApp */}
                                {isWhatsApp && (
                                    <div className="contact-badge" style={{
                                        position: "absolute", top: "14px", right: "14px",
                                        background: "#25D366", color: "white",
                                        fontFamily: "Inter, sans-serif", fontWeight: 700,
                                        fontSize: "10px", letterSpacing: "0.06em", textTransform: "uppercase",
                                        padding: "3px 10px", borderRadius: "100px",
                                    }}>
                                        Fastest
                                    </div>
                                )}

                                {/* Icon */}
                                <div
                                    className="contact-icon"
                                    style={{
                                        width: "64px", height: "64px",
                                        borderRadius: "18px",
                                        backgroundColor: c.bg,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "white",
                                        flexShrink: 0,
                                        marginBottom: "20px",
                                    }}
                                >
                                    {c.icon}
                                </div>

                                {/* Text */}
                                <div className="contact-card-text">
                                    <p style={{
                                        fontFamily: "Inter, sans-serif", fontWeight: 700,
                                        fontSize: "11px", letterSpacing: "0.12em",
                                        textTransform: "uppercase", color: "#888",
                                        marginBottom: "6px",
                                    }}>
                                        {c.label}
                                    </p>
                                    <p style={{
                                        fontFamily: "Inter, sans-serif", fontWeight: 700,
                                        fontSize: "1rem", color: "#111",
                                        marginBottom: "4px",
                                    }}>
                                        {c.value}
                                    </p>
                                    <p style={{
                                        fontFamily: "Roboto, sans-serif", fontWeight: 400,
                                        fontSize: "13px", color: "#888",
                                    }}>
                                        {c.sub}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
