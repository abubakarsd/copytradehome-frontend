import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DashboardWithdraw.css';

const DashboardWithdraw = () => {
    const [source, setSource] = useState('wallet');
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Mock balances - ideally these would come from a context or API
    const walletBalance = 0.00;
    const profitBalance = 0.00;
    const totalBalance = walletBalance + profitBalance;

    const paymentMethods = [
        { value: 'USDCTrc20_', name: 'USDC (TRC20)', address: '', hasUser: false },
        { value: 'XRP', name: 'XRP', address: '', hasUser: false },
        { value: 'usdt', name: 'USDT TRC20', address: '', hasUser: false },
        { value: 'eth', name: 'Ethereum', address: '', hasUser: false },
        { value: 'ERC20', name: 'USDT ERC20', address: '', hasUser: false },
        { value: 'btc', name: 'Bitcoin', address: '', hasUser: false },
        { value: 'WIRE', name: 'Wire transfer', address: '', hasUser: false },
    ];

    const selectedMethod = paymentMethods.find(m => m.value === method);

    const handleCopyWallet = () => {
        if (selectedMethod && selectedMethod.address) {
            navigator.clipboard.writeText(selectedMethod.address);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Withdrawal request submitted successfully!');
        }, 2000);
    };

    return (
        <div className="container-fluid">
            {/* Page Header */}
            <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                <div>
                    <h1 className="page-title fw-semibold fs-18 mb-0">Withdraw Funds</h1>
                    <nav>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Withdraw</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="row">
                {/* Left Column: Your Balance */}
                <div className="col-xl-3">
                    <div className="card custom-card">
                        <div className="card-body">
                            <h6 className="fw-semibold mb-3">Your Balance</h6>
                            <div className="mb-4">
                                <h3 className="fw-bold mb-1">${totalBalance.toFixed(2)}</h3>
                                <div className="text-muted fs-12">
                                    Wallet: ${walletBalance.toFixed(2)} + Profits: ${profitBalance.toFixed(2)}
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="p-3 border rounded bg-light d-flex align-items-center">
                                        <span className="avatar avatar-sm bg-primary-transparent me-3">
                                            <i className="bx bx-wallet text-primary fs-16"></i>
                                        </span>
                                        <div>
                                            <div className="fw-semibold text-dark">${profitBalance.toFixed(2)}</div>
                                            <div className="text-muted fs-11">Available Profits</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="p-3 border rounded bg-light d-flex align-items-center">
                                        <span className="avatar avatar-sm bg-warning-transparent me-3">
                                            <i className="bx bx-transfer text-warning fs-16"></i>
                                        </span>
                                        <div>
                                            <div className="fw-semibold text-dark">${walletBalance.toFixed(2)}</div>
                                            <div className="text-muted fs-11">Wallet Balance</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Column: Request Withdrawal Form */}
                <div className="col-xl-6">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Request Withdrawal</div>
                        </div>
                        <div className="card-body">
                            {/* Alert for empty balance */}
                            {totalBalance === 0 && (
                                <div className="alert alert-info text-sm mb-4" role="alert">
                                    <i className="ri-information-line me-2 fs-18"></i>
                                    <div>
                                        You cannot request withdrawal because your available wallet and profit balances are empty.
                                        <Link to="/dashboard" className="fw-semibold text-decoration-underline ms-1">Start Trading Now</Link>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                {/* Withdraw From */}
                                <div className="mb-4">
                                    <label className="form-label">Withdraw From</label>
                                    <div className="d-flex gap-4">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="source"
                                                id="source_wallet"
                                                value="wallet"
                                                checked={source === 'wallet'}
                                                onChange={(e) => setSource(e.target.value)}
                                            />
                                            <label className="form-check-label" htmlFor="source_wallet">
                                                Wallet Balance (${walletBalance.toFixed(2)})
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="source"
                                                id="source_profit"
                                                value="profit"
                                                checked={source === 'profit'}
                                                onChange={(e) => setSource(e.target.value)}
                                            />
                                            <label className="form-check-label" htmlFor="source_profit">
                                                Profits (${profitBalance.toFixed(2)})
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Amount */}
                                <div className="mb-4">
                                    <label className="form-label text-success">
                                        Available from {source === 'wallet' ? 'Wallet' : 'Profits'}:
                                        <span className="fw-bold ms-1">
                                            ${source === 'wallet' ? walletBalance.toFixed(2) : profitBalance.toFixed(2)}
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        className="form-control"
                                        placeholder="0.00"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        required
                                        disabled={totalBalance === 0}
                                    />
                                </div>

                                {/* Payment Method */}
                                <div className="mb-4">
                                    <label className="form-label">Select Payment Method</label>
                                    <select
                                        className="form-select"
                                        value={method}
                                        onChange={(e) => setMethod(e.target.value)}
                                        required
                                        disabled={totalBalance === 0}
                                    >
                                        <option value="">Select method</option>
                                        {paymentMethods.map((m) => (
                                            <option key={m.value} value={m.value}>{m.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Wallet Address Display */}
                                <div className="mb-4">
                                    <label className="form-label">Your Wallet Address</label>
                                    <div className="input-group">
                                        <div className="form-control bg-light text-muted d-flex align-items-center justify-content-between" style={{ minHeight: '38px' }}>
                                            <span className="text-truncate">
                                                {method ? (
                                                    selectedMethod?.hasUser ? selectedMethod?.address : 'No saved address'
                                                ) : 'Select a method to see address'}
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-outline-light text-primary border-start-0"
                                            type="button"
                                            onClick={handleCopyWallet}
                                            disabled={!method || !selectedMethod?.hasUser}
                                        >
                                            Copy
                                        </button>
                                    </div>
                                    {method && !selectedMethod?.hasUser && (
                                        <div className="form-text mt-1 text-danger">
                                            No saved address. Please set it in <Link to="/profile" className="text-decoration-underline">Profile Settings</Link>.
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <label className="form-label">Description (Optional)</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Notes for this withdrawal request"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        disabled={totalBalance === 0}
                                    ></textarea>
                                </div>

                                <div className="text-end">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isSubmitting || !method || !amount || totalBalance === 0}
                                    >
                                        {isSubmitting ? (
                                            <><span className="spinner-border spinner-border-sm me-2"></span>Processing...</>
                                        ) : (
                                            'Request Withdrawal'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Column: Info */}
                <div className="col-xl-3">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Withdrawal Information</div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mb-0 withdraw-info-list">
                                <li className="d-flex align-items-start mb-4">
                                    <span className="avatar avatar-sm bg-primary-transparent me-3 flex-shrink-0">
                                        <i className="bx bx-time text-primary"></i>
                                    </span>
                                    <div>
                                        <h6 className="mb-1 fw-semibold fs-14">Processing Time</h6>
                                        <p className="text-muted fs-12 mb-0">
                                            Withdrawals are typically processed within 24–48 hours.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-4">
                                    <span className="avatar avatar-sm bg-warning-transparent me-3 flex-shrink-0">
                                        <i className="bx bx-dollar text-warning"></i>
                                    </span>
                                    <div>
                                        <h6 className="mb-1 fw-semibold fs-14">Network Fees</h6>
                                        <p className="text-muted fs-12 mb-0">
                                            A small network fee may apply depending on the selected method.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <span className="avatar avatar-sm bg-success-transparent me-3 flex-shrink-0">
                                        <i className="bx bx-shield-quarter text-success"></i>
                                    </span>
                                    <div>
                                        <h6 className="mb-1 fw-semibold fs-14">Security</h6>
                                        <p className="text-muted fs-12 mb-0">
                                            For your safety, some withdrawals may require extra verification.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card custom-card">
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <span className="avatar avatar-sm bg-warning-transparent me-3 flex-shrink-0">
                                    <i className="bx bx-help-circle text-warning"></i>
                                </span>
                                <div>
                                    <h6 className="fw-semibold mb-1 fs-14">Need Help?</h6>
                                    <p className="text-muted fs-12 mb-3">
                                        If you have any issues with your withdrawal, our support team is ready to assist.
                                    </p>
                                    <Link to="/contact" className="btn btn-outline-warning btn-sm">Contact Support</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardWithdraw;
