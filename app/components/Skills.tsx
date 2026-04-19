"use client";

type Tier = "Expert" | "Avancé" | "Intermédiaire";

const skillGroups: { category: string; skills: { name: string; tier: Tier }[] }[] = [
  {
    category: "Data & Analyse",
    skills: [
      { name: "Excel",            tier: "Expert" },
      { name: "Power BI",         tier: "Avancé" },
      { name: "Python",           tier: "Intermédiaire" },
      { name: "SQL",              tier: "Intermédiaire" },
      { name: "Google Analytics", tier: "Intermédiaire" },
      { name: "Tableau",          tier: "Intermédiaire" },
    ],
  },
  {
    category: "E-Commerce & Retail",
    skills: [
      { name: "Amazon Vendor & Seller", tier: "Avancé" },
      { name: "Jungle Scout",           tier: "Avancé" },
      { name: "Keepa API",              tier: "Avancé" },
      { name: "Streamlit",              tier: "Intermédiaire" },
    ],
  },
  {
    category: "Automatisation & IA",
    skills: [
      { name: "Agents IA", tier: "Avancé" },
      { name: "N8N",       tier: "Avancé" },
      { name: "Make",      tier: "Avancé" },
      { name: "Notion",    tier: "Expert" },
    ],
  },
  {
    category: "Gestion & Livrables",
    skills: [
      { name: "PowerPoint", tier: "Expert" },
      { name: "Jira",       tier: "Intermédiaire" },
      { name: "GitHub",     tier: "Avancé" },
      { name: "Figma",      tier: "Intermédiaire" },
    ],
  },
];

const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais",  level: "Bilingue" },
  { name: "Japonais", level: "Notions" },
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
      padding: "11px 0",
      borderBottom: last ? "none" : "1px solid var(--border)",
    }}>
      <span style={{
        fontFamily: "var(--font-sans)",
        fontSize: "14px",
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
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}>
          Outils & Langues
        </p>

        <div style={{ display: "flex", gap: "24px" }}>
          {languages.map(({ name, level }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--fg)", opacity: 0.7 }}>
                {name}
              </span>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
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
              fontSize: "9px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--muted)",
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
