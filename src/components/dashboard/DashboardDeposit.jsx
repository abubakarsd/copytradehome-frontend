import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import DepositDetailsModal from './DepositDetailsModal';
import api from '../../utils/axios';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';


const DashboardDeposit = () => {
    const [amount, setAmount] = useState('');
    const [selectedWallet, setSelectedWallet] = useState('USDCTrc20_');
    const [loading, setLoading] = useState(false);
    const [showBalance, setShowBalance] = useState(false);
    const [chartPeriod, setChartPeriod] = useState(30);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleViewDetails = (txnData) => {
        setModalData(txnData);
        setIsDetailsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            const closeBtn = document.querySelector('#topUpModal .btn-close');
            if (closeBtn) closeBtn.click();

            // Generate a mock transaction ID
            const mockTxId = 'CNX-D-' + Math.floor(Math.random() * 1000000000000000);

            // Open details modal
            handleViewDetails({
                id: mockTxId,
                transactionId: 'TXN-' + Math.floor(Math.random() * 1000000),
                status: 'Pending',
                from: 'Brian kim',
                email: 'bolajiakinduri@gmail.com',
                phone: '2456780975',
                date: new Date().toLocaleString(),
                method: wallets.find(w => w.id === selectedWallet)?.name || 'Crypto',
                amount: amount,
                walletType: wallets.find(w => w.id === selectedWallet)?.name || 'USDT TRC20',
                walletAddress: 'TDUCHcHjnX7ZGjMAaXD66b8q8bq1BjjASj'
            });

            setAmount('');
        }, 1500);
    };

    const toggleBalance = (e) => {
        e.preventDefault();
        setShowBalance(!showBalance);
    };

    const handleQuickDeposit = (walletId) => {
        setSelectedWallet(walletId);
    };

    // Chart Options
    const chartOptions = {
        chart: {
            height: 300,
            type: 'area',
            toolbar: { show: false },
            animations: { enabled: true }
        },
        stroke: { width: [2, 3], curve: 'smooth' },
        fill: {
            type: ['gradient', 'solid'],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.35,
                opacityTo: 0.05,
                stops: [20, 100, 100]
            }
        },
        colors: ['#aa3e16', '#2ab57d'],
        dataLabels: { enabled: false },
        xaxis: {
            type: 'datetime',
            categories: [
                "2026-01-01", "2026-01-05", "2026-01-10", "2026-01-15", "2026-01-20", "2026-01-25", "2026-01-30"
            ],
            labels: { style: { colors: '#8e8da4' }, format: 'dd MMM' },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            labels: {
                formatter: (val) => '$' + val.toFixed(2),
                style: { colors: '#8e8da4' }
            }
        },
        grid: { borderColor: '#f1f1f1', padding: { bottom: 5 } },
        legend: { position: 'top', horizontalAlign: 'right', offsetY: -15, labels: { colors: '#8e8da4' } }
    };

    const chartSeries = [
        { name: 'Daily Deposits', type: 'area', data: [0, 50, 100, 50, 200, 150, 300] },
        { name: 'Account Value', type: 'line', data: [1000, 1050, 1150, 1200, 1400, 1550, 1850] }
    ];

    const [wallets, setWallets] = useState([]);

    // Fetch system wallets
    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const { data } = await api.get('/wallet/system-wallets');
                if (data.success) {
                    // Map backend data to frontend structure if needed, or just use as is
                    // Backend: { name, currency, chain, address, icon, qrCode }
                    // Frontend expects: { id, name, code, img }
                    const mapped = data.data.map(w => ({
                        id: w._id,
                        name: w.name,
                        code: w.currency,
                        chain: w.chain, // Keep chain info
                        address: w.address,
                        qrCode: w.qrCode,
                        img: w.icon
                    }));
                    setWallets(mapped);
                    if (mapped.length > 0) setSelectedWallet(mapped[0].id);
                }
            } catch (error) {
                console.error("Failed to fetch wallets", error);
                toast.error("Failed to load deposit methods");
            }
        };

        fetchWallets();
    }, []);

    return (
        <div className="container-fluid page-container main-body-container">
            {/* Top Header & Breadcrumbs */}
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <h1 className="page-title fw-medium fs-18 mb-0">Wallet</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                        <li className="breadcrumb-item"><Link to="/dashboard/crypto">Crypto</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Wallet</li>
                    </ol>
                </div>
                <div className="mt-3">
                    <button
                        type="button"
                        className="btn btn-primary btn-wave waves-effect waves-light"
                        data-bs-toggle="modal"
                        data-bs-target="#topUpModal"
                        onClick={() => setSelectedWallet('USDCTrc20_')}
                    >
                        <i className="bx bx-plus me-1"></i> Deposit Funds
                    </button>
                </div>
            </div>

            {/* Wallet Grid Section */}
            <div className="row">
                {wallets.map((wallet) => (
                    <div className="col-xxl-3 col-xl-6" key={wallet.id}>
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">
                                    {wallet.name} Wallet
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img
                                                    src={wallet.img?.startsWith('data:image') || wallet.img?.startsWith('http') ? wallet.img : (wallet.img && /\d{10,}/.test(wallet.img) ? `${API_URL}/images/${wallet.img}` : `/assets/dashboard/images/${wallet.img}`)}
                                                    alt={wallet.name}
                                                    onError={(e) => { e.target.error = null; e.target.src = '/assets/dashboard/images/tether-usdt-logo.svg' }}
                                                />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available Balance</span>
                                            <span className="fw-medium"><span className="text-muted">—</span></span>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <span className="fw-medium d-block">{wallet.code}</span>
                                        <span className="d-block text-muted fs-12 fw-normal">Wallet Code</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-w-lg btn-wave waves-effect waves-light"
                                        data-bs-toggle="modal"
                                        data-bs-target="#topUpModal"
                                        onClick={() => handleQuickDeposit(wallet.id)}
                                    >
                                        Deposit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* End Wallet Grid */}

            <hr className="my-4" />

            {/* Wallet Dashboard Section */}
            <div className="row align-items-center mb-5">
                <div className="col-lg-6">
                    <h1 className="page-title fw-medium fs-18 mb-0">Wallet Dashboard</h1>
                    <p className="text-muted">Manage your deposits and track your financial growth</p>
                </div>
            </div>

            <div className="row g-4">
                {/* Left Column - Main Content */}
                <div className="col-xxl-8">
                    {/* Balance Card */}
                    <div className="card shadow-sm mb-4 overflow-hidden">
                        <div className="card-body p-4">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h5 className="text-muted mb-1">Total Balance</h5>
                                    <div className="d-flex align-items-center">
                                        {showBalance ? (
                                            <h2 className="fw-bold mb-0">$0.00</h2>
                                        ) : (
                                            <h2 className="fw-bold mb-0">********</h2>
                                        )}
                                        <a href="#" className="ms-2 text-muted" onClick={toggleBalance}>
                                            <i className={`bx bx-${showBalance ? 'hide' : 'show'} fs-5`}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-3 mt-lg-0">
                                    <div className="row g-2">
                                        <div className="col-6">
                                            <div className="d-flex p-3 rounded bg-light">
                                                <div className="icon-box bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>
                                                    <i className="bx bx-down-arrow-circle text-primary fs-4"></i>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted fs-sm">Deposits</span>
                                                    <span className="fw-bold text-muted">$1,248.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex p-3 rounded bg-light">
                                                <div className="icon-box bg-success-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>
                                                    <i className="bx bx-trending-up text-success fs-4"></i>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted fs-sm">Growth</span>
                                                    <span className="fw-bold text-muted">+0.0%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Performance Chart */}
                    <div className="card shadow-sm mb-4" style={{ height: '400px' }}>
                        <div className="card-header bg-transparent pt-4 pb-0">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h5 className="mb-1">Performance Overview</h5>
                                    <p className="text-muted mb-0 small">Track your deposit and growth trends</p>
                                </div>
                                <div className="chart-period-selector">
                                    <div className="btn-group" role="group">
                                        {[7, 30, 90].map(days => (
                                            <button
                                                key={days}
                                                type="button"
                                                className={`btn btn-sm btn-light ${chartPeriod === days ? 'active' : ''}`}
                                                onClick={() => setChartPeriod(days)}
                                            >
                                                {days}D
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <Chart options={chartOptions} series={chartSeries} type="area" height={300} />
                        </div>
                    </div>

                    {/* Transactions */}
                    <div className="card shadow-sm">
                        <div className="card-header bg-transparent pt-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Transaction History</h5>
                                <div className="dropdown">
                                    <button className="btn btn-sm btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        <i className="bx bx-filter-alt me-1"></i>Filter
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">All Transactions</a></li>
                                        <li><a className="dropdown-item" href="#">Pending</a></li>
                                        <li><a className="dropdown-item" href="#">Approved</a></li>
                                        <li><a className="dropdown-item" href="#">Disapproved</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="ps-4">Transaction</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th className="text-end pe-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="ps-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-sm bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                        <i className="bx bx-wallet text-primary"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">BRIAN KIM</h6>
                                                        <small className="text-muted">ETH</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>2026-01-31 12:22:47</td>
                                            <td><span className="fw-semibold text-dark">$50.00</span></td>
                                            <td><span className="badge bg-warning-subtle text-warning">Pending</span></td>
                                            <td className="text-end pe-4">
                                                <div className="dropdown">
                                                    <button className="btn btn-sm btn-icon btn-light" type="button" data-bs-toggle="dropdown">
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><button className="dropdown-item border-0 bg-transparent" onClick={() => handleViewDetails({
                                                            id: 'CNX-D-94217660293801',
                                                            transactionId: 'TXN-71pwa07of',
                                                            status: 'Pending',
                                                            from: 'Brian kim',
                                                            email: 'bolajiakinduri@gmail.com',
                                                            phone: '2456780975',
                                                            date: '2026-01-31 12:22:47',
                                                            method: 'ETH',
                                                            amount: '50.00',
                                                            walletType: 'ETHEREUM',
                                                            walletAddress: '0x1234567890abcdef1234567890abcdef12345678'
                                                        })}><i className="bx bx-show me-2"></i>View Details</button></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ps-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-sm bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                        <i className="bx bx-wallet text-primary"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">BRIAN KIM</h6>
                                                        <small className="text-muted">USDT</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>2026-01-20 14:40:39</td>
                                            <td><span className="fw-semibold text-dark">$500.00</span></td>
                                            <td><span className="badge bg-warning-subtle text-warning">Pending</span></td>
                                            <td className="text-end pe-4">
                                                <div className="dropdown">
                                                    <button className="btn btn-sm btn-icon btn-light" type="button" data-bs-toggle="dropdown">
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><button className="dropdown-item border-0 bg-transparent" onClick={() => handleViewDetails({
                                                            id: 'CNX-D-94217660293801',
                                                            transactionId: 'TXN-71pwa07of',
                                                            status: 'Pending',
                                                            from: 'Brian kim',
                                                            email: 'bolajiakinduri@gmail.com',
                                                            phone: '2456780975',
                                                            date: '2026-01-31 12:22:47',
                                                            method: 'ETH',
                                                            amount: '50.00',
                                                            walletType: 'ETHEREUM',
                                                            walletAddress: '0x1234567890abcdef1234567890abcdef12345678'
                                                        })}><i className="bx bx-show me-2"></i>View Details</button></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ps-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-sm bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                        <i className="bx bx-wallet text-primary"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">BRIAN KIM</h6>
                                                        <small className="text-muted">USDT</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>2026-01-20 14:33:12</td>
                                            <td><span className="fw-semibold text-dark">$698.00</span></td>
                                            <td><span className="badge bg-warning-subtle text-warning">Pending</span></td>
                                            <td className="text-end pe-4">
                                                <div className="dropdown">
                                                    <button className="btn btn-sm btn-icon btn-light" type="button" data-bs-toggle="dropdown">
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><button className="dropdown-item border-0 bg-transparent" onClick={() => handleViewDetails({
                                                            id: 'CNX-D-94217660293801',
                                                            transactionId: 'TXN-71pwa07of',
                                                            status: 'Pending',
                                                            from: 'Brian kim',
                                                            email: 'bolajiakinduri@gmail.com',
                                                            phone: '2456780975',
                                                            date: '2026-01-31 12:22:47',
                                                            method: 'ETH',
                                                            amount: '50.00',
                                                            walletType: 'ETHEREUM',
                                                            walletAddress: '0x1234567890abcdef1234567890abcdef12345678'
                                                        })}><i className="bx bx-show me-2"></i>View Details</button></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="col-xxl-4">
                    <div className="vstack gap-4">
                        {/* Quick Stats */}
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent pt-4">
                                <h5 className="mb-0">Quick Stats</h5>
                            </div>
                            <div className="card-body">
                                <div className="row g-4">
                                    <div className="col-6 mb-3">
                                        <div className="card border bg-light h-100">
                                            <div className="card-body p-3">
                                                <div className="d-flex align-items-center mb-2">
                                                    <div className="avatar-sm bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                        <i className="bx bx-dollar text-primary"></i>
                                                    </div>
                                                    <h6 className="mb-0">Deposited</h6>
                                                </div>
                                                <h5 className="fw-bold mb-0">$1,248.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <div className="card border bg-light h-100">
                                            <div className="card-body p-3">
                                                <div className="d-flex align-items-center mb-2">
                                                    <div className="avatar-sm bg-success-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                        <i className="bx bx-check-circle text-success"></i>
                                                    </div>
                                                    <h6 className="mb-0">Approved</h6>
                                                </div>
                                                <h5 className="fw-bold mb-0">$0.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <div className="card border bg-light h-100">
                                            <div className="card-body p-3">
                                                <div className="d-flex align-items-center mb-2">
                                                    <div className="avatar-sm bg-warning-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                        <i className="bx bx-hourglass text-warning"></i>
                                                    </div>
                                                    <h6 className="mb-0">Pending</h6>
                                                </div>
                                                <h5 className="fw-bold mb-0">$1,248.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <div className="card border bg-light h-100">
                                            <div className="card-body p-3">
                                                <div className="d-flex align-items-center mb-2">
                                                    <div className="avatar-sm bg-info-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                        <i className="bx bx-wallet text-info"></i>
                                                    </div>
                                                    <h6 className="mb-0">Transactions</h6>
                                                </div>
                                                <h5 className="fw-bold mb-0">3</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pending Deposits */}
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent pt-4">
                                <h5 className="mb-0">Pending Deposits</h5>
                            </div>
                            <div className="card-body p-0">
                                <div className="list-group list-group-flush">
                                    <div className="list-group-item border-bottom py-3">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-sm bg-warning-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                <i className="bx bx-hourglass text-warning"></i>
                                            </div>
                                            <div className="flex-grow-1 min-width-0">
                                                <div className="d-flex justify-content-between align-items-center mb-1">
                                                    <h6 className="mb-0 text-truncate">BRIAN KIM</h6>
                                                    <span className="text-warning fw-semibold">$50.00</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted">2026-01-31 12:22:47</small>
                                                    <button onClick={() => handleViewDetails({
                                                        id: 'CNX-D-PENDING',
                                                        transactionId: 'TXN-PENDING',
                                                        status: 'Pending',
                                                        from: 'Brian kim',
                                                        email: 'bolajiakinduri@gmail.com',
                                                        phone: '2456780975',
                                                        date: '2026-01-31 12:22:47',
                                                        method: 'USDT',
                                                        amount: '50.00',
                                                        walletType: 'USDT TRC20',
                                                        walletAddress: 'TDUCHcHjnX7ZGjMAaXD66b8q8bq1BjjASj'
                                                    })} className="btn btn-sm btn-link p-0 border-0">View</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item border-bottom py-3">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-sm bg-warning-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                <i className="bx bx-hourglass text-warning"></i>
                                            </div>
                                            <div className="flex-grow-1 min-width-0">
                                                <div className="d-flex justify-content-between align-items-center mb-1">
                                                    <h6 className="mb-0 text-truncate">BRIAN KIM</h6>
                                                    <span className="text-warning fw-semibold">$500.00</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted">2026-01-20 14:40:39</small>
                                                    <button onClick={() => handleViewDetails({
                                                        id: 'CNX-D-PENDING',
                                                        transactionId: 'TXN-PENDING',
                                                        status: 'Pending',
                                                        from: 'Brian kim',
                                                        email: 'bolajiakinduri@gmail.com',
                                                        phone: '2456780975',
                                                        date: '2026-01-31 12:22:47',
                                                        method: 'USDT',
                                                        amount: '50.00',
                                                        walletType: 'USDT TRC20',
                                                        walletAddress: 'TDUCHcHjnX7ZGjMAaXD66b8q8bq1BjjASj'
                                                    })} className="btn btn-sm btn-link p-0 border-0">View</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item border-bottom py-3">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-sm bg-warning-subtle rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                <i className="bx bx-hourglass text-warning"></i>
                                            </div>
                                            <div className="flex-grow-1 min-width-0">
                                                <div className="d-flex justify-content-between align-items-center mb-1">
                                                    <h6 className="mb-0 text-truncate">BRIAN KIM</h6>
                                                    <span className="text-warning fw-semibold">$698.00</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted">2026-01-20 14:33:12</small>
                                                    <a href="#" className="btn btn-sm btn-link p-0">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent pt-4">
                                <h5 className="mb-0">Payment Methods</h5>
                            </div>
                            <div className="card-body">
                                {wallets.map((wallet) => (
                                    <div className="d-flex align-items-center p-3 mb-2 rounded bg-light" key={wallet.id}>
                                        <div className="avatar-sm bg-white rounded-circle d-flex align-items-center justify-content-center me-3 border" style={{ width: '40px', height: '40px' }}>
                                            <img
                                                src={wallet.img?.startsWith('data:image') || wallet.img?.startsWith('http') ? wallet.img : (wallet.img?.includes('-') ? `http://localhost:5000/api/images/${wallet.img}` : `/assets/dashboard/images/${wallet.img}`)}
                                                alt={wallet.name}
                                                style={{ width: '40px', height: '40px' }}
                                                onError={(e) => { e.target.error = null; e.target.src = '/assets/dashboard/images/tether-usdt-logo.svg' }}
                                            />
                                        </div>
                                        <div>
                                            <h6 className="mb-1">{wallet.name}</h6>
                                            <p className="text-muted small mb-0">{wallet.code}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Deposit Modal */}
            <div className="modal fade" id="topUpModal" tabIndex="-1" aria-labelledby="topUpModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title text-white" id="topUpModalLabel">
                                <i className="bx bx-wallet me-2"></i>Fund Your Account
                            </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <form onSubmit={handleSubmit} className="vstack gap-4">
                                <div className="mb-4">
                                    <label htmlFor="depositAmount" className="form-label fw-medium">Deposit Amount</label>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">$</span>
                                        <input
                                            type="number"
                                            id="depositAmount"
                                            step="0.01"
                                            min="0"
                                            className="form-control form-control-lg fw-bold"
                                            placeholder="0.00"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <small className="text-muted">Enter the amount you want to fund your account with</small>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="paymentMethod" className="form-label fw-medium">Payment Method</label>
                                    <select
                                        className="form-select"
                                        id="paymentMethod"
                                        value={selectedWallet}
                                        onChange={(e) => setSelectedWallet(e.target.value)}
                                        required
                                    >
                                        {wallets.map(w => (
                                            <option key={w.id} value={w.id}>{w.name} - {w.code}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="alert alert-info d-flex mt-3" role="alert">
                                    <i className="bx bx-info-circle me-2 fs-5"></i>
                                    <div>
                                        <small>
                                            Deposits are typically processed within 24 hours of confirmation.
                                            You'll receive a notification once your deposit is approved.
                                        </small>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg w-100 mt-3" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bx bx-check me-2"></i>Proceed with Deposit
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal */}

            <DepositDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                depositData={modalData}
            />
        </div>
    );
};

export default DashboardDeposit;
