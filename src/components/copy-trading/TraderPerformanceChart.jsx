import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const TraderPerformanceChart = () => {
    const [period, setPeriod] = useState('year');

    const options = {
        chart: {
            type: 'area',
            height: 400,
            toolbar: {
                show: false
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.35,
                opacityTo: 0.05,
                stops: [0, 100]
            }
        },
        colors: ['#2ab57d'],
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: '#8e8da4'
                },
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM yyyy',
                    day: 'dd MMM'
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return '$' + val.toFixed(2);
                },
                style: {
                    colors: '#8e8da4'
                }
            }
        },
        tooltip: {
            shared: true,
            y: {
                formatter: function (val) {
                    const color = val >= 0 ? 'success' : 'danger';
                    // We can't render HTML directly in formatter return string for ApexCharts tooltip usually in standard usage, 
                    // but ApexCharts supports string return. The custom HTML class handling is more complex.
                    // For simplicity, we just return the string.
                    return `$${val.toFixed(2)}`;
                }
            },
            x: {
                format: 'dd MMM yyyy'
            }
        },
        grid: {
            borderColor: '#f1f1f1',
            padding: {
                bottom: 5
            }
        },
        markers: {
            size: 4,
            colors: ['#2ab57d'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 6
            }
        }
    };

    // Mock data generator based on period
    const generateData = (p) => {
        const data = [];
        const now = new Date();
        let points = 12;
        if (p === 'week') points = 7;
        if (p === 'month') points = 30;

        for (let i = 0; i < points; i++) {
            const date = new Date(now);
            if (p === 'week') date.setDate(date.getDate() - (points - i));
            if (p === 'month') date.setDate(date.getDate() - (points - i));
            if (p === 'year') date.setMonth(date.getMonth() - (points - i));

            data.push({
                x: date.getTime(),
                y: Math.abs(Math.random() * 5 + i * 0.2).toFixed(2) // Mock upward trend
            });
        }
        return data;
    };

    const series = [{
        name: 'Profit/Loss',
        data: generateData(period)
    }];

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header bg-transparent border-0 pt-4 pb-0">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h5 className="mb-1">Trading Performance</h5>
                        <p className="text-muted mb-0 small">Profit/Loss Analysis</p>
                    </div>
                    <div className="chart-period-selector">
                        <div className="btn-group" role="group" aria-label="Chart period selector">
                            <button
                                type="button"
                                className={`btn btn-sm btn-light ${period === 'week' ? 'active' : ''}`}
                                onClick={() => setPeriod('week')}
                            >
                                Week
                            </button>
                            <button
                                type="button"
                                className={`btn btn-sm btn-light ${period === 'month' ? 'active' : ''}`}
                                onClick={() => setPeriod('month')}
                            >
                                Month
                            </button>
                            <button
                                type="button"
                                className={`btn btn-sm btn-light ${period === 'year' ? 'active' : ''}`}
                                onClick={() => setPeriod('year')}
                            >
                                Year
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div id="tradingPerformanceChart" style={{ minHeight: '415px' }}>
                    <Chart options={options} series={series} type="area" height={400} />
                </div>
            </div>
        </div>
    );
};

export default TraderPerformanceChart;
