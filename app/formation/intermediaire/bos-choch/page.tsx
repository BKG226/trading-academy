export default function BosChoch() {
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
        border: "1px solid #7c3aed",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#a78bfa", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🔄 BOS & CHoCH
        </h1>
        <p style={{ color: "#a78bfa", margin: 0, fontSize: "14px" }}>
          Leçon 2 sur 10 — Niveau Intermédiaire
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
          🎯 Pourquoi c'est crucial ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          BOS et CHoCH sont les <strong style={{ color: "white" }}>deux signaux les plus importants</strong> en Price Action. 
          Ils te disent exactement <strong style={{ color: "#fbbf24" }}>quand la structure change</strong> et quand chercher une entrée.
        </p>
      </div>

      {/* BOS */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #16a34a",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          ✅ BOS — Break Of Structure
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Le BOS confirme que la <strong style={{ color: "white" }}>tendance continue</strong>. 
          En tendance haussière, le prix casse un <strong style={{ color: "#fbbf24" }}>HH précédent</strong> → 
          c'est un BOS haussier. La structure est <strong style={{ color: "#34d399" }}>intacte</strong>.
        </p>

        {/* SVG BOS HAUSSIER */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <p style={{ color: "#64748b", fontSize: "12px", margin: "0 0 10px 0" }}>BOS Haussier</p>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="150" x2="300" y2="150" stroke="#334155" strokeWidth="1" />
            {/* Structure */}
            <polyline points="20,130 60,90 90,105 140,60 170,75 230,25 260,40"
              fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="0" />
            {/* Ligne BOS */}
            <line x1="140" y1="60" x2="300" y2="60" stroke="#fbbf24" strokeWidth="1" strokeDasharray="5,4" />
            {/* Points */}
            <circle cx="60" cy="90" r="4" fill="#fbbf24" />
            <circle cx="90" cy="105" r="4" fill="#60a5fa" />
            <circle cx="140" cy="60" r="4" fill="#fbbf24" />
            <circle cx="170" cy="75" r="4" fill="#60a5fa" />
            <circle cx="230" cy="25" r="4" fill="#34d399" />
            {/* Labels */}
            <text x="55" y="82" fill="#fbbf24" fontSize="9">HH</text>
            <text x="85" y="120" fill="#60a5fa" fontSize="9">HL</text>
            <text x="135" y="52" fill="#fbbf24" fontSize="9">HH</text>
            <text x="165" y="90" fill="#60a5fa" fontSize="9">HL</text>
            <text x="220" y="18" fill="#34d399" fontSize="10" fontWeight="bold">BOS ✓</text>
            <text x="145" y="55" fill="#fbbf24" fontSize="9">- - - - - - - - -</text>
          </svg>
        </div>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "12px 15px",
          borderLeft: "4px solid #34d399",
        }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            💡 <strong style={{ color: "white" }}>BOS = Continuation</strong> → La tendance est confirmée. 
            Tu peux chercher des entrées dans le sens de la tendance.
          </p>
        </div>
      </div>

      {/* CHOCH */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #dc2626",
      }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>
          🔄 CHoCH — Change Of Character
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Le CHoCH signale un <strong style={{ color: "white" }}>possible retournement</strong> de tendance. 
          En tendance haussière, si le prix <strong style={{ color: "#f87171" }}>casse sous un HL</strong> → 
          c'est un CHoCH. La structure <strong style={{ color: "#f87171" }}>est en train de changer</strong>.
        </p>

        {/* SVG CHOCH */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <p style={{ color: "#64748b", fontSize: "12px", margin: "0 0 10px 0" }}>CHoCH — Retournement</p>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="150" x2="300" y2="150" stroke="#334155" strokeWidth="1" />
            {/* Phase haussière */}
            <polyline points="20,130 60,90 90,105 140,55"
              fill="none" stroke="#34d399" strokeWidth="2" />
            {/* Phase retournement */}
            <polyline points="140,55 170,80 200,65 240,120"
              fill="none" stroke="#f87171" strokeWidth="2" />
            {/* Ligne CHoCH */}
            <line x1="90" y1="105" x2="300" y2="105" stroke="#f87171" strokeWidth="1" strokeDasharray="5,4" />
            {/* Points */}
            <circle cx="60" cy="90" r="4" fill="#fbbf24" />
            <circle cx="90" cy="105" r="4" fill="#60a5fa" />
            <circle cx="140" cy="55" r="4" fill="#fbbf24" />
            <circle cx="170" cy="80" r="4" fill="#f87171" />
            <circle cx="240" cy="120" r="4" fill="#f87171" />
            {/* Labels */}
            <text x="55" y="82" fill="#fbbf24" fontSize="9">HH</text>
            <text x="85" y="98" fill="#60a5fa" fontSize="9">HL</text>
            <text x="135" y="47" fill="#fbbf24" fontSize="9">HH</text>
            <text x="160" y="73" fill="#f87171" fontSize="9">LH</text>
            <text x="225" y="138" fill="#f87171" fontSize="10" fontWeight="bold">CHoCH ⚠️</text>
          </svg>
        </div>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "12px 15px",
          borderLeft: "4px solid #f87171",
        }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            💡 <strong style={{ color: "white" }}>CHoCH = Alerte retournement</strong> → 
            Stop de chercher des BUY. Surveille la confirmation d'une nouvelle structure baissière.
          </p>
        </div>
      </div>

      {/* DIFFÉRENCE */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          ⚖️ BOS vs CHoCH — La différence
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{
            background: "#0f172a",
            borderRadius: "10px",
            padding: "15px",
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}>
            <div style={{
              width: "45px",
              height: "45px",
              borderRadius: "10px",
              background: "#16a34a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              flexShrink: 0,
            }}>✅</div>
            <div>
              <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "15px" }}>BOS</div>
              <div style={{ color: "#94a3b8", fontSize: "13px" }}>Casse dans le sens de la tendance → Continuation</div>
            </div>
          </div>
          <div style={{
            background: "#0f172a",
            borderRadius: "10px",
            padding: "15px",
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}>
            <div style={{
              width: "45px",
              height: "45px",
              borderRadius: "10px",
              background: "#dc2626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              flexShrink: 0,
            }}>🔄</div>
            <div>
              <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "15px" }}>CHoCH</div>
              <div style={{ color: "#94a3b8", fontSize: "13px" }}>Casse contre la tendance → Retournement possible</div>
            </div>
          </div>
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
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          ⭐ Règle Pro
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Un seul CHoCH ne suffit pas — attends la confirmation avec un nouveau BOS dans le sens opposé",
            "Sur HTF, un CHoCH est plus significatif que sur LTF",
            "Combine toujours BOS/CHoCH avec une zone d'offre/demande pour une entrée précise",
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
        <a href="/formation/intermediaire/structure" style={{ flex: 1, textDecoration: "none" }}>
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
            ← Leçon 1
          </button>
        </a>
        <a href="/formation/intermediaire/offre-demande" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(to right, #7c3aed, #2563eb)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            cursor: "pointer",
          }}>
            Leçon 3 →
          </button>
        </a>
      </div>

    </div>
  );
}
