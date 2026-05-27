export default function Home() {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "20px",
          color: "#111827",
        }}
      >
        Trading Pro
      </h1>

      <h2
        style={{
          fontSize: "40px",
          color: "#2563eb",
        }}
      >
        Deviens un Trader Pro
      </h2>

      <p
        style={{
          fontSize: "22px",
          marginTop: "20px",
          maxWidth: "700px",
          color: "#374151",
        }}
      >
        Apprends le trading Forex, Crypto et les stratégies
        professionnelles avec Trading Academy.
      </p>

      {/* Niveaux */}
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Débutant */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            width: "300px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              color: "#16a34a",
              fontSize: "28px",
            }}
          >
            Débutant
          </h3>

          <p
            style={{
              color: "#374151",
              marginTop: "15px",
              fontSize: "18px",
            }}
          >
            Apprends les bases du trading :
            bougies japonaises, support/résistance,
            gestion du risque et psychologie.
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
            >
              Voir la formation
            </button>

            <button
              style={{
                background: "#16a34a",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
            >
              Commencer
            </button>
          </div>
        </div>

        {/* Intermédiaire */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            width: "300px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              color: "#ea580c",
              fontSize: "28px",
            }}
          >
            Intermédiaire
          </h3>

          <p
            style={{
              color: "#374151",
              marginTop: "15px",
              fontSize: "18px",
            }}
          >
            Maîtrise la structure du marché,
            les entrées précises, les sorties
            et les stratégies avancées.
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
            >
              Voir la formation
            </button>

            <button
              style={{
                background: "#ea580c",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
