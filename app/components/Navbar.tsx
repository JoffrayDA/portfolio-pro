"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home",      href: "/"         },
  { label: "Projets",   href: "/projets"  },
  { label: "À propos",  href: "/a-propos" },
  { label: "Contact",   href: "/contact"  },
];

function IconLinkedIn() {
  return (
    <svg width="39" height="39" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 12.247V19z"/>
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="39" height="39" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.98.004 1.97.132 2.88.385 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
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
        height: "72px",
        padding: "0 clamp(24px, 6vw, 80px)",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        background: scrolled ? "rgba(232, 224, 213, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      {/* Left: name */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "22px",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#6B1F1F",
          textDecoration: "none",
          justifySelf: "start",
        }}
      >
        Business · Data · IA
      </Link>

      {/* Center: nav links */}
      <div style={{ display: "flex", gap: "clamp(24px, 3.5vw, 48px)", alignItems: "center" }}>
        {navLinks.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-nav)",
                fontSize: "22px",
                letterSpacing: "0",
                textTransform: "uppercase",
                fontWeight: 700,
                color: active ? "#fff" : "#6B1F1F",
                opacity: 1,
                textDecoration: "none",
                padding: "0 10px",
                transition: "color 0.4s ease, opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Right: social icons */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center", justifySelf: "end" }}>
        <a
          href="https://www.linkedin.com/in/joffray-dealberto/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6B1F1F", opacity: 1, transition: "opacity 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          aria-label="LinkedIn"
        >
          <IconLinkedIn />
        </a>
        <a
          href="https://github.com/JoffrayDA"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6B1F1F", opacity: 1, transition: "opacity 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          aria-label="GitHub"
        >
          <IconGitHub />
        </a>
      </div>
    </nav>
  );
}
