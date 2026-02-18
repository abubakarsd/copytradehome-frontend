import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <section className="work">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h3 className="heading">How It Works</h3>
                            <p className="fs-20 desc">
                                Getting started is easy. Follow these simple steps to begin your trading journey.
                            </p>
                        </div>

                        <div className="work__main aos-init" data-aos="fade-up" data-aos-duration="1000">
                            <div className="work-box">
                                <div className="image">
                                    <img src="/assets/images/Cloud.png" alt="" />
                                </div>
                                <div className="content">
                                    <p className="step">Step 1</p>
                                    <Link to="/register" className="title">Register</Link>
                                    <p className="text">Create your free account in minutes. Just provide your email and set up your password.</p>
                                </div>
                                <img className="line" src="/assets/images/connect-line.png" alt="" />
                            </div>
                            <div className="work-box">
                                <div className="image">
                                    <img src="/assets/images/Wallet.png" alt="" />
                                </div>
                                <div className="content">
                                    <p className="step">Step 2</p>
                                    <a href="#" className="title">Fund Account</a>
                                    <p className="text">Add funds to your account using your preferred payment method. We support multiple options.</p>
                                </div>
                                <img className="line" src="/assets/images/connect-line.png" alt="" />
                            </div>
                            <div className="work-box">
                                <div className="image">
                                    <img src="/assets/images/Mining.png" alt="" />
                                </div>
                                <div className="content">
                                    <p className="step">Step 3</p>
                                    <a href="#" className="title">Start Trading</a>
                                    <p className="text">Choose from thousands of assets and start trading. Use our advanced tools to maximize returns.</p>
                                </div>
                                <img className="line" src="/assets/images/connect-line.png" alt="" />
                            </div>
                            <div className="work-box">
                                <div className="image">
                                    <img src="/assets/images/Comparison.png" alt="" />
                                </div>
                                <div className="content">
                                    <p className="step">Step 4</p>
                                    <a href="#" className="title">Earn Profits</a>
                                    <p className="text">Watch your portfolio grow. Withdraw your earnings anytime to your preferred wallet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
