import React, { useState, useEffect } from 'react';
import api from '../../utils/axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminDeposits = () => {
    // Mock Data
    const [deposits, setDeposits] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDeposits = async () => {
        try {
            const { data } = await api.get('/admin/deposits');
            if (data.success) {
                setDeposits(data.data);
            }
        } catch (error) {
            toast.error('Failed to load deposits');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDeposits();
    }, []);

    const handleAction = async (id, action) => {
        try {
            const url = action === 'approve' ? `/admin/deposits/${id}/approve` : `/admin/deposits/${id}/reject`;
            const { data } = await api.put(url);
            if (data.success) {
                toast.success(`Deposit ${action}d successfully`);
                fetchDeposits();
            }
        } catch (error) {
            toast.error(`Failed to ${action} deposit`);
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
                                            <tr key={dep._id}>
                                                <td><span className="fw-medium">{dep._id.substring(0, 8)}...</span></td>
                                                <td>{dep.user?.profile?.fullname || dep.user?.email || 'Unknown'}</td>
                                                <td><span className="fw-bold text-success">${dep.amount}</span></td>
                                                <td><span className="badge bg-light text-dark">{dep.details}</span></td>
                                                <td>{new Date(dep.createdAt).toLocaleString()}</td>
                                                <td>
                                                    <span className={`badge bg-${dep.status === 'completed' ? 'success' : dep.status === 'failed' ? 'danger' : 'warning'}-transparent`}>
                                                        {dep.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    {dep.status === 'pending' && (
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-sm btn-success-light" onClick={() => handleAction(dep._id, 'approve')}>
                                                                <i className="bx bx-check me-1"></i>Approve
                                                            </button>
                                                            <button className="btn btn-sm btn-danger-light" onClick={() => handleAction(dep._id, 'reject')}>
                                                                <i className="bx bx-x me-1"></i>Reject
                                                            </button>
                                                        </div>
                                                    )}
                                                    {dep.status !== 'pending' && (
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
