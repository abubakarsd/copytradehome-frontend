import React, { useState, useEffect } from 'react';
import api from '../../utils/axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminCopyTrading = () => {
    // Mock Data
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchExperts = async () => {
        try {
            const { data } = await api.get('/admin/experts');
            if (data.success) {
                setExperts(data.data);
            }
        } catch (error) {
            toast.error('Failed to load experts');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExperts();
    }, []);

    const handleAction = async (id, action) => {
        if (action === 'delete') {
            if (window.confirm('Are you sure you want to delete this expert?')) {
                try {
                    await api.delete(`/admin/experts/${id}`);
                    toast.success('Expert deleted successfully');
                    fetchExperts();
                } catch (error) {
                    toast.error('Failed to delete expert');
                }
            }
        } else if (action === 'toggle') {
            try {
                await api.put(`/admin/experts/${id}/toggle-status`);
                toast.info('Expert status updated');
                fetchExperts();
            } catch (error) {
                toast.error('Failed to update status');
            }
        }
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>Manage Copy Trading | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Copy Trading Management</h1>
                        <p className="mb-0 text-muted fs-13">Add or edit trading experts designated for copy trading.</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => toast.info('Open Add Expert Modal')}>
                        <i className="bx bx-plus me-1"></i> Add New Expert
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Expert Traders</div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th>Expert</th>
                                            <th>Win Rate</th>
                                            <th>Profit Share</th>
                                            <th>Copiers</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {experts.map((expert) => (
                                            <tr key={expert._id}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2">
                                                            <img src={`/assets/images/faces/${expert.img}`} alt={expert.name} onError={(e) => { e.target.src = '/assets/images/faces/1.jpg' }} />
                                                        </span>
                                                        <span className="fw-medium">{expert.name}</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success">{expert.winRate}</span></td>
                                                <td><span className="text-success">{expert.profit}</span></td>
                                                <td>{expert.copiers}</td>
                                                <td>
                                                    <span className={`badge bg-${expert.status === 'active' ? 'success' : 'secondary'}-transparent`}>
                                                        {expert.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <button className="btn btn-icon btn-sm btn-info-light"><i className="ri-edit-line"></i></button>
                                                        <button className="btn btn-icon btn-sm btn-warning-light" onClick={() => handleAction(expert._id, 'toggle')}>
                                                            <i className={`bx bx-${expert.status === 'active' ? 'hide' : 'show'}`}></i>
                                                        </button>
                                                        <button className="btn btn-icon btn-sm btn-danger-light" onClick={() => handleAction(expert._id, 'delete')}><i className="ri-delete-bin-line"></i></button>
                                                    </div>
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

export default AdminCopyTrading;
