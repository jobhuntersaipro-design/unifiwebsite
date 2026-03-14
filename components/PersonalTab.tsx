"use client";

import React, { useRef, useState, useEffect } from "react";
import { Check, Wifi, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Star } from "lucide-react";

const WHATSAPP_NUMBER = "601169497969";

const PLAN_COLOR = "var(--cobalt-blue)";
const PLAN_LIGHT_BG = "#f0f2ff";
const PLAN_BORDER = "#dde2ff";
const POPULAR_COLOR = "var(--orange)";
const POPULAR_LIGHT_BG = "#fff5ed";
const POPULAR_BORDER = "#ffd9b8";

type BundleOption = {
    id: string;
    label: string;
    logo: "N" | "M";
    addPrice: number;
    bundleTotal: string;
    features: string[];
};

type Plan = {
    id: string;
    name: string;
    speed: string;
    unit: string;
    price: string;
    wasPrice: string | null;
    promo: string;
    color: string;
    lightBg: string;
    border: string;
    popular: boolean;
    includes: string[];
    bundles: BundleOption[];
    msg: string;
};

/* ── Bundle descriptions sourced from unifi.com.my/all-in-one ── */
const NETFLIX_BASIC_FEATURES = [
    "Unlimited ad-free movies, TV shows, and mobile games",
    "Download & watch on 1 supported device at a time",
    "Watch in HD",
];
const NETFLIX_STD_FEATURES = [
    "Unlimited ad-free movies, TV shows, and mobile games",
    "Download & watch on 2 supported devices at a time",
    "Watch in Full HD",
];
const HBO_MAX_FEATURES = [
    "Enjoy blockbusters, groundbreaking series, iconic hits, real-life stories and family favorites from HBO, Harry Potter, the DC Universe, Cartoon Network, Warner Bros. and Discovery, with HBO Max",
];

const plans: Plan[] = [
    {
        id: "personal-100",
        name: "UniVerse 100",
        speed: "100", unit: "Mbps",
        price: "89", wasPrice: "99",
        promo: "3 Months Free",
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: ["100Mbps / 50Mbps", "Wi-Fi 6 Combo Box", "24-hour service recovery"],
        bundles: [
            { id: "netflix-basic", label: "Netflix Basic", logo: "N", addPrice: 29.90, bundleTotal: "118.90", features: NETFLIX_BASIC_FEATURES },
        ],
        msg: "Hi, I'm interested in the Unifi UniVerse 100 (RM89/mth) plan. Can you help?",
    },
    {
        id: "personal-300",
        name: "UniVerse 300",
        speed: "300", unit: "Mbps",
        price: "129", wasPrice: "139",
        promo: "3 Months Free",
        color: POPULAR_COLOR, lightBg: POPULAR_LIGHT_BG, border: POPULAR_BORDER,
        popular: true,
        includes: ["300Mbps / 50Mbps", "Wi-Fi 6 Combo Box", "24-hour service recovery"],
        bundles: [
            { id: "netflix-basic", label: "Netflix Basic", logo: "N", addPrice: 3.00, bundleTotal: "132", features: NETFLIX_BASIC_FEATURES },
            { id: "hbo-max", label: "HBO Max Standard", logo: "M", addPrice: 3.00, bundleTotal: "132", features: HBO_MAX_FEATURES },
        ],
        msg: "Hi, I'm interested in the Unifi UniVerse 300 (RM129/mth) plan. Can you help?",
    },
    {
        id: "personal-500",
        name: "UniVerse 500",
        speed: "500", unit: "Mbps",
        price: "149", wasPrice: "159",
        promo: "3 Months Free",
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: ["500Mbps / 100Mbps", "Wi-Fi 6 Combo Box", "24-hour service recovery"],
        bundles: [
            { id: "netflix-std", label: "Netflix Standard", logo: "N", addPrice: 54.90, bundleTotal: "203.90", features: NETFLIX_STD_FEATURES },
        ],
        msg: "Hi, I'm interested in the Unifi UniVerse 500 (RM149/mth) plan. Can you help?",
    },
    {
        id: "personal-1gbps",
        name: "UniVerse 1Gbps",
        speed: "1", unit: "Gbps",
        price: "249", wasPrice: "289",
        promo: "3 Months Free",
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: ["1Gbps / 500Mbps", "Wi-Fi 7 Combo Box + Mesh", "12-hr priority service restoration"],
        bundles: [
            { id: "netflix-std", label: "Netflix Standard", logo: "N", addPrice: 44.90, bundleTotal: "293.90", features: NETFLIX_STD_FEATURES },
        ],
        msg: "Hi, I'm interested in the Unifi UniVerse 1Gbps (RM249/mth) plan. Can you help?",
    },
    {
        id: "personal-2gbps",
        name: "UniVerse 2Gbps",
        speed: "2", unit: "Gbps",
        price: "319", wasPrice: null,
        promo: "3 Months Free",
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: ["2Gbps / 1Gbps", "Wi-Fi 7 Combo Box + Mesh", "12-hr priority service restoration"],
        bundles: [
            { id: "netflix-std", label: "Netflix Standard", logo: "N", addPrice: 44.90, bundleTotal: "363.90", features: NETFLIX_STD_FEATURES },
        ],
        msg: "Hi, I'm interested in the Unifi UniVerse 2Gbps (RM319/mth) plan. Can you help?",
    },
];

/* ── Bundle row (Unifi-style expandable) ─────────────────────── */
function BundleCard({
    bundle, selected, planColor, lightBg, onToggle,
}: {
    bundle: BundleOption; selected: boolean; planColor: string; lightBg: string; onToggle: () => void;
}) {
    return (
        <div
            onClick={onToggle}
            style={{
                border: selected ? `2px solid ${planColor}` : "1.5px solid #e0e0e0",
                borderRadius: "10px",
                padding: "11px 13px",
                cursor: "pointer",
                background: selected ? lightBg : "#fff",
                transition: "border 0.2s, background 0.2s",
                userSelect: "none",
            }}
        >
            {/* Header row: square checkbox + name + dropdown */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Square View Details / Expand Area - checkmark toggle */}
                <div style={{
                    width: "20px", height: "20px", borderRadius: "3px", flexShrink: 0,
                    border: selected ? `2px solid ${planColor}` : "2px solid #ccc",
                    background: selected ? planColor : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                }}>
                    {selected && <Check size={14} color="#fff" strokeWidth={3} />}
                </div>

                {/* Name — nowrap prevents wrapping */}
                <span style={{
                    fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "14px",
                    color: "#111", flex: 1, whiteSpace: "nowrap", overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    {bundle.label}
                </span>

                {/* Expand toggle (Chevron dropdown arrow) */}
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--orange)", // Unifi uses orange for these toggles
                    flexShrink: 0, transition: "transform 0.2s",
                }}>
                    {selected ? <ChevronUp size={24} strokeWidth={2.5} /> : <ChevronDown size={24} strokeWidth={2.5} />}
                </div>
            </div>

            {/* Expanded: features + price at bottom */}
            {selected && (
                <div style={{ marginTop: "10px", paddingLeft: "28px" }}>
                    <ul style={{
                        listStyle: "none", display: "flex", flexDirection: "column",
                        gap: "5px", marginBottom: "10px",
                    }}>
                        {bundle.features.map((f) => (
                            <li key={f} style={{
                                display: "flex", alignItems: "flex-start", gap: "6px",
                                fontFamily: "Roboto, sans-serif", fontSize: "12px",
                                color: "#555", lineHeight: 1.5,
                            }}>
                                <Check size={10} style={{ color: planColor, marginTop: "3px", flexShrink: 0 }} />
                                {f}
                            </li>
                        ))}
                    </ul>
                    {/* Price at bottom */}
                    <div style={{ textAlign: "right" }}>
                        <span style={{
                            fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px",
                            color: planColor,
                        }}>
                            +RM{bundle.addPrice.toFixed(2)}/mth
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ── Plan Card ─────────────────────────────────────────────────── */
function PlanCard({ plan, innerRef }: { plan: Plan; innerRef?: React.Ref<HTMLDivElement> }) {
    const [bundleOpen, setBundleOpen] = useState(false);
    const [selectedBundle, setSelectedBundle] = useState<string | null>(null);

    const chosen = plan.bundles.find((b) => b.id === selectedBundle);
    const displayPrice = chosen ? chosen.bundleTotal : plan.price;
    const waMsg = chosen
        ? plan.msg.replace("Can you help?", `with ${chosen.label} add-on. Can you help?`)
        : plan.msg;

    return (
        <div
            ref={innerRef}
            id={plan.id}
            style={{
                position: "relative",
                background: "#fff",
                border: `2px solid ${plan.popular ? plan.color : plan.border}`,
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: plan.popular
                    ? "0 8px 32px rgba(255,122,0,0.18)"
                    : "0 2px 12px rgba(0,0,0,0.05)",
                display: "flex", flexDirection: "column",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 48px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = plan.popular
                    ? "0 8px 32px rgba(255,122,0,0.18)"
                    : "0 2px 12px rgba(0,0,0,0.05)";
            }}
        >
            {/* Popular badge */}
            {plan.popular && (
                <div style={{
                    background: plan.color, color: "white",
                    fontFamily: "Inter, sans-serif", fontWeight: 700,
                    fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase",
                    textAlign: "center", padding: "6px",
                }}>
                    <Star size={11} style={{ display: "inline", marginRight: "4px", marginBottom: "-1px" }} />
                    Most Popular
                </div>
            )}

            {/* Card header */}
            <div style={{
                backgroundColor: plan.lightBg, padding: "24px 20px 16px",
                borderBottom: `1px solid ${plan.border}`,
            }}>
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    background: plan.color, color: "white",
                    borderRadius: "6px", padding: "3px 10px", marginBottom: "12px",
                }}>
                    <Wifi size={12} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px" }}>
                        {plan.speed} {plan.unit}
                    </span>
                </div>

                <h3 style={{
                    fontFamily: "Inter, sans-serif", fontWeight: 900,
                    fontSize: "1rem", color: "#111", marginBottom: "12px",
                }}>
                    {plan.name}
                </h3>

                {/* Original Price Strikethrough (Or Invisible exact copy to force perfect height alignment) */}
                <div style={{ marginBottom: "4px" }}>
                    {plan.wasPrice ? (
                        <span style={{
                            fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600,
                            color: "#a0a0a0", textDecoration: "line-through",
                        }}>
                            RM{plan.wasPrice}
                        </span>
                    ) : (
                        <span style={{
                            fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600,
                            visibility: "hidden",
                        }}>
                            RM000
                        </span>
                    )}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "13px", color: plan.color }}>RM</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "2.4rem", color: plan.color, lineHeight: 1 }}>
                        {displayPrice}
                    </span>
                    <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "13px", color: "#888" }}>/mth</span>
                </div>

                {/* 3 Months Free pill — shown on ALL plans */}
                <div style={{
                    marginTop: "8px", display: "inline-block",
                    background: "rgba(255,122,0,0.1)", color: "var(--accent-orange)",
                    fontFamily: "Inter, sans-serif", fontWeight: 700,
                    fontSize: "11px", padding: "3px 10px", borderRadius: "20px",
                }}>
                    {plan.promo}
                </div>
            </div>

            {/* Features */}
            <div style={{ padding: "16px 20px", flex: 1 }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
                    {plan.includes.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                            <Check size={13} style={{ color: plan.color, marginTop: "2px", flexShrink: 0 }} />
                            <span style={{
                                fontFamily: "Roboto, sans-serif", fontWeight: 400,
                                fontSize: "12.5px", color: "#444", lineHeight: 1.5,
                            }}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Optional bundle section */}
            <div style={{ padding: "0 20px 14px" }}>
                {/* Toggle */}
                <button
                    onClick={() => setBundleOpen((o) => !o)}
                    style={{
                        display: "flex", alignItems: "center", gap: "7px",
                        background: "none", border: "none", padding: "4px 0 10px",
                        cursor: "pointer", width: "100%",
                        fontFamily: "Inter, sans-serif", fontWeight: 700,
                        fontSize: "10.5px", color: "#999", letterSpacing: "0.06em",
                        textTransform: "uppercase",
                    }}
                >
                    <span style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        width: "15px", height: "15px",
                        border: "1.5px solid #ccc", borderRadius: "3px",
                        fontSize: "13px", color: "#aaa", lineHeight: 1,
                        transform: bundleOpen ? "rotate(45deg)" : "none",
                        transition: "transform 0.2s",
                    }}>+</span>
                    Optional Bundle
                </button>

                {/* Bundle cards */}
                {bundleOpen && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {plan.bundles.map((b) => (
                            <BundleCard
                                key={b.id}
                                bundle={b}
                                selected={selectedBundle === b.id}
                                planColor={plan.color}
                                lightBg={plan.lightBg}
                                onToggle={() => setSelectedBundle((prev) => prev === b.id ? null : b.id)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* CTA */}
            <div style={{ padding: "0 20px 20px" }}>
                <a
                    id={`${plan.id}-enquire`}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "100%", backgroundColor: plan.color, color: "white",
                        fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "13px",
                        padding: "11px 0", borderRadius: "10px",
                        textDecoration: "none", transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                >
                    Register Now
                </a>
            </div>
        </div>
    );
}

export default function PersonalTab() {
    const gridRef = useRef<HTMLDivElement>(null);
    const firstCardRef = useRef<HTMLDivElement>(null);
    const lastCardRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    // Use Intersection Observer for rock-solid scroll boundary detection
    // that doesn't break due to trackpad overscroll (rubber-banding) or flex gaps
    useEffect(() => {
        const root = gridRef.current;
        const first = firstCardRef.current;
        const last = lastCardRef.current;
        
        if (!root || !first || !last) return;

        const observerOptions = {
            root: root,
            rootMargin: "0px",
            threshold: 0.95 // Requires 95% of card to be visible to be considered "at start/end"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === first) setIsAtStart(entry.isIntersecting);
                if (entry.target === last) setIsAtEnd(entry.isIntersecting);
            });
        }, observerOptions);

        observer.observe(first);
        observer.observe(last);

        return () => observer.disconnect();
    }, []);

    const scroll = (dir: "prev" | "next") => {
        if (!gridRef.current) return;
        const first = gridRef.current.firstElementChild as HTMLElement | null;
        const cardWidth = first ? first.offsetWidth + 14 : 300;
        gridRef.current.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
    };

    return (
        <section id="plans" style={{ padding: "64px 0 80px", background: "#fafbff" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <span className="section-label">Personal Plans</span>
                    <h2 style={{
                        fontFamily: "Inter, sans-serif", fontWeight: 900,
                        fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "var(--cobalt-blue)",
                        marginTop: "10px", marginBottom: "12px",
                    }}>
                        Unifi Home All-in-One
                    </h2>
                    <p style={{
                        fontFamily: "Roboto, sans-serif", fontWeight: 300,
                        fontSize: "1.05rem", color: "#555", maxWidth: "520px",
                        margin: "0 auto", lineHeight: 1.7,
                    }}>
                        Ultra-fast fibre broadband for your home. Pick your speed — we handle the rest.
                    </p>
                    <div style={{
                        display: "inline-block", marginTop: "16px",
                        background: "linear-gradient(90deg, var(--orange), var(--accent-orange))",
                        color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700,
                        fontSize: "15px", padding: "9px 22px", borderRadius: "24px",
                        letterSpacing: "0.01em",
                    }}>
                        ✦ Exclusive promo — 3 Months FREE on every plans
                    </div>
                </div>
            </div>

            {/* Plans scroll area */}
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
                <div className="plans-scroll-wrapper">
                    <div
                        className="plans-grid"
                        ref={gridRef}
                        style={{ padding: "8px 0 20px" }}
                    >
                        {plans.map((plan, index) => (
                            <PlanCard 
                                key={plan.id} 
                                plan={plan} 
                                innerRef={index === 0 ? firstCardRef : index === plans.length - 1 ? lastCardRef : undefined}
                            />
                        ))}
                    </div>

                    {/* Nav arrows — absolutely positioned via CSS (left/right edges) */}
                    {!isAtStart && (
                        <button
                            className="plans-scroll-btn plans-scroll-prev"
                            onClick={() => scroll("prev")}
                            aria-label="Previous plan"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}
                    {!isAtEnd && (
                        <button
                            className="plans-scroll-btn plans-scroll-next"
                            onClick={() => scroll("next")}
                            aria-label="Next plan"
                        >
                            <ChevronRight size={20} />
                        </button>
                    )}
                </div>
            </div>

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
                <p style={{
                    textAlign: "center", marginTop: "28px",
                    fontFamily: "Roboto, sans-serif", fontWeight: 400,
                    fontSize: "13px", color: "#888",
                }}>
                    All plans support optional TV packs, UNI5G Mobile add-ons &amp; lifestyle device bundles. Contact us to customise.
                </p>
            </div>
        </section>
    );
}
