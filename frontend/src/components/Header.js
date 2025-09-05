import React from 'react';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#223344',
      color: '#fff',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '50px',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{fontWeight: 'bold', fontSize: '20px'}}>StockPro Dashboard</div>
      <input
        type="search"
        placeholder="Search stocks..."
        style={{
          padding: '6px 10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: 'none',
          width: '300px'
        }}
      />
      <div>Market Open</div>
    </header>
  );
}
