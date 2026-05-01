"use client";

import { useState } from "react";

const items = [
  {
    q: "Will you judge what you see?",
    a: "No. Our team is trained in trauma-informed care. We arrive without surprise and without commentary.",
  },
  {
    q: "Can you work with my therapist or social worker?",
    a: "Yes. With your written permission, we coordinate care and share a respectful summary if it helps your treatment plan.",
  },
  {
    q: "Do you take photos?",
    a: "Only with explicit, written consent — and never of identifying details. Our gallery is curated from clients who actively wanted to share.",
  },
  {
    q: "Is sliding-scale pricing real?",
    a: "Yes. Donor-supported sessions are limited but real. Mention it on your inquiry, no documentation required.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "96px 64px",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Common questions
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 44,
              margin: 0,
              lineHeight: 1.05,
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Asked, with care.
          </h2>
        </div>
        <div>
          {items.map((it, i) => (
            <div
              key={it.q}
              style={{
                borderTop: "1px solid var(--rule)",
                ...(i === items.length - 1 ? { borderBottom: "1px solid var(--rule)" } : {}),
              }}
            >
              <button
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "28px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "var(--ink)",
                }}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontSize: 24,
                    fontWeight: 500,
                    transition: "color 0.15s",
                    color: open === i ? "var(--sage-deep)" : "var(--ink)",
                  }}
                >
                  {it.q}
                </span>
                <span
                  style={{
                    fontSize: 22,
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.25s",
                    flexShrink: 0,
                    marginLeft: 16,
                  }}
                >
                  +
                </span>
              </button>
              <div className={`acc-body${open === i ? " open" : ""}`}>
                <p
                  style={{
                    margin: 0,
                    color: "var(--ink-soft)",
                    fontSize: 16,
                    lineHeight: 1.65,
                    maxWidth: 560,
                  }}
                >
                  {it.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
