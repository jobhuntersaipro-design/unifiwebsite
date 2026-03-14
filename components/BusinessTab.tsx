"use client";

import { Check, Wifi, Zap, Star } from "lucide-react";

const WHATSAPP_NUMBER = "601169497969";

// ─── Business Broadband Plans ────────────────────────────────────────────────
const fibrePlans = [
    {
        id: "biz-100",
        speed: "100Mbps",
        label: "Best Value",
        price: "129",
        wasPrice: "139",
        popular: false,
        users: "2–3 users / 5 devices",
        type: "Flexible Micro Office",
        router: "Wi-Fi 6 Combo Box",
        mesh: "—",
        backup: "Add on RM30/mth",
        restoration: "24 hours",
        svp: "SVP50",
        msg: "Hi, I'm interested in Unifi Business Broadband 100Mbps (RM129/mth). Can you help?",
    },
    {
        id: "biz-300",
        speed: "300Mbps",
        label: "Most Popular",
        price: "199",
        wasPrice: "249",
        popular: true,
        users: "6 users / 10 devices",
        type: "Small Outlet / NGO Office",
        router: "Wi-Fi 6 Combo Box",
        mesh: "Wi-Fi 6 Mesh",
        backup: "Add on RM30/mth",
        restoration: "24 hours",
        svp: "SVP50",
        msg: "Hi, I'm interested in Unifi Business Broadband 300Mbps (RM199/mth). Can you help?",
    },
    {
        id: "biz-500",
        speed: "500Mbps",
        label: "Best for Productivity",
        price: "239",
        wasPrice: "299",
        popular: false,
        users: "10 heavy users",
        type: "Virtual Office / Shop",
        router: "Wi-Fi 6 Combo Box",
        mesh: "Wi-Fi 6 Mesh",
        backup: "Add on RM30/mth",
        restoration: "24 hours",
        svp: "SVP70",
        msg: "Hi, I'm interested in Unifi Business Broadband 500Mbps (RM239/mth). Can you help?",
    },
    {
        id: "biz-1gbps",
        speed: "1Gbps",
        label: "High Performance",
        price: "319",
        wasPrice: null,
        popular: false,
        users: "10 power users",
        type: "Larger Business Premise",
        router: "Wi-Fi 7 Combo Box",
        mesh: "Wi-Fi 7 Mesh",
        backup: "FREE",
        restoration: "12 business hours",
        svp: "SVP70",
        msg: "Hi, I'm interested in Unifi Business Broadband 1Gbps (RM319/mth). Can you help?",
    },
    {
        id: "biz-2gbps",
        speed: "2Gbps",
        label: "Ultimate Power",
        price: "369",
        wasPrice: null,
        popular: false,
        users: "10+ power users",
        type: "Larger Business Premise",
        router: "Wi-Fi 7 Combo Box",
        mesh: "Wi-Fi 7 Mesh",
        backup: "FREE",
        restoration: "12 business hours",
        svp: "SVP70",
        msg: "Hi, I'm interested in Unifi Business Broadband 2Gbps (RM369/mth). Can you help?",
    },
];

// ─── Unifi Air Biz Plans ─────────────────────────────────────────────────────
const airPlans = [
    {
        id: "air-99",
        name: "Unifi Air Biz 5G 99",
        price: "99",
        popular: false,
        data: "Unlimited 5G Data",
        dataNote: "Fair Usage Policy (FUP applies)",
        devices: "Up to 5 devices",
        device: "FREE 5G Router (Wi-Fi 6) or Mi-Fi",
        upfront: "RM99",
        contract: "24 months (with device) / No contract (SIM only)",
        msg: "Hi, I'm interested in Unifi Air Biz 5G 99 (RM99/mth). Can you help?",
    },
    {
        id: "air-149",
        name: "Unifi Air Biz 5G 149",
        price: "149",
        popular: true,
        data: "Unlimited 5G Data",
        dataNote: "No data caps — enjoy high-speed internet",
        devices: "Up to 10 devices",
        device: "FREE 5G Router (Wi-Fi 6)",
        upfront: "RM149",
        contract: "24 months (with device) / No contract (SIM only)",
        msg: "Hi, I'm interested in Unifi Air Biz 5G 149 (RM149/mth). Can you help?",
    },
];

// ─── Shared styles ────────────────────────────────────────────────────────────
const BLUE = "var(--cobalt-blue)";
const POPULAR_ORANGE = "var(--orange)";
const AIR_PURPLE = "#7c3aed";
const ORANGE = "var(--orange)";

export default function BusinessTab() {
    return (
        <section id="plans" style={{ padding: "64px 24px 80px", background: "#fafbff" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                {/* ── Section 1: Business Broadband ── */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <span className="section-label">Business Fibre Broadband</span>
                    <h2 style={{
                        fontFamily: "Inter, sans-serif", fontWeight: 900,
                        fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: BLUE,
                        marginTop: "10px", marginBottom: "10px",
                    }}>
                        Unifi Business Broadband
                    </h2>
                    <p style={{
                        fontFamily: "Roboto, sans-serif", fontWeight: 300,
                        fontSize: "1.05rem", color: "#555", maxWidth: "540px",
                        margin: "0 auto", lineHeight: 1.7,
                    }}>
                        Ultra-fast fibre up to 2Gbps. All plans include a FREE Business Call Plan (SVP) and FREE DECT Phone.
                    </p>
                </div>

                {/* Fibre plan cards */}
                <div className="plans-grid">
                    {fibrePlans.map((plan) => (
                        <div
                            key={plan.id}
                            id={plan.id}
                            style={{
                                position: "relative",
                                background: "#fff",
                                border: `2px solid ${plan.popular ? POPULAR_ORANGE : "#dde2ff"}`,
                                borderRadius: "18px", overflow: "hidden",
                                boxShadow: plan.popular ? "0 8px 32px rgba(255,122,0,0.18)" : "0 2px 10px rgba(0,0,0,0.05)",
                                display: "flex", flexDirection: "column",
                                transition: "transform 0.22s ease, box-shadow 0.22s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.transform = "translateY(-6px)";
                                el.style.boxShadow = "0 18px 44px rgba(0,0,0,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.transform = "translateY(0)";
                                el.style.boxShadow = plan.popular ? "0 8px 32px rgba(255,122,0,0.18)" : "0 2px 10px rgba(0,0,0,0.05)";
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    background: POPULAR_ORANGE, color: "white", textAlign: "center",
                                    fontFamily: "Inter, sans-serif", fontWeight: 700,
                                    fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px",
                                }}>
                                    <Star size={10} style={{ display: "inline", marginRight: "3px", marginBottom: "-1px" }} />
                                    {plan.label}
                                </div>
                            )}

                            {/* Header */}
                            <div style={{
                                background: plan.popular ? "#fff5ed" : "#f8f9ff",
                                padding: "20px 18px 14px",
                                borderBottom: `1px solid ${plan.popular ? "#ffd9b8" : "#dde2ff"}`,
                            }}>
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: "5px",
                                    background: plan.popular ? POPULAR_ORANGE : BLUE, color: "white",
                                    borderRadius: "6px", padding: "3px 9px", marginBottom: "10px",
                                }}>
                                    <Wifi size={11} />
                                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "13px" }}>{plan.speed}</span>
                                </div>

                                {!plan.popular && (
                                    <p style={{
                                        fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "11px",
                                        color: "#888", marginBottom: "6px",
                                    }}>{plan.label}</p>
                                )}

                                <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: plan.popular ? POPULAR_ORANGE : BLUE }}>RM</span>
                                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "2.2rem", color: plan.popular ? POPULAR_ORANGE : BLUE, lineHeight: 1 }}>{plan.price}</span>
                                    <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "12px", color: "#888" }}>/mth</span>
                                </div>
                                {plan.wasPrice && (
                                    <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "11px", color: "#bbb", textDecoration: "line-through", marginTop: "2px" }}>
                                        Was RM{plan.wasPrice}/mth
                                    </p>
                                )}
                            </div>

                            {/* Details */}
                            <div style={{ padding: "14px 18px", flex: 1 }}>
                                {[
                                    { label: "Users", value: plan.users },
                                    { label: "Router", value: plan.router },
                                    { label: "Mesh WiFi", value: plan.mesh },
                                    { label: "5G Backup", value: plan.backup },
                                    { label: "Restoration", value: plan.restoration },
                                    { label: "Free Call Plan", value: plan.svp },
                                ].map((row) => (
                                    <div key={row.label} style={{
                                        display: "flex", justifyContent: "space-between", gap: "8px",
                                        padding: "6px 0", borderBottom: "1px solid #f0f0f0",
                                    }}>
                                        <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "11.5px", color: "#888", flexShrink: 0 }}>{row.label}</span>
                                        <span style={{
                                            fontFamily: "Roboto, sans-serif", fontWeight: 500, fontSize: "11.5px",
                                            color: row.value === "FREE" ? "#16a34a" : "#222", textAlign: "right",
                                        }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div style={{ padding: "14px 18px" }}>
                                <a
                                    id={`${plan.id}-enquire`}
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.msg)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        gap: "6px", width: "100%",
                                        backgroundColor: plan.popular ? POPULAR_ORANGE : BLUE, color: "white",
                                        fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px",
                                        padding: "10px 0", borderRadius: "9px",
                                        textDecoration: "none", transition: "opacity 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Divider ── */}
                <div style={{
                    display: "flex", alignItems: "center", gap: "16px", marginBottom: "52px", marginTop: "30px"
                }}>
                    <div style={{ flex: 1, height: "1px", background: "#e0e4ff" }} />
                    <span style={{
                        fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px",
                        letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa",
                    }}>Or choose wireless</span>
                    <div style={{ flex: 1, height: "1px", background: "#e0e4ff" }} />
                </div>

                {/* ── Section 2: Unifi Air Biz ── */}
                <div style={{ textAlign: "center", marginBottom: "36px" }}>
                    <span className="section-label" style={{ color: ORANGE }}>Wireless Broadband</span>
                    <h2 style={{
                        fontFamily: "Inter, sans-serif", fontWeight: 900,
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#111",
                        marginTop: "10px", marginBottom: "10px",
                    }}>
                        Unifi Air Biz
                    </h2>
                    <p style={{
                        fontFamily: "Roboto, sans-serif", fontWeight: 300,
                        fontSize: "1rem", color: "#555", maxWidth: "500px",
                        margin: "0 auto", lineHeight: 1.7,
                    }}>
                        No cables, no installation required. Plug and play 5G internet with a FREE router from day one.
                    </p>
                </div>

                {/* Air Biz plan cards — centred, wider */}
                <div className="airbiz-grid">
                    {airPlans.map((plan) => (
                        <div
                            key={plan.id}
                            id={plan.id}
                            style={{
                                position: "relative",
                                background: "#fff",
                                border: `2px solid ${plan.popular ? AIR_PURPLE : "#e8e0ff"}`,
                                borderRadius: "20px", overflow: "hidden",
                                boxShadow: plan.popular ? "0 8px 32px rgba(124,58,237,0.18)" : "0 2px 12px rgba(0,0,0,0.05)",
                                display: "flex", flexDirection: "column",
                                transition: "transform 0.22s ease, box-shadow 0.22s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.transform = "translateY(-6px)";
                                el.style.boxShadow = "0 20px 48px rgba(0,0,0,0.1)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.transform = "translateY(0)";
                                el.style.boxShadow = plan.popular ? "0 8px 32px rgba(124,58,237,0.18)" : "0 2px 12px rgba(0,0,0,0.05)";
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    background: AIR_PURPLE, color: "white", textAlign: "center",
                                    fontFamily: "Inter, sans-serif", fontWeight: 700,
                                    fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px",
                                }}>
                                    <Star size={10} style={{ display: "inline", marginRight: "4px", marginBottom: "-1px" }} />
                                    Recommended
                                </div>
                            )}

                            {/* Header */}
                            <div style={{
                                background: plan.popular ? "#f5f0ff" : "#faf8ff",
                                padding: "28px 28px 20px",
                                borderBottom: `1px solid ${plan.popular ? "#ddd0ff" : "#e8e0ff"}`,
                            }}>
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: "6px",
                                    background: AIR_PURPLE, color: "white",
                                    borderRadius: "8px", padding: "4px 12px", marginBottom: "14px",
                                }}>
                                    <Zap size={13} />
                                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px" }}>5G Wireless</span>
                                </div>

                                <h3 style={{
                                    fontFamily: "Inter, sans-serif", fontWeight: 900,
                                    fontSize: "1.1rem", color: "#111", marginBottom: "14px",
                                }}>{plan.name}</h3>

                                <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "13px", color: AIR_PURPLE }}>RM</span>
                                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "2.8rem", color: AIR_PURPLE, lineHeight: 1 }}>{plan.price}</span>
                                    <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "13px", color: "#888" }}>/mth</span>
                                </div>
                                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "11px", color: "#aaa", marginTop: "4px" }}>
                                    Upfront payment: {plan.upfront}
                                </p>
                            </div>

                            {/* Features */}
                            <div style={{ padding: "20px 28px", flex: 1 }}>
                                {[
                                    { icon: "📡", label: plan.data, sub: plan.dataNote },
                                    { icon: "📱", label: `Connectivity: ${plan.devices}` },
                                    { icon: "📦", label: plan.device },
                                    { icon: "📄", label: plan.contract },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "12px", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "14px", flexShrink: 0 }}>{item.icon}</span>
                                        <div>
                                            <p style={{
                                                fontFamily: "Roboto, sans-serif", fontWeight: 500,
                                                fontSize: "13px", color: "#222", lineHeight: 1.4,
                                            }}>{item.label}</p>
                                            {item.sub && (
                                                <p style={{
                                                    fontFamily: "Roboto, sans-serif", fontWeight: 400,
                                                    fontSize: "11.5px", color: "#888", marginTop: "2px",
                                                }}>{item.sub}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div style={{ padding: "16px 28px" }}>
                                <a
                                    id={`${plan.id}-enquire`}
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.msg)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        gap: "8px", width: "100%",
                                        backgroundColor: AIR_PURPLE, color: "white",
                                        fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "14px",
                                        padding: "13px 0", borderRadius: "10px",
                                        textDecoration: "none", transition: "opacity 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <p style={{
                    textAlign: "center", marginTop: "24px",
                    fontFamily: "Roboto, sans-serif", fontWeight: 400,
                    fontSize: "12px", color: "#aaa",
                }}>
                    All plans subject to 24-month contract when bundled with a free device. SIM-only plans available with no contract commitment.
                </p>
            </div>
        </section>
    );
}
