export default function Dashboard() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "white",
      padding: "30px",
      fontFamily: "Arial",
    }}>
      <h2 style={{ color: "#111827", marginBottom: "30px" }}>
        Trading Academy
      </h2>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}>
        <a href="/dashboard" style={{ color: "#111827", fontSize: "18px", textDecoration: "none" }}>🏠 Dashboard</a>
        <a href="/formation" style={{ color: "#111827", fontSize: "18px", textDecoration: "none" }}>📚 Formation</a>
        <a href="/signaux" style={{ color: "#111827", fontSize: "18px", textDecoration: "none" }}>📡 Signaux</a>
        <a href="/videos" style={{ color: "#111827", fontSize: "18px", textDecoration: "none" }}>🎥 Vidéos</a>
      </div>
    </div>
  );
}
