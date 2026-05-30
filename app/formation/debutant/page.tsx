export default function DebutantHome() {
  const lecons = [
    { num: 1, titre: "Introduction au Price Action", slug: "introduction", emoji: "📖", couleur: "#2563eb" },
    { num: 2, titre: "Histoire des Chandeliers", slug: "history", emoji: "🏯", couleur: "#d97706" },
    { num: 3, titre: "Qu'est-ce qu'un Chandelier ?", slug: "candlesticks", emoji: "🕯️", couleur: "#7c3aed" },
    { num: 4, titre: "Patterns de Chandeliers", slug: "patterns", emoji: "📊", couleur: "#0891b2" },
    { num: 5, titre: "Exercices Pratiques", slug: "exercices", emoji: "✏️", couleur: "#16a34a" },
    { num: 6, titre: "Structure du Marché", slug: "market-structure", emoji: "🏗️", couleur: "#dc2626" },
    { num: 7, titre: "Timeframes & Top Down Analysis", slug: "timeframes", emoji: "⏱️", couleur: "#9333ea" },
    { num: 8, titre: "Stratégies de Trading", slug: "strategies", emoji: "🎯", couleur: "#0284c7" },
    { num: 9, titre: "Pin Bar — Stratégies", slug: "pin-bar", emoji: "📌", couleur: "#059669" },
    { num: 10, titre: "Tactiques de Trading", slug: "tactics", emoji: "⚡", couleur: "#e11d48" },
    { num: 11, titre: "Pin Bar avec Confluence", slug: "pinbar-confluence", emoji: "🎯", couleur: "#f59e0b" },
    { num: 12, titre: "Engulfing Bar Pattern", slug: "engulfing", emoji: "🔄", couleur: "#6366f1" },
    { num: 13, titre: "Inside Bar Pattern", slug: "inside-bar", emoji: "📦", couleur: "#10b981" },
    { num: 14, titre: "Money Management", slug: "money-management", emoji: "💰", couleur: "#ef4444" },
    { num: 15, titre: "Conclusion", slug: "conclusion", emoji: "🏆", couleur: "#8b5cf6" },
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
        border: "1px solid #2563eb",
        textAlign: "center",
      }}>
        <a href="/formation" style={{ color: "#60a5fa", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux formations
        </a>
        <h1 style={{ color: "white", fontSize: "28px", margin: "10px 0 5px 0" }}>
          📘 Formation Débutant
        </h1>
        <p style={{ color: "#93c5fd", marginTop: "10px", fontSize: "16px" }}>
          Price Action & Chandeliers Japonais
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}>
          {[
            { label: "Leçons", value: "15", color: "#fbbf24" },
            { label: "Niveau", value: "Débutant", color: "#34d399" },
            { label: "Complet", value: "✅", color: "#60a5fa" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ color: stat.color, fontSize: "22px", fontWeight: "bold" }}>{stat.value}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LEÇONS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {lecons.map((lecon) => (
          <a key={lecon.num} href={`/formation/debutant/${lecon.slug}`} style={{ textDecoration: "none" }}>
            <div style={{
              background: "#1e293b",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid #334155",
            }}>
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
              <div style={{ flex: 1 }}>
                <div style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
                  {lecon.emoji} {lecon.titre}
                </div>
                <div style={{ color: "#64748b", fontSize: "13px", marginTop: "3px" }}>
                  Leçon {lecon.num} sur 15
                </div>
              </div>
              <div style={{ color: "#475569", fontSize: "20px" }}>›</div>
            </div>
          </a>
        ))}
      </div>

      <div style={{
        marginTop: "30px",
        textAlign: "center",
        color: "#475569",
        fontSize: "13px",
      }}>
        Trading Academy — Niveau Débutant
      </div>
    </div>
  );
}
