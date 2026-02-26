import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/axios';

const DashboardCopyTrading = () => {
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
        // Initialize Swiper
        if (typeof window.Swiper !== 'undefined' && document.querySelector('.stocks-swiper')) {
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
        }

        // Initialize ApexCharts for Copy Trading P&L
        if (typeof window.ApexCharts !== 'undefined' && document.querySelector("#copytrading-portfolio-bar")) {
            const options = {
                series: [{
                    name: 'ROI (%)',
                    data: [12.5, 15.8, 14.2, 18.5, 16.9, 21.4, 19.8, 24.5, 22.1]
                }, {
                    name: 'P&L (USDT)',
                    data: [1240, 1580, 1350, 1950, 1720, 2300, 2100, 2650, 2400]
                }],
                chart: {
                    type: 'bar',
                    height: 320,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        style: {
                            colors: '#8c9097',
                            fontSize: '11px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    title: {
                        text: 'Metrics',
                        style: {
                            color: '#8c9097',
                        }
                    },
                    labels: {
                        style: {
                            colors: '#8c9097',
                            fontSize: '11px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val, { seriesIndex }) {
                            if (seriesIndex === 0) {
                                return val + " %";
                            }
                            return "$ " + val;
                        }
                    },
                    theme: "dark"
                },
                colors: ['var(--primary-color)', '#23b7e5'],
                grid: {
                    borderColor: 'rgba(119, 119, 142, 0.1)',
                    strokeDashArray: 3,
                }
            };

            const chart = new window.ApexCharts(document.querySelector("#copytrading-portfolio-bar"), options);
            chart.render();
        }
    }, []);

    return (
        <>

            <div className="container-fluid page-container main-body-container">
                {/* Start::page-header */}
                <div className="page-header-breadcrumb mb-3">
                    <div className="d-flex align-center justify-content-between flex-wrap">
                        <h1 className="page-title fw-medium fs-18 mb-0">Copy Expert</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#" onClick={(e) => e.preventDefault()}>Dashboards</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Copy Expert</li>
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

                {/* My Copy Traders (Swiper) */}
                <div className="row mb-3">
                    <div className="col-xl-12">
                        <h6 className="fw-semibold mb-3">My Copy Traders</h6>
                        <div className="">
                            <div className="">
                                <p className="mb-0 text-muted">You don’t have any active copy trading strategies yet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copy Trading P&L & Top Traders */}
                <div className="row mt-3">
                    <div className="col-xxl-8">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">
                                    Copy Trading P&amp;L (Top 10 Traders)
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="copytrading-portfolio-bar" style={{ minHeight: '320px' }}></div>
                            </div>
                        </div>

                        {/* Subscribed Strategies Cards */}
                        <div className="row mt-1 mb-3">
                            <div className="col-xl-12">
                                <h6 className="fw-semibold mb-3">My Subscribed Strategies</h6>
                                <div className="vstack gap-4">
                                    <div className="row g-4">
                                        <div className="col-12">
                                            <p className="mb-0 text-muted">You are not subscribed to any copy trading strategies yet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 mb-3">
                        <div className="card custom-card h-100">
                            <div className="card-header">
                                <div className="card-title">
                                    Top 10 Traders
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="vstack gap-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2025-19669389741745170756.jpg" alt="Dr. Profit Premium" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">Dr. Profit Premium</span>
                                                <span className="d-block text-muted fs-12">@Drprofitpremium</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/100" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2025-16562694411745165170.jpg" alt="FUTURES ONE MAXSTERMIND" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">FUTURES ONE MAXSTERMIND</span>
                                                <span className="d-block text-muted fs-12">@futuresonemaxstermind</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/98" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/21.jpg" alt="LIMITLE$$" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">LIMITLE$$</span>
                                                <span className="d-block text-muted fs-12">@Chicago </span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/44" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2023-2759443191702970264.jpg" alt="CRYPTORISE" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">CRYPTORISE</span>
                                                <span className="d-block text-muted fs-12">@Osbrah</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/12" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2024-4488417161732907653.jpg" alt="DIAMOND TRADING " />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">DIAMOND TRADING </span>
                                                <span className="d-block text-muted fs-12">@Proph</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/76" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/21.jpg" alt="Oasis Alert" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">Oasis Alert</span>
                                                <span className="d-block text-muted fs-12">@Champ????</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/45" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2023-7360131941703001961.jpg" alt="THE GOLD ROOM" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">THE GOLD ROOM</span>
                                                <span className="d-block text-muted fs-12">@@Claudia</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/13" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2024-20610632561732913290.jpg" alt="Kaizen Trading " />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">Kaizen Trading </span>
                                                <span className="d-block text-muted fs-12">@Giga Jung</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/77" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/21.jpg" alt="Swiss Circle " />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">Swiss Circle </span>
                                                <span className="d-block text-muted fs-12">@Swiss Trader</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/46" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2023-15445528721703240760.jpg" alt="Stock Talk Insider " />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">Stock Talk Insider </span>
                                                <span className="d-block text-muted fs-12">@TSDR</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/14" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2024-12900361961733388175.jpg" alt="LESS TRADES MORE PROFIT " />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">LESS TRADES MORE PROFIT </span>
                                                <span className="d-block text-muted fs-12">@Short the Vix</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/78" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2023-3799037561703727789.jpg" alt="EMMANUEL TRADES UNI" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">EMMANUEL TRADES UNI</span>
                                                <span className="d-block text-muted fs-12">@Emmanueltrades</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/15" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2024-8625617091733432203.jpg" alt="Call to Leap" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">Call to Leap</span>
                                                <span className="d-block text-muted fs-12">@SteveChen </span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/79" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/21.jpg" alt="Degen VIP" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">Degen VIP</span>
                                                <span className="d-block text-muted fs-12">@Dagmar</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/47" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2023-8691249891703812846.jpg" alt="Sousa VIP Room" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">Sousa VIP Room</span>
                                                <span className="d-block text-muted fs-12">@Sousa</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/16" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="avatar avatar-sm avatar-rounded bg-light p-1">
                                                <img onerror="this.onerror=null; this.src=&#39;https://copytradehome.com/public/assets/images/faces/21.jpg&#39;" src="/assets/dashboard/images/2024-13641293331733772682.jpg" alt="CHIP STOCK INVESTOR" />
                                            </span>
                                            <div>
                                                <span className="d-block fw-semibold fs-13">CHIP STOCK INVESTOR</span>
                                                <span className="d-block text-muted fs-12">@nrossolillo</span>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="https://copytradehome.com/copy_trading/view/81" className="btn btn-xs btn-primary-light">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page-content */}
            </div>

        </>
    );
};

export default DashboardCopyTrading;
