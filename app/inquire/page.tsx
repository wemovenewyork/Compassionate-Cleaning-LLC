"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InquireModal from "@/components/InquireModal";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid var(--rule)",
  background: "#fff",
  fontFamily: "inherit",
  fontSize: 15,
  color: "var(--ink)",
  borderRadius: 3,
  outline: "none",
  transition: "border-color 0.15s",
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "var(--ink-soft)",
  marginBottom: 8,
  display: "block",
  fontWeight: 500,
};

export default function InquirePage() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    zip: "",
    service: "",
    message: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <div className="eyebrow" style={{ marginBottom: 18 }}>Get in Touch</div>
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
            Start the Conversation
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--ink-soft)",
              maxWidth: 560,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            No pressure. No judgment. A real person — usually our founder — reads every inquiry and writes back within one business day.
          </p>
          <div
            style={{
              marginTop: 16,
              fontSize: 13,
              color: "var(--ink-soft)",
              letterSpacing: "0.04em",
            }}
          >
            Monday–Friday, 9am–5pm
          </div>
        </section>

        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 64px 96px",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Contact</div>
            <div
              style={{
                paddingBottom: 28,
                marginBottom: 28,
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 28,
                  fontStyle: "italic",
                  marginBottom: 8,
                }}
              >
                Phone & Text
              </div>
              <a
                href="tel:9178322500"
                style={{ fontSize: 22, fontWeight: 600, color: "var(--ink)" }}
              >
                917.832.2500
              </a>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  color: "var(--ink-soft)",
                  lineHeight: 1.6,
                }}
              >
                Also accepts texts and photo DMs
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 28,
                  fontStyle: "italic",
                  marginBottom: 14,
                }}
              >
                Service Areas
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--ink-soft)",
                  lineHeight: 2,
                }}
              >
                Manhattan · Brooklyn · Queens · Bronx · Staten Island · Long Island · Yonkers · Westchester
              </div>
            </div>

            <div
              style={{
                marginTop: 32,
                padding: "20px 24px",
                background: "var(--cream-deep)",
                border: "1px solid var(--rule)",
                borderRadius: 4,
                fontSize: 14,
                color: "var(--ink-soft)",
                lineHeight: 1.65,
              }}
            >
              Photos are mandatory for an accurate quote. You can attach them below or send them via text to{" "}
              <a href="tel:9178322500" style={{ color: "var(--sage-deep)", borderBottom: "1px solid currentColor" }}>
                917.832.2500
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                style={{
                  padding: "56px 40px",
                  background: "var(--cream-deep)",
                  border: "1px solid var(--rule)",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontSize: 48,
                    fontStyle: "italic",
                    color: "var(--sage-deep)",
                    marginBottom: 16,
                  }}
                >
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                </div>
                <p
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: 16,
                    lineHeight: 1.65,
                    maxWidth: 380,
                    margin: "0 auto",
                  }}
                >
                  We received your note. A real person — usually our founder — will write back within one business day. Mon–Fri 9am–5pm.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 22 }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    required
                    style={inputStyle}
                    value={form.name}
                    onChange={set("name")}
                    placeholder="First & last"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    required
                    type="email"
                    style={inputStyle}
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label style={labelStyle}>ZIP Code *</label>
                  <input
                    required
                    style={inputStyle}
                    value={form.zip}
                    onChange={set("zip")}
                    placeholder="11201"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Service interested in</label>
                  <select
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    value={form.service}
                    onChange={set("service")}
                  >
                    <option value="">Select a service…</option>
                    <option value="home">Home Cleaning</option>
                    <option value="hoard">Hoarded Clear-out</option>
                    <option value="coach">Virtual Coaching</option>
                    <option value="kitchen">Kitchen Makeover Waitlist</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>
                    Photos of your space{" "}
                    <span style={{ color: "var(--tan-deep)" }}>— required for an accurate quote</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{
                      ...inputStyle,
                      padding: "10px 16px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Message (optional)</label>
                  <textarea
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="What's going on, what's been hard, what would help — share whatever feels right."
                  />
                </div>
                <div>
                  <button type="submit" className="btn-primary">
                    Send with care →
                  </button>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--ink-soft)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  We never share your details. We&apos;ll never show up unannounced.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer onInquire={() => setOpen(true)} />
      {open && <InquireModal onClose={() => setOpen(false)} />}
    </>
  );
}
