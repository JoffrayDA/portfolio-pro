"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ScreenPanel {
  n: string;
  title: string;
  src: string;
  description: string;
}

export interface ProjectOverlayData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tools: string[];
  bgColor: string;         // dark bg for overlay, e.g. "#0D0C0B"
  accentColor: string;     // accent line/text color
  bgImage?: string;        // optional parallax bg image
  screens: ScreenPanel[];
  stats: { value: string; label: string }[];
  githubUrl?: string;
  confidential?: boolean;  // if true, show confidential notice instead of screens
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-panels
// ─────────────────────────────────────────────────────────────────────────────

function PanelIntro({ data }: { data: ProjectOverlayData }) {
  return (
    <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}
      className="relative flex items-center px-12 md:px-24">
      <div className="max-w-xl">
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: data.accentColor,
          marginBottom: "24px",
        }}>
          01 — {data.category}
        </p>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(48px, 7vw, 96px)",
          fontWeight: 300,
          lineHeight: 1.0,
          color: "#FAF7F2",
          marginBottom: "24px",
        }}>
          {data.title}
          <br />
          <span style={{ color: data.accentColor, fontStyle: "italic" }}>
            {data.subtitle}
          </span>
        </h2>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          lineHeight: 1.75,
          color: "rgba(250,247,242,0.5)",
          maxWidth: "440px",
          marginBottom: "32px",
        }}>
          {data.description}
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {data.tools.map(tool => (
            <span key={tool} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(250,247,242,0.4)",
              border: `1px solid ${data.accentColor}55`,
              padding: "4px 10px",
            }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PanelScreen({ panel, accentColor }: { panel: ScreenPanel; accentColor: string }) {
  return (
    <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}
      className="relative flex items-center px-12 md:px-24">
      <div className="w-full max-w-5xl">
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: accentColor,
          marginBottom: "24px",
        }}>
          {panel.n} — {panel.title}
        </p>
        <div style={{
          width: "100%",
          overflow: "hidden",
          height: "58vh",
          border: `1px solid ${accentColor}33`,
        }}>
          <img
            src={panel.src}
            alt={panel.title}
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "12px",
          color: "rgba(250,247,242,0.3)",
          marginTop: "16px",
          maxWidth: "520px",
          lineHeight: 1.6,
        }}>
          {panel.description}
        </p>
      </div>
    </div>
  );
}

function PanelConfidential({ data }: { data: ProjectOverlayData }) {
  return (
    <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}
      className="relative flex items-center px-12 md:px-24">
      <div className="max-w-2xl">
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: data.accentColor,
          marginBottom: "32px",
        }}>
          02 — Dashboard
        </p>
        <div style={{
          border: `1px solid ${data.accentColor}44`,
          padding: "48px",
          marginBottom: "32px",
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: data.accentColor,
            marginBottom: "16px",
          }}>
            Données confidentielles
          </p>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(20px, 2.5vw, 32px)",
            fontWeight: 300,
            color: "#FAF7F2",
            lineHeight: 1.3,
            marginBottom: "24px",
          }}>
            Mission réelle — données sensibles non divulgables.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "rgba(250,247,242,0.45)",
            lineHeight: 1.75,
          }}>
            Ce dashboard exploite des données propriétaires d'Edgard & Cooper sur Amazon EU :
            disponibilité produit, variations de prix et ownership Buy Box.
            Par respect des engagements de confidentialité, les visuels ne sont pas publiés.
            La démarche, les livrables et la méthodologie sont disponibles sur demande.
          </p>
        </div>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "rgba(250,247,242,0.2)",
        }}>
          Disponible sur demande · contact@joffray.com
        </p>
      </div>
    </div>
  );
}

function PanelStats({ data }: { data: ProjectOverlayData }) {
  const lastN = data.confidential
    ? "03"
    : String(data.screens.length + 2).padStart(2, "0");

  return (
    <div style={{ width: "100vw", height: "100vh", flexShrink: 0 }}
      className="relative flex items-center px-12 md:px-24">
      <div className="w-full max-w-3xl">
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: data.accentColor,
          marginBottom: "48px",
        }}>
          {lastN} — Chiffres clés
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${data.stats.length}, 1fr)`,
          gap: "1px",
          background: "rgba(250,247,242,0.08)",
          marginBottom: "64px",
        }}>
          {data.stats.map(s => (
            <div key={s.label} style={{ background: "#0D0C0B", padding: "32px 24px" }}>
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 300,
                color: "#FAF7F2",
                marginBottom: "8px",
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(250,247,242,0.3)",
                lineHeight: 1.4,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
        {data.githubUrl && (
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: data.accentColor,
              border: `1px solid ${data.accentColor}66`,
              padding: "10px 20px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            → Voir sur GitHub
          </a>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main overlay
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  data: ProjectOverlayData;
  onClose: () => void;
}

export default function ProjectOverlay({ data, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);

  const currentX = useRef(0);
  const targetX  = useRef(0);

  // Fade in
  useEffect(() => {
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.45, ease: "power2.out" }
    );
    // lock body scroll
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Horizontal scroll engine
  useEffect(() => {
    const track = trackRef.current;
    const prog  = progressRef.current;
    const bg    = bgRef.current;
    if (!track) return;

    const getMaxX = () => -(track.scrollWidth - window.innerWidth);

    const BG_START = data.bgImage ? 15 : 0;
    const BG_END   = data.bgImage ? -15 : 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetX.current = Math.max(getMaxX(), Math.min(0, targetX.current - e.deltaY - e.deltaX));
    };

    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX; };
    const onTouchMove  = (e: TouchEvent) => {
      const dx = touchStartX - e.touches[0].clientX;
      touchStartX = e.touches[0].clientX;
      targetX.current = Math.max(getMaxX(), Math.min(0, targetX.current - dx));
    };

    const tick = () => {
      currentX.current += (targetX.current - currentX.current) * 0.09;
      track.style.transform = `translateX(${currentX.current}px)`;

      const progress = Math.min(1, (-currentX.current) / (-getMaxX() || 1));
      if (prog) prog.style.width = `${progress * 100}%`;

      if (bg && data.bgImage) {
        const bgX = BG_START + (BG_END - BG_START) * progress;
        bg.style.transform = `translateX(${bgX}%)`;
      }
    };

    gsap.ticker.add(tick);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [data.bgImage]);

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.35, ease: "power2.in",
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: data.bgColor,
        overflow: "hidden",
      }}
    >
      {/* Parallax background image */}
      {data.bgImage && (
        <div
          ref={bgRef}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${data.bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
            opacity: 0.15,
            willChange: "transform",
            transform: "translateX(15%)",
          }}
        />
      )}

      {/* Gradient overlay for readability */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to right, ${data.bgColor}EE 0%, ${data.bgColor}88 50%, ${data.bgColor}EE 100%)`,
        pointerEvents: "none",
      }} />

      {/* Back button */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute", top: "32px", left: "32px", zIndex: 10,
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(250,247,242,0.35)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = data.accentColor)}
        onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.35)")}
      >
        ← Retour
      </button>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", top: "32px", right: "32px", zIndex: 10,
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(250,247,242,0.15)",
      }}>
        scroll →
      </div>

      {/* Panels track */}
      <div ref={trackRef} style={{ display: "flex", height: "100%", willChange: "transform" }}>
        <PanelIntro data={data} />

        {data.confidential ? (
          <PanelConfidential data={data} />
        ) : (
          data.screens.map(panel => (
            <PanelScreen key={panel.n} panel={panel} accentColor={data.accentColor} />
          ))
        )}

        <PanelStats data={data} />
      </div>

      {/* Progress bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
        background: "rgba(250,247,242,0.06)",
      }}>
        <div ref={progressRef} style={{ height: "100%", width: "0%", background: data.accentColor }} />
      </div>
    </div>
  );
}
