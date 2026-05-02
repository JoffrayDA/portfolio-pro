const experiences = [
  {
    period: "Sept. 2024 – auj.",
    company: "Edgard & Cooper",
    role: "Business Analyst E-Commerce · MSc alternance",
    highlight:
      "Contribution au pilotage du canal Amazon à 13,7M€ de sell-in (+26,2% vs 2024) sur 6 marchés européens. Mission BA complète : cadrage, backlog MoSCoW, user stories, dashboard Power BI sur 750+ SKUs. Développement d'un outil de veille prix Python/Keepa API/Streamlit déployé en production.",
  },
  {
    period: "Sept. 2023 – Août 2024",
    company: "AMD Blue · Pluraskills",
    role: "Business Developer · Conseil Data & IT",
    highlight:
      "AMD Blue (5 mois) — cabinet conseil Data : prospection Grands Comptes, placement d'un consultant chez BPCE Solutions Informatiques. Pluraskills (7 mois) — cabinet conseil IT : prospection multi-secteurs dans l'écosystème Data/IA.",
  },
  {
    period: "2015–2016 · 2018–2023",
    company: "Point P · BHV Marais · Foot Locker · Ralph Lauren",
    role: "Vente & Relation Client · B2B / Retail premium",
    highlight:
      "B2B grands comptes chez Point P : gestion de stock, logistique & approvisionnement BTP. Retail premium chez BHV, Foot Locker et Ralph Lauren.",
  },
  {
    period: "2016 – 2018",
    company: "Australie",
    role: "Expérience internationale",
    highlight:
      "Matelot (1 an) · Superviseur backpackers internationaux (4 mois) · Construction (6 mois+). Management multiculturel, autonomie complète, contexte anglophone immersif.",
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
          {/* Photo */}
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              marginBottom: "40px",
              borderRadius: "4px",
              overflow: "hidden",
              aspectRatio: "3 / 4",
            }}
          >
            <img
              src="/joffray.jpg"
              alt="Joffray De Alberto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                filter: "grayscale(15%)",
              }}
            />
          </div>

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
            6 ans en vente B2B/B2C,<br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              pivoté vers la Data & l'IA.
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
            Point P, BHV, Foot Locker, Ralph Lauren — j'ai appris à comprendre vite
            ce que veulent les clients, à prioriser ce qui génère de la valeur,
            et à livrer sans attendre.
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
            Aujourd'hui Business Analyst en alternance chez Edgard & Cooper,
            je contribue à un canal Amazon à 13,7M€ sur 6 marchés européens.
            Profil hybride Business / Data / IA : cadrage, dashboards Power BI,
            outils Python déployés en prod, agents IA agentiques.
          </p>

          {/* Formation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { degree: "MSc Business & Data — IA Applied to Business", school: "Eugenia School", period: "2024 – 2026 (en cours)" },
              { degree: "Bachelor Commerce International", school: "Euridis Business School", period: "2023 – 2024" },
              { degree: "BTS NDRC", school: "Stephenson Formation", period: "2021 – 2023" },
            ].map(({ degree, school, period }) => (
              <div key={school} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "20px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 400, color: "var(--fg)", marginBottom: "2px" }}>
                  {degree}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)" }}>
                  {school} · {period}
                </p>
              </div>
            ))}
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
