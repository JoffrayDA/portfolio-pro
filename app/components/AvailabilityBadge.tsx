"use client";

import { useState, useEffect } from "react";

export default function AvailabilityBadge() {
  const [visible, setVisible] = useState(false);

  // Fade in after a short delay so it doesn't flash on load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="#contact"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "clamp(16px, 4vw, 40px)",
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "var(--bg)",
        border: "1px solid var(--border)",
        padding: "10px 16px 10px 12px",
        textDecoration: "none",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease, border-color 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)";
      }}
    >
      {/* Pulsing green dot */}
      <span style={{ position: "relative", width: "8px", height: "8px", flexShrink: 0 }}>
        <span style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "#4CAF50",
          animation: "pulse-ring 2s ease-out infinite",
        }} />
        <span style={{
          position: "absolute",
          inset: "1px",
          borderRadius: "50%",
          background: "#4CAF50",
        }} />
      </span>

      {/* Text */}
      <span style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted)",
          lineHeight: 1,
        }}>
          Disponible
        </span>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.12em",
          color: "var(--fg)",
          lineHeight: 1.2,
        }}>
          CDI · Sept. 2026
        </span>
      </span>

      {/* Arrow */}
      <span style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--accent)",
        marginLeft: "4px",
      }}>
        →
      </span>

      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
