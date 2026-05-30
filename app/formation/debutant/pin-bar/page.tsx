export default function PinBar() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #064e3b, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #059669" }}>
        <a href="/formation/debutant" style={{ color: "#34d399", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>📌 Pin Bar Strategy</h1>
        <p style={{ color: "#34d399", margin: 0, fontSize: "14px" }}>Leçon 9 sur 15 — Le pattern le plus puissant du Price Action</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Qu'est-ce qu'un Pin Bar ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Le Pin Bar (Pinocchio Bar) est une bougie avec une
          <strong style={{ color: "white" }}> longue mèche</strong> et un
          <strong style={{ color: "#fbbf24" }}> petit corps</strong>. La longue mèche montre que le prix a
          fortement rejeté un niveau — comme le nez de Pinocchio qui grandit quand il ment.
          C'est un signal de <strong style={{ color: "#34d399" }}>retournement très fiable</strong> sur les zones clés.
        </p>
      </div>

      {/* ANATOMIE PIN BAR */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #2563eb" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>🔬 Anatomie du Pin Bar</h2>
        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
          {/* Bullish Pin Bar */}
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #16a34a", textAlign: "center" }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Bullish Pin Bar</p>
            <svg viewBox="0 0 80 180" style={{ width: "60px", height: "140px" }}>
              <line x1="40" y1="5" x2="40" y2="20" stroke="#34d399" strokeWidth="2" />
              <rect x="28" y="20" width="24" height="22" fill="#34d399" rx="3" />
              <line x1="40" y1="42" x2="40" y2="155" stroke="#34d399" strokeWidth="3" />
              <text x="2" y="15" fill="#60a5fa" fontSize="8">High</text>
              <text x="2" y="28" fill="#34d399" fontSize="8">Close</text>
              <text x="2" y="48" fill="#f87171" fontSize="8">Open</text>
              <text x="2" y="158" fill="#94a3b8" fontSize="8">Low</text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px", textAlign: "left" }}>
              <div style={{ color: "#34d399", fontSize: "11px" }}>✅ Longue meche basse</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>Corps dans le 1/3 haut</div>
              <div style={{ color: "#34d399", fontSize: "11px", fontWeight: "bold" }}>Signal : BUY</div>
            </div>
          </div>
          {/* Bearish Pin Bar */}
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #dc2626", textAlign: "center" }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Bearish Pin Bar</p>
            <svg viewBox="0 0 80 180" style={{ width: "60px", height: "140px" }}>
              <line x1="40" y1="5" x2="40" y2="120" stroke="#f87171" strokeWidth="3" />
              <rect x="28" y="120" width="24" height="22" fill="#f87171" rx="3" />
              <line x1="40" y1="142" x2="40" y2="158" stroke="#f87171" strokeWidth="2" />
              <text x="2" y="15" fill="#94a3b8" fontSize="8">High</text>
              <text x="2" y="118" fill="#f87171" fontSize="8">Open</text>
              <text x="2" y="135" fill="#34d399" fontSize="8">Close</text>
              <text x="2" y="158" fill="#94a3b8" fontSize="8">Low</text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px", textAlign: "left" }}>
              <div style={{ color: "#f87171", fontSize: "11px" }}>✅ Longue meche haute</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>Corps dans le 1/3 bas</div>
              <div style={{ color: "#f87171", fontSize: "11px", fontWeight: "bold" }}>Signal : SELL</div>
            </div>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #60a5fa" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle de base :</strong> La mèche doit faire
            <strong style={{ color: "#60a5fa" }}> au moins 2/3 de la bougie totale</strong>.
            Le corps doit être dans le tiers opposé à la mèche.
          </p>
        </div>
      </div>

      {/* TRADER AVEC LA TENDANCE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📈 Trader le Pin Bar avec la Tendance</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Le Pin Bar est <strong style={{ color: "white" }}>beaucoup plus fiable</strong> quand il apparait
          dans le sens de la tendance principale.
          Un Bullish Pin Bar en uptrend sur un HL = <strong style={{ color: "#34d399" }}>setup parfait</strong>.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="150" x2="300" y2="150" stroke="#334155" strokeWidth="1" />
            <polyline points="20,130 60,90 90,105 140,60" fill="none" stroke="#34d399" strokeWidth="2" />
            <line x1="140" y1="60" x2="140" y2="120" stroke="#34d399" strokeWidth="3" />
            <rect x="132" y="100" width="16" height="20" fill="#34d399" rx="2" />
            <text x="150" y="95" fill="#fbbf24" fontSize="10" fontWeight="bold">Pin Bar !</text>
            <polyline points="155,108 220,60 270,20" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <line x1="155" y1="120" x2="270" y2="120" stroke="#f87171" strokeWidth="1" strokeDasharray="4,2" />
            <line x1="155" y1="60" x2="270" y2="60" stroke="#34d399" strokeWidth="1" strokeDasharray="4,2" />
            <text x="215" y="135" fill="#f87171" fontSize="9">SL sous meche</text>
            <text x="220" y="55" fill="#34d399" fontSize="9">TP niveau suivant</text>
            <text x="160" y="108" fill="#34d399" fontSize="10" fontWeight="bold">BUY</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { etape: "1", text: "Confirme uptrend sur Daily — serie de HH et HL", color: "#34d399" },
            { etape: "2", text: "Prix revient sur un HL ou zone de support", color: "#60a5fa" },
            { etape: "3", text: "Bullish Pin Bar apparait sur cette zone", color: "#fbbf24" },
            { etape: "4", text: "Entre en BUY a la cloture du Pin Bar", color: "#34d399" },
            { etape: "5", text: "SL place juste sous la meche basse du Pin Bar", color: "#f87171" },
            { etape: "6", text: "TP au prochain HH — RR minimum 1:2", color: "#a78bfa" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "10px", alignItems: "center" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#0f172a", fontWeight: "bold", fontSize: "12px", flexShrink: 0 }}>
                {item.etape}
              </div>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PIN BAR EN RANGE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>↔️ Pin Bar en Marché Range</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          En marché range, le Pin Bar fonctionne très bien aux
          <strong style={{ color: "#fbbf24" }}> extremes du range</strong> — sur le support et la résistance.
          C'est l'un des setups les plus faciles pour un débutant.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "12px", borderTop: "3px solid #34d399" }}>
            <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", marginBottom: "6px" }}>Sur le Support</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.6" }}>
              Bullish Pin Bar sur support du range → BUY avec TP sur résistance
            </div>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "12px", borderTop: "3px solid #f87171" }}>
            <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "13px", marginBottom: "6px" }}>Sur la Résistance</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.6" }}>
              Bearish Pin Bar sur résistance du range → SELL avec TP sur support
            </div>
          </div>
        </div>
      </div>

      {/* QUALITÉ DU PIN BAR */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0284c7" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>⭐ Qualité d'un bon Pin Bar</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { critere: "Longue meche", desc: "Au moins 2/3 de la bougie totale — plus c'est long, mieux c'est", note: "★★★★★", color: "#fbbf24" },
            { critere: "Petit corps", desc: "Corps dans le tiers opposé — idealement tres petit", note: "★★★★★", color: "#fbbf24" },
            { critere: "Sur zone cle", desc: "Support, resistance, zone offre/demande, trendline", note: "★★★★★", color: "#34d399" },
            { critere: "Dans la tendance", desc: "Bullish Pin Bar en uptrend — Bearish Pin Bar en downtrend", note: "★★★★☆", color: "#34d399" },
            { critere: "Sur HTF", desc: "Pin Bar sur Daily ou H4 vaut beaucoup plus que sur M15", note: "★★★★☆", color: "#60a5fa" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.critere}</div>
                <div style={{ color: "#64748b", fontSize: "12px", marginTop: "2px" }}>{item.desc}</div>
              </div>
              <span style={{ color: "#fbbf24", fontSize: "13px" }}>{item.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ERREURS À ÉVITER */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #dc2626" }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>🚫 Erreurs à éviter</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Trader un Pin Bar contre la tendance principale — risque tres eleve",
            "Entrer avant la cloture complete de la bougie",
            "Ignorer le contexte — un Pin Bar au milieu du marche ne vaut rien",
            "Mettre le SL trop proche — laisser de l'espace sous/au-dessus de la meche",
            "Trader chaque Pin Bar que tu vois — sois selectif, qualite > quantite",
          ].map((err, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "10px" }}>
              <span style={{ color: "#f87171", flexShrink: 0 }}>✗</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{err}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES PRO */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Le meilleur Pin Bar est celui qui apparait sur une zone cle en confluence avec la tendance",
            "Attends toujours la cloture complete avant d'entrer — jamais en anticipation",
            "Un Pin Bar sur Daily ou Weekly est extremement puissant — prends-le serieusement",
            "Combine Pin Bar + Fibonacci Golden Zone pour les entrees les plus precises",
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
        <a href="/formation/debutant/strategies" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 8
          </button>
        </a>
        <a href="/formation/debutant/tactics" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #059669, #e11d48)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 10 →
          </button>
        </a>
      </div>

    </div>
  );
}
