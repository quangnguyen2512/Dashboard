import React from 'react';
import { useStocks } from '../context/StockContext';

export default function MarketOverview() {
  const stocks = useStocks();

  const gainers = stocks.filter(s => s.change > 0).slice(0, 3);
  const losers = stocks.filter(s => s.change < 0).slice(0, 3);

  return (
    <div style={{padding: '10px', border: '1px solid gray', marginBottom: '10px', backgroundColor: '#1e2d3d'}}>
      <h2>Market Overview</h2>
      <h3>Top Gainers</h3>
      <ul>
        {gainers.map(stock => <li key={stock.symbol}>{stock.symbol} +{stock.changePercent}%</li>)}
      </ul>
      <h3>Top Losers</h3>
      <ul>
        {losers.map(stock => <li key={stock.symbol}>{stock.symbol} {stock.changePercent}%</li>)}
      </ul>
    </div>
  );
}
