export default function Patterns() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>
      <div style={{ background: "linear-gradient(135deg, #0c4a6e, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #0891b2" }}>
        <a href="/formation/debutant" style={{ color: "#67e8f9", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>📊 Patterns — Partie 1</h1>
        <p style={{ color: "#67e8f9", margin: 0, fontSize: "14px" }}>Leçon 4A sur 15 — Engulfing, Doji, Morning Star</p>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Pourquoi apprendre les patterns ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Les patterns sont des <strong style={{ color: "white" }}>formations récurrentes</strong> sur les graphiques.
          Ils représentent des moments précis où la <strong style={{ color: "#fbbf24" }}>psychologie des traders change</strong> —
          et donc où le prix risque de changer de direction.
          Les reconnaître te donne un <strong style={{ color: "#34d399" }}>avantage énorme</strong> sur le marché.
        </p>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>🟢 1. Engulfing Bar</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          L'Engulfing est l'un des patterns les plus <strong style={{ color: "white" }}>puissants et fiables</strong>.
          La deuxième bougie <strong style={{ color: "#34d399" }}>avale complètement</strong> la première.
          Signal fort de retournement ou continuation.
        </p>
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #16a34a", textAlign: "center" }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Bullish</p>
            <svg viewBox="0 0 100 130" style={{ width: "80px", height: "110px" }}>
              <line x1="30" y1="15" x2="30" y2="25" stroke="#f87171" strokeWidth="2" />
              <rect x="20" y="25" width="20" height="50" fill="#f87171" rx="2" />
              <line x1="30" y1="75" x2="30" y2="85" stroke="#f87171" strokeWidth="2" />
              <line x1="65" y1="10" x2="65" y2="20" stroke="#34d399" strokeWidth="2" />
              <rect x="53" y="20" width="24" height="75" fill="#34d399" rx="2" />
              <line x1="65" y1="95" x2="65" y2="108" stroke="#34d399" strokeWidth="2" />
              <text x="10" y="125" fill="#f87171" fontSize="9">Baissiere</text>
              <text x="50" y="125" fill="#34d399" fontSize="9">Avale</text>
            </svg>
            <p style={{ color: "#34d399", fontSize: "12px", fontWeight: "bold" }}>Signal BUY</p>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #dc2626", textAlign: "center" }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Bearish</p>
            <svg viewBox="0 0 100 130" style={{ width: "80px", height: "110px" }}>
              <line x1="30" y1="15" x2="30" y2="25" stroke="#34d399" strokeWidth="2" />
              <rect x="20" y="25" width="20" height="50" fill="#34d399" rx="2" />
              <line x1="30" y1="75" x2="30" y2="85" stroke="#34d399" strokeWidth="2" />
              <line x1="65" y1="10" x2="65" y2="20" stroke="#f87171" strokeWidth="2" />
              <rect x="53" y="20" width="24" height="75" fill="#f87171" rx="2" />
              <line x1="65" y1="95" x2="65" y2="108" stroke="#f87171" strokeWidth="2" />
              <text x="10" y="125" fill="#34d399" fontSize="9">Haussiere</text>
              <text x="50" y="125" fill="#f87171" fontSize="9">Avale</text>
            </svg>
            <p style={{ color: "#f87171", fontSize: "12px", fontWeight: "bold" }}>Signal SELL</p>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #34d399" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            La 2eme bougie doit etre <strong style={{ color: "#34d399" }}>significativement plus grande</strong> que la 1ere. Attends la cloture !
          </p>
        </div>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #a78bfa" }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>2. Le Doji</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Corps quasi inexistant — ouverture et cloture presque identiques.
          <strong style={{ color: "#a78bfa" }}> Indecision parfaite</strong> entre acheteurs et vendeurs.
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
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { type: "Doji Standard", desc: "Indecision totale — egalite parfaite", color: "#a78bfa" },
            { type: "Dragonfly Doji", desc: "Meche basse longue — signal haussier", color: "#34d399" },
            { type: "Gravestone Doji", desc: "Meche haute longue — signal baissier", color: "#f87171" },
            { type: "Long-legged Doji", desc: "Meches extremes — explosion imminente", color: "#fbbf24" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "10px 15px", borderLeft: "4px solid " + item.color }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.type}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #fbbf24" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>3. Morning Star et Evening Star</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Patterns a <strong style={{ color: "white" }}>3 bougies</strong> tres puissants signalant un retournement majeur.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "10px" }}>
          <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Morning Star — BUY</p>
          <svg viewBox="0 0 280 120" style={{ width: "100%", maxWidth: "280px" }}>
            <rect x="35" y="25" width="30" height="70" fill="#f87171" rx="3" />
            <text x="30" y="110" fill="#f87171" fontSize="9">Baissiere</text>
            <rect x="120" y="90" width="20" height="10" fill="#fbbf24" rx="2" />
            <line x1="130" y1="80" x2="130" y2="90" stroke="#fbbf24" strokeWidth="2" />
            <line x1="130" y1="100" x2="130" y2="110" stroke="#fbbf24" strokeWidth="2" />
            <text x="112" y="118" fill="#fbbf24" fontSize="9">Etoile</text>
            <rect x="195" y="25" width="30" height="70" fill="#34d399" rx="3" />
            <text x="188" y="110" fill="#34d399" fontSize="9">Haussiere</text>
          </svg>
          <p style={{ color: "#34d399", fontSize: "13px", margin: "8px 0 0 0" }}>
            Grande baissiere + Petite etoile + Grande haussiere = <strong>BUY</strong>
          </p>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>Evening Star — SELL</p>
          <svg viewBox="0 0 280 120" style={{ width: "100%", maxWidth: "280px" }}>
            <rect x="35" y="25" width="30" height="70" fill="#34d399" rx="3" />
            <text x="30" y="110" fill="#34d399" fontSize="9">Haussiere</text>
            <rect x="120" y="20" width="20" height="10" fill="#fbbf24" rx="2" />
            <line x1="130" y1="10" x2="130" y2="20" stroke="#fbbf24" strokeWidth="2" />
            <line x1="130" y1="30" x2="130" y2="40" stroke="#fbbf24" strokeWidth="2" />
            <text x="112" y="55" fill="#fbbf24" fontSize="9">Etoile</text>
            <rect x="195" y="25" width="30" height="70" fill="#f87171" rx="3" />
            <text x="190" y="110" fill="#f87171" fontSize="9">Baissiere</text>
          </svg>
          <p style={{ color: "#f87171", fontSize: "13px", margin: "8px 0 0 0" }}>
            Grande haussiere + Petite etoile + Grande baissiere = <strong>SELL</strong>
          </p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/debutant/candlesticks" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Lecon 3
          </button>
        </a>
        <a href="/formation/debutant/patterns-b" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #0891b2, #16a34a)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Suite 4B
          </button>
        </a>
      </div>

    </div>
  );
}
