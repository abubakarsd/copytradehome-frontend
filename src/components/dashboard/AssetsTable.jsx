import React, { useState } from 'react';

const AssetsTable = () => {
    const [activeTab, setActiveTab] = useState('stocks'); // 'stocks' or 'crypto'
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Mock Data
    const stocksData = [
        { symbol: 'AAPL', shares: 10, cost: '$1,500.00', profit: '$250.00' },
        { symbol: 'GOOGL', shares: 5, cost: '$800.00', profit: '$120.00' },
        { symbol: 'TSLA', shares: 20, cost: '$4,000.00', profit: '-$500.00' },
        { symbol: 'MSFT', shares: 15, cost: '$3,200.00', profit: '$400.00' },
        { symbol: 'AMZN', shares: 8, cost: '$1,100.00', profit: '$150.00' },
        { symbol: 'NVDA', shares: 12, cost: '$2,400.00', profit: '$800.00' },
    ];

    const cryptoData = [
        { symbol: 'BTC', amount: '0.25', cost: '$12,000.00', profit: '$3,000.00' },
        { symbol: 'ETH', amount: '5.0', cost: '$9,000.00', profit: '$1,500.00' },
        { symbol: 'SOL', amount: '100', cost: '$2,500.00', profit: '$800.00' },
        { symbol: 'DOGE', amount: '10000', cost: '$800.00', profit: '-$100.00' },
    ];

    const currentData = activeTab === 'stocks' ? stocksData : cryptoData;
    const totalItems = currentData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const displayedData = currentData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="row mb-4">
            <div className="col-xl-12">
                <div className="card custom-card">
                    <div className="card-header justify-content-between align-items-center">
                        <div className="card-title mb-0">Trades</div>
                        <ul className="nav nav-tabs card-header-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'stocks' ? 'active' : ''}`}
                                    onClick={() => { setActiveTab('stocks'); setCurrentPage(1); }}
                                >
                                    Stocks
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'crypto' ? 'active' : ''}`}
                                    onClick={() => { setActiveTab('crypto'); setCurrentPage(1); }}
                                >
                                    Crypto
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            <div>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Search by symbol or name"
                                />
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary btn-sm">
                                    <i className="ri-search-line me-1"></i> Search
                                </button>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th>Symbol</th>
                                        <th>{activeTab === 'stocks' ? 'Total Shares' : 'Total Amount'}</th>
                                        <th>Cost of Purchase</th>
                                        <th>Profit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedData.length > 0 ? (
                                        displayedData.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm p-1 bg-light me-2">
                                                            {/* Placeholder for asset icon */}
                                                            <i className="bx bx-dollar"></i>
                                                        </span>
                                                        <span className="fw-semibold">{item.symbol}</span>
                                                    </div>
                                                </td>
                                                <td>{activeTab === 'stocks' ? item.shares : item.amount}</td>
                                                <td>{item.cost}</td>
                                                <td className={item.profit.startsWith('-') ? 'text-danger' : 'text-success'}>
                                                    {item.profit}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center py-4">
                                                No {activeTab} positions found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <div>
                                Showing {totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}–
                                {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} trades
                            </div>
                            <div className="ms-auto">
                                <nav aria-label="Trades pagination" className="pagination-style-4">
                                    <ul className="pagination mb-0">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link"
                                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            >
                                                Prev
                                            </button>
                                        </li>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                                <button
                                                    className="page-link"
                                                    onClick={() => setCurrentPage(i + 1)}
                                                >
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link text-primary"
                                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            >
                                                Next
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetsTable;
