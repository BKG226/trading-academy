"use client";
import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/connexion";
      } else {
        setUserEmail(user.email || "");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
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

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #0f172a)",
        padding: "20px",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "22px", color: "white" }}>
            📈 Trading Academy
          </h1>
          <p style={{ margin: "4px 0 0 0", color: "#64748b", fontSize: "13px" }}>
            {userEmail}
          </p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            background: "transparent",
            border: "1px solid #334155",
            color: "#94a3b8",
            padding: "8px 15px",
            borderRadius: "10px",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Déconnexion
        </button>
      </div>

      {/* BIENVENUE */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f, #1e293b)",
        margin: "20px",
        borderRadius: "20px",
        padding: "25px",
        border: "1px solid #2563eb",
      }}>
        <h2 style={{ margin: "0 0 8px 0", fontSize: "20px", color: "white" }}>
          Bienvenue sur ta plateforme ! 🚀
        </h2>
        <p style={{ margin: 0, color: "#93c5fd", fontSize: "14px" }}>
          Continue ta formation Price Action et deviens un trader professionnel.
        </p>

        <div style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
        }}>
          {[
            { label: "Leçons", value: "20", color: "#34d399" },
            { label: "Niveaux", value: "2", color: "#60a5fa" },
            { label: "Stratégies", value: "10+", color: "#fbbf24" },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1,
              background: "#0f172a",
              borderRadius: "12px",
              padding: "12px",
              textAlign: "center",
            }}>
              <div style={{ color: stat.color, fontSize: "22px", fontWeight: "bold" }}>{stat.value}</div>
              <div style={{ color: "#64748b", fontSize: "12px", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MENU */}
      <div style={{ padding: "0 20px 20px 20px" }}>
        <h3 style={{ color: "#64748b", fontSize: "13px", marginBottom: "15px", letterSpacing: "1px" }}>
          NAVIGATION
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {menuItems.map((item, i) => (
            <a key={i} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#1e293b",
                borderRadius: "15px",
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                border: "1px solid #334155",
              }}>
                <div style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "12px",
                  background: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
                    {item.label}
                  </div>
                </div>
                <div style={{ color: "#475569", fontSize: "20px" }}>›</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "20px",
        color: "#334155",
        fontSize: "13px",
        borderTop: "1px solid #1e293b",
      }}>
        Trading Academy © 2025 — Price Action Pro
      </div>

    </div>
  );
}
