import React, { useState, useEffect } from 'react';
import api from '../../utils/axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminWithdrawals = () => {
    // Mock Data
    const [withdrawals, setWithdrawals] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchWithdrawals = async () => {
        try {
            const { data } = await api.get('/admin/withdrawals');
            if (data.success) {
                setWithdrawals(data.data);
            }
        } catch (error) {
            toast.error('Failed to load withdrawals');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWithdrawals();
    }, []);

    const handleAction = async (id, action) => {
        try {
            const url = action === 'approve' ? `/admin/withdrawals/${id}/approve` : `/admin/withdrawals/${id}/reject`;
            const { data } = await api.put(url);
            if (data.success) {
                toast.success(`Withdrawal ${action}d successfully`);
                fetchWithdrawals();
            }
        } catch (error) {
            toast.error(`Failed to ${action} withdrawal: ${error.response?.data?.error || 'Unknown error'}`);
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
                                            <tr key={wdr._id}>
                                                <td><span className="fw-medium">{wdr._id.substring(0, 8)}...</span></td>
                                                <td>{wdr.user?.profile?.fullname || wdr.user?.email || 'Unknown'}</td>
                                                <td><span className="fw-bold text-danger">${wdr.amount}</span></td>
                                                <td><span className="badge bg-light text-dark">{wdr.method}</span></td>
                                                <td><small className="text-muted">{wdr.details}</small></td>
                                                <td>{new Date(wdr.createdAt).toLocaleString()}</td>
                                                <td>
                                                    <span className={`badge bg-${wdr.status === 'completed' ? 'success' : wdr.status === 'failed' ? 'danger' : 'warning'}-transparent`}>
                                                        {wdr.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    {wdr.status === 'pending' && (
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-sm btn-success-light" onClick={() => handleAction(wdr._id, 'approve')}>
                                                                <i className="bx bx-check me-1"></i>Approve
                                                            </button>
                                                            <button className="btn btn-sm btn-danger-light" onClick={() => handleAction(wdr._id, 'reject')}>
                                                                <i className="bx bx-x me-1"></i>Reject
                                                            </button>
                                                        </div>
                                                    )}
                                                    {wdr.status !== 'pending' && (
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
