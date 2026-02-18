import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import '../assets/css/copy-trading.css';

function CopyTrading() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Initialize Swipers
        if (window.Swiper) {
            // Partner Swiper
            new window.Swiper('.swiper-partner', {
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                }
            });

            // About Image Swiper
            new window.Swiper('.img-swiper', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.img-swiper .swiper-pagination',
                    clickable: true,
                },
            });

            // Testimonials Swiper
            new window.Swiper('.swiper-testimonial-1', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
        }
    }, []);

    return (
        <>
            <Header />
            <div className="body header-fixed home-2">
                {/* Banner Top */}
                <section className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="banner__content">
                                    <h2 className="title">Trade Like an Expert in No Time</h2>
                                    <p className="fs-20 desc">
                                        Trade Like an Expert or Earn Up to 50% Profit Share from Your Strategies. Copy successful traders and start earning today.
                                    </p>
                                    <Link to="/login" className="btn-action"><span>Start Copy Trading</span></Link>
                                    <div className="partner">
                                        <h6>Trusted By Traders Worldwide</h6>
                                        <div className="partner__list">
                                            <div className="swiper swiper-partner">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide" style={{ width: '85px', marginRight: '20px' }}>
                                                        <Link to="#"><img src="/assets/images/logo-04.png" alt="" /></Link>
                                                    </div>
                                                    <div className="swiper-slide" style={{ width: '85px', marginRight: '20px' }}>
                                                        <Link to="#"><img src="/assets/images/logo-05.png" alt="" /></Link>
                                                    </div>
                                                    <div className="swiper-slide" style={{ width: '85px', marginRight: '20px' }}>
                                                        <Link to="#"><img src="/assets/images/logo-01.png" alt="" /></Link>
                                                    </div>
                                                    <div className="swiper-slide" style={{ width: '85px', marginRight: '20px' }}>
                                                        <Link to="#"><img src="/assets/images/logo-02.png" alt="" /></Link>
                                                    </div>
                                                    <div className="swiper-slide" style={{ width: '85px', marginRight: '20px' }}>
                                                        <Link to="#"><img src="/assets/images/logo-03.png" alt="" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="banner__image">
                                    <img src="/assets/images/copy.png" alt="Copy Trading" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner Top */}

                {/* Stats Section */}
                <section className="stats-section" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-card">
                                    <div className="stat-icon-box orange">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">35M+</h3>
                                    <p className="stat-label">Global Users</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-card active-green">
                                    <div className="stat-icon-box green">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">95%</h3>
                                    <p className="stat-label">Success Rate</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-card">
                                    <div className="stat-icon-box blue">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">500+</h3>
                                    <p className="stat-label">Expert Strategies</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-card">
                                    <div className="stat-icon-box cyan">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">50%</h3>
                                    <p className="stat-label">Profit Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Stats Section */}

                {/* How It Works Section */}
                <section className="work">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">How Copy Trading Works</h3>
                                    <p className="fs-20 desc">
                                        This approach democratizes investing, providing a straightforward way to enter complex markets like forex, stocks, and cryptocurrencies.
                                    </p>
                                </div>

                                <div className="work__main mt-5">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <div className="work-card" data-aos="fade-up">
                                                <div className="work-icon-box cyan-light">
                                                    <img src="/assets/images/Cloud.png" alt="" />
                                                </div>
                                                <h6 className="work-step">Step 1</h6>
                                                <h5 className="work-title">Join Community</h5>
                                                <p className="work-text">
                                                    Share your ideas and connect with a large community of enthusiastic investors.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <div className="work-card" data-aos="fade-up" data-aos-delay="100">
                                                <div className="work-icon-box purple-light">
                                                    <img src="/assets/images/Wallet.png" alt="" />
                                                </div>
                                                <h6 className="work-step">Step 2</h6>
                                                <h5 className="work-title">Copy Strategies</h5>
                                                <p className="work-text">
                                                    Follow successful strategies, copy their trades automatically, and profit.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <div className="work-card" data-aos="fade-up" data-aos-delay="200">
                                                <div className="work-icon-box green-light">
                                                    <img src="/assets/images/Mining.png" alt="" />
                                                </div>
                                                <h6 className="work-step">Step 3</h6>
                                                <h5 className="work-title">Share Your Own</h5>
                                                <p className="work-text">
                                                    Share your own strategies and earn up to 50% profit share on follower profits.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <div className="work-card" data-aos="fade-up" data-aos-delay="300">
                                                <div className="work-icon-box orange-light">
                                                    <img src="/assets/images/Comparison.png" alt="" />
                                                </div>
                                                <h6 className="work-step">Step 4</h6>
                                                <h5 className="work-title">Earn Money</h5>
                                                <p className="work-text">
                                                    Start earning consistently by following proven strategies or sharing expertise.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End How It Works Section */}

                {/* About / Expertise Section */}
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="about_image">
                                    <div className="swiper img-swiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img className="img-main" src="/assets/images/about-h1.png" alt="" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img className="img-main" src="/assets/images/copy2.png" alt="Trading Statistics" />
                                            </div>
                                        </div>
                                    </div>
                                    <img className="icon icon-1" src="/assets/images/icon-01.png" alt="" />
                                    <img className="icon icon-2" src="/assets/images/icon-02.png" alt="" />
                                    <img className="icon icon-3" src="/assets/images/icon-03.png" alt="" />
                                    <img className="icon icon-4" src="/assets/images/icon-04.png" alt="" />
                                    <img className="icon icon-5" src="/assets/images/icon-05.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="about__content" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className="heading">Professional Trading Solutions</h3>
                                    <p className="fs-20 decs">
                                        You don't need to be an expert to earn like one. Just follow the experts and copy their trades or get up to 50% profit share by sharing your own strategies for others to follow!
                                    </p>
                                    <ul className="list">
                                        <li>
                                            <div className="title-wrapper">
                                                <span className="icon-check"></span>
                                                <h6 className="title">Expert Signal Providers</h6>
                                            </div>
                                            <p className="text">
                                                Access and copy trades from verified successful traders with proven track records in various markets.
                                            </p>
                                        </li>
                                        <li>
                                            <div className="title-wrapper">
                                                <span className="icon-check"></span>
                                                <h6 className="title">Real-time Trade Copying</h6>
                                            </div>
                                            <p className="text">
                                                Automatically copy trades in real-time with customizable settings to match your investment goals and risk tolerance.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link to="/register" className="btn-action">Start Trading</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About / Expertise Section */}

                {/* Services Section */}
                <section className="coin-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Trading Services</h3>
                                    <p className="fs-20 desc">
                                        With the right platform, copy trading is secure, efficient, and a powerful tool for achieving financial growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                                    <div className="service-icon-box orange">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Expert Strategies</h5>
                                    <p className="service-text">
                                        Access and copy trades from verified successful traders with proven track records in various markets.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                    <div className="service-icon-box green">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Profit Sharing</h5>
                                    <p className="service-text">
                                        Share your successful trading strategies and earn up to 50% profit share from followers who copy your trades.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <div className="service-icon-box blue">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Risk Management</h5>
                                    <p className="service-text">
                                        Set customized risk parameters to protect your investment while maintaining profitable opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    <div className="service-icon-box purple">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Market Analysis</h5>
                                    <p className="service-text">
                                        Access comprehensive market analysis and insights from experienced traders to make informed decisions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    <div className="service-icon-box cyan">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Customized Settings</h5>
                                    <p className="service-text">
                                        Tailor your copy trading experience with customizable settings to match your investment goals and risk tolerance.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                    <div className="service-icon-box pink">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Community Support</h5>
                                    <p className="service-text">
                                        Join a thriving community of traders sharing insights, strategies, and support to enhance your trading experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Services Section */}

                {/* Testimonials Section */}
                <section className="testimonials">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-md-12">
                                <div className="block-text">
                                    <h3 className="heading">Real traders share their success stories</h3>
                                    <h6 className="fs-20 subtitle">
                                        Discover how our platform has helped traders worldwide
                                    </h6>
                                    <p className="desc">
                                        Discover how our platform has helped traders worldwide achieve their financial goals through smart copy trading and innovative investment strategies.
                                    </p>

                                    <div className="avatar-group mb-4">
                                        <img src="/assets/images/2025-11146712231764087862.jpg" alt="User" className="avatar-item" />
                                        <div className="avatar-item gradient-cm">CM</div>
                                        <img src="/assets/images/2025-6831096351764087949.jpg" alt="User" className="avatar-item" />
                                    </div>

                                    <div className="stats-counter-simple">
                                        <span className="value">35M+</span>
                                        <span className="label">Global Users</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-md-12">
                                <div className="swiper swiper-testimonial-1">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonials-box premium">
                                                <div className="quote-icon">
                                                    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.8 0L19.2 6.4C16 9.6 14.4 12.8 14.4 16H19.2V35.2H0V16C0 8 3.2 2.4 9.6 0H12.8ZM41.6 0L48 6.4C44.8 9.6 43.2 12.8 43.2 16H48V35.2H28.8V16C28.8 8 32 2.4 38.4 0H41.6Z" fill="#3772FF" fillOpacity="0.8" />
                                                    </svg>
                                                </div>
                                                <h6 className="testimonial-text">
                                                    "I must thank and appreciate the management for their great work, Since I joined this platform it has been earning multiple profits and Huge profits."
                                                </h6>
                                                <div className="testimonial-bottom">
                                                    <div className="user-info">
                                                        <div className="user-avatar gray-avatar">MP</div>
                                                        <div className="info">
                                                            <h6 className="name">Maggie Pengs</h6>
                                                            <p className="position">Business Owner</p>
                                                        </div>
                                                    </div>
                                                    <div className="partner-logo">
                                                        <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="12" cy="12" r="8" fill="#B1B5C4" />
                                                            <text x="25" y="17" fill="#B1B5C4" fontSize="14" fontWeight="700">logoipsum</text>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Standard testimonials from HTML can go here too, refined with the same class */}
                                        <div className="swiper-slide">
                                            <div className="testimonials-box premium">
                                                <div className="quote-icon">
                                                    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.8 0L19.2 6.4C16 9.6 14.4 12.8 14.4 16H19.2V35.2H0V16C0 8 3.2 2.4 9.6 0H12.8ZM41.6 0L48 6.4C44.8 9.6 43.2 12.8 43.2 16H48V35.2H28.8V16C28.8 8 32 2.4 38.4 0H41.6Z" fill="#3772FF" fillOpacity="0.8" />
                                                    </svg>
                                                </div>
                                                <h6 className="testimonial-text">
                                                    "My portfolio has never looked this good. Before using this platform, I struggled to pick profitable stocks. Now, my investments in companies like AMD and AMZN are delivering returns I never thought possible."
                                                </h6>
                                                <div className="testimonial-bottom">
                                                    <div className="user-info">
                                                        <img src="/assets/images/2025-11146712231764087862.jpg" alt="User" />
                                                        <div className="info">
                                                            <h6 className="name">Loney Brodrick</h6>
                                                            <p className="position">Active user</p>
                                                        </div>
                                                    </div>
                                                    <div className="partner-logo">
                                                        <img src="/assets/images/logo-05.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Testimonials Section */}
                {/* End Testimonials Section */}

                {/* FAQ Section */}
                <section className="download">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="download__content" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className="heading">Frequently Asked Questions</h3>
                                    <p className="fs-20 decs">
                                        Find answers to common questions about our copy trading platform
                                    </p>
                                    <ul className="list">
                                        <li>
                                            <div className="title-wrapper">
                                                <span className="icon-check">✓</span>
                                                <h6 className="title">Secure & Transparent</h6>
                                            </div>
                                            <p className="text">
                                                All trades are executed securely with full transparency on performance metrics.
                                            </p>
                                        </li>
                                        <li>
                                            <div className="title-wrapper">
                                                <span className="icon-check">✓</span>
                                                <h6 className="title">24/7 Support Available</h6>
                                            </div>
                                            <p className="text">
                                                Our support team is available around the clock to assist you with any questions.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="faq-accordion" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    <div className="accordion" id="faqAccordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="faqHeading1">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                                                    What is the minimum amount I can invest?
                                                </button>
                                            </h2>
                                            <div id="faqCollapse1" className="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>You can start copy trading with as little as $200, although we recommend at least $500-$1,000 to effectively diversify across multiple traders. Our platform allows you to set the exact amount you wish to allocate to each trader you copy.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="faqHeading2">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                                                    How do I choose which traders to copy?
                                                </button>
                                            </h2>
                                            <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>Our platform provides comprehensive analytics on each trader, including their risk score, historical performance, trading style, and the instruments they trade. You can filter traders based on your preferences such as risk tolerance, return targets, or specific markets.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End FAQ Section */}

                {/* CTA Section */}
                <section className="section-sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="block-text">
                                    <h4 className="heading">Start Copy Trading Today</h4>
                                    <p className="desc">
                                        Join millions of traders worldwide and start earning by copying successful strategies or sharing your own expertise.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="button">
                                    <Link to="/register" className="btn-action">Create Free Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End CTA Section */}
            </div>
            <Footer />
        </>
    );
}

export default CopyTrading;
