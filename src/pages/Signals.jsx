import React, { useState } from 'react';
import SignalsOverview from '../components/dashboard/SignalsOverview';
import SignalsTable from '../components/dashboard/SignalsTable';

const Signals = () => {
    // Mock wallet balance for now. 
    // In a real app, this would come from a context or API on mount.
    const [walletBalance, setWalletBalance] = useState(0.00);

    return (
        <div className="container-fluid page-container main-body-container">
            <div className="row d-flex justify-content-center mb-5">
                <div className="pricing-heading-section text-center mb-5">
                    <span className="badge bg-primary-transparent rounded-pill">
                        Trading Signals
                    </span>
                    <h2 className="fw-semibold mt-2">Choose The Best Signal For You</h2>
                    <span className="d-block text-muted fs-16 mb-3">
                        Subscribe to high quality signals using your wallet balance.
                    </span>
                    <span className="d-block fw-medium">
                        Wallet Balance: <span className="text-muted">${walletBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </span>
                </div>

                <div className="col-xl-9">
                    <div className="tab-content">
                        <div className="tab-pane show active p-0 border-0" id="pricing-monthly" role="tabpanel">
                            <SignalsOverview balance={walletBalance} />
                        </div>
                    </div>
                </div>
            </div>

            <SignalsTable />
        </div>
    );
};

export default Signals;
