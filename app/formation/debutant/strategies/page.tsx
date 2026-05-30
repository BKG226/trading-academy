export default function Strategies() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #0c4a6e, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #0284c7" }}>
        <a href="/formation/debutant" style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>🎯 Stratégies de Trading</h1>
        <p style={{ color: "#38bdf8", margin: 0, fontSize: "14px" }}>Leçon 8 sur 15 — Les stratégies Price Action de base</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Qu'est-ce qu'une stratégie ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Une stratégie de trading c'est un <strong style={{ color: "white" }}>ensemble de règles précises</strong> qui définissent
          quand entrer, quand sortir et combien risquer. Sans stratégie claire tu
          <strong style={{ color: "#f87171" }}> trades par emotion</strong> — ce qui mène toujours à des pertes.
          Une bonne stratégie te donne un <strong style={{ color: "#34d399" }}>avantage statistique</strong> sur le marché.
        </p>
      </div>

      {/* STRATÉGIE 1 */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📈 Stratégie 1 — Trend Following</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          La stratégie la plus simple et la plus efficace pour un débutant.
          Tu trades <strong style={{ color: "white" }}>dans le sens de la tendance</strong> — achète en uptrend,
          vends en downtrend. Jamais contre le marché.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px" }}>
          <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Règles d'entrée BUY :</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Daily en uptrend — serie de HH et HL confirmée",
              "Prix revient sur un HL ou une zone de support",
              "Pattern de confirmation sur H4 ou H1 (engulfing, pin bar)",
              "Entre en BUY avec SL sous le HL",
              "TP au prochain HH ou RR minimum 1:2",
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "12px", flexShrink: 0 }}>
                  {i + 1}
                </div>
                <span style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5" }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Règles d'entrée SELL :</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Daily en downtrend — serie de LL et LH confirmée",
              "Prix remonte sur un LH ou une zone de résistance",
              "Pattern de confirmation sur H4 ou H1",
              "Entre en SELL avec SL au-dessus du LH",
              "TP au prochain LL ou RR minimum 1:2",
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "12px", flexShrink: 0 }}>
                  {i + 1}
                </div>
                <span style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5" }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STRATÉGIE 2 */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>↔️ Stratégie 2 — Range Trading</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Quand le marché est en range tu trades les
          <strong style={{ color: "#fbbf24" }}> rebonds entre support et résistance</strong>.
          C'est une stratégie efficace mais qui demande de la discipline.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 140" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="30" x2="300" y2="30" stroke="#f87171" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="0" y1="110" x2="300" y2="110" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="230" y="25" fill="#f87171" fontSize="9">Résistance</text>
            <text x="240" y="125" fill="#34d399" fontSize="9">Support</text>
            <polyline points="20,70 50,30 80,70 110,110 140,70 170,30 200,70 230,110 260,70"
              fill="none" stroke="#60a5fa" strokeWidth="2" />
            <text x="40" y="20" fill="#f87171" fontSize="9">SELL</text>
            <text x="100" y="135" fill="#34d399" fontSize="9">BUY</text>
            <text x="160" y="20" fill="#f87171" fontSize="9">SELL</text>
            <text x="220" y="135" fill="#34d399" fontSize="9">BUY</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { regle: "BUY sur Support", desc: "Prix touche le support + pattern de confirmation → BUY avec TP sur résistance", color: "#34d399" },
            { regle: "SELL sur Résistance", desc: "Prix touche la résistance + pattern de confirmation → SELL avec TP sur support", color: "#f87171" },
            { regle: "Stop Loss serré", desc: "SL juste sous le support (BUY) ou au-dessus de la résistance (SELL)", color: "#fbbf24" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid " + item.color }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.regle}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STRATÉGIE 3 */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #7c3aed" }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>🔄 Stratégie 3 — Breakout Trading</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Quand le prix <strong style={{ color: "white" }}>casse un niveau clé</strong> (support, résistance, trendline)
          avec force — c'est un signal de continuation puissante dans la direction de la cassure.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 150" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="80" x2="200" y2="80" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="5" y="75" fill="#fbbf24" fontSize="9">Résistance</text>
            <polyline points="20,120 60,100 100,85 140,82 170,80"
              fill="none" stroke="#60a5fa" strokeWidth="2" />
            <polyline points="170,80 200,60 240,30 280,10"
              fill="none" stroke="#34d399" strokeWidth="3" />
            <circle cx="185" cy="68" r="6" fill="#34d399" stroke="#fbbf24" strokeWidth="2" />
            <text x="190" y="55" fill="#34d399" fontSize="10" fontWeight="bold">BREAKOUT !</text>
            <text x="220" y="25" fill="#34d399" fontSize="11" fontWeight="bold">BUY ↑</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Attends la clôture de bougie AU-DESSUS de la résistance (pas juste une mèche)",
            "Entre sur le retest du niveau cassé — la résistance devient support",
            "SL sous le niveau cassé — TP au prochain niveau majeur",
            "Faux breakout fréquents — le retest confirme la vraie cassure",
          ].map((rule, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "8px" }}>
              <span style={{ color: "#a78bfa", flexShrink: 0 }}>→</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* GESTION DU TRADE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0891b2" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>🛡️ Gestion du Trade</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Entrer c'est facile — <strong style={{ color: "white" }}>gérer le trade correctement</strong> c'est ce qui
          différencie les traders rentables des autres.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { action: "Stop Loss", desc: "Toujours placé AVANT d'entrer — jamais sans SL. Protège ton capital.", color: "#f87171", icon: "🛑" },
            { action: "Take Profit", desc: "Fixé à l'avance sur le prochain niveau majeur. RR minimum 1:2.", color: "#34d399", icon: "🎯" },
            { action: "Break Even", desc: "Quand le prix fait 1R de profit, déplace le SL au point d'entrée.", color: "#fbbf24", icon: "⚖️" },
            { action: "Partial Close", desc: "Ferme 50% à 1R de profit — laisse le reste courir vers le TP final.", color: "#a78bfa", icon: "✂️" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "12px", alignItems: "flex-start", borderLeft: "4px solid " + item.color }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.action}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "3px", lineHeight: "1.5" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES PRO */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Choisis UNE stratégie et maitrise-la parfaitement avant d'en apprendre une autre",
            "Backteste ta stratégie sur 100 trades minimum avant de trader en réel",
            "Une stratégie avec 50% de winrate et RR 1:2 est très rentable long terme",
            "La discipline à suivre ses règles est plus importante que la stratégie elle-même",
            "Tiens un journal de trading — analyse chaque trade gagné et perdu",
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
        <a href="/formation/debutant/timeframes" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 7
          </button>
        </a>
        <a href="/formation/debutant/pin-bar" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #0284c7, #059669)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 9 →
          </button>
        </a>
      </div>

    </div>
  );
}
