import React, { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import { useOhlcvSocket } from '../hooks/useOhlcvSocket';

export default function StockChart({ symbol = 'VNM', interval = '1D' }) {
  const chartRef = useRef();
  const seriesRef = useRef();
  const data = useOhlcvSocket(symbol, interval);

  useEffect(() => {
    chartRef.current = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 400,
      layout: { backgroundColor: '#121822', textColor: 'white' },
      grid: { vertLines: { color: '#444' }, horzLines: { color: '#444' } },
      rightPriceScale: { borderColor: '#555' },
      timeScale: { borderColor: '#555' }
    });
    seriesRef.current = chartRef.current.addCandlestickSeries();
    return () => chartRef.current.remove();
  }, []);

  useEffect(() => {
    if (!seriesRef.current) return;
    seriesRef.current.setData(data || []);
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: 400 }} />;
}
