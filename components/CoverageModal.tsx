"use client";

import { useState } from "react";
import { X, MapPin } from "lucide-react";
import { fireWhatsAppConversion } from "@/lib/gtag";

const WHATSAPP_NUMBER = "601169497969";

const PLAN_OPTIONS = [
    { value: "personal-100", label: "UniVerse 100 – 100Mbps (RM89/mth)" },
    { value: "personal-300", label: "UniVerse 300 – 300Mbps (RM129/mth)" },
    { value: "personal-500", label: "UniVerse 500 – 500Mbps (RM149/mth)" },
    { value: "personal-1gbps", label: "UniVerse 1Gbps (RM249/mth)" },
    { value: "personal-2gbps", label: "UniVerse 2Gbps (RM319/mth)" },
    { value: "biz-100", label: "Business Broadband 100Mbps (RM99/mth)" },
    { value: "biz-300", label: "Business Broadband 300Mbps (RM139/mth)" },
    { value: "biz-500", label: "Business Broadband 500Mbps (RM179/mth)" },
    { value: "biz-800", label: "Business Broadband 800Mbps (RM259/mth)" },
    { value: "biz-1gbps", label: "Business Broadband 1Gbps (RM319/mth)" },
    { value: "biz-2gbps", label: "Business Broadband 2Gbps (RM369/mth)" },
];

const DEFAULT_PLAN = "personal-300";

function Modal({ onClose }: { onClose: () => void }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [plan, setPlan] = useState(DEFAULT_PLAN);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedLabel = PLAN_OPTIONS.find((o) => o.value === plan)?.label ?? plan;
        const msg = `Hi, I'd like to check coverage for my address.\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nInterested Plan: ${selectedLabel}\n\nPlease advise on availability. Thank you!`;
        fireWhatsAppConversion();
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        fontSize: "14px",
        color: "#111",
        border: "1.5px solid #dde2ff",
        borderRadius: "8px",
        padding: "10px 13px",
        outline: "none",
        background: "#fff",
        transition: "border-color 0.2s",
        boxSizing: "border-box",
    };

    const labelStyle: React.CSSProperties = {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        fontSize: "12px",
        color: "#444",
        marginBottom: "6px",
        display: "block",
    };

    return (
        /* Overlay */
        <div
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 1000,
                background: "rgba(0,0,0,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "16px",
            }}
        >
            {/* Modal panel */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "#fff",
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "480px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
                    overflow: "hidden",
                }}
            >
                {/* Header */}
                <div style={{
                    background: "var(--cobalt-blue)",
                    padding: "20px 24px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{
                            width: "34px", height: "34px", borderRadius: "8px",
                            background: "rgba(255,255,255,0.15)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <MapPin size={18} color="white" />
                        </div>
                        <div>
                            <p style={{
                                fontFamily: "Inter, sans-serif", fontWeight: 900,
                                fontSize: "16px", color: "white", lineHeight: 1.2,
                            }}>Check Coverage</p>
                            <p style={{
                                fontFamily: "Roboto, sans-serif", fontSize: "12px",
                                color: "rgba(255,255,255,0.7)", marginTop: "2px",
                            }}>We'll verify Unifi availability at your address</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: "rgba(255,255,255,0.15)", border: "none",
                            borderRadius: "8px", width: "32px", height: "32px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            cursor: "pointer", color: "white", flexShrink: 0,
                        }}
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ padding: "24px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {/* Name */}
                        <div>
                            <label style={labelStyle}>Full Name *</label>
                            <input
                                type="text"
                                placeholder="e.g. Ahmad bin Ali"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={inputStyle}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--cobalt-blue)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "#dde2ff")}
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label style={labelStyle}>Phone Number *</label>
                            <input
                                type="tel"
                                placeholder="e.g. 011-1234 5678"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                style={inputStyle}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--cobalt-blue)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "#dde2ff")}
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label style={labelStyle}>Full Address *</label>
                            <textarea
                                placeholder="e.g. No 12, Jalan Ampang, 50450 Kuala Lumpur"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                rows={3}
                                style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--cobalt-blue)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "#dde2ff")}
                            />
                        </div>

                        {/* Plan dropdown */}
                        <div>
                            <label style={labelStyle}>Interested Plan *</label>
                            <select
                                value={plan}
                                onChange={(e) => setPlan(e.target.value)}
                                required
                                style={{
                                    ...inputStyle,
                                    appearance: "none",
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 12px center",
                                    paddingRight: "36px",
                                    cursor: "pointer",
                                }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--cobalt-blue)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "#dde2ff")}
                            >
                                <optgroup label="Personal Plans">
                                    {PLAN_OPTIONS.filter((o) => o.value.startsWith("personal")).map((o) => (
                                        <option key={o.value} value={o.value}>{o.label}</option>
                                    ))}
                                </optgroup>
                                <optgroup label="Business Broadband">
                                    {PLAN_OPTIONS.filter((o) => o.value.startsWith("biz")).map((o) => (
                                        <option key={o.value} value={o.value}>{o.label}</option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        style={{
                            marginTop: "20px",
                            width: "100%",
                            background: "var(--cobalt-blue)",
                            color: "white",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "14px",
                            padding: "13px 0",
                            borderRadius: "10px",
                            border: "none",
                            cursor: "pointer",
                            transition: "background 0.2s, transform 0.1s",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cobalt-blue-dark)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--cobalt-blue)")}
                    >
                        {/* WhatsApp icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Send via WhatsApp
                    </button>

                    <p style={{
                        marginTop: "10px", textAlign: "center",
                        fontFamily: "Roboto, sans-serif", fontSize: "11px", color: "#aaa",
                    }}>
                        We'll reply within 10 minutes to confirm coverage at your address.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default function CheckCoverageButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Coverage CTA banner */}
            <div style={{
                marginTop: "48px",
                borderRadius: "20px",
                overflow: "hidden",
                background: "linear-gradient(135deg, var(--cobalt-blue) 0%, #0c004a 60%, #1a0070 100%)",
                padding: "44px 32px",
                position: "relative",
                textAlign: "center",
            }}>
                {/* Decorative circles */}
                <div style={{
                    position: "absolute", top: "-40px", right: "-40px",
                    width: "200px", height: "200px", borderRadius: "50%",
                    background: "rgba(255,122,0,0.12)", pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", bottom: "-50px", left: "-30px",
                    width: "180px", height: "180px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)", pointerEvents: "none",
                }} />
                {/* Orange bottom stripe */}
                <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "4px",
                    background: "linear-gradient(90deg, var(--orange), var(--accent-orange))",
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Icon badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        width: "52px", height: "52px", borderRadius: "14px",
                        background: "rgba(255,122,0,0.2)",
                        border: "1.5px solid rgba(255,122,0,0.4)",
                        marginBottom: "16px",
                    }}>
                        <MapPin size={24} color="var(--orange)" />
                    </div>

                    <h3 style={{
                        fontFamily: "Inter, sans-serif", fontWeight: 900,
                        fontSize: "clamp(1.2rem, 3vw, 1.6rem)", color: "white",
                        marginBottom: "10px", lineHeight: 1.2,
                    }}>
                        Not sure if Unifi is available at your area?
                    </h3>
                    <p style={{
                        fontFamily: "Roboto, sans-serif", fontWeight: 300,
                        fontSize: "0.95rem", color: "rgba(255,255,255,0.75)",
                        marginBottom: "28px", lineHeight: 1.7,
                        maxWidth: "420px", margin: "0 auto 28px",
                    }}>
                        Drop us your address and we&apos;ll check Unifi coverage for you — fast, free, and no commitment.
                    </p>

                    {/* Pulsing CTA button */}
                    <style>{`
                        @keyframes coverage-pulse {
                            0%, 100% { box-shadow: 0 0 0 0 rgba(255,122,0,0.55); }
                            50%       { box-shadow: 0 0 0 10px rgba(255,122,0,0); }
                        }
                        #coverage-cta-btn {
                            animation: coverage-pulse 2.2s ease-in-out infinite;
                        }
                        #coverage-cta-btn:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    <button
                        id="coverage-cta-btn"
                        onClick={() => setOpen(true)}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "9px",
                            background: "var(--orange)",
                            color: "white",
                            fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "15px",
                            padding: "14px 32px", borderRadius: "12px",
                            border: "none", cursor: "pointer",
                            transition: "background 0.2s, transform 0.15s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--accent-orange)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "var(--orange)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <MapPin size={17} />
                        Check Coverage at My Address
                    </button>

                    <p style={{
                        marginTop: "14px",
                        fontFamily: "Roboto, sans-serif", fontSize: "11px",
                        color: "rgba(255,255,255,0.4)",
                    }}>
                        Free check · No commitment · Reply within 15 minutes
                    </p>
                </div>
            </div>

            {open && <Modal onClose={() => setOpen(false)} />}
        </>
    );
}
