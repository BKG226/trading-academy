"use client";
import { useEffect } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Videos() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/connexion";
      }
    });
    return () => unsubscribe();
  }, []);

  const videos = [
    {
      id: 1,
      titre: "Chandelier Japonais",
      description: "Mèche, corps de bougie, baissière et haussière — tout comprendre",
      youtubeId: "-2rKtmHO6_U",
      niveau: "Débutant",
      couleurNiveau: "#16a34a",
      duree: "📹 Vidéo 1",
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      fontFamily: "Arial",
      padding: "20px",
      color: "white",
    }}>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #2e1065, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #9333ea",
      }}>
        <a href="/dashboard" style={{ color: "#c084fc", fontSize: "14px", textDecoration: "none" }}>
          ← Dashboard
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🎥 Vidéos de Formation
        </h1>
        <p style={{ color: "#c084fc", margin: 0, fontSize: "14px" }}>
          Apprends visuellement avec nos vidéos exclusives
        </p>
      </div>

      {/* LISTE VIDÉOS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {videos.map((video) => (
          <div key={video.id} style={{
            background: "#1e293b",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #334155",
          }}>
            {/* PLAYER YOUTUBE */}
            <div style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
            }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen
              />
            </div>

            {/* INFO VIDÉO */}
            <div style={{ padding: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{
                  background: video.couleurNiveau,
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}>
                  {video.niveau}
                </span>
                <span style={{ color: "#64748b", fontSize: "13px" }}>{video.duree}</span>
              </div>
              <h2 style={{ color: "white", fontSize: "18px", margin: "0 0 8px 0" }}>
                🕯️ {video.titre}
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0, lineHeight: "1.6" }}>
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MESSAGE PLUS DE VIDÉOS */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "25px",
        marginTop: "25px",
        textAlign: "center",
        border: "1px solid #334155",
      }}>
        <div style={{ fontSize: "30px", marginBottom: "10px" }}>🔜</div>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
          D'autres vidéos arrivent bientôt...
        </p>
      </div>

    </div>
  );
}
