import Logo from "./Logo";

interface FooterProps {
  onInquire: () => void;
}

const cols = [
  { h: "Services", l: ["Home Cleaning", "Hoarded Clear-outs", "Virtual Coaching", "Kitchen Makeovers"] },
  { h: "Company", l: ["About", "Founder Story", "DIWC Inc.", "Donate"] },
  { h: "Visit", l: ["Inquire", "Policy", "Gallery", "hello@diwc.nyc"] },
];

export default function Footer({ onInquire }: FooterProps) {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)", padding: "88px 0 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(245,240,230,0.15)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 56,
                margin: 0,
                lineHeight: 1.0,
                fontWeight: 400,
              }}
            >
              Ready when <em style={{ color: "var(--tan)" }}>you</em> are.
            </h3>
            <p
              style={{
                marginTop: 22,
                color: "rgba(245,240,230,0.7)",
                maxWidth: 360,
                fontSize: 15,
                lineHeight: 1.65,
              }}
            >
              Reach out whenever — no pressure to schedule. We answer every inquiry
              personally, usually within a day.
            </p>
            <button
              className="btn-primary"
              onClick={onInquire}
              style={{ background: "var(--tan)", color: "var(--ink)", marginTop: 28 }}
            >
              Start the Conversation →
            </button>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="eyebrow" style={{ color: "var(--tan)", marginBottom: 18 }}>
                {c.h}
              </div>
              {c.l.map((x) => (
                <a
                  key={x}
                  href="#"
                  style={{
                    display: "block",
                    padding: "7px 0",
                    fontSize: 14,
                    color: "rgba(245,240,230,0.85)",
                  }}
                >
                  {x}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 32,
            fontSize: 12,
            color: "rgba(245,240,230,0.5)",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Logo inverse />
          <div>© 2026 Compassionate Cleaning, LLC · A Do It With Compassion, Inc. company</div>
        </div>
      </div>
    </footer>
  );
}
