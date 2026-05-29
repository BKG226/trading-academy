export default function Confluence() {
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
        background: "linear-gradient(135deg, #0c4a6e, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #0284c7",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🎯 Confluence & Entrées Précises
        </h1>
        <p style={{ color: "#38bdf8", margin: 0, fontSize: "14px" }}>
          Leçon 7 sur 10 — Comment assembler tous les éléments
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
          🎯 C'est quoi la confluence ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          La confluence c'est quand <strong style={{ color: "white" }}>plusieurs éléments se rejoignent</strong> au même endroit. 
          Plus tu as d'éléments qui confirment ton trade, plus la <strong style={{ color: "#fbbf24" }}>probabilité de succès est haute</strong>. 
          Un trade sans confluence = gambling. Un trade avec confluence = <strong style={{ color: "#34d399" }}>décision professionnelle</strong>.
        </p>
      </div>

      {/* CHECKLIST */}
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          ✅ Checklist avant d'entrer
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { num: "1", text: "Structure HTF claire (haussière ou baissière) ?", color: "#34d399" },
            { num: "2", text: "Prix dans une zone d'offre ou de demande ?", color: "#60a5fa" },
            { num: "3", text: "Zone dans la Golden Zone 0.50-0.618 ?", color: "#fbbf24" },
            { num: "4", text: "BOS ou CHoCH sur LTF confirme ?", color: "#a78bfa" },
            { num: "5", text: "Pattern de confirmation présent (engulfing, pin bar...) ?", color: "#f87171" },
            { num: "6", text: "RR minimum 1:2 possible ?", color: "#34d399" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}>
              <div style={{
                width: "30px",
                height: "30px",
                borderRadius: "8px",
                background: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0f172a",
                fontWeight: "bold",
                fontSize: "14px",
                flexShrink: 0,
              }}>{item.num}</div>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{item.text}</span>
            </div>
          ))}
        </div>
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "12px 15px",
          marginTop: "15px",
          textAlign: "center",
          border: "1px solid #d97706",
        }}>
          <span style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "15px" }}>
            ✅ 5-6 oui = Trade haute probabilité 🔥
          </span>
        </div>
      </div>

      {/* EXEMPLE BUY */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #16a34a",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          📈 Exemple — Entrée BUY parfaite
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "15px" }}>
          {[
            "HTF (Daily) → Structure haussière claire ✅",
            "H4 → Prix revient sur zone de demande ✅",
            "Fibonacci → Zone demande dans Golden Zone 0.50-0.618 ✅",
            "M15 → CHoCH haussier confirmé ✅",
            "M15 → Engulfing bullish sur la zone ✅",
            "RR 1:3 possible avec SL sous la zone ✅",
          ].map((step, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "10px 15px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}>
              <span style={{ color: "#34d399", fontSize: "16px" }}>✓</span>
              <span style={{ color: "#cbd5e1", fontSize: "13px" }}>{step}</span>
            </div>
          ))}
        </div>

        {/* SVG ENTRÉE BUY */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 200" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Golden Zone */}
            <rect x="0" y="110" width="300" height="30" fill="#d97706" fillOpacity="0.15" />
            <text x="5" y="108" fill="#fbbf24" fontSize="9">Golden Zone 0.50-0.618</text>

            {/* Zone de demande */}
            <rect x="130" y="108" width="60" height="34" fill="#16a34a" fillOpacity="0.2" stroke="#16a34a" strokeWidth="1" strokeDasharray="3,2" />
            <text x="132" y="155" fill="#34d399" fontSize="9">Zone Demande</text>

            {/* Structure HTF */}
            <polyline points="20,170 70,130 100,145 140,120"
              fill="none" stroke="#34d399" strokeWidth="2" />

            {/* Retracement Golden Zone */}
            <polyline points="140,120 160,125"
              fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" />

            {/* Engulfing */}
            <rect x="155" y="118" width="10" height="14" fill="#f87171" />
            <rect x="168" y="112" width="12" height="18" fill="#34d399" />

            {/* Entrée */}
            <line x1="180" y1="112" x2="300" y2="112" stroke="#34d399" strokeWidth="1" strokeDasharray="3,2" />
            <text x="235" y="108" fill="#34d399" fontSize="9">Entrée BUY</text>

            {/* SL */}
            <line x1="180" y1="145" x2="300" y2="145" stroke="#f87171" strokeWidth="1" strokeDasharray="3,2" />
            <text x="240" y="158" fill="#f87171" fontSize="9">Stop Loss</text>

            {/* TP */}
            <line x1="180" y1="50" x2="300" y2="50" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3,2" />
            <text x="230" y="45" fill="#fbbf24" fontSize="9">Take Profit</text>

            {/* Prix qui monte */}
            <polyline points="180,112 220,80 270,45"
              fill="none" stroke="#34d399" strokeWidth="2.5" />

            {/* Flèche */}
            <text x="225" y="65" fill="#34d399" fontSize="12" fontWeight="bold">🚀</text>
          </svg>
        </div>
      </div>

      {/* EXEMPLE SELL */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #dc2626",
      }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>
          📉 Exemple — Entrée SELL parfaite
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "15px" }}>
          {[
            "HTF (Daily) → Structure baissière claire ✅",
            "H4 → Prix revient sur zone d'offre ✅",
            "Fibonacci → Zone offre dans Golden Zone 0.50-0.618 ✅",
            "M15 → CHoCH baissier confirmé ✅",
            "M15 → Pin Bar bearish sur la zone ✅",
            "RR 1:3 possible avec SL au-dessus de la zone ✅",
          ].map((step, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "10px 15px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}>
              <span style={{ color: "#f87171", fontSize: "16px" }}>✓</span>
              <span style={{ color: "#cbd5e1", fontSize: "13px" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TYPES D'ENTRÉE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #7c3aed",
      }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>
          ⚡ Types d'entrée
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            {
              type: "Entrée agressive",
              desc: "Tu entres dès l'apparition du pattern sur la zone — plus de RR mais plus risqué",
              color: "#f87171",
              icon: "⚡",
            },
            {
              type: "Entrée conservative",
              desc: "Tu attends la clôture du pattern + confirmation LTF — moins de RR mais plus sûr",
              color: "#34d399",
              icon: "🛡️",
            },
            {
              type: "Entrée sur retest",
              desc: "Tu attends que le prix revienne tester le niveau cassé — entrée très précise",
              color: "#fbbf24",
              icon: "🎯",
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "15px",
              borderLeft: `4px solid ${item.color}`,
            }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "15px", marginBottom: "5px" }}>
                {item.icon} {item.type}
              </div>
              <div style={{ color: "#94a3b8", fontSize: "13px" }}>{item.desc}</div>
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
            "Moins de trades mais mieux sélectionnés = plus de profits",
            "Si tu hésites à entrer c'est que la confluence n'est pas assez forte — passe",
            "Prends des notes sur chaque trade — journal de trading obligatoire",
            "La patience de trouver la bonne confluence = la compétence n°1 du trader",
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
        <a href="/formation/intermediaire/patterns" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px", background: "#1e293b",
            color: "white", border: "1px solid #334155",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>← Leçon 6</button>
        </a>
        <a href="/formation/intermediaire/gestion-risque" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(to right, #0284c7, #16a34a)",
            color: "white", border: "none",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>Leçon 8 →</button>
        </a>
      </div>

    </div>
  );
}
