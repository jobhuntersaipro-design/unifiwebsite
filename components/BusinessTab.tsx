"use client";

import React from "react";
import { Check, Wifi, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CheckCoverageButton from "@/components/CoverageModal";

const WHATSAPP_NUMBER = "601169497969";

const PLAN_COLOR = "var(--cobalt-blue)";
const PLAN_LIGHT_BG = "#f0f2ff";
const PLAN_BORDER = "#dde2ff";
const POPULAR_COLOR = "var(--orange)";
const POPULAR_LIGHT_BG = "#fff5ed";
const POPULAR_BORDER = "#ffd9b8";

type BizPlan = {
    id: string;
    name: string;
    speed: string;
    unit: string;
    price: string;
    wasPrice: string | null;
    badge: string | null;
    color: string;
    lightBg: string;
    border: string;
    popular: boolean;
    includes: string[];
    msg: string;
};

const plans: BizPlan[] = [
    {
        id: "biz-100",
        name: "Business 100Mbps",
        speed: "100", unit: "Mbps",
        price: "99", wasPrice: "129",
        badge: null,
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: [
            "100Mbps / 50Mbps upload",
            "Wi-Fi 5 Certified Router",
            "FREE Business Call Plan (worth RM50)",
            "Add-on Mesh Wi-Fi from RM15/mth",
        ],
        msg: "Hi, I'm interested in the Unifi Business Broadband 100Mbps (RM99/mth) plan. Can you help?",
    },
    {
        id: "biz-300",
        name: "Business 300Mbps",
        speed: "300", unit: "Mbps",
        price: "139", wasPrice: "199",
        badge: "BEST SELLER",
        color: POPULAR_COLOR, lightBg: POPULAR_LIGHT_BG, border: POPULAR_BORDER,
        popular: true,
        includes: [
            "300Mbps / 50Mbps upload",
            "Wi-Fi 6 Certified Router + Mesh",
            "FREE Business Call Plan (worth RM50)",
        ],
        msg: "Hi, I'm interested in the Unifi Business Broadband 300Mbps (RM139/mth) plan. Can you help?",
    },
    {
        id: "biz-500",
        name: "Business 500Mbps",
        speed: "500", unit: "Mbps",
        price: "179", wasPrice: "239",
        badge: null,
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: [
            "500Mbps / 100Mbps upload",
            "Wi-Fi 6 Certified Router + Mesh",
            "FREE Business Call Plan (worth RM50)",
        ],
        msg: "Hi, I'm interested in the Unifi Business Broadband 500Mbps (RM179/mth) plan. Can you help?",
    },
    {
        id: "biz-800",
        name: "Business 800Mbps",
        speed: "800", unit: "Mbps",
        price: "259", wasPrice: "349",
        badge: null,
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: [
            "800Mbps / 200Mbps upload",
            "Wi-Fi 6 Certified Router + Mesh",
            "FREE Business Call Plan (worth RM70)",
        ],
        msg: "Hi, I'm interested in the Unifi Business Broadband 800Mbps (RM259/mth) plan. Can you help?",
    },
    {
        id: "biz-1gbps",
        name: "Business 1Gbps",
        speed: "1", unit: "Gbps",
        price: "319", wasPrice: "419",
        badge: "BEST VALUE",
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: [
            "1Gbps / 500Mbps upload",
            "Wi-Fi 6 Optical Network Router & Mesh",
            "FREE Business Call Plan (worth RM70)",
            "ULTRA CREW included",
        ],
        msg: "Hi, I'm interested in the Unifi Business Broadband 1Gbps (RM319/mth) plan. Can you help?",
    },
    {
        id: "biz-2gbps",
        name: "Business 2Gbps",
        speed: "2", unit: "Gbps",
        price: "369", wasPrice: "469",
        badge: null,
        color: PLAN_COLOR, lightBg: PLAN_LIGHT_BG, border: PLAN_BORDER,
        popular: false,
        includes: [
            "2Gbps / 1Gbps upload (Aggregated)",
            "Wi-Fi 6 Optical Network Router & Mesh",
            "FREE Business Call Plan (worth RM70)",
            "ULTRA CREW included",
        ],
        msg: "Hi, I'm interested in the Unifi Business Broadband 2Gbps (RM369/mth) plan. Can you help?",
    },
];

function PlanCard({ plan }: { plan: BizPlan }) {
    return (
        <div
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
            {/* Badge bar */}
            {plan.badge && (
                <div style={{
                    background: plan.color, color: "white",
                    fontFamily: "Inter, sans-serif", fontWeight: 700,
                    fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase",
                    textAlign: "center", padding: "6px",
                }}>
                    <Star size={11} style={{ display: "inline", marginRight: "4px", marginBottom: "-1px" }} />
                    {plan.badge}
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

                {/* Strikethrough placeholder keeps height consistent */}
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
                        {plan.price}
                    </span>
                    <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "13px", color: "#888" }}>/mth</span>
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

            {/* CTA */}
            <div style={{ padding: "0 20px 20px" }}>
                <a
                    id={`${plan.id}-enquire`}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.msg)}`}
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

export default function BusinessTab() {
    return (
        <section id="plans" style={{ padding: "64px 0 80px", background: "#fafbff" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <span className="section-label">Business Plans</span>
                    <h2 style={{
                        fontFamily: "Inter, sans-serif", fontWeight: 900,
                        fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "var(--cobalt-blue)",
                        marginTop: "10px", marginBottom: "12px",
                    }}>
                        Unifi Business Broadband
                    </h2>
                    <p style={{
                        fontFamily: "Roboto, sans-serif", fontWeight: 300,
                        fontSize: "1.05rem", color: "#555", maxWidth: "520px",
                        margin: "0 auto", lineHeight: 1.7,
                    }}>
                        Ultra-fast fibre up to 2Gbps. All plans include a FREE Business Call Plan (SVP) and FREE DECT Phone.
                    </p>
                </div>

                {/* Swiper slider */}
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    initialSlide={1}
                    onClick={(swiper) => swiper.slideNext()}
                    breakpoints={{
                        640:  { slidesPerView: 2.1, spaceBetween: 20 },
                        1024: { slidesPerView: 3.2, spaceBetween: 24 },
                        1280: { slidesPerView: 4,   spaceBetween: 24 },
                        1400: { slidesPerView: 5,   spaceBetween: 24 },
                    }}
                    className="plans-swiper"
                    style={{ paddingBottom: "52px", paddingTop: "8px" } as React.CSSProperties}
                >
                    {plans.map((plan) => (
                        <SwiperSlide key={plan.id}>
                            <PlanCard plan={plan} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <p style={{
                    textAlign: "center", marginTop: "8px",
                    fontFamily: "Roboto, sans-serif", fontWeight: 400,
                    fontSize: "13px", color: "#888",
                }}>
                    *Add-on Mesh Wi-Fi for 100Mbps plans from as low as RM15/month. Terms and conditions apply.
                </p>
                <CheckCoverageButton />
            </div>
        </section>
    );
}
