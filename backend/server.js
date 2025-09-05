const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

// Proxy gọi dữ liệu OHLCV từ Python service vnstock
app.get('/api/ohlcv', async (req, res) => {
  try {
    const { symbol = 'VNM', start = '2018-01-01', end, interval = '1D' } = req.query;
    const params = new URLSearchParams({ symbol, start, interval });
    if (end) params.append('end', end);

    const response = await fetch(`http://localhost:5001/ohlcv?${params.toString()}`);
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Socket.IO phát dữ liệu realtime mô phỏng
io.on('connection', async (socket) => {
  console.log('Client connected', socket.id);
  socket.on('subscribe', async ({ symbol = 'VNM', interval = '1D' }) => {
    try {
      const params = new URLSearchParams({ symbol, start: '2018-01-01', interval });
      const response = await fetch(`http://localhost:5001/ohlcv?${params.toString()}`);
      const { data } = await response.json();

      socket.emit('ohlcv', { symbol, interval, data });

      let last = data[data.length - 1];
      const timer = setInterval(() => {
        const noise = (Math.random()-0.5) * 0.01 * last.close;
        const close = +(last.close + noise).toFixed(2);
        const point = { time: last.time, open: last.open, high: Math.max(last.high, close), low: Math.min(last.low, close), close, volume: last.volume };
        socket.emit('ohlcv_update', { symbol, point });
        last = point;
      }, 3000);

      socket.on('disconnect', () => clearInterval(timer));
    } catch (e) {
      socket.emit('error', e.message);
    }
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log('Server running on', PORT));
