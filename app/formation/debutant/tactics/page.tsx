export default function TacticsPage() {
  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px", color: "#111827" }}>
          Trading Tactics & Confluence
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "35px", color: "#374151" }}>
          Les tactics de trading sont les règles d’exécution. Elles te disent
          exactement quand entrer et quand éviter un trade.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642543348745-8f1db66c1b68"
          style={{ width: "100%", borderRadius: "20px", marginTop: "25px" }}
        />

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Qu’est-ce que la confluence ?
        </h2>

        <p>
          La confluence signifie avoir plusieurs raisons de prendre un trade.
          Plus tu as de confirmations, plus ton trade est solide.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Exemple de confluence
        </h2>

        <p>• Tendance haussière (Market Structure)</p>
        <p>• Support touché</p>
        <p>• Pin Bar bullish</p>
        <p>• Zone H4 + H1 alignées</p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Pourquoi les débutants perdent
        </h2>

        <p>
          Ils prennent des trades sans confluence. Un seul signal ne suffit pas.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Règle professionnelle
        </h2>

        <p>
          Si tu n’as pas au moins 2 à 3 confirmations → tu ne trades pas.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Gestion de l’exécution
        </h2>

        <p>
          1. Identifier la zone  
          2. Attendre le signal  
          3. Vérifier la confluence  
          4. Entrer avec stop loss  
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <a href="/formation/debutant/pin-bar">
            <button
              style={{
                background: "#6b7280",
                color: "white",
                border: "none",
                padding: "15px 25px",
                borderRadius: "12px",
              }}
            >
              ← Chapitre Précédent
            </button>
          </a>

          <a href="/formation/debutant/engulfing">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "15px 25px",
                borderRadius: "12px",
              }}
            >
              Chapitre Suivant →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
