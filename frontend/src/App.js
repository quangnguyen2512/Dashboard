import React from 'react';
import Dashboard from './components/Dashboard';
import { StockProvider } from './context/StockContext';

export default function App() {
  return (
    <StockProvider>
      <Dashboard />
    </StockProvider>
  );
}
