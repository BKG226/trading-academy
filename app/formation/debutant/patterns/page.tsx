cat > app/formation/debutant/patterns/page.tsx << 'EOF'
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
        background: "linear-gradient(135deg, #0c4a6e, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #0891b2",
      }}>
        <a href="/formation/debutant" style={{ color: "#67e8f9", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          📊 Patterns de Chandeliers
        </h1>
        <p style={{ color: "#67e8f9", margin: 0, fontSize: "14px" }}>
          Leçon 4 sur 15 — Les patterns les plus puissants
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
          🎯 Pourquoi apprendre les patterns ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Les patterns de chandeliers sont des <strong style={{ color: "white" }}>formations récurrentes</strong> qui 
          apparaissent sur les graphiques. Ils représentent des moments précis où la 
          <strong style={{ color: "#fbbf24" }}> psychologie des traders change</strong> — et donc où le prix 
          risque de changer de direction. Apprendre à les reconnaître te donne un 
          <strong style={{ color: "#34d399" }}> avantage énorme</strong> sur le marché.
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
          🟢 1. Engulfing Bar (Avalement)
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          L'Engulfing est l'un des patterns les plus <strong style={{ color: "white" }}>puissants et fiables</strong>. 
          Il se compose de deux bougies où la deuxième 
          <strong style={{ color: "#34d399" }}> avale complètement</strong> la première — corps et mèches.
          C'est un signal fort de retournement ou de continuation.
        </p>

        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          {/* Bullish Engulfing */}
          <div style={{
            flex: 1, background: "#0f172a", borderRadius: "12px",
            padding: "15px", border: "1px solid #16a34a", textAlign: "center",
          }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>
              Bullish 📈
            </p>
            <svg viewBox="0 0 100 140" style={{ width: "80px", height: "110px" }}>
              {/* Bougie baissière */}
              <line x1="30" y1="15" x2="30" y2="25" stroke="#f87171" strokeWidth="2" />
              <rect x="20" y="25" width="20" height="50" fill="#f87171" rx="2" />
              <line x1="30" y1="75" x2="30" y2="85" stroke="#f87171" strokeWidth="2" />
              {/* Bougie haussière qui avale */}
              <line x1="65" y1="10" x2="65" y2="20" stroke="#34d399" strokeWidth="2" />
              <rect x="53" y="20" width="24" height="75" fill="#34d399" rx="2" />
              <line x1="65" y1="95" x2="65" y2="108" stroke="#34d399" strokeWidth="2" />
              {/* Labels */}
              <text x="8" y="128" fill="#f87171" fontSize="9">Baissière</text>
              <text x="45" y="128" fill="#34d399" fontSize="9">Avale ✓</text>
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px", margin: "5px 0 0 0" }}>
              Signal : BUY 🔥
            </p>
          </div>

          {/* Bearish Engulfing */}
          <div style={{
            flex: 1, background: "#0f172a", borderRadius: "12px",
            padding: "15px", border: "1px solid #dc2626", textAlign: "center",
          }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>
              Bearish 📉
            </p>
            <svg viewBox="0 0 100 140" style={{ width: "80px", height: "110px" }}>
              <line x1="30" y1="15" x2="30" y2="25" stroke="#34d399" strokeWidth="2" />
              <rect x="20" y="25" width="20" height="50" fill="#34d399" rx="2" />
              <line x1="30" y1="75" x2="30" y2="85" stroke="#34d399" strokeWidth="2" />
              <line x1="65" y1="10" x2="65" y2="20" stroke="#f87171" strokeWidth="2" />
              <rect x="53" y="20" width="24" height="75" fill="#f87171" rx="2" />
              <line x1="65" y1="95" x2="65" y2="108" stroke="#f87171" strokeWidth="2" />
              <text x="8" y="128" fill="#34d399" fontSize="9">Haussière</text>
              <text x="45" y="128" fill="#f87171" fontSize="9">Avale ✓</text>
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px", margin: "5px 0 0 0" }}>
              Signal : SELL 🔥
            </p>
          </div>
        </div>

        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #34d399" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> La 2ème bougie doit être 
            <strong style={{ color: "#34d399" }}> significativement plus grande</strong> que la 1ère. 
            Plus c'est grand, plus le signal est fort. Attends toujours la clôture complète !
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
          ➕ 2. Le Doji — L'Indécision
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Le Doji est une bougie dont le <strong style={{ color: "white" }}>corps est quasi inexistant</strong> — 
          le prix d'ouverture et de clôture sont presque identiques. Il représente une 
          <strong style={{ color: "#a78bfa" }}> parfaite indécision</strong> entre acheteurs et vendeurs. 
          Sur une zone clé, c'est un signal de retournement potentiel.
        </p>

        <div style={{
          background: "#0f172a",
          borderRadius: "12px",
          padding: "15px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 300 130" style={{ width: "100%", maxWidth: "300px" }}>
            {/* Doji standard */}
            <line x1="50" y1="15" x2="50" y2="110" stroke="#a78bfa" strokeWidth="2.5" />
            <rect x="43" y="58" width="14" height="5" fill="#a78bfa" />
            <text x="25" y="125" fill="#a78bfa" fontSize="10">Standard</text>

            {/* Dragonfly Doji */}
            <line x1="130" y1="20" x2="130" y2="100" stroke="#34d399" strokeWidth="2.5" />
            <rect x="123" y="20" width="14" height="6" fill="#34d399" />
            <text x="105" y="125" fill="#34d399" fontSize="10">Dragonfly 🐉</text>

            {/* Gravestone Doji */}
            <line x1="210" y1="20" x2="210" y2="100" stroke="#f87171" strokeWidth="2.5" />
            <rect x="203" y="94" width="14" height="6" fill="#f87171" />
            <text x="185" y="125" fill="#f87171" fontSize="10">Gravestone 🪦</text>

            {/* Long-legged Doji */}
            <line x1="270" y1="10" x2="270" y2="115" stroke="#fbbf24" strokeWidth="2.5" />
            <rect x="263" y="58" width="14" height="5" fill="#fbbf24" />
            <text x="248" y="125" fill="#fbbf24" fontSize="8">Long-leg</text>
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { type: "Doji Standard", desc: "Indécision totale — acheteurs et vendeurs à égalité parfaite", color: "#a78bfa" },
            { type: "Dragonfly Doji 🐉", desc: "Longue mèche basse → rejet fort du bas → signal haussier potentiel", color: "#34d399" },
            { type: "Gravestone Doji 🪦", desc: "Longue mèche haute → rejet fort du haut → signal baissier potentiel", color: "#f87171" },
            { type: "Long-legged Doji", desc: "Mèches longues des deux côtés → indécision extrême → explosion imminente", color: "#fbbf24" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              borderLeft: `4px solid ${item.color}`,
            }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.type}</div>
              <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MORNING STAR */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #fbbf24",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          ⭐ 3. Morning Star & Evening Star
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Ce sont des patterns à <strong style={{ color: "white" }}>3 bougies</strong> très puissants qui signalent 
          un retournement majeur. Le Morning Star (étoile du matin) signale une 
          <strong style={{ color: "#34d399" }}> fin de tendance baissière</strong>, et l'Evening Star 
          (étoile du soir) signale une <strong style={{ color: "#f87171" }}>fin de tendance haussière</strong>.
        </p>

        {/* Morning Star */}
        <div style={{
          background: "#0f172a",
          borderRadius: "12px",
          padding: "15px",
          marginBottom: "15px",
        }}>
          <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>
            🌅 Morning Star — Signal BUY
          </p>
          <svg viewBox="0 0 280 130" style={{ width: "100%", maxWidth: "280px" }}>
            {/* Bougie 1 baissière grande */}
            <line x1="50" y1="15" x2="50" y2="25" stroke="#f87171" strokeWidth="2" />
            <rect x="35" y="25" width="30" height="70" fill="#f87171" rx="3" />
            <line x1="50" y1="95" x2="50" y2="105" stroke="#f87171" strokeWidth="2" />
            <text x="30" y="120" fill="#f87171" fontSize="9">Baissière</text>

            {/* Bougie 2 petit doji */}
            <line x1="130" y1="85" x2="130" y2="95" stroke="#fbbf24" strokeWidth="2" />
            <rect x="120" y="95" width="20" height="10" fill="#fbbf24" rx="2" />
            <line x1="130" y1="105" x2="130" y2="115" stroke="#fbbf24" strokeWidth="2" />
            <text x="112" y="125" fill="#fbbf24" fontSize="9">⭐ Étoile</text>

            {/* Bougie 3 haussière grande */}
            <line x1="210" y1="15" x2="210" y2="25" stroke="#34d399" strokeWidth="2" />
            <rect x="195" y="25" width="30" height="70" fill="#34d399" rx="3" />
            <line x1="210" y1="95" x2="210" y2="105" stroke="#34d399" strokeWidth="2" />
            <text x="188" y="120" fill="#34d399" fontSize="9">Haussière</text>
          </svg>
          <div style={{
            background: "#1e293b",
            borderRadius: "8px",
            padding: "10px",
            marginTop: "10px",
            borderLeft: "3px solid #34d399",
          }}>
            <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
              📌 <strong style={{ color: "white" }}>Lecture :</strong> Grande bougie baissière → 
              Petite bougie d'indécision (gap si possible) → 
              Grande bougie haussière qui remonte = <strong style={{ color: "#34d399" }}>BUY !</strong>
            </p>
          </div>
        </div>

        {/* Evening Star */}
        <div style={{
          background: "#0f172a",
          borderRadius: "12px",
          padding: "15px",
        }}>
          <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>
            🌆 Evening Star — Signal SELL
          </p>
          <svg viewBox="0 0 280 130" style={{ width: "100%", maxWidth: "280px" }}>
            <line x1="50" y1="25" x2="50" y2="35" stroke="#34d399" strokeWidth="2" />
            <rect x="35" y="35" width="30" height="70" fill="#34d399" rx="3" />
            <line x1="50" y1="105" x2="50" y2="115" stroke="#34d399" strokeWidth="2" />
            <text x="30" y="125" fill="#34d399" fontSize="9">Haussière</text>

            <line x1="130" y1="15" x2="130" y2="25" stroke="#fbbf24" strokeWidth="2" />
            <rect x="120" y="25" width="20" height="10" fill="#fbbf24" rx="2" />
            <line x1="130" y1="35" x2="130" y2="45" stroke="#fbbf24" strokeWidth="2" />
            <text x="112" y="60" fill="#fbbf24" fontSize="9">⭐ Étoile</text>

            <line x1="210" y1="25" x2="210" y2="35" stroke="#f87171" strokeWidth="2" />
            <rect x="195" y="35" width="30" height="70" fill="#f87171" rx="3" />
            <line x1="210" y1="105" x2="210" y2="115" stroke="#f87171" strokeWidth="2" />
            <text x="190" y="125" fill="#f87171" fontSize="9">Baissière</text>
          </svg>
          <div style={{
            background: "#1e293b",
            borderRadius: "8px",
            padding: "10px",
            marginTop: "10px",
            borderLeft: "3px solid #f87171",
          }}>
            <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
              📌 <strong style={{ color: "white" }}>Lecture :</strong> Grande bougie haussière → 
              Petite bougie d'indécision → 
              Grande bougie baissière qui descend = <strong style={{ color: "#f87171" }}>SELL !</strong>
            </p>
          </div>
        </div>
      </div>

      {/* HAMMER & SHOOTING STAR */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          🔨 4. Hammer & Shooting Star
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Ce sont des bougies à <strong style={{ color: "white" }}>une seule longue mèche</strong> qui montrent 
          un rejet fort d'un niveau de prix. Ils apparaissent souvent aux extremes du marché 
          et signalent un <strong style={{ color: "#38bdf8" }}>retournement imminent</strong>.
        </p>

        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          {/* Hammer */}
          <div style={{
            flex: 1, background: "#0f172a", borderRadius: "12px",
            padding: "15px", border: "1px solid #34d399", textAlign: "center",
          }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>
              🔨 Hammer
            </p>
            <svg viewBox="0 0 60 130" style={{ width: "50px", height: "100px" }}>
              <line x1="30" y1="10" x2="30" y2="25" stroke="#34d399" strokeWidth="2" />
              <rect x="18" y="25" width="24" height="25" fill="#34d399" rx="3" />
              <line x1="30" y1="50" x2="30" y2="110" stroke="#34d399" strokeWidth="2.5" />
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px", margin: "5px 0 0 0" }}>
              Longue mèche basse
            </p>
            <p style={{ color: "#34d399", fontSize: "11px", fontWeight: "bold" }}>
              Signal BUY ↑
            </p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>
              Apparaît après une baisse
            </p>
          </div>

          {/* Shooting Star */}
          <div style={{
            flex: 1, background: "#0f172a", borderRadius: "12px",
            padding: "15px", border: "1px solid #dc2626", textAlign: "center",
          }}>
            <p style={{ color: "#f87171", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>
              🌠 Shooting Star
            </p>
            <svg viewBox="0 0 60 130" style={{ width: "50px", height: "100px" }}>
              <line x1="30" y1="10" x2="30" y2="70" stroke="#f87171" strokeWidth="2.5" />
              <rect x="18" y="70" width="24" height="25" fill="#f87171" rx="3" />
              <line x1="30" y1="95" x2="30" y2="110" stroke="#f87171" strokeWidth="2" />
            </svg>
            <p style={{ color: "#94a3b8", fontSize: "11px", margin: "5px 0 0 0" }}>
              Longue mèche haute
            </p>
            <p style={{ color: "#f87171", fontSize: "11px", fontWeight: "bold" }}>
              Signal SELL ↓
            </p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>
              Apparaît après une hausse
            </p>
          </div>
        </div>

        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #38bdf8" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Règle :</strong> La mèche doit faire 
            <strong style={{ color: "#38bdf8" }}> au moins 2x la taille du corps</strong>. 
            Plus la mèche est longue, plus le rejet est fort et le signal fiable.
          </p>
        </div>
      </div>

      {/* HARAMI */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          🤰 5. Le Harami — La Mère et l'Enfant
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Harami signifie <strong style={{ color: "white" }}>"enceinte"</strong> en japonais. 
          C'est un pattern à 2 bougies où la 2ème est 
          <strong style={{ color: "#fbbf24" }}> complètement contenue</strong> dans le corps de la 1ère. 
          Il signale un affaiblissement de la tendance et un retournement possible.
        </p>

        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          {/* Bullish Harami */}
          <div style={{
            flex: 1, background: "#0f172a", borderRadius: "12px",
            padding: "15px", border: "1px solid #34d399", textAlign: "center",
          }}>
            <p style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>
              Bullish Harami
            </p>
            <svg viewBox="0 0 100 130" style={{ width: "80px", height: "110px" }}>
              <rect x="20" y="15" width="30" height="80" fill="#f87171" rx="3" />
              <rect x="28" y="35" width="14" height="30" fill="#34d399" rx="2" />
              <text x="5" y="115" fill="#f87171" fontSize="9">Grande</text>
              <text x="50" y="115" fill="#34d399" fontSize="9">Petite</text>
            </svg>
            <p style={{ color: "#34d399", fontSize: "11px" }}>Signal BUY potentiel</p>
          </div>

          {/* Bearish Harami */}
          <div style={{
            flex: 1, background: "#0f172a", borderRadius: "12px",
            padding: "15px", border: "1px solid #dc2626"
