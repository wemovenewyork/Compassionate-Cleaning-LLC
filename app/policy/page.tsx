"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InquireModal from "@/components/InquireModal";

const sections = [
  {
    title: "Deposits & Booking",
    body: "A $100 non-refundable deposit via Zelle is required to confirm your appointment. Your spot is not held until the deposit is received.",
  },
  {
    title: "Cancellations & Rescheduling",
    body: "Rescheduling requires 24–48 hours notice. Cancellations forfeit the deposit.",
  },
  {
    title: "Day of Service — Payment",
    body: "The remaining balance is due upon arrival. We accept cash or Zelle only.",
  },
  {
    title: "Your Space",
    body: "Please ensure running water, working drains, and working electricity and lighting in each room are available. If these are not available upon arrival, the appointment will be cancelled and the deposit forfeited.",
  },
  {
    title: "Valuables",
    body: "Please secure all medications, cash, jewelry, and important documents before our arrival. Compassionate Cleaning LLC is not responsible for lost, misplaced, or discarded items.",
  },
  {
    title: "Decluttering Sessions",
    body: "The homeowner must be present and actively available to provide direction. Working from home does not qualify as present. Non-compliance results in cancellation with no deposit return.",
  },
  {
    title: "Health & Safety",
    body: "Services will not be performed in environments involving active illness, including fever, flu, cold, or COVID-like symptoms.",
  },
  {
    title: "Supplies",
    body: "Please provide a broom, dustpan, and working vacuum (if applicable). We bring our own cleaning products.",
  },
  {
    title: "Pets & Children",
    body: "Please keep pets and children away from work areas during the service.",
  },
  {
    title: "Pest Disclosure",
    body: "Please disclose any mice or roaches upon booking. We are unable to service homes with rats or bedbugs. Undisclosed infestations result in cancellation with no refund.",
  },
  {
    title: "Junk Removal",
    body: "Removal of garbage or appliances incurs additional charges based on volume.",
  },
];

export default function PolicyPage() {
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
          <div className="eyebrow" style={{ marginBottom: 18 }}>Before You Book</div>
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
            Our Policy
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
            Clear expectations make for better visits. Please read before booking.
          </p>
        </section>

        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 64px 96px",
          }}
        >
          {sections.map((s, i) => (
            <div
              key={s.title}
              style={{
                paddingTop: i === 0 ? 0 : 40,
                paddingBottom: 40,
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 28,
                  fontWeight: 500,
                  margin: "0 0 14px",
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--ink-soft)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}

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
