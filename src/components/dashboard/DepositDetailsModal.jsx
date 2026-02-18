import React, { useState } from 'react';
import './DashboardDepositDetails.css';

const DepositDetailsModal = ({ isOpen, onClose, depositData }) => {
    const [copied, setCopied] = useState(false);

    if (!isOpen || !depositData) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(depositData.walletAddress)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Deposit Details</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-0">
                        <div className="container-fluid px-4 py-3">
                            <div className="d-flex align-items-center justify-content-between mb-4 mt-2">
                                <div>
                                    <h4 className="mb-1">Deposit #{depositData.id}</h4>
                                    <p className="text-muted mb-0 small">Review your deposit information and complete the payment.</p>
                                </div>
                                <div className="deposit-id bg-light p-2 rounded">
                                    <i className="bx bx-hash me-1"></i>
                                    {depositData.transactionId}
                                </div>
                            </div>

                            <div className="card deposit-card border-0 shadow-none">
                                <div className="deposit-header border-bottom pb-4 mb-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="/assets/dashboard/images/copytradehome-logo.png"
                                            alt="Logo"
                                            className="deposit-logo me-2"
                                            style={{ height: '40px' }}
                                            onError={(e) => {
                                                e.target.src = 'https://copytradehome.com/assets/images/copytradehome-logo.png';
                                            }}
                                        />
                                        <h5 className="mb-0">CopyTradeHome</h5>
                                    </div>

                                    <div className="mt-3">
                                        <span className={`status-badge status-${depositData.status ? depositData.status.toLowerCase() : 'pending'}`}>
                                            <i className="bx bxs-circle me-1 small"></i>
                                            {depositData.status || 'Pending'}
                                        </span>
                                    </div>
                                </div>

                                <div className="deposit-body">
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <div className="info-group mb-3">
                                                <div className="info-label text-muted small fw-bold text-uppercase">From</div>
                                                <div className="fw-medium">{depositData.from}</div>
                                                <div className="text-muted small">
                                                    {depositData.email}<br />
                                                    {depositData.phone}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-md-end">
                                            <div className="info-group mb-3">
                                                <div className="info-label text-muted small fw-bold text-uppercase">Date & Amount</div>
                                                <div className="fw-medium">{depositData.date}</div>
                                                <div className="text-muted small">
                                                    Payment Method: {depositData.method}<br />
                                                    Amount: <strong className="text-primary">${depositData.amount}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment-box bg-light p-4 rounded-3 border">
                                        <h6 className="mb-3">Payment Information</h6>
                                        <p className="text-muted mb-3 small">
                                            Send exactly <strong>${depositData.amount}</strong> to the <strong>{depositData.walletType}</strong> wallet address below to complete this deposit.
                                        </p>

                                        <div className="text-center my-4">
                                            <img
                                                src="/assets/dashboard/images/wc-qr.png"
                                                className="qr-code img-fluid rounded"
                                                alt="QR Code"
                                                style={{ maxWidth: '200px', border: '1px solid #eee' }}
                                                onError={(e) => {
                                                    e.target.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + depositData.walletAddress;
                                                }}
                                            />
                                        </div>

                                        <div className="wallet-address-container bg-white border rounded d-flex align-items-center p-2 mt-3">
                                            <input
                                                type="text"
                                                className="form-control border-0 bg-transparent flex-grow-1"
                                                value={depositData.walletAddress}
                                                readOnly
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm ms-2"
                                                onClick={handleCopy}
                                                title={copied ? "Copied!" : "Copy Address"}
                                            >
                                                <i className={`bx ${copied ? 'bx-check' : 'bx-clipboard'} me-1`}></i>
                                                {copied ? "Copied" : "Copy"}
                                            </button>
                                        </div>

                                        <div className="text-muted small mt-3 italic text-center">
                                            <i className="bx bx-info-circle me-1"></i>
                                            After sending the funds, your deposit will appear as pending until it is confirmed.
                                        </div>
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

export default DepositDetailsModal;
