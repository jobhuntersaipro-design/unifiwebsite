"use client";

import { fireWhatsAppConversion } from "@/lib/gtag";

const WHATSAPP_NUMBER = "601169497969";

export default function WhatsAppFloat() {
    return (
        <a
            id="whatsapp-float"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20a%20Unifi%20plan.%20Can%20you%20help%20me%3F`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            onClick={fireWhatsAppConversion}
            style={{
                position: "fixed",
                bottom: "28px",
                right: "28px",
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#25D366",
                borderRadius: "100px",
                padding: "13px 20px 13px 16px",
                boxShadow: "0 4px 24px rgba(37,211,102,0.5)",
                textDecoration: "none",
            }}
        >
            {/* WhatsApp SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="white">
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.78 1.81 6.78L2 30l7.44-1.77A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5c-2.22 0-4.33-.61-6.14-1.68l-.44-.26-4.42 1.05 1.09-4.3-.29-.46A11.44 11.44 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.35-8.52c-.35-.17-2.07-1.02-2.39-1.13-.32-.12-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.37-.2.23-.4.26-.75.09-.35-.18-1.48-.55-2.82-1.75-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.18-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.85s1.23 3.31 1.4 3.54c.17.23 2.42 3.7 5.87 5.19.82.36 1.46.57 1.96.73.82.26 1.57.22 2.16.13.66-.1 2.07-.85 2.36-1.66.29-.82.29-1.52.2-1.66-.08-.15-.3-.23-.65-.4z" />
            </svg>
            <span style={{
                fontFamily: "Inter, sans-serif", fontWeight: 700,
                fontSize: "14px", color: "white", whiteSpace: "nowrap",
            }}>
                Chat Now
            </span>
        </a>
    );
}
