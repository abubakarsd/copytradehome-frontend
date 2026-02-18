import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignalsOverview = ({ balance }) => {
    const navigate = useNavigate();
    const [loadingMap, setLoadingMap] = useState({});

    const signals = [
        { id: 1, name: 'OVTLYR', strength: '99.00%', price: 102260.00 },
        { id: 10, name: 'B45 CN', strength: '95.00%', price: 124000.00 },
        { id: 9, name: 'ZB-78', strength: '83.00%', price: 98158.00 },
        { id: 8, name: 'PHANTOM', strength: '99.00%', price: 501900.00 },
        { id: 7, name: 'TESLA', strength: '99.00%', price: 245010.00 },
        { id: 6, name: 'NVIDIA', strength: '97.00%', price: 105820.00 },
        { id: 5, name: 'MOON SIGNALS', strength: '98.00%', price: 312804.00 },
        { id: 4, name: 'COIN', strength: '100.00%', price: 1098012.00 },
        { id: 3, name: '8EMA', strength: '100.00%', price: 704960.00 },
        { id: 2, name: 'BTC', strength: '98.00%', price: 201520.00 },
        { id: 11, name: 'XPN-4N', strength: '86.00%', price: 100885.00 }
    ];

    const handlePurchase = (e, signal) => {
        e.preventDefault();

        // set loading for this specific signal
        setLoadingMap(prev => ({ ...prev, [signal.id]: true }));

        setTimeout(() => {
            if (balance < signal.price) {
                // Insufficient funds
                // Navigate to assets page to add money
                navigate('/dashboard/assets');
            } else {
                // Sufficient funds logic (mocked)
                // In a real app, this would be an API call
                setLoadingMap(prev => ({ ...prev, [signal.id]: false }));
                alert(`Successfully purchased ${signal.name}!`);
            }
            // Note: If navigating away, we don't strictly need to set loading to false, 
            // but it's good practice if component doesn't unmount immediately.
        }, 1500); // 1.5s delay to show spinner
    };

    return (
        <div className="row">
            {signals.map((signal) => (
                <div className="col-xxl-4 col-xl-12" key={signal.id}>
                    <div className="card custom-card dashboard-main-card pricing-card pricing-success border">
                        <div className="card-body p-4">
                            <div className="lh-1 mb-3">
                                <span className="avatar avatar-lg avatar-rounded bg-success-transparent svg-success">
                                    <i className="bx bx-signal-4 fs-20 text-success"></i>
                                </span>
                            </div>
                            <h5 className="fw-semibold">{signal.name}</h5>
                            <p className="text-muted">
                                Signal Strength:
                                <span className="fw-semibold ms-1">{signal.strength}</span>
                            </p>
                            <div className="pricing-count">
                                <span class="fs-13 d-block mb-1">Signal Price</span>
                                <div className="d-flex align-items-end gap-2">
                                    <h2 className="fw-semibold mb-0 lh-1">
                                        ${signal.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </h2>
                                </div>
                            </div>
                            <hr className="section-devider my-4" />
                            <form onSubmit={(e) => handlePurchase(e, signal)}>
                                <div className="mb-3">
                                    <label className="form-label">Amount to Subscribe</label>
                                    <div className="input-group">
                                        <span className="input-group-text">$</span>
                                        <input
                                            type="number"
                                            name="amount"
                                            min={signal.price}
                                            step="0.01"
                                            className="form-control"
                                            placeholder="Enter amount"
                                            defaultValue={signal.price}
                                            required
                                        />
                                    </div>
                                    <small className="text-muted d-block mt-1">
                                        Amount must be at least the signal price and within your wallet balance.
                                    </small>
                                </div>
                                <div className="d-grid mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-primary"
                                        disabled={loadingMap[signal.id]}
                                    >
                                        {loadingMap[signal.id] ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Processing...
                                            </>
                                        ) : (
                                            'Purchase Signal'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SignalsOverview;
