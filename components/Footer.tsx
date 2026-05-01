import Logo from "./Logo";

interface FooterProps {
  onInquire: () => void;
}

const cols = [
  {
    h: "Services",
    l: [
      { label: "Home Cleaning", href: "/services" },
      { label: "Hoarded Clear-outs", href: "/services" },
      { label: "Virtual Coaching", href: "/services" },
      { label: "Kitchen Makeovers", href: "/services" },
    ],
  },
  {
    h: "Company",
    l: [
      { label: "About", href: "/diwc-inc" },
      { label: "Founder Story", href: "/diwc-inc" },
      { label: "DIWC Inc.", href: "/diwc-inc" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    h: "Contact",
    l: [
      { label: "Inquire", href: "/inquire" },
      { label: "Policy", href: "/policy" },
      { label: "Gallery", href: "/gallery" },
      { label: "(917) 832-2500", href: "tel:9178322500" },
    ],
  },
];

export default function Footer({ onInquire }: FooterProps) {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)", padding: "88px 0 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>

        {/* Top row: logo + CTA left, link columns right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 64,
          }}
        >
          <div>
            <Logo inverse />
            <p
              style={{
                marginTop: 24,
                color: "rgba(245,240,230,0.7)",
                maxWidth: 300,
                fontSize: 15,
                lineHeight: 1.65,
              }}
            >
              Reach out whenever — no pressure to schedule. We answer every inquiry
              personally, usually within one business day.
            </p>
            <div style={{ marginTop: 12, fontSize: 13, color: "rgba(245,240,230,0.5)" }}>
              Mon–Fri 9am–5pm · Sat–Sun closed
            </div>
            <button
              className="btn-primary"
              onClick={onInquire}
              style={{ background: "var(--tan)", color: "var(--ink)", marginTop: 28 }}
            >
              Tell us about your space →
            </button>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="eyebrow" style={{ color: "var(--tan)", marginBottom: 18 }}>
                {c.h}
              </div>
              {c.l.map((x) => (
                <a
                  key={x.label}
                  href={x.href}
                  style={{
                    display: "block",
                    padding: "7px 0",
                    fontSize: 14,
                    color: "rgba(245,240,230,0.85)",
                  }}
                >
                  {x.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(245,240,230,0.15)" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 0",
            fontSize: 11,
            color: "rgba(245,240,230,0.4)",
            letterSpacing: "0.04em",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>© 2026 Compassionate Cleaning, LLC · A Do It With Compassion, Inc. company</div>
          <div>Designed by{" "}
            <a
              href="https://www.instagram.com/wemovenewyork"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(245,240,230,0.55)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,230,0.55)")}
            >
              @wemovenewyork
            </a>
          </div>
          <div>Powered by{" "}
            <a
              href="https://futreeng.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(245,240,230,0.55)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,230,0.55)")}
            >
              futreeng.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
