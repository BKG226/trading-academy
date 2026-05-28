import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      
      {/* SIDEBAR */}
      <div
        style={{
          width: "240px",
          minHeight: "100vh",
          background: "#111827",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2>📊 Trading Academy</h2>

        <Link href="/formation">📚 Formation</Link>
        <Link href="/signaux">📈 Signaux</Link>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, background: "#f3f4f6", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  );
}
