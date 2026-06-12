"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIsMobile } from "../hooks/useIsMobile";

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
  bgColor: string;
  accentColor: string;
  bgImage?: string;
  cardBgPosition?: string;
  cardBgSize?: string;
  videoUrl?: string;
  screens: ScreenPanel[];
  stats: { value: string; label: string }[];
  githubUrl?: string;
  confidential?: boolean;
  confidentialText?: { title: string; body: string };
}

const PANEL_PADDING = "clamp(48px, 8vw, 120px)";

// ─────────────────────────────────────────────────────────────────────────────
// Sub-panels
// ─────────────────────────────────────────────────────────────────────────────

function PanelIntro({ data }: { data: ProjectOverlayData }) {
  return (
    <div style={{
      width: "100vw", height: "100vh", flexShrink: 0,
      display: "flex", alignItems: "center",
      paddingLeft: PANEL_PADDING, paddingRight: PANEL_PADDING,
    }}>
      <div style={{ maxWidth: "560px" }}>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(36px, 5.5vw, 72px)",
          fontWeight: 300,
          lineHeight: 1.05,
          color: "#FAF7F2",
          marginBottom: "20px",
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
          lineHeight: 1.8,
          color: "rgba(250,247,242,0.9)",
          maxWidth: "460px",
          marginBottom: "32px",
        }}>
          {data.description}
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {data.tools.map(tool => (
            <span key={tool} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: data.accentColor,
              background: `${data.accentColor}22`,
              border: `1px solid ${data.accentColor}88`,
              padding: "7px 16px",
              borderRadius: "20px",
            }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PanelScreen({ panel, accentColor, index }: { panel: ScreenPanel; accentColor: string; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <div style={{
      width: "100vw", height: "100vh", flexShrink: 0,
      display: "flex", alignItems: "center",
      paddingLeft: PANEL_PADDING, paddingRight: PANEL_PADDING,
    }}>
      <div style={{ width: "100%", maxWidth: "1100px" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "17px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: accentColor,
          marginBottom: "24px",
        }}>
          {n} · {panel.title}
        </p>
        <div style={{
          width: "100%",
          overflow: "hidden",
          height: "68vh",
          border: `1px solid ${accentColor}33`,
        }}>
          <img
            src={panel.src}
            alt={panel.title}
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", filter: "brightness(1.35)" }}
          />
        </div>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          color: "rgba(250,247,242,0.9)",
          marginTop: "16px",
          maxWidth: "640px",
          lineHeight: 1.7,
        }}>
          {panel.description}
        </p>
      </div>
    </div>
  );
}

function PanelVideo({ videoUrl, accentColor }: { videoUrl: string; accentColor: string }) {
  return (
    <div style={{
      width: "100vw", height: "100vh", flexShrink: 0,
      display: "flex", alignItems: "center",
      paddingLeft: PANEL_PADDING, paddingRight: PANEL_PADDING,
    }}>
      <div style={{ width: "100%", maxWidth: "1100px" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "17px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: accentColor,
          marginBottom: "24px",
        }}>
          01 · Démo
        </p>
        <video
          src={videoUrl}
          controls
          style={{
            width: "100%",
            height: "68vh",
            objectFit: "contain",
            border: `1px solid ${accentColor}33`,
            background: "#000",
          }}
        />
      </div>
    </div>
  );
}

function PanelConfidential({ data }: { data: ProjectOverlayData }) {
  return (
    <div style={{
      width: "100vw", height: "100vh", flexShrink: 0,
      display: "flex", alignItems: "center",
      paddingLeft: PANEL_PADDING, paddingRight: PANEL_PADDING,
    }}>
      <div style={{ maxWidth: "640px" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: data.accentColor,
          marginBottom: "32px",
        }}>
          02 · Dashboard
        </p>
        <div style={{
          border: `1px solid ${data.accentColor}44`,
          padding: "48px",
          marginBottom: "32px",
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: data.accentColor,
            marginBottom: "16px",
          }}>
            Données confidentielles
          </p>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(22px, 2.5vw, 34px)",
            fontWeight: 300,
            color: "#FAF7F2",
            lineHeight: 1.3,
            marginBottom: "24px",
          }}>
            {data.confidentialText?.title ?? "Mission réelle. Données sensibles non divulgables."}
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "rgba(250,247,242,0.45)",
            lineHeight: 1.8,
          }}>
            {data.confidentialText?.body ?? "Ce dashboard exploite des données propriétaires d'Edgard & Cooper sur Amazon EU : disponibilité produit, variations de prix et ownership Buy Box. Par respect des engagements de confidentialité, les visuels ne sont pas publiés. La démarche, les livrables et la méthodologie sont disponibles sur demande."}
          </p>
        </div>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "rgba(250,247,242,0.2)",
        }}>
          Disponible sur demande · joffray.dealberto@gmail.com
        </p>
      </div>
    </div>
  );
}

function PanelStats({ data }: { data: ProjectOverlayData }) {
  const isMobile = useIsMobile();
  const lastN = data.confidential
    ? "02"
    : String(data.screens.length + 1).padStart(2, "0");

  return (
    <div style={{
      width: "100vw", height: "100vh", flexShrink: 0,
      display: "flex", alignItems: "center",
      paddingLeft: PANEL_PADDING, paddingRight: PANEL_PADDING,
    }}>
      <div style={{ width: "100%", maxWidth: "860px" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "17px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: data.accentColor,
          marginBottom: "48px",
        }}>
          {lastN} · Chiffres clés
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)"
            : `repeat(${data.stats.length}, 1fr)`,
          gap: "1px",
          background: "rgba(250,247,242,0.08)",
          marginBottom: "64px",
        }}>
          {data.stats.map(s => (
            <div key={s.label} style={{ background: data.bgColor, padding: "36px 28px" }}>
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4vw, 52px)",
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
                color: "rgba(250,247,242,0.7)",
                lineHeight: 1.5,
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
              fontSize: "13px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: data.accentColor,
              border: `1px solid ${data.accentColor}99`,
              padding: "16px 32px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Voir sur GitHub
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
  const overlayRef  = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);

  const currentX = useRef(0);
  const targetX  = useRef(0);

  useEffect(() => {
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.45, ease: "power2.out" }
    );
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const prog  = progressRef.current;
    const bg    = bgRef.current;
    if (!track) return;

    const getMaxX = () => -(track.scrollWidth - window.innerWidth);

    const BG_START = 15;
    const BG_END   = -15;

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
      {/* Parallax bg */}
      {data.bgImage && (
        <>
          <div
            ref={bgRef}
            style={{
              position: "absolute", inset: 0,
              backgroundImage: `url('${data.bgImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%) sepia(40%)",
              opacity: 0.38,
              willChange: "transform",
              transform: "translateX(15%)",
            }}
          />
          {/* Warm tint overlay — ties Kobe to the beige palette */}
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(107, 31, 31, 0.12)",
            mixBlendMode: "screen",
            pointerEvents: "none",
          }} />
        </>
      )}

      {/* Gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to right, ${data.bgColor}F0 0%, ${data.bgColor}70 50%, ${data.bgColor}F0 100%)`,
        pointerEvents: "none",
      }} />

      {/* Back */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute", top: "32px", left: "32px", zIndex: 10,
          fontFamily: "var(--font-mono)",
          fontSize: "15px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#fff",
          background: "none",
          border: "none",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = data.accentColor)}
        onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
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

      {/* Track */}
      <div ref={trackRef} style={{ display: "flex", height: "100%", willChange: "transform" }}>
        <PanelIntro data={data} />
        {data.videoUrl && <PanelVideo videoUrl={data.videoUrl} accentColor={data.accentColor} />}
        {data.confidential ? (
          <PanelConfidential data={data} />
        ) : (
          data.screens.map((panel, idx) => (
            <PanelScreen key={panel.n} panel={panel} accentColor={data.accentColor} index={idx} />
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
