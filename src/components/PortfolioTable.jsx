import React from "react";

const PortfolioTable = ({ tokens, prices }) => {
  const getPrice = (id) => prices[id]?.usd || 0;

  const totalPortfolioValue = tokens.reduce((acc, token) => {
    return acc + token.amount * getPrice(token.id);
  }, 0);

  return (
    <div style={{ overflowX: 'auto' }}>
      <table border="1" cellPadding="10" style={{ width: '100%', backgroundColor: "#fff" }}>
        <thead style={{ backgroundColor: "#333", color: "#fff" }}>
          <tr>
            <th>Token</th>
            <th>Amount</th>
            <th>Price (USD)</th>
            <th>Total Value (USD)</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => {
            const price = getPrice(token.id);
            const value = token.amount * price;

            return (
              <tr key={token.id}>
                <td>{token.name}</td>
                <td>{token.amount.toLocaleString()}</td>
                <td>${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td>${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
            );
          })}
          <tr style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
            <td colSpan="3">Total Portfolio Value</td>
            <td>
              ${totalPortfolioValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
