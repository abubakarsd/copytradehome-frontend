import React from 'react';
import { Link } from 'react-router-dom';

const DashboardWithdrawHistory = () => {
    // This empty state matches the HTML provided
    const hasHistory = false;

    return (
        <div className="container-fluid">
            {/* Page Header */}
            <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                <div>
                    <h1 className="page-title fw-semibold fs-18 mb-0">Withdrawal History</h1>
                    <nav>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/withdraw">Withdraw</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">History</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="row">
                <div className="col-xxl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                My Withdrawals
                            </div>
                        </div>
                        <div className="card-body">
                            {hasHistory ? (
                                <div className="table-responsive">
                                    <table className="table text-nowrap table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Transaction ID</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Method</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Map over withdrawal history here */}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-5">
                                    {/* Using a Bootstrap icon as placeholder since empty-png.png is missing */}
                                    <img src="/assets/dashboard/images/empty-withdrawal.png" alt="No data" style={{ width: '200px' }} className="mb-3" />
                                    <p className="text-muted mb-0">No withdrawals to show yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardWithdrawHistory;
