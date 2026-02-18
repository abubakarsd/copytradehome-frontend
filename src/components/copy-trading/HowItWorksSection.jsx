import React from 'react';
import './HowItWorksSection.css';

const HowItWorksSection = () => {
    return (
        <div className="container px-0 pb-5 mt-5">
            <div className="row justify-content-center mb-4">
                <div className="col-lg-7 text-center">
                    <span className="badge bg-warning-transparent text-warning fw-bold text-uppercase mb-3">How It Works</span>
                    <h2 className="display-5 fw-bold mb-3">Start Copy Trading in 4 Simple Steps</h2>
                    <p className="text-muted">
                        Move from browsing strategies to copying trades live in just a few minutes.
                    </p>
                </div>
            </div>

            <div className="row g-4">
                {/* Step 1 */}
                <div className="col-lg-3 col-md-6 process-connector">
                    <div className="card custom-card card-body h-100">
                        <div className="d-flex align-items-center mb-3">
                            <div className="process-icon me-2">
                                <i className="bi bi-search"></i>
                            </div>
                            <span className="badge step-badge rounded-pill ms-auto">Step 1</span>
                        </div>
                        <h5 className="fw-bold mb-2">Discover Top Traders</h5>
                        <p className="text-muted mb-0">
                            Use filters to find strategies that match your goals, risk appetite, and capital size.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="col-lg-3 col-md-6 process-connector">
                    <div className="card custom-card card-body h-100">
                        <div className="d-flex align-items-center mb-3">
                            <div className="process-icon me-2">
                                <i className="bi bi-person-check"></i>
                            </div>
                            <span className="badge step-badge rounded-pill ms-auto">Step 2</span>
                        </div>
                        <h5 className="fw-bold mb-2">Choose a Strategy</h5>
                        <p className="text-muted mb-0">
                            Open a trader’s profile to review their history, monthly return, drawdown and followers.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="col-lg-3 col-md-6 process-connector">
                    <div className="card custom-card card-body h-100">
                        <div className="d-flex align-items-center mb-3">
                            <div className="process-icon me-2">
                                <i className="bi bi-wallet2"></i>
                            </div>
                            <span className="badge step-badge rounded-pill ms-auto">Step 3</span>
                        </div>
                        <h5 className="fw-bold mb-2">Allocate Capital</h5>
                        <p className="text-muted mb-0">
                            Set how much you want to invest, define your own risk limits, and confirm your subscription.
                        </p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="col-lg-3 col-md-6">
                    <div className="card custom-card card-body h-100">
                        <div className="d-flex align-items-center mb-3">
                            <div className="process-icon me-2">
                                <i className="bi bi-graph-up-arrow"></i>
                            </div>
                            <span className="badge step-badge rounded-pill ms-auto">Step 4</span>
                        </div>
                        <h5 className="fw-bold mb-2">Copy & Monitor</h5>
                        <p className="text-muted mb-0">
                            Trades are copied automatically. Track performance in your dashboard and adjust or stop anytime.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
