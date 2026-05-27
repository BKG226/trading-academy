export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* MENU */}
      <aside
        style={{
          width: "250px",
          background: "#111827",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2>Trading Academy</h2>

        <a href="/dashboard" style={{ color: "white" }}>
          Dashboard
        </a>

        <a href="/formation" style={{ color: "white" }}>
          Formation
        </a>

        <a href="/signaux" style={{ color: "white" }}>
          Signaux
        </a>

        <a href="/videos" style={{ color: "white" }}>
          Vidéos
        </a>
      </aside>

      {/* CONTENU */}
      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1
          style={{
            color: "#111827",
            fontSize: "40px",
          }}
        >
          Dashboard Trading
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "#4b5563",
          }}
        >
          Bienvenue sur ta plateforme Trading Academy.
        </p>
      </main>
    </div>
  )
}
