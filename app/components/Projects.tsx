"use client";

import { useState } from "react";
import ProjectOverlay, { ProjectOverlayData } from "./ProjectOverlay";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const projects: ProjectOverlayData[] = [
  {
    id: "ibm-hr",
    title: "IBM HR Analytics",
    subtitle: "Mission BA complète : Attrition RH",
    category: "Mission BA · Power BI",
    description:
      "Mission BA menée de A à Z sur le dataset IBM HR Analytics (Kaggle) : cadrage, backlog MoSCoW, dictionnaire de données, dashboard Power BI 4 pages, rapport de recommandations. Objectif : identifier les facteurs d'attrition et produire des recommandations décisionnelles pour une DRH fictive.",
    tools: ["Power BI", "DAX", "Power Query", "MoSCoW", "Kaggle"],
    bgColor: "#0D0C0B",
    accentColor: "#D4A340",
    bgImage: "/ibm-bg.jpg",
    screens: [
      {
        n: "02",
        title: "Vue Générale",
        src: "/ibm-01-vue-generale.png",
        description: "1 470 employés, 16,12% d'attrition (237 départs). Les moins de 25 ans quittent 2× plus. Sales et RH concentrent le risque le plus élevé.",
      },
      {
        n: "03",
        title: "Profil & Département",
        src: "/ibm-02-profil-dept.png",
        description: "Sales Representative : 39% de départs, poste le plus vulnérable. Les juniors (niveau 1) quittent 3× plus que les seniors (niveau 5). Pic de départs dans les 2 premières années.",
      },
      {
        n: "04",
        title: "Facteurs de Risque",
        src: "/ibm-03-facteurs-risque.png",
        description: "Overtime : les employés en heures sup quittent 3× plus. Satisfaction faible, faible implication, mauvais équilibre vie pro/perso et environnement de travail dégradé sont les 5 signaux d'alarme identifiés.",
      },
      {
        n: "05",
        title: "Coût & Impact Financier",
        src: "/ibm-04-cout-impact.png",
        description: "7M€ de coût d'attrition estimé. R&D et Sales représentent 90% du total. Le coût de remplacement explose dans les 10 premières années d'ancienneté.",
      },
    ],
    stats: [
      { value: "16,12%", label: "Taux d'attrition global" },
      { value: "7 M€",   label: "Coût estimé des départs" },
      { value: "6",      label: "Livrables BA produits" },
      { value: "4",      label: "Recommandations actionnables" },
    ],
    githubUrl: "https://github.com/JoffrayDA/IBM-HR-BA-Mission",
  },
  {
    id: "hackathon-mirakl",
    title: "Mirakl SAV Agent",
    subtitle: "Hackathon Eugenia × Mirakl",
    category: "Hackathon · IA Agentique",
    cardBgPosition: "center 40%",
    description:
      "Plateforme d'orchestration agentique pour déléguer l'intégralité du SAV marketplace à une IA autonome. Gestion des tickets, détection d'anomalies, validations humaines et dialogue avec l'agent Aria, conçu de A à Z sur Mirakl Connect en tant que chef de projet.",
    tools: ["N8N", "Supabase", "OpenAI", "TypeScript", "Mirakl Connect"],
    bgColor: "#090C18",
    accentColor: "#4F6BFF",
    bgImage: "/mirakl-bg.jpg",
    videoUrl: "/WhatsApp%20Video%202026-05-01%20at%207.28.36%20PM.mp4",
    screens: [
      {
        n: "02",
        title: "Plateforme",
        src: "/hackathon-01-login.png",
        description: "Landing page de Mirakl SAV : déléguez vos opérations SAV à un agent IA autonome via Mirakl Connect.",
      },
      {
        n: "03",
        title: "Tableau de bord SAV",
        src: "/hackathon-02-tickets.png",
        description: "Vue centrale des tickets ouverts, SLA en danger et remboursements en attente. Filtrage par marketplace et statut.",
      },
      {
        n: "04",
        title: "IA en action",
        src: "/hackathon-03-flux-live.png",
        description: "Flux live : l'agent traite les tickets en temps réel, catégorise, répond et escalade les cas critiques automatiquement.",
      },
      {
        n: "05",
        title: "Contrôle humain",
        src: "/hackathon-04-validations.png",
        description: "Human-in-the-loop : le marchand valide ou override les décisions sensibles (remboursements élevés, cas ambigus).",
      },
      {
        n: "06",
        title: "Agent Aria",
        src: "/hackathon-05-dialogue.png",
        description: "Interface de dialogue avec Aria, l'agent IA : interrogeable en langage naturel sur l'état du SAV en temps réel.",
      },
    ],
    stats: [
      { value: "3e",   label: "sur 15 équipes" },
      { value: "100%", label: "SAV automatisé" },
      { value: "5",    label: "marketplaces pilotées" },
    ],
    githubUrl: "https://github.com/JoffrayDA/hackathon-eugenia-x-mirakl",
  },
  {
    id: "kobe",
    title: "Mamba Mentality",
    subtitle: "Kobe Bryant Career Stats",
    category: "Dashboard Power BI",
    description:
      "Analyse complète de la carrière de Kobe Bryant : 20 saisons, 1 346 matchs, 5 titres NBA. Un dashboard Power BI construit de A à Z, des données brutes aux insights visuels.",
    tools: ["Power BI", "DAX", "Power Query", "NBA API"],
    bgColor: "#0F0D0B",
    accentColor: "#C73232",
    bgImage: "/kobe.jpg",
    screens: [
      {
        n: "02",
        title: "Kobe",
        src: "/kobe-01-intro.png",
        description: "Vue d'ensemble du rapport : navigation entre les chapitres de la carrière du Mamba.",
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
    id: "olist",
    title: "Olist E-Commerce",
    subtitle: "Analyse SQL + Power BI · Brésil",
    category: "SQL · Power BI · Data Analysis",
    description:
      "Analyse end-to-end du marché e-commerce brésilien : 100 000 commandes (2016–2018) explorées via DuckDB/SQL, puis visualisées dans un dashboard Power BI 5 pages. Réponses à 4 questions stratégiques : revenus, logistique, satisfaction client et concentration des vendeurs.",
    tools: ["DuckDB", "SQL", "Power BI", "DAX", "Python"],
    bgColor: "#090F0E",
    accentColor: "#1FC4A8",
    bgImage: "https://raw.githubusercontent.com/JoffrayDA/olist-ecommerce-analysis/main/dashboard/screenshots/03_delivery.png",
    cardBgSize: "110%",
    cardBgPosition: "center 15%",
    screens: [
      {
        n: "02",
        title: "Vue Générale",
        src: "https://raw.githubusercontent.com/JoffrayDA/olist-ecommerce-analysis/main/dashboard/screenshots/01_vue_generale.png",
        description: "Snapshot exécutif : R$ 16,01M de revenus, 103 890 commandes, note moyenne 4,09/5, délai moyen 12,5 jours. Tableau de bord qui expose la tension centrale : solide satisfaction malgré les défis logistiques à l'échelle du Brésil.",
      },
      {
        n: "03",
        title: "Analyse des Revenus",
        src: "https://raw.githubusercontent.com/JoffrayDA/olist-ecommerce-analysis/main/dashboard/screenshots/02_revenue.png",
        description: "Tendance mensuelle et variation MoM. Trajectoire de croissance claire avec un pic en novembre 2017 (Black Friday). L'accélération des volumes révèle un marketplace en pleine expansion.",
      },
      {
        n: "04",
        title: "Analyse Logistique",
        src: "https://raw.githubusercontent.com/JoffrayDA/olist-ecommerce-analysis/main/dashboard/screenshots/03_delivery.png",
        description: "Carte Brésil (gradient bleu → rouge) + états les plus lents. Le Nord/Nord-Est affiche 25–29 jours contre 12 jours au Sud-Est : un écart 2× qui révèle le goulot d'étranglement structurel d'Olist. En moyenne, Olist bat ses propres estimations de 12 jours.",
      },
      {
        n: "05",
        title: "Satisfaction Client",
        src: "https://raw.githubusercontent.com/JoffrayDA/olist-ecommerce-analysis/main/dashboard/screenshots/04_satisfaction.png",
        description: "L'insight clé : les commandes livrées en 0–7 jours obtiennent 4,4/5 ; celles livrées en 30+ jours chutent à 2,5/5. Une perte de satisfaction de 43% directement liée à la logistique, vérifiée état par état.",
      },
      {
        n: "06",
        title: "Performance Vendeurs",
        src: "https://raw.githubusercontent.com/JoffrayDA/olist-ecommerce-analysis/main/dashboard/screenshots/05_sellers.png",
        description: "Top 10 vendeurs par revenu + revenu moyen par état. São Paulo génère à lui seul 5× plus que le prochain état. Les 4 États du Sud-Est dominent structurellement le marketplace et expliquent directement le problème logistique du Nord.",
      },
    ],
    stats: [
      { value: "R$ 16M",  label: "Revenus analysés" },
      { value: "103K",    label: "Commandes (2016–2018)" },
      { value: "2×",      label: "Écart délai Nord / Sud-Est" },
      { value: "−43%",    label: "Satisfaction : livraison 30j+" },
    ],
    githubUrl: "https://github.com/JoffrayDA/olist-ecommerce-analysis",
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
    confidential: true,
    confidentialText: {
      title: "Outil déployé en production. Code non public.",
      body: "Cet outil de veille prix a été développé et déployé en production chez Edgard & Cooper. Il track en temps réel les variations de prix et ruptures (OOS) sur +750 SKUs sur 5 marchés Amazon. Par respect des accords de confidentialité, le code source et les captures ne sont pas publiés. La démarche et la méthodologie sont disponibles sur demande.",
    },
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
// Grid placement: index → CSS grid position
// Row 1 (420px): IBM (dominant left) | Mirakl (right)
// Row 2 (300px): Kobe (5col narrow) | Olist (7col dominant, symétrique IBM)
// Row 3 (280px): Price Tracker | Edgard (confidentiels, moitié-moitié)
// ─────────────────────────────────────────────────────────────────────────────

const gridPlacements = [
  { gridColumn: "1 / 8",  gridRow: "1" },  // IBM (0) — dominant visual
  { gridColumn: "8 / 13", gridRow: "1" },  // Mirakl (1)
  { gridColumn: "1 / 6",  gridRow: "2" },  // Kobe (2) — narrow
  { gridColumn: "6 / 13", gridRow: "2" },  // Olist (3) — dominant
  { gridColumn: "1 / 7",  gridRow: "3" },  // Price Tracker (4) — confidentiel
  { gridColumn: "7 / 13", gridRow: "3" },  // Edgard (5) — confidentiel
];

// ─────────────────────────────────────────────────────────────────────────────
// Project cell
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCell({
  project,
  number,
  onClick,
  style,
}: {
  project: ProjectOverlayData;
  number: string;
  onClick: () => void;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  const bgImage = project.bgImage ?? project.screens[0]?.src;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: project.bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: project.cardBgSize ?? "cover",
        backgroundPosition: project.cardBgPosition ?? "center",
        cursor: "pointer",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0.15) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.05) 100%)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Top bar: number + "Voir →" */}
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "24px",
          right: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.35)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {number}
          {project.confidential && (
            <span
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "2px 8px",
                fontSize: "8px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              confidentiel
            </span>
          )}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.9)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          Voir →
        </span>
      </div>

      {/* Bottom: category + title + subtitle on hover */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "24px",
          right: "24px",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "8px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: project.accentColor,
            marginBottom: "10px",
          }}
        >
          {project.category}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(20px, 2.4vw, 40px)",
            fontWeight: 300,
            color: "#fff",
            lineHeight: 1.05,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.5)",
            marginTop: "6px",
            maxHeight: hovered ? "20px" : "0",
            overflow: "hidden",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease, max-height 0.3s ease",
          }}
        >
          {project.subtitle}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: project.accentColor,
          transition: "width 0.5s ease",
        }}
      />
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
      <section id="projets" style={{ paddingTop: "120px" }}>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 300,
            color: "var(--accent)",
            lineHeight: 1.05,
            marginBottom: "64px",
            padding: "0 clamp(24px, 8vw, 120px)",
          }}
        >
          Projets
        </h2>

        <div style={{ padding: "0 clamp(24px, 4vw, 64px)" }}>
          <div className="projects-visual-grid">
            {projects.map((project, i) => (
              <ProjectCell
                key={project.id}
                project={project}
                number={String(i + 1).padStart(2, "0")}
                onClick={() => setActiveProject(project)}
                style={gridPlacements[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectOverlay
          data={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
