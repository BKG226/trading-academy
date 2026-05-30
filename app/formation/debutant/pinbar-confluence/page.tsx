export default function PinbarConfluence() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #f59e0b" }}>
        <a href="/formation/debutant" style={{ color: "#fbbf24", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>🎯 Pin Bar — Confluence Avancée</h1>
        <p style={{ color: "#fbbf24", margin: 0, fontSize: "14px" }}>Leçon 11 sur 15 — Maîtriser le Pin Bar comme un pro</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Aller plus loin avec le Pin Bar</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Dans la leçon précédente tu as appris les bases de la confluence. Maintenant on va
          <strong style={{ color: "white" }}> approfondir chaque combinaison</strong> avec des règles précises
          et des exemples concrets. Le but est que tu puisses
          <strong style={{ color: "#fbbf24" }}> identifier et trader ces setups les yeux fermés</strong>.
        </p>
      </div>

      {/* PIN BAR RANGE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0891b2" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>↔️ 1. Pin Bar en Marché Range — Détails</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          En marché range le Pin Bar est l'outil parfait pour trader les
          <strong style={{ color: "#38bdf8" }}> rebonds entre support et résistance</strong>.
          C'est un setup répétitif et très rentable si bien executé.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="30" x2="300" y2="30" stroke="#f87171" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="0" y1="130" x2="300" y2="130" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="230" y="25" fill="#f87171" fontSize="9">Resistance</text>
            <text x="240" y="145" fill="#34d399" fontSize="9">Support</text>
            <polyline points="20,80 50,30 80,80 110,130 140,80 170,30 200,80 230,130"
              fill="none" stroke="#60a5fa" strokeWidth="1.5" />
            <line x1="110" y1="130" x2="110" y2="155" stroke="#34d399" strokeWidth="3" />
            <rect x="102" y="122" width="16" height="12" fill="#34d399" rx="2" />
            <line x1="170" y1="30" x2="170" y2="5" stroke="#f87171" strokeWidth="3" />
            <rect x="162" y="28" width="16" height="12" fill="#f87171" rx="2" />
            <text x="115" y="155" fill="#34d399" fontSize="9">BUY Pin Bar</text>
            <text x="175" y="12" fill="#f87171" fontSize="9">SELL Pin Bar</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { titre: "Etape 1 — Identifie le Range", desc: "Le prix oscille entre deux niveaux clairs depuis au moins 3 touches de chaque cote", color: "#60a5fa" },
            { titre: "Etape 2 — Attends l'extreme", desc: "Ne trade pas au milieu — attends que le prix arrive sur le support ou la resistance", color: "#fbbf24" },
            { titre: "Etape 3 — Confirmation Pin Bar", desc: "Bullish Pin Bar sur support → BUY / Bearish Pin Bar sur resistance → SELL", color: "#34d399" },
            { titre: "Etape 4 — Gestion du trade", desc: "SL juste hors du range — TP sur le niveau oppose du range — RR souvent 1:3 ou mieux", color: "#a78bfa" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid " + item.color }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px", marginBottom: "4px" }}>{item.titre}</div>
              <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EXEMPLES TRADES */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📊 2. Exemples de Trades Pin Bar</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Analysons des <strong style={{ color: "white" }}>setups concrets</strong> pour comprendre comment
          appliquer le Pin Bar dans des situations réelles de marché.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

          {/* Exemple 1 */}
          <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #16a34a" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px" }}>Exemple 1 — Setup Parfait BUY</span>
              <span style={{ color: "#34d399", fontSize: "12px" }}>RR 1:3</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Daily → Uptrend clair avec serie de HH et HL",
                "H4 → Prix revient sur zone de demande importante",
                "H4 → Bullish Pin Bar avec longue meche basse",
                "Fibonacci → Zone de demande dans Golden Zone 0.50-0.618",
                "Entree : Cloture du Pin Bar / SL : Sous la meche / TP : Prochain HH",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#34d399", fontSize: "12px", flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#94a3b8", fontSize: "12px" }}>{step}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", marginTop: "10px", textAlign: "center" }}>
              <span style={{ color: "#34d399", fontWeight: "bold", fontSize: "14px" }}>4 confluences = Trade de haute probabilite !</span>
            </div>
          </div>

          {/* Exemple 2 */}
          <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #f87171" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px" }}>Exemple 2 — Setup Parfait SELL</span>
              <span style={{ color: "#f87171", fontSize: "12px" }}>RR 1:2</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Daily → Downtrend clair avec serie de LL et LH",
                "H4 → Prix remonte sur zone d'offre importante",
                "H4 → Bearish Pin Bar avec longue meche haute",
                "Trendline baissiere → Pin Bar exactement dessus",
                "Entree : Cloture du Pin Bar / SL : Au-dessus de la meche / TP : Prochain LL",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#f87171", fontSize: "12px", flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#94a3b8", fontSize: "12px" }}>{step}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", marginTop: "10px", textAlign: "center" }}>
              <span style={{ color: "#f87171", fontWeight: "bold", fontSize: "14px" }}>4 confluences = Trade de haute probabilite !</span>
            </div>
          </div>

          {/* Exemple 3 mauvais */}
          <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #fbbf24" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "14px" }}>Exemple 3 — Mauvais Setup</span>
              <span style={{ color: "#f87171", fontSize: "12px" }}>A eviter</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Structure pas claire sur Daily — range confus",
                "Pin Bar au milieu du graphique — pas sur zone cle",
                "Meche correcte mais pas de confluence supplementaire",
                "Resultat previsible : perte ou trade mediocre",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#f87171", fontSize: "12px", flexShrink: 0 }}>✗</span>
                  <span style={{ color: "#94a3b8", fontSize: "12px" }}>{step}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#1e293b", borderRadius: "8px", padding: "10px", marginTop: "10px", textAlign: "center" }}>
              <span style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "13px" }}>1 seule confluence = Trade mediocre — passe ton chemin !</span>
            </div>
          </div>
        </div>
      </div>

      {/* CHECKLIST PIN BAR */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>✅ Checklist avant chaque Pin Bar</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", marginBottom: "15px" }}>
          Avant chaque trade Pin Bar, pose-toi ces questions :
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { q: "La tendance est-elle claire sur le Daily ?", color: "#34d399" },
            { q: "Le Pin Bar est-il sur une zone cle (support, resistance, offre/demande) ?", color: "#60a5fa" },
            { q: "La meche fait-elle au moins 2/3 de la bougie totale ?", color: "#a78bfa" },
            { q: "Y a-t-il au moins 2-3 confluences alignees ?", color: "#fbbf24" },
            { q: "Le RR est-il d'au moins 1:2 ?", color: "#34d399" },
            { q: "J'attends la cloture complete avant d'entrer ?", color: "#f87171" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "6px", border: "2px solid " + item.color, flexShrink: 0 }} />
              <span style={{ color: "#cbd5e1", fontSize: "13px" }}>{item.q}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", marginTop: "15px", textAlign: "center", border: "1px solid #d97706" }}>
          <span style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "15px" }}>
            6/6 coches = Entre ! Moins de 4 = Passe ton chemin
          </span>
        </div>
      </div>

      {/* RÈGLES PRO */}
      <div style={{ background: "linear-gradient(135deg, #0c4a6e, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #0284c7" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>⭐ Règles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "La qualite du Pin Bar compte plus que la frequence — 1 bon trade par semaine suffit",
            "Un Pin Bar sur Daily ou Weekly est 5x plus puissant que sur H1",
            "Si tu dois forcer le setup — il n'existe pas. Passe au prochain",
            "Pratique l'identification de Pin Bar sur des graphiques historiques chaque jour",
            "Le Pin Bar combiné au Fibonacci Golden Zone est le setup le plus rentable",
          ].map((rule, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "10px" }}>
              <span style={{ color: "#38bdf8", flexShrink: 0 }}>→</span>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <a href="/formation/debutant/tactics" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 10
          </button>
        </a>
        <a href="/formation/debutant/engulfing" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #f59e0b, #6366f1)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 12 →
          </button>
        </a>
      </div>

    </div>
  );
}
