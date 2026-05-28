export default function StrategiesPage() {
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
          Trading Strategies & Tactics
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "35px", color: "#374151" }}>
          Les stratégies de trading permettent de transformer l’analyse du marché
          en décisions concrètes d’achat ou de vente.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642543348745-8f1db66c1b68"
          style={{ width: "100%", borderRadius: "20px", marginTop: "25px" }}
        />

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Qu’est-ce qu’une stratégie de trading ?
        </h2>

        <p>
          Une stratégie est un ensemble de règles qui définissent quand entrer
          et sortir d’un trade.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Les éléments d’une bonne stratégie
        </h2>

        <p>• Direction du marché (trend)</p>
        <p>• Zone d’entrée</p>
        <p>• Confirmation</p>
        <p>• Stop Loss</p>
        <p>• Take Profit</p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Exemple simple de stratégie Price Action
        </h2>

        <p>
          1. Identifier la tendance sur H4  
        </p>
        <p>
          2. Attendre un retour sur une zone clé  
        </p>
        <p>
          3. Chercher un signal (Engulfing ou Pin Bar)  
        </p>
        <p>
          4. Entrer dans la direction de la tendance  
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Pourquoi les traders échouent
        </h2>

        <p>
          Beaucoup de traders n’ont pas de stratégie claire et entrent au hasard.
          Le succès vient de la discipline et de la répétition.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <a href="/formation/debutant/timeframes">
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

          <a href="/formation/debutant/pin-bar">
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
