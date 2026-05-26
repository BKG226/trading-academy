export default function Paiement() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold text-green-400 mb-8">
        💳 Paiement Abonnement
      </h1>

      {/* MOBILE MONEY */}
      <div className="bg-gray-900 p-6 rounded-2xl mb-6">

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          📱 Mobile Money
        </h2>

        <p>Orange Money : +226 XX XX XX XX</p>
        <p>MTN Money : +233 XX XX XX XX</p>
        <p>Moov Money : +226 XX XX XX XX</p>

        <button className="mt-4 bg-green-500 px-4 py-2 rounded-xl">
          J’ai payé (confirmer)
        </button>

      </div>

      {/* CRYPTO */}
      <div className="bg-gray-900 p-6 rounded-2xl">

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          ₿ Crypto Payment
        </h2>

        <p>Bitcoin (BTC) :</p>
        <p className="text-sm text-gray-300">
          bc1qexampleaddressxxxxxxxxxxxx
        </p>

        <br />

        <p>USDT (TRC20) :</p>
        <p className="text-sm text-gray-300">
          TExampleUSDTWalletAddressxxxxxxxx
        </p>

        <button className="mt-4 bg-green-500 px-4 py-2 rounded-xl">
          J’ai envoyé le paiement
        </button>

      </div>

    </main>
  );
}
