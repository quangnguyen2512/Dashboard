import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

export function useOhlcvSocket(symbol='VNM', interval='1D') {
  const socketRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    socketRef.current = io('http://localhost:4000');
    socketRef.current.on('ohlcv', payload => {
      setData(payload.data || []);
    });
    socketRef.current.on('ohlcv_update', ({ point }) => {
      setData(prev => prev.length ? [...prev.slice(1), point] : [point]);
    });
    socketRef.current.emit('subscribe', { symbol, interval });

    return () => { socketRef.current.disconnect(); };
  }, [symbol, interval]);

  return data;
}
