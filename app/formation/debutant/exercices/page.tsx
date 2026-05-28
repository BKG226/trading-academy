export default function ExercicesPage() {
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
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          Exercices sur les Patterns des Bougies
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "30px",
          }}
        >
          Connaître les patterns ne suffit pas. Un trader rentable doit
          apprendre à reconnaître les vrais signaux et éviter les faux setups.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642790106117-e829e14a795f"
          alt="Trading Exercise"
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        />

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Observer Avant de Trader
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Beaucoup de débutants ouvrent des positions trop rapidement.
          Avant chaque trade, il faut analyser le contexte du marché,
          la tendance et les zones importantes.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Exemple de Faux Signal
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Un Hammer au milieu d’un marché sans tendance n’a souvent
          aucune valeur. Les patterns deviennent puissants lorsqu’ils
          apparaissent dans des zones importantes du marché.
        </p>

        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
          alt="Chart Analysis"
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        />

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Comprendre la Psychologie
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Derrière chaque pattern se cache une bataille entre acheteurs
          et vendeurs. Les traders professionnels cherchent toujours
          à comprendre cette psychologie avant d’entrer en position.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Exercice Recommandé
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Ouvre un graphique TradingView et essaie d’identifier :
        </p>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          • Les Doji
        </p>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          • Les Engulfing Bars
        </p>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          • Les Hammer
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "35px",
          }}
        >
          • Les Shooting Stars
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Erreurs des Débutants
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "40px",
            color: "#374151",
          }}
        >
          Les débutants cherchent souvent à trader chaque pattern.
          Les traders professionnels attendent les meilleures configurations
          avec patience et discipline.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a href="/formation/debutant/patterns">
            <button
              style={{
                background: "#6b7280",
                color: "white",
                border: "none",
                padding: "15px 25px",
                borderRadius: "12px",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              ← Chapitre Précédent
            </button>
          </a>

          <a href="/formation/debutant/market-structure">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "15px 25px",
                borderRadius: "12px",
                fontSize: "17px",
                cursor: "pointer",
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
