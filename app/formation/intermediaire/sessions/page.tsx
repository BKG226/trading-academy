export default function Sessions() {
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
        background: "linear-gradient(135deg, #2e1065, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #9333ea",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#c084fc", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🌍 Sessions de Trading
        </h1>
        <p style={{ color: "#c084fc", margin: 0, fontSize: "14px" }}>
          Leçon 9 sur 10 — Quand trader pour maximiser les profits
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
          🎯 Pourquoi les sessions sont importantes ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          Le marché Forex tourne <strong style={{ color: "white" }}>24h/24</strong> mais toutes les heures ne se valent pas. 
          Les <strong style={{ color: "#fbbf24" }}>sessions actives</strong> ont plus de volume, plus de volatilité et plus d'opportunités. 
          Trader aux mauvais moments = spreads larges et faux mouvements.
        </p>
      </div>

      {/* 3 SESSIONS */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #334155",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          🕐 Les 3 Sessions Principales
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

          {/* TOKYO */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #f59e0b",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "16px" }}>🗼 Session Tokyo</span>
              <span style={{ color: "#94a3b8", fontSize: "12px" }}>Asie</span>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
              <span style={{ background: "#1e293b", color: "#fbbf24", padding: "4px 10px", borderRadius: "8px", fontSize: "12px" }}>00h00 - 09h00 UTC</span>
              <span style={{ background: "#1e293b", color: "#94a3b8", padding: "4px 10px", borderRadius: "8px", fontSize: "12px" }}>Faible volatilité</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {["Paires actives : JPY, AUD, NZD", "Mouvement limité — marché calme", "Souvent zone de consolidation", "Manipulation possible en début de session"].map((t, i) => (
                <div key={i} style={{ color: "#94a3b8", fontSize: "13px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#fbbf24" }}>•</span>{t}
                </div>
              ))}
            </div>
          </div>

          {/* LONDRES */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #3b82f6",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: "#60a5fa", fontWeight: "bold", fontSize: "16px" }}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 Session Londres</span>
              <span style={{ background: "#1e3a5f", color: "#60a5fa", padding: "3px 8px", borderRadius: "6px", fontSize: "11px" }}>⭐ MEILLEURE</span>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
              <span style={{ background: "#1e293b", color: "#60a5fa", padding: "4px 10px", borderRadius: "8px", fontSize: "12px" }}>08h00 - 17h00 UTC</span>
              <span style={{ background: "#1e293b", color: "#34d399", padding: "4px 10px", borderRadius: "8px", fontSize: "12px" }}>Forte volatilité 🔥</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {[
                "Toutes les paires majeures actives",
                "Plus gros volume de la journée",
                "Les institutions entrent massivement ici",
                "Manipulation fréquente en début (08h-09h UTC)",
                "Meilleurs setups Price Action de la journée",
              ].map((t, i) => (
                <div key={i} style={{ color: "#94a3b8", fontSize: "13px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#60a5fa" }}>•</span>{t}
                </div>
              ))}
            </div>
          </div>

          {/* NEW YORK */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #dc2626",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: "#f87171", fontWeight: "bold", fontSize: "16px" }}>🗽 Session New York</span>
              <span style={{ background: "#7f1d1d", color: "#f87171", padding: "3px 8px", borderRadius: "6px", fontSize: "11px" }}>⭐ PUISSANTE</span>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
              <span style={{ background: "#1e293b", color: "#f87171", padding: "4px 10px", borderRadius: "8px", fontSize: "12px" }}>13h00 - 22h00 UTC</span>
              <span style={{ background: "#1e293b", color: "#fbbf24", padding: "4px 10px", borderRadius: "8px", fontSize: "12px" }}>Très forte volatilité</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {[
                "USD très actif sur toutes les paires",
                "Chevauchement avec Londres (13h-17h) = explosif",
                "News économiques américaines impactent fort",
                "Manipulation possible à l'ouverture NY (13h-14h)",
                "Continuation ou retournement des moves de Londres",
              ].map((t, i) => (
                <div key={i} style={{ color: "#94a3b8", fontSize: "13px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#f87171" }}>•</span>{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAP */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #2563eb",
      }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>
          💥 Le Chevauchement Londres/NY
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          De <strong style={{ color: "#fbbf24" }}>13h00 à 17h00 UTC</strong> les deux sessions sont ouvertes simultanément. 
          C'est la <strong style={{ color: "#f87171" }}>période la plus volatile</strong> et la plus rentable de la journée.
        </p>

        {/* Timeline */}
        <div style={{ position: "relative", padding: "10px 0" }}>
          <div style={{ background: "#0f172a", borderRadius: "10px", padding: "15px" }}>
            {[
              { heure: "08h", label: "Ouverture Londres", color: "#60a5fa", width: "100%" },
              { heure: "13h", label: "Ouverture NY + Overlap 💥", color: "#f87171", width: "100%" },
              { heure: "17h", label: "Fermeture Londres", color: "#60a5fa", width: "100%" },
              { heure: "22h", label: "Fermeture NY", color: "#f87171", width: "100%" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "15px", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ color: item.color, fontWeight: "bold", fontSize: "14px", minWidth: "35px" }}>{item.heure}</span>
                <div style={{ flex: 1, height: "2px", background: item.color, opacity: 0.5 }} />
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MANIPULATION SESSIONS */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #dc2626",
      }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>
          🪤 Manipulation par Session
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Les institutions manipulent souvent en <strong style={{ color: "white" }}>début de session</strong> 
          pour collecter la liquidité avant le vrai mouvement.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { session: "Londres 08h-09h", desc: "Sweep des lows/highs asiatiques → vrai move commence", color: "#60a5fa" },
            { session: "NY 13h-14h", desc: "Faux breakout du move de Londres → retournement ou continuation", color: "#f87171" },
            { session: "Fin NY 20h-22h", desc: "Volume faible → éviter de trader", color: "#94a3b8" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              borderLeft: `4px solid ${item.color}`,
            }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px", marginBottom: "4px" }}>
                {item.session}
              </div>
              <div style={{ color: "#94a3b8", fontSize: "13px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES PRO */}
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
            "Concentre-toi sur Londres et NY — 80% des opportunités sont là",
            "Évite de trader en session Tokyo sauf sur les paires JPY",
            "L'overlap Londres/NY 13h-17h UTC = la zone d'or",
            "En début de session surveille toujours la manipulation avant d'entrer",
            "Adapte tes horaires à ton fuseau — connais tes heures locales exactes",
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
        <a href="/formation/intermediaire/gestion-risque" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px", background: "#1e293b",
            color: "white", border: "1px solid #334155",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>← Leçon 8</button>
        </a>
        <a href="/formation/intermediaire/psychologie" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(to right, #9333ea, #e11d48)",
            color: "white", border: "none",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>Leçon 10 →</button>
        </a>
      </div>

    </div>
  );
}
