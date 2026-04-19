const experiences = [
  {
    period: "2024 – auj.",
    company: "Edgard & Cooper",
    role: "Business Analyst E-Commerce · Amazon EU",
    highlight:
      "Pilotage d'un canal Amazon à 13,7M€ sur 6 marchés européens. Mission BA complète : cadrage, user stories, dashboards Power BI, outil Python/Streamlit déployé en prod sur 750+ SKUs.",
  },
  {
    period: "Avr. – Août 2024",
    company: "AMD Blue",
    role: "Business Developer · Services & conseil Data",
    highlight:
      "Prospection Grands Comptes, études de marché, plans de prospection Data.",
  },
  {
    period: "2023 – 2024",
    company: "Pluraskills",
    role: "Business Developer · Cabinet conseil IT",
    highlight: "Prospection, gestion RDV, contribution au recrutement IT.",
  },
  {
    period: "2021 – 2023",
    company: "Point P",
    role: "Conseiller de vente B2B",
    highlight: "Négociations clients/fournisseurs, gestion de portefeuille.",
  },
];

export default function About() {
  return (
    <section
      id="a-propos"
      style={{
        padding: "120px clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "64px",
        }}
      >
        À propos
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 120px)",
          alignItems: "start",
        }}
      >
        {/* Left — bio */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--fg)",
              marginBottom: "40px",
            }}
          >
            Ingénieur d'affaires<br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              reconverti vers la Data.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--fg)",
              opacity: 0.65,
              marginBottom: "24px",
            }}
          >
            6 ans sur le terrain : vente B2B grands comptes, business development,
            e-commerce. J'ai appris à comprendre vite ce que veulent les clients,
            à prioriser ce qui génère de la valeur, et à livrer sans attendre.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--fg)",
              opacity: 0.65,
              marginBottom: "40px",
            }}
          >
            Aujourd'hui en MSc Business & Data, je pilote un canal Amazon à 13,7M€
            en alternance chez Edgard & Cooper. Je fais le pont entre le métier
            et la data : cadrage, analyse, outils. Je livre ce qui peut
            être utilisé le lendemain matin en réunion.
          </p>

          {/* Formation */}
          <div
            style={{
              borderLeft: "2px solid var(--accent)",
              paddingLeft: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "8px",
              }}
            >
              Formation
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "18px",
                fontWeight: 400,
                color: "var(--fg)",
                marginBottom: "4px",
              }}
            >
              MSc Business & Data
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--muted)",
              }}
            >
              Eugenia School · 2024 / 2026
            </p>
          </div>
        </div>

        {/* Right — expériences */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "32px",
            }}
          >
            Expériences
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {experiences.map(({ period, company, role, highlight }) => (
              <div
                key={company}
                style={{
                  padding: "24px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "6px",
                    gap: "16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--fg)",
                    }}
                  >
                    {company}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--muted)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {period}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "8px",
                  }}
                >
                  {role}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "var(--fg)",
                    opacity: 0.55,
                  }}
                >
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
