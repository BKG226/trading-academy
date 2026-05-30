export default function Engulfing() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "Arial", padding: "20px", color: "white" }}>

      <div style={{ background: "linear-gradient(135deg, #2e1065, #1e293b)", borderRadius: "20px", padding: "25px", marginBottom: "25px", border: "1px solid #6366f1" }}>
        <a href="/formation/debutant" style={{ color: "#818cf8", fontSize: "14px", textDecoration: "none" }}>← Retour aux leçons</a>
        <h1 style={{ fontSize: "26px", margin: "10px 0 5px 0", color: "white" }}>🔄 Engulfing Bar Pattern</h1>
        <p style={{ color: "#818cf8", margin: 0, fontSize: "14px" }}>Leçon 12 sur 15 — Maitriser l'Engulfing comme un pro</p>
      </div>

      {/* INTRO */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #334155" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>🎯 L'Engulfing Bar en profondeur</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "15px" }}>
          L'Engulfing Bar est l'un des patterns les plus
          <strong style={{ color: "white" }}> puissants du Price Action</strong>. Il se forme quand
          une bougie avale complètement la précédente — signalant un
          <strong style={{ color: "#fbbf24" }}> changement brutal de sentiment</strong> du marché.
          Dans cette leçon tu vas apprendre toutes les façons de le trader.
        </p>
      </div>

      {/* TRADER AVEC TENDANCE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📈 1. Engulfing avec la Tendance</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          L'Engulfing le plus fiable apparait dans le
          <strong style={{ color: "#34d399" }}> sens de la tendance principale</strong> sur un
          niveau de retracement. C'est le setup de base — simple et efficace.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <polyline points="20,130 70,90 100,108 150,65" fill="none" stroke="#34d399" strokeWidth="2" />
            <line x1="150" y1="65" x2="150" y2="95" stroke="#f87171" strokeWidth="2" />
            <rect x="142" y="75" width="16" height="22" fill="#f87171" rx="2" />
            <line x1="165" y1="62" x2="165" y2="72" stroke="#34d399" strokeWidth="2" />
            <rect x="155" y="50" width="20" height="55" fill="#34d399" rx="2" />
            <line x1="165" y1="105" x2="165" y2="115" stroke="#34d399" strokeWidth="2" />
            <text x="178" y="60" fill="#fbbf24" fontSize="10" fontWeight="bold">Engulfing!</text>
            <polyline points="178,75 230,40 275,10" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <line x1="178" y1="118" x2="275" y2="118" stroke="#f87171" strokeWidth="1" strokeDasharray="4,2" />
            <text x="195" y="133" fill="#f87171" fontSize="9">SL sous engulfing</text>
            <text x="220" y="25" fill="#34d399" fontSize="10" fontWeight="bold">BUY</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Uptrend confirme sur Daily — serie de HH et HL",
            "Prix revient sur un HL ou zone de support",
            "Petite bougie baissiere apparait (bougie mere)",
            "Grande bougie haussiere avale completement la precedente",
            "Entre en BUY a la cloture — SL sous l'engulfing — TP prochain HH",
          ].map((step, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "10px" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "11px", flexShrink: 0 }}>
                {i + 1}
              </div>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AVEC MOVING AVERAGE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>📊 2. Engulfing avec Moyennes Mobiles</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Les Moyennes Mobiles (MA 21, MA 50, MA 200) agissent comme des
          <strong style={{ color: "#fbbf24" }}> supports et résistances dynamiques</strong>.
          Un Engulfing qui apparait exactement sur une MA importante = confluence puissante.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "15px" }}>
          {[
            { ma: "MA 21", desc: "Moyenne court terme — support/resistance en tendance forte", color: "#34d399" },
            { ma: "MA 50", desc: "Moyenne moyen terme — niveau tres respecte par le marché", color: "#fbbf24" },
            { ma: "MA 200", desc: "Moyenne long terme — la plus importante — separatrice bull/bear", color: "#f87171" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "14px", minWidth: "55px" }}>{item.ma}</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{item.desc}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #fbbf24" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            💡 <strong style={{ color: "white" }}>Setup :</strong> Prix rebondit sur MA 50 +
            <strong style={{ color: "#fbbf24" }}> Bullish Engulfing exactement sur la MA</strong> =
            confluence tres forte — entre en BUY.
          </p>
        </div>
      </div>

      {/* AVEC FIBONACCI */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #0891b2" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "18px", marginTop: 0 }}>🎯 3. Engulfing + Fibonacci</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Combiner l'Engulfing avec la
          <strong style={{ color: "#38bdf8" }}> Golden Zone Fibonacci 0.50-0.618</strong> donne
          les setups les plus précis et les plus rentables.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 200" style={{ width: "100%", maxWidth: "300px" }}>
            <rect x="0" y="90" width="300" height="35" fill="#d97706" fillOpacity="0.15" />
            <line x1="0" y1="175" x2="300" y2="175" stroke="#334155" strokeWidth="1" />
            <line x1="0" y1="125" x2="300" y2="125" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,3" />
            <line x1="0" y1="90" x2="300" y2="90" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,3" />
            <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeWidth="1" />
            <text x="5" y="122" fill="#fbbf24" fontSize="9">0.500</text>
            <text x="5" y="88" fill="#fbbf24" fontSize="9">0.618</text>
            <text x="100" y="115" fill="#fbbf24" fontSize="10" fontWeight="bold">GOLDEN ZONE</text>
            <polyline points="20,175 90,20" fill="none" stroke="#34d399" strokeWidth="2" />
            <polyline points="90,20 145,108" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="145" y1="108" x2="145" y2="125" stroke="#f87171" strokeWidth="2" />
            <rect x="137" y="100" width="16" height="28" fill="#f87171" rx="2" />
            <line x1="162" y1="95" x2="162" y2="108" stroke="#34d399" strokeWidth="2" />
            <rect x="153" y="82" width="18" height="45" fill="#34d399" rx="2" />
            <line x1="162" y1="127" x2="162" y2="138" stroke="#34d399" strokeWidth="2" />
            <text x="175" y="82" fill="#fbbf24" fontSize="10">Engulfing!</text>
            <polyline points="174,100 230,55 275,15" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="225" y="35" fill="#34d399" fontSize="11" fontWeight="bold">BUY</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Trace Fibonacci du dernier bas vers le dernier haut",
            "Attends que le prix entre dans la Golden Zone 0.50-0.618",
            "Cherche un Bullish Engulfing dans cette zone",
            "Entre en BUY — SL sous le bas de l'engulfing — TP au nouveau HH",
          ].map((step, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", display: "flex", gap: "10px" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#0891b2", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "11px", flexShrink: 0 }}>
                {i + 1}
              </div>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AVEC TRENDLINES */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #9333ea" }}>
        <h2 style={{ color: "#c084fc", fontSize: "18px", marginTop: 0 }}>📐 4. Engulfing + Trendlines</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Quand un Engulfing apparait exactement sur une
          <strong style={{ color: "#c084fc" }}> trendline solide</strong> — c'est un signal de rebond
          très puissant dans la direction de la tendance.
        </p>
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "15px", marginBottom: "15px", textAlign: "center" }}>
          <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: "300px" }}>
            <line x1="10" y1="145" x2="290" y2="25" stroke="#c084fc" strokeWidth="2" strokeDasharray="6,3" />
            <text x="5" y="155" fill="#c084fc" fontSize="9">Trendline</text>
            <polyline points="20,140 70,100 100,118 150,82 175,98" fill="none" stroke="#34d399" strokeWidth="2" />
            <line x1="175" y1="98" x2="175" y2="115" stroke="#f87171" strokeWidth="2" />
            <rect x="167" y="90" width="16" height="26" fill="#f87171" rx="2" />
            <line x1="192" y1="85" x2="192" y2="96" stroke="#34d399" strokeWidth="2" />
            <rect x="183" y="72" width="18" height="46" fill="#34d399" rx="2" />
            <line x1="192" y1="118" x2="192" y2="128" stroke="#34d399" strokeWidth="2" />
            <text x="205" y="70" fill="#fbbf24" fontSize="10">Engulfing!</text>
            <polyline points="205,90 250,55 285,20" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <text x="245" y="40" fill="#34d399" fontSize="10" fontWeight="bold">BUY</text>
          </svg>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid #c084fc" }}>
          <p style={{ color: "#cbd5e1", margin: 0, fontSize: "13px" }}>
            💡 <strong style={{ color: "white" }}>Astuce :</strong> Trendline avec 3+ points de contact +
            Engulfing dessus = <strong style={{ color: "#c084fc" }}>une des meilleures entrées du Price Action</strong>.
          </p>
        </div>
      </div>

      {/* EN MARCHÉ RANGE */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #dc2626" }}>
        <h2 style={{ color: "#f87171", fontSize: "18px", marginTop: 0 }}>↔️ 5. Engulfing en Marché Sideways</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          En marché range l'Engulfing fonctionne très bien aux
          <strong style={{ color: "#f87171" }}> extrêmes du range</strong> — exactement comme le Pin Bar.
          C'est souvent le signal qui précède une cassure explosive.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "12px", borderTop: "3px solid #34d399" }}>
            <div style={{ color: "#34d399", fontWeight: "bold", fontSize: "13px", marginBottom: "6px" }}>Sur le Support</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.6" }}>
              Bullish Engulfing sur support du range → BUY avec TP sur résistance du range
            </div>
          </div>
          <div style={{ flex: 1, background: "#0f172a", borderRadius: "10px", padding: "12px", borderTop: "3px solid #f87171" }}>
            <div style={{ color: "#f87171", fontWeight: "bold", fontSize: "13px", marginBottom: "6px" }}>Sur Résistance</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.6" }}>
              Bearish Engulfing sur résistance du range → SELL avec TP sur support du range
            </div>
          </div>
        </div>
      </div>

      {/* SUPPLY DEMAND */}
      <div style={{ background: "#1e293b", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>📦 6. Engulfing + Offre et Demande</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          Les zones d'offre et de demande sont les niveaux où les
          <strong style={{ color: "white" }}> institutions ont leurs ordres</strong>.
          Un Engulfing sur ces zones = signal que les institutions
          <strong style={{ color: "#34d399" }}> activent leurs ordres</strong>.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { titre: "Zone de Demande + Bullish Engulfing", desc: "Les acheteurs institutionnels activent leurs ordres — BUY fort", color: "#34d399" },
            { titre: "Zone d'Offre + Bearish Engulfing", desc: "Les vendeurs institutionnels activent leurs ordres — SELL fort", color: "#f87171" },
            { titre: "Fresh Zone + Engulfing", desc: "Zone jamais testee + Engulfing = setup le plus puissant possible", color: "#fbbf24" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", borderLeft: "4px solid " + item.color }}>
              <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.titre}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MONEY MANAGEMENT */}
      <div style={{ background: "linear-gradient(135deg, #064e3b, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "20px", border: "1px solid #16a34a" }}>
        <h2 style={{ color: "#34d399", fontSize: "18px", marginTop: 0 }}>💰 Money Management — Engulfing</h2>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", marginBottom: "15px" }}>
          La gestion du capital pour les trades Engulfing :
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { regle: "SL placement", desc: "Juste sous le bas de l'Engulfing bullish (ou au-dessus pour bearish) — donne de l'espace", color: "#f87171" },
            { regle: "TP placement", desc: "Prochain niveau majeur — vise RR minimum 1:2, idealement 1:3", color: "#34d399" },
            { regle: "Taille de position", desc: "Maximum 1-2% du capital risque par trade — jamais plus", color: "#fbbf24" },
            { regle: "Break Even", desc: "Deplace le SL au point d'entree quand le prix fait 1R de profit", color: "#60a5fa" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "10px", padding: "12px 15px", display: "flex", gap: "12px", alignItems: "flex-start", borderLeft: "4px solid " + item.color }}>
              <div>
                <div style={{ color: item.color, fontWeight: "bold", fontSize: "13px" }}>{item.regle}</div>
                <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES PRO */}
      <div style={{ background: "linear-gradient(135deg, #78350f, #1e293b)", borderRadius: "15px", padding: "20px", marginBottom: "25px", border: "1px solid #d97706" }}>
        <h2 style={{ color: "#fbbf24", fontSize: "18px", marginTop: 0 }}>⭐ Règles Pro</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "L'Engulfing doit avaler corps ET meches de la bougie precedente",
            "Plus la bougie engulfing est grande par rapport aux voisines, plus c'est fort",
            "Combine toujours avec au moins 2 confluences — tendance + zone cle minimum",
            "L'Engulfing sur Daily ou H4 vaut beaucoup plus que sur M5 ou M15",
            "Attends toujours la cloture complete — ne jamais anticiper",
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
        <a href="/formation/debutant/pinbar-confluence" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "#1e293b", color: "white", border: "1px solid #334155", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            ← Leçon 11
          </button>
        </a>
        <a href="/formation/debutant/inside-bar" style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #6366f1, #10b981)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", cursor: "pointer" }}>
            Leçon 13 →
          </button>
        </a>
      </div>

    </div>
  );
}
