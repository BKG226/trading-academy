export default function TimeframesPage() {
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
          Time Frames & Top Down Analysis
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "35px", color: "#374151" }}>
          Les timeframes sont les unités de temps utilisées pour analyser le marché.
          Le Top Down Analysis consiste à analyser le marché du plus grand timeframe
          vers le plus petit.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9"
          alt="charts"
          style={{ width: "100%", borderRadius: "20px", marginTop: "25px" }}
        />

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Les principaux timeframes
        </h2>

        <p>• Monthly (M)</p>
        <p>• Weekly (W)</p>
        <p>• Daily (D)</p>
        <p>• H4</p>
        <p>• H1</p>
        <p>• M15</p>
        <p>• M5</p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Top Down Analysis
        </h2>

        <p>
          Le Top Down Analysis commence toujours par le timeframe le plus élevé.
        </p>

        <p>1. Analyse le Weekly pour voir la tendance générale</p>
        <p>2. Analyse le Daily pour confirmer</p>
        <p>3. Cherche les zones sur H4 / H1</p>
        <p>4. Entre sur M15 ou M5</p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Pourquoi c’est important
        </h2>

        <p>
          Cela permet de trader dans la direction du marché principal et d’éviter
          les faux signaux.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <a href="/formation/debutant/market-structure">
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

          <a href="/formation/debutant/strategies">
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
