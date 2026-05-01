"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

interface NavProps {
  onInquire: () => void;
}

const items = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Inquire", href: "/inquire" },
  { label: "Policy", href: "/policy" },
  { label: "Donate", href: "/donate" },
  { label: "DIWC Inc.", href: "/diwc-inc" },
];

export default function Nav({ onInquire }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mm, setMm] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(245,240,230,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
          transition: "all 0.25s",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "24px 64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <Logo />
          </a>
          <div
            className="nav-links-wrap"
            style={{ display: "flex", gap: 30, fontSize: 13, color: "var(--ink-soft)" }}
          >
            {items.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? "var(--ink)" : "var(--ink-soft)",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--sage-deep)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    i === 0 ? "var(--ink)" : "var(--ink-soft)")
                }
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="btn-ghost nav-links-wrap"
            onClick={onInquire}
            style={{ padding: "11px 20px", fontSize: 12 }}
          >
            Start the Conversation
          </button>
          <button
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            className="mobile-menu-btn"
            onClick={() => setMm(true)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22">
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </nav>
      {mm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--cream)",
            zIndex: 9000,
            display: "flex",
            flexDirection: "column",
            padding: "32px 28px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Logo />
            <button
              onClick={() => setMm(false)}
              style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer" }}
            >
              ×
            </button>
          </div>
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMm(false)}
              style={{
                display: "block",
                padding: "16px 0",
                borderBottom: "1px solid var(--rule)",
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 28,
                fontStyle: "italic",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
