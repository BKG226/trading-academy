export default function PatternsPage() {
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
          Les Patterns des Bougies Japonaises
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "30px",
          }}
        >
          Les patterns des bougies japonaises permettent d’identifier les
          retournements, les continuations de tendance et les réactions
          importantes du marché.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9"
          alt="Patterns"
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        />

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Pattern Engulfing
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Le pattern Engulfing apparaît lorsqu’une grande bougie englobe
          complètement la bougie précédente. Cela montre souvent un changement
          de contrôle entre acheteurs et vendeurs.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Doji
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Le Doji représente l’hésitation du marché. Les acheteurs et vendeurs
          se battent sans qu’aucun ne prenne réellement le contrôle.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Dragon Fly Doji
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Ce pattern montre un rejet fort des vendeurs. Le marché descend
          fortement puis les acheteurs reprennent le contrôle.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Gravestone Doji
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Le Gravestone Doji indique souvent une faiblesse des acheteurs
          après une hausse importante.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Morning Star
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Le Morning Star est un pattern de retournement haussier apparaissant
          généralement à la fin d’une tendance baissière.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Evening Star
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Le Evening Star est un signal de retournement baissier après une
          tendance haussière.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Hammer
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Le Hammer montre un rejet puissant des vendeurs et indique souvent
          un retournement potentiel vers la hausse.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Shooting Star
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Le Shooting Star apparaît souvent au sommet d’une tendance haussière
          et montre un rejet des acheteurs.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Le Harami
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "25px",
            color: "#374151",
          }}
        >
          Le Harami indique souvent un ralentissement du marché et un possible
          retournement.
        </p>

        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Les Tweezers Tops et Bottoms
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "40px",
            color: "#374151",
          }}
        >
          Les Tweezers montrent des zones où le marché refuse de continuer
          dans une direction, créant souvent des retournements importants.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a href="/formation/debutant/candlesticks">
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

          <a href="/formation/debutant/exercices">
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
