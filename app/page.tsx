export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111827",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            marginBottom: "10px",
          }}
        >
          Trading Academy
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "30px",
          }}
        >
          Connecte-toi pour accéder à la plateforme
        </p>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <a href="/dashboard">
          <button
            style={{
              width: "100%",
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              fontSize: "16px",
            }}
          >
            Se connecter
          </button>
        </a>

        <p
          style={{
            marginTop: "20px",
            color: "#6b7280",
          }}
        >
          Pas de compte ?
        </p>

        <a href="/inscription">
          <button
            style={{
              width: "100%",
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Inscription
          </button>
        </a>
      </div>
    </div>
  )
}
