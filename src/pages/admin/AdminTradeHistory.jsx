import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminTradeHistory = () => {
    // Mock Data
    const [trades, setTrades] = useState([
        { id: 'TRD-001', user: 'John Doe', type: 'Buy', asset: 'BTC/USD', amount: '$5,000', pnl: '+$120.50', date: '2026-02-18 14:30', status: 'Closed' },
        { id: 'TRD-002', user: 'Jane Smith', type: 'Copy', asset: 'Forex Master', amount: '$1,000', pnl: '-$15.00', date: '2026-02-18 12:15', status: 'Open' },
        { id: 'TRD-003', user: 'Mike Ross', type: 'Sell', asset: 'AAPL', amount: '$2,500', pnl: '+$340.00', date: '2026-02-17 09:45', status: 'Closed' },
        { id: 'TRD-004', user: 'Rachel Green', type: 'Buy', asset: 'ETH/USD', amount: '$10,000', pnl: '+$850.00', date: '2026-02-16 16:20', status: 'Closed' },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTrade, setCurrentTrade] = useState({
        id: '',
        user: '',
        type: 'Buy',
        asset: '',
        amount: '',
        pnl: '',
        date: '',
        status: 'Open'
    });

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this trade?')) {
            setTrades(trades.filter(t => t.id !== id));
            toast.success('Trade deleted successfully');
        }
    };

    const handleEdit = (trade) => {
        setCurrentTrade(trade);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleAdd = () => {
        setCurrentTrade({
            id: `TRD-${Date.now().toString().slice(-3)}`,
            user: '',
            type: 'Buy',
            asset: '',
            amount: '',
            pnl: '',
            date: new Date().toISOString().slice(0, 16).replace('T', ' '),
            status: 'Open'
        });
        setIsEditing(false);
        setShowModal(true);
    };

    const handleChange = (e) => {
        setCurrentTrade({ ...currentTrade, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setTrades(trades.map(t => t.id === currentTrade.id ? currentTrade : t));
            toast.success('Trade updated successfully');
        } else {
            setTrades([currentTrade, ...trades]);
            toast.success('Trade added successfully');
        }
        setShowModal(false);
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>Global Trade History | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Global Trade History</h1>
                        <p className="mb-0 text-muted fs-13">View and manage all trading activities.</p>
                    </div>
                    <button className="btn btn-primary" onClick={handleAdd}>
                        <i className="bx bx-plus me-1"></i> Add Manual Trade
                    </button>
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
                                            <th>Actions</th>
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
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <button className="btn btn-icon btn-sm btn-info-light" onClick={() => handleEdit(trade)}><i className="ri-edit-line"></i></button>
                                                        <button className="btn btn-icon btn-sm btn-danger-light" onClick={() => handleDelete(trade.id)}><i className="ri-delete-bin-line"></i></button>
                                                    </div>
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

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{isEditing ? 'Edit Trade' : 'Add Manual Trade'}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">User Name</label>
                                        <input type="text" className="form-control" name="user" value={currentTrade.user} onChange={handleChange} required />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Type</label>
                                            <select className="form-select" name="type" value={currentTrade.type} onChange={handleChange}>
                                                <option value="Buy">Buy</option>
                                                <option value="Sell">Sell</option>
                                                <option value="Copy">Copy</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Asset</label>
                                            <input type="text" className="form-control" name="asset" value={currentTrade.asset} onChange={handleChange} required placeholder="e.g. BTC/USD" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Amount</label>
                                            <input type="text" className="form-control" name="amount" value={currentTrade.amount} onChange={handleChange} required placeholder="$0.00" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">PnL</label>
                                            <input type="text" className="form-control" name="pnl" value={currentTrade.pnl} onChange={handleChange} placeholder="+$0.00" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Status</label>
                                            <select className="form-select" name="status" value={currentTrade.status} onChange={handleChange}>
                                                <option value="Open">Open</option>
                                                <option value="Closed">Closed</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Date</label>
                                            <input type="text" className="form-control" name="date" value={currentTrade.date} onChange={handleChange} placeholder="YYYY-MM-DD HH:MM" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Close</button>
                                    <button type="submit" className="btn btn-primary">{isEditing ? 'Update Trade' : 'Add Trade'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminTradeHistory;
