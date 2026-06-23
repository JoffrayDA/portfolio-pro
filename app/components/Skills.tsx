"use client";

type Tier = "Expert" | "Avancé" | "Intermédiaire";

const skillGroups: { category: string; skills: { name: string; tier: Tier }[] }[] = [
  {
    category: "Data & Analyse",
    skills: [
      { name: "Excel",            tier: "Expert" },
      { name: "Power BI",         tier: "Expert" },
      { name: "DAX",              tier: "Avancé" },
      { name: "Power Query",      tier: "Avancé" },
      { name: "SQL",              tier: "Intermédiaire" },
      { name: "Python",           tier: "Avancé" },
      { name: "Google Analytics", tier: "Intermédiaire" },
      { name: "Tableau",          tier: "Intermédiaire" },
    ],
  },
  {
    category: "E-Commerce & Retail",
    skills: [
      { name: "Amazon Vendor & Seller", tier: "Expert" },
      { name: "Jungle Scout",           tier: "Expert" },
      { name: "Catalogue management",   tier: "Expert" },
      { name: "Pricing",                tier: "Expert" },
    ],
  },
  {
    category: "IA & Automatisation",
    skills: [
      { name: "Agents IA",          tier: "Avancé" },
      { name: "N8N",                tier: "Avancé" },
      { name: "Make",               tier: "Avancé" },
      { name: "Dust",               tier: "Avancé" },
      { name: "Prompt Engineering", tier: "Avancé" },
      { name: "OpenAI API",         tier: "Avancé" },
      { name: "LLM",                tier: "Avancé" },
      { name: "Streamlit",          tier: "Intermédiaire" },
      { name: "RAG",                tier: "Intermédiaire" },
      { name: "Supabase",           tier: "Intermédiaire" },
    ],
  },
  {
    category: "Méthodes BA",
    skills: [
      { name: "Cadrage & User Stories",  tier: "Avancé" },
      { name: "Backlog MoSCoW",          tier: "Avancé" },
      { name: "Acceptance Criteria",     tier: "Avancé" },
      { name: "Recueil de besoin",       tier: "Avancé" },
      { name: "Reporting",               tier: "Avancé" },
      { name: "PowerPoint",              tier: "Avancé" },
      { name: "GitHub",                  tier: "Avancé" },
    ],
  },
];

const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais",  level: "Bilingue" },
];

const tierStyle: Record<Tier, React.CSSProperties> = {
  Expert:        { color: "#E8E0D5",       background: "var(--accent)",   border: "1px solid var(--accent)" },
  Avancé:        { color: "var(--accent)", background: "transparent",     border: "1px solid var(--accent)" },
  Intermédiaire: { color: "var(--muted)",  background: "transparent",     border: "1px solid var(--border)" },
};

const LEGEND: { tier: Tier; label: string }[] = [
  { tier: "Expert",        label: "Expert" },
  { tier: "Avancé",        label: "Avancé" },
  { tier: "Intermédiaire", label: "Intermédiaire" },
];

export default function Skills() {
  return (
    <section
      style={{
        padding: "32px clamp(24px, 6vw, 96px) 56px",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Header row */}
      <div className="skills-header">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--fg)",
          }}
        >
          Outils
        </p>

        {/* Legend */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {LEGEND.map(({ tier, label }) => (
            <span
              key={tier}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                padding: "3px 10px",
                borderRadius: "14px",
                whiteSpace: "nowrap",
                ...tierStyle[tier],
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Languages — separate axis from skill tiers */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Langues
          </span>
          {languages.map(({ name, level }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--fg)" }}>
                {name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#E8E0D5",
                  background: "var(--accent)",
                  borderRadius: "14px",
                  padding: "3px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4-col skill grid */}
      <div className="skills-grid">
        {skillGroups.map(({ category, skills }) => (
          <div
            key={category}
            style={{
              background: "var(--bg)",
              padding: "20px 18px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "14px",
              }}
            >
              {category}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map(({ name, tier }) => (
                <span
                  key={name}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    padding: "5px 12px",
                    borderRadius: "14px",
                    whiteSpace: "nowrap",
                    ...tierStyle[tier],
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
