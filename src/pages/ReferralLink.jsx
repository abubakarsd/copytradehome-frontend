import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReferralLink = () => {
    const [copied, setCopied] = useState(false);
    const referralLink = "https://copytradehome.com/referal/me/wdmslf7b74xz61oprk18"; // Hardcoded for now as per HTML

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Referrals</h1>
                        <p className="mb-0 text-muted fs-13">
                            Share your referral link and earn commissions when your referrals invest.
                        </p>
                    </div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Referrals</li>
                    </ol>
                </div>
            </div>

            <div className="row gy-3 mb-3">
                <div className="col-xl-6">
                    <div className="card custom-card h-100">
                        <div className="card-header">
                            <div className="card-title mb-0">My Referral Link</div>
                        </div>
                        <div className="card-body">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={referralLink}
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleCopy}
                                >
                                    {copied ? (
                                        <><i className="ti ti-check me-1"></i>Copied</>
                                    ) : (
                                        <><i className="ti ti-copy me-1"></i>Copy</>
                                    )}
                                </button>
                            </div>
                            <small className="text-muted d-block mt-2">
                                Share this link with friends and earn when they invest.
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6">
                    <div className="card custom-card h-100">
                        <div className="card-header">
                            <div className="card-title mb-0">Share</div>
                        </div>
                        <div className="card-body d-flex flex-wrap align-items-center gap-2">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`} className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">
                                <i className="ri-facebook-fill me-1"></i> Facebook
                            </a>
                            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(referralLink)}`} className="btn btn-sm btn-info" target="_blank" rel="noopener noreferrer">
                                <i className="ri-twitter-x-line me-1"></i> X
                            </a>
                            <a href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}`} className="btn btn-sm btn-secondary" target="_blank" rel="noopener noreferrer">
                                <i className="ri-telegram-fill me-1"></i> Telegram
                            </a>
                            <a href={`https://wa.me/?text=${encodeURIComponent(referralLink)}`} className="btn btn-sm btn-success" target="_blank" rel="noopener noreferrer">
                                <i className="ri-whatsapp-line me-1"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between align-items-center">
                            <div className="card-title mb-0">Referral List</div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>User</th>
                                            <th>Commission</th>
                                            <th>Created</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="4" className="text-center py-4">
                                                <img src="/assets/images/media-74.png" alt="No data" style={{ width: '200px' }} className="mb-3" />
                                                <p className="mb-0 text-muted">No referrals yet.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralLink;
