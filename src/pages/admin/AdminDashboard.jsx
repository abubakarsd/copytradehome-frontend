import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>Admin Dashboard | CopyTradeHome</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Admin Dashboard</h1>
                        <p className="mb-0 text-muted fs-13">Welcome back, Admin.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <p className="mb-0 text-muted fs-12">Total Users</p>
                                    <h5 className="fw-semibold mb-0 mt-1">1,234</h5>
                                </div>
                                <div className="avatar avatar-md bg-primary-transparent">
                                    <i className="bx bx-user fs-20"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <p className="mb-0 text-muted fs-12">Pending Deposits</p>
                                    <h5 className="fw-semibold mb-0 mt-1">12</h5>
                                </div>
                                <div className="avatar avatar-md bg-warning-transparent">
                                    <i className="bx bx-money fs-20"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <p className="mb-0 text-muted fs-12">Pending Withdrawals</p>
                                    <h5 className="fw-semibold mb-0 mt-1">5</h5>
                                </div>
                                <div className="avatar avatar-md bg-danger-transparent">
                                    <i className="bx bx-up-arrow-circle fs-20"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <p className="mb-0 text-muted fs-12">Active Experts</p>
                                    <h5 className="fw-semibold mb-0 mt-1">8</h5>
                                </div>
                                <div className="avatar avatar-md bg-info-transparent">
                                    <i className="bx bx-copy-alt fs-20"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
