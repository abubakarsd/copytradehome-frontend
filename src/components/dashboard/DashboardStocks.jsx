import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardFooter from './DashboardFooter';

const DashboardStocks = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [exchangeFilter, setExchangeFilter] = useState('');

    const stocks = [
        { id: 37, name: 'Abbott Laboratories', symbol: 'ABT', exchange: 'NYSE', image: 'ABT.png' },
        { id: 9, name: 'Adobe Inc.', symbol: 'ADBE', exchange: 'NASDAQ', image: 'ADBE.png' },
        { id: 15, name: 'Advanced Micro Devices, Inc.', symbol: 'AMD', exchange: 'NASDAQ', image: 'AMD.png' },
        { id: 3, name: 'Alphabet Inc. Class A', symbol: 'GOOGL', exchange: 'NASDAQ', image: 'GOOGL.png' },
        { id: 4, name: 'Amazon.com, Inc.', symbol: 'AMZN', exchange: 'NASDAQ', image: 'AMZN.png' },
        { id: 1, name: 'Apple Inc.', symbol: 'AAPL', exchange: 'NASDAQ', image: 'AAPL.png' },
        { id: 17, name: 'Applied Materials, Inc.', symbol: 'AMAT', exchange: 'NASDAQ', image: 'AMAT.png' },
        { id: 43, name: 'AT&T Inc.', symbol: 'T', exchange: 'NYSE', image: 'T.png' },
        { id: 31, name: 'Bank of America Corporation', symbol: 'BAC', exchange: 'NYSE', image: 'BAC.png' },
        { id: 21, name: 'Broadcom Inc.', symbol: 'AVGO', exchange: 'NASDAQ', image: 'AVGO.png' },
    ];

    const filteredStocks = stocks.filter(stock => {
        const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            stock.symbol.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesExchange = exchangeFilter === '' || stock.exchange === exchangeFilter;
        return matchesSearch && matchesExchange;
    });

    return (
        <div className="container-fluid page-container main-body-container">
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <h1 className="page-title fw-medium fs-18 mb-0">Stocks</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Stocks</li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-xxl-12">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                All Stocks
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        placeholder="Search by name or symbol"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <select
                                        className="form-select form-select-sm"
                                        value={exchangeFilter}
                                        onChange={(e) => setExchangeFilter(e.target.value)}
                                    >
                                        <option value="">All Exchanges</option>
                                        <option value="NASDAQ">NASDAQ</option>
                                        <option value="NYSE">NYSE</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-sm btn-wave waves-effect waves-light">
                                        <i className="ri-search-line me-1"></i> Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Exchange</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredStocks.length > 0 ? (
                                            filteredStocks.map((stock, index) => (
                                                <tr key={stock.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <div className="d-flex align-items-start gap-3">
                                                            <div className="lh-1">
                                                                <span className="avatar avatar-sm">
                                                                    <img src={`/assets/dashboard/images/${stock.image}`} alt={stock.name} className="rounded-circle" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill lh-1">
                                                                <span className="d-block mb-1 fs-14 fw-medium">{stock.name}</span>
                                                                <span className="d-block fs-12 text-muted">{stock.symbol}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{stock.exchange}</td>
                                                    <td>
                                                        <div className="btn-list">
                                                            <Link to={`/dashboard/stocks/${stock.id}`} className="btn btn-sm btn-primary">
                                                                Trade Stock
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4">
                                                    <div className="text-center py-5">
                                                        <img src="/assets/dashboard/images/empty-withdrawal.png" alt="No data" style={{ width: '200px' }} className="mb-3" />
                                                        <p className="text-muted mb-0">No stocks found matching your criteria.</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing {filteredStocks.length} Entries
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#">
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item disabled">
                                                <a className="page-link text-primary" href="#">
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardStocks;
