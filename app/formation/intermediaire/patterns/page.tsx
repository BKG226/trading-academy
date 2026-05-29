export default function Patterns() {
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
        background: "linear-gradient(135deg, #064e3b, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #059669",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#34d399", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🕯️ Confirmation Patterns
        </h1>
        <p style={{ color: "#34d399", margin: 0, fontSize: "14px" }}>
          Leçon 6 sur 10 — Les patterns qui confirment ton entrée
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
          🎯 Pourquoi confirmer ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          Tu as la structure, la Golden Zone, la zone d'offre/demande — mais tu as besoin d'un <strong style={{ color: "white" }}>signal final</strong> qui dit que le prix <strong style={{ color: "#fbbf24" }}>réagit vraiment</strong> à ta zone. 
          C'est le rôle des <strong style={{ color: "#34d399" }}>confirmation patterns</strong>.
        </p>
      </div>

      {/* ENGULFING */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #16a34a",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          🟢 1. Engulfing (Avalement)
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Une bougie <strong style={{ color: "white" }}>avale complètement</strong> la bougie précédente. 
          C'est le pattern de confirmation le plus <strong style={{ color: "#34d399" }}>puissant et fiable</strong> en Price Action.
        </p>

        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          {/* Bullish Engulfing */}
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "15px", textAlign: "center" }}>
            <p style={{ color: "#34d399", fontSize: "13px", fontWeight: "bold", marginBottom: "10px" }}>Bullish 📈</p>
            <svg viewBox="0 0 80 120" style={{ width: "80px", height: "100px" }}>
              {/* Bougie baissière */}
              <line x1="25" y1="15" x2="25" y2="25" stroke="#f87171" strokeWidth="1.5" />
              <rect x="18" y="25" width="14" height="35" fill="#f87171" />
              <line x1="25" y1="60" x2="25" y2="70" stroke="#f87171" strokeWidth="1.5" />
              {/* Bougie haussière */}
              <line x1="55" y1="10" x2="55" y2="20" stroke="#34d399" strokeWidth="1.5" />
              <rect x="47" y="20" width="16" height="55" fill="#34d399" />
              <line x1="55" y1="75" x2="55" y2="85" stroke="#34d399" strokeWidth="1.5" />
              {/* Label */}
              <text x="10" y="105" fill="#34d399" fontSize="9">Avale ✓</text>
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px", margin: "5px 0 0 0" }}>Signal BUY</p>
          </div>
          {/* Bearish Engulfing */}
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "15px", textAlign: "center" }}>
            <p style={{ color: "#f87171", fontSize: "13px", fontWeight: "bold", marginBottom: "10px" }}>Bearish 📉</p>
            <svg viewBox="0 0 80 120" style={{ width: "80px", height: "100px" }}>
              <line x1="25" y1="15" x2="25" y2="25" stroke="#34d399" strokeWidth="1.5" />
              <rect x="18" y="25" width="14" height="35" fill="#34d399" />
              <line x1="25" y1="60" x2="25" y2="70" stroke="#34d399" strokeWidth="1.5" />
              <line x1="55" y1="10" x2="55" y2="20" stroke="#f87171" strokeWidth="1.5" />
              <rect x="47" y="20" width="16" height="55" fill="#f87171" />
              <line x1="55" y1="75" x2="55" y2="85" stroke="#f87171" strokeWidth="1.5" />
              <text x="10" y="105" fill="#f87171" fontSize="9">Avale ✓</text>
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px", margin: "5px 0 0 0" }}>Signal SELL</p>
          </div>
        </div>

        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #34d399" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> La 2ème bougie doit avaler <strong style={{ color: "#34d399" }}>corps + mèches</strong> de la première. Plus c'est grand, plus c'est puissant.
          </p>
        </div>
      </div>

      {/* PIN BAR */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          📌 2. Pin Bar (Marteau / Étoile Filante)
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Une bougie avec une <strong style={{ color: "white" }}>très longue mèche</strong> et un petit corps. 
          La mèche montre que le prix a <strong style={{ color: "#38bdf8" }}>rejeté fortement</strong> un niveau. 
          C'est le signe que les institutions ont <strong style={{ color: "#fbbf24" }}>refusé ce prix</strong>.
        </p>

        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          {/* Bullish Pin Bar */}
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "15px", textAlign: "center" }}>
            <p style={{ color: "#34d399", fontSize: "13px", fontWeight: "bold", marginBottom: "10px" }}>Bullish 🔨</p>
            <svg viewBox="0 0 80 120" style={{ width: "60px", height: "100px" }}>
              <line x1="40" y1="10" x2="40" y2="75" stroke="#34d399" strokeWidth="2" />
              <rect x="33" y="75" width="14" height="20" fill="#34d399" />
              <line x1="40" y1="95" x2="40" y2="105" stroke="#34d399" strokeWidth="2" />
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px", margin: "5px 0 0 0" }}>Rejet bas → BUY</p>
          </div>
          {/* Bearish Pin Bar */}
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "15px", textAlign: "center" }}>
            <p style={{ color: "#f87171", fontSize: "13px", fontWeight: "bold", marginBottom: "10px" }}>Bearish ⭐</p>
            <svg viewBox="0 0 80 120" style={{ width: "60px", height: "100px" }}>
              <line x1="40" y1="10" x2="40" y2="25" stroke="#f87171" strokeWidth="2" />
              <rect x="33" y="25" width="14" height="20" fill="#f87171" />
              <line x1="40" y1="45" x2="40" y2="105" stroke="#f87171" strokeWidth="2" />
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px", margin: "5px 0 0 0" }}>Rejet haut → SELL</p>
          </div>
        </div>

        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #38bdf8" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> La mèche doit faire <strong style={{ color: "#38bdf8" }}>au moins 2/3</strong> de la bougie totale. Le corps doit être petit et dans le 1/3 opposé.
          </p>
        </div>
      </div>

      {/* DOJI */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #a78bfa",
      }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>
          ➕ 3. Doji — Indécision
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Un Doji a un <strong style={{ color: "white" }}>corps très petit</strong> avec des mèches des deux côtés. 
          Il représente l'<strong style={{ color: "#a78bfa" }}>indécision du marché</strong>. 
          Sur une zone clé, un Doji suivi d'une bougie directionnelle = <strong style={{ color: "#fbbf24" }}>signal fort</strong>.
        </p>

        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 100" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Doji standard */}
            <line x1="60" y1="15" x2="60" y2="85" stroke="#a78bfa" strokeWidth="2" />
            <rect x="53" y="46" width="14" height="8" fill="#a78bfa" />
            <text x="45" y="98" fill="#a78bfa" fontSize="9">Doji standard</text>

            {/* Dragonfly */}
            <line x1="150" y1="20" x2="150" y2="80" stroke="#34d399" strokeWidth="2" />
            <rect x="143" y="20" width="14" height="5" fill="#34d399" />
            <text x="128" y="98" fill="#34d399" fontSize="9">Dragonfly 🐉</text>

            {/* Gravestone */}
            <line x1="240" y1="20" x2="240" y2="80" stroke="#f87171" strokeWidth="2" />
            <rect x="233" y="75" width="14" height="5" fill="#f87171" />
            <text x="218" y="98" fill="#f87171" fontSize="9">Gravestone 🪦</text>
          </svg>
        </div>

        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #a78bfa" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ⚠️ <strong style={{ color: "white" }}>Important :</strong> Un Doji seul ne suffit pas — attends toujours la <strong style={{ color: "#a78bfa" }}>bougie suivante</strong> pour confirmer la direction.
          </p>
        </div>
      </div>

      {/* INSIDE BAR */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          📦 4. Inside Bar
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Une bougie dont le <strong style={{ color: "white" }}>corps et les mèches</strong> sont entièrement contenus dans la bougie précédente. 
          C'est une <strong style={{ color: "#fbbf24" }}>consolidation</strong> — le marché reprend souffle avant de repartir. 
          Le breakout de l'inside bar donne la direction.
        </p>

        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "200px" }}>
            {/* Mother bar */}
            <line x1="70" y1="15" x2="70" y2="25" stroke="#94a3b8" strokeWidth="2" />
            <rect x="58" y="25" width="24" height="70" fill="#94a3b8" fillOpacity="0.5" stroke="#94a3b8" strokeWidth="1" />
            <line x1="70" y1="95" x2="70" y2="105" stroke="#94a3b8" strokeWidth="2" />
            <text x="45" y="118" fill="#94a3b8" fontSize="9">Mother bar</text>

            {/* Inside bar */}
            <line x1="130" y1="35" x2="130" y2="42" stroke="#fbbf24" strokeWidth="2" />
            <rect x="122" y="42" width="16" height="40" fill="#fbbf24" fillOpacity="0.6" stroke="#fbbf24" strokeWidth="1" />
            <line x1="130" y1="82" x2="130" y2="90" stroke="#fbbf24" strokeWidth="2" />
            <text x="112" y="118" fill="#fbbf24" fontSize="9">Inside bar</text>
          </svg>
        </div>

        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #fbbf24" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> Si le prix casse <strong style={{ color: "#34d399" }}>au-dessus</strong> de la mother bar → BUY. 
            Si casse <strong style={{ color: "#f87171" }}>en-dessous</strong> → SELL.
          </p>
        </div>
      </div>

      {/* COMBO */}
      <div style={{
        background: "linear-gradient(135deg, #064e3b, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #059669",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          🔥 Meilleurs Combos
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { combo: "Golden Zone + Engulfing", force: "★★★★★", color: "#fbbf24" },
            { combo: "Zone Demande + Pin Bar Bullish", force: "★★★★★", color: "#fbbf24" },
            { combo: "Stop Hunt + Engulfing", force: "★★★★☆", color: "#34d399" },
            { combo: "CHoCH + Inside Bar breakout", force: "★★★★☆", color: "#34d399" },
            { combo: "Manipulation + Doji + confirmation", force: "★★★☆☆", color: "#60a5fa" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{ color: "white", fontSize: "14px" }}>🎯 {item.combo}</span>
              <span style={{ color: item.color, fontSize: "14px" }}>{item.force}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLE PRO */}
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "25px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Attends toujours la clôture complète de la bougie avant d'entrer",
            "Un pattern sur HTF est plus puissant que sur LTF",
            "Le pattern doit apparaître sur une zone clé — pas en plein milieu du marché",
            "Plus le pattern est gros par rapport aux bougies voisines, plus il est fort",
          ].map((rule, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              gap: "10px",
            }}>
              <span style={{ color: "#fbbf24", flexShrink: 0 }}>→</span>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/intermediaire/manipulation" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px", background: "#1e293b",
            color: "white", border: "1px solid #334155",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>← Leçon 5</button>
        </a>
        <a href="/formation/intermediaire/confluence" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(to right, #059669, #0284c7)",
            color: "white", border: "none",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>Leçon 7 →</button>
        </a>
      </div>

    </div>
  );
}
