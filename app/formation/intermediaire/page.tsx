export default function IntermedaireHome() {
  const lecons = [
    { num: 1, titre: "Structure du marché avancée", slug: "structure", emoji: "📊", couleur: "#2563eb" },
    { num: 2, titre: "BOS & CHoCH", slug: "bos-choch", emoji: "🔄", couleur: "#7c3aed" },
    { num: 3, titre: "Offre & Demande", slug: "offre-demande", emoji: "⚖️", couleur: "#0891b2" },
    { num: 4, titre: "Golden Zone Fibonacci", slug: "fibonacci", emoji: "🎯", couleur: "#d97706" },
    { num: 5, titre: "Manipulation du marché", slug: "manipulation", emoji: "🪤", couleur: "#dc2626" },
    { num: 6, titre: "Confirmation Patterns", slug: "patterns", emoji: "🕯️", couleur: "#059669" },
    { num: 7, titre: "Confluence & Entrées", slug: "confluence", emoji: "🎯", couleur: "#0284c7" },
    { num: 8, titre: "Gestion du risque", slug: "gestion-risque", emoji: "🛡️", couleur: "#16a34a" },
    { num: 9, titre: "Sessions de trading", slug: "sessions", emoji: "🌍", couleur: "#9333ea" },
    { num: 10, titre: "Psychologie du trader", slug: "psychologie", emoji: "🧠", couleur: "#e11d48" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      fontFamily: "Arial",
      padding: "30px 20px",
    }}>
      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #0f172a)",
        borderRadius: "20px",
        padding: "30px",
        marginBottom: "30px",
        border: "1px solid #1e40af",
        textAlign: "center",
      }}>
        <h1 style={{ color: "white", fontSize: "28px", margin: 0 }}>
          📈 Formation Intermédiaire
        </h1>
        <p style={{ color: "#93c5fd", marginTop: "10px", fontSize: "16px" }}>
          Price Action — Niveau Intermédiaire
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontSize: "22px", fontWeight: "bold" }}>10</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>Leçons</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#34d399", fontSize: "22px", fontWeight: "bold" }}>Pro</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>Niveau</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#f87171", fontSize: "22px", fontWeight: "bold" }}>Live</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>Exemples</div>
          </div>
        </div>
      </div>

      {/* LECONS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {lecons.map((lecon) => (
          <a
            key={lecon.num}
            href={`/formation/intermediaire/${lecon.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div style={{
              background: "#1e293b",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid #334155",
              transition: "all 0.2s",
            }}>
              {/* NUMERO */}
              <div style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                background: lecon.couleur,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "bold",
                color: "white",
                flexShrink: 0,
              }}>
                {lecon.num}
              </div>

              {/* TEXTE */}
              <div style={{ flex: 1 }}>
                <div style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
                  {lecon.emoji} {lecon.titre}
                </div>
                <div style={{ color: "#64748b", fontSize: "13px", marginTop: "3px" }}>
                  Leçon {lecon.num} sur 10
                </div>
              </div>

              {/* FLECHE */}
              <div style={{ color: "#475569", fontSize: "20px" }}>›</div>
            </div>
          </a>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{
        marginTop: "30px",
        textAlign: "center",
        color: "#475569",
        fontSize: "13px",
      }}>
        Trading Academy — Niveau Intermédiaire
      </div>
    </div>
  );
}
