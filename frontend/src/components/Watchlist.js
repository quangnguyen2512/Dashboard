import React, { useState, useEffect } from 'react';
import { useStocks } from '../context/StockContext';

export default function Watchlist() {
  const stocks = useStocks();
  const [watchlist, setWatchlist] = useState(() => {
    const saved = window.localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : ['AAPL', 'GOOGL'];
  });

  useEffect(() => {
    window.localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const watchlistStocks = stocks.filter(stock => watchlist.includes(stock.symbol));

  function addStock(symbol) {
    if (!watchlist.includes(symbol) && symbol.trim() !== '') {
      setWatchlist([...watchlist, symbol]);
    }
  }

  function removeStock(symbol) {
    setWatchlist(watchlist.filter(s => s !== symbol));
  }

  return (
    <div style={{padding: '10px', border: '1px solid gray', marginTop: '20px', backgroundColor: '#1e2d3d'}}>
      <h2>Watchlist</h2>
      <input
        type="text"
        placeholder="Add stock symbol (e.g. MSFT)"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addStock(e.target.value.toUpperCase());
            e.target.value = '';
          }
        }}
        style={{marginBottom: '10px', padding: '6px', width:'100%'}}
      />
      <table border="1" cellPadding="5" width="100%" style={{color: 'white'}}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change %</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {watchlistStocks.length > 0 ? watchlistStocks.map(stock => (
            <tr key={stock.symbol} style={{color: stock.change > 0 ? 'lightgreen' : 'tomato'}}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{stock.changePercent.toFixed(2)}%</td>
              <td>
                <button onClick={() => removeStock(stock.symbol)}>Remove</button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan="5" style={{textAlign: 'center'}}>No stocks in watchlist</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
