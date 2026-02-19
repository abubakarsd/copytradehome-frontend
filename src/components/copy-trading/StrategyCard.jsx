import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const StrategyCard = ({ strategy }) => {
    const chartOptions = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#2ab57d']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [0, 100]
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: ['#2ab57d']
    };

    const chartSeries = [{
        name: 'Return',
        data: strategy.chartData || [10, 20, 15, 25, 30, 28, 40] // Fallback mock data
    }];

    // Helper to determine risk badge color
    const getRiskBadgeColor = (risk) => {
        if (risk >= 8) return 'bg-danger';
        if (risk >= 5) return 'bg-warning';
        return 'bg-success'; // Low risk
    };

    return (
        <div className="card custom-card overflow-hidden h-100">
            <div className="card-body">
                <div className="d-flex align-items-center mb-4 flex-wrap">
                    <div className="d-flex align-items-center">
                        <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                <img
                                    src={strategy.avatar?.startsWith('data:image') || strategy.avatar?.startsWith('http') ? strategy.avatar : `/assets/dashboard/images/${strategy.avatar}`}
                                    alt={strategy.name}
                                    onError={(e) => { e.target.error = null; e.target.src = '/assets/dashboard/images/21.jpg' }}
                                />
                            </span>
                        </div>
                        <div className="mb-0">
                            <div className="fw-medium">
                                {strategy.name}
                            </div>
                            <div className="text-muted small">
                                {strategy.handle}
                            </div>
                        </div>
                    </div>
                    <div className="ms-auto text-end">
                        <span className={`badge ${getRiskBadgeColor(strategy.risk)} text-white mb-2`}>
                            Risk: {strategy.risk}/10
                        </span>
                        <div className="apex-charts" style={{ minHeight: '40px' }}>
                            <Chart options={chartOptions} series={chartSeries} type="area" height={40} width={100} />
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-end mb-3">
                    <div>
                        <p className="mb-1 text-muted small">Monthly Return</p>
                        <p className="fs-20 mb-0 fw-medium lh-1 text-success">
                            +{strategy.monthlyReturn}%
                        </p>
                    </div>
                    <div className="ms-auto text-end">
                        <p className="mb-1 text-muted small">Min Investment</p>
                        <p className="mb-0 fw-medium">${strategy.minInvestment.toLocaleString()}</p>
                        <p className="mb-0 text-muted small">
                            Investors: {strategy.investors.toLocaleString()}
                        </p>
                    </div>
                </div>

                <p className="text-muted small mb-3">
                    {strategy.description}
                </p>

                <div className="d-grid gap-2">
                    <Link to={`/dashboard/copy-trading/view/${strategy.id}`} className="btn btn-primary btn-wave waves-effect waves-light">
                        View Strategy
                    </Link>
                </div>
            </div>

            <div className="card-footer p-0">
                <div className="list-group border-0 list-group-flush">
                    <div className="list-group-item">
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <div className="mb-0 font-weight-semibold text-dark">
                                Leverage & Fees
                                <span className="badge bg-primary-transparent ms-2 text-primary">
                                    {strategy.leverage} / {strategy.fees}
                                </span>
                            </div>
                            <p className="text-muted mb-0 font-weight-normal fs-13">
                                Duration: {strategy.duration}
                            </p>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <div className="mb-0 font-weight-semibold text-dark">
                                Activity
                                <span className="badge bg-secondary-transparent ms-2">
                                    {strategy.activity}
                                </span>
                            </div>
                            <p className="text-muted mb-0 fs-13">
                                Total Followers: {strategy.totalFollowers.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategyCard;
