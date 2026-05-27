"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Inscription() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setMessage("Compte créé avec succès !");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

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
            color: "#16a34a",
            marginBottom: "20px",
          }}
        >
          Inscription
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          Créer un compte
        </button>

        <p
          style={{
            marginTop: "20px",
            color: "#2563eb",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
