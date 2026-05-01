"use client";

import { useState } from "react";

// TODO: Wire up live Google Places API or Google Business Profile API to fetch reviews dynamically
const reviews = [
  // REPLACE with real review
  {
    text: "I'd been embarrassed to ask for help for years. From the first call, I felt like I was talking to someone who actually got it. The team was gentle, thorough, and didn't make me feel like a project.",
    reviewer: "A. R.",
    location: "Brooklyn",
    date: "March 2025",
  },
  // REPLACE with real review
  {
    text: "My building manager referred me and I was skeptical. They came in, no drama, no judgment, and my apartment actually looks like somewhere I want to come home to now.",
    reviewer: "T. L.",
    location: "Astoria",
    date: "January 2025",
  },
  // REPLACE with real review
  {
    text: "The virtual coaching session was worth every penny. Thirty minutes and I had a plan I could actually stick to. I've tried everything. This actually worked.",
    reviewer: "J. M.",
    location: "Inwood",
    date: "February 2025",
  },
];

const TRUNCATE = 240;

function ReviewCard({
  text,
  reviewer,
  location,
  date,
}: {
  text: string;
  reviewer: string;
  location: string;
  date: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const isTruncatable = text.length > TRUNCATE;
  const displayText = !isTruncatable || expanded ? text : text.slice(0, TRUNCATE) + "…";

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid var(--rule)",
        borderRadius: 4,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Stars */}
      <div style={{ color: "var(--tan-deep)", fontSize: 18, letterSpacing: 2 }}>
        ★★★★★
      </div>

      {/* Review text */}
      <p
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
          fontSize: 16,
          lineHeight: 1.6,
          fontStyle: "italic",
          color: "var(--ink)",
          margin: 0,
          flex: 1,
        }}
      >
        &ldquo;{displayText}&rdquo;
        {isTruncatable && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--sage-deep)",
              fontSize: 14,
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontStyle: "normal",
              padding: "0 0 0 6px",
              borderBottom: "1px solid currentColor",
              lineHeight: 1,
            }}
            onFocus={(e) => { e.currentTarget.style.outline = "2px solid var(--sage-deep)"; e.currentTarget.style.outlineOffset = "2px"; }}
            onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
          >
            {expanded ? "Read less" : "Read more →"}
          </button>
        )}
      </p>

      {/* Reviewer info */}
      <div>
        <div
          className="eyebrow"
          style={{ marginBottom: 4 }}
        >
          {reviewer} &nbsp;·&nbsp; {location}
        </div>
        <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>{date}</div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--rule)",
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            What neighbors say
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 48,
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.1,
              color: "var(--ink)",
            }}
          >
            Five stars, from real people.
          </h2>
        </div>

        {/* Review cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {reviews.map((r) => (
            <ReviewCard key={r.reviewer} {...r} />
          ))}
        </div>

        {/* Google link */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          {/* TODO: Add Google Business Profile review URL */}
          <a
            href="#"
            className="ulink"
            style={{ fontSize: 14 }}
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
