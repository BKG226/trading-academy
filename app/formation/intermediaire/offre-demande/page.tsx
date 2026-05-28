export default function OffreDemande() {
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
        border: "1px solid #0891b2",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#67e8f9", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          ⚖️ Offre & Demande
        </h1>
        <p style={{ color: "#67e8f9", margin: 0, fontSize: "14px" }}>
          Leçon 3 sur 10 — Niveau Intermédiaire
        </p>
      </div>

      {/* INTRO */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #334155",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          🎯 C'est quoi les zones ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          Les zones d'offre et de demande sont des <strong style={{ color: "white" }}>niveaux de prix où les grandes institutions</strong> (banques, hedge funds) ont placé leurs ordres. 
          Quand le prix revient sur ces zones, <strong style={{ color: "#fbbf24" }}>elles réagissent fortement</strong>.
        </p>
      </div>

      {/* ZONE DE DEMANDE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #16a34a",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          📦 Zone de DEMANDE (Demand)
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Une zone de demande se forme quand le prix <strong style={{ color: "#34d399" }}>part fortement à la hausse</strong> depuis un niveau. 
          Les institutions ont des <strong style={{ color: "white" }}>ordres d'achat</strong> placés là. 
          Quand le prix revient → <strong style={{ color: "#fbbf24" }}>opportunité d'achat</strong>.
        </p>

        {/* SVG DEMANDE */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 170" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Zone de demande */}
            <rect x="20" y="120" width="80" height="20" fill="#16a34a" fillOpacity="0.3" stroke="#16a34a" strokeWidth="1" strokeDasharray="4,3" />
            <text x="25" y="115" fill="#34d399" fontSize="10">Zone Demande</text>
            {/* Prix qui part fort */}
            <polyline points="60,130 60,50 150,30"
              fill="none" stroke="#34d399" strokeWidth="2.5" />
            {/* Retour sur zone */}
            <polyline points="150,30 200,80 230,130"
              fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3" />
            {/* Zone retour */}
            <rect x="190" y="120" width="80" height="20" fill="#16a34a" fillOpacity="0.3" stroke="#16a34a" strokeWidth="1" strokeDasharray="4,3" />
            {/* Rebond */}
            <polyline points="230,130 250,80 280,40"
              fill="none" stroke="#34d399" strokeWidth="2.5" />
            {/* Flèche BUY */}
            <text x="240" y="75" fill="#34d399" fontSize="11" fontWeight="bold">BUY ↑</text>
            {/* Labels */}
            <text x="55" y="45" fill="#34d399" fontSize="9">Départ fort</text>
            <text x="155" y="75" fill="#94a3b8" fontSize="9">Retour</text>
          </svg>
        </div>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "12px 15px",
          borderLeft: "4px solid #34d399",
        }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Comment identifier :</strong> Cherche un mouvement impulsif haussier — la base de ce mouvement est ta zone de demande.
          </p>
        </div>
      </div>

      {/* ZONE D'OFFRE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #dc2626",
      }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>
          📦 Zone d'OFFRE (Supply)
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Une zone d'offre se forme quand le prix <strong style={{ color: "#f87171" }}>part fortement à la baisse</strong> depuis un niveau. 
          Les institutions ont des <strong style={{ color: "white" }}>ordres de vente</strong> placés là. 
          Quand le prix revient → <strong style={{ color: "#fbbf24" }}>opportunité de vente</strong>.
        </p>

        {/* SVG OFFRE */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 170" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Zone offre */}
            <rect x="20" y="30" width="80" height="20" fill="#dc2626" fillOpacity="0.3" stroke="#dc2626" strokeWidth="1" strokeDasharray="4,3" />
            <text x="25" y="27" fill="#f87171" fontSize="10">Zone Offre</text>
            {/* Prix qui part fort baisse */}
            <polyline points="60,40 60,130 150,145"
              fill="none" stroke="#f87171" strokeWidth="2.5" />
            {/* Retour sur zone */}
            <polyline points="150,145 200,90 230,40"
              fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3" />
            {/* Zone retour */}
            <rect x="190" y="30" width="80" height="20" fill="#dc2626" fillOpacity="0.3" stroke="#dc2626" strokeWidth="1" strokeDasharray="4,3" />
            {/* Chute */}
            <polyline points="230,40 250,100 280,145"
              fill="none" stroke="#f87171" strokeWidth="2.5" />
            {/* Flèche SELL */}
            <text x="238" y="98" fill="#f87171" fontSize="11" fontWeight="bold">SELL ↓</text>
            <text x="55" y="148" fill="#f87171" fontSize="9">Départ fort</text>
            <text x="155" y="85" fill="#94a3b8" fontSize="9">Retour</text>
          </svg>
        </div>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "12px 15px",
          borderLeft: "4px solid #f87171",
        }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Comment identifier :</strong> Cherche un mouvement impulsif baissier — le plafond de ce mouvement est ta zone d'offre.
          </p>
        </div>
      </div>

      {/* QUALITÉ DES ZONES */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          ⭐ Qualité d'une bonne zone
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { icon: "🚀", titre: "Départ fort (impulsif)", desc: "Le prix quitte la zone très rapidement — signal d'ordres institutionnels", color: "#34d399" },
            { icon: "🔢", titre: "Peu de tests", desc: "Une zone testée 1 ou 2 fois est plus forte qu'une zone souvent touchée", color: "#60a5fa" },
            { icon: "📊", titre: "Sur HTF", desc: "Une zone sur Daily ou H4 est plus puissante qu'une zone sur M15", color: "#a78bfa" },
            { icon: "🎯", titre: "Avec confluence", desc: "Zone + BOS/CHoCH + Fibonacci = entrée haute probabilité", color: "#fbbf24" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}>
              <span style={{ fontSize: "20px", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.titre}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "3px" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FRESH vs TESTED */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          🆕 Fresh Zone vs Zone Usée
        </h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{
            flex: 1,
            background: "#0f172a",
            borderRadius: "10px",
            padding: "15px",
            borderTop: "3px solid #34d399",
            textAlign: "center",
          }}>
            <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "15px", marginBottom: "8px" }}>
              ✅ Fresh
            </div>
            <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6" }}>
              Jamais testée ou testée 1 fois. Ordres institutionnels encore présents. <strong style={{ color: "white" }}>Haute probabilité.</strong>
            </div>
          </div>
          <div style={{
            flex: 1,
            background: "#0f172a",
            borderRadius: "10px",
            padding: "15px",
            borderTop: "3px solid #f87171",
            textAlign: "center",
          }}>
            <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "15px", marginBottom: "8px" }}>
              ❌ Usée
            </div>
            <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6" }}>
              Testée 3+ fois. Les ordres sont épuisés. Risque de cassure. <strong style={{ color: "white" }}>Éviter.</strong>
            </div>
          </div>
        </div>
      </div>

      {/* ASTUCE PRO */}
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "25px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          💡 Astuce Pro
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7" }}>
          Ne trade jamais une zone d'offre/demande <strong style={{ color: "white" }}>seule</strong>. 
          Attends toujours une <strong style={{ color: "#fbbf24" }}>confirmation sur LTF</strong> — un CHoCH, un pattern de confirmation (engulfing, pin bar) 
          ou un retour dans la Golden Zone Fibonacci. 
          <strong style={{ color: "#34d399" }}> La patience est ta meilleure arme. </strong>
        </p>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/intermediaire/bos-choch" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%",
            padding: "14px",
            background: "#1e293b",
            color: "white",
            border: "1px solid #334155",
            borderRadius: "12px",
            fontSize: "15px",
            cursor: "pointer",
          }}>
            ← Leçon 2
          </button>
        </a>
        <a href="/formation/intermediaire/fibonacci" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(to right, #0891b2, #7c3aed)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            cursor: "pointer",
          }}>
            Leçon 4 →
          </button>
        </a>
      </div>

    </div>
  );
}
