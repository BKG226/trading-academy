export default function CandlesticksPage() {
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
          Qu’est-ce qu’une Bougie Japonaise ?
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "30px",
          }}
        >
          Une bougie japonaise représente le mouvement du prix pendant une période
          donnée. Elle montre les informations les plus importantes du marché :
          l’ouverture, la fermeture, le plus haut et le plus bas.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642790106117-e829e14a795f"
          alt="Candlestick Trading"
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
        />

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "15px",
            color: "#111827",
          }}
        >
          Les Parties d’une Bougie
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "20px",
          }}
        >
          Chaque bougie possède :
        </p>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          • Le prix d’ouverture
        </p>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          • Le prix de fermeture
        </p>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          • Le plus haut
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            marginBottom: "30px",
          }}
        >
          • Le plus bas
        </p>

        <img
          src="https://images.unsplash.com/photo-1639762681057-408e52192e55"
          alt="Trading Chart"
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
        />

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "15px",
            color: "#111827",
          }}
        >
          Bougie Haussière et Bougie Baissière
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "25px",
          }}
        >
          Une bougie haussière montre que les acheteurs ont pris le contrôle
          du marché. Le prix de fermeture est supérieur au prix d’ouverture.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "30px",
          }}
        >
          Une bougie baissière montre que les vendeurs dominent le marché.
          Le prix de fermeture est inférieur au prix d’ouverture.
        </p>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "15px",
            color: "#111827",
          }}
        >
          La Psychologie Derrière les Bougies
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "25px",
          }}
        >
          Les bougies racontent une histoire. Une grande bougie haussière
          montre une forte pression acheteuse tandis qu’une grande bougie
          baissière montre une forte pression vendeuse.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "40px",
          }}
        >
          Comprendre les bougies permet de lire les émotions du marché et
          d’anticiper les prochains mouvements de prix.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a href="/formation/debutant/history">
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

          <a href="/formation/debutant/patterns">
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
