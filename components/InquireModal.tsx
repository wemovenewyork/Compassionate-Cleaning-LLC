"use client";

import { useState, useEffect } from "react";

interface InquireModalProps {
  onClose: () => void;
}

const opts = [
  { k: "home", t: "Home Cleaning", d: "Surface, deep, or recurring · custom quoted" },
  { k: "hoard", t: "Hoarded Clear-out", d: "Trauma-informed · custom quoted" },
  { k: "coach", t: "Virtual Coaching", d: "Zoom or FaceTime · inquire for rate" },
  { k: "unsure", t: "Not sure yet", d: "We'll help you figure it out" },
];

export default function InquireModal({ onClose }: InquireModalProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (s: string) =>
    setServices(services.includes(s) ? services.filter((x) => x !== s) : [...services, s]);

  const canStep1 = name && email && zip;
  const canStep2 = services.length > 0;

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "none",
            border: "none",
            fontSize: 22,
            cursor: "pointer",
            color: "var(--ink-soft)",
          }}
        >
          ×
        </button>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "32px 0 8px" }}>
            <div
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 48,
                fontStyle: "italic",
                color: "var(--sage-deep)",
                marginBottom: 16,
              }}
            >
              Thank you, {name.split(" ")[0]}.
            </div>
            <p
              style={{
                color: "var(--ink-soft)",
                fontSize: 16,
                lineHeight: 1.6,
                maxWidth: 380,
                margin: "0 auto 32px",
              }}
            >
              We received your note. A real person — usually our founder — will write back
              within one business day. Mon–Fri 9am–5pm.
            </p>
            <button className="btn-ghost" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="eyebrow" style={{ color: "var(--tan-deep)", marginBottom: 12 }}>
              Step {step} of 3
            </div>
            <h3
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 32,
                margin: 0,
                marginBottom: 28,
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              {step === 1 && "A few details, gently."}
              {step === 2 && "What feels right?"}
              {step === 3 && "Photos & anything else."}
            </h3>
            {step === 1 && (
              <div style={{ display: "grid", gap: 18 }}>
                <div>
                  <label>Your name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First & last"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label>ZIP code</label>
                  <input
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="11201"
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div style={{ display: "grid", gap: 10 }}>
                {opts.map((o) => (
                  <label
                    key={o.k}
                    className={`checkitem${services.includes(o.k) ? " on" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={services.includes(o.k)}
                      onChange={() => toggle(o.k)}
                    />
                    <div>
                      <div style={{ fontWeight: 500, color: "var(--ink)" }}>{o.t}</div>
                      <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2 }}>
                        {o.d}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            )}
            {step === 3 && (
              <div style={{ display: "grid", gap: 18 }}>
                <div>
                  <label>
                    Photos of the space{" "}
                    <span style={{ color: "var(--tan-deep)", fontWeight: 600 }}>
                      (required for an accurate quote)
                    </span>
                  </label>
                  <input type="file" accept="image/*" multiple />
                </div>
                <div>
                  <label>Tell us as much or as little as you&apos;d like.</label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={5}
                    placeholder="What's going on, what's been hard, what would help — share whatever feels right."
                  />
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--ink-soft)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Your inquiry is read by a small team. We never share details and we&apos;ll
                  never surprise you with a visit. You can also text or email photos to us
                  directly at 917.832.2500.
                </p>
              </div>
            )}
            <div
              style={{
                marginTop: 32,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                className="btn-ghost"
                style={{
                  visibility: step === 1 ? "hidden" : "visible",
                  padding: "10px 18px",
                  fontSize: 13,
                }}
                onClick={() => setStep(step - 1)}
              >
                ← Back
              </button>
              {step < 3 ? (
                <button
                  className="btn-primary"
                  disabled={
                    (step === 1 && !canStep1) || (step === 2 && !canStep2)
                  }
                  onClick={() => setStep(step + 1)}
                  style={{
                    opacity:
                      (step === 1 && !canStep1) || (step === 2 && !canStep2) ? 0.5 : 1,
                  }}
                >
                  Continue →
                </button>
              ) : (
                <button className="btn-primary" onClick={() => setSubmitted(true)}>
                  Send with care →
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
