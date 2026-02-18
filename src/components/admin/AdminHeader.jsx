import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminHeader = () => {
    const { logout, user } = useAuth();
    return (
        <>
            <header className="app-header sticky sticky-pin" id="header">
                <div className="main-header-container container-fluid">
                    <div className="header-content-left">
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to="/admin" className="header-logo">
                                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="desktop-logo" />
                                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="toggle-logo" />
                                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="desktop-dark" />
                                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-element mx-lg-0 mx-2">
                            <a aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="#"><span></span></a>
                        </div>
                    </div>

                    <ul className="header-content-right">
                        <li className="header-element dropdown">
                            <a href="#" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <div className="d-sm-block d-none">
                                        <p className="fw-semibold mb-0 lh-1">Admin</p>
                                    </div>
                                </div>
                            </a>
                            <ul className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); logout(); }}><i className="bx bx-log-out me-2 fs-18"></i>Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default AdminHeader;
