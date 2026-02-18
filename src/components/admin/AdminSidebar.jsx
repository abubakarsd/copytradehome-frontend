import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminSidebar = () => {
    const { logout } = useAuth();
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
                            <Link to="/admin" className={`side-menu__item ${pathname === '/admin' ? 'active' : ''}`}>
                                <i className="bx bx-home-circle side-menu__icon"></i>
                                <span className="side-menu__label">Dashboard</span>
                            </Link>
                        </li>

                        <li className="slide__category">
                            <span className="category-name">Management</span>
                        </li>

                        <li className="slide">
                            <Link to="/admin/users" className={`side-menu__item ${isActive('/admin/users') ? 'active' : ''}`}>
                                <i className="bx bx-user side-menu__icon"></i>
                                <span className="side-menu__label">Users</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/admin/deposits" className={`side-menu__item ${isActive('/admin/deposits') ? 'active' : ''}`}>
                                <i className="bx bx-money side-menu__icon"></i>
                                <span className="side-menu__label">Deposits</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/admin/withdrawals" className={`side-menu__item ${isActive('/admin/withdrawals') ? 'active' : ''}`}>
                                <i className="bx bx-up-arrow-circle side-menu__icon"></i>
                                <span className="side-menu__label">Withdrawals</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/admin/wallets" className={`side-menu__item ${isActive('/admin/wallets') ? 'active' : ''}`}>
                                <i className="bx bx-wallet side-menu__icon"></i>
                                <span className="side-menu__label">System Wallets</span>
                            </Link>
                        </li>

                        <li className="slide__category">
                            <span className="category-name">Trading</span>
                        </li>

                        <li className="slide">
                            <Link to="/admin/copy-trading" className={`side-menu__item ${isActive('/admin/copy-trading') ? 'active' : ''}`}>
                                <i className="bx bx-copy-alt side-menu__icon"></i>
                                <span className="side-menu__label">Copy Trading</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/admin/trade-history" className={`side-menu__item ${isActive('/admin/trade-history') ? 'active' : ''}`}>
                                <i className="bx bx-history side-menu__icon"></i>
                                <span className="side-menu__label">Trade History</span>
                            </Link>
                        </li>

                        <li className="slide">
                            <Link to="/admin/signals" className={`side-menu__item ${isActive('/admin/signals') ? 'active' : ''}`}>
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
