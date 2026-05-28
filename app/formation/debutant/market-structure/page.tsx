export default function MarketStructurePage() {
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
          Structure du Marché (Market Structure)
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "35px", color: "#374151" }}>
          La structure du marché est la base du Price Action. Elle permet de comprendre
          si le marché est en tendance haussière, baissière ou en range.
        </p>

        <img
          src="https://images.unsplash.com/photo-1642543348745-8f1db66c1b68"
          style={{ width: "100%", borderRadius: "20px", marginTop: "25px" }}
        />

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Les différents mouvements du marché
        </h2>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          Le marché se déplace toujours en trois phases :
        </p>

        <p>• Tendance haussière</p>
        <p>• Tendance baissière</p>
        <p>• Range (consolidation)</p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          HH, HL, LH, LL
        </h2>

        <p>
          Dans une tendance haussière :
        </p>

        <p>• HH = Higher High (plus haut plus haut)</p>
        <p>• HL = Higher Low (plus bas plus haut)</p>

        <p style={{ marginTop: "15px" }}>
          Dans une tendance baissière :
        </p>

        <p>• LH = Lower High</p>
        <p>• LL = Lower Low</p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Comment identifier une tendance
        </h2>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          Une tendance haussière = suite de HH et HL.
          Une tendance baissière = suite de LH et LL.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "30px" }}>
          Pourquoi c’est important
        </h2>

        <p style={{ fontSize: "19px", lineHeight: "35px" }}>
          La structure du marché te permet de trader dans la bonne direction.
          Un bon trader ne va jamais contre la structure du marché.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <a href="/formation/debutant/exercices">
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

          <a href="/formation/debutant/timeframes">
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
