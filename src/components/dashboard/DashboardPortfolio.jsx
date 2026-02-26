import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/axios';

const DashboardPortfolio = () => {
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const res = await api.get('/wallet');
                if (res.data.success) {
                    setWallet(res.data.data);
                }
            } catch (err) {
                console.error('Failed to fetch wallet:', err);
            }
        };
        fetchWallet();

        // --- Toast Functions ---
        window.showAppToast = (type, message) => {
            // ... (rest of toast logic)
            var toastEl = document.getElementById('topcenter-Toast');
            if (!toastEl) return;

            var bodyEl = document.getElementById('topcenter-toast-body');
            if (bodyEl) {
                bodyEl.textContent = message;
            }

            // Update toast background/text
            toastEl.classList.remove('bg-primary-transparent', 'text-primary', 'bg-danger-transparent', 'text-danger', 'bg-success-transparent', 'text-success');

            // Update header background based on type
            var headerEl = toastEl.querySelector('.toast-header');
            if (headerEl) {
                headerEl.classList.remove('bg-primary', 'bg-success', 'bg-danger');
            }

            if (type === 'error') {
                toastEl.classList.add('bg-danger-transparent', 'text-danger');
                if (headerEl) headerEl.classList.add('bg-danger');
            } else if (type === 'success') {
                toastEl.classList.add('bg-success-transparent', 'text-success');
                if (headerEl) headerEl.classList.add('bg-success');
            } else {
                toastEl.classList.add('bg-primary-transparent', 'text-primary');
                if (headerEl) headerEl.classList.add('bg-primary');
            }

            if (typeof window.bootstrap !== 'undefined' && window.bootstrap.Toast) {
                var toast = window.bootstrap.Toast.getOrCreateInstance(toastEl);
                toast.show();
            } else if (typeof window.showBootstrapToast === 'function') {
                window.showBootstrapToast(toastEl);
            }
        };

        window.errorToast = (message) => window.showAppToast('error', message);
        window.successToast = (message) => window.showAppToast('success', message);
        window.showToastMessage = () => window.showAppToast('error', 'QR Connect is not available at the moment, please try connecting manually!');
        window.updateChartColor = (val) => { console.log('Update chart color not implemented fully yet', val); };

        // --- Allocation Donut Chart Init ---
        const initAllocationChart = () => {
            if (window.ApexCharts && document.querySelector("#portfolio-allocation-chart")) {
                const options = {
                    series: [0, 0, 100],
                    labels: ['Crypto', 'Stocks', 'Cash'],
                    chart: {
                        type: 'donut',
                        height: 300,
                    },
                    colors: ['var(--primary-color)', '#23b7e5', '#f5b849'],
                    legend: {
                        show: false
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: false
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                size: '75%',
                                labels: {
                                    show: true,
                                    name: {
                                        show: true,
                                        fontSize: '14px',
                                        color: '#8c9097',
                                        offsetY: -5
                                    },
                                    value: {
                                        show: true,
                                        fontSize: '24px',
                                        fontWeight: 600,
                                        color: '#333',
                                        offsetY: 8,
                                        formatter: function (val) {
                                            return val + "%"
                                        }
                                    },
                                    total: {
                                        show: true,
                                        showAlways: true,
                                        label: 'Cash',
                                        fontSize: '14px',
                                        color: '#8c9097',
                                        formatter: function (w) {
                                            return '100%'
                                        }
                                    }
                                }
                            }
                        }
                    }
                };

                // Clear any existing chart before rendering
                document.querySelector("#portfolio-allocation-chart").innerHTML = '';
                const chart = new window.ApexCharts(document.querySelector("#portfolio-allocation-chart"), options);
                chart.render();
            } else {
                setTimeout(initAllocationChart, 500);
            }
        };
        initAllocationChart();

        // --- TradingView Init ---
        const initTV = () => {
            const containerId = 'tv-portfolio-analysis';
            if (window.TradingView && document.getElementById(containerId)) {
                // Clear previous if likely
                document.getElementById(containerId).innerHTML = '';
                new window.TradingView.widget({
                    "width": "100%",
                    "height": 382,
                    "symbol": "NASDAQ:AAPL",
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
                    "container_id": containerId
                });
            } else {
                setTimeout(initTV, 500);
            }
        };
        initTV();

        // --- Swiper Init ---
        const initSwiper = () => {
            if (window.Swiper && document.querySelector('.stocks-swiper')) {
                new window.Swiper(".stocks-swiper", {
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false,


                    },
                    breakpoints: {
                        500: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1400: { slidesPerView: 4, spaceBetween: 20 },
                    },
                });
            } else {
                // Retry for a bit then stop? 
                // Or just simple retry if we expect it to eventually appear.
                // For now simple timeout if we haven't checked too many times.
                // But actually, if the element isn't there (no stocks), we shouldn't retry forever.
                // Let's just check once after scripts load.
                if (!document.querySelector('.stocks-swiper')) return;
                setTimeout(initSwiper, 500);
            }
        };
        // Give scripts time to load
        setTimeout(initSwiper, 1000);

        // Footer Year
        const yearEl = document.getElementById('year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

    }, []);
    return (
        <>

            <div className="container-fluid page-container main-body-container">{/* Start::page-header */}
                <div className="page-header-breadcrumb mb-3">
                    <div className="d-flex align-center justify-content-between flex-wrap">
                        <h1 className="page-title fw-medium fs-18 mb-0">My Portfolio</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </div>
                </div>
                {/* End::page-header */}

                {/* Account Overview Metrics Row */}
                <div className="row mb-3">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="fw-semibold text-muted mb-1">Estimated Balance</p>
                                        <h4 className="fw-semibold mb-1">
                                            {wallet?.balance ? `$${wallet.balance.toFixed(2)}` : '$0.00'}
                                        </h4>
                                        <div className="text-success fs-12">
                                            <i className="bx bx-up-arrow-alt"></i> +0.00% Today
                                        </div>
                                    </div>
                                    <div className="avatar avatar-md bg-primary-transparent fs-20">
                                        <i className="bx bx-wallet"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="fw-semibold text-muted mb-1">Total Profit/Loss</p>
                                        <h4 className="fw-semibold mb-1 text-success">
                                            +$0.00
                                        </h4>
                                        <div className="text-muted fs-12">
                                            All Time Returns
                                        </div>
                                    </div>
                                    <div className="avatar avatar-md bg-success-transparent fs-20">
                                        <i className="bx bx-trending-up"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="fw-semibold text-muted mb-1">Active Investments</p>
                                        <h4 className="fw-semibold mb-1">
                                            0
                                        </h4>
                                        <div className="text-muted fs-12">
                                            Positions
                                        </div>
                                    </div>
                                    <div className="avatar avatar-md bg-warning-transparent fs-20">
                                        <i className="bx bx-briefcase"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="fw-semibold text-muted mb-1">Available Cash</p>
                                        <h4 className="fw-semibold mb-1">
                                            {wallet?.balance ? `$${wallet.balance.toFixed(2)}` : '$0.00'}
                                        </h4>
                                        <div className="text-muted fs-12">
                                            Ready to invest
                                        </div>
                                    </div>
                                    <div className="avatar avatar-md bg-info-transparent fs-20">
                                        <i className="bx bx-dollar-circle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Account Overview Metrics Row */}

                {/* Quick Actions Bar */}
                <div className="row mb-3">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-body p-3">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <Link to="/dashboard/deposit" className="btn btn-primary d-flex align-items-center gap-2">
                                            <i className="bx bx-down-arrow-circle fs-18"></i> Deposit
                                        </Link>
                                        <Link to="/dashboard/withdraw" className="btn btn-outline-primary d-flex align-items-center gap-2">
                                            <i className="bx bx-up-arrow-circle fs-18"></i> Withdraw
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <Link to="/dashboard/crypto" className="btn btn-outline-secondary d-flex align-items-center gap-2">
                                            <i className="bx bx-bitcoin fs-18"></i> Trade Crypto
                                        </Link>
                                        <Link to="/dashboard/copy-experts" className="btn btn-outline-success d-flex align-items-center gap-2">
                                            <i className="bx bx-user-check fs-18"></i> Copy Expert
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Quick Actions Bar */}



                {/* Portfolio Analysis & Allocation */}
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="card custom-card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">
                                    Portfolio Analysis
                                </div>
                                <div className="btn-group">
                                    <a href="#" className="btn btn-sm btn-primary-light" data-interval="60">1H</a>
                                    <a href="#" className="btn btn-sm btn-primary-light" data-interval="360">6H</a>
                                    <a href="#" className="btn btn-sm btn-primary-light" data-interval="720">12H</a>
                                    <a href="#" className="btn btn-sm btn-primary active" data-interval="D">1D</a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-3 p-3 rounded border border-dashed flex-wrap mb-3">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="/assets/dashboard/images/AAPL.png" alt="AAPL" className="invert-1" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <span className="d-block fw-semibold">Apple Inc.</span>
                                        <span className="fw-medium fs-13 text-muted">AAPL</span>
                                    </div>
                                    <div className="text-end">
                                        <div className="d-flex align-items-center mb-1 gap-2">
                                            <span className="badge bg-success rounded-pill">
                                                <i className="bx bx-up-arrow-alt me-1"></i>0.00%
                                            </span>
                                            <h4 className="fw-semibold mb-0">
                                                {wallet?.balance ? `$${wallet.balance.toFixed(2)}` : '$0.00'}
                                            </h4>
                                        </div>
                                        <span className="fs-13 text-muted">Live from TradingView</span>
                                    </div>
                                </div>

                                <div id="tv-portfolio-analysis" style={{ 'minHeight': '382px' }}><div id="tradingview_09b69-wrapper" style={{ 'position': 'relative', 'boxSizing': 'content-box', 'fontFamily': '-apple-system, BlinkMacSystemFont, &quot', 'margin': '0px auto', 'padding': '0px', 'width': '100%', 'height': '382px' }}><iframe title="advanced chart TradingView widget" lang="en" id="tradingview_09b69" frameBorder="0" allowtransparency="true" scrolling="no" allowFullScreen={true} src="/assets/dashboard/saved_resource.html" style={{ 'width': '100%', 'height': '100%', 'margin': '0px', 'padding': '0px' }}></iframe></div></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4">
                        {/* Asset Allocation Donut Chart */}
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">
                                    Asset Allocation
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="portfolio-allocation-chart" className="d-flex justify-content-center" style={{ minHeight: '300px' }}></div>
                                <div className="row text-center mt-4">
                                    <div className="col-4">
                                        <span className="fw-semibold d-block">0%</span>
                                        <span className="text-muted fs-12 d-block text-truncate"><i className="bx bxs-circle text-primary me-1"></i>Crypto</span>
                                    </div>
                                    <div className="col-4">
                                        <span className="fw-semibold d-block">0%</span>
                                        <span className="text-muted fs-12 d-block text-truncate"><i className="bx bxs-circle text-success me-1"></i>Stocks</span>
                                    </div>
                                    <div className="col-4">
                                        <span className="fw-semibold d-block">100%</span>
                                        <span className="text-muted fs-12 d-block text-truncate"><i className="bx bxs-circle text-warning me-1"></i>Cash</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Asset Allocation Donut Chart */}

                        {/* Recent Activity */}
                        <div className="card custom-card mt-3">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Recent Activity</div>
                                <a href="#" className="text-muted fs-13">View All</a>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mb-0 list-Activity">
                                    <li className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar avatar-sm bg-primary-transparent text-primary">
                                                <i className="bx bx-wallet"></i>
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-semibold">Account Created</p>
                                                <span className="fs-12 text-muted">Welcome to CopyTradeHome</span>
                                            </div>
                                        </div>
                                        <div className="text-muted fs-12">Just Now</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End Recent Activity */}
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-xxl-8">
                        {/* My Portfolio - Stocks */}
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Stocks Portfolio</div>
                            </div>
                            <div className="card-body">
                                <p className="mb-0 text-muted">You don’t have any stock positions yet.</p>
                            </div>
                        </div>

                        {/* Stock Portfolio P&L Bar Chart */}
                        <div className="card custom-card mt-3">
                            <div className="card-header">
                                <div className="card-title">
                                    Stock Portfolio P&amp;L
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="mb-0 text-muted">No profit/loss data available yet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4">
                        <div className="card custom-card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">
                                    My Watchlist
                                </div>
                                <a href="https://copytradehome.com/stocks/get_stocks" className="text-muted fs-13">View All</a>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled stocks-watchlist">
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/ABT.png" alt="ABT" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Abbott Laboratories                                        </span>
                                                <span className="fs-13 text-muted">
                                                    ABT                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $109.30                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/37" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/ADBE.png" alt="ADBE" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Adobe Inc.                                        </span>
                                                <span className="fs-13 text-muted">
                                                    ADBE                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $293.25                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/9" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/AMD.png" alt="AMD" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Advanced Micro Devices, Inc.                                        </span>
                                                <span className="fs-13 text-muted">
                                                    AMD                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $236.73                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/15" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/GOOGL.png" alt="GOOGL" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Alphabet Inc. Class A                                        </span>
                                                <span className="fs-13 text-muted">
                                                    GOOGL                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $338.00                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/3" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/AMZN.png" alt="AMZN" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Amazon.com, Inc.                                        </span>
                                                <span className="fs-13 text-muted">
                                                    AMZN                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $239.30                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/4" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/AAPL.png" alt="AAPL" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Apple Inc.                                        </span>
                                                <span className="fs-13 text-muted">
                                                    AAPL                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $259.48                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/1" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/AMAT.png" alt="AMAT" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Applied Materials, Inc.                                        </span>
                                                <span className="fs-13 text-muted">
                                                    AMAT                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $322.32                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/17" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/T.png" alt="T" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    AT&amp;T Inc.                                        </span>
                                                <span className="fs-13 text-muted">
                                                    T                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $26.21                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/43" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/BAC.png" alt="BAC" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Bank of America Corporation                                        </span>
                                                <span className="fs-13 text-muted">
                                                    BAC                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $53.20                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/31" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md p-1">
                                                    <img src="/assets/dashboard/images/AVGO.png" alt="AVGO" className="invert-1" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    Broadcom Inc.                                        </span>
                                                <span className="fs-13 text-muted">
                                                    AVGO                                        </span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-semibold d-block">
                                                    {/*                                                 $331.30                                             */}
                                                </span>
                                                <a href="https://copytradehome.com/stocks/trade_stock/13" className="btn btn-sm btn-primary-light">Trade</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stocks swiper init & TradingView widget */}




            </div> {/* container-fluid */}

            {/* End Page-content */}

            {/* Footer Start */}
        </>
    );
};

export default DashboardPortfolio;

