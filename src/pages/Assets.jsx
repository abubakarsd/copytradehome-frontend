import React from 'react';
import AssetsOverview from '../components/dashboard/AssetsOverview';
import AssetsTable from '../components/dashboard/AssetsTable';

const Assets = () => {
    return (
        <div className="container-fluid page-container main-body-container">
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h1 className="page-title fw-medium fs-18 mb-0">Assets</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Assets
                        </li>
                    </ol>
                </div>
            </div>

            <AssetsOverview />
            <AssetsTable />
        </div>
    );
};

export default Assets;
