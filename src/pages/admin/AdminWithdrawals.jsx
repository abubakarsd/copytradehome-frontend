import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminWithdrawals = () => {
    // Mock Data
    const [withdrawals, setWithdrawals] = useState([
        { id: 'WDR-001', user: 'Alice Smith', amount: '$200.00', method: 'Bank Transfer', details: 'Chase Bank - **** 1234', date: '2026-02-18 09:00', status: 'Pending' },
        { id: 'WDR-002', user: 'John Doe', amount: '$500.00', method: 'USDT TRC20', details: 'TXN123456789', date: '2026-02-17 14:20', status: 'Approved' },
    ]);

    const handleAction = (id, action) => {
        if (action === 'approve') {
            setWithdrawals(withdrawals.map(w => w.id === id ? { ...w, status: 'Approved' } : w));
            toast.success('Withdrawal approved successfully');
        } else if (action === 'reject') {
            setWithdrawals(withdrawals.map(w => w.id === id ? { ...w, status: 'Rejected' } : w));
            toast.error('Withdrawal rejected');
        }
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>Manage Withdrawals | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Manage Withdrawals</h1>
                        <p className="mb-0 text-muted fs-13">Review and process user withdrawal requests.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Withdrawal Requests</div>
                            <div className="d-flex gap-2">
                                <select className="form-select form-select-sm">
                                    <option value="All">All Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>User</th>
                                            <th>Amount</th>
                                            <th>Method</th>
                                            <th>Details</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {withdrawals.map((wdr) => (
                                            <tr key={wdr.id}>
                                                <td><span className="fw-medium">{wdr.id}</span></td>
                                                <td>{wdr.user}</td>
                                                <td><span className="fw-bold text-danger">{wdr.amount}</span></td>
                                                <td><span className="badge bg-light text-dark">{wdr.method}</span></td>
                                                <td><small className="text-muted">{wdr.details}</small></td>
                                                <td>{wdr.date}</td>
                                                <td>
                                                    <span className={`badge bg-${wdr.status === 'Approved' ? 'success' : wdr.status === 'Rejected' ? 'danger' : 'warning'}-transparent`}>
                                                        {wdr.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    {wdr.status === 'Pending' && (
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-sm btn-success-light" onClick={() => handleAction(wdr.id, 'approve')}>
                                                                <i className="bx bx-check me-1"></i>Approve
                                                            </button>
                                                            <button className="btn btn-sm btn-danger-light" onClick={() => handleAction(wdr.id, 'reject')}>
                                                                <i className="bx bx-x me-1"></i>Reject
                                                            </button>
                                                        </div>
                                                    )}
                                                    {wdr.status !== 'Pending' && (
                                                        <span className="text-muted fs-12">No actions</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
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

export default AdminWithdrawals;
