"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                backgroundColor: "#0a0050",
                color: "white",
            }}
        >
            {/* Brand stripe at top */}
            <div
                className="brand-stripe"
                style={{ height: "5px" }}
            />

            {/* Main footer content */}
            <div
                className="footer-grid"
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "52px 24px 40px",
                }}
            >
                {/* Brand column */}
                <div>
                    <Image
                        src="/unifi-logo.png"
                        alt="Unifi"
                        width={120}
                        height={42}
                        style={{ objectFit: "contain", marginBottom: "12px", filter: "brightness(0) invert(1)" }}
                    />
                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "10px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--orange)",
                            marginBottom: "16px",
                        }}
                    >
                        Authorized Reseller
                    </p>
                    <p
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: 300,
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.6)",
                            lineHeight: 1.7,
                            maxWidth: "220px",
                        }}
                    >
                        Your trusted local Unifi authorized reseller — helping you stay connected with the best plans.
                    </p>
                </div>

                {/* Quick links */}
                <div>
                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "12px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.5)",
                            marginBottom: "20px",
                        }}
                    >
                        Quick Links
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                        {[
                            { label: "Personal Plans", href: "https://unifi.com.my/all-in-one" },
                            { label: "Business Broadband", href: "https://biz.unifi.com.my/products/unifi-business-fibre" },
                            { label: "Unifi Air Biz", href: "https://biz.unifi.com.my/products/wireless-broadband-unifi-air" },
                        ].map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        color: "rgba(255,255,255,0.7)",
                                        textDecoration: "none",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "white")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support column */}
                <div>
                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "12px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.5)",
                            marginBottom: "20px",
                        }}
                    >
                        Support
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                        {[
                            { label: "FAQ", href: "https://unifi.com.my/support/faq", id: "footer-faq" },
                            { label: "Terms & Conditions", href: "https://unifi.com.my/broadband/home/tnc", id: "footer-tnc" },
                        ].map((link) => (
                            <li key={link.label}>
                                <a
                                    id={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        color: "rgba(255,255,255,0.7)",
                                        textDecoration: "none",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "white")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        id="footer-whatsapp"
                        href="https://wa.me/601169497969?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Unifi%20plans."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            marginTop: "24px",
                            backgroundColor: "#25D366",
                            color: "white",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "13px",
                            padding: "10px 18px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            transition: "opacity 0.2s ease",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                    >
                        <MessageCircle size={14} />
                        WhatsApp Us
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                }}
            >
                <p
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                    }}
                >
                    © {year} Unifi Authorized Reseller. All rights reserved.
                </p>
                <p
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.3)",
                    }}
                >
                    Unifi is a trademark of TM Technology Services Sdn. Bhd.
                </p>
            </div>

        </footer>
    );
}
