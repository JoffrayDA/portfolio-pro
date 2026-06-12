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
      style={{ padding: "56px clamp(24px, 6vw, 96px) 72px" }}
    >
      {/* Header */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "32px",
        }}
      >
        Contact
      </p>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gap: "clamp(32px, 6vw, 96px)",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 3vw, 44px)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--fg)",
              marginBottom: "20px",
            }}
          >
            On se parle ?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              lineHeight: 1.75,
              color: "var(--fg)",
              opacity: 0.75,
              maxWidth: "360px",
              marginBottom: "28px",
            }}
          >
            En recherche d'un CDI en tant que BA ou Chef de projet Data/IA pour septembre 2026.
            Disponible pour un échange ou un café.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid var(--border)",
              borderRadius: "40px",
              padding: "8px 16px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4CAF50", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg)" }}>
              Disponible · CDI sept. 2026
            </span>
          </div>
        </div>

        {/* Right */}
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
                  padding: "16px 0",
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
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", flexShrink: 0 }}>
                  {label}
                </span>
                <span className="link-value" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(13px, 1.4vw, 18px)", fontWeight: 300, color: "var(--fg)", transition: "color 0.2s" }}>
                  {value}
                </span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: "28px" }}>
            <a
              href="mailto:joffray.dealberto@gmail.com"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
                background: "var(--accent)",
                padding: "14px 28px",
                textDecoration: "none",
                borderRadius: "3px",
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
