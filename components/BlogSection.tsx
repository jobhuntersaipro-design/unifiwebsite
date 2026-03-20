import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-MY", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      style={{
        background: "#fff",
        padding: "72px 24px 80px",
        borderTop: "1px solid #e8ebff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label">From the Blog</span>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "var(--cobalt-blue)",
              marginTop: "10px",
              marginBottom: "14px",
            }}
          >
            Tips, Guides &amp;{" "}
            <span style={{ color: "var(--orange)" }}>Internet Insights</span>
          </h2>
          <p
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "#555",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Everything you need to know about Unifi broadband, Wi-Fi tips, and
            getting the most from your internet.
          </p>
        </div>

        {/* Cards grid */}
        <div className="blog-section-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card"
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/2",
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
                    sizes="(max-width: 942px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
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
                {/* Meta row */}
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
                  <span style={{ color: "#ddd", fontSize: "12px" }}>·</span>
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
                    fontWeight: 400,
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
          ))}
        </div>

        {/* View all link */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/blog" className="btn-outline">
            View All Articles
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
        </div>
      </div>
    </section>
  );
}
