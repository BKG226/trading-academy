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

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
        }}
      >
        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "15px 25px",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          Commencer
        </button>

        <button
          style={{
            background: "#111827",
            color: "white",
            border: "none",
            padding: "15px 25px",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          Voir Formation
        </button>
      </div>
    </div>
  )
}
