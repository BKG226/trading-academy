export default function History() {
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
          🏯 Histoire des Chandeliers
        </h1>
        <p style={{ color: "#fbbf24", margin: 0, fontSize: "14px" }}>
          Leçon 2 sur 15 — Niveau Débutant
        </p>
      </div>

      {/* ORIGINE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #334155",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          🎌 L'origine japonaise
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Les chandeliers japonais ont été inventés au <strong style={{ color: "white" }}>17ème siècle au Japon</strong> par un trader de riz nommé 
          <strong style={{ color: "#fbbf24" }}> Munehisa Homma</strong>. Il découvrit que les prix du riz étaient influencés non seulement par 
          l'offre et la demande, mais aussi par les <strong style={{ color: "white" }}>émotions des traders</strong>.
        </p>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px", marginTop: "10px" }}>
          Il devint l'un des traders les plus riches de son époque grâce à cette méthode d'analyse, 
          accumulant une fortune équivalente à <strong style={{ color: "#fbbf24" }}>plusieurs milliards de dollars</strong> en valeur actuelle.
        </p>
      </div>

      {/* TIMELINE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #7c3aed",
      }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>
          📅 Timeline Historique
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          {[
            { annee: "1600s", event: "Munehisa Homma invente la méthode des chandeliers pour trader le riz à Osaka", color: "#fbbf24" },
            { annee: "1700s", event: "La méthode se répand dans tout le Japon et devient la référence pour les marchés de riz", color: "#f87171" },
            { annee: "1850s", event: "Homma publie ses livres sur la psychologie des marchés — premiers livres de trading de l'histoire", color: "#34d399" },
            { annee: "1980s", event: "Steve Nison découvre les chandeliers japonais et les introduit en Occident", color: "#60a5fa" },
            { annee: "1991", event: "Steve Nison publie Japanese Candlestick Charting Techniques — révolution mondiale du trading", color: "#a78bfa" },
            { annee: "Aujourd'hui", event: "Les chandeliers sont utilisés par 90% des traders professionnels dans le monde entier", color: "#34d399" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "15px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: item.color,
                  flexShrink: 0,
                  marginTop: "4px",
                }} />
                {i < 5 && <div style={{ width: "2px", flex: 1, background: "#334155", minHeight: "30px" }} />}
              </div>
              <div style={{ paddingBottom: "20px" }}>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.annee}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6", marginTop: "3px" }}>{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MUNEHISA HOMMA */}
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #d97706",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          👨‍💼 Munehisa Homma — Le père des chandeliers
        </h2>

        {/* SVG Portrait stylisé */}
        <div style={{
          background: "#0f172a",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "15px",
          textAlign: "center",
        }}>
          <svg viewBox="0 0 200 180" style={{ width: "150px", height: "150px" }}>
            {/* Fond cercle */}
            <circle cx="100" cy="90" r="80" fill="#1e293b" stroke="#d97706" strokeWidth="2" />
            {/* Corps kimono */}
            <rect x="60" y="120" width="80" height="50" rx="10" fill="#7c3aed" />
            {/* Tête */}
            <circle cx="100" cy="85" r="30" fill="#fbbf24" fillOpacity="0.8" />
            {/* Chapeau */}
            <ellipse cx="100" cy="58" rx="35" ry="8" fill="#1e293b" />
            <rect x="90" y="40" width="20" height="20" rx="3" fill="#1e293b" />
            {/* Yeux */}
            <circle cx="90" cy="82" r="3" fill="#1e293b" />
            <circle cx="110" cy="82" r="3" fill="#1e293b" />
            {/* Sourire */}
            <path d="M 90 95 Q 100 105 110 95" fill="none" stroke="#1e293b" strokeWidth="2" />
            {/* Bras */}
            <line x1="60" y1="130" x2="30" y2="150" stroke="#7c3aed" strokeWidth="8" strokeLinecap="round" />
            <line x1="140" y1="130" x2="170" y2="150" stroke="#7c3aed" strokeWidth="8" strokeLinecap="round" />
            {/* Scroll dans la main */}
            <rect x="155" y="145" width="20" height="15" rx="3" fill="#fbbf24" />
            <line x1="158" y1="149" x2="172" y2="149" stroke="#1e293b" strokeWidth="1" />
            <line x1="158" y1="153" x2="172" y2="153" stroke="#1e293b" strokeWidth="1" />
          </svg>
          <p style={{ color: "#fbbf24", fontSize: "14px", margin: "10px 0 0 0", fontWeight: "bold" }}>
            Munehisa Homma (1724 - 1803)
          </p>
          <p style={{ color: "#64748b", fontSize: "12px", margin: "5px 0 0 0" }}>
            Trader de riz — Osaka, Japon
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Il a effectué plus de 100 trades gagnants consécutifs",
            "Il comprit que la psychologie humaine crée des patterns répétitifs",
            "Ses principes sont encore valables 300 ans plus tard",
            "Il est considéré comme le père de l'analyse technique moderne",
          ].map((fact, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "10px 15px",
              display: "flex",
              gap: "10px",
            }}>
              <span style={{ color: "#fbbf24", flexShrink: 0 }}>⭐</span>
              <span style={{ color: "#cbd5e1", fontSize: "13px" }}>{fact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STEVE NISON */}
      <div style={{
        background: "linear-gradient(135deg, #0c4a6e, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          🌍 Steve Nison — L'homme qui a tout changé
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "14px", marginBottom: "15px" }}>
          Dans les années 1980, <strong style={{ color: "white" }}>Steve Nison</strong>, analyste financier américain, 
          découvrit les chandeliers japonais lors d'une recherche. Il réalisa immédiatement leur puissance et 
          consacra des années à les étudier et les populariser en Occident.
        </p>
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          borderLeft: "4px solid #38bdf8",
        }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px", fontStyle: "italic" }}>
            "Les chandeliers japonais illuminent l'analyse que tous les autres graphiques laissent dans l'ombre."
          </p>
          <p style={{ color: "#38bdf8", margin: "8px 0 0 0", fontSize: "12px" }}>— Steve Nison</p>
        </div>
      </div>

      {/* POURQUOI C'EST IMPORTANT */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "25px",
        border: "1px solid #16a34a",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          ✅ Pourquoi cette histoire est importante ?
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "14px", marginBottom: "15px" }}>
          Comprendre l'histoire des chandeliers te montre que cette méthode a été 
          <strong style={{ color: "white" }}> testée et prouvée pendant plus de 300 ans</strong>. 
          Ce n'est pas une mode — c'est une science basée sur la psychologie humaine qui ne change pas.
        </p>
        <div style={{
          background: "#0f172a",
          borderRadius: "10px",
          padding: "15px",
          border: "1px solid #16a34a",
          textAlign: "center",
        }}>
          <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "16px" }}>
            300 ans de preuves 📊
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "5px" }}>
            La méthode la plus ancienne et la plus fiable du trading
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/debutant/introduction" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px", background: "#1e293b",
            color: "white", border: "1px solid #334155",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>← Leçon 1</button>
        </a>
        <a href="/formation/debutant/candlesticks" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(to right, #d97706, #7c3aed)",
            color: "white", border: "none",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>Leçon 3 →</button>
        </a>
      </div>

    </div>
  );
}
