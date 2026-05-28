export default function Home() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#111827",
      fontFamily: "Arial",
    }}>
      <h1 style={{ color: "white", fontSize: "40px", marginBottom: "10px" }}>
        📈 Trading Academy
      </h1>
      <p style={{ color: "#9ca3af", fontSize: "18px", marginBottom: "40px" }}>
        Bienvenue sur la plateforme de formation Price Action
      </p>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/connexion">
          <button style={{
            padding: "14px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}>
            Se connecter
          </button>
        </a>
        <a href="/inscription">
          <button style={{
            padding: "14px 30px",
            background: "transparent",
            color: "white",
            border: "2px solid white",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}>
            Créer un compte
          </button>
        </a>
      </div>
    </div>
  );
}
