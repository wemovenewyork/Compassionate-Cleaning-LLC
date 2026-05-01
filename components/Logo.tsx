interface LogoProps {
  inverse?: boolean;
  size?: number;
}

export default function Logo({ inverse = false, size = 1 }: LogoProps) {
  const c = inverse ? "var(--cream)" : "var(--ink)";
  return (
    <div style={{ display: "flex", flexDirection: "column", color: c }}>
      <span
        style={{
          fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 13 * size,
          letterSpacing: "0.18em",
          lineHeight: 1.2,
          display: "block",
        }}
      >
        DO IT WITH
      </span>
      <span
        style={{
          fontFamily: "var(--font-pinyon), 'Pinyon Script', cursive",
          fontWeight: 400,
          fontSize: 32 * size,
          lineHeight: 1,
          marginLeft: 18 * size,
          display: "block",
        }}
      >
        Compassion
      </span>
    </div>
  );
}
