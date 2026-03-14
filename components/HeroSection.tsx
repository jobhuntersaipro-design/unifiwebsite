"use client";

interface HeroSectionProps {
    activeTab: "personal" | "business";
}

const heroContent = {
    personal: {
        label: "Personal Plans",
        heading: "Fast. Reliable.",
        highlight: "Always Connected.",
        sub: "Get the perfect home broadband plan — with free installation, free modem & router, and no hidden costs.",
        bg: "linear-gradient(135deg, var(--cobalt-blue) 0%, var(--navy-blue) 60%, #0a0050 100%)",
    },
    business: {
        label: "Business Plans",
        heading: "Power Your Business.",
        highlight: "Stay Ahead.",
        sub: "Ultra-fast fibre and 5G wireless solutions for businesses of all sizes — with dedicated support and priority restoration.",
        bg: "linear-gradient(135deg, #0f0f2e 0%, #0c004a 40%, #1a0070 100%)",
    },
};

export default function HeroSection({ activeTab }: HeroSectionProps) {
    const content = heroContent[activeTab];

    return (
        <section
            id="hero"
            style={{
                background: content.bg,
                padding: "44px 24px 56px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.4s ease",
            }}
        >
            {/* Decorative circles */}
            <div
                style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(255,122,0,0.13)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "-80px",
                    left: "-40px",
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    pointerEvents: "none",
                }}
            />
            {/* Orange accent stripe at bottom */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "5px",
                    background: "linear-gradient(90deg, var(--orange), var(--accent-orange))",
                }}
            />

            <div
                style={{
                    maxWidth: "820px",
                    margin: "0 auto",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <span className="section-label" style={{ color: "var(--orange)", marginBottom: "12px", display: "block" }}>
                    {content.label}
                </span>

                <h1
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                        color: "white",
                        lineHeight: 1.1,
                        marginBottom: "14px",
                    }}
                >
                    {content.heading} <br />
                    <span style={{ color: "var(--orange)" }}>{content.highlight}</span>
                </h1>

                <p
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                        color: "rgba(255,255,255,0.82)",
                        lineHeight: 1.7,
                        marginBottom: "28px",
                        maxWidth: "540px",
                        margin: "0 auto 28px",
                    }}
                >
                    {content.sub}
                </p>

            </div>
        </section>
    );
}
