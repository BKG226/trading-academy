export default function Psychologie() {
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
        background: "linear-gradient(135deg, #4c0519, #1e293b)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #e11d48",
      }}>
        <a href="/formation/intermediaire" style={{ color: "#fb7185", fontSize: "14px", textDecoration: "none" }}>
          ← Retour aux leçons
        </a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>
          🧠 Psychologie du Trader
        </h1>
        <p style={{ color: "#fb7185", margin: 0, fontSize: "14px" }}>
          Leçon 10 sur 10 — La leçon qui fait la différence
        </p>
      </div>

      {/* INTRO */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #334155",
      }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>
          🎯 Le vrai ennemi du trader
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "15px" }}>
          <strong style={{ color: "white" }}>90% des traders perdent</strong> non pas à cause d'une mauvaise stratégie — 
          mais à cause de leur <strong style={{ color: "#f87171" }}>psychologie</strong>. 
          La peur, la cupidité et la revanche sont les 3 ennemis principaux. 
          Maîtriser son mental = <strong style={{ color: "#34d399" }}>maîtriser le marché</strong>.
        </p>
      </div>

      {/* LES 3 ENNEMIS */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #dc2626",
      }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>
          ☠️ Les 3 Ennemis du Trader
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

          {/* PEUR */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #7c3aed",
          }}>
            <div style={{ color: "#a78bfa", fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>
              😰 1. La Peur
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Peur de perdre → tu ne prends pas le trade",
                "Peur de rater → tu entres trop tôt sans confirmation",
                "Peur après une perte → tu trades trop petit",
              ].map((t, i) => (
                <div key={i} style={{ color: "#94a3b8", fontSize: "13px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#a78bfa" }}>•</span>{t}
                </div>
              ))}
            </div>
            <div style={{
              background: "#1e293b",
              borderRadius: "8px",
              padding: "10px",
              marginTop: "10px",
              borderLeft: "3px solid #a78bfa",
            }}>
              <span style={{ color: "#cbd5e1", fontSize: "13px" }}>
                💊 <strong style={{ color: "white" }}>Solution :</strong> Suis ton plan à 100%. Si le setup est là, tu entres. Point.
              </span>
            </div>
          </div>

          {/* CUPIDITÉ */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #d97706",
          }}>
            <div style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>
              🤑 2. La Cupidité
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Tu ne fermes pas au TP → tu veux plus → le marché repart contre toi",
                "Tu overtrades → trop de positions en même temps",
                "Tu risques trop → tu doubles la mise après une victoire",
              ].map((t, i) => (
                <div key={i} style={{ color: "#94a3b8", fontSize: "13px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#fbbf24" }}>•</span>{t}
                </div>
              ))}
            </div>
            <div style={{
              background: "#1e293b",
              borderRadius: "8px",
              padding: "10px",
              marginTop: "10px",
              borderLeft: "3px solid #fbbf24",
            }}>
              <span style={{ color: "#cbd5e1", fontSize: "13px" }}>
                💊 <strong style={{ color: "white" }}>Solution :</strong> Fixe ton TP avant d'entrer et respecte-le toujours.
              </span>
            </div>
          </div>

          {/* REVANCHE */}
          <div style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "15px",
            border: "1px solid #dc2626",
          }}>
            <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>
              😡 3. Le Trading de Revanche
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Tu perds un trade → tu rentres immédiatement pour récupérer",
                "Tu augmentes le lot size pour compenser la perte",
                "Tu trades sans setup valable — juste par émotion",
              ].map((t, i) => (
                <div key={i} style={{ color: "#94a3b8", fontSize: "13px", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#f87171" }}>•</span>{t}
                </div>
              ))}
            </div>
            <div style={{
              background: "#1e293b",
              borderRadius: "8px",
              padding: "10px",
              marginTop: "10px",
              borderLeft: "3px solid #dc2626",
            }}>
              <span style={{ color: "#cbd5e1", fontSize: "13px" }}>
                💊 <strong style={{ color: "white" }}>Solution :</strong> Règle des 3 pertes — 3 pertes consécutives = stop immédiat.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MINDSET PRO */}
      <div style={{
        background: "linear-gradient(135deg, #0c4a6e, #1e293b)",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #0284c7",
      }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>
          🏆 Le Mindset du Trader Pro
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { icon: "🎯", text: "Chaque trade est indépendant — une perte ne prédit pas la suivante", color: "#34d399" },
            { icon: "📊", text: "Tu trades des probabilités — pas des certitudes", color: "#60a5fa" },
            { icon: "🛡️", text: "Protéger le capital est plus important que gagner", color: "#a78bfa" },
            { icon: "📝", text: "Un trade sans plan n'est pas un trade — c'est du gambling", color: "#fbbf24" },
            { icon: "⏳", text: "La patience est une compétence qui se travaille chaque jour", color: "#f87171" },
            { icon: "📈", text: "Les pertes font partie du jeu — même les meilleurs en ont", color: "#34d399" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <span style={{ color: item.color, fontSize: "14px" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ROUTINE */}
      <div style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #16a34a",
      }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>
          📅 Routine du Trader Professionnel
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { heure: "Avant", action: "Analyse HTF — identifie les zones clés et la structure", color: "#60a5fa" },
            { heure: "Pendant", action: "Attends le setup — ne force jamais un trade", color: "#fbbf24" },
            { heure: "Entrée", action: "Checklist complète — 5-6 confirmations minimum", color: "#34d399" },
            { heure: "Après", action: "Journal de trading — note chaque trade gagné ou perdu", color: "#a78bfa" },
            { heure: "Bilan", action: "Review hebdomadaire — qu'est-ce qui a bien/mal marché ?", color: "#f87171" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#0f172a",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}>
              <span style={{
                background: item.color,
                color: "#0f172a",
                fontWeight: "bold",
                fontSize: "12px",
                padding: "4px 8px",
                borderRadius: "6px",
                flexShrink: 0,
              }}>{item.heure}</span>
              <span style={{ color: "#cbd5e1", fontSize: "13px" }}>{item.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CITATION */}
      <div style={{
        background: "linear-gradient(135deg, #78350f, #1e293b)",
        borderRadius: "15px",
        padding: "25px",
        marginBottom: "20px",
        border: "1px solid #d97706",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "30px", marginBottom: "15px" }}>💬</div>
        <p style={{ color: "#fcd34d", fontSize: "16px", lineHeight: "1.8", fontStyle: "italic", margin: 0 }}>
          "Le trading est simple mais pas facile. La stratégie c'est 20% du succès. 
          Le reste c'est la discipline, la patience et le contrôle des émotions."
        </p>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "15px" }}>— Trader Professionnel</div>
      </div>

      {/* FÉLICITATIONS */}
      <div style={{
        background: "linear-gradient(135deg, #064e3b, #1e3a5f)",
        borderRadius: "15px",
        padding: "25px",
        marginBottom: "25px",
        border: "1px solid #34d399",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "40px", marginBottom: "15px" }}>🏆</div>
        <h2 style={{ color: "#34d399", fontSize: "22px", margin: "0 0 10px 0" }}>
          Formation Intermédiaire Complète !
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", margin: "0 0 20px 0" }}>
          Tu as maintenant toutes les bases du Price Action niveau intermédiaire. 
          Structure, BOS/CHoCH, zones, Golden Zone, manipulation, patterns, confluence, 
          gestion du risque, sessions et psychologie. 
          <strong style={{ color: "white" }}> C'est à toi de pratiquer maintenant !</strong>
        </p>
        <a href="/formation/intermediaire">
          <button style={{
            background: "linear-gradient(to right, #34d399, #2563eb)",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "12px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}>
            📚 Revoir les leçons
          </button>
        </a>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/intermediaire/sessions" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px", background: "#1e293b",
            color: "white", border: "1px solid #334155",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>← Leçon 9</button>
        </a>
        <a href="/formation" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(to right, #e11d48, #7c3aed)",
            color: "white", border: "none",
            borderRadius: "12px", fontSize: "15px", cursor: "pointer",
          }}>🏠 Formations</button>
        </a>
      </div>

    </div>
  );
}
