"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Projets",   href: "#projets" },
  { label: "À propos",  href: "#a-propos" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "64px",
        padding: "0 clamp(24px, 8vw, 120px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(250,247,242,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "17px",
          fontWeight: 400,
          color: "var(--fg)",
          textDecoration: "none",
          letterSpacing: "0.01em",
        }}
      >
        Joffray DeAlberto
      </a>

      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--fg)",
              opacity: 0.5,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
