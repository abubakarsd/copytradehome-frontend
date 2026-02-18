import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock stock data - in a real app this would come from an API
const stocksData = [
    { id: '37', name: 'Abbott Laboratories', symbol: 'ABT', exchange: 'NYSE', price: 109.975, image: 'ABT.png' },
    { id: '9', name: 'Adobe Inc.', symbol: 'ADBE', exchange: 'NASDAQ', price: 550.20, image: 'ADBE.png' },
    { id: '15', name: 'Advanced Micro Devices, Inc.', symbol: 'AMD', exchange: 'NASDAQ', price: 170.50, image: 'AMD.png' },
    { id: '3', name: 'Alphabet Inc. Class A', symbol: 'GOOGL', exchange: 'NASDAQ', price: 140.30, image: 'GOOGL.png' },
    { id: '4', name: 'Amazon.com, Inc.', symbol: 'AMZN', exchange: 'NASDAQ', price: 175.40, image: 'AMZN.png' },
    { id: '1', name: 'Apple Inc.', symbol: 'AAPL', exchange: 'NASDAQ', price: 180.95, image: 'AAPL.png' },
    { id: '17', name: 'Applied Materials, Inc.', symbol: 'AMAT', exchange: 'NASDAQ', price: 205.10, image: 'AMAT.png' },
    { id: '43', name: 'AT&T Inc.', symbol: 'T', exchange: 'NYSE', price: 17.50, image: 'T.png' },
    { id: '31', name: 'Bank of America Corporation', symbol: 'BAC', exchange: 'NYSE', price: 35.80, image: 'BAC.png' },
    { id: '21', name: 'Broadcom Inc.', symbol: 'AVGO', exchange: 'NASDAQ', price: 1200.50, image: 'AVGO.png' },
];

const DashboardStockDetails = () => {
    const { id } = useParams();
    const stock = stocksData.find(s => s.id === id);

    const [activeTab, setActiveTab] = useState('buy');
    const [orderType, setOrderType] = useState('market');
    const [amount, setAmount] = useState('');
    const [estimatedQty, setEstimatedQty] = useState(0);

    useEffect(() => {
        // --- TradingView Init ---
        const initTV = () => {
            const containerId = 'tradingview_stock_widget';
            if (window.TradingView && document.getElementById(containerId)) {
                // Clear previous if likely
                document.getElementById(containerId).innerHTML = '';
                new window.TradingView.widget({
                    "width": "100%",
                    "height": 420,
                    "symbol": `${stock.exchange}:${stock.symbol}`,
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "dark",
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#0F0F0F",
                    "enable_publishing": false,
                    "hide_top_toolbar": false,
                    "withdateranges": true,
                    "hide_legend": false,
                    "save_image": false,
                    "container_id": containerId,
                    "studies": [
                        "Volume@tv-basicstudies"
                    ]
                });
            } else {
                setTimeout(initTV, 500);
            }
        };
        initTV();
    }, [stock]);

    useEffect(() => {
        if (stock && amount) {
            const val = parseFloat(amount);
            if (!isNaN(val)) {
                // Simple estimation logic
                setEstimatedQty(val / stock.price);
            } else {
                setEstimatedQty(0);
            }
        } else {
            setEstimatedQty(0);
        }
    }, [amount, stock]);

    if (!stock) {
        return <div className="p-5 text-center">Stock not found</div>;
    }

    return (
        <div className="container-fluid page-container main-body-container">
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-1">
                            {stock.name} ({stock.symbol})
                        </h1>
                        <span className="text-muted fs-12">
                            {stock.exchange}
                        </span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/stocks">Stocks</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Trade</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Key Statistics */}
            <div className="row mb-3">
                <div className="col-xl-3 col-md-6">
                    <div className="card custom-card dashboard-main-card warning">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-fill">
                                    <span className="d-block text-muted mb-1">Total Shares</span>
                                    <h5 className="fw-semibold">
                                        0.0000 {stock.symbol}
                                    </h5>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="text-muted fs-13">Current Position</span>
                                    </div>
                                </div>
                                <div className="lh-1">
                                    <span className="avatar avatar-lg bg-transparent d-inline-flex align-items-center justify-content-center">
                                        <img src={`/assets/dashboard/images/${stock.image}`} alt={stock.name} className="rounded-circle w-100 h-100" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card custom-card dashboard-main-card warning">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-fill">
                                    <span className="d-block text-muted mb-1">Total Profit</span>
                                    <h5 className="fw-semibold text-muted">
                                        $0.00
                                    </h5>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="d-block text-muted fs-13">
                                            <i className="ti ti-minus me-1 lh-1 fs-16 align-middle"></i>
                                            All time
                                        </span>
                                    </div>
                                </div>
                                <div className="lh-1">
                                    <span className="avatar avatar-lg">
                                        <i className="ti ti-chart-line fs-22 text-warning"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card custom-card dashboard-main-card warning">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-fill">
                                    <span className="d-block text-muted mb-1">Cost of Purchase</span>
                                    <h5 className="fw-semibold">
                                        $0.00
                                    </h5>
                                    <div className="d-flex flex-column gap-1">
                                        <span className="text-muted fs-12">
                                            Avg Buy Price: <span className="fw-semibold">$0.0000</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="lh-1">
                                    <span className="avatar avatar-lg">
                                        <i className="ti ti-wallet fs-22 text-info"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card custom-card dashboard-main-card warning">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-fill">
                                    <span className="d-block text-muted mb-1">Today's Profit</span>
                                    <h5 className="fw-semibold text-muted">
                                        $0.00
                                    </h5>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="d-block text-muted fs-13">
                                            <i className="ti ti-minus me-1 lh-1 fs-16 align-middle"></i>Today
                                        </span>
                                    </div>
                                </div>
                                <div className="lh-1">
                                    <span className="avatar avatar-lg">
                                        <i className="ti ti-calendar-stats fs-22 text-success"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-xl-9">
                    <div className="card custom-card h-100 mb-3">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                {stock.name} Overview
                            </div>
                            <span className="badge bg-primary-transparent text-primary">
                                {stock.exchange}:{stock.symbol}
                            </span>
                        </div>
                        <div className="card-body p-3">
                            {/* TradingView Widget Placeholder */}
                            <div id="tradingview_stock_widget" style={{ minHeight: '420px' }}></div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between pb-2">
                            <div>
                                <div className="card-title mb-1">
                                    Buy & Sell {stock.symbol}
                                </div>
                                <div className="fs-11 text-muted">
                                    You own <span className="fw-semibold">0.0000 {stock.symbol}</span> in this account.
                                </div>
                            </div>
                            <ul className="nav nav-tabs tab-style-8 scaleX" role="tablist">
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === 'buy' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('buy')}
                                    >
                                        Buy
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === 'sell' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('sell')}
                                    >
                                        Sell
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                                {activeTab === 'buy' && (
                                    <div className="tab-pane show active border-0 p-0">
                                        <div className="mb-3">
                                            <label className="form-label">Stock</label>
                                            <div className="input-group flex-nowrap">
                                                <input type="text" className="form-control" readOnly value={stock.symbol} />
                                                <span className="input-group-text">{stock.exchange}</span>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Amount (USD)</label>
                                            <input
                                                type="number"
                                                min="0.01"
                                                step="0.01"
                                                className="form-control"
                                                placeholder="Enter amount"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Order Type</label>
                                            <select
                                                className="form-select"
                                                value={orderType}
                                                onChange={(e) => setOrderType(e.target.value)}
                                            >
                                                <option value="market">Market</option>
                                                <option value="limit">Limit</option>
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex justify-content-between">
                                                <span className="fw-medium text-dark">Estimated Quantity:</span>
                                                <span className="text-muted">{estimatedQty.toFixed(4)} {stock.symbol}</span>
                                            </div>
                                        </div>
                                        <div className="d-grid mt-3 pt-1">
                                            <button className="btn btn-primary btn-wave btn-lg waves-effect waves-light">
                                                Trade Stock
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'sell' && (
                                    <div className="tab-pane show active border-0 p-0">
                                        <div className="mb-3">
                                            <label className="form-label">Stock</label>
                                            <div className="input-group flex-nowrap">
                                                <input type="text" className="form-control" readOnly value={stock.symbol} />
                                                <span className="input-group-text">{stock.exchange}</span>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Shares to Sell</label>
                                            <input type="number" min="0.0001" step="0.0001" className="form-control" placeholder="Enter number of shares" />
                                        </div>
                                        <div className="d-grid mt-3">
                                            <button className="btn btn-danger btn-wave btn-lg waves-effect waves-light">
                                                Close Position
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xxl-12">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Stock Trades
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <div className="row" style={{ margin: '40px auto' }}>
                                    <div className="col-md-12 text-center py-4">
                                        <img src="/assets/dashboard/images/empty-withdrawal.png" alt="No data" style={{ width: '200px' }} className="mb-3" />
                                        <p className="mt-2 mb-0">No trades for this stock yet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardStockDetails;
