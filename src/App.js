import React, { useEffect, useState } from "react";
import PortfolioTable from "./components/PortfolioTable";
import { fetchPrices } from "./utils/fetchPrices";

function App() {
  const [prices, setPrices] = useState({});

  // Sample portfolio
  const tokens = [
    { id: "bitcoin", name: "Bitcoin", amount: 0.05 },
    { id: "ethereum", name: "Ethereum", amount: 1.2 },
    { id: "dogecoin", name: "Dogecoin", amount: 1000 },
  ];

  const ids = tokens.map((token) => token.id);

  useEffect(() => {
    async function getPrices() {
      const priceData = await fetchPrices(ids);
      setPrices(priceData);
    }

    getPrices();

    // Optional: auto-refresh every 60s
    const interval = setInterval(getPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Crypto Portfolio Tracker</h1>
      <PortfolioTable tokens={tokens} prices={prices} />
    </div>
  );
}

export default App;
