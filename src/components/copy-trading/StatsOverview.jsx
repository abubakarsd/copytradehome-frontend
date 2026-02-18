import React from 'react';

const StatsOverview = () => {
    // Hardcoded stats based on HTML for now, can be made dynamic later
    const stats = [
        {
            title: "Active Traders",
            value: "12",
            icon: "bi bi-people-fill",
            color: "primary"
        },
        {
            title: "Avg. Monthly Return",
            value: "242.42%",
            icon: "bi bi-cash-coin",
            color: "success"
        },
        {
            title: "Avg. Min Investment",
            value: "$35,833.33",
            icon: "bi bi-currency-dollar",
            color: "warning"
        },
        {
            title: "Total Investors",
            value: "391,777",
            icon: "bi bi-person-check-fill",
            color: "info"
        }
    ];

    return (
        <div className="row g-4 mb-5 justify-content-center">
            {stats.map((stat, index) => (
                <div className="col-xl-3 col-md-6" key={index}>
                    <div className="card stats-overview-card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className={`icon-box rounded-3 bg-${stat.color} bg-opacity-10 p-3`}>
                                    <i className={`${stat.icon} text-${stat.color} fs-4`}></i>
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-1 text-muted">{stat.title}</h6>
                                    <h3 className="mb-0">{stat.value}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsOverview;
