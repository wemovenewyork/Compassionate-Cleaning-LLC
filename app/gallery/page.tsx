"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InquireModal from "@/components/InquireModal";

const tiles = [
  { label: "Kitchen reset", location: "Bed-Stuy", tall: true },
  { label: "Clear-out", location: "Washington Heights", tall: false },
  { label: "Studio reset", location: "Lower East Side", tall: false },
  { label: "Bathroom deep clean", location: "Astoria", tall: true },
  { label: "Closet organization", location: "Crown Heights", tall: false },
  { label: "Post-move reset", location: "Bushwick", tall: false },
];

function GalleryTile({ label, location }: { label: string; location: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "var(--ink)",
        borderRadius: 3,
        overflow: "hidden",
        aspectRatio: "4 / 5",
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "repeating-linear-gradient(135deg, rgba(46,42,36,0.9) 0 14px, rgba(46,42,36,0.7) 14px 28px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(110, 132, 103, 0.88)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 28,
            fontStyle: "italic",
            color: "var(--cream)",
            lineHeight: 1.2,
          }}
        >
          {label}
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(245,240,230,0.75)",
          }}
        >
          {location}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 20,
            fontStyle: "italic",
            color: "var(--cream)",
            lineHeight: 1.3,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(245,240,230,0.6)",
            marginTop: 4,
          }}
        >
          {location}
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav onInquire={() => setOpen(true)} />

      <main>
        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "96px 64px 64px",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 18 }}>Gallery</div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 400,
              fontStyle: "italic",
              margin: "0 0 24px",
              lineHeight: 1.05,
            }}
          >
            The Compassionate Gallery
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--ink-soft)",
              maxWidth: 620,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Photos shared with full, written consent. Names and identifying details changed. Most clients ask us not to photograph at all — we don&apos;t.
          </p>
        </section>

        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 64px 96px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {tiles.map((tile) => (
            <GalleryTile key={tile.label} label={tile.label} location={tile.location} />
          ))}
        </section>

        <section
          style={{
            background: "var(--cream-deep)",
            borderTop: "1px solid var(--rule)",
            borderBottom: "1px solid var(--rule)",
            padding: "64px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 28,
              fontStyle: "italic",
              color: "var(--ink)",
              margin: "0 0 24px",
              lineHeight: 1.4,
            }}
          >
            Want to share your before &amp; after?
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--ink-soft)",
              margin: "0 auto 28px",
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            Reach out — we&apos;d love to feature your story with your permission.
          </p>
          <button className="btn-ghost" onClick={() => setOpen(true)}>
            Get in touch →
          </button>
        </section>
      </main>

      <Footer onInquire={() => setOpen(true)} />
      {open && <InquireModal onClose={() => setOpen(false)} />}
    </>
  );
}
