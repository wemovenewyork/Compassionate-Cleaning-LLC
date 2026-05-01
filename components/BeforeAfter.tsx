"use client";

import { useState } from "react";
import Placeholder from "./Placeholder";

interface CardProps {
  label: string;
  beforeSrc?: string;
  beforeAlt?: string;
  afterSrc?: string;
  afterAlt?: string;
}

function BeforeAfterCard({ label, beforeSrc, beforeAlt, afterSrc, afterAlt }: CardProps) {
  const [view, setView] = useState<"both" | "before" | "after">("both");

  return (
    <div
      style={{
        border: "1px solid var(--rule)",
        borderRadius: 4,
        overflow: "hidden",
        background: "var(--cream)",
      }}
    >
      {/* Image area */}
      <div style={{ display: "flex", width: "100%" }}>
        {(view === "both" || view === "before") && (
          <div
            style={{
              flex: view === "before" ? 1 : "0 0 50%",
              position: "relative",
              aspectRatio: "4/5",
            }}
          >
            {/* TODO: Replace with real photo. Requires written client consent on file before publishing. */}
            <Placeholder
              src={beforeSrc}
              alt={beforeAlt || `${label} — before`}
              variant="tan"
              style={{ width: "100%", height: "100%" }}
            />
            <span
              className="eyebrow"
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                background: "var(--cream)",
                padding: "4px 8px",
                fontSize: 10,
                pointerEvents: "none",
              }}
            >
              BEFORE
            </span>
          </div>
        )}
        {(view === "both" || view === "after") && (
          <div
            style={{
              flex: view === "after" ? 1 : "0 0 50%",
              position: "relative",
              aspectRatio: "4/5",
            }}
          >
            {/* TODO: Replace with real photo. Requires written client consent on file before publishing. */}
            <Placeholder
              src={afterSrc}
              alt={afterAlt || `${label} — after`}
              variant="tan"
              style={{ width: "100%", height: "100%" }}
            />
            <span
              className="eyebrow"
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "var(--sage-deep)",
                color: "var(--cream)",
                padding: "4px 8px",
                fontSize: 10,
                pointerEvents: "none",
              }}
            >
              AFTER
            </span>
          </div>
        )}
      </div>

      {/* Card footer */}
      <div style={{ padding: "20px 24px" }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          {label}
        </div>
        <button
          onClick={() => {
            if (view === "both") setView("before");
            else if (view === "before") setView("after");
            else setView("both");
          }}
          style={{
            background: "none",
            border: "1px solid var(--rule)",
            borderRadius: 3,
            padding: "6px 12px",
            fontSize: 12,
            cursor: "pointer",
            color: "var(--ink-soft)",
            letterSpacing: "0.04em",
          }}
          onFocus={(e) => { e.currentTarget.style.outline = "2px solid var(--sage-deep)"; e.currentTarget.style.outlineOffset = "2px"; }}
          onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
        >
          {view === "both" ? "View before" : view === "before" ? "View after" : "View both"}
        </button>
      </div>
    </div>
  );
}

const cards: CardProps[] = [
  {
    label: "Hoarded clear-out · Brooklyn",
    beforeAlt: "Hoarded home in Brooklyn before clear-out",
    afterAlt: "Brooklyn home after clear-out",
  },
  {
    label: "Home cleaning · Queens",
    beforeAlt: "Queens home before cleaning",
    afterAlt: "Queens home after cleaning",
  },
  {
    label: "Closet reset · Crown Heights",
    beforeAlt: "Crown Heights closet before reset",
    afterAlt: "Crown Heights closet after reset",
  },
];

export default function BeforeAfter() {
  return (
    <section
      style={{
        background: "var(--cream-deep)",
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
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Real work, with consent
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 56,
              lineHeight: 1.05,
              fontWeight: 400,
              margin: "0 0 16px",
              color: "var(--ink)",
            }}
          >
            Before, and after.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--ink-soft)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            Shared with explicit permission. Identifying details removed.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {cards.map((card) => (
            <BeforeAfterCard key={card.label} {...card} />
          ))}
        </div>

        {/* Gallery link */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <a href="/gallery" className="ulink" style={{ fontSize: 14 }}>
            See the full gallery →
          </a>
        </div>
      </div>
    </section>
  );
}
