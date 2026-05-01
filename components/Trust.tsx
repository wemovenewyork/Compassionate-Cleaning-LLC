const items = [
  { k: "Est. 2019", v: "Serving NYC and beyond since 2019" },
  { k: "6 areas", v: "5 boroughs · Long Island · Yonkers · Westchester" },
  { k: "Insured", v: "Bonded & fully insured · NYC compliant" },
  { k: "Sliding scale", v: "Donor-funded help via DIWC, Inc." },
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
    </section>
  );
}
