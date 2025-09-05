from flask import Flask, request, jsonify
from vnstock import Quote
from datetime import datetime
import pandas as pd

app = Flask(__name__)

@app.get('/ohlcv')
def get_ohlcv():
    symbol = request.args.get('symbol', 'VNM').upper()
    start = request.args.get('start', '2018-01-01')
    end = request.args.get('end', datetime.now().strftime('%Y-%m-%d'))
    interval = request.args.get('interval', '1D')

    quote = Quote(symbol)
    df = quote.history(start=start, end=end, interval=interval)

    if 'time' not in df.columns and 'date' in df.columns:
        df = df.rename(columns={'date': 'time'})

    keep_cols = ['time','open','high','low','close','volume']
    df = df[[c for c in keep_cols if c in df.columns]].copy()

    if pd.api.types.is_datetime64_any_dtype(df['time']):
        df['time'] = df['time'].dt.strftime('%Y-%m-%d')

    data = df.to_dict(orient='records')
    return jsonify({'symbol': symbol, 'interval': interval, 'data': data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
