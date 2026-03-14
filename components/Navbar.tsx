"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

interface NavbarProps {
    activeTab: "personal" | "business";
    onTabChange: (tab: "personal" | "business") => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            id="navbar"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                backgroundColor: "#fff",
                boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "0 1px 0 #e5e5e5",
                transition: "box-shadow 0.3s ease",
            }}
        >
            {/* Top bar */}
            <div
                style={{
                    backgroundColor: "var(--cobalt-blue)",
                    padding: "6px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <a
                    href="tel:+60164609428"
                    style={{
                        color: "white",
                        fontSize: "12px",
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 500,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                    }}
                >
                    <Phone size={12} />
                    +6016 460 9428
                </a>
            </div>

            {/* Main nav */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "68px",
                }}
            >
                {/* Logo + badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {/* Clip container prevents PNG white margins from bleeding outside navbar */}
                    <div style={{
                        height: "44px",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Image
                            src="/unifi-logo.png"
                            alt="Unifi"
                            width={130}
                            height={44}
                            style={{ objectFit: "contain", objectPosition: "left center", display: "block" }}
                            priority
                        />
                    </div>
                    <span
                        style={{
                            fontSize: "10px",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "var(--cobalt-blue)",
                            border: "1.5px solid var(--cobalt-blue)",
                            borderRadius: "4px",
                            padding: "2px 6px",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Authorized Reseller
                    </span>
                </div>

                {/* Desktop tab navigation */}
                <nav
                    id="tab-nav"
                    style={{
                        display: "flex",
                        gap: "4px",
                    }}
                    className="desktop-nav"
                >
                    {(["personal", "business"] as const).map((tab) => (
                        <button
                            key={tab}
                            id={`tab-${tab}`}
                            onClick={() => onTabChange(tab)}
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 700,
                                fontSize: "15px",
                                padding: "10px 24px",
                                borderRadius: "8px",
                                border: activeTab === tab
                                    ? "2px solid var(--cobalt-blue)"
                                    : "2px solid rgba(24,0,231,0.3)",
                                cursor: "pointer",
                                textTransform: "capitalize",
                                transition: "all 0.2s ease",
                                backgroundColor:
                                    activeTab === tab ? "var(--cobalt-blue)" : "transparent",
                                color: activeTab === tab ? "white" : "var(--cobalt-blue)",
                            }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    id="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--cobalt-blue)",
                    }}
                    className="mobile-menu-btn"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div
                    style={{
                        backgroundColor: "#fff",
                        borderTop: "1px solid #e5e5e5",
                        padding: "16px 24px",
                    }}
                >
                    {(["personal", "business"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                onTabChange(tab);
                                setMobileMenuOpen(false);
                            }}
                            style={{
                                display: "block",
                                width: "100%",
                                textAlign: "left",
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 700,
                                fontSize: "16px",
                                padding: "12px 0",
                                border: "none",
                                borderBottom: "1px solid #f0f0f0",
                                cursor: "pointer",
                                backgroundColor: "transparent",
                                color:
                                    activeTab === tab ? "var(--cobalt-blue)" : "var(--black)",
                            }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            )}

        </header>
    );
}
