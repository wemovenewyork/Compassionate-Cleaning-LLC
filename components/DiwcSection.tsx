const impactItems = [
  { amount: "$75", desc: "covers one hour of cleaning for a neighbor in need" },
  { amount: "$300", desc: "covers a full session" },
  { amount: "$2,500", desc: "sponsors a hoarded home clear-out" },
];

export default function DiwcSection() {
  return (
    <section
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "96px 64px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* Left column */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Our nonprofit
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 48,
              lineHeight: 1.05,
              fontWeight: 400,
              margin: "0 0 24px",
              color: "var(--ink)",
            }}
          >
            Help, even when help isn&apos;t affordable.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--ink-soft)",
              maxWidth: 480,
              margin: "0 0 36px",
            }}
          >
            Compassionate Cleaning is the for-profit arm of Do It With Compassion, Inc., a 501(c)(3) nonprofit. Through DIWC, we offer sliding-scale and fully donor-funded cleaning sessions for neighbors who reach out but can&apos;t afford the standard rate. No documentation required. Just ask.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a href="/donate" className="btn-primary">
              Fund a session →
            </a>
            <a href="/diwc-inc" className="btn-ghost">
              Learn about DIWC
            </a>
          </div>
        </div>

        {/* Right column — impact card */}
        <div
          style={{
            background: "var(--cream-deep)",
            border: "1px solid var(--rule)",
            borderRadius: 4,
            padding: 40,
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            Where your donation goes
          </div>

          {impactItems.map((item, i) => (
            <div key={item.amount}>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "baseline",
                  padding: "18px 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontSize: 36,
                    fontStyle: "italic",
                    color: "var(--sage-deep)",
                    fontWeight: 400,
                    flexShrink: 0,
                    minWidth: 72,
                  }}
                >
                  {item.amount}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "var(--ink-soft)",
                    lineHeight: 1.55,
                  }}
                >
                  {item.desc}
                </span>
              </div>
              {i < impactItems.length - 1 && (
                <div style={{ height: 1, background: "var(--rule)" }} />
              )}
            </div>
          ))}

          <div style={{ height: 1, background: "var(--rule)", marginTop: 8, marginBottom: 20 }} />

          <p
            style={{
              fontSize: 13,
              color: "var(--ink-soft)",
              margin: "0 0 20px",
              fontStyle: "italic",
            }}
          >
            {/* TODO: Add EIN once confirmed */}
            Tax-deductible. EIN available on request.
          </p>

          <a href="/donate" className="eyebrow ulink" style={{ color: "var(--sage-deep)" }}>
            Donate →
          </a>
        </div>
      </div>
    </section>
  );
}
