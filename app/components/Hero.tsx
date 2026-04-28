"use client";

import Link from "next/link";
import { useState } from "react";

const slides = [
  { label: "Data Analyse",       title: "IBM HR Analytics",      bg: "#8C6A3A", image: "/ibm-01-vue-generale.png", bgPos: "center",     bgSize: "contain" },
  { label: "Agentic IA",         title: "Mirakl SAV Agent",      bg: "#4F6BFF", image: "/hackathon-01-login.png",  bgPos: "center", bgSize: "cover"   },
  { label: "Data Visualisation", title: "Mamba Mentality",       bg: "#6B1F1F", image: "/kobe.jpg",                bgPos: "center", bgSize: "cover"   },
  { label: "Outil Python",       title: "Amazon Price Tracker",  bg: "#2D7A4F", image: null,                       bgPos: "center", bgSize: "cover"   },
  { label: "E-Commerce",         title: "Edgard & Cooper",       bg: "#3A6A8C", image: null,                       bgPos: "center", bgSize: "cover"   },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section
      style={{
        minHeight: "calc(100vh - 72px)",
        background: "#E8E0D5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(8px, 1vw, 16px)",
      }}
    >
      {/* Cadre principal */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "clamp(460px, 74vh, 680px)",
          background: "#fff",
          borderRadius: "24px",
          boxShadow: "0 16px 80px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Nom */}
        <div
          style={{
            padding: "clamp(16px, 2.5vw, 36px) clamp(20px, 3vw, 40px) clamp(10px, 1.2vw, 18px)",
            borderBottom: "1px solid #e8e2da",
            flexShrink: 0,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 9vw, 116px)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
              color: "var(--fg)",
            }}
          >
            Joffray DeAlberto
          </h1>
        </div>

        {/* Deux cartes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "28fr 72fr",
            flex: 1,
            gap: "8px",
            padding: "0",
            overflow: "hidden",
          }}
        >
          {/* Gauche — À propos */}
          <Link
            href="/a-propos"
            style={{
              position: "relative",
              display: "block",
              textDecoration: "none",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #e8e2da",
            }}
          >
            {/* Label overlay */}
            <span
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                zIndex: 2,
                fontFamily: "var(--font-nav)",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--fg)",
                opacity: 0.5,
              }}
            >
              À propos
            </span>
            {/* Placeholder photo plein cadre */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "#f0ebe3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  opacity: 0.35,
                }}
              >
                Photo
              </p>
            </div>
          </Link>

          {/* Droite — carousel projets */}
          <Link
            href="/projets"
            style={{
              position: "relative",
              display: "block",
              textDecoration: "none",
              borderRadius: "0 0 24px 0",
              overflow: "hidden",
              border: "none",
            }}
          >
            {/* Fond coloré / image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: slide.bg,
                backgroundImage: slide.image ? `url(${slide.image})` : undefined,
                backgroundSize: slide.bgSize ?? "cover",
                backgroundPosition: slide.bgPos ?? "center",
                transition: "background 0.4s ease",
              }}
            />
            {slide.image && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
                }}
              />
            )}


            {/* Titre projet — bas gauche */}
            <p
              style={{
                position: "absolute",
                bottom: "48px",
                left: "20px",
                zIndex: 2,
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(18px, 2.2vw, 34px)",
                fontWeight: 300,
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              {slide.title}
            </p>

            {/* Dots navigation */}
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                left: "20px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
                zIndex: 3,
              }}
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.preventDefault(); setActive(i); }}
                  style={{
                    width: i === active ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "5px",
                    background: i === active ? "#fff" : "rgba(255,255,255,0.4)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
