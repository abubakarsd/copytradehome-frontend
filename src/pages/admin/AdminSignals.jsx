import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminSignals = () => {
    // Mock Data
    const [signals, setSignals] = useState([
        { id: 1, pair: 'BTC/USD', type: 'Buy', entry: '$45,000', sl: '$44,500', tp: '$48,000', status: 'Active', posted: '2 hrs ago' },
        { id: 2, pair: 'ETH/USD', type: 'Sell', entry: '$3,200', sl: '$3,300', tp: '$2,900', status: 'Expired', posted: '1 day ago' },
        { id: 3, pair: 'XRP/USD', type: 'Buy', entry: '$0.55', sl: '$0.50', tp: '$0.70', status: 'Active', posted: '5 hrs ago' },
    ]);

    const handleDelete = (id) => {
        if (window.confirm('Delete this signal?')) {
            setSignals(signals.filter(s => s.id !== id));
            toast.success('Signal deleted');
        }
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>Manage Signals | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Trading Signals</h1>
                        <p className="mb-0 text-muted fs-13">Post and manage trading signals for users.</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => toast.info('Open Add Signal Modal')}>
                        <i className="bx bx-plus me-1"></i> Post New Signal
                    </button>
                </div>
            </div>

            <div className="row">
                {signals.map((signal) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={signal.id}>
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-sm bg-primary-transparent me-2">
                                            <i className="bx bx-signal-5 fs-5"></i>
                                        </div>
                                        <h6 className="fw-semibold mb-0">{signal.pair}</h6>
                                    </div>
                                    <span className={`badge bg-${signal.status === 'Active' ? 'success' : 'secondary'}-transparent`}>
                                        {signal.status}
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Type</span>
                                    <span className={`fw-bold text-${signal.type === 'Buy' ? 'success' : 'danger'}`}>{signal.type}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Entry</span>
                                    <span>{signal.entry}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Stop Loss</span>
                                    <span className="text-danger">{signal.sl}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Take Profit</span>
                                    <span className="text-success">{signal.tp}</span>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <span className="text-muted fs-12"><i className="bx bx-time-five me-1"></i>{signal.posted}</span>
                                <div className="btn-group">
                                    <button className="btn btn-sm btn-light"><i className="ri-edit-line"></i></button>
                                    <button className="btn btn-sm btn-light text-danger" onClick={() => handleDelete(signal.id)}><i className="ri-delete-bin-line"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminSignals;
