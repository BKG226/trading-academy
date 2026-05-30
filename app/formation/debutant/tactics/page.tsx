export default function Tactics() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #4c0519, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #e11d48" }}>
        <a href="/formation/debutant" style={{ color: "#fb7185", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>⚡ Tactiques de Trading</h1>
        <p style={{ color: "#fb7185", margin: 0, fontSize: "14px" }}>Leçon 10 sur 15 — Pin Bar avec Confluence</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Qu'est-ce que la Confluence ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          La confluence c'est quand <strong style={{ color: "white" }}>plusieurs facteurs se rejoignent</strong> au même endroit
          pour confirmer un signal. Un Pin Bar seul c'est bien —
          un Pin Bar avec <strong style={{ color: "#fbbf24" }}>3 facteurs de confluence</strong> c'est
          un trade de très haute probabilité.
        </p>
      </div>

      {/* PIN BAR + TENDANCE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📈 1. Pin Bar + Tendance</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Le Pin Bar le plus simple et le plus fiable — il apparait
          <strong style={{ color: "#34d399" }}> dans le sens de la tendance</strong> sur un niveau de retracement.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <polyline points="20,130 70,90 100,108 150,65" fill="none" stroke="#34d399" strokeWidth="2" />
            <line x1="150" y1="65" x2="150" y2="125" stroke="#34d399" strokeWidth="3" />
            <rect x="142" y="105" width="16" height="20" fill="#34d399" rx="2" />
            <text x="158" y="95" fill="#fbbf24" fontSize="10" fontWeight="bold">Pin Bar</text>
            <polyline points="165,112 220,65 270,25" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <line x1="165" y1="128" x2="270" y2="128" stroke="#f87171" strokeWidth="1" strokeDasharray="4,2" />
            <text x="180" y="143" fill="#f87171" fontSize="9">SL sous meche</text>
            <text x="200" y="58" fill="#34d399" fontSize="10" fontWeight="bold">BUY ↑</text>
            <text x="25" y="148" fill="#34d399" fontSize="9">Uptrend confirme</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Confluence 1 : Tendance haussiere sur Daily",
            "Confluence 2 : Prix sur un HL (Higher Low)",
            "Confluence 3 : Bullish Pin Bar comme confirmation",
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "8px" }}>
              <span style={{ color: "#34d399", flexShrink: 0 }}>✅</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PIN BAR + SUPPORT/RESISTANCE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0891b2" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>📏 2. Pin Bar + Support et Résistance</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Quand un Pin Bar apparait exactement sur un
          <strong style={{ color: "#38bdf8" }}> niveau de support ou résistance</strong> — la confluence est puissante.
          Le marché a déjà réagi à ce niveau plusieurs fois.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 150" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="100" x2="300" y2="100" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="5" y="95" fill="#34d399" fontSize="9">Support</text>
            <polyline points="20,60 50,100 80,60 110,100" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
            <circle cx="50" cy="100" r="4" fill="#34d399" />
            <circle cx="110" cy="100" r="4" fill="#34d399" />
            <line x1="160" y1="100" x2="160" y2="140" stroke="#34d399" strokeWidth="3" />
            <rect x="152" y="92" width="16" height="12" fill="#34d399" rx="2" />
            <text x="170" y="88" fill="#fbbf24" fontSize="10" fontWeight="bold">Pin Bar !</text>
            <polyline points="176,97 220,60 270,20" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="220" y="40" fill="#34d399" fontSize="10" fontWeight="bold">BUY ↑</text>
          </svg>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #38bdf8" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            💡 <strong style={{ color: "white" }}>Plus le support a ete teste de fois</strong>, plus le Pin Bar
            dessus est fiable — le marché connait et respecte ce niveau.
          </p>
        </div>
      </div>

      {/* PIN BAR + FIBONACCI */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 3. Pin Bar + Fibonacci Golden Zone</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          C'est le combo le plus puissant. Un Pin Bar qui apparait exactement dans la
          <strong style={{ color: "#fbbf24" }}> Golden Zone 0.50-0.618</strong> en tendance =
          setup de très haute probabilité.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 200" style={{ width: "100%", maxWidth: "300px" }}>
            <rect x="0" y="90" width="300" height="35" fill="#d97706" fillOpacity="0.15" />
            <line x1="0" y1="175" x2="300" y2="175" stroke="#334155" strokeWidth="1" />
            <line x1="0" y1="125" x2="300" y2="125" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="0" y1="90" x2="300" y2="90" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeWidth="1" />
            <text x="5" y="122" fill="#fbbf24" fontSize="9">0.500</text>
            <text x="5" y="88" fill="#fbbf24" fontSize="9">0.618</text>
            <text x="100" y="115" fill="#fbbf24" fontSize="10" fontWeight="bold">GOLDEN ZONE</text>
            <polyline points="30,175 100,20" fill="none" stroke="#34d399" strokeWidth="2" />
            <polyline points="100,20 150,105" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="150" y1="105" x2="150" y2="145" stroke="#34d399" strokeWidth="3" />
            <rect x="142" y="97" width="16" height="12" fill="#34d399" rx="2" />
            <text x="158" y="92" fill="#fbbf24" fontSize="10">Pin Bar !</text>
            <polyline points="165,102 220,55 270,15" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="220" y="35" fill="#34d399" fontSize="11" fontWeight="bold">BUY ↑</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Trace Fibonacci du dernier bas vers le dernier haut en uptrend",
            "Attends que le prix revienne dans la Golden Zone 0.50-0.618",
            "Cherche un Bullish Pin Bar dans cette zone",
            "Entre en BUY a la cloture — SL sous la meche — TP au nouveau HH",
          ].map((step, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "10px" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "12px", flexShrink: 0 }}>
                {i + 1}
              </div>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PIN BAR + TRENDLINE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #9333ea" }}>
        <h2 style={{ color: "#c084fc", fontSize: "18px", marginTop: 0 }}>📐 4. Pin Bar + Trendline</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Quand le prix revient sur une <strong style={{ color: "#c084fc" }}>trendline solide</strong> et forme un Pin Bar
          dessus — c'est un signal de rebond très fiable dans la direction de la tendance.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="10" y1="145" x2="290" y2="25" stroke="#c084fc" strokeWidth="2" strokeDasharray="6,3" />
            <text x="5" y="155" fill="#c084fc" fontSize="9">Trendline</text>
            <polyline points="20,140 70,100 100,118 150,80 175,95" fill="none" stroke="#34d399" strokeWidth="2" />
            <line x1="175" y1="95" x2="175" y2="128" stroke="#34d399" strokeWidth="3" />
            <rect x="167" y="87" width="16" height="12" fill="#34d399" rx="2" />
            <text x="183" y="83" fill="#fbbf24" fontSize="10">Pin Bar !</text>
            <polyline points="190,92 240,55 280,20" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="235" y="40" fill="#34d399" fontSize="10" fontWeight="bold">BUY ↑</text>
          </svg>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #c084fc" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            💡 <strong style={{ color: "white" }}>Astuce :</strong> Plus la trendline a de
            <strong style={{ color: "#c084fc" }}> points de contact</strong>, plus le Pin Bar dessus est fiable.
            Une trendline touchee 3+ fois est tres solide.
          </p>
        </div>
      </div>

      {/* EXEMPLES DE TRADES */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #2563eb" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>📊 Exemples de Trades Pin Bar</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            {
              titre: "Trade 1 — EURUSD Daily",
              desc: "Uptrend clair + Prix sur zone de demande H4 + Bullish Pin Bar Daily",
              result: "RR 1:3 — Gagnant",
              confluences: ["Tendance haussiere Daily", "Zone de demande H4", "Pin Bar Daily"],
              color: "#34d399",
            },
            {
              titre: "Trade 2 — XAUUSD H4",
              desc: "Downtrend H4 + Prix sur resistance + Bearish Pin Bar H4",
              result: "RR 1:2 — Gagnant",
              confluences: ["Tendance baissiere H4", "Resistance cle", "Pin Bar H4"],
              color: "#f87171",
            },
            {
              titre: "Trade 3 — GBPUSD H1",
              desc: "Range + Support + Bullish Pin Bar H1 — sans confluence tendance",
              result: "Perte — Mauvais setup",
              confluences: ["Pas de tendance claire", "Support present", "Pin Bar present"],
              color: "#fbbf24",
            },
          ].map((trade, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #334155" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>{trade.titre}</span>
                <span style={{ color: trade.color, fontSize: "12px", fontWeight: "bold" }}>{trade.result}</span>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "12px", margin: "0 0 8px 0" }}>{trade.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {trade.confluences.map((c, j) => (
                  <span key={j} style={{ background: "#1e293b", color: trade.color, padding: "3px 8px", borderRadius: "6px", fontSize: "11px" }}>{c}</span>
                ))}
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
            "Plus tu as de confluences, plus ton trade est fiable — vise minimum 3",
            "Pin Bar + Tendance + Zone cle = le setup de base du trader professionnel",
            "Backteste ces setups sur 50 trades avant de trader en reel",
            "Un seul bon trade par semaine avec 3 confluences vaut mieux que 10 trades mediocres",
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
        <a href="/formation/debutant/pin-bar" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 9
          </button>
        </a>
        <a href="/formation/debutant/pinbar-confluence" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #e11d48, #f59e0b)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 11 →
          </button>
        </a>
      </div>

    </div>
  );
}
