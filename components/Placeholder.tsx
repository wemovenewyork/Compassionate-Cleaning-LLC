interface PlaceholderProps {
  src?: string;
  alt?: string;
  label?: string;
  style?: React.CSSProperties;
  variant?: "default" | "sage" | "tan";
}

const backgrounds: Record<string, string> = {
  default: "var(--cream-deep)",
  sage: "rgba(110,132,103,0.15)",
  tan: "rgba(201,165,123,0.18)",
};

export default function Placeholder({ src, alt = "", style, variant = "default" }: PlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", ...style }}
      />
    );
  }
  return (
    <div
      style={{
        background: backgrounds[variant],
        border: "1px solid var(--rule)",
        ...style,
      }}
    />
  );
}
