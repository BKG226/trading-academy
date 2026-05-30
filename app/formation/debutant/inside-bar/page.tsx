export default function InsideBar() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #064e3b, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #10b981" }}>
        <a href="/formation/debutant" style={{ color: "#34d399", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>📦 Inside Bar Pattern</h1>
        <p style={{ color: "#34d399", margin: 0, fontSize: "14px" }}>Leçon 13 sur 15 — Consolidation et breakout</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 Qu'est-ce qu'un Inside Bar ?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          Un Inside Bar est une bougie dont le
          <strong style={{ color: "white" }}> corps et les mèches</strong> sont entièrement contenus
          dans la bougie précédente (la Mother Bar). Il représente une
          <strong style={{ color: "#fbbf24" }}> pause du marché</strong> — une consolidation avant
          une continuation ou un retournement. C'est le calme avant la tempête.
        </p>
      </div>

      {/* ANATOMIE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #2563eb" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>🔬 Anatomie de l'Inside Bar</h2>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "20px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 280 160" style={{ width: "100%", maxWidth: "280px" }}>
            <line x1="60" y1="15" x2="60" y2="25" stroke="#94a3b8" strokeWidth="2" />
            <rect x="40" y="25" width="40" height="100" fill="#34d399" fillOpacity="0.4" stroke="#34d399" strokeWidth="2" rx="3" />
            <line x1="60" y1="125" x2="60" y2="138" stroke="#94a3b8" strokeWidth="2" />
            <text x="20" y="155" fill="#34d399" fontSize="11" fontWeight="bold">Mother Bar</text>
            <line x1="150" y1="35" x2="150" y2="42" stroke="#fbbf24" strokeWidth="2" />
            <rect x="135" y="42" width="30" height="55" fill="#fbbf24" fillOpacity="0.6" stroke="#fbbf24" strokeWidth="2" rx="3" />
            <line x1="150" y1="97" x2="150" y2="108" stroke="#fbbf24" strokeWidth="2" />
            <text x="128" y="125" fill="#fbbf24" fontSize="11" fontWeight="bold">Inside Bar</text>
            <line x1="82" y1="25" x2="133" y2="42" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2" />
            <line x1="82" y1="125" x2="133" y2="97" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2" />
            <text x="190" y="50" fill="#94a3b8" fontSize="10">Contenu dans</text>
            <text x="190" y="65" fill="#94a3b8" fontSize="10">la Mother Bar</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { point: "Mother Bar", desc: "La grande bougie qui precede — donne le cadre de reference", color: "#34d399" },
            { point: "Inside Bar", desc: "Entierement contenue — high plus bas et low plus haut que la Mother Bar", color: "#fbbf24" },
            { point: "Breakout", desc: "Quand le prix sort de la Mother Bar — donne la direction du prochain move", color: "#60a5fa" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid " + item.color }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.point}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PSYCHOLOGIE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #7c3aed" }}>
        <h2 style={{ color: "#a78bfa", fontSize: "18px", marginTop: 0 }}>🧠 Psychologie de l'Inside Bar</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          L'Inside Bar représente un moment où
          <strong style={{ color: "white" }}> acheteurs et vendeurs s'équilibrent</strong> après un fort mouvement.
          Ni les uns ni les autres ne prennent le contrôle — le marché
          <strong style={{ color: "#a78bfa" }}> reprend son souffle</strong> avant de repartir.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { phase: "Avant l'Inside Bar", desc: "Fort mouvement directionnel — la Mother Bar montre de l'energie", color: "#fbbf24" },
            { phase: "L'Inside Bar", desc: "Consolidation — le marche hesite — prise de decision en cours", color: "#a78bfa" },
            { phase: "Le Breakout", desc: "L'un des camps gagne — le prix explose dans la direction du vainqueur", color: "#34d399" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color, flexShrink: 0 }} />
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.phase}</div>
                <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUPPORT ET RESISTANCE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📏 1. Inside Bar + Support et Résistance</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Quand un Inside Bar se forme sur un
          <strong style={{ color: "#34d399" }}> niveau clé de support ou résistance</strong> — le breakout
          qui suit est souvent très puissant car les deux forces se combinent.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="0" y1="110" x2="300" y2="110" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="5" y="105" fill="#34d399" fontSize="9">Support</text>
            <polyline points="20,60 50,110 80,60 110,110" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
            <rect x="128" y="85" width="35" height="40" fill="#34d399" fillOpacity="0.3" stroke="#34d399" strokeWidth="1.5" rx="3" />
            <rect x="136" y="92" width="20" height="25" fill="#fbbf24" fillOpacity="0.6" stroke="#fbbf24" strokeWidth="1.5" rx="2" />
            <text x="125" y="145" fill="#fbbf24" fontSize="9">Inside Bar sur Support</text>
            <polyline points="168,88 220,50 270,15" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="220" y="35" fill="#34d399" fontSize="10" fontWeight="bold">BUY Breakout</text>
          </svg>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #34d399" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            ✅ <strong style={{ color: "white" }}>Setup :</strong> Inside Bar sur support
            <strong style={{ color: "#34d399" }}> + breakout haussier</strong> de la Mother Bar =
            entre en BUY avec SL sous le support.
          </p>
        </div>
      </div>

      {/* FAUX BREAKOUT */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #dc2626" }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>🪤 2. Faux Breakout de l'Inside Bar</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Le faux breakout est l'un des setups les plus
          <strong style={{ color: "white" }}> rentables mais les moins connus</strong>. Le prix semble
          casser dans une direction, piège les traders, puis repart
          <strong style={{ color: "#f87171" }}> violemment dans la direction opposée</strong>.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 170" style={{ width: "100%", maxWidth: "300px" }}>
            <rect x="80" y="40" width="40" height="80" fill="#34d399" fillOpacity="0.2" stroke="#34d399" strokeWidth="1.5" rx="3" />
            <rect x="92" y="55" width="16" height="45" fill="#fbbf24" fillOpacity="0.6" stroke="#fbbf24" strokeWidth="1.5" rx="2" />
            <text x="68" y="138" fill="#fbbf24" fontSize="9">Inside Bar</text>
            <polyline points="122,75 150,25" fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="4,2" />
            <circle cx="150" cy="22" r="5" fill="#f87171" />
            <text x="155" y="18" fill="#f87171" fontSize="9">Faux breakout haut</text>
            <polyline points="150,22 155,55 180,90 230,140 270,160" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="220" y="155" fill="#34d399" fontSize="10" fontWeight="bold">Vrai move BAS</text>
            <text x="130" y="35" fill="#fbbf24" fontSize="9">Retail achete</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Le prix casse brievement au-dessus de la Mother Bar — retail entre en BUY",
            "Le prix revient immediatement dans la Mother Bar — stops des acheteurs actives",
            "Le prix casse ensuite vers le bas avec force — c'est le vrai move",
            "Entree : quand le prix revient sous le bas de la Mother Bar",
          ].map((step, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "8px" }}>
              <span style={{ color: "#f87171", flexShrink: 0 }}>→</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FIBONACCI */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 3. Inside Bar + Fibonacci</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Quand un Inside Bar se forme dans la
          <strong style={{ color: "#fbbf24" }}> Golden Zone 0.50-0.618</strong> de Fibonacci —
          le breakout qui suit est souvent explosif car les institutions attendent
          exactement à ce niveau pour entrer.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Trace Fibonacci du dernier bas vers le dernier haut en uptrend",
            "Attends que le prix entre dans la Golden Zone 0.50-0.618",
            "Cherche un Inside Bar dans cette zone",
            "Entre sur le breakout haussier de la Mother Bar",
            "SL sous le bas de la Mother Bar — TP au nouveau HH",
          ].map((step, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "10px" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "11px", flexShrink: 0 }}>
                {i + 1}
              </div>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* EXEMPLES */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0284c7" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "18px", marginTop: 0 }}>📊 Exemples de Trades</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            {
              titre: "Trade 1 — Breakout haussier",
              confluences: ["Uptrend Daily", "Inside Bar sur HL", "Breakout de la Mother Bar"],
              result: "RR 1:3 — Gagnant",
              color: "#34d399",
            },
            {
              titre: "Trade 2 — Faux Breakout",
              confluences: ["Range marche", "Inside Bar sur resistance", "Faux breakout haut puis SELL"],
              result: "RR 1:2 — Gagnant",
              color: "#f87171",
            },
            {
              titre: "Trade 3 — Inside Bar + Fibonacci",
              confluences: ["Uptrend H4", "Inside Bar dans Golden Zone", "Breakout haussier confirme"],
              result: "RR 1:4 — Gagnant",
              color: "#fbbf24",
            },
          ].map((trade, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", border: "1px solid #334155" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>{trade.titre}</span>
                <span style={{ color: trade.color, fontSize: "12px", fontWeight: "bold" }}>{trade.result}</span>
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {trade.confluences.map((c, j) => (
                  <span key={j} style={{ background: "#1e293b", color: trade.color, padding: "3px 8px", borderRadius: "6px", fontSize: "11px" }}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MONEY MANAGEMENT */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>💰 Money Management</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { regle: "SL sur breakout normal", desc: "Juste sous le bas de la Mother Bar — donne de l'espace au trade", color: "#f87171" },
            { regle: "SL sur faux breakout", desc: "Au-dessus du haut du faux breakout — protege contre une continuation", color: "#fbbf24" },
            { regle: "TP — objectif minimum", desc: "Hauteur de la Mother Bar projetee a partir du breakout — RR 1:2 minimum", color: "#34d399" },
            { regle: "Risque par trade", desc: "Maximum 1-2% du capital — la discipline est tout", color: "#60a5fa" },
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
            "L'Inside Bar sur HTF (Daily, H4) est beaucoup plus puissant que sur LTF",
            "Attends toujours le breakout confirme — jamais en anticipation",
            "Le faux breakout est souvent plus rentable que le breakout normal",
            "Inside Bar apres un fort move = continuation probable dans la meme direction",
            "Combine Inside Bar avec tendance + zone cle pour les setups optimaux",
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
        <a href="/formation/debutant/engulfing" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 12
          </button>
        </a>
        <a href="/formation/debutant/money-management" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #10b981, #ef4444)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 14 →
          </button>
        </a>
      </div>

    </div>
  );
}
