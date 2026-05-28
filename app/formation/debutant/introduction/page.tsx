export default function IntroductionPage() {
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
          Introduction au Price Action
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "30px",
          }}
        >
          Le Price Action est l’une des méthodes de trading les plus puissantes
          et les plus simples utilisées par les traders professionnels.
          Cette méthode consiste à lire le mouvement du marché directement
          à travers les bougies japonaises sans dépendre des indicateurs compliqués.
        </p>

        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
          alt="Trading"
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
          Pourquoi apprendre le Price Action ?
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "25px",
          }}
        >
          Beaucoup de traders débutants utilisent trop d’indicateurs et finissent
          par être confus. Le Price Action permet de comprendre la psychologie
          des acheteurs et des vendeurs à travers les mouvements réels du marché.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "25px",
          }}
        >
          Avec cette méthode, tu apprendras à reconnaître les retournements,
          les tendances, les cassures et les meilleures opportunités d’entrée
          et de sortie.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642543348745-8f1db66c1b68"
          alt="Candlestick"
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
          La psychologie du marché
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "25px",
          }}
        >
          Derrière chaque bougie se cache une bataille entre acheteurs et vendeurs.
          Comprendre cette psychologie est beaucoup plus important que mémoriser
          simplement les noms des figures chartistes.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "35px",
            color: "#374151",
            marginBottom: "40px",
          }}
        >
          Un trader rentable ne cherche pas seulement des patterns, il cherche
          à comprendre pourquoi le marché bouge.
        </p>

        <a href="/formation/debutant/history">
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Chapitre Suivant →
          </button>
        </a>
      </div>
    </div>
  );
}
