import React, { useState, useEffect } from 'react';
import api from '../../utils/axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';


const AdminWallets = () => {
    // Initial Mock Data (matching user side + address)
    const [wallets, setWallets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        currency: '',
        chain: '',
        address: '',
        icon: '',
        qrCode: '' // Base64 or URL
    });

    const fetchWallets = async () => {
        try {
            const { data } = await api.get('/admin/wallets');
            if (data.success) {
                setWallets(data.data);
            }
        } catch (error) {
            toast.error('Failed to load wallets');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWallets();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this wallet?')) {
            try {
                await api.delete(`/admin/wallets/${id}`);
                toast.success('Wallet deleted successfully');
                fetchWallets();
            } catch (error) {
                toast.error('Failed to delete wallet');
            }
        }
    };

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            const file = e.target.files[0];
            if (file) {
                // Store the file object directly for upload
                setFormData({ ...formData, [e.target.name]: file });
            }
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('currency', formData.currency);
            data.append('chain', formData.chain);
            data.append('address', formData.address);
            if (formData.iconFile) {
                data.append('icon', formData.iconFile);
            }
            if (formData.qrCodeFile) {
                data.append('qrCode', formData.qrCodeFile);
            }

            // Send FormData (Axios automatically sets Content-Type to multipart/form-data)
            await api.post('/admin/wallets', data);

            toast.success('Wallet added successfully');
            setShowModal(false);
            setFormData({ name: '', currency: '', chain: '', address: '', iconFile: null, qrCodeFile: null });
            fetchWallets();
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to add wallet');
        }
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>System Wallets | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">System Wallets</h1>
                        <p className="mb-0 text-muted fs-13">Manage deposit addresses displayed to users.</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                        <i className="bx bx-plus me-1"></i> Add New Wallet
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th>Icon</th>
                                            <th>Name</th>
                                            <th>Chain</th>
                                            <th>Code</th>
                                            <th>Address</th>
                                            <th>QR Code</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wallets.map((wallet) => (
                                            <tr key={wallet._id}>
                                                <td>
                                                    <span className="avatar avatar-sm bg-light">
                                                        <img
                                                            src={wallet.icon && /\d{10,}/.test(wallet.icon) ? `${API_URL}/images/${wallet.icon}` : `/assets/dashboard/images/${wallet.icon}`}
                                                            alt={wallet.name}
                                                        // onError={(e) => { e.target.error = null; e.target.src = '/assets/dashboard/images/tether-usdt-logo.svg' }}
                                                        />
                                                    </span>
                                                </td>
                                                <td>{wallet.name}</td>
                                                <td><span className="badge bg-info-transparent">{wallet.chain}</span></td>
                                                <td><span className="badge bg-light text-dark">{wallet.currency}</span></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-truncate" style={{ maxWidth: '150px' }}>{wallet.address}</span>
                                                        <button className="btn btn-icon btn-sm btn-ghost-light ms-1" onClick={() => { navigator.clipboard.writeText(wallet.address); toast.info('Copied') }}>
                                                            <i className="bx bx-copy"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-light" onClick={() => toast.info('Viewing QR Code')}>
                                                        <i className="bx bx-qr-scan me-1"></i> View
                                                    </button>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <button className="btn btn-icon btn-sm btn-info-light"><i className="ri-edit-line"></i></button>
                                                        <button className="btn btn-icon btn-sm btn-danger-light" onClick={() => handleDelete(wallet._id)}><i className="ri-delete-bin-line"></i></button>
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

            {/* Modal */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Wallet</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Wallet Name</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. USDT TRC20" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Currency Code</label>
                                            <input type="text" className="form-control" name="currency" value={formData.currency} onChange={handleChange} required placeholder="e.g. USDT" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Chain</label>
                                            <input type="text" className="form-control" name="chain" value={formData.chain} onChange={handleChange} required placeholder="e.g. TRC20" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Wallet Icon</label>
                                        <input type="file" className="form-control" name="iconFile" onChange={handleChange} accept="image/*" onClick={(e) => e.stopPropagation()} />
                                        ...
                                        <input type="file" className="form-control" name="qrCodeFile" onChange={handleChange} accept="image/*" onClick={(e) => e.stopPropagation()} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Close</button>
                                    <button type="submit" className="btn btn-primary">Save Wallet</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminWallets;
