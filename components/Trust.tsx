const items = [
  { k: "Est. 2019", v: "Six years serving NYC's overlooked homes." },
  { k: "Where we work", v: "5 boroughs + Long Island, Yonkers & Westchester." },
  // TODO: Confirm carrier name and coverage amount before launch
  { k: "Insured & bonded", v: "$2M general liability · Bonded through [carrier]." },
  { k: "Vetted team", v: "Every team member is background-checked and trained in trauma-informed care." },
];

export default function Trust() {
  return (
    <section
      style={{
        padding: "64px 0",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
        background: "var(--cream)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {items.map((it, i) => (
          <div
            key={it.k}
            style={{
              padding: "8px 28px",
              borderLeft: i === 0 ? "none" : "1px solid var(--rule)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 36,
                fontStyle: "italic",
                color: "var(--sage-deep)",
                fontWeight: 400,
                marginBottom: 8,
              }}
            >
              {it.k}
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>
              {it.v}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: "var(--ink-soft)",
            textAlign: "center",
            marginTop: 24,
            fontStyle: "italic",
          }}
        >
          Cancellation: no fee with 24 hours notice. Same-day cancellations may incur a 50% charge.
        </p>
      </div>
    </section>
  );
}
