import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function Dashboard() {
  return (
    <div style={{height: '100vh', backgroundColor: '#121822', color: '#fff'}}>
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}
