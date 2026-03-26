"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname() || "";
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Personal", href: "/personal" },
        { name: "Business", href: "/business" },
        { name: "Blog", href: "/blog" },
    ];

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
            <div style={{ backgroundColor: "var(--cobalt-blue)", height: "24px" }} />

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
                    <div style={{
                        height: "44px",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Link href="/">
                            <Image
                                src="/unifi-logo.png"
                                alt="Unifi"
                                width={130}
                                height={44}
                                style={{ objectFit: "contain", objectPosition: "left center", display: "block" }}
                                priority
                            />
                        </Link>
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
                            display: "none" // Hide on very small screens if needed, but keeping original styles
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
                        gap: "6px",
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "15px",
                                    padding: "10px 24px",
                                    borderRadius: "8px",
                                    border: isActive
                                        ? "2px solid var(--cobalt-blue)"
                                        : "2px solid rgba(24,0,231,0.0)",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    backgroundColor:
                                        isActive ? "var(--cobalt-blue)" : "transparent",
                                    color: isActive ? "white" : "var(--cobalt-blue)",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = "rgba(24,0,231,0.05)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                    }
                                }}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
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
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
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
                                    textDecoration: "none",
                                    backgroundColor: "transparent",
                                    color:
                                        isActive ? "var(--orange)" : "var(--black)",
                                }}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
