export default function PatternsB() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #0c4a6e, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #0891b2" }}>
        <a href="/formation/debutant/patterns" style={{ color: "#67e8f9", fontSize: "14px", textDecoration: "none" }}>← Retour 4A</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>📊 Patterns de Chandeliers — Partie 2</h1>
        <p style={{ color: "#67e8f9", margin: 0, fontSize: "14px" }}>Leçon 4B sur 15 — Hammer, Harami, Tweezers</p>
      </div>

      {/* HAMMER */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0284c7" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>🔨 4. Hammer & Shooting Star</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Bougies à <strong style={{ color: "white" }}>une seule longue mèche</strong> montrant un rejet fort d'un niveau de prix.
          Ils apparaissent aux extrêmes du marché et signalent un <strong style={{ color: "#38bdf8" }}>retournement imminent</strong>.
        </p>
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #34d399", textAlign: "center" }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>🔨 Hammer</p>
            <svg viewBox="0 0 60 130" style={{ width: "50px", height: "100px" }}>
              <line x1="30" y1="10" x2="30" y2="25" stroke="#34d399" strokeWidth="2" />
              <rect x="18" y="25" width="24" height="25" fill="#34d399" rx="3" />
              <line x1="30" y1="50" x2="30" y2="110" stroke="#34d399" strokeWidth="2.5" />
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px" }}>Longue mèche basse</p>
            <p style={{ color: "#34d399", fontSize: "12px", fontWeight: "bold" }}>Signal BUY ↑</p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>Après une baisse</p>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #dc2626", textAlign: "center" }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>🌠 Shooting Star</p>
            <svg viewBox="0 0 60 130" style={{ width: "50px", height: "100px" }}>
              <line x1="30" y1="10" x2="30" y2="70" stroke="#f87171" strokeWidth="2.5" />
              <rect x="18" y="70" width="24" height="25" fill="#f87171" rx="3" />
              <line x1="30" y1="95" x2="30" y2="110" stroke="#f87171" strokeWidth="2" />
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px" }}>Longue mèche haute</p>
            <p style={{ color: "#f87171", fontSize: "12px", fontWeight: "bold" }}>Signal SELL ↓</p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>Après une hausse</p>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #38bdf8" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> La mèche doit faire
            <strong style={{ color: "#38bdf8" }}> au moins 2x la taille du corps</strong>. Plus la mèche est longue, plus le rejet est fort.
          </p>
        </div>
      </div>

      {/* HARAMI */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🤰 5. Le Harami</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Harami signifie <strong style={{ color: "white" }}>"enceinte"</strong> en japonais.
          La 2ème bougie est <strong style={{ color: "#fbbf24" }}>complètement contenue</strong> dans le corps de la 1ère.
          Signal d'affaiblissement de la tendance et retournement possible.
        </p>
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #34d399", textAlign: "center" }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>Bullish Harami</p>
            <svg viewBox="0 0 80 110" style={{ width: "70px", height: "90px" }}>
              <rect x="15" y="10" width="28" height="75" fill="#f87171" rx="3" />
              <rect x="22" y="28" width="14" height="28" fill="#34d399" rx="2" />
              <text x="5" y="100" fill="#f87171" fontSize="8">Grande</text>
              <text x="40" y="100" fill="#34d399" fontSize="8">Petite</text>
            </svg>
            <p style={{ color: "#34d399", fontSize: "11px", fontWeight: "bold" }}>Signal BUY ↑</p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>Après une baisse</p>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #dc2626", textAlign: "center" }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>Bearish Harami</p>
            <svg viewBox="0 0 80 110" style={{ width: "70px", height: "90px" }}>
              <rect x="15" y="10" width="28" height="75" fill="#34d399" rx="3" />
              <rect x="22" y="28" width="14" height="28" fill="#f87171" rx="2" />
              <text x="5" y="100" fill="#34d399" fontSize="8">Grande</text>
              <text x="40" y="100" fill="#f87171" fontSize="8">Petite</text>
            </svg>
            <p style={{ color: "#f87171", fontSize: "11px", fontWeight: "bold" }}>Signal SELL ↓</p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>Après une hausse</p>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #fbbf24" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ⚠️ <strong style={{ color: "white" }}>Important :</strong> Le Harami est un signal
            <strong style={{ color: "#fbbf24" }}> modéré</strong> — attends toujours une confirmation supplémentaire avant d'entrer.
          </p>
        </div>
      </div>

      {/* TWEEZERS */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #9333ea" }}>
        <h2 style={{ color: "#c084fc", fontSize: "18px", marginTop: 0 }}>🪄 6. Tweezers — Les Pinces</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Deux bougies avec des <strong style={{ color: "white" }}>hauts ou bas identiques</strong>.
          Le prix a <strong style={{ color: "#c084fc" }}>testé deux fois</strong> le même niveau et a été rejeté —
          signal fort de support ou résistance.
        </p>
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #dc2626", textAlign: "center" }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>Tweezers Top</p>
            <svg viewBox="0 0 100 110" style={{ width: "80px", height: "90px" }}>
              <line x1="30" y1="15" x2="30" y2="25" stroke="#34d399" strokeWidth="2" />
              <rect x="20" y="25" width="20" height="50" fill="#34d399" rx="2" />
              <line x1="70" y1="15" x2="70" y2="25" stroke="#f87171" strokeWidth="2" />
              <rect x="60" y="25" width="20" height="50" fill="#f87171" rx="2" />
              <line x1="10" y1="15" x2="95" y2="15" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3,2" />
              <text x="18" y="105" fill="#fbbf24" fontSize="9">Même High</text>
            </svg>
            <p style={{ color: "#f87171", fontSize: "11px", fontWeight: "bold" }}>Signal SELL ↓</p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>Résistance forte</p>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #16a34a", textAlign: "center" }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>Tweezers Bottom</p>
            <svg viewBox="0 0 100 110" style={{ width: "80px", height: "90px" }}>
              <line x1="30" y1="15" x2="30" y2="25" stroke="#f87171" strokeWidth="2" />
              <rect x="20" y="25" width="20" height="50" fill="#f87171" rx="2" />
              <line x1="30" y1="75" x2="30" y2="88" stroke="#f87171" strokeWidth="2" />
              <line x1="70" y1="15" x2="70" y2="25" stroke="#34d399" strokeWidth="2" />
              <rect x="60" y="25" width="20" height="50" fill="#34d399" rx="2" />
              <line x1="70" y1="75" x2="70" y2="88" stroke="#34d399" strokeWidth="2" />
              <line x1="10" y1="88" x2="95" y2="88" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3,2" />
              <text x="20" y="105" fill="#fbbf24" fontSize="9">Même Low</text>
            </svg>
            <p style={{ color: "#34d399", fontSize: "11px", fontWeight: "bold" }}>Signal BUY ↑</p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>Support fort</p>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #c084fc" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> Les Tweezers sont encore plus puissants quand ils apparaissent
            <strong style={{ color: "#c084fc" }}> sur une zone d'offre ou de demande</strong> clé.
          </p>
        </div>
      </div>

      {/* RÉSUMÉ TOUS LES PATTERNS */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #2563eb" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>📋 Résumé — Tous les Patterns</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { pattern: "Engulfing Bullish", signal: "BUY 🔥", force: "★★★★★", color: "#34d399" },
            { pattern: "Engulfing Bearish", signal: "SELL 🔥", force: "★★★★★", color: "#f87171" },
            { pattern: "Dragonfly Doji", signal: "BUY potentiel", force: "★★★★☆", color: "#34d399" },
            { pattern: "Gravestone Doji", signal: "SELL potentiel", force: "★★★★☆", color: "#f87171" },
            { pattern: "Morning Star", signal: "BUY 🔥", force: "★★★★★", color: "#34d399" },
            { pattern: "Evening Star", signal: "SELL 🔥", force: "★★★★★", color: "#f87171" },
            { pattern: "Hammer", signal: "BUY", force: "★★★★☆", color: "#34d399" },
            { pattern: "Shooting Star", signal: "SELL", force: "★★★★☆", color: "#f87171" },
            { pattern: "Harami", signal: "Retournement", force: "★★★☆☆", color: "#fbbf24" },
            { pattern: "Tweezers", signal: "Support/Résistance", force: "★★★★☆", color: "#c084fc" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "10px 15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "white", fontSize: "13px" }}>{item.pattern}</span>
              <span style={{ color: item.color, fontSize: "12px", fontWeight: "bold" }}>{item.signal}</span>
              <span style={{ color: "#fbbf24", fontSize: "12px" }}>{item.force}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES D'OR */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles d'or des Patterns</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Attends toujours la CLÔTURE complète de la bougie avant d'entrer",
            "Un pattern sur une zone clé est 10x plus puissant que dans le vide",
            "Plus le pattern est gros comparé aux bougies voisines, plus il est fort",
            "Combine toujours un pattern avec la structure du marché",
            "Ne trade jamais un pattern contre la tendance principale",
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
        <a href="/formation/debutant/patterns" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Partie 4A
          </button>
        </a>
        <a href="/formation/debutant/exercices" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #0891b2, #16a34a)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 5 →
          </button>
        </a>
      </div>

    </div>
  );
}
