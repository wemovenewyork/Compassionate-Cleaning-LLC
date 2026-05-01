import Placeholder from "./Placeholder";

interface HeroProps {
  onInquire: () => void;
}

export default function Hero({ onInquire }: HeroProps) {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "88px 64px 96px",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}
    >
      <div>
        <div className="eyebrow" style={{ marginBottom: 28 }}>
          NYC · Est. 2019 · Insured &amp; Bonded
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 92,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            fontWeight: 400,
          }}
        >
          A home you can{" "}
          <em style={{ color: "var(--sage-deep)" }}>breathe</em> in.
          <br />
          <span style={{ fontStyle: "italic" }}>Care, before</span> cleaning.
        </h1>
        <p
          style={{
            marginTop: 32,
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--ink-soft)",
            maxWidth: 480,
          }}
        >
          Compassionate Cleaning serves New Yorkers living with anxiety, depression, ADHD,
          bipolar disorder, and hoarding — alongside busy households who simply need help.
          No judgment. No shame. Just a calmer space.
        </p>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 18,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button className="btn-primary" onClick={onInquire}>
            Start the Conversation <span>→</span>
          </button>
          <a href="#coaching" className="ulink" style={{ fontSize: 14 }}>
            Speak with a coach · $30/hr
          </a>
        </div>
      </div>
      <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
        <Placeholder
          label="home interior · soft window light · 4:5"
          style={{ position: "absolute", inset: 0, borderRadius: 4 }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -28,
            left: -28,
            background: "var(--cream)",
            padding: "20px 24px",
            boxShadow: "0 12px 40px rgba(46,42,36,0.12)",
            maxWidth: 240,
            border: "1px solid var(--rule)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 8, color: "var(--tan-deep)" }}>
            Our promise
          </div>
          <div
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 22,
              lineHeight: 1.3,
              fontStyle: "italic",
            }}
          >
            &ldquo;We meet your home where it is.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
