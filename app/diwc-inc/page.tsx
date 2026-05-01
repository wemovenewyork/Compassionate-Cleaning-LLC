"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InquireModal from "@/components/InquireModal";

const served = [
  "People experiencing housing instability",
  "Those in unsafe living conditions",
  "Families involved with child welfare services",
  "Elderly individuals needing additional support",
  "Disabled individuals requiring assistance",
];

export default function DiwcPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav onInquire={() => setOpen(true)} />

      <main>
        <section
          style={{
            background: "var(--ink)",
            color: "var(--cream)",
            padding: "120px 64px 96px",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div
              className="eyebrow"
              style={{ color: "var(--tan)", marginBottom: 20 }}
            >
              Nonprofit
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: 400,
                fontStyle: "italic",
                margin: "0 0 28px",
                lineHeight: 1.05,
                color: "var(--cream)",
                maxWidth: 860,
              }}
            >
              Do It With Compassion, Inc.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "rgba(245,240,230,0.75)",
                maxWidth: 600,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              A nonprofit rooted in dignity, empathy, and real-life transformation.
            </p>
          </div>
        </section>

        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "96px 64px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Founder</div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 40,
                fontWeight: 400,
                fontStyle: "italic",
                margin: "0 0 24px",
                lineHeight: 1.15,
              }}
            >
              Founded by Davina Furbert
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--ink-soft)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Davina&apos;s background in psychology informs their approach to behavior, environment, and emotional well-being — shaping every aspect of how DIWC shows up for the people it serves.
            </p>

            <div
              style={{
                marginTop: 40,
                padding: "32px 36px",
                background: "var(--cream-deep)",
                border: "1px solid var(--rule)",
                borderRadius: 4,
              }}
            >
              <div className="eyebrow" style={{ marginBottom: 14 }}>Mission</div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 24,
                  fontStyle: "italic",
                  color: "var(--ink)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                &ldquo;We believe everyone deserves a safe, functional, and dignified living environment — and that with the right support, meaningful and lasting change is possible.&rdquo;
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Who We Serve</div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 40,
                fontWeight: 400,
                fontStyle: "italic",
                margin: "0 0 28px",
                lineHeight: 1.15,
              }}
            >
              For those who need it most.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {served.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: "16px 0",
                    borderBottom: i < served.length - 1 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--sage-deep)",
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            background: "var(--cream-deep)",
            borderTop: "1px solid var(--rule)",
            borderBottom: "1px solid var(--rule)",
            padding: "80px 64px",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Our Approach</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 44,
                  fontWeight: 400,
                  fontStyle: "italic",
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                Guided. Hands-on. Built to last.
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--ink-soft)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Rather than a traditional cleaning service, DIWC offers a guided, hands-on process where clients actively participate alongside us — building sustainable habits and real systems for their space.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 64px",
            textAlign: "center",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>Get Involved</div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 52,
              fontWeight: 400,
              fontStyle: "italic",
              margin: "0 0 40px",
              lineHeight: 1.1,
            }}
          >
            Ready to take the next step?
          </h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.doitwithcompassion.org/service-request-page"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request Services →
            </a>
            <a href="/donate" className="btn-ghost">
              Donate →
            </a>
          </div>

          <div
            style={{
              marginTop: 64,
              paddingTop: 40,
              borderTop: "1px solid var(--rule)",
              fontSize: 14,
              color: "var(--ink-soft)",
              lineHeight: 1.65,
              maxWidth: 520,
              margin: "64px auto 0",
            }}
          >
            Do It With Compassion, Inc. operates separately from Compassionate Cleaning, LLC. For cleaning services,{" "}
            <a href="/services" className="ulink" style={{ color: "var(--sage-deep)" }}>
              visit our Services page.
            </a>
          </div>
        </section>
      </main>

      <Footer onInquire={() => setOpen(true)} />
      {open && <InquireModal onClose={() => setOpen(false)} />}
    </>
  );
}
