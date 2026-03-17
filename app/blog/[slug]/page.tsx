import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCtaBar from "@/components/MobileCtaBar";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Unifi Malaysia`,
    description: post.description,
    alternates: {
      canonical: `https://www.unifi.co.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.unifi.co.com/blog/${slug}`,
      type: "article",
      locale: "en_MY",
      alternateLocale: ["ms_MY"],
      ...(post.image && { images: [{ url: post.image }] }),
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Article header */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--cobalt-blue) 0%, var(--navy-blue) 60%, #0a0050 100%)",
          padding: "48px 24px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255,122,0,0.10)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, var(--orange), var(--accent-orange))",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              marginBottom: "28px",
              transition: "color 0.2s",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Meta badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "Roboto, sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.75)",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "4px 12px",
                borderRadius: "100px",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {formatDate(post.date)}
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "Roboto, sans-serif",
                fontSize: "13px",
                color: "var(--orange)",
                fontWeight: 600,
                background: "rgba(255,122,0,0.12)",
                border: "1px solid rgba(255,122,0,0.25)",
                padding: "4px 12px",
                borderRadius: "100px",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
              color: "white",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            {post.title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.75,
              maxWidth: "640px",
            }}
          >
            {post.description}
          </p>
        </div>
      </section>

      {/* Hero image */}
      {post.image && (
        <div
          style={{
            maxWidth: "900px",
            margin: "-32px auto 0",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/7",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 12px 48px rgba(24,0,231,0.18)",
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: post.image ? "52px 24px 80px" : "48px 24px 80px",
        }}
      >
        <article className="prose prose-lg prose-gray max-w-none article-content">
          <MDXRemote source={post.content} />
        </article>

        {/* Divider */}
        <hr
          style={{
            margin: "56px 0",
            border: "none",
            borderTop: "1px solid #e8ebff",
          }}
        />

        {/* WhatsApp CTA */}
        <div
          style={{
            background:
              "linear-gradient(135deg, var(--cobalt-blue) 0%, var(--navy-blue) 100%)",
            borderRadius: "20px",
            padding: "40px 44px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "rgba(255,122,0,0.15)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              className="section-label"
              style={{ color: "var(--orange)", display: "block", marginBottom: "12px" }}
            >
              Ready to Sign Up?
            </span>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                color: "white",
                marginBottom: "12px",
                lineHeight: 1.25,
              }}
            >
              Daftar Unifi Hari Ini
            </h3>
            <p
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.78)",
                marginBottom: "28px",
                lineHeight: 1.7,
                maxWidth: "400px",
                margin: "0 auto 28px",
              }}
            >
              Free installation, free Wi-Fi router, no hidden fees. WhatsApp us
              and we&apos;ll get you connected — fast.
            </p>
            <a
              href="https://wa.me/601169497969"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#25D366",
                color: "white",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "12px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
                transition: "opacity 0.2s, transform 0.15s",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Kami Sekarang
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "var(--cobalt-blue)",
              textDecoration: "none",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
      <MobileCtaBar />
    </main>
  );
}
