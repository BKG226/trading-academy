export default function Manipulation() {
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
        background: "linear-gradient(135deg, #7f1d1d, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #dc2626",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#f87171", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🪤 Manipulation du Marché
        </h1>
        <p style={{ color: "#f87171", margin: 0, fontSize: "14px" }}>
          Leçon 5 sur 10 — Comprendre les pièges des institutions
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
          🎯 Pourquoi le marché manipule ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          Les <strong style={{ color: "white" }}>grandes institutions</strong> (banques, hedge funds) ont besoin de <strong style={{ color: "#fbbf24" }}>liquidité</strong> pour remplir leurs gros ordres. 
          Elles créent des <strong style={{ color: "#f87171" }}>faux mouvements</strong> pour piéger les retail traders et voler leurs stops avant de partir dans la vraie direction.
        </p>
      </div>

      {/* FAUX BREAKOUT */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #dc2626",
      }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>
          🚨 1. Faux Breakout (False Break)
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Le prix <strong style={{ color: "#f87171" }}>dépasse un niveau clé</strong> (support, résistance, high/low) puis <strong style={{ color: "white" }}>revient immédiatement</strong> dans la zone. 
          Les retail traders entrent dans le breakout → les institutions prennent leur liquidité → le prix repart dans l'autre sens.
        </p>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 170" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Niveau résistance */}
            <line x1="0" y1="60" x2="300" y2="60" stroke="#f87171" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="5" y="55" fill="#f87171" fontSize="10">Résistance</text>

            {/* Prix qui approche */}
            <polyline points="20,140 80,100 130,65"
              fill="none" stroke="#34d399" strokeWidth="2" />

            {/* Faux breakout */}
            <polyline points="130,65 150,35"
              fill="none" stroke="#f87171" strokeWidth="2.5" />

            {/* Retour violent */}
            <polyline points="150,35 170,65 220,130 270,150"
              fill="none" stroke="#f87171" strokeWidth="2.5" />

            {/* Zone piège */}
            <rect x="125" y="30" width="55" height="35" fill="#dc2626" fillOpacity="0.15" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,2" />
            <text x="130" y="25" fill="#f87171" fontSize="9">PIÈGE 🪤</text>

            {/* Points */}
            <circle cx="150" cy="35" r="5" fill="#f87171" stroke="#dc2626" strokeWidth="2" />

            {/* Retail achète ici */}
            <text x="155" y="45" fill="#fbbf24" fontSize="9">Retail achète</text>

            {/* Flèche vraie direction */}
            <text x="225" y="125" fill="#f87171" fontSize="10" fontWeight="bold">SELL ↓</text>
          </svg>
        </div>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "12px 15px",
          borderLeft: "4px solid #f87171",
        }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ⚠️ <strong style={{ color: "white" }}>Comment éviter :</strong> Attends toujours qu'une bougie <strong style={{ color: "#fbbf24" }}>clôture</strong> au-dessus/en-dessous du niveau — jamais sur une mèche seule.
          </p>
        </div>
      </div>

      {/* LIQUIDITY SWEEP */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #7c3aed",
      }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>
          💧 2. Liquidity Sweep
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Les institutions savent que les retail traders placent leurs <strong style={{ color: "white" }}>stops sous les lows</strong> ou <strong style={{ color: "white" }}>au-dessus des highs</strong>. 
          Elles font un <strong style={{ color: "#a78bfa" }}>sweep rapide</strong> pour collecter cette liquidité puis repartent dans la vraie direction.
        </p>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 170" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Niveau low */}
            <line x1="0" y1="120" x2="300" y2="120" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="5" y="115" fill="#a78bfa" fontSize="10">Low clé — Stops ici</text>

            {/* Tendance haussière */}
            <polyline points="20,80 80,60 130,70 170,50"
              fill="none" stroke="#34d399" strokeWidth="2" />

            {/* Sweep sous le low */}
            <polyline points="170,50 185,125"
              fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="4,2" />

            {/* Rebond violent */}
            <polyline points="185,125 200,90 250,30"
              fill="none" stroke="#34d399" strokeWidth="2.5" />

            {/* Zone sweep */}
            <rect x="178" y="118" width="20" height="15" fill="#7c3aed" fillOpacity="0.3" stroke="#7c3aed" strokeWidth="1" />

            {/* Labels */}
            <circle cx="185" cy="125" r="5" fill="#a78bfa" stroke="#7c3aed" strokeWidth="2" />
            <text x="190" y="140" fill="#a78bfa" fontSize="9">Sweep 💧</text>
            <text x="220" y="55" fill="#34d399" fontSize="10" fontWeight="bold">BUY ↑</text>
            <text x="130" y="140" fill="#fbbf24" fontSize="9">Stops activés</text>
          </svg>
        </div>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "12px 15px",
          borderLeft: "4px solid #a78bfa",
        }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            💡 <strong style={{ color: "white" }}>Opportunité :</strong> Un liquidity sweep suivi d'un <strong style={{ color: "#a78bfa" }}>CHoCH ou engulfing</strong> dans la Golden Zone = <strong style={{ color: "#34d399" }}>entrée parfaite</strong>.
          </p>
        </div>
      </div>

      {/* STOP HUNT */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          🛑 3. Stop Hunt
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Le Stop Hunt est similaire au Liquidity Sweep mais plus <strong style={{ color: "white" }}>agressif et rapide</strong>. 
          Le prix spike violemment pour <strong style={{ color: "#fbbf24" }}>activer les stops</strong> puis revient immédiatement. 
          Tu le reconnais par une <strong style={{ color: "#fbbf24" }}>longue mèche</strong> qui dépasse un niveau clé.
        </p>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 170" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Niveau */}
            <line x1="0" y1="100" x2="300" y2="100" stroke="#d97706" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="5" y="95" fill="#d97706" fontSize="10">Zone de stops</text>

            {/* Consolidation */}
            <polyline points="20,80 60,75 100,82 140,78"
              fill="none" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Spike violent */}
            <line x1="160" y1="78" x2="160" y2="130" stroke="#f87171" strokeWidth="3" />
            <polygon points="155,130 165,130 160,145" fill="#f87171" />

            {/* Corps de la bougie */}
            <rect x="155" y="72" width="10" height="10" fill="#34d399" />

            {/* Rebond */}
            <polyline points="165,75 220,40 270,20"
              fill="none" stroke="#34d399" strokeWidth="2.5" />

            {/* Labels */}
            <text x="168" y="125" fill="#f87171" fontSize="9">Stop Hunt !</text>
            <text x="230" y="35" fill="#34d399" fontSize="10" fontWeight="bold">BUY ↑</text>
            <text x="140" y="155" fill="#fbbf24" fontSize="9">Longue mèche</text>
          </svg>
        </div>

        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "12px 15px",
          borderLeft: "4px solid #fbbf24",
        }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            💡 <strong style={{ color: "white" }}>Comment trader :</strong> Quand tu vois une longue mèche qui dépasse un niveau et revient → 
            c'est un stop hunt → cherche une <strong style={{ color: "#fbbf24" }}>confirmation d'entrée immédiatement</strong>.
          </p>
        </div>
      </div>

      {/* FAUX vs VRAI */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          🔍 Comment reconnaitre la manipulation ?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { icon: "⚡", text: "Mouvement très rapide sur un niveau clé", color: "#fbbf24" },
            { icon: "📏", text: "Longue mèche qui dépasse puis revient vite", color: "#f87171" },
            { icon: "📊", text: "Volume spike au moment du sweep", color: "#a78bfa" },
            { icon: "⏰", text: "Souvent au début des sessions Londres/NY", color: "#34d399" },
            { icon: "🎯", text: "Toujours sur des niveaux où les stops s'accumulent", color: "#60a5fa" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <span style={{ color: item.color, fontSize: "14px" }}>{item.text}</span>
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
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          ⭐ Règle Pro — Trade la manipulation
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Ne jamais entrer sur un breakout sans attendre la clôture de bougie",
            "Manipulation + Golden Zone = setup de très haute probabilité",
            "Après un stop hunt → attends un CHoCH ou engulfing pour confirmer",
            "La manipulation se produit pour aller chercher la liquidité AVANT le vrai move",
            "Plus le niveau est évident pour le retail → plus la manipulation est probable",
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
        <a href="/formation/intermediaire/fibonacci" style={{ flex: 1, textDecoration: "none" }}>
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
            ← Leçon 4
          </button>
        </a>
        <a href="/formation/intermediaire/patterns" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(to right, #dc2626, #059669)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            cursor: "pointer",
          }}>
            Leçon 6 →
          </button>
        </a>
      </div>

    </div>
  );
}
