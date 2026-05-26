<div className="grid md:grid-cols-3 gap-6">

  <div className="bg-gray-900 p-6 rounded-2xl border border-green-500 hover:scale-105 transition duration-300 shadow-lg shadow-green-500/20">

    <h2 className="text-green-400 text-xl mb-2">
      💰 Capital
    </h2>

    <p className="text-4xl font-bold">
      1 250$
    </p>

  </div>

  <div className="bg-gray-900 p-6 rounded-2xl border border-green-500 hover:scale-105 transition duration-300 shadow-lg shadow-green-500/20">

    <h2 className="text-green-400 text-xl mb-2">
      📈 Signaux
    </h2>

    <p className="text-4xl font-bold">
      12 actifs
    </p>

  </div>

  <div className="bg-gray-900 p-6 rounded-2xl border border-green-500 hover:scale-105 transition duration-300 shadow-lg shadow-green-500/20">

    <h2 className="text-green-400 text-xl mb-2">
      🎯 Win Rate
    </h2>

    <p className="text-4xl font-bold">
      87%
    </p>

  </div>

</div>
export default function Dashboard() {
  return (
    <main style={{ background: "black", color: "white", minHeight: "100vh", padding: "20px" }}>

      <h1 style={{ color: "lime", fontSize: "30px" }}>
        Dashboard Trading
      </h1>

      <div style={{ marginTop: "20px" }}>
        <p>💰 Capital : 1250$</p>
        <p>📈 Signaux : 12 actifs</p>
        <p>🎯 Win Rate : 87%</p>
      </div>

    </main>
  );
}
