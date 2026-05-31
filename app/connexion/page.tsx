"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");
  const [resetMode, setResetMode] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setMessageColor("red");
      setMessage("Remplissez tous les champs");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/dashboard";
    } catch (error: any) {
      setMessageColor("red");
      setMessage("Email ou mot de passe incorrect");
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setMessageColor("red");
      setMessage("Entrez votre email d'abord");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessageColor("#34d399");
      setMessage("Email de réinitialisation envoyé ! Vérifiez votre boite mail.");
      setResetMode(false);
    } catch (error: any) {
      setMessageColor("red");
      setMessage("Email introuvable — vérifiez l'adresse");
    }
  };

  const neonStyle = `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .neon-ring::before {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      background: conic-gradient(#00ff88, #0044ff, #00ff88);
      animation: rotate 3s linear infinite;
      z-index: 0;
    }
    .neon-ring::after {
      content: '';
      position: absolute;
      inset: -8px;
      border-radius: 50%;
      background: conic-gradient(transparent 60%, #00ff88);
      animation: rotate 3s linear infinite;
      filter: blur(8px);
      z-index: 0;
    }
  `;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050d1a",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
    }}>
      <style>{neonStyle}</style>

      <div className="neon-ring" style={{
        position: "relative",
        width: "340px",
        height: "340px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div style={{
          position: "relative",
          zIndex: 1,
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "#0d1f3c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          boxSizing: "border-box",
        }}>
          <h2 style={{ color: "white", fontSize: "24px", marginBottom: "20px" }}>
            {resetMode ? "Mot de passe oublié" : "Connexion"}
          </h2>

          {/* EMAIL */}
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <label style={{ color: "#60a5fa", fontSize: "12px" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid #60a5fa",
                color: "white",
                fontSize: "15px",
                padding: "5px 0",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* MOT DE PASSE */}
          {!resetMode && (
            <div style={{ width: "100%", marginBottom: "20px", position: "relative" }}>
              <label style={{ color: "#f87171", fontSize: "12px" }}>Mot de passe</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #f87171",
                  color: "white",
                  fontSize: "15px",
                  padding: "5px 0",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 5,
                  color: "#9ca3af",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "Cacher" : "Voir"}
              </span>
            </div>
          )}

          {/* BOUTON PRINCIPAL */}
          <button
            onClick={resetMode ? handleResetPassword : handleLogin}
            style={{
              width: "100%",
              padding: "12px",
              background: resetMode
                ? "linear-gradient(to right, #2563eb, #06b6d4)"
                : "linear-gradient(to right, #f43f5e, #fb923c)",
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            {resetMode ? "Envoyer le lien" : "Se connecter"}
          </button>

          {/* LIENS */}
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <span
              onClick={() => {
                setResetMode(!resetMode);
                setMessage("");
              }}
              style={{ color: "#9ca3af", fontSize: "12px", cursor: "pointer" }}
            >
              {resetMode ? "← Retour" : "Mot de passe oublié ?"}
            </span>
            {!resetMode && (
              <a href="/inscription" style={{ color: "#9ca3af", fontSize: "12px" }}>
                S'inscrire
              </a>
            )}
          </div>

          {message && (
            <p style={{ color: messageColor, fontSize: "12px", marginTop: "10px", textAlign: "center" }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
