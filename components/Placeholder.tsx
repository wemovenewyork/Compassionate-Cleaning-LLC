interface PlaceholderProps {
  label: string;
  style?: React.CSSProperties;
  variant?: "default" | "sage" | "tan";
}

const backgrounds: Record<string, string> = {
  default:
    "repeating-linear-gradient(135deg, var(--cream-deep) 0 14px, var(--cream) 14px 28px)",
  sage: "repeating-linear-gradient(135deg, rgba(110,132,103,0.18) 0 14px, var(--cream) 14px 28px)",
  tan: "repeating-linear-gradient(135deg, rgba(201,165,123,0.22) 0 14px, var(--cream) 14px 28px)",
};

export default function Placeholder({ label, style, variant = "default" }: PlaceholderProps) {
  return (
    <div
      style={{
        background: backgrounds[variant],
        border: "1px solid var(--rule)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--ink-soft)",
        fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textAlign: "center",
        padding: 16,
        ...style,
      }}
    >
      {label}
    </div>
  );
}
