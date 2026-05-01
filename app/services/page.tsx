"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InquireModal from "@/components/InquireModal";

const services = [
  {
    eyebrow: "Our Specialty",
    title: "Compassionate Cleaning",
    body: "Hands-on, judgment-free cleaning for spaces that need more than a standard clean. We sort through belongings thoughtfully, provide real-time decision-making support, and break the work into manageable steps. Trauma-informed team. Coordinates with therapists, family, or building management when helpful.",
    pricing: "Custom quoted · Photos required",
    accent: "var(--sage)",
  },
  {
    eyebrow: "Recurring or One-Time",
    title: "Home Cleaning",
    body: "Surface, deep, or a thoughtful mix. Recurring or one-time. Lockbox or doorman. Pets welcome. Custom-quoted based on your home and rhythm.",
    pricing: "Custom quoted · Photos required",
    accent: "var(--tan)",
  },
  {
    eyebrow: "Remote Support",
    title: "Virtual Coaching",
    body: "One hour over Zoom or FaceTime. Walk through a room together — we guide the next step at your pace. Great if in-person help isn't in the budget right now.",
    pricing: "Inquire for rate",
    accent: "var(--sage-deep)",
  },
];

const steps = [
  "Send photos of the space (text, email, or DM)",
  "Receive a custom quote",
  "Review our policy",
  "Pay $100 deposit via Zelle to book",
  "We show up, you breathe easier",
];

export default function ServicesPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav onInquire={() => setOpen(true)} />

      <main>
        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "96px 64px 72px",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 18 }}>Services</div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 400,
              fontStyle: "italic",
              margin: 0,
              lineHeight: 1.05,
              color: "var(--ink)",
            }}
          >
            Quiet work, custom-quoted.
          </h1>
          <p
            style={{
              marginTop: 28,
              fontSize: 17,
              color: "var(--ink-soft)",
              maxWidth: 580,
              lineHeight: 1.7,
            }}
          >
            All services are custom-quoted based on the scope of your space. Photos are required for an accurate quote.
          </p>
        </section>

        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 64px 96px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "var(--cream-deep)",
                border: "1px solid var(--rule)",
                borderRadius: 4,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div className="eyebrow">{s.eyebrow}</div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 36,
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </h2>
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: s.accent,
                  borderRadius: 1,
                }}
              />
              <p
                style={{
                  fontSize: 15,
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {s.body}
              </p>
              <div
                style={{
                  marginTop: 8,
                  paddingTop: 16,
                  borderTop: "1px solid var(--rule)",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                  fontWeight: 500,
                }}
              >
                {s.pricing}
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto 72px",
            padding: "0 64px",
          }}
        >
          <div
            style={{
              border: "1px dashed var(--tan-deep)",
              borderRadius: 4,
              padding: "20px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 15, color: "var(--ink-soft)" }}>
              <strong style={{ color: "var(--ink)" }}>Kitchen Makeovers</strong> — paused, returning soon.
            </span>
            <a
              href="/inquire"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--tan-deep)",
                letterSpacing: "0.04em",
                borderBottom: "1px solid var(--tan-deep)",
                paddingBottom: 2,
              }}
            >
              Get on the waitlist →
            </a>
          </div>
        </section>

        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto 96px",
            padding: "0 64px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Financial Assistance</div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 36,
                fontWeight: 400,
                fontStyle: "italic",
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}
            >
              Help is available.
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7, margin: 0 }}>
              Through Do It With Compassion, Inc., donor-funded sessions may be available for those experiencing hardship. Subject to availability.{" "}
              <a
                href="https://doitwithcompassion.org"
                target="_blank"
                rel="noopener noreferrer"
                className="ulink"
                style={{ color: "var(--sage-deep)" }}
              >
                Visit doitwithcompassion.org to apply.
              </a>
            </p>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>How it Works</div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 36,
                fontWeight: 400,
                fontStyle: "italic",
                margin: "0 0 28px",
                lineHeight: 1.2,
              }}
            >
              The booking process.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    padding: "16px 0",
                    borderBottom: i < steps.length - 1 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  <span
                    style={{
                      minWidth: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "var(--sage)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--cream)",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6 }}>
                    {step}
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
            textAlign: "center",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 18 }}>Ready to begin?</div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 56,
              fontWeight: 400,
              fontStyle: "italic",
              margin: "0 0 32px",
              lineHeight: 1.1,
            }}
          >
            Start the Conversation
          </h2>
          <button className="btn-primary" onClick={() => setOpen(true)}>
            Get in touch →
          </button>
        </section>
      </main>

      <Footer onInquire={() => setOpen(true)} />
      {open && <InquireModal onClose={() => setOpen(false)} />}
    </>
  );
}
