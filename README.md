# Dashboard

stock-dashboard/
├── backend/
│   ├── server.js
│   └── data_fetch/
│       └── vnstock_fetcher.py
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── Header.js
│   │   │   ├── Sidebar.js
│   │   │   ├── MainContent.js
│   │   │   ├── MarketOverview.js
│   │   │   ├── StockList.js
│   │   │   ├── Watchlist.js
│   │   │   ├── StockChart.js
│   │   │   └── Labs.js
│   │   ├── context/
│   │   │   └── StockContext.js
│   │   ├── hooks/
│   │   │   └── useOhlcvSocket.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
