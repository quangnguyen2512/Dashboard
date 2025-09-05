import React from 'react';

export default function Sidebar() {
  return (
    <aside style={{
      width: '220px',
      backgroundColor: '#1b2838',
      color: '#fff',
      padding: '20px',
      height: 'calc(100vh - 50px)',
      position: 'fixed',
      top: '50px',
      left: 0,
      boxSizing: 'border-box'
    }}>
      <nav>
        <ul style={{listStyle: 'none', padding: 0}}>
          <li style={{marginBottom: '15px', cursor: 'pointer'}}>Dashboard</li>
          <li style={{marginBottom: '15px', cursor: 'pointer'}}>Watchlist</li>
          <li style={{marginBottom: '15px', cursor: 'pointer'}}>Portfolio</li>
          <li style={{marginBottom: '15px', cursor: 'pointer'}}>Analytics</li>
          <li style={{marginBottom: '15px', cursor: 'pointer'}}>Labs</li>
          <li style={{marginBottom: '15px', cursor: 'pointer'}}>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
