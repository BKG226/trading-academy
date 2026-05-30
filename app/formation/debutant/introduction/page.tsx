export default function Introduction() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      fontFamily: "Arial",
      padding: "20px",
      color: "white",
    }}>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #2563eb",
      }}>
        <a href="/formation/debutant" style={{ color: "#60a5fa", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          📖 Introduction au Price Action
        </h1>
        <p style={{ color: "#93c5fd", margin: 0, fontSize: "14px" }}>
          Leçon 1 sur 15 — Niveau Débutant
        </p>
      </div>

      {/* QU'EST-CE QUE LE PRICE ACTION */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #334155",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          🎯 Qu'est-ce que le Price Action ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Le <strong style={{ color: "white" }}>Price Action</strong> est une méthode de trading qui consiste à lire et analyser 
          le mouvement du prix <strong style={{ color: "#fbbf24" }}>directement sur le graphique</strong>, 
          sans utiliser d'indicateurs compliqués comme le RSI, MACD ou les Moyennes Mobiles.
        </p>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px", marginTop: "15px" }}>
          Le trader Price Action se concentre uniquement sur <strong style={{ color: "white" }}>ce que le prix fait</strong> — 
          comment il monte, comment il descend, où il s'arrête et pourquoi.
        </p>
      </div>

      {/* POURQUOI */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #16a34a",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          💡 Pourquoi apprendre le Price Action ?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { icon: "🚫", titre: "Pas d'indicateurs inutiles", desc: "Tu lis le marché directement — pas à travers des formules mathématiques complexes", color: "#f87171" },
            { icon: "🧠", titre: "Comprendre la psychologie", desc: "Chaque bougie raconte une histoire entre acheteurs et vendeurs", color: "#a78bfa" },
            { icon: "🎯", titre: "Entrées précises", desc: "Le Price Action te donne des zones d'entrée très précises avec un bon Risk/Reward", color: "#fbbf24" },
            { icon: "📱", titre: "Applicable partout", desc: "Forex, Crypto, Actions, Matières premières — ça marche sur tous les marchés", color: "#34d399" },
            { icon: "⏱️", titre: "Tous les timeframes", desc: "Du scalping au swing trading — le Price Action s'adapte à ton style", color: "#60a5fa" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "12px",
              padding: "15px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}>
              <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "15px", marginBottom: "4px" }}>
                  {item.titre}
                </div>
                <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6" }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PSYCHOLOGIE DU MARCHÉ */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #7c3aed",
      }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>
          🧠 La Psychologie du Marché
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px", marginBottom: "15px" }}>
          Le marché est composé de <strong style={{ color: "white" }}>millions de traders</strong> qui achètent et vendent en même temps. 
          Leurs émotions — peur, cupidité, espoir — créent des <strong style={{ color: "#a78bfa" }}>patterns répétitifs</strong> sur les graphiques.
        </p>

        {/* SVG PSYCHOLOGIE */}
        <div style={{
          background: "#0f172a",
          borderRadius: "12px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Ligne de base */}
            <line x1="0" y1="130" x2="300" y2="130" stroke="#334155" strokeWidth="1" />

            {/* Phase optimisme */}
            <polyline points="20,110 60,80 90,50"
              fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="25" y="125" fill="#34d399" fontSize="9">Optimisme</text>

            {/* Phase euphorie */}
            <polyline points="90,50 120,20"
              fill="none" stroke="#fbbf24" strokeWidth="2.5" />
            <text x="95" y="15" fill="#fbbf24" fontSize="9">Euphorie 🔥</text>

            {/* Phase peur */}
            <polyline points="120,20 160,60 190,90"
              fill="none" stroke="#f87171" strokeWidth="2.5" />
            <text x="155" y="55" fill="#f87171" fontSize="9">Peur 😰</text>

            {/* Phase panique */}
            <polyline points="190,90 220,120 240,140"
              fill="none" stroke="#dc2626" strokeWidth="2.5" />
            <text x="220" y="155" fill="#dc2626" fontSize="9">Panique</text>

            {/* Phase opportunité */}
            <polyline points="240,140 270,110 290,80"
              fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="255" y="75" fill="#34d399" fontSize="9">Opport.</text>

            {/* Points clés */}
            <circle cx="120" cy="20" r="5" fill="#fbbf24" />
            <circle cx="240" cy="140" r="5" fill="#dc2626" />
          </svg>
          <p style={{ color: "#64748b", fontSize: "12px", margin: "8px 0 0 0" }}>
            Cycle émotionnel du marché
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{
            flex: 1,
            background: "#0f172a",
            borderRadius: "10px",
            padding: "12px",
            borderTop: "3px solid #34d399",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "20px" }}>📈</div>
            <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", marginTop: "5px" }}>Acheteurs</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>Poussent le prix vers le haut</div>
          </div>
          <div style={{
            flex: 1,
            background: "#0f172a",
            borderRadius: "10px",
            padding: "12px",
            borderTop: "3px solid #f87171",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "20px" }}>📉</div>
            <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "13px", marginTop: "5px" }}>Vendeurs</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>Poussent le prix vers le bas</div>
          </div>
        </div>
      </div>

      {/* QUI UTILISE LE PRICE ACTION */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          🏦 Qui utilise le Price Action ?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { who: "Banques & Institutions", desc: "Les plus grands acteurs du marché tradent avec le Price Action", icon: "🏦" },
            { who: "Hedge Funds", desc: "Les fonds spéculatifs utilisent les niveaux clés de Price Action", icon: "💼" },
            { who: "Traders Professionnels", desc: "La majorité des traders pro n'utilisent que quelques outils simples", icon: "👨‍💼" },
            { who: "Traders Indépendants", desc: "Des milliers de traders retail rentables dans le monde entier", icon: "💻" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}>
              <span style={{ fontSize: "24px" }}>{item.icon}</span>
              <div>
                <div style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>{item.who}</div>
                <div style={{ color: "#64748b", fontSize: "13px", marginTop: "3px" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CE QUE TU VAS APPRENDRE */}
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          📚 Ce que tu vas apprendre
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "L'histoire et l'origine des chandeliers japonais",
            "Comment lire et analyser une bougie japonaise",
            "Les patterns de chandeliers les plus puissants",
            "La structure du marché — tendances et ranges",
            "Les timeframes et l'analyse top-down",
            "Les stratégies Pin Bar, Engulfing, Inside Bar",
            "La gestion du risque et du capital",
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "10px 15px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}>
              <span style={{ color: "#fbbf24", flexShrink: 0 }}>✓</span>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLE MINDSET */}
      <div style={{
        background: "linear-gradient(135deg, #064e3b, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "25px",
        border: "1px solid #16a34a",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "30px", marginBottom: "10px" }}>💬</div>
        <p style={{ color: "#34d399", fontSize: "16px", lineHeight: "1.8", fontStyle: "italic", margin: 0 }}>
          "Le marché ne ment jamais — c'est notre interprétation qui est parfois fausse. 
          Apprends à lire le prix et le marché te parlera."
        </p>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/debutant" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px", background: "#1e293b",
            color: "white", border: "1px solid #334155",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>← Retour</button>
        </a>
        <a href="/formation/debutant/history" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(to right, #2563eb, #7c3aed)",
            color: "white", border: "none",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>Leçon 2 →</button>
        </a>
      </div>

    </div>
  );
}
