export default function GestionRisque() {
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
        border: "1px solid #16a34a",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#34d399", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🛡️ Gestion du Risque
        </h1>
        <p style={{ color: "#34d399", margin: 0, fontSize: "14px" }}>
          Leçon 8 sur 10 — La leçon qui protège ton capital
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
          🎯 Pourquoi c'est la leçon la plus importante ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          Tu peux avoir la meilleure stratégie du monde — sans gestion du risque tu <strong style={{ color: "#f87171" }}>perdras tout</strong>. 
          Les traders professionnels ne cherchent pas à <strong style={{ color: "white" }}>gagner plus</strong> — 
          ils cherchent à <strong style={{ color: "#34d399" }}>perdre moins</strong>. C'est ça la vraie différence.
        </p>
      </div>

      {/* RÈGLE 1% */}
      <div style={{
        background: "linear-gradient(135deg, #7f1d1d, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #dc2626",
      }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>
          💰 Règle du 1% — Obligatoire
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Ne risque jamais plus de <strong style={{ color: "#f87171" }}>1% à 2% de ton capital</strong> par trade. 
          Comme ça même avec 10 pertes consécutives tu restes dans le jeu.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { capital: "500$", risque1: "5$", risque2: "10$" },
            { capital: "1 000$", risque1: "10$", risque2: "20$" },
            { capital: "5 000$", risque1: "50$", risque2: "100$" },
            { capital: "10 000$", risque1: "100$", risque2: "200$" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{ color: "white", fontWeight: "bold", fontSize: "15px" }}>{item.capital}</span>
              <span style={{ color: "#34d399", fontSize: "14px" }}>1% = {item.risque1}</span>
              <span style={{ color: "#fbbf24", fontSize: "14px" }}>2% = {item.risque2}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RISK REWARD */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          ⚖️ Risk/Reward Ratio (RR)
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Le RR compare ce que tu risques à ce que tu peux gagner. 
          <strong style={{ color: "white" }}> Minimum 1:2</strong> — tu risques 1 pour gagner 2. 
          Avec un RR de 1:2, tu peux être <strong style={{ color: "#fbbf24" }}>rentable même avec 40% de trades gagnants</strong>.
        </p>

        {/* SVG RR */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 180" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Entrée */}
            <line x1="50" y1="100" x2="280" y2="100" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="5" y="103" fill="#fbbf24" fontSize="9">Entrée</text>

            {/* Stop Loss */}
            <line x1="50" y1="130" x2="280" y2="130" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="5" y="133" fill="#f87171" fontSize="9">SL</text>

            {/* TP 1:1 */}
            <line x1="50" y1="70" x2="280" y2="70" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
            <text x="240" y="67" fill="#94a3b8" fontSize="9">TP 1:1</text>

            {/* TP 1:2 */}
            <line x1="50" y1="40" x2="280" y2="40" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="240" y="37" fill="#34d399" fontSize="9">TP 1:2 ✅</text>

            {/* TP 1:3 */}
            <line x1="50" y1="10" x2="280" y2="10" stroke="#34d399" strokeWidth="2" />
            <text x="240" y="8" fill="#34d399" fontSize="9">TP 1:3 🔥</text>

            {/* Zone risque */}
            <rect x="50" y="100" width="60" height="30" fill="#dc2626" fillOpacity="0.2" />
            <text x="55" y="118" fill="#f87171" fontSize="9">Risque</text>

            {/* Zone gain */}
            <rect x="50" y="10" width="60" height="90" fill="#16a34a" fillOpacity="0.2" />
            <text x="62" y="60" fill="#34d399" fontSize="9">Gain</text>

            {/* Flèche */}
            <line x1="150" y1="130" x2="150" y2="10" stroke="white" strokeWidth="1.5" />
            <polygon points="145,12 155,12 150,2" fill="white" />
          </svg>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { rr: "1:1", verdict: "❌ Éviter", color: "#f87171" },
            { rr: "1:2", verdict: "✅ Minimum", color: "#fbbf24" },
            { rr: "1:3", verdict: "🔥 Idéal", color: "#34d399" },
          ].map((item, i) => (
            <div key={i} style={{
              flex: 1,
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px",
              textAlign: "center",
            }}>
              <div style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}>{item.rr}</div>
              <div style={{ color: item.color, fontSize: "13px", marginTop: "5px" }}>{item.verdict}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LOT SIZE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #7c3aed",
      }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>
          📊 Calcul du Lot Size
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Le lot size dépend de ton <strong style={{ color: "white" }}>capital</strong>, 
          ton <strong style={{ color: "#fbbf24" }}>risque %</strong> et la 
          <strong style={{ color: "#f87171" }}> distance de ton Stop Loss</strong>.
        </p>

        <div style={{
          background: "linear-gradient(135deg, #2e1065, #0f172a)",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "15px",
          border: "1px solid #7c3aed",
          textAlign: "center",
        }}>
          <div style={{ color: "#a78bfa", fontSize: "13px", marginBottom: "10px" }}>Formule</div>
          <div style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
            Montant risqué ÷ Distance SL (en pips) = Valeur par pip
          </div>
        </div>

        {/* Exemple */}
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          border: "1px solid #334155",
        }}>
          <div style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "14px", marginBottom: "12px" }}>
            📌 Exemple concret :
          </div>
          {[
            { label: "Capital", value: "1 000$", color: "#60a5fa" },
            { label: "Risque 1%", value: "10$", color: "#34d399" },
            { label: "SL distance", value: "20 pips", color: "#f87171" },
            { label: "Valeur/pip", value: "10$ ÷ 20 = 0.50$/pip", color: "#fbbf24" },
            { label: "Lot size", value: "0.05 lot (micro)", color: "#a78bfa" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: i < 4 ? "1px solid #1e293b" : "none",
            }}>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{item.label}</span>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DRAWDOWN */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          📉 Gérer le Drawdown
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Le drawdown c'est la <strong style={{ color: "white" }}>perte maximale</strong> depuis un pic. 
          Tout trader en a — même les pros. Ce qui compte c'est de le <strong style={{ color: "#fbbf24" }}>limiter et récupérer</strong>.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { perdu: "-10%", besoin: "+11%", color: "#34d399", niveau: "Facile" },
            { perdu: "-20%", besoin: "+25%", color: "#fbbf24", niveau: "Gérable" },
            { perdu: "-50%", besoin: "+100%", color: "#f87171", niveau: "Dangereux" },
            { perdu: "-80%", besoin: "+400%", color: "#f87171", niveau: "Critique 🚨" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{ color: "#f87171", fontWeight: "bold" }}>{item.perdu}</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>→ récupérer</span>
              <span style={{ color: item.color, fontWeight: "bold" }}>{item.besoin}</span>
              <span style={{ color: item.color, fontSize: "12px" }}>{item.niveau}</span>
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
            "Jamais plus de 1-2% de risque par trade — sans exception",
            "Stop Loss TOUJOURS placé avant d'entrer — jamais sans SL",
            "Si tu perds 3 trades consécutifs → stop trading pour aujourd'hui",
            "Ne jamais déplacer son SL contre soi pour éviter la perte",
            "Le RR minimum est 1:2 — en dessous c'est non rentable long terme",
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
        <a href="/formation/intermediaire/confluence" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px", background: "#1e293b",
            color: "white", border: "1px solid #334155",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>← Leçon 7</button>
        </a>
        <a href="/formation/intermediaire/sessions" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(to right, #16a34a, #9333ea)",
            color: "white", border: "none",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>Leçon 9 →</button>
        </a>
      </div>

    </div>
  );
}
