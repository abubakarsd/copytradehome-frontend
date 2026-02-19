import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';

const AdminSidebar = () => {
    const { logout } = useAdminAuth();
    const location = useLocation();
    const { pathname } = location;

    const isActive = (path) => pathname === path || pathname.startsWith(path + '/');

    return (
        <aside className="app-sidebar sticky sticky-pin" id="sidebar">
            <div className="main-sidebar-header">
                <a href="/admin" className="header-logo">
                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="desktop-logo" />
                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="toggle-dark" />
                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="desktop-dark" />
                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="toggle-logo" />
                </a>
            </div>

            <div className="main-sidebar" id="sidebar-scroll">
                <nav className="main-menu-container nav nav-pills flex-column sub-open active open">
                    <ul className="main-menu" style={{ marginLeft: '0', marginRight: '0' }}>
                        <li className="slide__category">
                            <span className="category-name">Main</span>
                        </li>

                        <li className="slide">
                            <Link to="/master-key" className={`side-menu__item ${isActive('/master-key') && !isActive('/master-key/') ? 'active' : ''}`}>
                                <i className="bx bx-home-circle side-menu__icon"></i>
                                <span className="side-menu__label">Dashboard</span>
                            </Link>
                        </li>

                        <li className="slide__category">
                            <span className="category-name">Management</span>
                        </li>

                        <li className="slide">
                            <Link to="/master-key/users" className={`side-menu__item ${isActive('/master-key/users') ? 'active' : ''}`}>
                                <i className="bx bx-user side-menu__icon"></i>
                                <span className="side-menu__label">Users</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/master-key/deposits" className={`side-menu__item ${isActive('/master-key/deposits') ? 'active' : ''}`}>
                                <i className="bx bx-money side-menu__icon"></i>
                                <span className="side-menu__label">Deposits</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/master-key/withdrawals" className={`side-menu__item ${isActive('/master-key/withdrawals') ? 'active' : ''}`}>
                                <i className="bx bx-up-arrow-circle side-menu__icon"></i>
                                <span className="side-menu__label">Withdrawals</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/master-key/wallets" className={`side-menu__item ${isActive('/master-key/wallets') ? 'active' : ''}`}>
                                <i className="bx bx-wallet side-menu__icon"></i>
                                <span className="side-menu__label">System Wallets</span>
                            </Link>
                        </li>

                        <li className="slide__category">
                            <span className="category-name">Trading</span>
                        </li>

                        <li className="slide">
                            <Link to="/master-key/copy-trading" className={`side-menu__item ${isActive('/master-key/copy-trading') ? 'active' : ''}`}>
                                <i className="bx bx-copy-alt side-menu__icon"></i>
                                <span className="side-menu__label">Copy Trading</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/master-key/trade-history" className={`side-menu__item ${isActive('/master-key/trade-history') ? 'active' : ''}`}>
                                <i className="bx bx-history side-menu__icon"></i>
                                <span className="side-menu__label">Trade History</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/master-key/signals" className={`side-menu__item ${isActive('/master-key/signals') ? 'active' : ''}`}>
                                <i className="bx bx-signal-4 side-menu__icon"></i>
                                <span className="side-menu__label">Signals</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <a href="#" className="side-menu__item" onClick={(e) => { e.preventDefault(); logout(); }}>
                                <i className="bx bx-log-out side-menu__icon"></i>
                                <span className="side-menu__label">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default AdminSidebar;
