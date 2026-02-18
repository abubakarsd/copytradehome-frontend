import React from 'react';

const TraderProfileHeader = ({ trader }) => {
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-xl-12">
                <div className="card custom-card overflow-hidden">
                    <div className="card-body">
                        <div className="row gx-5">
                            {/* Left: Strategy visual & key stats */}
                            <div className="col-xxl-4 col-xl-12 mb-4 mb-xxl-0">
                                <div className="row">
                                    <div className="col-xxl-12 col-sm-12 mb-4">
                                        <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="avatar avatar-xl avatar-rounded bg-white shadow-sm me-3">
                                                    <img src={trader.avatar} alt={trader.name} className="img-fluid" />
                                                </span>
                                                <div>
                                                    <h5 className="fw-semibold mb-1">{trader.name}</h5>
                                                    <p className="mb-0 text-muted small">{trader.handle}</p>
                                                </div>
                                            </div>

                                            <div className="row g-3">
                                                <div className="col-6">
                                                    <div className="nft-assurance text-center p-3 rounded-3 bg-white">
                                                        <p className="mb-1 text-muted fs-11">Monthly Return</p>
                                                        <p className="fs-18 fw-semibold mb-0 text-success">
                                                            +{trader.monthlyReturn}%
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="nft-assurance text-center p-3 rounded-3 bg-white">
                                                        <p className="mb-1 text-muted fs-11">Performance Fee</p>
                                                        <p className="fs-18 fw-semibold mb-0">
                                                            {trader.fees}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="nft-assurance text-center p-3 rounded-3 bg-white">
                                                        <p className="mb-1 text-muted fs-11">Min Investment</p>
                                                        <p className="fs-16 fw-semibold mb-0">
                                                            ${trader.minInvestment ? trader.minInvestment.toLocaleString() : '0'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="nft-assurance text-center p-3 rounded-3 bg-white">
                                                        <p className="mb-1 text-muted fs-11">Active Investors</p>
                                                        <p className="fs-16 fw-semibold mb-0">
                                                            {trader.investors ? trader.investors.toLocaleString() : '0'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-12 col-sm-12 d-md-block d-none">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="fs-15 fw-medium mb-0">Strategy Highlights</div>
                                        </div>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-lg bg-primary-transparent">
                                                            <i className="bi bi-graph-up-arrow text-primary"></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">Max Leverage</span>
                                                        <span className="d-block text-muted fs-13">{trader.maxLeverageText}</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-lg bg-success-transparent">
                                                            <i className="bi bi-wallet2 text-success"></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">Capital Range</span>
                                                        <span className="d-block text-muted fs-13">
                                                            {trader.capitalRangeText}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-lg bg-info-transparent">
                                                            <i className="bi bi-people text-info"></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">Community</span>
                                                        <span className="d-block text-muted fs-13">
                                                            {trader.communityText}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Details, description & meta */}
                            <div className="col-xxl-8 col-xl-12">
                                <div className="row gx-5">
                                    <div className="col-xl-12 mt-xxl-0 mt-3">
                                        <div>
                                            <h4 className="fw-semibold mb-1">{trader.name}</h4>
                                            <div className="fs-13 mb-4 d-flex align-items-center flex-wrap gap-2">
                                                <span className="badge bg-primary-transparent text-primary">
                                                    Copy Trading Strategy
                                                </span>
                                                <span className="fw-medium text-muted">
                                                    <i className="ri-user-star-line text-warning align-middle me-1"></i>
                                                    Managed by {trader.handle}
                                                </span>
                                            </div>

                                            <div className="row mb-4 g-3">
                                                <div className="col-xxl-3 col-xl-12">
                                                    <p className="mb-1 lh-1 fs-11 text-success fw-medium">Estimated Monthly Return</p>
                                                    <h3 className="fw-semibold mb-0 text-success">+{trader.monthlyReturn}%</h3>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <p className="mb-2 fs-15 fw-medium">Min. Capital Required</p>
                                                    <span className="d-block fs-13">
                                                        ${trader.minInvestment ? trader.minInvestment.toLocaleString() : '0'} minimum allocation
                                                    </span>
                                                </div>
                                                <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <p className="mb-2 fs-15 fw-medium">Total Capital Managed</p>
                                                    <span className="d-block fs-13">
                                                        ${trader.totalCapital ? trader.totalCapital.toLocaleString() : '0'} total subscribed volume
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <p className="fs-15 fw-medium mb-1">Strategy Overview :</p>
                                                <p className="text-muted mb-0">
                                                    {trader.description}
                                                </p>
                                            </div>

                                            <div className="mb-4">
                                                <div className="row">
                                                    <div className="col-xl-7">
                                                        <p className="fs-15 fw-medium mb-2">Strategy Details :</p>
                                                        <div className="table-responsive">
                                                            <table className="table table-bordered text-nowrap product-details-table mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row" className="fw-medium">Trader</th>
                                                                        <td>{trader.handle}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" className="fw-medium">Strategy ID</th>
                                                                        <td>{trader.id}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" className="fw-medium">Category / Type</th>
                                                                        <td>Copy Trading • Leverage {trader.leverage}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" className="fw-medium">Active Investors</th>
                                                                        <td>{trader.investors}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" className="fw-medium">Created On</th>
                                                                        <td>
                                                                            Not available
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-5">
                                                        <p className="fs-15 fw-medium mb-2 mt-3 mt-xl-0">Key Features :</p>
                                                        <ul className="mb-0 ps-3">
                                                            <li className="text-muted mb-2">
                                                                <span className="text-default">Return Profile :</span>
                                                                Targeting +{trader.monthlyReturn}% average monthly performance.
                                                            </li>
                                                            <li className="text-muted mb-2">
                                                                <span className="text-default">Risk Level :</span>
                                                                Leverage up to {trader.leverage} with active risk control.
                                                            </li>
                                                            <li className="text-muted mb-2">
                                                                <span className="text-default">Capital Range :</span>
                                                                {trader.capitalRangeText}
                                                            </li>
                                                            <li className="text-muted mb-2">
                                                                <span className="text-default">Fee Structure :</span>
                                                                {trader.fees} performance fee on profits.
                                                            </li>
                                                            <li className="text-muted mb-2">
                                                                <span className="text-default">Followers :</span>
                                                                {trader.investors}+ investors currently copying this strategy.
                                                            </li>
                                                            <li className="text-muted">
                                                                <span className="text-default">Trader Bio :</span>
                                                                {trader.bio}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TraderProfileHeader;
