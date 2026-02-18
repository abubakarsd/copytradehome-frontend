import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AdminTradeHistory = () => {
    // Mock Data
    const trades = [
        { id: 'TRD-001', user: 'John Doe', type: 'Buy', asset: 'BTC/USD', amount: '$5,000', pnl: '+$120.50', date: '2026-02-18 14:30', status: 'Closed' },
        { id: 'TRD-002', user: 'Jane Smith', type: 'Copy', asset: 'Forex Master', amount: '$1,000', pnl: '-$15.00', date: '2026-02-18 12:15', status: 'Open' },
        { id: 'TRD-003', user: 'Mike Ross', type: 'Sell', asset: 'AAPL', amount: '$2,500', pnl: '+$340.00', date: '2026-02-17 09:45', status: 'Closed' },
        { id: 'TRD-004', user: 'Rachel Green', type: 'Buy', asset: 'ETH/USD', amount: '$10,000', pnl: '+$850.00', date: '2026-02-16 16:20', status: 'Closed' },
    ];

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>Global Trade History | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Global Trade History</h1>
                        <p className="mb-0 text-muted fs-13">View all trading activities across the platform.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">All Trades</div>
                            <div className="d-flex gap-2">
                                <input type="text" className="form-control form-control-sm" placeholder="Search User or ID..." />
                                <button className="btn btn-sm btn-primary-light">Filter</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th>Trade ID</th>
                                            <th>User</th>
                                            <th>Type</th>
                                            <th>Asset</th>
                                            <th>Amount</th>
                                            <th>PnL</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {trades.map((trade) => (
                                            <tr key={trade.id}>
                                                <td><span className="fw-medium">{trade.id}</span></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs me-2 bg-primary-transparent rounded-circle">{trade.user.charAt(0)}</span>
                                                        {trade.user}
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${trade.type === 'Buy' ? 'success' : trade.type === 'Sell' ? 'danger' : 'info'}-transparent`}>
                                                        {trade.type}
                                                    </span>
                                                </td>
                                                <td>{trade.asset}</td>
                                                <td>{trade.amount}</td>
                                                <td className={trade.pnl.startsWith('+') ? 'text-success' : 'text-danger'}>{trade.pnl}</td>
                                                <td>{trade.date}</td>
                                                <td>
                                                    <span className={`badge bg-${trade.status === 'Open' ? 'warning' : 'light text-dark'}`}>
                                                        {trade.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-end mb-0">
                                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminTradeHistory;
