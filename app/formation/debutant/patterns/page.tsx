export default function Patterns() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #0c4a6e, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #0891b2" }}>
        <a href="/formation/debutant" style={{ color: "#67e8f9", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>📊 Patterns de Chandeliers — Partie 1</h1>
        <p style={{ color: "#67e8f9", margin: 0, fontSize: "14px" }}>Leçon 4A sur 15 — Engulfing, Doji, Morning Star</p>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Pourquoi apprendre les patterns ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Les patterns sont des <strong style={{ color: "white" }}>formations récurrentes</strong> sur les graphiques. Ils représentent des moments précis où la
          <strong style={{ color: "#fbbf24" }}> psychologie des traders change</strong> — et donc où le prix risque de changer de direction.
          Les reconnaître te donne un <strong style={{ color: "#34d399" }}>avantage énorme</strong> sur le marché.
        </p>
      </div>

      {/* ENGULFING */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>🟢 1. Engulfing Bar</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          L'Engulfing est l'un des patterns les plus <strong style={{ color: "white" }}>puissants et fiables</strong>.
          La deuxième bougie <strong style={{ color: "#34d399" }}>avale complètement</strong> la première — corps et mèches.
          C'est un signal fort de retournement ou de continuation.
        </p>
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #16a34a", textAlign: "center" }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Bullish 📈</p>
            <svg viewBox="0 0 100 130" style={{ width: "80px", height: "110px" }}>
              <line x1="30" y1="15" x2="30" y2="25" stroke="#f87171" strokeWidth="2" />
              <rect x="20" y="25" width="20" height="50" fill="#f87171" rx="2" />
              <line x1="30" y1="75" x2="30" y2="85" stroke="#f87171" strokeWidth="2" />
              <line x1="65" y1="10" x2="65" y2="20" stroke="#34d399" strokeWidth="2" />
              <rect x="53" y="20" width="24" height="75" fill="#34d399" rx="2" />
              <line x1="65" y1="95" x2="65" y2="108" stroke="#34d399" strokeWidth="2" />
              <text x="10" y="125" fill="#f87171" fontSize="9">Baissière</text>
              <text x="50" y="125" fill="#34d399" fontSize="9">Avale</text>
            </svg>
            <p style={{ color: "#34d399", fontSize: "12px", fontWeight: "bold" }}>Signal BUY 🔥</p>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #dc2626", textAlign: "center" }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Bearish 📉</p>
            <svg viewBox="0 0 100 130" style={{ width: "80px", height: "110px" }}>
              <line x1="30" y1="15" x2="30" y2="25" stroke="#34d399" strokeWidth="2" />
              <rect x="20" y="25" width="20" height="50" fill="#34d399" rx="2" />
              <line x1="30" y1="75" x2="30" y2="85" stroke="#34d399" strokeWidth="2" />
              <line x1="65" y1="10" x2="65" y2="20" stroke="#f87171" strokeWidth="2" />
              <rect x="53" y="20" width="24" height="75" fill="#f87171" rx="2" />
              <line x1="65" y1="95" x2="65" y2="108" stroke="#f87171" strokeWidth="2" />
              <text x="10" y="125" fill="#34d399" fontSize="9">Haussière</text>
              <text x="50" y="125" fill="#f87171" fontSize="9">Avale</text>
            </svg>
            <p style={{ color: "#f87171", fontSize: "12px", fontWeight: "bold" }}>Signal SELL 🔥</p>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #34d399" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> La 2ème bougie doit être
            <strong style={{ color: "#34d399" }}> significativement plus grande</strong> que la 1ère. Attends toujours la clôture complète !
          </p>
        </div>
      </div>

      {/* DOJI */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #a78bfa" }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>➕ 2. Le Doji — L'Indécision</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Le Doji a un <strong style={{ color: "white" }}>corps quasi inexistant</strong> — ouverture et clôture presque identiques.
          Il représente une <strong style={{ color: "#a78bfa" }}>parfaite indécision</strong> entre acheteurs et vendeurs.
          Sur une zone clé, c'est un signal de retournement potentiel.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 130" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="50" y1="15" x2="50" y2="110" stroke="#a78bfa" strokeWidth="2.5" />
            <rect x="43" y="58" width="14" height="5" fill="#a78bfa" />
            <text x="25" y="125" fill="#a78bfa" fontSize="10">Standard</text>
            <line x1="130" y1="20" x2="130" y2="100" stroke="#34d399" strokeWidth="2.5" />
            <rect x="123" y="20" width="14" height="6" fill="#34d399" />
            <text x="105" y="125" fill="#34d399" fontSize="10">Dragonfly</text>
            <line x1="210" y1="20" x2="210" y2="100" stroke="#f87171" strokeWidth="2.5" />
            <rect x="203" y="94" width="14" height="6" fill="#f87171" />
            <text x="185" y="125" fill="#f87171" fontSize="10">Gravestone</text>
            <line x1="270" y1="10" x2="270" y2="115" stroke="#fbbf24" strokeWidth="2.5" />
            <rect x="263" y="58" width="14" height="5" fill="#fbbf24" />
            <text x="250" y="125" fill="#fbbf24" fontSize="9">Long-leg</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { type: "Doji Standard", desc: "Indécision totale — acheteurs et vendeurs à égalité parfaite", color: "#a78bfa" },
            { type: "Dragonfly Doji 🐉", desc: "Longue mèche basse → rejet fort du bas → signal haussier potentiel", color: "#34d399" },
            { type: "Gravestone Doji 🪦", desc: "Longue mèche haute → rejet fort du haut → signal baissier potentiel", color: "#f87171" },
            { type: "Long-legged Doji", desc: "Mèches longues des deux côtés → indécision extrême → explosion imminente", color: "#fbbf24" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid " + item.color }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.type}</div>
              <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MORNING STAR */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #fbbf24" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ 3. Morning Star & Evening Star</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Patterns à <strong style={{ color: "white" }}>3 bougies</strong> très puissants. Le Morning Star signale une
          <strong style={{ color: "#34d399" }}> fin de baisse</strong>, l'Evening Star signale une
          <strong style={{ color: "#f87171" }}> fin de hausse</strong>.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "10px" }}>
          <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>🌅 Morning Star — Signal BUY</p>
          <svg viewBox="0 0 280 120" style={{ width: "100%", maxWidth: "280px" }}>
            <rect x="35" y="25" width="30" height="70" fill="#f87171" rx="3" />
            <text x="30" y="110" fill="#f87171" fontSize="9">Baissière</text>
            <rect x="120" y="90" width="20" height="10" fill="#fbbf24" rx="2" />
            <line x1="130" y1="80" x2="130" y2="90" stroke="#fbbf24" strokeWidth="2" />
            <line x1="130" y1="100" x2="130" y2="110" stroke="#fbbf24" strokeWidth="2" />
            <text x="112" y="118" fill="#fbbf24" fontSize="9">Etoile ⭐</text>
            <rect x="195" y="25" width="30" height="70" fill="#34d399" rx="3" />
            <text x="188" y="110" fill="#34d399" fontSize="9">Haussière</text>
          </svg>
          <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", marginTop: "10px", borderLeft: "3px solid #34d399" }}>
            <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
              Grande baissière → Petite indécision → Grande haussière = <strong style={{ color: "#34d399" }}>BUY !</strong>
            </p>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>🌆 Evening Star — Signal SELL</p>
          <svg viewBox="0 0 280 120" style={{ width: "100%", maxWidth: "280px" }}>
            <rect x="35" y="25" width="30" height="70" fill="#34d399" rx="3" />
            <text x="30" y="110" fill="#34d399" fontSize="9">Haussière</text>
            <rect x="120" y="20" width="20" height="10" fill="#fbbf24" rx="2" />
            <line x1="130" y1="10" x2="130" y2="20" stroke="#fbbf24" strokeWidth="2" />
            <line x1="130" y1="30" x2="130" y2="40" stroke="#fbbf24" strokeWidth="2" />
            <text x="112" y="55" fill="#fbbf24" fontSize="9">Etoile ⭐</text>
            <rect x="195" y="25" width="30" height="70" fill="#f87171" rx="3" />
            <text x="190" y="110" fill="#f87171" fontSize="9">Baissière</text>
          </svg>
          <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", marginTop: "10px", borderLeft: "3px solid #f87171" }}>
            <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
              Grande haussière → Petite indécision → Grande baissière = <strong style={{ color: "#f87171" }}>SELL !</strong>
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/debutant/candlesticks" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 3
          </button>
        </a>
        <a href="/formation/debutant/patterns-b" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #0891b2, #16a34a)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Suite 4B →
          </button>
        </a>
      </div>

    </div>
  );
}
