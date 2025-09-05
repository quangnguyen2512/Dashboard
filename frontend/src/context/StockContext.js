import React, { createContext, useContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

const StockContext = createContext([]);

const socket = io('http://localhost:4000');

export function StockProvider({ children }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    socket.on('stockData', setStocks);
    return () => socket.off('stockData');
  }, []);

  return <StockContext.Provider value={stocks}>{children}</StockContext.Provider>;
}

export function useStocks() {
  return useContext(StockContext);
}
