import Placeholder from "./Placeholder";

export default function Founder() {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "120px 64px",
        display: "grid",
        gridTemplateColumns: "1fr 1.6fr",
        gap: 80,
        alignItems: "center",
      }}
    >
      <Placeholder
        label="founder portrait · 4:5"
        variant="sage"
        style={{ aspectRatio: "4/5", borderRadius: 4 }}
      />
      <div>
        <div className="eyebrow" style={{ marginBottom: 28 }}>
          The mission
        </div>
        <blockquote
          style={{
            margin: 0,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 32,
            lineHeight: 1.35,
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--ink)",
            letterSpacing: "-0.005em",
          }}
        >
          &ldquo;We aim to raise the living standards for people in our community who need it.
          Cleaning services should be accessible to all — especially those reaching out for help.
          Everyone deserves to live in a space that represents them,{" "}
          <em style={{ fontStyle: "normal", color: "var(--sage-deep)" }}>
            not the stigma
          </em>{" "}
          attached to their environment or condition.&rdquo;
        </blockquote>
        <div
          style={{
            marginTop: 36,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 14,
            color: "var(--ink-soft)",
          }}
        >
          <div style={{ width: 32, height: 1, background: "var(--ink-soft)" }} />
          <span>Founder, Compassionate Cleaning, LLC</span>
        </div>
        <p
          style={{
            marginTop: 22,
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--ink-soft)",
            maxWidth: 480,
          }}
        >
          The business began at Queens College — when our founder helped a neighbor prepare
          for an ACS visit and saw firsthand how judgment, embarrassment, and financial
          barriers kept people from getting the cleaning support they needed. That moment
          became Compassionate Cleaning.
        </p>
        <div style={{ marginTop: 36 }}>
          <a href="/about" className="btn-ghost">
            Read our story
          </a>
        </div>
      </div>
    </section>
  );
}
