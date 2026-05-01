"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InquireModal from "@/components/InquireModal";

/* TODO: Add WebPage schema via server wrapper */

const sectionStyle: React.CSSProperties = {
  paddingTop: 40,
  paddingBottom: 40,
  borderBottom: "1px solid var(--rule)",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
  fontSize: 28,
  fontWeight: 500,
  margin: "0 0 14px",
  lineHeight: 1.2,
};

const bodyStyle: React.CSSProperties = {
  fontSize: 16,
  color: "var(--ink-soft)",
  lineHeight: 1.75,
  margin: 0,
};

export default function PolicyPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav onInquire={() => setOpen(true)} />

      <main>
        {/* Page header — keep shell intact */}
        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "96px 64px 72px",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 18 }}>Legal</div>
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
            Privacy Policy &amp; Terms
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
            Effective date: May 1, 2026 &nbsp;·&nbsp; Last updated: May 1, 2026
          </p>
        </section>

        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 64px 96px",
          }}
        >
          {/* TODO: Remove draft notice before launch */}
          <div
            style={{
              background: "rgba(201,165,123,0.18)",
              border: "1px solid var(--tan)",
              borderRadius: 4,
              padding: "20px 24px",
              marginBottom: 48,
              fontSize: 14,
              color: "var(--ink)",
              lineHeight: 1.65,
            }}
          >
            <strong>Draft notice:</strong> This policy is provided in plain language. It is not a substitute for legal advice. We recommend attorney review before publication.
          </div>

          {/* ── PRIVACY POLICY ─────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 40,
              fontWeight: 400,
              margin: "0 0 8px",
              lineHeight: 1.1,
            }}
          >
            Privacy Policy
          </h2>
          <div style={{ height: 1, background: "var(--rule)", marginBottom: 0 }} />

          <section style={sectionStyle}>
            <h3 style={headingStyle}>1. Information We Collect</h3>
            <p style={bodyStyle}>
              We may collect the following types of information when you contact us or use our services: your name, phone number, email address, and home address; photos of your space that you share with us; payment information (processed by third-party processors — we do not store card numbers); and any communications you have with us by phone, text, email, or through our website.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>2. How We Collect It</h3>
            <p style={bodyStyle}>
              We collect information through our online inquiry form, by phone, by text message, by email, and in person during on-site service appointments.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>3. How We Use It</h3>
            <p style={bodyStyle}>
              We use your information to prepare quotes for requested services, to deliver cleaning and coaching services, to communicate with you about your appointment, to process payments, and to improve the quality of our work over time. We do not use your information for advertising or to build marketing profiles.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>4. Photo Handling</h3>
            <p style={bodyStyle}>
              <strong>Photos you share with us are used solely to prepare your quote.</strong> They are stored securely with limited internal access. We will never publish, share, or use your photos in any marketing material, gallery, social media post, or any other public-facing context without your separate, explicit written consent — obtained at the time you agree to share them publicly.
            </p>
            <p style={{ ...bodyStyle, marginTop: 16 }}>
              You may revoke your consent to photo publication at any time. Upon revocation, we will delete any copies of your photos held for marketing purposes within 30 days.
            </p>
            <p style={{ ...bodyStyle, marginTop: 16 }}>
              On-site before and after photos taken during a service appointment are governed by the same rules. We obtain separate written consent at the time of service before taking any such photos. Without that consent, no photos are taken.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>5. Sharing</h3>
            <p style={bodyStyle}>
              We use third-party payment processors and scheduling tools to operate our business. These vendors receive only the information necessary to perform their functions and are not permitted to use it for other purposes.
            </p>
            <p style={{ ...bodyStyle, marginTop: 16 }}>
              We will share information with therapists, social workers, family members, or building management <strong>only</strong> with your explicit written permission. We will never share your information with these or any other third parties without your clear consent.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>6. Retention</h3>
            <p style={bodyStyle}>
              Client records (including contact information and service history) are retained for seven years to meet tax and legal requirements. Photos are deleted upon your request or after two years from the date of service — whichever comes first.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>7. Your Rights</h3>
            <p style={bodyStyle}>
              You have the right to access the personal information we hold about you, request corrections, and request deletion. You may opt out of any marketing communications at any time. You may revoke consent for photo use at any time. To exercise any of these rights, contact us using the information below.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>8. Children&apos;s Privacy</h3>
            <p style={bodyStyle}>
              Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>9. Security</h3>
            <p style={bodyStyle}>
              We take reasonable steps to protect your information from unauthorized access, use, or disclosure. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>10. Contact</h3>
            <p style={bodyStyle}>
              If you have questions about this policy, please reach out:
            </p>
            <ul style={{ ...bodyStyle, marginTop: 12, paddingLeft: 20 }}>
              <li style={{ marginBottom: 6 }}>
                <a href="tel:9178322500" style={{ color: "var(--sage-deep)", borderBottom: "1px solid currentColor" }}>
                  (917) 832-2500
                </a>
              </li>
              <li>
                {/* TODO: Confirm email address before launch */}
                <a href="mailto:privacy@compassionatecleaning.info" style={{ color: "var(--sage-deep)", borderBottom: "1px solid currentColor" }}>
                  privacy@compassionatecleaning.info
                </a>
              </li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>11. Updates</h3>
            <p style={bodyStyle}>
              We may update this Privacy Policy from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* ── TERMS OF SERVICE ───────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 40,
              fontWeight: 400,
              margin: "64px 0 8px",
              lineHeight: 1.1,
            }}
          >
            Terms of Service
          </h2>
          <div style={{ height: 1, background: "var(--rule)", marginBottom: 0 }} />

          <section style={sectionStyle}>
            <h3 style={headingStyle}>1. Service Scope</h3>
            <p style={bodyStyle}>
              Services are provided according to the tier agreed upon during the inquiry and quoting process. If on-site conditions require any change to the originally discussed scope — more or less work than anticipated — our team will communicate this with you before proceeding.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>2. Quotes &amp; Estimates</h3>
            <p style={bodyStyle}>
              All quotes are estimates based on information provided at the time of inquiry, including any photos shared. Final scope may vary. Any changes are communicated clearly before work proceeds — no surprises.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>3. Payment</h3>
            <p style={bodyStyle}>
              A $100 deposit via Zelle is required to book your appointment. Your spot is not held until the deposit is received. The remaining balance is due in full upon our arrival. We accept cash or Zelle only — no cards or checks.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>4. Cancellation</h3>
            <p style={bodyStyle}>
              There is no cancellation fee if you provide at least 24 hours notice. Same-day cancellations may incur a charge of up to 50% of the quoted service fee to cover team time and travel.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>5. Client Responsibilities</h3>
            <p style={bodyStyle}>
              Clients are responsible for providing safe access to the space, securing valuables (medications, cash, jewelry, important documents), keeping pets secured and away from work areas, and disclosing any known allergies or sensitivities to cleaning products before the appointment.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>6. Scope Exclusions</h3>
            <p style={bodyStyle}>
              The following services are outside our scope and require licensed specialists: construction cleanup, post-fire or smoke restoration, biohazard remediation, mold remediation, pest extermination (including rodents, bedbugs, and roaches). We are happy to provide referrals to appropriate specialists.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3 style={headingStyle}>7. Liability</h3>
            <p style={bodyStyle}>
              Compassionate Cleaning carries general liability insurance and is bonded. Any claims for property damage must be reported within 48 hours of the service appointment. We are not responsible for pre-existing damage, items left unsecured, or conditions not disclosed prior to the appointment.
            </p>
          </section>

          <section style={{ ...sectionStyle, borderBottom: "none" }}>
            <h3 style={headingStyle}>8. Governing Law</h3>
            <p style={bodyStyle}>
              These Terms of Service are governed by the laws of the State of New York. Any disputes arising under these terms shall be resolved in the courts of New York.
            </p>
          </section>

          <div
            style={{
              marginTop: 64,
              padding: "40px 48px",
              background: "var(--cream-deep)",
              border: "1px solid var(--rule)",
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 26,
                fontStyle: "italic",
                margin: "0 0 20px",
                color: "var(--ink)",
              }}
            >
              Questions about our policy? Reach out before booking.
            </p>
            <a href="/inquire" className="btn-ghost">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer onInquire={() => setOpen(true)} />
      {open && <InquireModal onClose={() => setOpen(false)} />}
    </>
  );
}
