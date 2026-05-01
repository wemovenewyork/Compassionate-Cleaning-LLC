import Placeholder from "./Placeholder";

export default function Services() {
  return (
    <section id="coaching" style={{ padding: "96px 0", background: "var(--cream-deep)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Services
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 64,
                margin: 0,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.02,
              }}
            >
              <em>Quiet</em> work, custom-quoted.
            </h2>
          </div>
          <a href="#" className="ulink" style={{ fontSize: 14 }}>
            See all services →
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "var(--sage-deep)",
              color: "var(--cream)",
              padding: 40,
              minHeight: 460,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: 4,
            }}
          >
            <div>
              <div
                className="eyebrow"
                style={{ color: "var(--cream)", opacity: 0.7, marginBottom: 24 }}
              >
                Our Specialty
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 44,
                  lineHeight: 1.05,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                Hoarded home
                <br />
                clear-outs.
              </h3>
              <p style={{ marginTop: 22, fontSize: 15, lineHeight: 1.65, opacity: 0.92 }}>
                A trauma-informed, room-by-room approach. We coordinate with therapists,
                family, or building management when helpful. Honest, transparent pricing —
                never by the bag.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  opacity: 0.7,
                  marginBottom: 6,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Starting at
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 44,
                  fontStyle: "italic",
                }}
              >
                $2,500
              </div>
            </div>
          </div>
          <div
            style={{
              background: "var(--cream)",
              padding: 32,
              minHeight: 460,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid var(--rule)",
              borderRadius: 4,
            }}
          >
            <div>
              <Placeholder
                label="home cleaning · 4:3"
                variant="sage"
                style={{ height: 160, marginBottom: 28 }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 30,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Home Cleaning
              </h3>
              <p
                style={{
                  marginTop: 12,
                  color: "var(--ink-soft)",
                  fontSize: 14,
                  lineHeight: 1.65,
                }}
              >
                Surface, deep, or a thoughtful mix. Custom-quoted to your home and rhythm.
                Recurring or one-time.
              </p>
            </div>
            <div className="eyebrow" style={{ color: "var(--tan-deep)" }}>
              Custom quote →
            </div>
          </div>
          <div
            style={{
              background: "var(--cream)",
              padding: 32,
              minHeight: 460,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid var(--rule)",
              borderRadius: 4,
            }}
          >
            <div>
              <Placeholder
                label="video call · 4:3"
                variant="tan"
                style={{ height: 160, marginBottom: 28 }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 30,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Virtual Coaching
              </h3>
              <p
                style={{
                  marginTop: 12,
                  color: "var(--ink-soft)",
                  fontSize: 14,
                  lineHeight: 1.65,
                }}
              >
                One hour over Zoom or FaceTime. Walk through a room together — we&apos;ll
                guide the next step at your pace.
              </p>
            </div>
            <div className="eyebrow" style={{ color: "var(--tan-deep)" }}>
              $30 / hour →
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            padding: "20px 26px",
            background: "var(--cream)",
            border: "1px dashed var(--tan)",
            borderRadius: 4,
            fontSize: 14,
            color: "var(--ink-soft)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>
            <em
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 19,
                color: "var(--ink)",
                marginRight: 10,
              }}
            >
              Kitchen Makeovers
            </em>
            — paused for now, returning soon.
          </span>
          <a href="#" className="ulink" style={{ color: "var(--sage-deep)", fontWeight: 500 }}>
            Get on the waitlist →
          </a>
        </div>
      </div>
    </section>
  );
}
