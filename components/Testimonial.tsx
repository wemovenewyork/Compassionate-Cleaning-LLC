export default function Testimonial() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--rule)",
        padding: "96px 0",
        background: "var(--cream)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <blockquote
          style={{
            margin: 0,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 36,
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "var(--ink)",
            maxWidth: 760,
            letterSpacing: "-0.005em",
          }}
        >
          &ldquo;They came in without a single look, a single comment. I&apos;d been putting it
          off for two years. They made it feel like a Tuesday.&rdquo;
        </blockquote>
        <div
          style={{
            marginTop: 28,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink-soft)",
            fontWeight: 500,
          }}
        >
          M., Queens &nbsp;·&nbsp; ADHD client since 2023
        </div>
      </div>
    </section>
  );
}
