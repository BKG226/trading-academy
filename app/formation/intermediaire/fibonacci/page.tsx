export default function Fibonacci() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      fontFamily: "Arial",
      padding: "20px",
      color: "white",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #d97706",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#fbbf24", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🎯 Golden Zone Fibonacci
        </h1>
        <p style={{ color: "#fbbf24", margin: 0, fontSize: "14px" }}>
          Leçon 4 sur 10 — La leçon la plus puissante
        </p>
      </div>

      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Pourquoi la Golden Zone ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          La Golden Zone est la zone entre <strong style={{ color: "#fbbf24" }}>0.50 et 0.618</strong> du retracement de Fibonacci. 
          C'est ici que les <strong style={{ color: "white" }}>institutions placent leurs ordres</strong> lors d'un retracement. 
          Structure claire + Golden Zone = <strong style={{ color: "#34d399" }}>entrée haute probabilité</strong>.
        </p>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>📐 Les niveaux clés</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { niveau: "0.236", desc: "Retracement faible — continuation forte", color: "#94a3b8", important: false },
            { niveau: "0.382", desc: "Retracement modéré — bon niveau", color: "#60a5fa", important: false },
            { niveau: "0.500", desc: "🌟 Début GOLDEN ZONE — niveau institutionnel", color: "#fbbf24", important: true },
            { niveau: "0.618", desc: "🌟 Fin GOLDEN ZONE — Golden Ratio", color: "#fbbf24", important: true },
            { niveau: "0.786", desc: "Dernier niveau avant invalidation", color: "#f87171", important: false },
          ].map((item, i) => (
            <div key={i} style={{
              background: item.important ? "linear-gradient(135deg, #78350f, #0f172a)" : "#0f172a",
              borderRadius: "10px", padding: "12px 15px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              border: item.important ? "1px solid #d97706" : "1px solid #1e293b",
            }}>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "16px" }}>{item.important ? "⭐ " : ""}{item.niveau}</span>
              <span style={{ color: item.important ? "#fcd34d" : "#94a3b8", fontSize: "13px", textAlign: "right", maxWidth: "65%" }}>{item.desc}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "10px", padding: "15px", marginTop: "15px", border: "2px solid #d97706", textAlign: "center" }}>
          <div style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "18px" }}>🎯 GOLDEN ZONE = 0.50 → 0.618</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "5px" }}>La zone où les institutions achètent ou vendent</div>
        </div>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📈 Structure HAUSSIÈRE + Golden Zone</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Trace le Fibo du <strong style={{ color: "#60a5fa" }}>bas (0)</strong> vers le <strong style={{ color: "#fbbf24" }}>haut (1)</strong>. 
          Attends le retracement dans la <strong style={{ color: "#fbbf24" }}>Golden Zone 0.50-0.618</strong> → cherche un BUY.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 200" style={{ width: "100%", maxWidth: "300px" }}>
            <rect x="0" y="90" width="300" height="40" fill="#d97706" fillOpacity="0.15" />
            <line x1="0" y1="180" x2="300" y2="180" stroke="#334155" strokeWidth="1" />
            <line x1="0" y1="137" x2="300" y2="137" stroke="#60a5fa" strokeWidth="0.8" strokeDasharray="4,3" />
            <line x1="0" y1="110" x2="300" y2="110" stroke="#fbbf24" strokeWidth="1.5" />
            <line x1="0" y1="90" x2="300" y2="90" stroke="#fbbf24" strokeWidth="1.5" />
            <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeWidth="1" />
            <text x="5" y="178" fill="#94a3b8" fontSize="9">0</text>
            <text x="5" y="135" fill="#60a5fa" fontSize="9">0.382</text>
            <text x="5" y="108" fill="#fbbf24" fontSize="9">0.500</text>
            <text x="5" y="88" fill="#fbbf24" fontSize="9">0.618</text>
            <text x="5" y="18" fill="#94a3b8" fontSize="9">1</text>
            <text x="185" y="107" fill="#fbbf24" fontSize="10" fontWeight="bold">GOLDEN ZONE 🎯</text>
            <polyline points="30,180 100,20" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <polyline points="100,20 160,105" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3" />
            <polyline points="160,105 260,10" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <circle cx="30" cy="180" r="4" fill="#60a5fa" />
            <circle cx="100" cy="20" r="4" fill="#fbbf24" />
            <circle cx="160" cy="105" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
            <circle cx="260" cy="10" r="4" fill="#34d399" />
            <text x="165" y="98" fill="#34d399" fontSize="11" fontWeight="bold">BUY ↑</text>
          </svg>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #34d399" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Processus :</strong> Trace Fibo bas → haut → Retracement dans 0.50-0.618 → Confirmation → BUY
          </p>
        </div>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #dc2626" }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>📉 Structure BAISSIÈRE + Golden Zone</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Trace le Fibo du <strong style={{ color: "#fbbf24" }}>haut (0)</strong> vers le <strong style={{ color: "#60a5fa" }}>bas (1)</strong>. 
          Attends que le prix remonte dans la <strong style={{ color: "#fbbf24" }}>Golden Zone 0.50-0.618</strong> → cherche un SELL.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 200" style={{ width: "100%", maxWidth: "300px" }}>
            <rect x="0" y="75" width="300" height="40" fill="#d97706" fillOpacity="0.15" />
            <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeWidth="1" />
            <line x1="0" y1="63" x2="300" y2="63" stroke="#60a5fa" strokeWidth="0.8" strokeDasharray="4,3" />
            <line x1="0" y1="75" x2="300" y2="75" stroke="#fbbf24" strokeWidth="1.5" />
            <line x1="0" y1="115" x2="300" y2="115" stroke="#fbbf24" strokeWidth="1.5" />
            <line x1="0" y1="180" x2="300" y2="180" stroke="#334155" strokeWidth="1" />
            <text x="5" y="18" fill="#94a3b8" fontSize="9">0</text>
            <text x="5" y="61" fill="#60a5fa" fontSize="9">0.382</text>
            <text x="5" y="73" fill="#fbbf24" fontSize="9">0.618</text>
            <text x="5" y="113" fill="#fbbf24" fontSize="9">0.500</text>
            <text x="5" y="178" fill="#94a3b8" fontSize="9">1</text>
            <text x="185" y="100" fill="#fbbf24" fontSize="10" fontWeight="bold">GOLDEN ZONE 🎯</text>
            <polyline points="30,20 100,180" fill="none" stroke="#f87171" strokeWidth="2.5" />
            <polyline points="100,180 160,90" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3" />
            <polyline points="160,90 260,185" fill="none" stroke="#f87171" strokeWidth="2.5" />
            <circle cx="30" cy="20" r="4" fill="#fbbf24" />
            <circle cx="100" cy="180" r="4" fill="#60a5fa" />
            <circle cx="160" cy="90" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
            <circle cx="260" cy="185" r="4" fill="#f87171" />
            <text x="165" y="83" fill="#f87171" fontSize="11" fontWeight="bold">SELL ↓</text>
          </svg>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #f87171" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Processus :</strong> Trace Fibo haut → bas → Retracement dans 0.50-0.618 → Confirmation → SELL
          </p>
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles d'or Fibonacci</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Trace toujours le Fibo sur un mouvement impulsif clair — pas sur du bruit",
            "La Golden Zone 0.50-0.618 est ta zone de patience — tu attends le prix là",
            "Si le prix casse sous 0.618 en haussier → attends 0.786 ou invalide le setup",
            "Plus la structure HTF est claire, plus la Golden Zone est puissante",
            "Golden Zone + Zone d'offre/demande = confluence parfaite",
          ].map((rule, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "10px" }}>
              <span style={{ color: "#fbbf24", flexShrink: 0 }}>→</span>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/intermediaire/offre-demande" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 3
          </button>
        </a>
        <a href="/formation/intermediaire/manipulation" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #d97706, #dc2626)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 5 →
          </button>
        </a>
      </div>

    </div>
  );
}
