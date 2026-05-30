export default function Conclusion() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #2e1065, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #8b5cf6" }}>
        <a href="/formation/debutant" style={{ color: "#a78bfa", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>🏆 Conclusion</h1>
        <p style={{ color: "#a78bfa", margin: 0, fontSize: "14px" }}>Leçon 15 sur 15 — Tu as terminé la formation débutant !</p>
      </div>

      {/* FÉLICITATIONS */}
      <div style={{ background: "linear-gradient(135deg, #064e3b, #1e3a5f)", borderRadius: "15px", padding: "25px", marginBottom: "20px", border: "1px solid #34d399", textAlign: "center" }}>
        <div style={{ fontSize: "50px", marginBottom: "15px" }}>🏆</div>
        <h2 style={{ color: "#34d399", fontSize: "22px", margin: "0 0 10px 0" }}>Félicitations !</h2>
        <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.8", margin: 0 }}>
          Tu viens de terminer la <strong style={{ color: "white" }}>formation complète débutant</strong> en Price Action.
          Tu as maintenant toutes les bases pour commencer à analyser les marchés
          <strong style={{ color: "#34d399" }}> comme un trader professionnel</strong>.
        </p>
      </div>

      {/* RÉCAP */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>📚 Ce que tu as appris</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { num: "1", titre: "Introduction", desc: "Les bases du Price Action et pourquoi ca marche", color: "#2563eb" },
            { num: "2", titre: "Histoire", desc: "Munehisa Homma et l'origine des chandeliers japonais", color: "#d97706" },
            { num: "3", titre: "Chandeliers", desc: "Anatomie complete — corps, meches, haussier, baissier", color: "#7c3aed" },
            { num: "4", titre: "Patterns A+B", desc: "Engulfing, Doji, Morning Star, Hammer, Harami, Tweezers", color: "#0891b2" },
            { num: "5", titre: "Exercices", desc: "Identification et pratique des patterns", color: "#16a34a" },
            { num: "6", titre: "Structure", desc: "Uptrend, downtrend, range, support et resistance", color: "#dc2626" },
            { num: "7", titre: "Timeframes", desc: "Top Down Analysis — du grand au petit TF", color: "#9333ea" },
            { num: "8", titre: "Stratégies", desc: "Trend following, range trading, breakout", color: "#0284c7" },
            { num: "9", titre: "Pin Bar", desc: "Le pattern le plus puissant du Price Action", color: "#059669" },
            { num: "10", titre: "Tactiques", desc: "Pin Bar avec confluence — trendline, support, fibonacci", color: "#e11d48" },
            { num: "11", titre: "Pin Bar Avancé", desc: "Checklist complète et exemples de trades", color: "#f59e0b" },
            { num: "12", titre: "Engulfing", desc: "Toutes les façons de trader l'Engulfing", color: "#6366f1" },
            { num: "13", titre: "Inside Bar", desc: "Breakout, faux breakout et fibonacci", color: "#10b981" },
            { num: "14", titre: "Money Management", desc: "Règle 1%, RR, lot size et drawdown", color: "#ef4444" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "10px 15px", display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "12px", flexShrink: 0 }}>
                {item.num}
              </div>
              <div>
                <div style={{ color: "white", fontWeight: "bold", fontSize: "13px" }}>{item.titre}</div>
                <div style={{ color: "#64748b", fontSize: "11px" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCHAINES ÉTAPES */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #2563eb" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>🚀 Prochaines Étapes</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { etape: "1", action: "Pratique sur compte DEMO", desc: "Minimum 3 mois de trading demo rentable avant le reel", color: "#34d399" },
            { etape: "2", action: "Analyse 15 min par jour", desc: "Ouvre TradingView et identifie les patterns chaque matin", color: "#60a5fa" },
            { etape: "3", action: "Tiens un journal", desc: "Note chaque trade — analyse tes erreurs chaque semaine", color: "#fbbf24" },
            { etape: "4", action: "Backteste tes setups", desc: "Teste tes strategies sur l'historique — 100 trades minimum", color: "#a78bfa" },
            { etape: "5", action: "Passe au niveau Intermédiaire", desc: "BOS, CHoCH, Golden Zone, manipulation, confluence avancee", color: "#f87171" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "15px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: "35px", height: "35px", borderRadius: "10px", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#0f172a", fontWeight: "bold", fontSize: "16px", flexShrink: 0 }}>
                {item.etape}
              </div>
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px", marginBottom: "4px" }}>{item.action}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CITATION */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "25px", marginBottom: "20px", border: "1px solid #d97706", textAlign: "center" }}>
        <div style={{ fontSize: "30px", marginBottom: "15px" }}>💬</div>
        <p style={{ color: "#fcd34d", fontSize: "16px", lineHeight: "1.8", fontStyle: "italic", margin: 0 }}>
          "Le trading est un marathon, pas un sprint. La discipline, la patience
          et la gestion du risque font les traders rentables —
          pas les signaux ou les indicateurs."
        </p>
      </div>

      {/* BOUTONS NAVIGATION */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "25px" }}>
        <a href="/formation/intermediaire" style={{ textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "18px", background: "linear-gradient(to right, #2563eb, #7c3aed)", color: "white", border: "none", borderRadius: "12px", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
            🚀 Passer au Niveau Intermédiaire →
          </button>
        </a>
        <a href="/formation/debutant" style={{ textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            📚 Revoir les leçons Débutant
          </button>
        </a>
        <a href="/dashboard" style={{ textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            🏠 Retour au Dashboard
          </button>
        </a>
      </div>

    </div>
  );
}
