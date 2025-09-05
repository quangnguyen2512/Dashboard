import React from 'react';
import StockChart from './StockChart';

const Heatmap = () => {
  const data = [
    { symbol: 'AAPL', changePercent: 1.5 },
    { symbol: 'GOOGL', changePercent: -0.5 },
    { symbol: 'TSLA', changePercent: 3.1 },
    { symbol: 'MSFT', changePercent: -2.2 },
  ];

  return (
    <div style={{ display: 'flex', gap: '12px', margin: '20px 0' }}>
      {data.map((stock) => (
        <div
          key={stock.symbol}
          style={{
            background: stock.changePercent > 0 ? 'green' : 'red',
            color: 'white',
            padding: '20px',
            borderRadius: '6px',
            width: '120px',
          }}
        >
          <strong>{stock.symbol}</strong>
          <br />
          {stock.changePercent > 0 ? '+' : ''}
          {stock.changePercent}%
        </div>
      ))}
    </div>
  );
};

const AIChatDemo = () => {
  const [msg, setMsg] = React.useState('');
  const [chat, setChat] = React.useState([
    { role: 'bot', text: 'Tôi là ChatBot demo hỗ trợ tài chính, hãy hỏi về cổ phiếu hoặc thị trường!' },
  ]);

  function sendMsg() {
    setChat([...chat, { role: 'user', text: msg }, { role: 'bot', text: '[Demo] AI đang trả lời: ' + msg }]);
    setMsg('');
  }

  return (
    <div
      style={{ margin: '20px 0', background: '#2c3850', borderRadius: '8px', padding: '20px', maxWidth: '400px' }}
    >
      <div style={{ height: 120, overflowY: 'auto' }}>
        {chat.map((c, i) => (
          <div key={i} style={{ textAlign: c.role === 'bot' ? 'left' : 'right' }}>
            {c.text}
          </div>
        ))}
      </div>
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => (e.key === 'Enter' ? sendMsg() : null)}
        style={{ width: '70%', marginRight: 7 }}
      />
      <button onClick={sendMsg}>Gửi</button>
    </div>
  );
};

const StrategyBacktestDemo = () => {
  return (
    <div
      style={{ margin: '20px 0', background: '#2c3850', borderRadius: '8px', padding: '20px' }}
    >
      <h4>Backtest chiến lược (demo)</h4>
      <button>Test DCA</button> <button>Test SPA</button>
      <p>[Kết quả demo sẽ hiện ở đây]</p>
    </div>
  );
};

const NotificationDemo = () => {
  const [notice, setNotice] = React.useState(null);
  return (
    <div style={{ margin: '20px 0' }}>
      <button onClick={() => setNotice('Có thông báo mới về cổ phiếu TSLA!')}>Gửi Thông Báo Demo</button>
      {notice && (
        <div
          style={{
            background: 'orange',
            color: 'white',
            padding: '12px',
            borderRadius: '4px',
            position: 'fixed',
            top: '60px',
            right: '30px',
          }}
        >
          {notice}
        </div>
      )}
    </div>
  );
};

export default function Labs() {
  return (
    <div
      style={{
        margin: '40px 0',
        background: '#232b3c',
        color: 'white',
        borderRadius: 8,
        padding: '32px',
      }}
    >
      <h1>🚀 Labs Thử Nghiệm</h1>
      <h3>1. Biểu đồ TradingView Lightweight Chart</h3>
      <StockChart
        symbol="AAPL"
        data={[
          { time: '2025-09-01', open: 140, high: 145, low: 138, close: 142 },
          { time: '2025-09-02', open: 142, high: 146, low: 141, close: 144 },
          { time: '2025-09-03', open: 144, high: 147, low: 143, close: 145 },
          { time: '2025-09-04', open: 145, high: 148, low: 144, close: 147 },
        ]}
      />
      <h3>2. Heatmap thị trường</h3>
      <Heatmap />
      <h3>3. Backtest chiến lược giao dịch</h3>
      <StrategyBacktestDemo />
      <h3>4. AI Tài chính Chatbot (demo)</h3>
      <AIChatDemo />
      <h3>5. Notification realtime</h3>
      <NotificationDemo />
    </div>
  );
}
