import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TraderProfileHeader from '../components/copy-trading/TraderProfileHeader';
import TraderPerformanceChart from '../components/copy-trading/TraderPerformanceChart';
import { MOCK_STRATEGIES } from '../data/mockStrategies';

const CopyExpertDetailsPage = () => {
    const { id } = useParams();
    const [trader, setTrader] = useState(null);
    const [activeTab, setActiveTab] = useState('positions');

    useEffect(() => {
        const foundTrader = MOCK_STRATEGIES.find(s => s.id === parseInt(id));
        setTrader(foundTrader);
    }, [id]);

    if (!trader) {
        return <div className="p-5 text-center">Loading strategy details...</div>;
    }

    return (
        <div className="container-fluid page-container main-body-container">
            {/* Page Header */}
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">{trader.name} Strategy</h1>
                        <p className="mb-0 text-muted fs-12">Detailed performance analytics and trade history.</p>
                    </div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                        <li className="breadcrumb-item"><Link to="/dashboard/copy-trading">Copy Expert</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Details</li>
                    </ol>
                </div>
            </div>

            {/* Profile Header */}
            <TraderProfileHeader trader={trader} />

            {/* Main Content Grid */}
            <div className="row">
                {/* Left Col: Chart & Tabs */}
                <div className="col-xxl-9 col-xl-12">

                    <TraderPerformanceChart />

                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Trading History
                            </div>
                            <div className="d-flex">
                                <ul className="nav nav-tabs nav-tabs-header mb-0" role="tablist">
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'positions' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('positions')}
                                        >
                                            Open Positions
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('history')}
                                        >
                                            History
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            {activeTab === 'positions' && (
                                <div className="table-responsive">
                                    <table className="table text-nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th>Symbol</th>
                                                <th>Type</th>
                                                <th>Open Price</th>
                                                <th>Current Price</th>
                                                <th>Amount</th>
                                                <th>P/L ($)</th>
                                                <th>P/L (%)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="fw-semibold">AAPL</span></td>
                                                <td><span className="text-success">Buy</span></td>
                                                <td>$150.22</td>
                                                <td>$155.40</td>
                                                <td>10</td>
                                                <td className="text-success">+$51.80</td>
                                                <td className="text-success">+3.45%</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold">TSLA</span></td>
                                                <td><span className="text-danger">Sell</span></td>
                                                <td>$240.00</td>
                                                <td>$235.50</td>
                                                <td>5</td>
                                                <td className="text-success">+$22.50</td>
                                                <td className="text-success">+1.88%</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold">EUR/USD</span></td>
                                                <td><span className="text-success">Buy</span></td>
                                                <td>1.0850</td>
                                                <td>1.0820</td>
                                                <td>1 Lot</td>
                                                <td className="text-danger">-$30.00</td>
                                                <td className="text-danger">-0.28%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {activeTab === 'history' && (
                                <div className="table-responsive">
                                    <table className="table text-nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Symbol</th>
                                                <th>Action</th>
                                                <th>Close Price</th>
                                                <th>P/L</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2023-10-25</td>
                                                <td>NVDA</td>
                                                <td>Buy</td>
                                                <td>$420.00</td>
                                                <td className="text-success">+$1200.00</td>
                                            </tr>
                                            <tr>
                                                <td>2023-10-24</td>
                                                <td>GOLD</td>
                                                <td>Sell</td>
                                                <td>$1980.00</td>
                                                <td className="text-danger">-$50.00</td>
                                            </tr>
                                            <tr>
                                                <td>2023-10-23</td>
                                                <td>BTC/USD</td>
                                                <td>Buy</td>
                                                <td>$34,500</td>
                                                <td className="text-success">+$540.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* Right Col: Copy Settings / Action */}
                <div className="col-xxl-3 col-xl-12">
                    <div className="card custom-card bg-primary text-fixed-white">
                        <div className="card-body p-4">
                            <div className="text-center">
                                <span className="avatar avatar-xxl avatar-rounded bg-white/10 p-1 mb-3">
                                    <img src={trader.avatar} alt="avatar" />
                                </span>
                                <h5 className="fw-semibold text-fixed-white mb-1">{trader.name}</h5>
                                <p className="fs-12 text-fixed-white/70 mb-4">{trader.handle}</p>

                                <button className="btn btn-light w-100 fw-semibold mb-3">
                                    <i className="bi bi-copy me-2"></i>Copy Strategy
                                </button>
                                <p className="fs-12 text-fixed-white/70 mb-0">
                                    Minimum investment required: <span className="fw-semibold text-fixed-white">${trader.minInvestment.toLocaleString()}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Risk Score
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <div className={`avatar avatar-xl ${trader.risk >= 7 ? 'bg-danger-transparent text-danger' : trader.risk >= 4 ? 'bg-warning-transparent text-warning' : 'bg-success-transparent text-success'} mb-3`}>
                                    <span className="fs-24 fw-bold">{trader.risk}</span>
                                </div>
                                <h6 className="fw-semibold mb-1">Moderate Risk</h6>
                                <p className="text-muted fs-13 text-center mb-0">
                                    This strategy has a risk score of {trader.risk}/10 based on volatility and max drawdown.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CopyExpertDetailsPage;
