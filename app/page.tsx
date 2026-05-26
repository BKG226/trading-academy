export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* MENU */}
      <nav className="flex justify-between items-center p-5 border-b border-gray-800">

        <h1 className="text-green-400 text-2xl font-bold">
          Trading Pro
        </h1>

        <div className="flex gap-6">

          <a href="/" className="hover:text-green-400">
            Accueil
          </a>

          <a href="/formation" className="hover:text-green-400">
            Formation
          </a>

          <a href="/signaux" className="hover:text-green-400">
            Signaux
          </a>

          <a href="/connexion" className="hover:text-green-400">
            Connexion
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center p-10 mt-10">

        <h2 className="text-5xl font-bold text-green-400 mb-6">
          Deviens un Trader Pro
        </h2>

        <p className="text-gray-300 max-w-2xl mb-8">
          Apprends le trading Forex, Crypto et les stratégies professionnelles.
        </p>

        <div className="flex gap-4">

          <button className="bg-green-500 px-6 py-3 rounded-xl font-bold">
            Commencer
          </button>

          <button className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            Voir Formation
          </button>

        </div>

      </section>

    </main>
  );
}
