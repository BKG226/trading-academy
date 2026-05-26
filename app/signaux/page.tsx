"use client";

import { useEffect } from "react";

export default function Signaux() {

  useEffect(() => {

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type = "text/javascript";

    script.async = true;

    script.innerHTML = `
    {
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "15",
      "timezone": "Africa/Accra",
      "theme": "dark",
      "style": "1",
      "locale": "fr",
      "toolbar_bg": "#000000",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_chart"
    }`;

    document.getElementById("tradingview_chart")?.appendChild(script);

  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold text-green-400 mb-6">
        📊 Signaux Trading
      </h1>

      <div className="bg-gray-900 p-4 rounded-2xl h-[600px]">

        <div
          id="tradingview_chart"
          className="w-full h-full"
        ></div>

      </div>

    </main>
  );
}
