export default function HistoryPage() {
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
          Histoire des Bougies Japonaises
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "30px",
          }}
        >
          Les bougies japonaises ont été créées il y a plusieurs siècles au Japon
          par des traders de riz afin d’analyser les mouvements du marché.
          Cette méthode est aujourd’hui utilisée dans le monde entier par les
          traders professionnels.
        </p>

        <img
          src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
          alt="Japan"
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
          Munehisa Homma
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "25px",
          }}
        >
          Munehisa Homma était un célèbre trader japonais considéré comme
          le père des bougies japonaises. Il avait compris que les émotions
          humaines comme la peur et la cupidité influencent énormément
          les mouvements du marché.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "30px",
          }}
        >
          Grâce à ses observations, il développa une méthode permettant
          de lire la psychologie des acheteurs et des vendeurs à travers
          les bougies.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9"
          alt="Candlestick chart"
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
          Pourquoi les Bougies Japonaises sont Puissantes
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "25px",
          }}
        >
          Contrairement aux simples lignes de prix, les bougies japonaises
          montrent beaucoup plus d’informations : le prix d’ouverture,
          le prix de fermeture, les plus hauts et les plus bas.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "25px",
          }}
        >
          Elles permettent aussi de détecter rapidement les retournements
          de marché, les tendances et les zones importantes où les acheteurs
          ou vendeurs prennent le contrôle.
        </p>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "15px",
            color: "#111827",
          }}
        >
          La Naissance du Price Action Moderne
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "40px",
          }}
        >
          Aujourd’hui, les stratégies Price Action modernes utilisent les
          mêmes principes développés il y a des siècles au Japon.
          Les traders professionnels continuent d’utiliser les bougies
          japonaises pour comprendre le comportement du marché sans dépendre
          d’indicateurs compliqués.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a href="/formation/debutant/introduction">
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

          <a href="/formation/debutant/candlesticks">
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
