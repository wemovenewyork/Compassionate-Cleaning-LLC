const groups = [
  {
    t: "Anxiety & Depression",
    d: "When the dishes feel impossible, we work quietly. No small talk. No expectations. We come in, we leave it lighter.",
  },
  {
    t: "ADHD & Executive Fatigue",
    d: "Decisions about where things go are ours to make, so they are not yours. We sort, label, and document.",
  },
  {
    t: "Hoarding & Clutter",
    d: "No cameras. No shock. A patient, room-by-room plan that respects what stays and gently moves what does not.",
  },
  {
    t: "Busy NYC Lives",
    d: "A 60-hour week, a sick parent, a baby asleep. Lockbox or doorman, we let ourselves in and out.",
  },
];

export default function WhoWeHelp() {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "96px 64px",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Who we serve
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 52,
              lineHeight: 1.05,
              margin: 0,
              fontWeight: 400,
            }}
          >
            For the homes <em>others</em> overlook —<br />and the people inside them.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          {groups.map((g) => (
            <div key={g.t}>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--tan)",
                  marginBottom: 22,
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: 26,
                  fontWeight: 500,
                  margin: 0,
                  marginBottom: 12,
                  fontStyle: "italic",
                }}
              >
                {g.t}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--ink-soft)",
                  fontSize: 15,
                  lineHeight: 1.65,
                }}
              >
                {g.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
