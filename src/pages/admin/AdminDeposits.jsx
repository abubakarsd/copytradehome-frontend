import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminDeposits = () => {
    // Mock Data
    const [deposits, setDeposits] = useState([
        { id: 'DEP-001', user: 'John Doe', amount: '$5,000.00', method: 'USDT TRC20', date: '2026-02-18 10:30', status: 'Pending', proof: 'proof.jpg' },
        { id: 'DEP-002', user: 'Michael Lee', amount: '$10,000.00', method: 'BTC', date: '2026-02-18 11:15', status: 'Approved', proof: 'proof.jpg' },
        { id: 'DEP-003', user: 'Sarah Connor', amount: '$1,000.00', method: 'ETH', date: '2026-02-17 15:00', status: 'Rejected', proof: 'proof.jpg' },
    ]);

    const handleAction = (id, action) => {
        if (action === 'approve') {
            setDeposits(deposits.map(d => d.id === id ? { ...d, status: 'Approved' } : d));
            toast.success('Deposit approved successfully');
        } else if (action === 'reject') {
            setDeposits(deposits.map(d => d.id === id ? { ...d, status: 'Rejected' } : d));
            toast.error('Deposit rejected');
        }
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>Manage Deposits | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Manage Deposits</h1>
                        <p className="mb-0 text-muted fs-13">Review and approve user deposit requests.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Deposit Requests</div>
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
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {deposits.map((dep) => (
                                            <tr key={dep.id}>
                                                <td><span className="fw-medium">{dep.id}</span></td>
                                                <td>{dep.user}</td>
                                                <td><span className="fw-bold text-success">{dep.amount}</span></td>
                                                <td><span className="badge bg-light text-dark">{dep.method}</span></td>
                                                <td>{dep.date}</td>
                                                <td>
                                                    <span className={`badge bg-${dep.status === 'Approved' ? 'success' : dep.status === 'Rejected' ? 'danger' : 'warning'}-transparent`}>
                                                        {dep.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    {dep.status === 'Pending' && (
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-sm btn-success-light" onClick={() => handleAction(dep.id, 'approve')}>
                                                                <i className="bx bx-check me-1"></i>Approve
                                                            </button>
                                                            <button className="btn btn-sm btn-danger-light" onClick={() => handleAction(dep.id, 'reject')}>
                                                                <i className="bx bx-x me-1"></i>Reject
                                                            </button>
                                                        </div>
                                                    )}
                                                    {dep.status !== 'Pending' && (
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

export default AdminDeposits;
