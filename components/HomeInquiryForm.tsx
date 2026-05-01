"use client";

import { useState, useRef } from "react";

/* TODO: Wire up real backend endpoint at /api/inquire */

const inputStyle: React.CSSProperties = {
  padding: "14px 16px",
  border: "1px solid var(--rule)",
  background: "#fff",
  fontFamily: "inherit",
  fontSize: 15,
  color: "var(--ink)",
  borderRadius: 3,
  width: "100%",
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

const focusStyle = {
  outline: "2px solid var(--sage-deep)",
  outlineOffset: 2,
};

interface PhotoFile {
  file: File;
  preview: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  neighborhood?: string;
  serviceType?: string;
  description?: string;
  consent?: string;
}

export default function HomeInquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [slidingScale, setSlidingScale] = useState(false);
  const [consent, setConsent] = useState(false);
  const [photos, setPhotos] = useState<PhotoFile[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const existing = photos.length;
    const toAdd = files.slice(0, 10 - existing);
    const newPhotos: PhotoFile[] = toAdd.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPhotos((prev) => [...prev, ...newPhotos]);
    // reset input so same files can be re-added after removal
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      const copy = [...prev];
      URL.revokeObjectURL(copy[index].preview);
      copy.splice(index, 1);
      return copy;
    });
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!phone.trim()) errs.phone = "Phone is required.";
    if (!email.trim()) errs.email = "Email is required.";
    if (!neighborhood.trim()) errs.neighborhood = "Neighborhood or borough is required.";
    if (!serviceType) errs.serviceType = "Please select a service type.";
    if (!description.trim()) errs.description = "Please include a brief description.";
    if (!consent) errs.consent = "You must agree before submitting.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("neighborhood", neighborhood);
      formData.append("serviceType", serviceType);
      formData.append("description", description);
      formData.append("slidingScale", String(slidingScale));
      formData.append("consent", String(consent));
      photos.forEach((p, i) => formData.append(`photo_${i}`, p.file));

      /* TODO: Wire up real backend endpoint at /api/inquire */
      const res = await fetch("/api/inquire", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or text us at (917) 832-2500.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section style={{ background: "var(--cream-deep)", padding: "96px 0" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 64px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 32,
              fontStyle: "italic",
              color: "var(--ink)",
              margin: "0 0 16px",
            }}
          >
            Got it. We&apos;ll be in touch within one business day.
          </p>
          <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: 0 }}>
            Prefer to text? Reach us anytime at{" "}
            <a
              href="sms:9178322500"
              style={{ color: "var(--sage-deep)", borderBottom: "1px solid currentColor" }}
            >
              (917) 832-2500
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "var(--cream-deep)", padding: "96px 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          Start an inquiry
        </div>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 56,
            fontWeight: 400,
            fontStyle: "italic",
            margin: "0 0 16px",
            lineHeight: 1.05,
            color: "var(--ink)",
          }}
        >
          Send us a few photos.
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "var(--ink-soft)",
            margin: "0 0 56px",
            lineHeight: 1.6,
          }}
        >
          Photos help us quote accurately. We reply within one business day.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          style={{ display: "grid", gap: 28, maxWidth: 640 }}
        >
          {/* Full name */}
          <div>
            <label style={labelStyle} htmlFor="hif-name">Full name *</label>
            <input
              id="hif-name"
              required
              style={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First & last"
              onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; e.currentTarget.style.outlineOffset = "0"; }}
            />
            {errors.name && (
              <p style={{ fontSize: 13, color: "var(--tan-deep)", margin: "6px 0 0" }}>{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label style={labelStyle} htmlFor="hif-phone">Phone *</label>
            <input
              id="hif-phone"
              required
              type="tel"
              style={inputStyle}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(917) 555-1234"
              onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; e.currentTarget.style.outlineOffset = "0"; }}
            />
            {errors.phone && (
              <p style={{ fontSize: 13, color: "var(--tan-deep)", margin: "6px 0 0" }}>{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label style={labelStyle} htmlFor="hif-email">Email *</label>
            <input
              id="hif-email"
              required
              type="email"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; e.currentTarget.style.outlineOffset = "0"; }}
            />
            {errors.email && (
              <p style={{ fontSize: 13, color: "var(--tan-deep)", margin: "6px 0 0" }}>{errors.email}</p>
            )}
          </div>

          {/* Neighborhood */}
          <div>
            <label style={labelStyle} htmlFor="hif-neighborhood">Neighborhood or borough *</label>
            <input
              id="hif-neighborhood"
              required
              style={inputStyle}
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              placeholder="e.g. Crown Heights, Queens, Long Island"
              onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; e.currentTarget.style.outlineOffset = "0"; }}
            />
            {errors.neighborhood && (
              <p style={{ fontSize: 13, color: "var(--tan-deep)", margin: "6px 0 0" }}>{errors.neighborhood}</p>
            )}
          </div>

          {/* Service type */}
          <div>
            <label style={labelStyle} htmlFor="hif-service">Service type *</label>
            <select
              id="hif-service"
              required
              style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; e.currentTarget.style.outlineOffset = "0"; }}
            >
              <option value="">Select a service…</option>
              <option value="home">Home Cleaning</option>
              <option value="hoard">Hoarded Home Clear-out</option>
              <option value="coach">Virtual Coaching</option>
              <option value="kitchen">Kitchen Makeover Waitlist</option>
              <option value="unsure">Not Sure Yet</option>
            </select>
            {errors.serviceType && (
              <p style={{ fontSize: 13, color: "var(--tan-deep)", margin: "6px 0 0" }}>{errors.serviceType}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label style={labelStyle} htmlFor="hif-description">Brief description *</label>
            <textarea
              id="hif-description"
              required
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's going on, what you'd like help with, what you'd rather we don't ask about — whatever feels right."
              onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; e.currentTarget.style.outlineOffset = "0"; }}
            />
            {errors.description && (
              <p style={{ fontSize: 13, color: "var(--tan-deep)", margin: "6px 0 0" }}>{errors.description}</p>
            )}
          </div>

          {/* Photo upload */}
          <div>
            <label style={labelStyle}>
              Photos of your space{" "}
              <span style={{ color: "var(--tan-deep)" }}>
                — required for Home Cleaning and Hoarded Clear-out, helpful for all others
              </span>
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.heic,.HEIC"
              multiple
              style={{
                ...inputStyle,
                padding: "10px 16px",
                cursor: "pointer",
                display: photos.length >= 10 ? "none" : "block",
              }}
              onChange={handlePhotoChange}
              aria-label="Upload photos of your space"
            />
            {photos.length >= 10 && (
              <p style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 6 }}>
                Maximum 10 photos reached.
              </p>
            )}
            {photos.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 12,
                }}
              >
                {photos.map((p, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.preview}
                      alt={`Upload preview ${i + 1}`}
                      style={{
                        width: 64,
                        height: 64,
                        objectFit: "cover",
                        borderRadius: 3,
                        border: "1px solid var(--rule)",
                        display: "block",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      aria-label={`Remove photo ${i + 1}`}
                      style={{
                        position: "absolute",
                        top: -6,
                        right: -6,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "var(--ink)",
                        color: "var(--cream)",
                        border: "none",
                        cursor: "pointer",
                        fontSize: 11,
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onFocus={(e) => Object.assign(e.currentTarget.style, { outline: "2px solid var(--sage-deep)", outlineOffset: "2px" })}
                      onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sliding-scale checkbox */}
          <label
            className={`checkitem${slidingScale ? " on" : ""}`}
            style={{ cursor: "pointer" }}
          >
            <input
              type="checkbox"
              checked={slidingScale}
              onChange={(e) => setSlidingScale(e.target.checked)}
              style={{ width: "auto", padding: 0, marginTop: 2, accentColor: "var(--sage-deep)" }}
            />
            <div style={{ fontSize: 14, color: "var(--ink)" }}>
              I&apos;d like to be considered for sliding-scale pricing through DIWC, Inc.
            </div>
          </label>

          {/* Consent checkbox */}
          <div>
            <label
              className={`checkitem${consent ? " on" : ""}`}
              style={{ cursor: "pointer" }}
            >
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ width: "auto", padding: 0, marginTop: 2, accentColor: "var(--sage-deep)" }}
              />
              <div style={{ fontSize: 14, color: "var(--ink)" }}>
                I understand photos shared here will only be used to prepare my quote and will not be published without separate written consent.
              </div>
            </label>
            {errors.consent && (
              <p style={{ fontSize: 13, color: "var(--tan-deep)", margin: "6px 0 0" }}>{errors.consent}</p>
            )}
          </div>

          {/* Inline error box */}
          {submitError && (
            <div
              style={{
                background: "rgba(201,165,123,0.25)",
                border: "1px solid var(--tan)",
                borderRadius: 3,
                padding: "14px 16px",
                fontSize: 14,
                color: "var(--ink)",
                lineHeight: 1.55,
              }}
            >
              {submitError}
            </div>
          )}

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="btn-primary"
              disabled={submitting}
              style={{ opacity: submitting ? 0.6 : 1 }}
            >
              {submitting ? "Sending…" : "Send inquiry →"}
            </button>
          </div>

          <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: 0, lineHeight: 1.6 }}>
            Prefer to reach us directly?{" "}
            <a href="tel:9178322500" style={{ color: "var(--sage-deep)", borderBottom: "1px solid currentColor" }}>
              Call (917) 832-2500
            </a>{" "}
            or{" "}
            <a href="sms:9178322500" style={{ color: "var(--sage-deep)", borderBottom: "1px solid currentColor" }}>
              text us
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
