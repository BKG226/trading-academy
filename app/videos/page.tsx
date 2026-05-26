export default function Videos() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold text-green-400 mb-8">
        🎥 Formation Vidéo
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-900 p-4 rounded-2xl">

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/ss8jzSpVOng"
            title="Trading"
            allowFullScreen
          ></iframe>

          <h2 className="text-xl font-bold mt-4">
            Introduction au Trading
          </h2>

        </div>

        <div className="bg-gray-900 p-4 rounded-2xl">

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/7eh4d6sabA0"
            title="Forex"
            allowFullScreen
          ></iframe>

          <h2 className="text-xl font-bold mt-4">
            Formation Forex
          </h2>

        </div>

      </div>

    </main>
  );
}
