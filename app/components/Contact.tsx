"use client";

const links = [
  {
    label: "Email",
    value: "joffray.dealberto@gmail.com",
    href: "mailto:joffray.dealberto@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "joffray-dealberto",
    href: "https://www.linkedin.com/in/joffray-dealberto-9b0b421b7/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px clamp(24px, 8vw, 120px)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "48px",
        }}
      >
        Contact
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 120px)",
          alignItems: "start",
        }}
      >
        {/* Left — heading + status */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--fg)",
              marginBottom: "32px",
            }}
          >
            On se parle ?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--fg)",
              opacity: 0.6,
              maxWidth: "380px",
              marginBottom: "48px",
            }}
          >
            En recherche d'un CDI en tant que Business Analyst pour septembre 2026.
            Si le poste est stimulant, je suis partant.
            Disponible pour un échange ou une candidature.
          </p>

          {/* Dispo badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid var(--border)",
              padding: "10px 18px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4CAF50",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--fg)",
                opacity: 0.7,
              }}
            >
              Disponible · CDI sept. 2026
            </span>
          </div>
        </div>

        {/* Right — links */}
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {links.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "28px 0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  gap: "24px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.querySelector(".link-value") as HTMLElement).style.color =
                    "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.querySelector(".link-value") as HTMLElement).style.color =
                    "var(--fg)";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <span
                  className="link-value"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(16px, 1.8vw, 22px)",
                    fontWeight: 300,
                    color: "var(--fg)",
                    transition: "color 0.2s",
                  }}
                >
                  {value}
                </span>
              </a>
            ))}
          </div>

          {/* Primary CTA */}
          <div style={{ marginTop: "40px" }}>
            <a
              href="mailto:joffray.dealberto@gmail.com"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--bg)",
                background: "var(--accent)",
                padding: "16px 32px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              M'envoyer un message
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "120px",
          paddingTop: "32px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "var(--muted)",
          }}
        >
          Joffray DeAlberto · Business Analyst
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "var(--muted)",
          }}
        >
          © 2026
        </p>
      </div>
    </section>
  );
}
