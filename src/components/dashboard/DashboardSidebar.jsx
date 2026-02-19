import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const DashboardSidebar = () => {
    const { logout } = useAuth();
    const location = useLocation();
    const { pathname } = location;

    // Helper to check if a path is active - strict equality
    const isActive = (path) => pathname === path;

    // Specific logic for Dashboard section to avoid overlap with other /dashboard/* routes
    const isDashboardActive = pathname === '/dashboard' ||
        pathname === '/dashboard/crypto' ||
        pathname === '/dashboard/copy-trading-dashboard' ||
        pathname.startsWith('/dashboard/stocks');

    const isWithdrawActive = pathname.startsWith('/dashboard/withdraw');

    // Trading section matches /stocks and /crypto routes
    const isTradingActive = pathname.startsWith('/stocks') || pathname.startsWith('/crypto') || pathname.startsWith('/dashboard/stocks') || pathname.startsWith('/dashboard/crypto-trade');

    // Restored logic for active states of new internal routes
    const isCopyTradingActive = pathname === '/dashboard/copy-trading' || pathname.startsWith('/dashboard/copy-trading/view') || pathname.startsWith('/dashboard/copy-trading/history');
    const isAffiliatesActive = pathname.startsWith('/dashboard/affiliates');
    const isReferralsActive = pathname === '/dashboard/referral' || pathname === '/dashboard/referral-tree';
    const isProfileActive = pathname.startsWith('/dashboard/profile');

    return (
        <>
            <aside className="app-sidebar sticky sticky-pin" id="sidebar">
                {/* Start::main-sidebar-header */}
                <div className="main-sidebar-header">
                    <a href="https://copytradehome.com/" className="header-logo">
                        <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="desktop-logo" />
                        <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="toggle-dark" />
                        <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="desktop-dark" />
                        <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="toggle-logo" />
                    </a>
                </div>
                {/* End::main-sidebar-header */}

                {/* Start::main-sidebar */}
                <div className="main-sidebar" id="sidebar-scroll" data-simplebar="init"><div className="simplebar-wrapper" style={{ 'margin': '-8px 0px -80px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ 'right': '0px', 'bottom': '0px' }}><div className="simplebar-content-wrapper" tabIndex="0" role="region" aria-label="scrollable content" style={{ 'height': '100%', 'overflow': 'hidden' }}><div className="simplebar-content" style={{ 'padding': '8px 0px 80px' }}>
                    {/* Start::nav */}
                    <nav className="main-menu-container nav nav-pills flex-column sub-open active open">
                        <div className="slide-left d-none" id="slide-left">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg>
                        </div>

                        <ul className="main-menu" style={{ 'marginLeft': '0', 'marginRight': '0' }}>

                            {/* Main */}
                            <li className="slide__category">
                                <span className="category-name">Main</span>
                            </li>

                            {/* Dashboard */}
                            <li className={`slide has-sub ${isDashboardActive ? 'open' : ''}`}>
                                <a href="#" className={`side-menu__item ${isDashboardActive ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                    <i className="bx bx-home-circle side-menu__icon"></i>
                                    <span className="side-menu__label">Dashboard</span>
                                    <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                </a>
                                <ul className="slide-menu child1" data-popper-placement="bottom" style={{
                                    'position': 'relative',
                                    'left': '0px',
                                    'top': '0px',
                                    'margin': '0px',
                                    'display': isDashboardActive ? 'block' : 'none',
                                    'transform': 'translate3d(127.5px, 166px, 0px)',
                                    'boxSizing': 'border-box'
                                }}>
                                    <li className="slide side-menu__label1">
                                        <a href="#" onClick={(e) => e.preventDefault()}>Dashboard</a>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard" className={`side-menu__item ${pathname === '/dashboard' ? 'active' : ''}`}>
                                            Stocks Trading
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/crypto" className={`side-menu__item ${isActive('/dashboard/crypto') ? 'active' : ''}`}>
                                            Crypto Trading
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/copy-trading-dashboard" className={`side-menu__item ${pathname === '/dashboard/copy-trading-dashboard' ? 'active' : ''}`}>
                                            Copy Trading
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Deposit */}
                            <li className="slide">
                                <Link to="/dashboard/deposit" className={`side-menu__item ${isActive('/dashboard/deposit') ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Deposit">
                                    <i className="bx bx-credit-card side-menu__icon"></i>
                                    <span className="side-menu__label">Deposit</span>
                                </Link>
                            </li>

                            {/* Withdraw */}
                            <li className={`slide has-sub ${isWithdrawActive ? 'open' : ''}`}>
                                <a href="#" className={`side-menu__item ${isWithdrawActive ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Withdraw">
                                    <i className="bx bx-up-arrow-circle side-menu__icon"></i>
                                    <span className="side-menu__label">Withdraw</span>
                                    <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                </a>
                                <ul className="slide-menu child1" data-popper-placement="bottom" style={{
                                    'position': 'relative',
                                    'left': '0px',
                                    'top': '0px',
                                    'margin': '0px',
                                    'display': isWithdrawActive ? 'block' : 'none',
                                    'transform': 'translate3d(127.5px, 267px, 0px)'
                                }}>
                                    <li className="slide side-menu__label1">
                                        <a href="#" onClick={(e) => e.preventDefault()}>Withdraw</a>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/withdraw" className={`side-menu__item ${isActive('/dashboard/withdraw') ? 'active' : ''}`}>
                                            New Withdrawal
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/withdraw/history" className={`side-menu__item ${isActive('/dashboard/withdraw/history') ? 'active' : ''}`}>
                                            Withdrawal History
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Trading */}
                            <li className={`slide has-sub ${isTradingActive ? 'open' : ''}`}>
                                <a href="#" className={`side-menu__item ${isTradingActive ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Trading">
                                    <i className="bx bx-line-chart side-menu__icon"></i>
                                    <span className="side-menu__label">Trading</span>
                                    <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                </a>
                                <ul className="slide-menu child1" data-popper-placement="bottom" style={{ 'position': 'relative', 'left': '0px', 'top': '0px', 'margin': '0px', 'display': isTradingActive ? 'block' : 'none', 'transform': 'translate3d(127.5px, 317px, 0px)' }}>
                                    <li className="slide side-menu__label1">
                                        <a href="#" onClick={(e) => e.preventDefault()}>Trading</a>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/stocks" className={`side-menu__item ${pathname.startsWith('/dashboard/stocks') ? 'active' : ''}`}>
                                            Stocks
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/crypto-trade" className={`side-menu__item ${isActive('/dashboard/crypto-trade') ? 'active' : ''}`}>
                                            Crypto
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Copy Trading */}
                            <li className={`slide has-sub ${isCopyTradingActive ? 'open' : ''}`}>
                                <a href="#" className={`side-menu__item ${isCopyTradingActive ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Copy Trading">
                                    <i className="bx bx-copy-alt side-menu__icon"></i>
                                    <span className="side-menu__label">Copy Trading</span>
                                    <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                </a>
                                <ul className="slide-menu child1" data-popper-placement="bottom" style={{ 'position': 'relative', 'left': '0px', 'top': '0px', 'margin': '0px', 'display': isCopyTradingActive ? 'block' : 'none', 'transform': 'translate3d(127.5px, 367.5px, 0px)' }}>
                                    <li className="slide side-menu__label1">
                                        <a href="#" onClick={(e) => e.preventDefault()}>Copy Trading</a>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/copy-trading" className={`side-menu__item ${pathname === '/dashboard/copy-trading' || pathname.startsWith('/dashboard/copy-trading/view') ? 'active' : ''}`}>
                                            Copy Expert
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/copy-trading/history" className={`side-menu__item ${isActive('/dashboard/copy-trading/history') ? 'active' : ''}`}>
                                            Copy Trading History
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Assets */}
                            <li className="slide">
                                <Link to="/dashboard/assets" className={`side-menu__item ${isActive('/dashboard/assets') ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Assets">
                                    <i className="bx bx-layer side-menu__icon"></i>
                                    <span className="side-menu__label">Assets</span>
                                </Link>
                            </li>

                            {/* Signals */}
                            <li className="slide">
                                <Link to="/dashboard/signals" className={`side-menu__item ${pathname.startsWith('/dashboard/signals') ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Signals">
                                    <i className="bx bx-signal-4 side-menu__icon"></i>
                                    <span className="side-menu__label">Signals</span>
                                </Link>
                            </li>

                            {/* Live Trading */}
                            <li className="slide">
                                <Link to="/dashboard/live-trading" className={`side-menu__item ${isActive('/dashboard/live-trading') ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Live Trading">
                                    <i className="bx bx-pulse side-menu__icon"></i>
                                    <span className="side-menu__label">Live Trading</span>
                                </Link>
                            </li>

                            {/* Connect Wallet */}
                            <li className="slide">
                                <Link to="/dashboard/connect-wallet" className={`side-menu__item ${isActive('/dashboard/connect-wallet') ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Connect Wallet">
                                    <i className="bx bx-wallet side-menu__icon"></i>
                                    <span className="side-menu__label">Connect Wallet</span>
                                </Link>
                            </li>

                            {/* Account */}
                            <li className="slide__category">
                                <span className="category-name">Account</span>
                            </li>

                            {/* Affiliates */}
                            <li className={`slide has-sub ${isReferralsActive ? 'open' : ''}`}>
                                <a href="javascript:void(0);" className={`side-menu__item ${isReferralsActive ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Affiliates">
                                    <i className="bx bx-user-voice side-menu__icon"></i>
                                    <span className="side-menu__label">Affiliates</span>
                                    <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                </a>
                                <ul className="slide-menu child1" style={{ display: isReferralsActive ? 'block' : 'none' }}>
                                    <li className="slide side-menu__label1">
                                        <a href="#" onClick={(e) => e.preventDefault()}>Affiliates</a>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/referral" className={`side-menu__item ${isActive('/dashboard/referral') ? 'active' : ''}`}>
                                            My Referral Link
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/referral-tree" className={`side-menu__item ${isActive('/dashboard/referral-tree') ? 'active' : ''}`}>
                                            Referral Tree
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Profile */}
                            <li className={`slide has-sub ${isProfileActive ? 'open' : ''}`}>
                                <a href="#" className={`side-menu__item ${isProfileActive ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Profile">
                                    <i className="bx bx-user-circle side-menu__icon"></i>
                                    <span className="side-menu__label">Profile</span>
                                    <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                </a>
                                <ul className="slide-menu child1" data-popper-placement="bottom" style={{ 'position': 'relative', 'left': '0px', 'top': '0px', 'margin': '0px', 'display': isProfileActive ? 'block' : 'none', 'transform': 'translate3d(127.5px, 709.5px, 0px)' }}>
                                    <li className="slide side-menu__label1">
                                        <a href="#" onClick={(e) => e.preventDefault()}>Profile</a>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/profile" className={`side-menu__item ${isActive('/dashboard/profile') ? 'active' : ''}`}>
                                            My Account
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/profile/password" className={`side-menu__item ${isActive('/dashboard/profile/password') ? 'active' : ''}`}>
                                            Password Reset
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/profile/notifications" className={`side-menu__item ${isActive('/dashboard/profile/notifications') ? 'active' : ''}`}>
                                            Notification Settings
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="/dashboard/profile/wallets" className={`side-menu__item ${isActive('/dashboard/profile/wallets') ? 'active' : ''}`} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Wallet Addresses">
                                            <span className="side-menu__label">Wallet Addresses</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Logout */}
                            <li className="slide">
                                <a href="#" className="side-menu__item" onClick={(e) => { e.preventDefault(); logout(); }} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Logout">
                                    <i className="bx bx-log-out side-menu__icon"></i>
                                    <span className="side-menu__label">Logout</span>
                                </a>
                            </li>



                        </ul>

                        <div className="slide-right d-none" id="slide-right">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                            </svg>
                        </div>
                    </nav>
                    {/* End::nav */}
                </div></div></div></div><div className="simplebar-placeholder" style={{ 'width': '255px', 'height': '788px' }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ 'visibility': 'hidden' }}><div className="simplebar-scrollbar" style={{ 'width': '0px', 'transform': 'translate3d(0px, 0px, 0px)', 'display': 'none' }}></div></div><div className="simplebar-track simplebar-vertical" style={{ 'visibility': 'hidden' }}><div className="simplebar-scrollbar" style={{ 'height': '0px', 'transform': 'translate3d(0px, 0px, 0px)', 'display': 'none' }}></div></div></div>
                {/* End::main-sidebar */}
            </aside>
        </>
    );
};

export default DashboardSidebar;
