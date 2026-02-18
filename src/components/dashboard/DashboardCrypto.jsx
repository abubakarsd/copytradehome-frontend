import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DashboardCrypto = () => {
    useEffect(() => {
        // Initialize TradingView
        if (typeof window.TradingView !== 'undefined' && document.getElementById('tv-crypto-analysis')) {
            new window.TradingView.widget({
                "width": "100%",
                "height": 382,
                "symbol": "BINANCE:BTCUSDT",
                "interval": "60",
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
                "container_id": "tv-crypto-analysis"
            });
        }
    }, []);

    const topCryptoWallets = [
        { name: 'XRP', fullname: 'XRP', symbol: 'XRP', amount: '0.000000', price: '$0.00 USDT', change: '+0.15%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'HTX', fullname: 'HTX', symbol: 'HTX', amount: '0.000000', price: '$0.00 USDT', change: '+0.41%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'MEC', fullname: 'MEC', symbol: 'MEC', amount: '0.000000', price: '$0.00 USDT', change: '-11.46%', isPositive: false, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'TITCOIN', fullname: 'TITCOIN', symbol: 'TITCOIN', amount: '0.000000', price: '$0.00 USDT', change: '-6.72%', isPositive: false, img: '/assets/dashboard/images/tether-usdt-logo.svg' }
    ];

    const top10Wallets = [
        { name: 'HTX', symbol: 'USDT', amount: '0.0000 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'MEC', symbol: 'USDT', amount: '0.0000 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'TITCOIN', symbol: 'USDT', amount: '0.0009 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'DOGE', symbol: 'USDT', amount: '0.1074 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'TANSSI', symbol: 'USDT', amount: '0.0022 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'BNKR', symbol: 'USDT', amount: '0.0006 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'DOGE', symbol: 'USDT', amount: '0.1075 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'XRP', symbol: 'USDT', amount: '1.6466 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'JET2', symbol: 'USDT', amount: '0.0000 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' },
        { name: 'DUEL', symbol: 'USDT', amount: '0.0001 USDT', change: '+0.00%', isPositive: true, img: '/assets/dashboard/images/tether-usdt-logo.svg' }
    ];

    const handleError = (e) => {
        e.target.onerror = null;
        e.target.src = 'https://copytradehome.com/public/assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg';
    };


    return (
        <>
            <div className="container-fluid page-container main-body-container">
                {/* Start::page-header */}
                <div className="page-header-breadcrumb mb-3">
                    <div className="d-flex align-center justify-content-between flex-wrap">
                        <h1 className="page-title fw-medium fs-18 mb-0">Crypto Dashboard</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Crypto</li>
                        </ol>
                    </div>
                </div>
                {/* End::page-header */}

                {/* Crypto Portfolio (positions) */}
                <div className="row mb-3">
                    <div className="col-xl-12">
                        <h6 className="fw-semibold mb-3">My Crypto Portfolio</h6>
                        <div className="card custom-card">
                            <div className="card-body">
                                <p className="mb-0 text-muted">You don’t have any crypto positions yet.</p>
                            </div>
                        </div>
                    </div>

                    {/* Crypto Wallets & BTCUSDT Chart */}
                    <div className="row">
                        <div className="col-xxl-9">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        BTCUSDT Performance
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="btn btn-sm btn-primary-light" data-interval="60">1H</a>
                                        <a href="#" className="btn btn-sm btn-primary-light" data-interval="240">4H</a>
                                        <a href="#" className="btn btn-sm btn-primary-light" data-interval="720">12H</a>
                                        <a href="#" className="btn btn-sm btn-primary active" data-interval="D">1D</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-3 p-3 rounded border border-dashed flex-wrap mb-3">
                                        <div>
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <img src="/assets/dashboard/images/XTVCBTC.svg" onError={handleError} alt="BTC" className="invert-1" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="d-block fw-semibold">BTCUSDT</span>
                                            <span className="fw-medium fs-13 text-muted">BTCUSDT</span>
                                        </div>
                                        <div className="text-end">
                                            <div className="d-flex align-items-center mb-1 gap-2">
                                                <span className="badge bg-danger rounded-pill text-white">
                                                    <i className="bx bx-down-arrow-alt me-1"></i>-1.06%                                </span>
                                                <h4 className="fw-semibold mb-0">
                                                    $81,284.05                                </h4>
                                            </div>
                                            <span className="fs-13 text-muted">Live BTC/USDT from TradingView</span>
                                        </div>
                                    </div>

                                    <div id="tv-crypto-analysis" style={{ minHeight: '382px' }}>
                                        <div id="tradingview_2be27"></div>
                                    </div>
                                </div>
                            </div>


                            {/* Crypto Portfolio P&L Bar Chart */}
                            <div className="row mt-3">
                                <div className="col-xxl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Crypto Portfolio P&amp;L
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-muted">You don’t have any crypto portfolios yet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-3">
                            <div className="card custom-card mb-3">
                                <div className="card-header">
                                    <div className="card-title">
                                        Top Crypto Wallets
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {topCryptoWallets.map((wallet, index) => (
                                            <div className="col-xxl-12 col-xl-6 mb-3" key={index}>
                                                <div className="card custom-card mb-0">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div className="lh-1">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img src={wallet.img} onError={handleError} alt={wallet.name} />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="d-block text-muted fs-12">Available {wallet.fullname}</span>
                                                                    <span className="fw-medium">
                                                                        {wallet.amount} {wallet.symbol}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fw-medium">
                                                                    {wallet.price}
                                                                </span>
                                                                <span className={`d-block fs-12 ${wallet.isPositive ? 'text-success' : 'text-danger'}`}>
                                                                    {wallet.change} <i className={`bx ${wallet.isPositive ? 'bx-up-arrow-alt' : 'bx-down-arrow-alt'}`}></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Top 10 Wallets
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        {top10Wallets.map((wallet, index) => (
                                            <li className="mb-3" key={index}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src={wallet.img} onError={handleError} alt={wallet.name} />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">{wallet.name}/{wallet.symbol}</span>
                                                        <span className="fs-12 text-muted">{wallet.amount}</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className={`fw-medium ${wallet.isPositive ? 'text-success' : 'text-danger'}`}>
                                                            {wallet.change}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DashboardCrypto;
