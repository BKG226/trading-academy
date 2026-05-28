export default function Formation() {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <h1
        style={{
          fontSize: "45px",
          color: "#111827",
          marginBottom: "20px",
        }}
      >
        Formations Trading
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#4b5563",
          marginBottom: "50px",
        }}
      >
        Choisis ton niveau de formation.
      </p>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {/* Débutant */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            width: "320px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#16a34a",
              fontSize: "30px",
            }}
          >
            Débutant
          </h2>

          <p
            style={{
              marginTop: "15px",
              color: "#374151",
              fontSize: "18px",
            }}
          >
            Apprends les bases du trading :
            bougies japonaises,
            support/résistance,
            gestion du risque
            et psychologie.
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <a href="/formation/debutant">
              <button
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "10px",
                }}
              >
                Voir formation
              </button>

            <button
              style={{
                background: "#16a34a",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
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
            borderRadius: "20px",
            width: "320px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#ea580c",
              fontSize: "30px",
            }}
          >
            Intermédiaire
          </h2>

          <p
            style={{
              marginTop: "15px",
              color: "#374151",
              fontSize: "18px",
            }}
          >
            Maîtrise la structure du marché,
            les entrées précises,
            les sorties,
            et les stratégies avancées.
          </p>

          <div
            style={{
              marginTop: "25px",
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
              }}
            >
              Voir formation
            </button>

            <button
              style={{
                background: "#ea580c",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
              }}
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
