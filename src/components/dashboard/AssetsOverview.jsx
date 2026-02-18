import React from 'react';
import Chart from 'react-apexcharts';

const AssetsOverview = () => {
    // Mock data for the chart
    const chartOptions = {
        chart: {
            type: 'bar',
            height: 260,
            foreColor: '#adb5bd',
            toolbar: {
                show: true
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Wallet', 'Crypto', 'Stocks', 'Copy Trading'],
            axisBorder: {
                show: true,
                color: '#e0e0e0',
            },
            axisTicks: {
                show: true,
                color: '#e0e0e0',
            }
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return '$' + val.toFixed(0);
                }
            }
        },
        grid: {
            borderColor: '#e0e0e0',
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$' + val.toFixed(2);
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        colors: ['#4b9bff', '#22c55e']
    };

    const chartSeries = [
        {
            name: 'Balance',
            data: [15000, 8500, 12000, 5000] // Mock data
        },
        {
            name: 'Profit',
            data: [1200, 450, 3000, 200] // Mock data
        }
    ];

    const summaryCards = [
        {
            title: 'Wallet Balance',
            balance: '$15,000.00',
            profit: '$1,200.00',
            icon: 'ti-wallet',
            desc: 'Available for trading & withdrawals'
        },
        {
            title: 'Crypto Balance',
            balance: '$8,500.00',
            profit: '$450.00',
            icon: 'ti-chart-line',
            desc: 'Capital allocated to crypto'
        },
        {
            title: 'Stock Balance',
            balance: '$12,000.00',
            profit: '$3,000.00',
            icon: 'ti-building-bank',
            desc: 'Capital invested in stocks'
        },
        {
            title: 'Copy Trading Balance',
            balance: '$5,000.00',
            profit: '$200.00',
            icon: 'ti-users',
            desc: 'Capital in copy trading portfolios'
        }
    ];

    return (
        <>
            {/* Assets vs Profit Chart */}
            <div className="row gy-3 mb-4">
                <div className="col-xl-12">
                    <div className="card custom-card border">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <p className="mb-1 text-muted">Assets Overview</p>
                                    <h5 className="fw-semibold mb-0">Balance vs Profit</h5>
                                </div>
                            </div>
                            <div id="assetsProfitChart" style={{ minHeight: '275px' }}>
                                <Chart options={chartOptions} series={chartSeries} type="bar" height={260} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="row gy-3 mb-4">
                {summaryCards.map((card, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card custom-card border">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="mb-1 text-muted">{card.title}</p>
                                        <h5 className="fw-semibold mb-1">{card.balance}</h5>
                                        <p className="fs-12 mb-4 text-success">Profit: {card.profit}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center flex-wrap gap-3">
                                            <div className="lh-1">
                                                <div className="avatar bg-primary-transparent">
                                                    <i className={`ti ${card.icon} fs-20`}></i>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="text-md mb-1 fw-semibold">{card.balance}</span>
                                                <p className="mb-0 fs-12 text-muted">{card.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AssetsOverview;
