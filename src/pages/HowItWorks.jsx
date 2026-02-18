import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/how_it_works.css';

const HowItWorks = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div style={{ backgroundColor: 'var(--body-bg)' }}>
            <Header />

            {/* Banner Section */}
            <section className="banner">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <div className="banner__content text-center">
                                <h2 className="title text-center">How It Works</h2>
                                <p className="fs-20 desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
                                    At CopyTradeHome, we make trading accessible and efficient for traders of all levels. Follow our simple 7-step process to start your trading journey.
                                </p>
                                <Link to="/login" className="btn-action mt-4"><span>Get Started Now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Banner Section */}

            {/* Process Steps Section */}
            <section className="process-timeline-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center text-center">
                                <h3 className="heading">Our Simple Process</h3>
                                <p className="fs-20 desc">
                                    Follow these straightforward steps to start trading with confidence on our platform.
                                </p>
                            </div>

                            <div className="process-timeline">
                                {/* Step 1 */}
                                <div className="timeline-step" data-aos="fade-up" data-aos-duration="800">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="timeline-icon">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <path d="M40 20C31.7157 20 25 26.7157 25 35C25 43.2843 31.7157 50 40 50C48.2843 50 55 43.2843 55 35C55 26.7157 48.2843 20 40 20Z" stroke="#d96d20" strokeWidth="3"></path>
                                                <path d="M40 28V35L45 38" stroke="#d96d20" strokeWidth="3" strokeLinecap="round"></path>
                                                <path d="M40 50V60M30 58L40 60L50 58" stroke="#d96d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="timeline-content">
                                            <p className="step-number">Step 01</p>
                                            <h4 className="step-title">Sign Up and Verify Your Account</h4>
                                            <ul className="process-list">
                                                <li><strong>Register:</strong> Create an account by filling out a simple registration form on our website.</li>
                                                <li><strong>Verify:</strong> Complete the verification process by providing necessary identification documents to ensure the security of your account.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="timeline-step" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="timeline-icon">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#58BD7D" opacity="0.1"></circle>
                                                <rect x="22" y="28" width="36" height="24" rx="3" stroke="#58BD7D" strokeWidth="3"></rect>
                                                <path d="M22 36H58" stroke="#58BD7D" strokeWidth="3"></path>
                                                <rect x="28" y="42" width="8" height="4" rx="1" fill="#58BD7D"></rect>
                                            </svg>
                                        </div>
                                        <div className="timeline-content">
                                            <p className="step-number">Step 02</p>
                                            <h4 className="step-title">Fund Your Account</h4>
                                            <ul className="process-list">
                                                <li><strong>Deposit Funds:</strong> Choose from a variety of secure payment methods to fund your trading account. We support bank transfers, credit/debit cards, and popular e-wallets.</li>
                                                <li><strong>Manage Funds:</strong> Use our intuitive dashboard to manage your deposits, withdrawals, and account balance efficiently.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="timeline-step" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="timeline-icon">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <rect x="24" y="26" width="32" height="28" rx="2" stroke="#d96d20" strokeWidth="3"></rect>
                                                <path d="M30 32H50M30 38H50M30 44H42" stroke="#d96d20" strokeWidth="2" strokeLinecap="round"></path>
                                            </svg>
                                        </div>
                                        <div className="timeline-content">
                                            <p className="step-number">Step 03</p>
                                            <h4 className="step-title">Explore the Trading Platform</h4>
                                            <ul className="process-list">
                                                <li><strong>User-Friendly Interface:</strong> Navigate through our cutting-edge trading platform, designed for both beginners and experienced traders.</li>
                                                <li><strong>Real-Time Data:</strong> Access live market data, advanced charting tools, and technical analysis to make informed trading decisions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="timeline-step" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="timeline-icon">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#58BD7D" opacity="0.1"></circle>
                                                <path d="M30 50L35 42L42 48L50 30" stroke="#58BD7D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <circle cx="40" cy="40" r="18" stroke="#58BD7D" strokeWidth="3"></circle>
                                            </svg>
                                        </div>
                                        <div className="timeline-content">
                                            <p className="step-number">Step 04</p>
                                            <h4 className="step-title">Develop Trading Strategies</h4>
                                            <ul className="process-list">
                                                <li><strong>Educational Resources:</strong> Enhance your trading knowledge with our comprehensive library of educational materials, including webinars, tutorials, and articles.</li>
                                                <li><strong>Risk Management Tools:</strong> Utilize stop-loss orders, take-profit orders, and other risk management features to protect your investments.</li>
                                                <li><strong>Automated Trading:</strong> Leverage our automated trading solutions, including Expert Advisors (EAs), to execute trades based on predefined criteria.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="timeline-step" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="timeline-icon">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <path d="M25 45L35 35L42 42L55 25" stroke="#d96d20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M47 25H55V33" stroke="#d96d20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="timeline-content">
                                            <p className="step-number">Step 05</p>
                                            <h4 className="step-title">Execute Trades</h4>
                                            <ul className="process-list">
                                                <li><strong>Choose Your Assets:</strong> Select from a wide range of currency pairs and other financial instruments to trade.</li>
                                                <li><strong>Place Orders:</strong> Execute market or pending orders with ease, taking advantage of fast and reliable trade execution.</li>
                                                <li><strong>Monitor and Adjust:</strong> Keep track of your open positions, account balance, and performance through our comprehensive trading dashboard.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 6 */}
                                <div className="timeline-step" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="timeline-icon">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#58BD7D" opacity="0.1"></circle>
                                                <circle cx="30" cy="32" r="6" stroke="#58BD7D" strokeWidth="3"></circle>
                                                <path d="M20 50C20 45.5817 23.5817 42 28 42H32C36.4183 42 40 45.5817 40 50V55H20V50Z" stroke="#58BD7D" strokeWidth="3"></path>
                                                <circle cx="50" cy="36" r="5" stroke="#58BD7D" strokeWidth="2"></circle>
                                                <path d="M42 52C42 48.6863 44.6863 46 48 46H52C55.3137 46 58 48.6863 58 52V55H42V52Z" stroke="#58BD7D" strokeWidth="2"></path>
                                            </svg>
                                        </div>
                                        <div className="timeline-content">
                                            <p className="step-number">Step 06</p>
                                            <h4 className="step-title">Access Expert Support</h4>
                                            <ul className="process-list">
                                                <li><strong>Personalized Assistance:</strong> Benefit from personalized support from our team of experienced trading professionals, available to help you with strategy development and technical issues.</li>
                                                <li><strong>24/7 Customer Service:</strong> Reach out to our dedicated customer support team any time for prompt and effective assistance.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 7 */}
                                <div className="timeline-step" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="timeline-icon">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <path d="M40 25V55M30 45L40 55L50 45" stroke="#d96d20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <rect x="28" y="52" width="24" height="6" rx="1" stroke="#d96d20" strokeWidth="2"></rect>
                                            </svg>
                                        </div>
                                        <div className="timeline-content">
                                            <p className="step-number">Step 07</p>
                                            <h4 className="step-title">Withdraw Your Earnings</h4>
                                            <ul className="process-list">
                                                <li><strong>Request Withdrawals:</strong> Easily request withdrawals through your account dashboard, choosing from various secure methods.</li>
                                                <li><strong>Enjoy Your Profits:</strong> Receive your funds quickly and securely, enjoying the fruits of your successful trading endeavors.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Process Steps Section */}

            {/* CTA Section */}
            <section className="section-sale">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="block-text">
                                <h4 className="heading">Ready to Start Your Trading Journey?</h4>
                                <p className="desc">
                                    Join thousands of successful traders on our platform and take the first step towards financial freedom.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="button-group">
                                <Link to="/register" className="btn-action mb-3">Create an Account</Link>
                                <Link to="/contact" className="btn-action-secondary">Contact Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End CTA Section */}

            <Footer />
        </div>
    );
};

export default HowItWorks;
