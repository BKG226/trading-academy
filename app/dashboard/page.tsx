"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Firebase désactivé temporairement pour fix deploy
    setUserEmail("user@trading-academy.com");
  }, []);

  const handleLogout = async () => {
    window.location.href = "/connexion";
  };

  const menuItems = [
    { icon: "🏠", label: "Dashboard", href: "/dashboard", color: "#2563eb" },
    { icon: "📚", label: "Formation", href: "/formation", color: "#16a34a" },
    { icon: "📡", label: "Signaux", href: "/signaux", color: "#d97706" },
    { icon: "🎥", label: "Vidéos", href: "/videos", color: "#9333ea" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      fontFamily: "Arial",
      color: "white",
    }}>

      <div style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1e293b",
      }}>
        <h1>📈 Trading Academy</h1>
        <button onClick={handleLogout}>Déconnexion</button>
      </div>

      <div style={{ padding: "20px" }}>
        <p>Bienvenue : {userEmail}</p>

        <div style={{ marginTop: "20px" }}>
          {menuItems.map((item, i) => (
            <a key={i} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#1e293b",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}>
                {item.icon} {item.label}
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
