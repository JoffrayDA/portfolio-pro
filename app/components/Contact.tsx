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
    href: "https://www.linkedin.com/in/joffray-dealberto/",
  },
  {
    label: "GitHub",
    value: "JoffrayDA",
    href: "https://github.com/JoffrayDA",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "120px clamp(24px, 8vw, 120px)" }}
    >
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 300,
          color: "var(--accent)",
          lineHeight: 1.05,
          marginBottom: "64px",
        }}
      >
        Contact
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 120px)",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 2.5vw, 38px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--fg)",
              marginBottom: "32px",
            }}
          >
            On se parle ?
          </h3>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--fg)",
              maxWidth: "380px",
              marginBottom: "48px",
            }}
          >
            En recherche d'un CDI en tant que BA ou Chef de projet Data/IA pour septembre 2026.
            Si le poste est stimulant, je suis partant.
            Disponible pour un échange ou un café pour en discuter.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid var(--border)",
              borderRadius: "40px",
              padding: "10px 18px",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4CAF50", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg)" }}>
              Disponible · CDI sept. 2026
            </span>
          </div>
        </div>

        {/* Right — liens + CTA */}
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
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  gap: "24px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.querySelector(".link-value") as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.querySelector(".link-value") as HTMLElement).style.color = "var(--fg)";
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "16px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", flexShrink: 0 }}>
                  {label}
                </span>
                <span className="link-value" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(14px, 1.6vw, 20px)", fontWeight: 300, color: "var(--fg)", transition: "color 0.2s" }}>
                  {value}
                </span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: "40px" }}>
            <a
              href="mailto:joffray.dealberto@gmail.com"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
                background: "var(--accent)",
                padding: "18px 36px",
                textDecoration: "none",
                borderRadius: "4px",
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
    </section>
  );
}
