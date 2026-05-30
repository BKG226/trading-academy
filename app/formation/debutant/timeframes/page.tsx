export default function Timeframes() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #2e1065, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #9333ea" }}>
        <a href="/formation/debutant" style={{ color: "#c084fc", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>⏱️ Timeframes & Top Down Analysis</h1>
        <p style={{ color: "#c084fc", margin: 0, fontSize: "14px" }}>Leçon 7 sur 15 — Lire le marché sur plusieurs niveaux</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Qu'est-ce qu'un Timeframe ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Un timeframe c'est la <strong style={{ color: "white" }}>période de temps</strong> que représente chaque bougie sur ton graphique.
          Un trader professionnel n'analyse jamais un seul timeframe — il utilise
          <strong style={{ color: "#fbbf24" }}> plusieurs niveaux</strong> pour avoir une vision complète du marché.
        </p>
      </div>

      {/* LISTE TIMEFRAMES */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0284c7" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>📊 Les Timeframes principaux</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { tf: "Monthly (MN)", desc: "Vision macro — tendance sur plusieurs années", usage: "Investisseurs long terme", color: "#f87171" },
            { tf: "Weekly (W1)", desc: "Tendance principale — zones majeures", usage: "Swing traders", color: "#fbbf24" },
            { tf: "Daily (D1)", desc: "Direction principale — zones importantes", usage: "HTF reference", color: "#34d399" },
            { tf: "H4 (4 heures)", desc: "Structure intermédiaire — confirmation", usage: "MTF confirmation", color: "#60a5fa" },
            { tf: "H1 (1 heure)", desc: "Structure détaillée — zones précises", usage: "Entrée swing", color: "#a78bfa" },
            { tf: "M15 (15 minutes)", desc: "Entrées précises — confirmation LTF", usage: "LTF entrée", color: "#c084fc" },
            { tf: "M5 / M1", desc: "Scalping — entrées très précises", usage: "Scalpers", color: "#94a3b8" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ width: "70px", flexShrink: 0 }}>
                <span style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.tf}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#cbd5e1", fontSize: "13px" }}>{item.desc}</div>
                <div style={{ color: "#64748b", fontSize: "11px", marginTop: "2px" }}>{item.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOP DOWN ANALYSIS */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #2563eb" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>🔭 Top Down Analysis</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          La Top Down Analysis consiste à <strong style={{ color: "white" }}>commencer par le grand timeframe</strong>
          pour descendre vers le petit. Comme un zoom progressif — tu vois d'abord la
          <strong style={{ color: "#fbbf24" }}> forêt entière</strong> avant de regarder un arbre spécifique.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { etape: "1", tf: "Daily / W1", action: "Identifie la direction principale — haussier ou baissier ?", color: "#f87171" },
            { etape: "2", tf: "H4", action: "Confirme la structure et identifie les zones clés", color: "#fbbf24" },
            { etape: "3", tf: "H1", action: "Cherche les zones d'entrée précises dans la direction HTF", color: "#34d399" },
            { etape: "4", tf: "M15", action: "Attends le pattern de confirmation pour entrer", color: "#60a5fa" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "15px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: "35px", height: "35px", borderRadius: "10px", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#0f172a", fontWeight: "bold", fontSize: "16px", flexShrink: 0 }}>
                {item.etape}
              </div>
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px", marginBottom: "4px" }}>{item.tf}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5" }}>{item.action}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXEMPLE PRATIQUE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📌 Exemple Pratique — EURUSD</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { tf: "Daily", obs: "Structure haussiere claire — serie de HH et HL", verdict: "Direction : BUY", color: "#34d399" },
            { tf: "H4", obs: "Prix revient sur une zone de demande importante", verdict: "Zone identifiee", color: "#60a5fa" },
            { tf: "H1", obs: "CHoCH haussier confirme sur la zone", verdict: "Confirmation", color: "#a78bfa" },
            { tf: "M15", obs: "Bullish Engulfing apparait sur la zone", verdict: "ENTRE EN BUY !", color: "#fbbf24" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "13px", minWidth: "45px" }}>{item.tf}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#cbd5e1", fontSize: "13px" }}>{item.obs}</div>
              </div>
              <span style={{ color: item.color, fontSize: "12px", fontWeight: "bold", textAlign: "right" }}>{item.verdict}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", marginTop: "15px", border: "1px solid #16a34a", textAlign: "center" }}>
          <span style={{ color: "#34d399", fontWeight: "bold", fontSize: "15px" }}>
            4 timeframes alignes = Trade haute probabilite
          </span>
        </div>
      </div>

      {/* HTF vs LTF */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⚖️ HTF vs LTF — La règle absolue</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "15px", borderTop: "3px solid #f87171" }}>
            <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", marginBottom: "8px" }}>HTF (Grand TF)</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {["Donne la direction", "Identifie les zones", "Ne jamais ignorer", "Toujours prioritaire"].map((t, i) => (
                <div key={i} style={{ color: "#94a3b8", fontSize: "12px", display: "flex", gap: "6px" }}>
                  <span style={{ color: "#f87171" }}>•</span>{t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "15px", borderTop: "3px solid #34d399" }}>
            <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", marginBottom: "8px" }}>LTF (Petit TF)</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {["Donne l'entree precise", "Confirme le pattern", "Seulement apres HTF", "Reduire le risque"].map((t, i) => (
                <div key={i} style={{ color: "#94a3b8", fontSize: "12px", display: "flex", gap: "6px" }}>
                  <span style={{ color: "#34d399" }}>•</span>{t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #fbbf24" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ⚠️ <strong style={{ color: "white" }}>Règle absolue :</strong> Ne jamais entrer sur LTF
            <strong style={{ color: "#f87171" }}> contre</strong> la direction du HTF.
            Le HTF gagne toujours.
          </p>
        </div>
      </div>

      {/* REGLES PRO */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Commence toujours par le Daily pour identifier la tendance principale",
            "Descends progressivement vers les petits TF pour affiner ton entree",
            "Plus les TF sont alignes dans la meme direction, plus le trade est fiable",
            "Ne trade jamais sur M1 ou M5 sans avoir verifie le Daily et H4 avant",
            "La patience de faire la Top Down Analysis = la competence des pros",
          ].map((rule, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "10px" }}>
              <span style={{ color: "#fbbf24", flexShrink: 0 }}>→</span>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/debutant/market-structure" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 6
          </button>
        </a>
        <a href="/formation/debutant/strategies" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #9333ea, #0284c7)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 8 →
          </button>
        </a>
      </div>

    </div>
  );
}
