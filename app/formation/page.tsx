export default function Formation() {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <h1 style={{ fontSize: "45px", color: "#111827" }}>
        Formations Trading
      </h1>

      <p style={{ fontSize: "20px", color: "#4b5563", marginBottom: "40px" }}>
        Choisis ton niveau de formation
      </p>

      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
        
        {/* DEBUTANT */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            width: "320px",
          }}
        >
          <h2 style={{ color: "#16a34a", fontSize: "28px" }}>
            Débutant
          </h2>

          <p>
            Price Action, bougies japonaises, support et résistance
          </p>

          <a href="/formation/debutant">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              Voir formation
            </button>
          </a>
        </div>

        {/* INTERMEDIAIRE */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            width: "320px",
          }}
        >
          <h2 style={{ color: "#ea580c", fontSize: "28px" }}>
            Intermédiaire
          </h2>

          <p>
            Structure du marché, entrées, sorties, stratégies avancées
          </p>

          <button
            style={{
              background: "#ea580c",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
            }}
          >
            Voir formation
          </button>
        </div>

      </div>
    </div>
  );
}
