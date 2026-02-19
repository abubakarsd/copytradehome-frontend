import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCopyTradingHistory = () => {
    // Mock Data for Copy Trading History
    const historyData = [
        { id: '#CT5214', trader: 'Dr. Profit Premium', investment: '$500', pnl: '+$125.00', roi: '+25%', status: 'Completed', date: 'Oct 24, 2025' },
        { id: '#CT5213', trader: 'LIMITLE$$', investment: '$250', pnl: '-$12.50', roi: '-5%', status: 'Completed', date: 'Oct 20, 2025' },
        { id: '#CT5212', trader: 'FUTURES ONE', investment: '$1000', pnl: '+$350.00', roi: '+35%', status: 'Completed', date: 'Oct 15, 2025' },
        { id: '#CT5211', trader: 'Call to Leap', investment: '$300', pnl: '+$45.00', roi: '+15%', status: 'Completed', date: 'Oct 10, 2025' },
        { id: '#CT5210', trader: 'Gold Room', investment: '$150', pnl: '+$10.00', roi: '+6.67%', status: 'Completed', date: 'Oct 05, 2025' },
    ];

    return (
        <>
            <div className="container-fluid page-container main-body-container">
                {/* Page Header */}
                <div className="page-header-breadcrumb mb-3">
                    <div className="d-flex align-center justify-content-between flex-wrap">
                        <h1 className="page-title fw-medium fs-18 mb-0">Copy Trading History</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#" onClick={(e) => e.preventDefault()}>Dashboards</a></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/copy-trading">Copy Trading</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">History</li>
                        </ol>
                    </div>
                </div>

                {/* History Table */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">
                                    History
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <button className="btn btn-sm btn-primary-light">
                                        <i className="ri-download-line align-middle me-1"></i> Download
                                    </button>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Data ID</th>
                                                <th scope="col">Expert Trader</th>
                                                <th scope="col">Investment</th>
                                                <th scope="col">P&L ($)</th>
                                                <th scope="col">ROI (%)</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {historyData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <span className="fw-semibold text-primary">{item.id}</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded bg-light">
                                                                <i className="bx bx-user text-muted fs-14"></i>
                                                            </span>
                                                            <span className="fw-semibold">{item.trader}</span>
                                                        </div>
                                                    </td>
                                                    <td>{item.investment}</td>
                                                    <td>
                                                        <span className={item.pnl.startsWith('+') ? 'text-success' : 'text-danger'}>
                                                            {item.pnl}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${item.roi.startsWith('+') ? 'bg-success-transparent' : 'bg-danger-transparent'}`}>
                                                            {item.roi}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-light text-default">{item.status}</span>
                                                    </td>
                                                    <td>{item.date}</td>
                                                </tr>
                                            ))}
                                            {historyData.length === 0 && (
                                                <tr>
                                                    <td colSpan="7" className="text-center py-5">
                                                        <p className="mb-0 text-muted">No copy trading history found.</p>
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
                                        Showing {historyData.length} Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="pagination mb-0">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                                        Prev
                                                    </a>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="#" onClick={(e) => e.preventDefault()}>1</a></li>
                                                <li className="page-item">
                                                    <a className="page-link text-primary" href="#" onClick={(e) => e.preventDefault()}>
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
        </>
    );
};

export default DashboardCopyTradingHistory;
