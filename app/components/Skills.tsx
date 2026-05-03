"use client";

type Tier = "Expert" | "Avancé" | "Intermédiaire";

const skillGroups: { category: string; skills: { name: string; tier: Tier }[] }[] = [
  {
    category: "Data & Analyse",
    skills: [
      { name: "Excel",            tier: "Expert" },
      { name: "Power BI",         tier: "Avancé" },
      { name: "DAX",              tier: "Avancé" },
      { name: "Power Query",      tier: "Avancé" },
      { name: "SQL",              tier: "Intermédiaire" },
      { name: "Python",           tier: "Intermédiaire" },
      { name: "Google Analytics", tier: "Intermédiaire" },
      { name: "Tableau",          tier: "Intermédiaire" },
    ],
  },
  {
    category: "E-Commerce & Retail",
    skills: [
      { name: "Amazon Vendor & Seller", tier: "Avancé" },
      { name: "Jungle Scout",           tier: "Avancé" },
      { name: "Catalogue management",   tier: "Avancé" },
      { name: "Pricing",                tier: "Avancé" },
    ],
  },
  {
    category: "IA & Automatisation",
    skills: [
      { name: "Agents IA", tier: "Avancé" },
      { name: "N8N",       tier: "Avancé" },
      { name: "Make",      tier: "Avancé" },
      { name: "Dust",      tier: "Intermédiaire" },
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
      { name: "GitHub",                  tier: "Avancé" },
    ],
  },
];

const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais",  level: "Bilingue" },
];

const tierColor: Record<Tier, string> = {
  Expert:        "var(--accent)",
  Avancé:        "var(--accent)",
  Intermédiaire: "var(--muted)",
};

function SkillRow({ name, tier, last }: { name: string; tier: Tier; last: boolean }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
      borderBottom: last ? "none" : "1px solid var(--border)",
    }}>
      <span style={{
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        color: "var(--fg)",
        opacity: 0.85,
      }}>
        {name}
      </span>
      <span style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: tierColor[tier],
      }}>
        {tier}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      style={{
        padding: "120px clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        flexWrap: "wrap",
        gap: "24px",
        marginBottom: "64px",
      }}>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 300,
          color: "var(--accent)",
          lineHeight: 1.05,
        }}>
          Outils & Langues
        </h2>

        <div style={{ display: "flex", gap: "24px" }}>
          {languages.map(({ name, level }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--fg)", opacity: 0.7 }}>
                {name}
              </span>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                border: "1px solid var(--border)",
                padding: "3px 8px",
              }}>
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "56px 80px",
      }}>
        {skillGroups.map(({ category, skills }) => (
          <div key={category}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--fg)",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--border)",
              marginBottom: "0",
            }}>
              {category}
            </p>
            {skills.map((s, i) => (
              <SkillRow
                key={s.name}
                name={s.name}
                tier={s.tier}
                last={i === skills.length - 1}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
