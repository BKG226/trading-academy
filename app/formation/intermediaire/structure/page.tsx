export default function StructureMarche() {
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
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #2563eb",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#60a5fa", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          📊 Structure du Marché Avancée
        </h1>
        <p style={{ color: "#93c5fd", margin: 0, fontSize: "14px" }}>
          Leçon 1 sur 10 — Niveau Intermédiaire
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
          🎯 Qu'est-ce que la structure du marché ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          La structure du marché est la base de tout en Price Action. 
          Avant de placer un trade, tu dois savoir <strong style={{ color: "white" }}>dans quelle direction va le marché</strong>. 
          Le marché ne monte pas ou ne descend pas en ligne droite — il fait des <strong style={{ color: "#fbbf24" }}>vagues</strong>.
        </p>
      </div>

      {/* HH HL */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #16a34a",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          📈 Structure HAUSSIÈRE
        </h2>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          border: "1px solid #166534",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span style={{ color: "#34d399", fontWeight: "bold" }}>HH — Higher High</span>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>Plus Haut Sommet</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#86efac", fontWeight: "bold" }}>HL — Higher Low</span>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>Plus Haut Creux</span>
          </div>
        </div>

        {/* SCHEMA HAUSSIER SVG */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 150" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Ligne de fond */}
            <line x1="0" y1="140" x2="300" y2="140" stroke="#334155" strokeWidth="1" />
            {/* Structure haussière */}
            <polyline
              points="20,120 70,80 100,95 160,45 190,60 260,15"
              fill="none"
              stroke="#34d399"
              strokeWidth="2.5"
            />
            {/* Points */}
            <circle cx="70" cy="80" r="4" fill="#fbbf24" />
            <circle cx="100" cy="95" r="4" fill="#60a5fa" />
            <circle cx="160" cy="45" r="4" fill="#fbbf24" />
            <circle cx="190" cy="60" r="4" fill="#60a5fa" />
            <circle cx="260" cy="15" r="4" fill="#fbbf24" />
            {/* Labels */}
            <text x="65" y="72" fill="#fbbf24" fontSize="10">HH</text>
            <text x="95" y="110" fill="#60a5fa" fontSize="10">HL</text>
            <text x="155" y="38" fill="#fbbf24" fontSize="10">HH</text>
            <text x="185" y="75" fill="#60a5fa" fontSize="10">HL</text>
            <text x="255" y="10" fill="#fbbf24" fontSize="10">HH</text>
          </svg>
        </div>

        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6" }}>
          ✅ Le marché fait des <strong style={{ color: "#34d399" }}>sommets de plus en plus hauts (HH)</strong> et des <strong style={{ color: "#86efac" }}>creux de plus en plus hauts (HL)</strong>. 
          C'est un signal clair de tendance haussière — on cherche uniquement des <strong style={{ color: "white" }}>achats (BUY)</strong>.
        </p>
      </div>

      {/* LH LL */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #dc2626",
      }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>
          📉 Structure BAISSIÈRE
        </h2>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          border: "1px solid #7f1d1d",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span style={{ color: "#f87171", fontWeight: "bold" }}>LH — Lower High</span>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>Plus Bas Sommet</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#fca5a5", fontWeight: "bold" }}>LL — Lower Low</span>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>Plus Bas Creux</span>
          </div>
        </div>

        {/* SCHEMA BAISSIER SVG */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 150" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="140" x2="300" y2="140" stroke="#334155" strokeWidth="1" />
            <polyline
              points="20,20 70,65 100,45 160,95 190,75 260,120"
              fill="none"
              stroke="#f87171"
              strokeWidth="2.5"
            />
            <circle cx="70" cy="65" r="4" fill="#fbbf24" />
            <circle cx="100" cy="45" r="4" fill="#60a5fa" />
            <circle cx="160" cy="95" r="4" fill="#fbbf24" />
            <circle cx="190" cy="75" r="4" fill="#60a5fa" />
            <circle cx="260" cy="120" r="4" fill="#fbbf24" />
            <text x="65" y="80" fill="#fbbf24" fontSize="10">LL</text>
            <text x="95" y="38" fill="#60a5fa" fontSize="10">LH</text>
            <text x="155" y="110" fill="#fbbf24" fontSize="10">LL</text>
            <text x="185" y="68" fill="#60a5fa" fontSize="10">LH</text>
            <text x="250" y="138" fill="#fbbf24" fontSize="10">LL</text>
          </svg>
        </div>

        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6" }}>
          ✅ Le marché fait des <strong style={{ color: "#f87171" }}>sommets de plus en plus bas (LH)</strong> et des <strong style={{ color: "#fca5a5" }}>creux de plus en plus bas (LL)</strong>. 
          Tendance baissière confirmée — on cherche uniquement des <strong style={{ color: "white" }}>ventes (SELL)</strong>.
        </p>
      </div>

      {/* RÈGLE D'OR */}
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          ⭐ Règle d'or
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{
            background: "#0f172a",
            borderRadius: "10px",
            padding: "12px 15px",
            borderLeft: "4px solid #34d399",
          }}>
            <p style={{ color: "white", margin: 0, fontSize: "14px" }}>
              🟢 <strong>Structure haussière</strong> → Tu cherches uniquement à <strong style={{ color: "#34d399" }}>ACHETER</strong> sur les HL
            </p>
          </div>
          <div style={{
            background: "#0f172a",
            borderRadius: "10px",
            padding: "12px 15px",
            borderLeft: "4px solid #f87171",
          }}>
            <p style={{ color: "white", margin: 0, fontSize: "14px" }}>
              🔴 <strong>Structure baissière</strong> → Tu cherches uniquement à <strong style={{ color: "#f87171" }}>VENDRE</strong> sur les LH
            </p>
          </div>
          <div style={{
            background: "#0f172a",
            borderRadius: "10px",
            padding: "12px 15px",
            borderLeft: "4px solid #f59e0b",
          }}>
            <p style={{ color: "white", margin: 0, fontSize: "14px" }}>
              ⚠️ <strong>Structure non claire</strong> → Tu <strong style={{ color: "#fbbf24" }}>NE TRADES PAS</strong> — tu attends
            </p>
          </div>
        </div>
      </div>

      {/* MULTI TIMEFRAME */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #7c3aed",
      }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>
          🔭 Multi-Timeframe (MTF)
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Un trader intermédiaire analyse <strong style={{ color: "white" }}>plusieurs timeframes</strong> avant d'entrer. La règle est simple :
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { tf: "HTF — Weekly/Daily", desc: "Direction principale du marché", color: "#a78bfa" },
            { tf: "MTF — H4/H1", desc: "Confirme la structure et les zones", color: "#60a5fa" },
            { tf: "LTF — M15/M5", desc: "Cherche l'entrée précise", color: "#34d399" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.tf}</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ASTUCE PRO */}
      <div style={{
        background: "linear-gradient(135deg, #0c4a6e, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "25px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          💡 Astuce Pro
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7" }}>
          Ne confonds pas une <strong style={{ color: "#fbbf24" }}>correction</strong> avec un <strong style={{ color: "#f87171" }}>changement de structure</strong>. 
          Une correction normale en tendance haussière fait un HL — elle ne casse pas le dernier HL. 
          Si le prix <strong style={{ color: "white" }}>casse sous le dernier HL</strong>, c'est un signal d'alerte 🚨 — on surveille un CHoCH.
        </p>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/intermediaire" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%",
            padding: "14px",
            background: "#1e293b",
            color: "white",
            border: "1px solid #334155",
            borderRadius: "12px",
            fontSize: "15px",
            cursor: "pointer",
          }}>
            ← Retour
          </button>
        </a>
        <a href="/formation/intermediaire/bos-choch" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(to right, #2563eb, #7c3aed)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            cursor: "pointer",
          }}>
            Leçon 2 →
          </button>
        </a>
      </div>

    </div>
  );
}
