"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InquireModal from "@/components/InquireModal";

export default function DonatePage() {
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
          <div className="eyebrow" style={{ marginBottom: 18 }}>Give Back</div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 400,
              fontStyle: "italic",
              margin: "0 0 24px",
              lineHeight: 1.05,
            }}
          >
            Support the mission.
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--ink-soft)",
              maxWidth: 600,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Every dollar and donated supply helps us keep Compassionate Cleaning accessible to community members who need it most.
          </p>
        </section>

        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 64px 96px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          <div
            style={{
              background: "var(--sage)",
              borderRadius: 4,
              padding: 48,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              className="eyebrow"
              style={{ color: "rgba(46,42,36,0.6)" }}
            >
              Financial Donation
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 40,
                fontWeight: 400,
                fontStyle: "italic",
                margin: 0,
                lineHeight: 1.1,
                color: "var(--ink)",
              }}
            >
              Give what you can.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--ink)",
                lineHeight: 1.7,
                margin: 0,
                flex: 1,
                opacity: 0.85,
              }}
            >
              Your support enables us to meet our goals and fund our mission — including donor-funded sessions for clients who need financial assistance.
            </p>
            <a
              href="https://gofund.me/29c76524"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              Donate on GoFundMe →
            </a>
          </div>

          <div
            style={{
              background: "var(--cream-deep)",
              border: "2px solid var(--rule)",
              borderRadius: 4,
              padding: 48,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div className="eyebrow">Supply Donation</div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 40,
                fontWeight: 400,
                fontStyle: "italic",
                margin: 0,
                lineHeight: 1.1,
                color: "var(--ink)",
              }}
            >
              Send supplies directly.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                margin: 0,
                flex: 1,
              }}
            >
              Donating cleaning supplies helps us keep costs down and services affordable. View our Amazon Wishlist to send supplies directly.
            </p>
            <a
              href="https://www.amazon.com/hz/wishlist/ls/1A6GLDT7HED7Q/ref=nav_wishlist_lists_1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ alignSelf: "flex-start" }}
            >
              View Amazon Wishlist →
            </a>
          </div>
        </section>

        <section
          style={{
            background: "var(--ink)",
            color: "var(--cream)",
            padding: "80px 64px",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div
              className="eyebrow"
              style={{ color: "var(--tan)", marginBottom: 20 }}
            >
              About DIWC, Inc.
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "start",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 48,
                  fontWeight: 400,
                  fontStyle: "italic",
                  margin: 0,
                  lineHeight: 1.1,
                  color: "var(--cream)",
                }}
              >
                Do It With Compassion, Inc.
              </h2>
              <div>
                <p
                  style={{
                    fontSize: 16,
                    color: "rgba(245,240,230,0.8)",
                    lineHeight: 1.75,
                    margin: "0 0 20px",
                  }}
                >
                  Do It With Compassion, Inc. is the nonprofit arm of our work. Donor-funded sessions are available to qualifying individuals and families through DIWC — subject to availability.
                </p>
                <a
                  href="https://doitwithcompassion.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ulink"
                  style={{ color: "var(--tan)", fontSize: 15 }}
                >
                  Learn more at doitwithcompassion.org →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onInquire={() => setOpen(true)} />
      {open && <InquireModal onClose={() => setOpen(false)} />}
    </>
  );
}
