export default function MarketStructure() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #7f1d1d, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #dc2626" }}>
        <a href="/formation/debutant" style={{ color: "#f87171", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>🏗️ Structure du Marché</h1>
        <p style={{ color: "#f87171", margin: 0, fontSize: "14px" }}>Leçon 6 sur 15 — Tendances, Support et Resistance</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Qu'est-ce que la structure du marché ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          La structure du marché c'est la <strong style={{ color: "white" }}>façon dont le prix se déplace</strong> dans le temps.
          Comprendre la structure te permet de savoir <strong style={{ color: "#fbbf24" }}>où tu te trouves</strong> sur le graphique
          et dans quelle direction chercher tes trades.
        </p>
      </div>

      {/* TENDANCE HAUSSIÈRE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📈 1. Marché Haussier (Uptrend)</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Un marché haussier fait des <strong style={{ color: "#34d399" }}>sommets de plus en plus hauts (HH)</strong> et
          des <strong style={{ color: "#86efac" }}>creux de plus en plus hauts (HL)</strong>.
          En uptrend tu cherches <strong style={{ color: "white" }}>uniquement des BUY</strong> sur les HL.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 150" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="140" x2="300" y2="140" stroke="#334155" strokeWidth="1" />
            <polyline points="20,120 70,80 100,95 160,45 190,62 260,15" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <circle cx="70" cy="80" r="5" fill="#fbbf24" />
            <circle cx="100" cy="95" r="5" fill="#60a5fa" />
            <circle cx="160" cy="45" r="5" fill="#fbbf24" />
            <circle cx="190" cy="62" r="5" fill="#60a5fa" />
            <circle cx="260" cy="15" r="5" fill="#fbbf24" />
            <text x="62" y="72" fill="#fbbf24" fontSize="10">HH</text>
            <text x="92" y="112" fill="#60a5fa" fontSize="10">HL</text>
            <text x="152" y="37" fill="#fbbf24" fontSize="10">HH</text>
            <text x="182" y="78" fill="#60a5fa" fontSize="10">HL</text>
            <text x="252" y="10" fill="#fbbf24" fontSize="10">HH</text>
            <text x="100" y="135" fill="#34d399" fontSize="11" fontWeight="bold">UPTREND - Cherche BUY sur HL</text>
          </svg>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #34d399" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> En uptrend tu n'achètes que sur les
            <strong style={{ color: "#34d399" }}> HL (Higher Lows)</strong> — jamais en poursuite d'une bougie haussière déjà avancée.
          </p>
        </div>
      </div>

      {/* TENDANCE BAISSIÈRE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #dc2626" }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>📉 2. Marché Baissier (Downtrend)</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Un marché baissier fait des <strong style={{ color: "#f87171" }}>creux de plus en plus bas (LL)</strong> et
          des <strong style={{ color: "#fca5a5" }}>sommets de plus en plus bas (LH)</strong>.
          En downtrend tu cherches <strong style={{ color: "white" }}>uniquement des SELL</strong> sur les LH.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 150" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="140" x2="300" y2="140" stroke="#334155" strokeWidth="1" />
            <polyline points="20,20 70,65 100,45 160,95 190,75 260,125" fill="none" stroke="#f87171" strokeWidth="2.5" />
            <circle cx="70" cy="65" r="5" fill="#fbbf24" />
            <circle cx="100" cy="45" r="5" fill="#60a5fa" />
            <circle cx="160" cy="95" r="5" fill="#fbbf24" />
            <circle cx="190" cy="75" r="5" fill="#60a5fa" />
            <circle cx="260" cy="125" r="5" fill="#fbbf24" />
            <text x="62" y="82" fill="#fbbf24" fontSize="10">LL</text>
            <text x="92" y="38" fill="#60a5fa" fontSize="10">LH</text>
            <text x="152" y="112" fill="#fbbf24" fontSize="10">LL</text>
            <text x="182" y="68" fill="#60a5fa" fontSize="10">LH</text>
            <text x="252" y="138" fill="#fbbf24" fontSize="10">LL</text>
            <text x="95" y="135" fill="#f87171" fontSize="11" fontWeight="bold">DOWNTREND - Cherche SELL sur LH</text>
          </svg>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #f87171" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> En downtrend tu vends uniquement sur les
            <strong style={{ color: "#f87171" }}> LH (Lower Highs)</strong> — jamais en poursuite d'une bougie baissière déjà avancée.
          </p>
        </div>
      </div>

      {/* SUPPORT ET RÉSISTANCE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0891b2" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>📏 3. Support et Résistance</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Ce sont des <strong style={{ color: "white" }}>niveaux de prix importants</strong> où le marché a réagi plusieurs fois.
          Le support est un plancher — le prix rebondit vers le haut.
          La résistance est un plafond — le prix rebondit vers le bas.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 170" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Résistance */}
            <line x1="0" y1="40" x2="300" y2="40" stroke="#f87171" strokeWidth="2" strokeDasharray="6,3" />
            <text x="5" y="35" fill="#f87171" fontSize="10">RESISTANCE</text>
            {/* Support */}
            <line x1="0" y1="130" x2="300" y2="130" stroke="#34d399" strokeWidth="2" strokeDasharray="6,3" />
            <text x="5" y="148" fill="#34d399" fontSize="10">SUPPORT</text>
            {/* Prix qui rebondit */}
            <polyline points="20,85 60,40 90,85 130,130 170,85 210,40 250,85 280,130"
              fill="none" stroke="#60a5fa" strokeWidth="2" />
            {/* Points de contact */}
            <circle cx="60" cy="40" r="4" fill="#f87171" />
            <circle cx="130" cy="130" r="4" fill="#34d399" />
            <circle cx="210" cy="40" r="4" fill="#f87171" />
            <circle cx="280" cy="130" r="4" fill="#34d399" />
          </svg>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "12px", borderTop: "3px solid #34d399" }}>
            <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Support</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.5" }}>Zone ou le prix rebondit vers le haut. Les acheteurs sont forts ici. Signal BUY.</div>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "12px", borderTop: "3px solid #f87171" }}>
            <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Résistance</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.5" }}>Zone ou le prix rebondit vers le bas. Les vendeurs sont forts ici. Signal SELL.</div>
          </div>
        </div>
      </div>

      {/* TRENDLINES */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #9333ea" }}>
        <h2 style={{ color: "#c084fc", fontSize: "18px", marginTop: 0 }}>📐 4. Comment Tracer les Trendlines</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Une trendline est une <strong style={{ color: "white" }}>ligne droite</strong> tracée sur les sommets ou les creux
          pour visualiser la direction de la tendance. Elle agit comme un
          <strong style={{ color: "#c084fc" }}> support ou résistance dynamique</strong>.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Trendline haussière */}
            <line x1="20" y1="140" x2="280" y2="30" stroke="#34d399" strokeWidth="2" strokeDasharray="6,3" />
            <text x="5" y="155" fill="#34d399" fontSize="10">Trendline Haussiere</text>
            {/* Prix qui suit la trendline */}
            <polyline points="20,140 60,110 80,120 130,85 150,95 200,60 220,70 270,35"
              fill="none" stroke="#60a5fa" strokeWidth="2" />
            {/* Points de contact */}
            <circle cx="20" cy="140" r="4" fill="#34d399" />
            <circle cx="80" cy="120" r="4" fill="#34d399" />
            <circle cx="150" cy="95" r="4" fill="#34d399" />
            <circle cx="220" cy="70" r="4" fill="#34d399" />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "En uptrend : trace la ligne sous les creux (HL) — minimum 2 points de contact",
            "En downtrend : trace la ligne au-dessus des sommets (LH)",
            "Plus il y a de points de contact, plus la trendline est forte",
            "Quand le prix casse une trendline → possible changement de tendance",
          ].map((rule, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "8px" }}>
              <span style={{ color: "#c084fc", flexShrink: 0 }}>→</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RANGE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>↔️ 5. Le Marché en Range</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Quand le marché n'est <strong style={{ color: "white" }}>ni en uptrend ni en downtrend</strong> — il est en
          <strong style={{ color: "#fbbf24" }}> range (consolidation)</strong>. Le prix oscille entre un support et une résistance.
          C'est une zone de <strong style={{ color: "white" }}>patience</strong> — attends la cassure.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 150" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="40" x2="300" y2="40" stroke="#f87171" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="0" y1="110" x2="300" y2="110" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="240" y="35" fill="#f87171" fontSize="9">Resistance</text>
            <text x="248" y="125" fill="#34d399" fontSize="9">Support</text>
            <polyline points="20,75 50,40 80,75 110,110 140,75 170,40 200,75 230,110 260,75"
              fill="none" stroke="#60a5fa" strokeWidth="2" />
            <text x="85" y="145" fill="#fbbf24" fontSize="11" fontWeight="bold">RANGE - Attends la cassure</text>
          </svg>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "12px", borderTop: "3px solid #34d399" }}>
            <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", marginBottom: "4px" }}>Achete sur Support</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>BUY quand le prix touche le bas du range avec confirmation</div>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "12px", borderTop: "3px solid #f87171" }}>
            <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "13px", marginBottom: "4px" }}>Vends sur Résistance</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>SELL quand le prix touche le haut du range avec confirmation</div>
          </div>
        </div>
      </div>

      {/* RÈGLES PRO */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Identifie toujours la structure AVANT de chercher un trade",
            "Ne trade jamais contre la tendance principale — va toujours dans son sens",
            "Si la structure n'est pas claire → pas de trade, tu attends",
            "Les niveaux de support et résistance les plus anciens sont les plus forts",
            "Une résistance cassée devient un support et vice-versa",
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
        <a href="/formation/debutant/exercices" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 5
          </button>
        </a>
        <a href="/formation/debutant/timeframes" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #dc2626, #9333ea)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 7 →
          </button>
        </a>
      </div>

    </div>
  );
}
