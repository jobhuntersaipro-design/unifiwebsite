"use client";

import { MessageCircle, Phone, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "601169497969";
const PHONE_NUMBER = "+60164609428";
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
        id: "contact-phone",
        icon: <Phone size={28} />,
        label: "Call Us",
        value: "+6016 460 9428",
        sub: "Mon–Fri, 9am–6pm",
        href: `tel:${PHONE_NUMBER}`,
        bg: "var(--cobalt-blue)",
        hoverBg: "var(--cobalt-blue-dark)",
        external: false,
    },
    {
        id: "contact-email",
        icon: <Mail size={28} />,
        label: "Email",
        value: "Send us an email",
        sub: "We'll get back to you",
        href: "mailto:info@yourreseller.com",
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
                        Ready to sign up? We&#39;re here to help.
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
                        Reach out and one of our Unifi specialists will guide you to the best plan for your needs.
                    </p>
                </div>

                {/* Contact cards */}
                <div className="contact-grid">
                    {contacts.map((c) => (
                        <a
                            key={c.id}
                            id={c.id}
                            href={c.href}
                            target={c.external ? "_blank" : undefined}
                            rel={c.external ? "noopener noreferrer" : undefined}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                padding: "36px 24px",
                                background: "#fff",
                                border: "1.5px solid #e8ebff",
                                borderRadius: "20px",
                                textDecoration: "none",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-6px)";
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.1)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                            }}
                        >
                            <div
                                style={{
                                    width: "64px",
                                    height: "64px",
                                    borderRadius: "18px",
                                    backgroundColor: c.bg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    marginBottom: "20px",
                                }}
                            >
                                {c.icon}
                            </div>
                            <p
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "11px",
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "#888",
                                    marginBottom: "8px",
                                }}
                            >
                                {c.label}
                            </p>
                            <p
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1rem",
                                    color: "#111",
                                    marginBottom: "6px",
                                }}
                            >
                                {c.value}
                            </p>
                            <p
                                style={{
                                    fontFamily: "Roboto, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "13px",
                                    color: "#888",
                                }}
                            >
                                {c.sub}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
