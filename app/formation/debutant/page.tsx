export default function DebutantHome() {
  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>📘 Formation Débutant (Price Action)</h1>

      <p>Choisis une leçon :</p>

      <div style={{ display: "grid", gap: 12 }}>
        <a href="/formation/debutant/introduction">1. Introduction</a>
        <a href="/formation/debutant/candlesticks">2. Candlesticks</a>
        <a href="/formation/debutant/patterns">3. Patterns</a>
        <a href="/formation/debutant/exercices">4. Exercices</a>
        <a href="/formation/debutant/market-structure">5. Market Structure</a>
        <a href="/formation/debutant/timeframes">6. Timeframes</a>
        <a href="/formation/debutant/strategies">7. Strategies</a>
        <a href="/formation/debutant/pin-bar">8. Pin Bar</a>
        <a href="/formation/debutant/engulfing">9. Engulfing</a>
        <a href="/formation/debutant/tactics">10. Tactics</a>
      </div>
    </div>
  );
}
