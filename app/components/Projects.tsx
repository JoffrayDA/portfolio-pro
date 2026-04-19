"use client";

import { useState } from "react";
import ProjectOverlay, { ProjectOverlayData } from "./ProjectOverlay";

// ─────────────────────────────────────────────────────────────────────────────
// Projects data
// ─────────────────────────────────────────────────────────────────────────────

const projects: ProjectOverlayData[] = [
  {
    id: "ibm-hr",
    title: "IBM HR Analytics",
    subtitle: "Attrition & recommandations",
    category: "Mission BA simulée",
    description:
      "Démarche BA complète sur le dataset IBM HR Analytics (Kaggle). Identification des facteurs d'attrition, production de livrables BA structurés et recommandations actionnables pour une DRH fictive.",
    tools: ["Power BI", "Excel", "DAX", "MoSCoW", "Kaggle"],
    bgColor: "#0D0C0B",
    accentColor: "#8C6A3A",
    screens: [
      {
        n: "02",
        title: "Vue Générale",
        src: "/ibm-01-vue-generale.png",
        description: "Vue d'ensemble — 1 470 employés, taux d'attrition global de 16,12%, répartition par âge et par département.",
      },
      {
        n: "03",
        title: "Profil & Département",
        src: "/ibm-02-profil-dept.png",
        description: "Analyse croisée par poste et ancienneté — les Sales Representatives affichent le taux d'attrition le plus élevé (39%).",
      },
      {
        n: "04",
        title: "Facteurs de Risque",
        src: "/ibm-03-facteurs-risque.png",
        description: "Les heures supplémentaires, la satisfaction environnementale et l'équilibre vie pro/perso sont les déclencheurs principaux.",
      },
      {
        n: "05",
        title: "Coût & Impact Financier",
        src: "/ibm-04-cout-impact.png",
        description: "Estimation du coût total des départs à 7M€ — répartition par département et corrélation avec le niveau de salaire.",
      },
    ],
    stats: [
      { value: "16,12%", label: "Taux d'attrition global" },
      { value: "7 M€",   label: "Coût estimé des départs" },
      { value: "4",      label: "Recommandations actionnables" },
    ],
    githubUrl: "https://github.com/JoffrayDA/IBM-HR-BA-Mission",
  },
  {
    id: "kobe",
    title: "Mamba Mentality",
    subtitle: "Kobe Bryant Career Stats",
    category: "Dashboard Power BI",
    description:
      "Analyse complète de la carrière de Kobe Bryant — 20 saisons, 1 346 matchs, 5 titres NBA. Un dashboard Power BI construit de A à Z, des données brutes aux insights visuels.",
    tools: ["Power BI", "DAX", "Power Query", "NBA API"],
    bgColor: "#0E0E0E",
    accentColor: "#A52020",
    bgImage: "/kobe.jpg",
    screens: [
      {
        n: "02",
        title: "Kobe",
        src: "/kobe-01-intro.png",
        description: "Vue d'ensemble du rapport — navigation entre les chapitres de la carrière du Mamba.",
      },
      {
        n: "03",
        title: "The Ascension",
        src: "/kobe-02-ascension.png",
        description: "Les premières saisons, l'émergence d'un leader. La progression statistique qui annonce une carrière légendaire.",
      },
      {
        n: "04",
        title: "The Night of 81",
        src: "/kobe-03-night81.png",
        description: "22 janvier 2006. 81 points contre Toronto. Deuxième meilleure performance individuelle de l'histoire NBA.",
      },
      {
        n: "05",
        title: "The Scorer",
        src: "/kobe-04-scorer.png",
        description: "Analyse du scoring : répartition par zone, pourcentages aux tirs, évolution du volume offensif saison par saison.",
      },
      {
        n: "06",
        title: "Playoffs",
        src: "/kobe-05-playoffs.png",
        description: "Les performances en playoffs vs saison régulière. Kobe élève son niveau quand les enjeux sont maximaux.",
      },
      {
        n: "07",
        title: "The Legacy",
        src: "/kobe-06-legacy.png",
        description: "20 saisons, 33 643 points, 5 bagues. La trace indélébile laissée par le Black Mamba dans l'histoire du basket.",
      },
    ],
    stats: [
      { value: "33 643", label: "Points en carrière" },
      { value: "20",     label: "Saisons NBA" },
      { value: "5×",     label: "Champion NBA" },
      { value: "81",     label: "Points en un match" },
    ],
    githubUrl: "https://github.com/JoffrayDA/kobe-bryant-powerbi",
  },
  {
    id: "price-tracker",
    title: "Amazon Price Tracker",
    subtitle: "Python · Keepa API · Streamlit",
    category: "Outil Python / IA",
    description:
      "Outil de veille prix automatisé sur Amazon : tracking des variations de prix et détection des ruptures (OOS) sur +750 SKUs en temps réel, déployé en production chez Edgard & Cooper.",
    tools: ["Python", "Streamlit", "Keepa API", "Pandas"],
    bgColor: "#0B0D0C",
    accentColor: "#2D7A4F",
    screens: [],
    stats: [
      { value: "750+",  label: "SKUs trackés" },
      { value: "5",     label: "Marchés Amazon" },
      { value: "Live",  label: "Déployé en prod" },
    ],
  },
  {
    id: "edgard-cooper",
    title: "Edgard & Cooper",
    subtitle: "OOS · Buy Box · Prix",
    category: "Mission e-commerce réelle",
    description:
      "Mission terrain : conception d'un système de reporting hebdomadaire pour piloter la disponibilité produit (OOS), l'ownership Buy Box et les variations de prix sur Amazon EU. Un an de données agrégées et modélisées dans un dashboard Power BI opérationnel.",
    tools: ["Power BI", "Excel", "DAX", "Amazon EU"],
    bgColor: "#0B0C0D",
    accentColor: "#3A6A8C",
    confidential: true,
    screens: [],
    stats: [
      { value: "1 an",   label: "Données hebdomadaires" },
      { value: "3",      label: "Axes (OOS · BB · Prix)" },
      { value: "EU",     label: "Marchés Amazon couverts" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Project card
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  number,
  onClick,
}: {
  project: ProjectOverlayData;
  number: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "var(--surface)" : "var(--bg)",
        padding: "56px clamp(24px, 5vw, 72px)",
        cursor: "pointer",
        transition: "background 0.3s ease",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {/* Number + category */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "32px" }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "var(--muted)",
        }}>
          {number}
        </span>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: project.accentColor,
        }}>
          {project.category}
        </span>
        {project.confidential && (
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            border: "1px solid var(--border)",
            padding: "2px 8px",
          }}>
            confidentiel
          </span>
        )}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(36px, 4.5vw, 64px)",
        fontWeight: 300,
        lineHeight: 1.0,
        color: "var(--fg)",
        marginBottom: "8px",
        transition: "color 0.3s ease",
      }}>
        {project.title}
      </h3>
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.1em",
        color: "var(--muted)",
        marginBottom: "28px",
      }}>
        {project.subtitle}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: "14px",
        lineHeight: 1.75,
        color: "var(--fg)",
        opacity: 0.55,
        maxWidth: "520px",
        marginBottom: "40px",
      }}>
        {project.description}
      </p>

      {/* Tools */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "48px" }}>
        {project.tools.map(t => (
          <span key={t} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            border: "1px solid var(--border)",
            padding: "3px 10px",
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div style={{
        display: "flex",
        gap: "48px",
        paddingTop: "32px",
        borderTop: "1px solid var(--border)",
      }}>
        {project.stats.map(s => (
          <div key={s.label}>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 300,
              color: "var(--fg)",
              marginBottom: "4px",
            }}>
              {s.value}
            </p>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA arrow */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        right: "clamp(24px, 5vw, 72px)",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: hovered ? project.accentColor : "var(--muted)",
        transition: "color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
      }}>
        Voir le projet →
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "2px",
        width: hovered ? "100%" : "0%",
        background: project.accentColor,
        transition: "width 0.5s ease",
      }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────

export default function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectOverlayData | null>(null);

  return (
    <>
      <section
        id="projets"
        style={{ padding: "120px 0 0" }}
      >
        {/* Section label */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "64px",
          padding: "0 clamp(24px, 8vw, 120px)",
        }}>
          Projets
        </p>

        {/* Cards */}
        <div>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              number={String(i + 1).padStart(2, "0")}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Overlay */}
      {activeProject && (
        <ProjectOverlay
          data={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
