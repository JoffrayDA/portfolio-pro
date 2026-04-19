"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef   = useRef<HTMLParagraphElement>(null);
  const nameRef    = useRef<HTMLHeadingElement>(null);
  const titleRef   = useRef<HTMLParagraphElement>(null);
  const descRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Each layer drifts down at its own rate as the page scrolls up → parallax
      if (labelRef.current)  labelRef.current.style.transform  = `translateY(${y * 0.06}px)`;
      if (nameRef.current)   nameRef.current.style.transform   = `translateY(${y * 0.18}px)`;
      if (titleRef.current)  titleRef.current.style.transform  = `translateY(${y * 0.13}px)`;
      if (descRef.current)   descRef.current.style.transform   = `translateY(${y * 0.10}px)`;
      if (ctaRef.current)    ctaRef.current.style.transform    = `translateY(${y * 0.07}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Label */}
      <p
        ref={labelRef}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "48px",
        }}
      >
        Portfolio · 2026
      </p>

      {/* Name */}
      <h1
        ref={nameRef}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(52px, 9vw, 130px)",
          fontWeight: 300,
          lineHeight: 1,
          color: "var(--fg)",
          marginBottom: "32px",
        }}
      >
        Joffray<br />
        <span style={{ color: "var(--accent)", fontStyle: "italic" }}>DeAlberto</span>
      </h1>

      {/* Title */}
      <p
        ref={titleRef}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "20px",
        }}
      >
        Business Analyst · Data
      </p>

      {/* Value prop */}
      <p
        ref={descRef}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(18px, 2.2vw, 26px)",
          fontWeight: 300,
          color: "var(--fg)",
          opacity: 0.6,
          maxWidth: "520px",
          lineHeight: 1.5,
          marginBottom: "48px",
        }}
      >
        Profil hybride Business · Data · IA. Ce que j'apprends le soir, je le déploie le lendemain.
      </p>

      {/* CTA */}
      <div ref={ctaRef} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <a
          href="#projets"
          style={{
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
        <a
          href="#contact"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            textDecoration: "none",
            borderBottom: "1px solid var(--accent)",
            paddingBottom: "2px",
          }}
        >
          Me contacter
        </a>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "48px",
          marginTop: "64px",
          paddingTop: "40px",
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
        }}
      >
        {[
          { value: "13,7M€", label: "Canal Amazon géré" },
          { value: "+26%",   label: "Croissance en 1 an" },
          { value: "750+",   label: "SKUs analysés" },
          { value: "6",      label: "Marchés européens" },
        ].map(s => (
          <div key={s.label}>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 2.2vw, 28px)",
              fontWeight: 300,
              color: "var(--fg)",
              marginBottom: "4px",
            }}>
              {s.value}
            </p>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          right: "clamp(24px, 8vw, 120px)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          Scroll
        </p>
        <div style={{ width: "40px", height: "1px", background: "var(--border)" }} />
      </div>
    </section>
  );
}
