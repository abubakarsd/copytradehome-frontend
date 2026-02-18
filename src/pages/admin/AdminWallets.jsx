import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminWallets = () => {
    // Initial Mock Data (matching user side + address)
    const [wallets, setWallets] = useState([
        { id: 1, name: 'USDC (TRC20)', code: 'USDC', chain: 'TRC20', address: 'TDUCHcHjnX7ZGjMAaXD66b8q8bq1BjjASj', img: '2026-11876038991767488048.jpg', qrCode: 'qr-placeholder.png' },
        { id: 2, name: 'XRP', code: 'XRP', chain: 'Ripple', address: 'rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh', img: '2026-5499334291767488183.jpg', qrCode: 'qr-placeholder.png' },
        { id: 3, name: 'USDT TRC20', code: 'USDT', chain: 'TRC20', address: 'TDUCHcHjnX7ZGjMAaXD66b8q8bq1BjjASj', img: '2026-16096937901767488278.jpg', qrCode: 'qr-placeholder.png' },
        { id: 4, name: 'ETHEREUM', code: 'ETH', chain: 'ERC20', address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', img: '2026-4889608771767487892.jpg', qrCode: 'qr-placeholder.png' },
        { id: 5, name: 'BITCOIN', code: 'BTC', chain: 'Bitcoin', address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', img: '2026-273381261767488466.jpg', qrCode: 'qr-placeholder.png' },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        chain: '',
        address: '',
        img: '',
        qrCodeFile: null
    });

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this wallet?')) {
            setWallets(wallets.filter(w => w.id !== id));
            toast.success('Wallet deleted successfully');
        }
    };

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWallet = {
            id: Date.now(),
            name: formData.name,
            code: formData.code,
            chain: formData.chain,
            address: formData.address,
            img: 'default-crypto.png', // Fallback
            qrCode: formData.qrCodeFile ? URL.createObjectURL(formData.qrCodeFile) : 'qr-placeholder.png'
        };
        setWallets([...wallets, newWallet]);
        setShowModal(false);
        setFormData({ name: '', code: '', chain: '', address: '', img: '', qrCodeFile: null });
        toast.success('Wallet added successfully');
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
                                            <tr key={wallet.id}>
                                                <td>
                                                    <span className="avatar avatar-sm bg-light">
                                                        <img
                                                            src={`/assets/dashboard/images/${wallet.img}`}
                                                            alt={wallet.name}
                                                            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/dashboard/images/default-crypto.png' }}
                                                        />
                                                    </span>
                                                </td>
                                                <td>{wallet.name}</td>
                                                <td><span className="badge bg-info-transparent">{wallet.chain}</span></td>
                                                <td><span className="badge bg-light text-dark">{wallet.code}</span></td>
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
                                                        <button className="btn btn-icon btn-sm btn-danger-light" onClick={() => handleDelete(wallet.id)}><i className="ri-delete-bin-line"></i></button>
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
                                            <input type="text" className="form-control" name="code" value={formData.code} onChange={handleChange} required placeholder="e.g. USDT" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Chain</label>
                                            <input type="text" className="form-control" name="chain" value={formData.chain} onChange={handleChange} required placeholder="e.g. TRC20" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Wallet Address</label>
                                        <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required placeholder="0x..." />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Upload QR Code</label>
                                        <input type="file" className="form-control" name="qrCodeFile" onChange={handleChange} accept="image/*" />
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
