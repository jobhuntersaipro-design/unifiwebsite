import { getAllPosts, Post } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCtaBar from "@/components/MobileCtaBar";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Unifi Tips, Guides & Internet Insights | Unifi Malaysia",
  description:
    "Read the latest tips, guides, and insights on Unifi broadband plans, Wi-Fi optimization, and internet in Malaysia.",
  alternates: {
    canonical: "https://www.unifi.co.com/blog",
  },
};

const POSTS_PER_PAGE = 11;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-MY", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          flexShrink: 0,
          background: "#f0f2ff",
          overflow: "hidden",
        }}
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            style={{ objectFit: "cover", objectPosition: post.imagePosition || "top" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, var(--cobalt-blue) 0%, var(--navy-blue) 100%)",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "20px 22px 24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              color: "#888",
            }}
          >
            {formatDate(post.date)}
          </span>
          <span style={{ color: "#ddd" }}>·</span>
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              color: "var(--orange)",
              fontWeight: 600,
            }}
          >
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            color: "#111",
            lineHeight: 1.4,
            marginBottom: "10px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "13.5px",
            color: "#666",
            lineHeight: 1.65,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "18px",
          }}
        >
          {post.description}
        </p>

        {/* Read more */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            color: "var(--cobalt-blue)",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          Read More
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || "1", 10));

  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const clampedPage = Math.min(page, Math.max(1, totalPages));

  const startIndex = (clampedPage - 1) * POSTS_PER_PAGE;
  const pagePosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const heroPost = clampedPage === 1 ? pagePosts[0] : null;
  const gridPosts = clampedPage === 1 ? pagePosts.slice(1) : pagePosts;

  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--cobalt-blue) 0%, var(--navy-blue) 60%, #0a0050 100%)",
          padding: "48px 24px 56px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "rgba(255,122,0,0.12)",
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
            background: "linear-gradient(90deg, var(--orange), var(--accent-orange))",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ color: "var(--orange)" }}>
            Unifi Blog
          </span>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              color: "white",
              marginTop: "10px",
              marginBottom: "14px",
              lineHeight: 1.15,
            }}
          >
            Tips, Guides &amp;{" "}
            <span style={{ color: "var(--orange)" }}>Internet Insights</span>
          </h1>
          <p
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Everything you need to know about Unifi broadband, Wi-Fi
            optimisation, and getting the best internet in Malaysia.
          </p>
        </div>
      </section>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px 80px",
        }}
      >
        {/* Hero post — page 1 only */}
        {heroPost && (
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  background: "var(--cobalt-blue)",
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "4px",
                }}
              >
                Latest Post
              </span>
            </div>

            <Link
              href={`/blog/${heroPost.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 32px rgba(24,0,231,0.10)",
                textDecoration: "none",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              className="blog-hero-card"
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  minHeight: "380px",
                  background: "#f0f2ff",
                  overflow: "hidden",
                }}
              >
                {heroPost.image && (
                  <Image
                    src={heroPost.image}
                    alt={heroPost.title}
                    fill
                    priority
                    sizes="(max-width: 1000px) 100vw, 75vw"
                    style={{ objectFit: "cover", objectPosition: heroPost.imagePosition || "top" }}
                  />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "40px 44px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "13px",
                      color: "#888",
                    }}
                  >
                    {formatDate(heroPost.date)}
                  </span>
                  <span style={{ color: "#ddd" }}>·</span>
                  <span
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "13px",
                      color: "var(--orange)",
                      fontWeight: 600,
                    }}
                  >
                    {heroPost.readingTime} min read
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "#111",
                    lineHeight: 1.3,
                    marginBottom: "16px",
                  }}
                >
                  {heroPost.title}
                </h2>

                <p
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                  }}
                >
                  {heroPost.description}
                </p>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--cobalt-blue)",
                    color: "white",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    padding: "12px 24px",
                    borderRadius: "10px",
                    alignSelf: "flex-start",
                  }}
                >
                  Read Article
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of remaining posts */}
        {gridPosts.length > 0 && (
          <>
            {clampedPage === 1 && (
              <div style={{ marginBottom: "32px" }}>
                <span className="section-label">More Articles</span>
              </div>
            )}
            <div className="blog-grid">
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginTop: "56px",
            }}
          >
            {/* Prev */}
            {clampedPage > 1 ? (
              <Link
                href={`/blog?page=${clampedPage - 1}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  background: "#fff",
                  border: "1.5px solid #e0e3ff",
                  borderRadius: "8px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
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
                Previous
              </Link>
            ) : (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  background: "#f5f5f5",
                  border: "1.5px solid #e5e5e5",
                  borderRadius: "8px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#bbb",
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
                Previous
              </span>
            )}

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/blog?page=${p}`}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    p === clampedPage ? "var(--cobalt-blue)" : "#fff",
                  border:
                    p === clampedPage
                      ? "2px solid var(--cobalt-blue)"
                      : "1.5px solid #e0e3ff",
                  borderRadius: "8px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: p === clampedPage ? "#fff" : "var(--cobalt-blue)",
                  textDecoration: "none",
                }}
              >
                {p}
              </Link>
            ))}

            {/* Next */}
            {clampedPage < totalPages ? (
              <Link
                href={`/blog?page=${clampedPage + 1}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  background: "#fff",
                  border: "1.5px solid #e0e3ff",
                  borderRadius: "8px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "var(--cobalt-blue)",
                  textDecoration: "none",
                }}
              >
                Next
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  background: "#f5f5f5",
                  border: "1.5px solid #e5e5e5",
                  borderRadius: "8px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#bbb",
                }}
              >
                Next
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            )}
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppFloat />
      <MobileCtaBar />
    </main>
  );
}
