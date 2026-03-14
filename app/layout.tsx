import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unifi Authorized Reseller | Fast Home & Business Broadband",
  description:
    "Get the best Unifi broadband plans for your home or business. Personal All-in-One bundles, Business Fibre, and Unifi Air Biz — all with expert support from your authorised reseller.",
  keywords: ["unifi", "broadband", "internet", "malaysia", "tm", "reseller", "home fibre", "business broadband"],
  openGraph: {
    title: "Unifi Authorized Reseller | Fast Home & Business Broadband",
    description:
      "Get the best Unifi broadband plans for your home or business. Personal All-in-One bundles, Business Fibre, and Unifi Air Biz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
