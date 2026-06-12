"use client";

import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const slides = [
  { label: "SQL · Power BI",     title: "Olist E-Commerce",      bg: "#090F0E", image: "https://raw.githubusercontent.com/JoffrayDA/olist-ecommerce-analysis/main/dashboard/screenshots/03_delivery.png", bgPos: "center 15%", bgSize: "110%" },
  { label: "Data Analyse",       title: "IBM HR Analytics",      bg: "#8C6A3A", image: "/ibm-01-vue-generale.png", bgPos: "top center", bgSize: "100% auto" },
  { label: "Agentic IA",         title: "Mirakl SAV Agent",      bg: "#4F6BFF", image: "/hackathon-01-login.png",  bgPos: "center", bgSize: "cover"   },
  { label: "Data Visualisation", title: "Mamba Mentality",       bg: "#6B1F1F", image: "/kobe.jpg",                bgPos: "center", bgSize: "cover"   },
  { label: "Outil Python",       title: "Amazon Price Tracker",  bg: "#2D7A4F", image: null,                       bgPos: "center", bgSize: "cover"   },
  { label: "E-Commerce",         title: "Edgard & Cooper",       bg: "#3A6A8C", image: null,                       bgPos: "center", bgSize: "cover"   },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();
  const slide = slides[active];

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#E8E0D5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile
          ? "96px 16px 32px"
          : "calc(72px + clamp(20px, 3.5vw, 48px)) clamp(20px, 3.5vw, 48px) clamp(20px, 3.5vw, 48px)",
      }}
    >
      {/* Cadre principal */}
      <div
        style={{
          width: "100%",
          maxWidth: "920px",
          height: isMobile ? "auto" : "clamp(420px, 64vh, 630px)",
          background: "#fff",
          borderRadius: isMobile ? "18px" : "24px",
          boxShadow: "0 16px 80px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Nom */}
        <div
          style={{
            padding: isMobile
              ? "24px 20px 16px"
              : "clamp(16px, 2.5vw, 36px) 44px clamp(10px, 1.2vw, 18px)",
            borderBottom: "none",
            flexShrink: 0,
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? "clamp(38px, 13vw, 64px)" : "clamp(36px, 9.5vw, 108px)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              whiteSpace: isMobile ? "normal" : "nowrap",
              textAlign: "center",
              color: "var(--accent)",
            }}
          >
            Joffray DeAlberto
          </h1>
        </div>

        {/* Deux cartes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "28fr 72fr",
            flex: isMobile ? "none" : 1,
            gap: isMobile ? "16px" : "44px",
            padding: isMobile ? "0 16px 16px" : "0 44px 44px",
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
              border: "none",
              alignSelf: isMobile ? "stretch" : "flex-end",
              height: isMobile ? "200px" : "clamp(240px, 34vh, 380px)",
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
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--accent)",
                opacity: 1,
              }}
            >
              À propos
            </span>
            {/* Photo portrait plein cadre */}
            <img
              src="/joffray2.png"
              alt="Joffray DeAlberto"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: isMobile ? "center 20%" : "center top",
                display: "block",
              }}
            />
          </Link>

          {/* Droite — carousel projets */}
          <Link
            href="/projets"
            style={{
              position: "relative",
              display: "block",
              textDecoration: "none",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #e8e2da",
              alignSelf: isMobile ? "stretch" : "flex-end",
              height: isMobile ? "240px" : "clamp(240px, 34vh, 380px)",
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
                fontSize: isMobile ? "26px" : "clamp(18px, 2.2vw, 34px)",
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
                  aria-label={`Projet ${i + 1}`}
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
