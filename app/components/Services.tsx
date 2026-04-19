"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Cadrage & besoins",
    description:
      "Recueil des besoins métier, interviews parties prenantes, cartographie des processus. Je transforme une intention floue en exigences fonctionnelles claires et priorisées.",
    tags: ["Recueil besoins", "MoSCoW", "Process mapping", "User Stories"],
  },
  {
    number: "02",
    title: "Analyse & reporting",
    description:
      "Dashboards Power BI actionnables, requêtes SQL, reporting hebdomadaire. Je fournis les bons chiffres aux bonnes personnes, lisibles sans expertise technique.",
    tags: ["Power BI", "SQL", "KPI", "DAX"],
  },
  {
    number: "03",
    title: "Automatisation & IA",
    description:
      "Outils Python déployés en production, agents IA, automatisation de process répétitifs. Ce qui prenait des heures tourne en quelques minutes.",
    tags: ["Python", "Streamlit", "N8N", "Agents IA"],
  },
];

function ServiceCard({ number, title, description, tags }: (typeof services)[number]) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg)",
        padding: "48px 40px",
        borderLeft: hovered ? "3px solid var(--accent)" : "3px solid transparent",
        transition: "border-color 0.25s ease, background 0.25s ease",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: hovered ? "var(--accent)" : "var(--muted)",
          marginBottom: "24px",
          transition: "color 0.25s ease",
        }}
      >
        {number}
      </p>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(24px, 2.5vw, 34px)",
          fontWeight: 300,
          color: "var(--fg)",
          marginBottom: "20px",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          lineHeight: 1.75,
          color: "var(--fg)",
          opacity: hovered ? 0.8 : 0.6,
          marginBottom: "32px",
          transition: "opacity 0.25s ease",
        }}
      >
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: hovered ? "var(--accent)" : "var(--muted)",
              border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
              padding: "5px 10px",
              transition: "color 0.25s ease, border-color 0.25s ease",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      style={{
        padding: "120px clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "64px",
        }}
      >
        Ce que j'apporte
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1px",
          background: "var(--border)",
        }}
      >
        {services.map((s) => (
          <ServiceCard key={s.number} {...s} />
        ))}
      </div>
    </section>
  );
}
