import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer style-2">
            <div className="container">
                <div className="footer__main">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="info">
                                <Link to="/" className="logo">
                                    <img src="/assets/images/copytradehome-logo-orange.png" alt="CopyTradeHome" height="50" />
                                </Link>
                                <h6>Let's talk! 🤙</h6>
                                <ul className="list">
                                    <li><p>+1 (747) 274 7485</p></li>
                                    <li><p>info@copytradehome.com</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="widget">
                                <div className="widget-link">
                                    <h6 className="title">NAVIGATION</h6>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/how-it-works">How it Works</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="widget-link s2">
                                    <h6 className="title">TRADING</h6>
                                    <ul>
                                        <li><Link to="/copy-trading">Copy Trading</Link></li>
                                        <li><Link to="/crypto">Cryptocurrency</Link></li>
                                        <li><Link to="/gold">Precious Metals</Link></li>
                                        <li><Link to="/stocks">Stock Options</Link></li>
                                        <li><Link to="/green-energy">Green Energy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12">
                            <div className="footer-contact">
                                <h5>Newsletter</h5>
                                <p>
                                    Subscribe to our newsletter for the latest updates and exclusive offers.
                                </p>
                                <form action="https://copytradehome.com/welcome/subscribe" method="POST">
                                    <input type="email" name="email" placeholder="Enter your email" required />
                                    <button type="submit" className="btn-action">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer__bottom">
                    <p>
                        ©2026 CopyTradeHome. All rights reserved.
                        {' '}
                        <a href="https://copytradehome.com/welcome/terms">Terms of Service</a> |{' '}
                        <a href="https://copytradehome.com/welcome/privacy">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
