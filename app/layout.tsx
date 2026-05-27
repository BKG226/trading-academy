export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          display: "flex",
          minHeight: "100vh",
          fontFamily: "Arial",
        }}
      >
        {/* MENU VERTICAL */}
        <aside
          style={{
            width: "250px",
            background: "#111",
            color: "white",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2>Trading Academy</h2>

          <a href="/" style={{ color: "white" }}>
            Accueil
          </a>

          <a href="/formation" style={{ color: "white" }}>
            Formation
          </a>

          <a href="/videos" style={{ color: "white" }}>
            Vidéos
          </a>

          <a href="/signaux" style={{ color: "white" }}>
            Signaux
          </a>

          <a href="/dashboard" style={{ color: "white" }}>
            Dashboard
          </a>

          <hr />

          <a href="/connexion" style={{ color: "lightgreen" }}>
            Se connecter
          </a>

          <a href="/inscription" style={{ color: "orange" }}>
            Inscription
          </a>
        </aside>

        {/* CONTENU */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            background: "#f5f5f5",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
