export default function Candlesticks() {
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
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #d97706",
      }}>
        <a href="/formation/debutant" style={{ color: "#fbbf24", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🕯️ Qu'est-ce qu'un Chandelier ?
        </h1>
        <p style={{ color: "#fbbf24", margin: 0, fontSize: "14px" }}>
          Leçon 3 sur 15 — Niveau Débutant
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
          🎯 Définition
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Un chandelier japonais (ou bougie) est une <strong style={{ color: "white" }}>représentation graphique</strong> du 
          mouvement du prix sur une période de temps définie. Il montre en un seul coup d'œil 
          <strong style={{ color: "#fbbf24" }}> 4 informations essentielles</strong> : 
          le prix d'ouverture, le prix de clôture, le plus haut et le plus bas.
        </p>
      </div>

      {/* ANATOMIE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #2563eb",
      }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>
          🔬 Anatomie complète d'une bougie
        </h2>

        {/* SVG ANATOMIE */}
        <div style={{
          background: "#0f172a",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 280" style={{ width: "100%", maxWidth: "300px" }}>

            {/* BOUGIE HAUSSIÈRE */}
            {/* Mèche haute */}
            <line x1="75" y1="20" x2="75" y2="60" stroke="#34d399" strokeWidth="3" />
            {/* Corps */}
            <rect x="50" y="60" width="50" height="120" fill="#34d399" rx="4" />
            {/* Mèche basse */}
            <line x1="75" y1="180" x2="75" y2="230" stroke="#34d399" strokeWidth="3" />

            {/* Labels HAUSSIÈRE */}
            <text x="110" y="25" fill="#94a3b8" fontSize="11">Plus Haut (High)</text>
            <line x1="108" y1="25" x2="80" y2="25" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" />

            <text x="110" y="65" fill="#34d399" fontSize="11">Clôture (Close)</text>
            <line x1="108" y1="65" x2="100" y2="65" stroke="#34d399" strokeWidth="1" strokeDasharray="3,2" />

            <text x="5" y="130" fill="#60a5fa" fontSize="11">Corps</text>
            <text x="5" y="145" fill="#60a5fa" fontSize="10">(Body)</text>

            <text x="110" y="178" fill="#f87171" fontSize="11">Ouverture (Open)</text>
            <line x1="108" y1="178" x2="100" y2="178" stroke="#f87171" strokeWidth="1" strokeDasharray="3,2" />

            <text x="110" y="228" fill="#94a3b8" fontSize="11">Plus Bas (Low)</text>
            <line x1="108" y1="228" x2="80" y2="228" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" />

            {/* Mèches labels */}
            <text x="5" y="40" fill="#fbbf24" fontSize="10">Mèche</text>
            <text x="5" y="52" fill="#fbbf24" fontSize="10">haute</text>

            <text x="5" y="210" fill="#fbbf24" fontSize="10">Mèche</text>
            <text x="5" y="222" fill="#fbbf24" fontSize="10">basse</text>

            {/* Label HAUSSIÈRE */}
            <text x="35" y="265" fill="#34d399" fontSize="12" fontWeight="bold">HAUSSIÈRE 📈</text>

          </svg>
        </div>

        {/* 4 INFORMATIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { info: "Open (Ouverture)", desc: "Prix auquel la bougie a commencé — le point de départ", color: "#f87171", icon: "🔴" },
            { info: "Close (Clôture)", desc: "Prix auquel la bougie s'est terminée — le point d'arrivée", color: "#34d399", icon: "🟢" },
            { info: "High (Plus Haut)", desc: "Le prix le plus haut atteint pendant la période — sommet de la mèche haute", color: "#60a5fa", icon: "⬆️" },
            { info: "Low (Plus Bas)", desc: "Le prix le plus bas atteint pendant la période — bas de la mèche basse", color: "#fbbf24", icon: "⬇️" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              borderLeft: `4px solid ${item.color}`,
            }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.info}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "3px", lineHeight: "1.5" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HAUSSIÈRE VS BAISSIÈRE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #334155",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          ⚔️ Bougie Haussière vs Baissière
        </h2>

        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>

          {/* HAUSSIÈRE */}
          <div style={{
            flex: 1,
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #16a34a",
            textAlign: "center",
          }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "15px", margin: "0 0 15px 0" }}>
              📈 Haussière
            </p>
            <svg viewBox="0 0 80 160" style={{ width: "60px", height: "120px" }}>
              <line x1="40" y1="10" x2="40" y2="30" stroke="#34d399" strokeWidth="3" />
              <rect x="20" y="30" width="40" height="80" fill="#34d399" rx="3" />
              <line x1="40" y1="110" x2="40" y2="145" stroke="#34d399" strokeWidth="3" />
              {/* Labels */}
              <text x="62" y="33" fill="#34d399" fontSize="9">Close</text>
              <text x="62" y="112" fill="#f87171" fontSize="9">Open</text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px", textAlign: "left" }}>
              <div style={{ color: "#34d399", fontSize: "13px" }}>✅ Close {'>'} Open</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>Les acheteurs ont gagné</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>Prix a monté sur la période</div>
              <div style={{ color: "#34d399", fontSize: "12px" }}>Couleur : Verte</div>
            </div>
          </div>

          {/* BAISSIÈRE */}
          <div style={{
            flex: 1,
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #dc2626",
            textAlign: "center",
          }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "15px", margin: "0 0 15px 0" }}>
              📉 Baissière
            </p>
            <svg viewBox="0 0 80 160" style={{ width: "60px", height: "120px" }}>
              <line x1="40" y1="10" x2="40" y2="30" stroke="#f87171" strokeWidth="3" />
              <rect x="20" y="30" width="40" height="80" fill="#f87171" rx="3" />
              <line x1="40" y1="110" x2="40" y2="145" stroke="#f87171" strokeWidth="3" />
              <text x="62" y="33" fill="#f87171" fontSize="9">Open</text>
              <text x="62" y="112" fill="#34d399" fontSize="9">Close</text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px", textAlign: "left" }}>
              <div style={{ color: "#f87171", fontSize: "13px" }}>✅ Open {'>'} Close</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>Les vendeurs ont gagné</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>Prix a baissé sur la période</div>
              <div style={{ color: "#f87171", fontSize: "12px" }}>Couleur : Rouge</div>
            </div>
          </div>
        </div>
      </div>

      {/* LES MÈCHES */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          📏 Les Mèches — Ce qu'elles racontent
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "14px", marginBottom: "15px" }}>
          Les mèches (aussi appelées <strong style={{ color: "white" }}>ombres ou shadows</strong>) sont les lignes fines 
          au-dessus et en-dessous du corps de la bougie. Elles représentent les 
          <strong style={{ color: "#fbbf24" }}> zones de rejet du prix</strong>.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* MÈCHE HAUTE */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #60a5fa",
          }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <svg viewBox="0 0 50 100" style={{ width: "40px", height: "80px", flexShrink: 0 }}>
                <line x1="25" y1="5" x2="25" y2="40" stroke="#60a5fa" strokeWidth="3" />
                <rect x="10" y="40" width="30" height="30" fill="#34d399" rx="3" />
                <line x1="25" y1="70" x2="25" y2="85" stroke="#34d399" strokeWidth="3" />
              </svg>
              <div>
                <div style={{ color: "#60a5fa", fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>
                  🔝 Longue mèche haute
                </div>
                <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6" }}>
                  Le prix a essayé de monter mais a été <strong style={{ color: "white" }}>rejeté par les vendeurs</strong>. 
                  Signal de résistance — les vendeurs sont forts à ce niveau.
                </div>
              </div>
            </div>
          </div>

          {/* MÈCHE BASSE */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #34d399",
          }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <svg viewBox="0 0 50 100" style={{ width: "40px", height: "80px", flexShrink: 0 }}>
                <line x1="25" y1="5" x2="25" y2="20" stroke="#34d399" strokeWidth="3" />
                <rect x="10" y="20" width="30" height="30" fill="#34d399" rx="3" />
                <line x1="25" y1="50" x2="25" y2="90" stroke="#60a5fa" strokeWidth="3" />
              </svg>
              <div>
                <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>
                  🔽 Longue mèche basse
                </div>
                <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6" }}>
                  Le prix a essayé de baisser mais a été <strong style={{ color: "white" }}>rejeté par les acheteurs</strong>. 
                  Signal de support — les acheteurs sont forts à ce niveau.
                </div>
              </div>
            </div>
          </div>

          {/* PAS DE MÈCHE */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #fbbf24",
          }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <svg viewBox="0 0 50 100" style={{ width: "40px", height: "80px", flexShrink: 0 }}>
                <rect x="10" y="20" width="30" height="60" fill="#34d399" rx="3" />
              </svg>
              <div>
                <div style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>
                  💪 Pas de mèche (Marubozu)
                </div>
                <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6" }}>
                  Le prix a ouvert au plus bas et fermé au plus haut (ou inversement). 
                  Signal de <strong style={{ color: "white" }}>force maximale</strong> dans la direction de la bougie.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TIMEFRAMES */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          ⏱️ Une bougie = Une période de temps
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Chaque bougie représente une période de temps spécifique selon le timeframe que tu utilises :
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { tf: "M1 (1 minute)", desc: "Chaque bougie = 1 minute d'activité du marché", color: "#f87171" },
            { tf: "M5 (5 minutes)", desc: "Chaque bougie = 5 minutes d'activité du marché", color: "#fbbf24" },
            { tf: "H1 (1 heure)", desc: "Chaque bougie = 1 heure d'activité du marché", color: "#34d399" },
            { tf: "H4 (4 heures)", desc: "Chaque bougie = 4 heures d'activité du marché", color: "#60a5fa" },
            { tf: "D1 (Daily)", desc: "Chaque bougie = 1 journée complète de trading", color: "#a78bfa" },
            { tf: "W1 (Weekly)", desc: "Chaque bougie = 1 semaine complète de trading", color: "#fbbf24" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "10px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.tf}</span>
              <span style={{ color: "#64748b", fontSize: "12px", textAlign: "right", maxWidth: "60%" }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PSYCHOLOGIE */}
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "25px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          🧠 La Psychologie derrière chaque bougie
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Chaque bougie raconte une <strong style={{ color: "white" }}>histoire complète</strong> de la bataille 
          entre acheteurs et vendeurs pendant cette période. Voici comment lire cette histoire :
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { etape: "Ouverture", desc: "Le match commence — acheteurs et vendeurs se préparent", color: "#60a5fa" },
            { etape: "Corps de la bougie", desc: "La bataille principale — qui prend le contrôle pendant la période ?", color: "#fbbf24" },
            { etape: "Mèches", desc: "Les tentatives échouées — zones où le prix a été rejeté", color: "#a78bfa" },
            { etape: "Clôture", desc: "Le résultat final — qui a gagné la bataille de cette période ?", color: "#34d399" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              borderLeft: `4px solid ${item.color}`,
            }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.etape}</div>
              <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/debutant/history" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px", background: "#1e293b",
            color: "white", border: "1px solid #334155",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>← Leçon 2</button>
        </a>
        <a href="/formation/debutant/patterns" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(to right, #d97706, #0891b2)",
            color: "white", border: "none",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>Leçon 4 →</button>
        </a>
      </div>

    </div>
  );
}
