import React from 'react';
import MarketOverview from './MarketOverview';
import StockList from './StockList';
import Watchlist from './Watchlist';
import StockChart from './StockChart';
import Labs from './Labs';

export default function MainContent() {
  return (
    <main style={{marginLeft: '240px', padding: '20px', paddingTop: '60px'}}>
      <MarketOverview />
      <StockList />
      <Watchlist />
      <StockChart symbol="AAPL" />
      <Labs />
    </main>
  );
}
