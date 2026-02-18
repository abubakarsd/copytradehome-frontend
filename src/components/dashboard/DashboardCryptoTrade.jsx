import React, { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const CRYPTO_LIST = [
    { symbol: 'ACX', name: 'ACXUSDT' },
    { symbol: 'AIAGENT', name: 'AIAGENTUSDT' },
    { symbol: 'ALCH', name: 'ALCHUSDT' },
    { symbol: 'AO', name: 'AOUSDT' },
    { symbol: 'BAN', name: 'BANUSDT' },
    { symbol: 'BARD', name: 'BARDUSDT' },
    { symbol: 'BITBOARD', name: 'BITBOARDUSDT' },
    { symbol: 'BNKR', name: 'BNKRUSDT' },
    { symbol: 'BTC', name: 'BTCUSDT' },
    { symbol: 'CLANKER', name: 'CLANKERUSDT' },
    { symbol: 'CRM', name: 'CRMUSDT' },
    { symbol: 'DATA', name: 'DATAUSDT' },
    { symbol: 'DOGEGOV', name: 'DOGEGOVUSDT' },
    { symbol: 'DOGE', name: 'DOGEUSDT' },
    { symbol: 'DUEL', name: 'DUELUSDT' },
    { symbol: 'ES', name: 'ESUSDT' },
    { symbol: 'ETH', name: 'ETHUSDT' },
    { symbol: 'FLR', name: 'FLRUSDT' },
    { symbol: 'FORTH', name: 'FORTHUSDT' },
    { symbol: 'GHO', name: 'GHOUSDT' },
    { symbol: 'GIGA', name: 'GIGAUSDT' },
    { symbol: 'GLMR', name: 'GLMRUSDT' },
    { symbol: 'GMT', name: 'GMTUSDT' },
    { symbol: 'GRIFFAIN', name: 'GRIFFAINUSDT' },
    { symbol: 'GROK', name: 'GROKUSDT' },
    { symbol: 'HTX', name: 'HTXUSDT' },
    { symbol: 'IDOL', name: 'IDOLUSDT' },
    { symbol: 'JET2', name: 'JET2USDT' },
    { symbol: 'KAIA', name: 'KAIAUSDT' },
    { symbol: 'MEC', name: 'MECUSDT' },
    { symbol: 'MPLX', name: 'MPLXUSDT' },
    { symbol: 'NEOX', name: 'NEOXUSDT' },
    { symbol: 'OM', name: 'OMUSDT' },
    { symbol: 'ORAI', name: 'ORAIUSDT' },
    { symbol: 'POLYX', name: 'POLYXUSDT' },
    { symbol: 'PUFF', name: 'PUFFUSDT' },
    { symbol: 'PUMP', name: 'PUMPUSDT' },
    { symbol: 'RARE', name: 'RAREUSDT' },
    { symbol: 'RVV', name: 'RVVUSDT' },
    { symbol: 'SHRUBETH', name: 'SHRUBETHUSDT' },
    { symbol: 'SIREN', name: 'SIRENUSDT' },
    { symbol: 'SOIL', name: 'SOILUSDT' },
    { symbol: 'SOL', name: 'SOLUSDT' },
    { symbol: 'SOMI', name: 'SOMIUSDT' },
    { symbol: 'SYN', name: 'SYNUSDT' },
    { symbol: 'TANSSI', name: 'TANSSIUSDT' },
    { symbol: 'TITCOIN', name: 'TITCOINUSDT' },
    { symbol: 'TRENCHER', name: 'TRENCHERUSDT' },
    { symbol: 'TRUMPOFFICIAL', name: 'TRUMPOFFICIALUSDT' },
    { symbol: 'TRX', name: 'TRXUSDT' },
    { symbol: 'TSUKA', name: 'TSUKAUSDT' },
    { symbol: 'UMA', name: 'UMAUSDT' },
    { symbol: 'WIF', name: 'WIFUSDT' },
    { symbol: 'WOJAKONX', name: 'WOJAKONXUSDT' },
    { symbol: 'XION', name: 'XIONUSDT' },
    { symbol: 'XNL', name: 'XNLUSDT' },
    { symbol: 'XRP', name: 'XRPUSDT' },
    { symbol: 'XTM', name: 'XTMUSDT' },
    { symbol: 'XVS', name: 'XVSUSDT' },
    { symbol: 'YZY', name: 'YZYUSDT' },
    { symbol: 'ZKC', name: 'ZKCUSDT' }
];

const DashboardCryptoTrade = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const symbolParam = searchParams.get('coin');
    const defaultSymbol = 'BTC';

    // State
    const [selectedSymbol, setSelectedSymbol] = useState(symbolParam || defaultSymbol);
    const [searchQuery, setSearchQuery] = useState('');
    const [orderType, setOrderType] = useState('MARKET'); // MARKET, LIMIT, STOP
    const [orderSide, setOrderSide] = useState('BUY'); // BUY, SELL
    const [amount, setAmount] = useState('');
    const [executionPrice, setExecutionPrice] = useState('');
    const [takeProfit, setTakeProfit] = useState('');
    const [stopLoss, setStopLoss] = useState('');
    const [leverage, setLeverage] = useState('10');
    const [duration, setDuration] = useState('5m');
    const [lastPrice, setLastPrice] = useState(70330.00); // Mock starting price
    const [walletBalance, setWalletBalance] = useState(0.00);

    const chartContainerId = "tradingview_crypto_widget";

    useEffect(() => {
        if (symbolParam) {
            setSelectedSymbol(symbolParam);
        }
    }, [symbolParam]);

    useEffect(() => {
        // Update URL when symbol changes
        if (selectedSymbol !== symbolParam) {
            setSearchParams({ coin: selectedSymbol });
        }

        // Initialize TradingView Widget
        if (window.TradingView) {
            new window.TradingView.widget({
                "width": "100%",
                "height": 420,
                "symbol": `BINANCE:${selectedSymbol}USDT`,
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": localStorage.getItem('theme') || 'dark', // Use dynamic theme
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#0F0F0F",
                "enable_publishing": false,
                "hide_top_toolbar": false,
                "withdateranges": true,
                "container_id": chartContainerId
            });
        }
    }, [selectedSymbol]);

    // Derived values for calculations
    const currentPrice = (orderType === 'MARKET') ? lastPrice : (parseFloat(executionPrice) || lastPrice);
    const orderValue = (parseFloat(amount) || 0) * currentPrice;
    const lev = parseFloat(leverage) || 1;
    const marginImpact = lev > 0 ? orderValue / lev : orderValue;
    const newFreeMargin = (orderSide === 'BUY') ? (walletBalance - marginImpact) : (walletBalance + marginImpact);

    // Helpers
    const formatUSD = (num) => {
        return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USDT';
    };

    const filteredCryptoList = CRYPTO_LIST.filter(c =>
        c.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCryptoSelect = (symbol) => {
        setSelectedSymbol(symbol);
        setSearchQuery(''); // Clear search on select? Optional.
        // Close dropdown logic handled by Bootstrap usually, or we can force close if needed
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submit
        alert(`Order Placed:\nSide: ${orderSide}\nSymbol: ${selectedSymbol}\nType: ${orderType}\nAmount: ${amount}\nPrice: ${currentPrice}`);
    };

    return (
        <div className="container-fluid page-container main-body-container">
            {/* Page Header */}
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-1">
                            {selectedSymbol}USDT ({selectedSymbol})
                        </h1>
                        <span className="text-muted fs-12">BINANCE</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/crypto">Cryptos</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Trade</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                {/* Left Column: Chart & Info */}
                <div className="col-xl-9">
                    <div className="card custom-card h-100 mb-3">
                        <div className="card-header justify-content-between align-items-center">
                            <div className="card-title mb-0">
                                {selectedSymbol} Overview
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <span className="badge bg-primary-transparent text-primary">
                                    BINANCE:{selectedSymbol}USDT
                                </span>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-sm btn-outline-light dropdown-toggle"
                                        type="button"
                                        id="cryptoDropdownButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {selectedSymbol}/USDT
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="cryptoDropdownButton" style={{ minWidth: '260px' }}>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Search Crypto..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                onClick={(e) => e.stopPropagation()} // Prevent close on click
                                            />
                                        </div>
                                        <div style={{ maxHeight: '260px', overflowY: 'auto' }}>
                                            {filteredCryptoList.map(crypto => (
                                                <button
                                                    key={crypto.symbol}
                                                    type="button"
                                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                                    onClick={() => handleCryptoSelect(crypto.symbol)}
                                                >
                                                    <span>{crypto.symbol}</span>
                                                    <span className="text-muted small">{crypto.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-3">
                            <div id={chartContainerId} style={{ minHeight: '600px' }}></div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Trade Form */}
                <div className="col-xl-3">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between pb-2">
                            <div>
                                <div className="card-title mb-1">
                                    Trade {selectedSymbol}
                                </div>
                                <div className="fs-11 text-muted">
                                    You hold <span className="fw-semibold">0.000000 {selectedSymbol}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="nav nav-tabs mb-3" role="tablist">
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${orderType === 'MARKET' ? 'active' : ''}`}
                                        onClick={() => setOrderType('MARKET')}
                                    >
                                        Market
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${orderType === 'LIMIT' ? 'active' : ''}`}
                                        onClick={() => setOrderType('LIMIT')}
                                    >
                                        Limit
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${orderType === 'STOP' ? 'active' : ''}`}
                                        onClick={() => setOrderType('STOP')}
                                    >
                                        Stop
                                    </button>
                                </li>
                            </ul>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-2 d-flex justify-content-between align-items-center">
                                    <div className="fs-12 text-muted">
                                        Last Price: <span className="fw-semibold">${lastPrice.toLocaleString()}</span>
                                    </div>
                                    <div className="fs-12 text-danger">
                                        -1.06%
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Amount</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="0.00"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            step="0.00000001"
                                            min="0"
                                        />
                                        <span className="input-group-text">{selectedSymbol}</span>
                                    </div>
                                </div>

                                {(orderType === 'LIMIT' || orderType === 'STOP') && (
                                    <div className="mb-3">
                                        <label className="form-label">Execution Price</label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter price"
                                                value={executionPrice}
                                                onChange={(e) => setExecutionPrice(e.target.value)}
                                                step="0.00000001"
                                            />
                                            <span className="input-group-text">USDT</span>
                                        </div>
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label d-block">Side</label>
                                    <div className="btn-group w-100" role="group">
                                        <button
                                            type="button"
                                            className={`btn ${orderSide === 'BUY' ? 'btn-success' : 'btn-outline-success'} w-50`}
                                            onClick={() => setOrderSide('BUY')}
                                        >
                                            BUY
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn ${orderSide === 'SELL' ? 'btn-danger' : 'btn-outline-danger'} w-50`}
                                            onClick={() => setOrderSide('SELL')}
                                        >
                                            SELL
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Take Profit</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="0.00"
                                            value={takeProfit}
                                            onChange={(e) => setTakeProfit(e.target.value)}
                                            step="0.00000001"
                                        />
                                        <span className="input-group-text">{selectedSymbol}</span>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Stop Loss</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="0.00"
                                            value={stopLoss}
                                            onChange={(e) => setStopLoss(e.target.value)}
                                            step="0.00000001"
                                        />
                                        <span className="input-group-text">{selectedSymbol}</span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-6">
                                        <label className="form-label">Duration</label>
                                        <select
                                            className="form-select"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                        >
                                            <option value="2m">2 Minutes</option>
                                            <option value="5m">5 Minutes</option>
                                            <option value="15m">15 Minutes</option>
                                            <option value="1h">1 Hour</option>
                                            <option value="4h">4 Hours</option>
                                            <option value="1d">1 Day</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Leverage</label>
                                        <select
                                            className="form-select"
                                            value={leverage}
                                            onChange={(e) => setLeverage(e.target.value)}
                                        >
                                            <option value="1">1x</option>
                                            <option value="2">2x</option>
                                            <option value="5">5x</option>
                                            <option value="10">10x</option>
                                            <option value="20">20x</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3 small text-muted">
                                    <div className="d-flex justify-content-between">
                                        <span>Free Margin</span>
                                        <span>{formatUSD(walletBalance)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Order Value</span>
                                        <span>{formatUSD(orderValue)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Margin Impact</span>
                                        <span>{formatUSD(marginImpact)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>New Free Margin</span>
                                        <span>{formatUSD(newFreeMargin)}</span>
                                    </div>
                                </div>

                                <label className="fw-medium fs-12 mt-4 mb-3">SELECT PAYMENT METHOD :</label>
                                <div className="col-xl-12 mb-3">
                                    <div className="p-2 border rounded">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="radio" name="payment_method" id="payment_method_wallet" defaultChecked />
                                            <label className="form-check-label fs-12" htmlFor="payment_method_wallet">
                                                Wallet ($<span className="text-danger">0.00</span>)
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid mt-3 pt-1">
                                    <button type="submit" className="btn btn-primary btn-wave btn-lg">
                                        Deposit to trades
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Crypto Trades History */}
            <div className="row">
                <div className="col-xxl-12">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Crypto Trades
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <div className="row" style={{ margin: '40px auto' }}>
                                    <div className="col-md-12 text-center py-4">
                                        <img src="/assets/dashboard/images/empty-withdrawal.png" style={{ width: '200px' }} alt="No data" />
                                        <p className="mt-2 mb-0">No trades for this crypto yet.</p>
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

export default DashboardCryptoTrade;
