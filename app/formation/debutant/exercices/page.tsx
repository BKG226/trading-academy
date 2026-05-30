export default function Exercices() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #064e3b, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #16a34a" }}>
        <a href="/formation/debutant" style={{ color: "#34d399", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>✏️ Exercices Pratiques</h1>
        <p style={{ color: "#34d399", margin: 0, fontSize: "14px" }}>Leçon 5 sur 15 — Teste tes connaissances</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Pourquoi pratiquer ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Lire la théorie c'est bien — mais <strong style={{ color: "white" }}>pratiquer est obligatoire</strong>.
          Les traders professionnels ont analysé des <strong style={{ color: "#fbbf24" }}>milliers de graphiques</strong> avant
          de devenir rentables. Ces exercices vont t'aider à
          <strong style={{ color: "#34d399" }}> reconnaître les patterns automatiquement</strong>.
        </p>
      </div>

      {/* EXERCICE 1 */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #2563eb" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>📝 Exercice 1 — Identifie la bougie</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Regarde chaque bougie et identifie si elle est <strong style={{ color: "#34d399" }}>haussière</strong> ou
          <strong style={{ color: "#f87171" }}> baissière</strong>, et nomme ses parties.
        </p>
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          {[
            { type: "haussiere", open: 100, close: 150, high: 160, low: 90, color: "#34d399" },
            { type: "baissiere", open: 150, close: 100, high: 165, low: 85, color: "#f87171" },
            { type: "doji", open: 125, close: 126, high: 160, low: 90, color: "#fbbf24" },
          ].map((bougie, i) => (
            <div key={i} style={{ flex: 1, background: "#0f172a", borderRadius: "12px", padding: "15px", textAlign: "center", border: "1px solid #334155" }}>
              <svg viewBox="0 0 60 140" style={{ width: "45px", height: "110px" }}>
                {bougie.type === "haussiere" && (
                  <>
                    <line x1="30" y1="10" x2="30" y2="25" stroke={bougie.color} strokeWidth="2" />
                    <rect x="18" y="25" width="24" height="70" fill={bougie.color} rx="3" />
                    <line x1="30" y1="95" x2="30" y2="120" stroke={bougie.color} strokeWidth="2" />
                  </>
                )}
                {bougie.type === "baissiere" && (
                  <>
                    <line x1="30" y1="10" x2="30" y2="30" stroke={bougie.color} strokeWidth="2" />
                    <rect x="18" y="30" width="24" height="70" fill={bougie.color} rx="3" />
                    <line x1="30" y1="100" x2="30" y2="125" stroke={bougie.color} strokeWidth="2" />
                  </>
                )}
                {bougie.type === "doji" && (
                  <>
                    <line x1="30" y1="10" x2="30" y2="65" stroke={bougie.color} strokeWidth="2" />
                    <rect x="18" y="65" width="24" height="5" fill={bougie.color} rx="1" />
                    <line x1="30" y1="70" x2="30" y2="125" stroke={bougie.color} strokeWidth="2" />
                  </>
                )}
              </svg>
              <p style={{ color: "#64748b", fontSize: "12px", margin: "8px 0 4px 0" }}>Bougie {i + 1}</p>
              <p style={{ color: bougie.color, fontSize: "11px", fontWeight: "bold", margin: 0 }}>
                {bougie.type === "haussiere" ? "Haussiere ?" : bougie.type === "baissiere" ? "Baissiere ?" : "Doji ?"}
              </p>
            </div>
          ))}
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "15px", border: "1px solid #334155" }}>
          <p style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "14px", margin: "0 0 10px 0" }}>✅ Reponses :</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              { num: "1", rep: "Haussiere — Close > Open — Corps vert avec meches", color: "#34d399" },
              { num: "2", rep: "Baissiere — Open > Close — Corps rouge avec meches", color: "#f87171" },
              { num: "3", rep: "Doji — Open = Close — Corps minimal, longues meches", color: "#fbbf24" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", gap: "10px" }}>
                <span style={{ color: r.color, fontWeight: "bold", fontSize: "13px" }}>Bougie {r.num} :</span>
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>{r.rep}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXERCICE 2 */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #7c3aed" }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>📝 Exercice 2 — Identifie le Pattern</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Regarde ces formations et identifie le pattern. Quel signal donnent-ils ?
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

          {/* Pattern 1 */}
          <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #334155" }}>
            <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 10px 0" }}>Formation A — Quel pattern est-ce ?</p>
            <svg viewBox="0 0 150 100" style={{ width: "130px", height: "80px" }}>
              <line x1="40" y1="15" x2="40" y2="22" stroke="#f87171" strokeWidth="2" />
              <rect x="28" y="22" width="24" height="45" fill="#f87171" rx="2" />
              <line x1="40" y1="67" x2="40" y2="75" stroke="#f87171" strokeWidth="2" />
              <line x1="90" y1="10" x2="90" y2="18" stroke="#34d399" strokeWidth="2" />
              <rect x="76" y="18" width="28" height="65" fill="#34d399" rx="2" />
              <line x1="90" y1="83" x2="90" y2="92" stroke="#34d399" strokeWidth="2" />
            </svg>
            <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", marginTop: "10px", borderLeft: "3px solid #34d399" }}>
              <p style={{ color: "#34d399", fontWeight: "bold", margin: 0, fontSize: "13px" }}>Reponse : Bullish Engulfing</p>
              <p style={{ color: "#94a3b8", fontSize: "12px", margin: "4px 0 0 0" }}>La verte avale completement la rouge → Signal BUY fort</p>
            </div>
          </div>

          {/* Pattern 2 */}
          <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #334155" }}>
            <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 10px 0" }}>Formation B — Quel pattern est-ce ?</p>
            <svg viewBox="0 0 150 100" style={{ width: "130px", height: "80px" }}>
              <line x1="40" y1="10" x2="40" y2="20" stroke="#34d399" strokeWidth="2" />
              <rect x="28" y="20" width="24" height="20" fill="#34d399" rx="2" />
              <line x1="40" y1="40" x2="40" y2="85" stroke="#34d399" strokeWidth="3" />
            </svg>
            <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", marginTop: "10px", borderLeft: "3px solid #34d399" }}>
              <p style={{ color: "#34d399", fontWeight: "bold", margin: 0, fontSize: "13px" }}>Reponse : Hammer</p>
              <p style={{ color: "#94a3b8", fontSize: "12px", margin: "4px 0 0 0" }}>Longue meche basse, petit corps → Signal BUY — rejet du bas</p>
            </div>
          </div>

          {/* Pattern 3 */}
          <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #334155" }}>
            <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 10px 0" }}>Formation C — Quel pattern est-ce ?</p>
            <svg viewBox="0 0 200 110" style={{ width: "170px", height: "90px" }}>
              <rect x="15" y="20" width="22" height="60" fill="#f87171" rx="2" />
              <text x="10" y="95" fill="#f87171" fontSize="8">Baissiere</text>
              <line x1="72" y1="70" x2="72" y2="78" stroke="#fbbf24" strokeWidth="2" />
              <rect x="64" y="78" width="16" height="8" fill="#fbbf24" rx="1" />
              <line x1="72" y1="86" x2="72" y2="95" stroke="#fbbf24" strokeWidth="2" />
              <text x="58" y="108" fill="#fbbf24" fontSize="8">Etoile</text>
              <rect x="115" y="20" width="22" height="60" fill="#34d399" rx="2" />
              <text x="108" y="95" fill="#34d399" fontSize="8">Haussiere</text>
            </svg>
            <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", marginTop: "10px", borderLeft: "3px solid #fbbf24" }}>
              <p style={{ color: "#fbbf24", fontWeight: "bold", margin: 0, fontSize: "13px" }}>Reponse : Morning Star</p>
              <p style={{ color: "#94a3b8", fontSize: "12px", margin: "4px 0 0 0" }}>3 bougies — baissiere + etoile + haussiere → Signal BUY fort</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXERCICE 3 */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>📝 Exercice 3 — BUY ou SELL ?</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Pour chaque situation, dis si tu cherches un <strong style={{ color: "#34d399" }}>BUY</strong> ou un
          <strong style={{ color: "#f87171" }}> SELL</strong> et pourquoi.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            {
              question: "Tu vois un Bullish Engulfing au bas d'une tendance baissiere, sur un niveau de support",
              reponse: "BUY",
              explication: "Engulfing haussier sur support = signal fort de retournement vers le haut",
              color: "#34d399",
            },
            {
              question: "Tu vois un Shooting Star au sommet d'une tendance haussiere, sur une resistance",
              reponse: "SELL",
              explication: "Shooting Star sur resistance = rejet du haut, retournement baissier probable",
              color: "#f87171",
            },
            {
              question: "Tu vois un Doji standard au milieu d'une tendance — pas sur une zone cle",
              reponse: "ATTENDS",
              explication: "Un Doji seul au milieu du marche = pas assez de confirmation. Attends !",
              color: "#fbbf24",
            },
            {
              question: "Tu vois un Bearish Engulfing sur une zone d'offre apres une forte hausse",
              reponse: "SELL",
              explication: "Bearish Engulfing sur zone d'offre = les vendeurs reprennent le controle",
              color: "#f87171",
            },
          ].map((q, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #334155" }}>
              <p style={{ color: "#cbd5e1", fontSize: "13px", margin: "0 0 10px 0", lineHeight: "1.6" }}>
                <strong style={{ color: "white" }}>Situation {i + 1} :</strong> {q.question}
              </p>
              <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", borderLeft: "3px solid " + q.color }}>
                <p style={{ color: q.color, fontWeight: "bold", margin: "0 0 4px 0", fontSize: "14px" }}>
                  Reponse : {q.reponse}
                </p>
                <p style={{ color: "#94a3b8", fontSize: "12px", margin: 0 }}>{q.explication}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXERCICE 4 */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0891b2" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>📝 Exercice 4 — Vrai ou Faux ?</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { affirmation: "Un Doji seul suffit pour entrer en trade", reponse: false, explication: "FAUX — Un Doji seul ne suffit pas. Il faut toujours une confirmation supplementaire." },
            { affirmation: "Plus la meche d'un Hammer est longue, plus le signal est fort", reponse: true, explication: "VRAI — Une longue meche = rejet fort = plus de vendeurs ont ete ecrase par les acheteurs." },
            { affirmation: "On peut trader un Engulfing n'importe ou sur le graphique", reponse: false, explication: "FAUX — L'Engulfing doit etre sur une zone cle (support, resistance, offre/demande)." },
            { affirmation: "Le Morning Star est un pattern de 3 bougies", reponse: true, explication: "VRAI — Bougie baissiere + petite etoile + grande haussiere = Morning Star." },
            { affirmation: "Un Bearish Engulfing donne un signal d'achat", reponse: false, explication: "FAUX — Bearish Engulfing = la bougie rouge avale la verte = signal de VENTE." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #334155" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                <span style={{ color: item.reponse ? "#34d399" : "#f87171", fontWeight: "bold", fontSize: "14px", flexShrink: 0 }}>
                  {item.reponse ? "VRAI ✅" : "FAUX ❌"}
                </span>
                <span style={{ color: "#cbd5e1", fontSize: "13px" }}>{item.affirmation}</span>
              </div>
              <p style={{ color: "#64748b", fontSize: "12px", margin: 0, fontStyle: "italic" }}>{item.explication}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MÉTHODE D'ENTRAINEMENT */}
      <div style={{ background: "linear-gradient(135deg, #064e3b, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>🏋️ Comment t'entrainer chaque jour</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { etape: "1", action: "Ouvre TradingView et choisis une paire (EURUSD, XAUUSD...)", color: "#60a5fa" },
            { etape: "2", action: "Mets-toi sur le timeframe Daily ou H4", color: "#a78bfa" },
            { etape: "3", action: "Identifie tous les patterns que tu reconnais sur les 50 dernieres bougies", color: "#fbbf24" },
            { etape: "4", action: "Note chaque pattern et ce qu'il aurait donne comme signal", color: "#34d399" },
            { etape: "5", action: "Repete cet exercice 15 minutes par jour minimum", color: "#f87171" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#0f172a", fontWeight: "bold", fontSize: "14px", flexShrink: 0 }}>
                {item.etape}
              </div>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{item.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLE PRO */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Regles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Pratique le backtesting — analyse les graphiques passes pour voir si ton analyse etait correcte",
            "Tiens un journal de trading — note chaque pattern identifie et le resultat",
            "Ne force jamais un pattern — s'il n'est pas evident, il n'existe pas",
            "La reconnaissance des patterns vient avec la pratique — analyse 100 graphiques minimum",
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
        <a href="/formation/debutant/patterns-b" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Lecon 4B
          </button>
        </a>
        <a href="/formation/debutant/market-structure" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #16a34a, #dc2626)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Lecon 6
          </button>
        </a>
      </div>

    </div>
  );
}
