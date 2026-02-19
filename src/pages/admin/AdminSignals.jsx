import React, { useState, useEffect } from 'react';
import api from '../../utils/axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminSignals = () => {
    // Mock Data
    const [signals, setSignals] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSignals = async () => {
        try {
            const { data } = await api.get('/admin/signals');
            if (data.success) {
                setSignals(data.data);
            }
        } catch (error) {
            toast.error('Failed to load signals');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSignals();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        pair: '',
        type: 'Buy',
        entryPrice: '',
        stopLoss: '',
        takeProfit: '',
        status: 'Active'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...formData,
                entryPrice: parseFloat(formData.entryPrice),
                stopLoss: parseFloat(formData.stopLoss),
                takeProfit: parseFloat(formData.takeProfit)
            };
            await api.post('/admin/signals', payload);
            toast.success('Signal posted successfully');
            setShowModal(false);
            setFormData({ pair: '', type: 'Buy', entryPrice: '', stopLoss: '', takeProfit: '', status: 'Active' });
            fetchSignals();
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to post signal');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this signal?')) {
            try {
                await api.delete(`/admin/signals/${id}`);
                toast.success('Signal deleted');
                fetchSignals();
            } catch (error) {
                toast.error('Failed to delete signal');
            }
        }
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>Manage Signals | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Trading Signals</h1>
                        <p className="mb-0 text-muted fs-13">Post and manage trading signals for users.</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                        <i className="bx bx-plus me-1"></i> Post New Signal
                    </button>
                </div>
            </div>

            <div className="row">
                {signals.map((signal) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={signal._id}>
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-sm bg-primary-transparent me-2">
                                            <i className="bx bx-signal-5 fs-5"></i>
                                        </div>
                                        <h6 className="fw-semibold mb-0">{signal.pair}</h6>
                                    </div>
                                    <span className={`badge bg-${signal.status === 'Active' ? 'success' : 'secondary'}-transparent`}>
                                        {signal.status}
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Type</span>
                                    <span className={`fw-bold text-${signal.type === 'Buy' ? 'success' : 'danger'}`}>{signal.type}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Entry</span>
                                    <span>{signal.entryPrice}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Stop Loss</span>
                                    <span className="text-danger">{signal.stopLoss}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Take Profit</span>
                                    <span className="text-success">{signal.takeProfit}</span>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <span className="text-muted fs-12"><i className="bx bx-time-five me-1"></i>{new Date(signal.createdAt).toLocaleString()}</span>
                                <div className="btn-group">
                                    <button className="btn btn-sm btn-light"><i className="ri-edit-line"></i></button>
                                    <button className="btn btn-sm btn-light text-danger" onClick={() => handleDelete(signal._id)}><i className="ri-delete-bin-line"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Add Signal Modal */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Post New Signal</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Pair</label>
                                            <input type="text" className="form-control" name="pair" value={formData.pair} onChange={handleChange} placeholder="e.g. BTC/USD" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Type</label>
                                            <select className="form-select" name="type" value={formData.type} onChange={handleChange}>
                                                <option value="Buy">Buy</option>
                                                <option value="Sell">Sell</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Entry Price</label>
                                        <input type="text" className="form-control" name="entryPrice" value={formData.entryPrice} onChange={handleChange} required />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Stop Loss</label>
                                            <input type="text" className="form-control" name="stopLoss" value={formData.stopLoss} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Take Profit</label>
                                            <input type="text" className="form-control" name="takeProfit" value={formData.takeProfit} onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Close</button>
                                    <button type="submit" className="btn btn-primary">Post Signal</button>
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

export default AdminSignals;
