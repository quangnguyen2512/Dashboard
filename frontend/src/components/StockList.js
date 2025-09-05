import React from 'react';
import { useStocks } from '../context/StockContext';

export default function StockList() {
  const stocks = useStocks();

  return (
    <div style={{padding: '10px', border: '1px solid gray', backgroundColor: '#1e2d3d'}}>
      <h2>Stocks</h2>
      <table border="1" cellPadding="5" width="100%" style={{color: 'white'}}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change %</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.symbol} style={{color: stock.change > 0 ? 'lightgreen' : 'tomato'}}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{stock.changePercent.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
