"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Label */}
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: "48px",
      }}>
        Portfolio · 2026
      </p>

      {/* Name */}
      <h1 style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(52px, 9vw, 130px)",
        fontWeight: 300,
        lineHeight: 1,
        color: "var(--fg)",
        marginBottom: "32px",
      }}>
        Joffray<br />
        <span style={{ color: "var(--accent)", fontStyle: "italic" }}>DeAlberto</span>
      </h1>

      {/* Title */}
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--muted)",
        marginBottom: "20px",
      }}>
        Business Analyst · Data
      </p>

      {/* Value prop */}
      <p style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(18px, 2.2vw, 26px)",
        fontWeight: 300,
        color: "var(--fg)",
        opacity: 0.6,
        maxWidth: "520px",
        lineHeight: 1.5,
        marginBottom: "48px",
      }}>
        Du cadrage au dashboard — je transforme des besoins flous en livrables concrets.
      </p>

      {/* CTA */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <a href="#projets" style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--bg)",
          background: "var(--accent)",
          padding: "14px 28px",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Voir les projets
        </a>
        <a href="#contact" style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          textDecoration: "none",
          borderBottom: "1px solid var(--accent)",
          paddingBottom: "2px",
        }}>
          Me contacter
        </a>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        right: "clamp(24px, 8vw, 120px)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}>Scroll</p>
        <div style={{ width: "40px", height: "1px", background: "var(--border)" }} />
      </div>
    </section>
  );
}
