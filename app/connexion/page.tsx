export default function Connexion() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6">

      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-green-400 mb-6 text-center">
          Connexion
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Adresse email"
            className="p-3 rounded-xl bg-black text-white border border-gray-700"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="p-3 rounded-xl bg-black text-white border border-gray-700"
          />

          <button className="bg-green-500 hover:bg-green-600 p-3 rounded-xl font-bold">
            Se connecter
          </button>

        </div>

      </div>

    </main>
  );
}
