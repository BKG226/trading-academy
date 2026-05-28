export default function EngulfingPage() {
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
          Engulfing Bar Candlestick Strategy
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "35px", color: "#374151" }}>
          Le pattern Engulfing est un signal fort de retournement du marché.
          Une grande bougie englobe complètement la bougie précédente.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642543348745-8f1db66c1b68"
          style={{ width: "100%", borderRadius: "20px", marginTop: "25px" }}
        />

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Engulfing haussier
        </h2>

        <p>
          Une grande bougie verte englobe une bougie rouge → signal d’achat.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Engulfing baissier
        </h2>

        <p>
          Une grande bougie rouge englobe une bougie verte → signal de vente.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Comment trader l’Engulfing
        </h2>

        <p>1. Identifier une zone clé (support / résistance)</p>
        <p>2. Attendre un Engulfing clair</p>
        <p>3. Vérifier la tendance (confluence)</p>
        <p>4. Entrer dans le sens du mouvement</p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Erreurs des débutants
        </h2>

        <p>
          Trader chaque Engulfing sans contexte est une erreur.
          Toujours vérifier la structure du marché.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <a href="/formation/debutant/tactics">
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

          <a href="/formation/debutant/inside-bar">
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
