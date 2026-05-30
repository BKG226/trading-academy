export default function MoneyManagement() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #7f1d1d, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #ef4444" }}>
        <a href="/formation/debutant" style={{ color: "#f87171", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>💰 Money Management</h1>
        <p style={{ color: "#f87171", margin: 0, fontSize: "14px" }}>Leçon 14 sur 15 — Protéger et faire croître ton capital</p>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Pourquoi c'est la leçon la plus importante ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Tu peux avoir la meilleure stratégie du monde —
          <strong style={{ color: "#f87171" }}> sans money management tu perdras tout</strong>.
          Les traders professionnels ne cherchent pas à gagner plus —
          ils cherchent à <strong style={{ color: "#34d399" }}>perdre moins</strong>.
          C'est cette philosophie qui les rend rentables sur le long terme.
        </p>
      </div>

      {/* RÈGLE 1% */}
      <div style={{ background: "linear-gradient(135deg, #7f1d1d, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #dc2626" }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>💸 La Règle du 1% — Obligatoire</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Ne risque jamais plus de <strong style={{ color: "#f87171" }}>1% à 2% de ton capital</strong> par trade.
          Avec cette règle tu peux perdre 20 trades consécutifs et rester dans le jeu.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "15px" }}>
          {[
            { capital: "500$", r1: "5$", r2: "10$" },
            { capital: "1 000$", r1: "10$", r2: "20$" },
            { capital: "5 000$", r1: "50$", r2: "100$" },
            { capital: "10 000$", r1: "100$", r2: "200$" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>{item.capital}</span>
              <span style={{ color: "#34d399", fontSize: "13px" }}>1% = {item.r1}</span>
              <span style={{ color: "#fbbf24", fontSize: "13px" }}>2% = {item.r2}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", border: "1px solid #dc2626", textAlign: "center" }}>
          <span style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px" }}>
            Jamais plus de 2% par trade — sans aucune exception
          </span>
        </div>
      </div>

      {/* RISK REWARD */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0284c7" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>⚖️ Risk Reward Ratio (RR)</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Le RR compare ce que tu risques à ce que tu peux gagner.
          Avec un RR de <strong style={{ color: "#fbbf24" }}>1:2</strong> tu peux être
          <strong style={{ color: "#34d399" }}> rentable avec seulement 40% de trades gagnants</strong>.
        </p>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          {[
            { rr: "1:1", desc: "Eviter", color: "#f87171", ok: false },
            { rr: "1:2", desc: "Minimum", color: "#fbbf24", ok: true },
            { rr: "1:3", desc: "Ideal", color: "#34d399", ok: true },
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "15px", textAlign: "center", border: "1px solid " + (item.ok ? item.color : "#334155") }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "20px" }}>{item.rr}</div>
              <div style={{ color: item.color, fontSize: "12px", marginTop: "5px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "15px", border: "1px solid #334155" }}>
          <p style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>Exemple avec RR 1:2 et 50% winrate :</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "10 trades — 5 gagnants — 5 perdants",
              "5 gains x 20$ = +100$",
              "5 pertes x 10$ = -50$",
              "Resultat net = +50$ de profit",
            ].map((line, i) => (
              <div key={i} style={{ display: "flex", gap: "8px" }}>
                <span style={{ color: i === 3 ? "#34d399" : "#94a3b8", fontSize: "13px", fontWeight: i === 3 ? "bold" : "normal" }}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CALCUL LOT SIZE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #9333ea" }}>
        <h2 style={{ color: "#c084fc", fontSize: "18px", marginTop: 0 }}>📊 Calcul du Lot Size</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Le lot size correct dépend de ton capital, ton risque % et la distance de ton Stop Loss.
        </p>
        <div style={{ background: "linear-gradient(135deg, #2e1065, #0f172a)", borderRadius: "10px", padding: "20px", marginBottom: "15px", border: "1px solid #7c3aed", textAlign: "center" }}>
          <div style={{ color: "#c084fc", fontSize: "13px", marginBottom: "8px" }}>Formule</div>
          <div style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>
            Montant risque ÷ Distance SL = Valeur par pip
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "15px" }}>
          <p style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "13px", margin: "0 0 10px 0" }}>Exemple concret :</p>
          {[
            { label: "Capital", value: "1 000$", color: "#60a5fa" },
            { label: "Risque 1%", value: "10$", color: "#34d399" },
            { label: "SL distance", value: "20 pips", color: "#f87171" },
            { label: "Valeur/pip", value: "10 ÷ 20 = 0.50$/pip", color: "#fbbf24" },
            { label: "Lot size", value: "0.05 lot", color: "#a78bfa" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 4 ? "1px solid #1e293b" : "none" }}>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{item.label}</span>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DRAWDOWN */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>📉 Gérer le Drawdown</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Le drawdown c'est la perte maximale depuis un pic.
          Plus tu perds, plus il faut gagner pour récupérer —
          <strong style={{ color: "#f87171" }}> c'est exponentiel</strong>.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { perdu: "-10%", besoin: "+11%", color: "#34d399", niveau: "Facile" },
            { perdu: "-20%", besoin: "+25%", color: "#fbbf24", niveau: "Gérable" },
            { perdu: "-50%", besoin: "+100%", color: "#f87171", niveau: "Dangereux" },
            { perdu: "-80%", besoin: "+400%", color: "#dc2626", niveau: "Critique" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px" }}>{item.perdu}</span>
              <span style={{ color: "#64748b", fontSize: "12px" }}>→ récupérer</span>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "14px" }}>{item.besoin}</span>
              <span style={{ color: item.color, fontSize: "12px" }}>{item.niveau}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES TRADING */}
      <div style={{ background: "linear-gradient(135deg, #064e3b, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📋 Règles de Trading Obligatoires</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { regle: "Jamais sans Stop Loss", desc: "Chaque trade doit avoir un SL place avant d'entrer — sans exception", color: "#f87171" },
            { regle: "Maximum 3 trades ouverts", desc: "Ne pas surcharger ton compte — focus sur la qualite pas la quantite", color: "#fbbf24" },
            { regle: "Stop apres 3 pertes", desc: "3 pertes consecutives = stop trading pour aujourd'hui — reviens demain", color: "#f87171" },
            { regle: "Jamais deplacer SL contre soi", desc: "Le SL est place pour te proteger — ne jamais l'agrandir pour eviter la perte", color: "#dc2626" },
            { regle: "Journal de trading", desc: "Note chaque trade — entree, sortie, raison, resultat — analyse chaque semaine", color: "#34d399" },
            { regle: "Pas de revenge trading", desc: "Apres une perte tu es emotif — attends et respire avant d'entrer a nouveau", color: "#a78bfa" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid " + item.color }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.regle}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES PRO */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Le money management est plus important que la strategie — maitrise-le d'abord",
            "Un trader avec 40% winrate et bon RR gagne plus qu'un trader avec 70% winrate et mauvais RR",
            "Commence toujours sur compte demo — passe au reel seulement apres 3 mois rentables",
            "Augmente le lot size progressivement — jamais d'un coup apres un bon trade",
          ].map((rule, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "10px" }}>
              <span style={{ color: "#fbbf24", flexShrink: 0 }}>→</span>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/debutant/inside-bar" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 13
          </button>
        </a>
        <a href="/formation/debutant/conclusion" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #ef4444, #8b5cf6)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 15 →
          </button>
        </a>
      </div>

    </div>
  );
}
