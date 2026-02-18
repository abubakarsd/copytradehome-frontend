import React, { useState } from 'react';

const ProfileWallets = () => {
    const [walletAddresses, setWalletAddresses] = useState({
        usdc_trc20: '',
        xrp: '',
        usdt_trc20: '',
        ethereum: '',
        usdt_erc20: '',
        bitcoin: '',
        wire_transfer: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWalletAddresses(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Wallet addresses submitted:', walletAddresses);
        // Add API call logic here
    };

    return (
        <div className="container-fluid page-container main-body-container">
            {/* Start::page-header */}
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Wallet Addresses</h1>
                        <p className="mb-0 text-muted fs-13">
                            Manage your payout wallet addresses for withdrawals.
                        </p>
                    </div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0);">Profile</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Wallet Addresses</li>
                    </ol>
                </div>
            </div>
            {/* End::page-header */}

            <div className="row justify-content-center">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Payout Wallet Addresses</div>
                        </div>
                        <div className="card-body">
                            <p className="text-muted fs-13 mb-4">
                                Configure the external wallet addresses where you want to receive withdrawals for each supported asset.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    {/* USDC (TRC20) */}
                                    <div className="col-md-6">
                                        <div className="card custom-card h-100 mb-0 shadow-none border">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded bg-primary-transparent me-2">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">USDC (TRC20)</h6>
                                                        <span className="badge bg-secondary-transparent text-uppercase">USDCTrc20_</span>
                                                    </div>
                                                </div>
                                                <label className="form-label fs-12 text-muted mb-1">Your USDC (TRC20) wallet / account address</label>
                                                <textarea
                                                    className="form-control form-control-sm"
                                                    rows="3"
                                                    name="usdc_trc20"
                                                    placeholder="Paste your USDC (TRC20) address here"
                                                    value={walletAddresses.usdc_trc20}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* XRP */}
                                    <div className="col-md-6">
                                        <div className="card custom-card h-100 mb-0 shadow-none border">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded bg-primary-transparent me-2">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">XRP</h6>
                                                        <span className="badge bg-secondary-transparent text-uppercase">XRP</span>
                                                    </div>
                                                </div>
                                                <label className="form-label fs-12 text-muted mb-1">Your XRP wallet / account address</label>
                                                <textarea
                                                    className="form-control form-control-sm"
                                                    rows="3"
                                                    name="xrp"
                                                    placeholder="Paste your XRP address here"
                                                    value={walletAddresses.xrp}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* USDT TRC20 */}
                                    <div className="col-md-6">
                                        <div className="card custom-card h-100 mb-0 shadow-none border">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded bg-primary-transparent me-2">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">USDT TRC20</h6>
                                                        <span className="badge bg-secondary-transparent text-uppercase">usdt</span>
                                                    </div>
                                                </div>
                                                <label className="form-label fs-12 text-muted mb-1">Your USDT TRC20 wallet / account address</label>
                                                <textarea
                                                    className="form-control form-control-sm"
                                                    rows="3"
                                                    name="usdt_trc20"
                                                    placeholder="Paste your USDT TRC20 address here"
                                                    value={walletAddresses.usdt_trc20}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ethereum */}
                                    <div className="col-md-6">
                                        <div className="card custom-card h-100 mb-0 shadow-none border">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded bg-primary-transparent me-2">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">Ethereum</h6>
                                                        <span className="badge bg-secondary-transparent text-uppercase">eth</span>
                                                    </div>
                                                </div>
                                                <label className="form-label fs-12 text-muted mb-1">Your Ethereum wallet / account address</label>
                                                <textarea
                                                    className="form-control form-control-sm"
                                                    rows="3"
                                                    name="ethereum"
                                                    placeholder="Paste your Ethereum address here"
                                                    value={walletAddresses.ethereum}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* USDT ERC20 */}
                                    <div className="col-md-6">
                                        <div className="card custom-card h-100 mb-0 shadow-none border">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded bg-primary-transparent me-2">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">USDT ERC20</h6>
                                                        <span className="badge bg-secondary-transparent text-uppercase">ERC20</span>
                                                    </div>
                                                </div>
                                                <label className="form-label fs-12 text-muted mb-1">Your USDT ERC20 wallet / account address</label>
                                                <textarea
                                                    className="form-control form-control-sm"
                                                    rows="3"
                                                    name="usdt_erc20"
                                                    placeholder="Paste your USDT ERC20 address here"
                                                    value={walletAddresses.usdt_erc20}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bitcoin */}
                                    <div className="col-md-6">
                                        <div className="card custom-card h-100 mb-0 shadow-none border">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded bg-primary-transparent me-2">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">Bitcoin</h6>
                                                        <span className="badge bg-secondary-transparent text-uppercase">btc</span>
                                                    </div>
                                                </div>
                                                <label className="form-label fs-12 text-muted mb-1">Your Bitcoin wallet / account address</label>
                                                <textarea
                                                    className="form-control form-control-sm"
                                                    rows="3"
                                                    name="bitcoin"
                                                    placeholder="Paste your Bitcoin address here"
                                                    value={walletAddresses.bitcoin}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Wire Transfer */}
                                    <div className="col-md-12">
                                        <div className="card custom-card h-100 mb-0 shadow-none border">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded bg-primary-transparent me-2">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">Wire transfer</h6>
                                                        <span className="badge bg-secondary-transparent text-uppercase">WIRE</span>
                                                    </div>
                                                </div>
                                                <label className="form-label fs-12 text-muted mb-1">Your Wire transfer bank account details</label>
                                                <textarea
                                                    className="form-control form-control-sm"
                                                    rows="8"
                                                    name="wire_transfer"
                                                    placeholder="Enter your bank account details for wire transfer (Bank Name, Account Name, Account Number, Routing Number, SWIFT/BIC Code, etc.)"
                                                    value={walletAddresses.wire_transfer}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mt-4">
                                    <button type="submit" className="btn btn-primary">
                                        Save Wallet Addresses
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileWallets;
