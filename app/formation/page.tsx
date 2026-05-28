"use client";
import { useEffect } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Formation() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/connexion";
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "white",
      padding: "40px",
      fontFamily: "Arial",
    }}>
      <h1 style={{ fontSize: "35px", color: "#111827", marginBottom: "10px" }}>
        📚 Formations Trading
      </h1>
      <p style={{ fontSize: "18px", color: "#4b5563", marginBottom: "40px" }}>
        Choisis ton niveau de formation
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* DEBUTANT */}
        <div style={{
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          padding: "25px",
          borderRadius: "15px",
        }}>
          <h2 style={{ color: "#16a34a", fontSize: "24px", marginBottom: "10px" }}>
            🟢 Débutant
          </h2>
          <p style={{ color: "#4b5563", marginBottom: "15px" }}>
            Price Action, bougies japonaises, support et résistance
          </p>
          <a href="/formation/debutant">
            <button style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              fontSize: "15px",
              cursor: "pointer",
            }}>
              Voir formation →
            </button>
          </a>
        </div>

        {/* INTERMEDIAIRE */}
        <div style={{
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          padding: "25px",
          borderRadius: "15px",
        }}>
          <h2 style={{ color: "#ea580c", fontSize: "24px", marginBottom: "10px" }}>
            🟠 Intermédiaire
          </h2>
          <p style={{ color: "#4b5563", marginBottom: "15px" }}>
            Structure du marché, entrées, sorties, stratégies avancées
          </p>
          <button style={{
            background: "#ea580c",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            fontSize: "15px",
            cursor: "pointer",
          }}>
            Voir formation →
          </button>
        </div>

      </div>
    </div>
  );
}
