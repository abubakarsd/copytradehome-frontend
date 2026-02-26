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

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        winRate: '',
        profitShare: '',
        copiers: 0,
        status: 'active',
        avatar: '21.jpg'
    });

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData({ ...formData, avatar: reader.result });
                };
                reader.readAsDataURL(file);
            }
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Clean data for backend
            const payload = {
                ...formData,
                winRate: parseFloat(formData.winRate.replace(/[^0-9.]/g, '')),
                profitShare: parseFloat(formData.profitShare.replace(/[^0-9.]/g, '')),
                copiers: parseInt(formData.copiers)
            };

            await api.post('/admin/experts', payload);
            toast.success('Expert added successfully');
            setShowModal(false);
            setFormData({ name: '', winRate: '', profitShare: '', copiers: 0, status: 'active', avatar: '21.jpg' });
            fetchExperts();
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to add expert');
        }
    };

    const handleAction = async (id, action) => {
        /* ... existing deletion logic ... */
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
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
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
                                                            <img
                                                                src={expert.avatar?.startsWith('http') || expert.avatar?.startsWith('data:image') ? expert.avatar : `/assets/dashboard/images/${expert.avatar}`}
                                                                alt={expert.name}
                                                                onError={(e) => { e.target.error = null; e.target.src = '/assets/dashboard/images/21.jpg' }}
                                                            />
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
            {/* Add Expert Modal */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Expert</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Expert Name</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Expert Avatar</label>
                                        <input type="file" className="form-control" name="avatarFile" onChange={handleChange} accept="image/*" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Win Rate</label>
                                            <input type="text" className="form-control" name="winRate" value={formData.winRate} onChange={handleChange} placeholder="e.g. 95%" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Profit Share</label>
                                            <input type="text" className="form-control" name="profit" value={formData.profit} onChange={handleChange} placeholder="e.g. +450%" required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Copiers</label>
                                        <input type="number" className="form-control" name="copiers" value={formData.copiers} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Close</button>
                                    <button type="submit" className="btn btn-primary">Add Expert</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default AdminCopyTrading;
