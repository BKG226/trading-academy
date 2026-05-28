export default function PinBarPage() {
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
          Pin Bar Candlestick Strategy
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "35px", color: "#374151" }}>
          Le Pin Bar est un signal de rejet du prix. Il montre qu’un niveau
          important a été rejeté par le marché.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642790106117-e829e14a795f"
          style={{ width: "100%", borderRadius: "20px", marginTop: "25px" }}
        />

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Qu’est-ce qu’un Pin Bar ?
        </h2>

        <p>
          Un Pin Bar possède :
        </p>

        <p>• Une longue mèche</p>
        <p>• Un petit corps</p>
        <p>• Un rejet clair du prix</p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Pin Bar haussier
        </h2>

        <p>
          Le prix rejette une zone basse et remonte fortement.
          Cela indique une pression acheteuse.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Pin Bar baissier
        </h2>

        <p>
          Le prix rejette une zone haute et redescend.
          Cela indique une pression vendeuse.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Comment trader un Pin Bar
        </h2>

        <p>
          1. Identifier une zone clé (support ou résistance)
        </p>
        <p>
          2. Attendre un Pin Bar
        </p>
        <p>
          3. Entrer après confirmation
        </p>
        <p>
          4. Placer Stop Loss derrière la mèche
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Erreurs des débutants
        </h2>

        <p>
          Trader tous les Pin Bars sans contexte est une erreur.
          Le Pin Bar doit être utilisé avec une zone importante.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <a href="/formation/debutant/strategies">
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

          <a href="/formation/debutant/tactics">
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
