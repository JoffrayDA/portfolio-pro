const experiences = [
  {
    period: "Sept. 2024 – auj.",
    company: "Edgard & Cooper",
    role: "Business Analyst E-Commerce",
    context: "MSc alternance",
    highlight: "Canal Amazon 13,7M€ · 6 marchés EU · Dashboard Power BI 750+ SKUs · Mission BA tracking OOS & prix.",
  },
  {
    period: "2023 – 2024",
    company: "AMD Blue · Pluraskills",
    role: "Business Developer",
    context: "Conseil Data & IT",
    highlight: "Prospection Grands Comptes · Placement consultant chez BPCE Solutions Informatiques.",
  },
  {
    period: "2015 – 2023",
    company: "Point P · BHV · Foot Locker · Ralph Lauren",
    role: "Vente & Relation Client",
    context: "B2B / Retail premium",
    highlight: "Grands comptes B2B · Logistique & approvisionnement BTP · Retail premium multi-enseignes.",
  },
  {
    period: "2016 – 2018",
    company: "Australie",
    role: "Expérience internationale",
    context: "Work & Travel",
    highlight: "Matelot · Superviseur backpackers · Construction · Management multiculturel en anglais.",
  },
];

const formation = [
  { degree: "MSc Business & Data · IA Applied to Business", school: "Eugenia School", period: "2024–2026" },
  { degree: "Bachelor Commerce International", school: "Euridis Business School", period: "2023–2024" },
  { degree: "BTS NDRC", school: "Stephenson Formation", period: "2021–2023" },
];

export default function About() {
  return (
    <section
      id="a-propos"
      style={{ padding: "80px clamp(24px, 6vw, 96px) 80px" }}
    >
      {/* ── Top: 3 colonnes ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr 1fr",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "start",
          marginBottom: "56px",
        }}
      >
        {/* Col 1 — Photo + identité */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              width: "160px",
              height: "200px",
              borderRadius: "12px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src="/joffray2.png"
              alt="Joffray DeAlberto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
          <div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2vw, 28px)",
                fontWeight: 300,
                color: "var(--fg)",
                lineHeight: 1.1,
                marginBottom: "6px",
              }}
            >
              Joffray DeAlberto
            </h1>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Business Analyst · Data & IA
            </p>
          </div>
        </div>

        {/* Col 2 — Bio + stats */}
        <div style={{ paddingTop: "4px" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 2.2vw, 32px)",
              fontWeight: 300,
              color: "var(--fg)",
              lineHeight: 1.3,
              marginBottom: "20px",
            }}
          >
            6 ans en vente B2B/B2C,
            <br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              pivoté vers la Data & l'IA.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              lineHeight: 1.75,
              color: "var(--fg)",
              opacity: 0.85,
              marginBottom: "28px",
            }}
          >
            Profil hybride Business / Data : cadrage fonctionnel, dashboards Power BI
            actionnables, agents IA agentiques. Aujourd'hui BA en alternance chez
            Edgard & Cooper sur un canal Amazon à 13,7M€ sur 6 marchés européens.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {[
              { val: "6 ans",   label: "Expérience vente" },
              { val: "13,7M€",  label: "Canal Amazon" },
              { val: "6",       label: "Marchés EU" },
            ].map(({ val, label }) => (
              <div
                key={label}
                style={{ borderTop: "1px solid var(--border)", paddingTop: "12px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(18px, 1.8vw, 26px)",
                    fontWeight: 300,
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {val}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — Formation */}
        <div style={{ paddingTop: "4px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--fg)",
              marginBottom: "22px",
            }}
          >
            Formation
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {formation.map(({ degree, school, period }) => (
              <div
                key={school}
                style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "14px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "var(--fg)",
                    marginBottom: "3px",
                  }}
                >
                  {degree}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                  }}
                >
                  {school} · {period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom: 4 cartes expériences ── */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--fg)",
            marginBottom: "20px",
          }}
        >
          Expériences
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
            background: "var(--border)",
          }}
        >
          {experiences.map(({ period, company, role, highlight }) => (
            <div
              key={company}
              style={{
                background: "var(--bg)",
                padding: "22px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                {period}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "var(--fg)",
                  lineHeight: 1.2,
                }}
              >
                {company}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                {role}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--fg)",
                  opacity: 0.72,
                  marginTop: "4px",
                }}
              >
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
