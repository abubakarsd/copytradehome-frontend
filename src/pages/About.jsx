import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/about.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const testimonials = [
        {
            text: "My portfolio has never looked this good. Before using this platform, I struggled to pick profitable stocks. Now, my investments in companies like AMD and AMZN are delivering returns I never thought possible. Seeing six-figure gains on autopilot has been a game changer for me.",
            title: "Six-figure gains on autopilot",
            name: "Loney Brodrick",
            role: "Active user",
            img: "/assets/images/2025-11146712231764087862.jpg",
            logo: "/assets/images/logo-06.png",
            top: "22%",
            left: "74%",
            color: "#d96d20"
        },
        {
            text: "Reliable signals, real profits. I’ve tried many trading tools, but none came close to the accuracy here. My positions on TSLA and AAPL have been consistently profitable. The insights are clear, the execution is smooth, and the results speak for themselves.",
            title: "Reliable signals, real profits",
            name: "Caroline M.",
            role: "Head of Finance, PCID Corp.",
            img: "/assets/images/use-02.png",
            logo: "/assets/images/logo-06.png",
            top: "32%",
            left: "48%",
            color: "#3B82F6"
        },
        {
            text: "From beginner to profitable trader. When I started, I barely understood stock charts. Today, I’m earning consistently thanks to the platform’s guidance. Even Microsoft and Tesla positions that I’d normally avoid ended up being profitable moves.",
            title: "From beginner to profitable trader",
            name: "Leo B.",
            role: "CFO, iStep Ltd.",
            img: "/assets/images/2025-6831096351764087949.jpg",
            logo: "/assets/images/logo-06.png",
            top: "58%",
            left: "28%",
            color: "#A78BFA"
        },
        {
            text: "Good platform for investments and returns",
            title: "Good platform for investments and returns",
            name: "Grace Noman",
            role: "Investor",
            img: "/assets/images/use-04.png",
            logo: "/assets/images/logo-06.png",
            top: "48%",
            left: "54%",
            color: "#58BD7D"
        },
        {
            text: "I must thank and appreciate the management for the great work, Since I joined this platform it has been earning multiple profits and Huge profits.",
            title: "Multiple profits and Huge profits",
            name: "Maggie Pengs",
            role: "Business Owner",
            img: "/assets/images/use-05.png",
            logo: "/assets/images/logo-06.png",
            top: "18%",
            left: "14%",
            color: "#58BD7D"
        },
        {
            text: "Success is not about been the only successful one, Success is making a lot of people successful because for me that’s my Success. I introduced my loved ones to this platform and they are making it big now.",
            title: "Success is making a lot of people successful",
            name: "Kimbo Yin",
            role: "Investor",
            img: "/assets/images/use-06.png",
            logo: "/assets/images/logo-06.png",
            top: "72%",
            left: "82%",
            color: "#FBBF24"
        }
    ];

    return (
        <div style={{ backgroundColor: 'var(--body-bg)' }}>
            <Header />

            {/* Banner Top */}
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner__content">
                                <h2 className="title">About CopyTradeHome</h2>
                                <p className="fs-20 desc">
                                    Your trusted trading partner. We empower traders worldwide with innovative tools, expert guidance, and comprehensive support.
                                </p>
                                <Link to="/register" className="btn-action"><span>Start Trading</span></Link>
                            </div>
                            <div className="banner__image">
                                <img src="/assets/images/banner-03.png" alt="About Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Banner Top */}

            {/* Counter Numbers Section */}
            <section className="counter-numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h3 className="heading">The numbers don't lie</h3>
                                <p className="desc">
                                    Our track record speaks for itself. Join thousands of traders who trust us to deliver exceptional results.
                                </p>
                            </div>
                            <div className="counter-main" data-aos="fade-up" data-aos-duration="1000">
                                <img className="img" src="/assets/images/icon-c1.png" alt="" />
                                <img className="img" src="/assets/images/icon-c2.png" alt="" />
                                <img className="img" src="/assets/images/icon-c3.png" alt="" />
                                <img className="img" src="/assets/images/icon-c4.png" alt="" />
                                <ul className="list-counter counter-scroll">
                                    <li>
                                        <p className="title">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 8.00068C16.7554 6.2409 15.9391 4.61034 14.6766 3.36018C13.4142 2.11001 11.7758 1.3096 10.0137 1.08224C8.25159 0.85487 6.46362 1.21316 4.9252 2.10193M1 2.00068V6.00068H5" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M1 10.001C1.24456 11.7608 2.06093 13.3913 3.32336 14.6415C4.58579 15.8916 6.22424 16.6921 7.98633 16.9194C9.74841 17.1468 11.5364 16.7885 13.0748 15.8997M17 16.001V12.001H13" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            Years of Experience
                                        </p>
                                        <div className="number-content counter">
                                            <span className="timer count-number countup number" data-value="16">16</span>+
                                        </div>
                                    </li>
                                    <li>
                                        <p className="title">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7.5 4.20996L12 6.80996L16.5 4.20996" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7.5 19.79V14.6L3 12" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M21 12L16.5 14.6V19.79" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M3.27002 6.95996L12 12.01L20.73 6.95996" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12 22.08V12" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            Successful Trades
                                        </p>
                                        <div className="number-content counter">
                                            <span className="timer count-number countup number" data-value="12">12</span>K+
                                        </div>
                                    </li>
                                    <li>
                                        <p className="title">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.87749 13.2061C4.03349 13.2061 0.750488 13.7871 0.750488 16.1151C0.750488 18.4421 4.01249 19.0451 7.87749 19.0451C11.7215 19.0451 15.0045 18.4631 15.0045 16.1361C15.0045 13.8091 11.7425 13.2061 7.87749 13.2061Z" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.87757 9.886C10.4136 9.886 12.4456 7.853 12.4456 5.318C12.4456 2.782 10.4136 0.75 7.87757 0.75C5.34257 0.75 3.30957 2.782 3.30957 5.318C3.30957 7.853 5.34257 9.886 7.87757 9.886Z" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M17.2041 6.66895V10.6789" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M19.2502 8.67383H15.1602" stroke="#777E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            Happy Traders
                                        </p>
                                        <div className="number-content counter">
                                            <span className="timer count-number countup number" data-value="10">10</span>K+
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Counter Numbers */}

            {/* Services Section - Why Choose Us */}
            <section className="services-2 bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="services__content" data-aos="fade-up" data-aos-duration="1000">
                                <h3 className="heading">Who We Are</h3>
                                <p className="fs-20 desc">
                                    CopyTradeHome is a leading forex trading platform dedicated to empowering traders worldwide.
                                </p>
                                <ul className="list">
                                    <li className="active">
                                        <div className="icon">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M35.9606 13.88C34.7889 6.66876 28.6638 1.30399 21.361 1.0928C21.0138 1.07919 20.6754 1.2042 20.4205 1.44029C20.1655 1.67637 20.0149 2.00415 20.0018 2.35138V2.35138V2.46885L20.824 14.7694C20.878 15.5974 21.5898 16.2269 22.4182 16.179L34.7523 15.3567C35.0999 15.331 35.4228 15.1678 35.6496 14.9032C35.8764 14.6386 35.9883 14.2945 35.9606 13.9471V13.88Z" stroke="#D33535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.8195 8.40957C13.6041 8.22809 14.407 8.62953 14.7325 9.36609C14.8178 9.53933 14.8691 9.72732 14.8835 9.91987C15.0514 12.3028 15.4038 17.5217 15.6051 20.3409C15.6395 20.8488 15.8749 21.322 16.2591 21.6558C16.6433 21.9896 17.1448 22.1566 17.6524 22.1197V22.1197L28.0064 21.482C28.4686 21.4542 28.9218 21.6187 29.2586 21.9365C29.5954 22.2542 29.786 22.6971 29.7851 23.1601V23.1601C29.3656 29.4125 24.8735 34.6394 18.7553 35.9942C12.6371 37.3491 6.3582 34.5074 3.33816 29.0167C2.43662 27.4365 1.86569 25.6894 1.66005 23.8817C1.57214 23.3269 1.53842 22.7649 1.55937 22.2036C1.57718 15.5266 6.26646 9.7735 12.8027 8.40957" stroke="#D33535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Innovation &amp; Technology</h6>
                                            <p>
                                                Our platform offers real-time data, advanced charting tools, and comprehensive educational resources for all skill levels.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon green">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6667 3.66699V9.16699" stroke="#58BD7D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M29.3333 3.66699V9.16699" stroke="#58BD7D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M6.41675 16.665H37.5834" stroke="#58BD7D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M40.3334 34.8333C40.3334 36.2083 39.9484 37.51 39.2701 38.61C38.0051 40.7367 35.6768 42.1667 33.0001 42.1667C31.1484 42.1667 29.4618 41.4883 28.1784 40.3333C27.6101 39.8567 27.1151 39.27 26.7301 38.61C26.0518 37.51 25.6667 36.2083 25.6667 34.8333C25.6667 30.7817 28.9484 27.5 33.0001 27.5C35.2001 27.5 37.1618 28.4716 38.5001 29.9933C39.6368 31.295 40.3334 32.9817 40.3334 34.8333Z" stroke="#58BD7D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M30.1401 34.8338L31.9551 36.6488L35.8601 33.0371" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M38.5 15.5837V29.9936C37.1617 28.472 35.2 27.5003 33 27.5003C28.9483 27.5003 25.6667 30.782 25.6667 34.8337C25.6667 36.2087 26.0517 37.5103 26.73 38.6103C27.115 39.2703 27.61 39.857 28.1783 40.3337H14.6667C8.25 40.3337 5.5 36.667 5.5 31.167V15.5837C5.5 10.0837 8.25 6.41699 14.6667 6.41699H29.3333C35.75 6.41699 38.5 10.0837 38.5 15.5837Z" stroke="#58BD7D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M21.9918 25.1169H22.0083" stroke="#58BD7D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M15.2062 25.1169H15.2226" stroke="#58BD7D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M15.2062 30.6169H15.2226" stroke="#58BD7D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Security &amp; Trust</h6>
                                            <p>
                                                We prioritize security, transparency, and personalized support, making us your trusted partner in forex trading.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon blue">
                                            <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.5332 3.66699H22.1332C21.5253 3.66699 21.0332 4.15907 21.0332 4.76699C21.0332 5.37491 21.5253 5.86699 22.1332 5.86699H26.5332C27.1411 5.86699 27.6332 5.37491 27.6332 4.76699C27.6332 4.15907 27.1411 3.66699 26.5332 3.66699Z" fill="#d96d20"></path>
                                                <path d="M31.3001 0H13.7001C11.2743 0 9.30011 1.97416 9.30011 4.4V39.6C9.30011 42.0258 11.2743 44 13.7001 44H31.3001C33.726 44 35.7001 42.0258 35.7001 39.6V4.4C35.7001 1.97416 33.726 0 31.3001 0ZM33.5001 39.6C33.5001 40.8152 32.5153 41.8 31.3001 41.8H13.7001C12.485 41.8 11.5001 40.8152 11.5001 39.6V4.4C11.5001 3.18484 12.485 2.2 13.7001 2.2H31.3001C32.5153 2.2 33.5001 3.18484 33.5001 4.4V39.6Z" fill="#d96d20"></path>
                                                <path d="M22.5002 40.3336C23.7152 40.3336 24.7002 39.3486 24.7002 38.1336C24.7002 36.9186 23.7152 35.9336 22.5002 35.9336C21.2851 35.9336 20.3002 36.9186 20.3002 38.1336C20.3002 39.3486 21.2851 40.3336 22.5002 40.3336Z" fill="#d96d20"></path>
                                                <path d="M18.4666 5.86699C19.0741 5.86699 19.5666 5.3745 19.5666 4.76699C19.5666 4.15948 19.0741 3.66699 18.4666 3.66699C17.8591 3.66699 17.3666 4.15948 17.3666 4.76699C17.3666 5.3745 17.8591 5.86699 18.4666 5.86699Z" fill="#d96d20"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Global Support</h6>
                                            <p>
                                                Join us and elevate your trading experience with CopyTradeHome.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="services_image">
                                <div className="experience">
                                    <h6 className="fs-18">Client Satisfaction</h6>
                                    <ul className="list-felling">
                                        <li className="icon"><a href="#"><img src="/assets/images/icon-1.png" alt="" /></a></li>
                                        <li className="icon"><a href="#"><img src="/assets/images/icon-2.png" alt="" /></a></li>
                                        <li className="icon"><a href="#"><img src="/assets/images/icon-3.png" alt="" /></a></li>
                                        <li className="icon"><a href="#"><img src="/assets/images/icon-4.png" alt="" /></a></li>
                                        <li className="icon"><a href="#"><img src="/assets/images/icon-5.png" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="crypto-box">
                                    <img className="arrow" src="/assets/images/Arrow.png" alt="" />
                                    <div className="left">
                                        <img src="/assets/images/bitcoin.png" alt="" />
                                        <div>
                                            <h6>BTC</h6>
                                            <p>+1.46%</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <h6 className="price">$56,623.54</h6>
                                        {/* Chart placeholder if needed, static for now or can add later */}
                                    </div>
                                </div>
                                <div className="shape"></div>
                                <div className="user-card">
                                    <div className="info">
                                        <img src="/assets/images/user.jpg" alt="" />
                                        <h6>Expert Trader</h6>
                                        <p>Professional Signal Provider</p>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Portfolio</h6>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.556641 12.6349L0.556641 12.6351C0.555778 18.596 5.38811 23.4291 11.3462 23.4291L0.556641 12.6349ZM0.556641 12.6349C0.554914 6.67409 5.3871 1.8418 11.348 1.8418C17.3089 1.8418 22.1413 6.67494 22.1413 12.6359C22.1413 18.5958 17.3091 23.4282 11.3462 23.4291L0.556641 12.6349Z" stroke="#B1B5C3"></path>
                                            <path d="M15.7919 9.86931C15.6464 8.3568 14.3408 7.84992 12.691 7.70535V5.60645H11.4143V7.64933C11.0791 7.64933 10.7358 7.65566 10.3951 7.66288V5.60645H9.11844L9.11754 7.70354C8.84106 7.70896 8.5691 7.71439 8.30436 7.71439V7.70806L6.54338 7.70716V9.07149C6.54338 9.07149 7.48667 9.05342 7.47041 9.07059C7.98813 9.07059 8.15618 9.37056 8.20497 9.62987V12.0206C8.24112 12.0206 8.2872 12.0224 8.3396 12.0297H8.20497L8.20407 15.3791C8.18148 15.5417 8.08571 15.801 7.7243 15.8019C7.74056 15.8164 6.79637 15.8019 6.79637 15.8019L6.54248 17.3271H8.20497C8.51398 17.3271 8.81847 17.3325 9.11664 17.3343L9.11754 19.4567H10.3933V17.3569C10.743 17.3641 11.0818 17.3668 11.4134 17.3668L11.4125 19.4567H12.6892V17.3388C14.836 17.2159 16.3404 16.6747 16.5265 14.658C16.6774 13.0344 15.9139 12.3088 14.695 12.0161C15.4368 11.6402 15.9003 10.9761 15.7919 9.86931ZM14.0047 14.4068C14.0047 15.9925 11.2896 15.8127 10.4231 15.8127V13.0001C11.2896 13.0019 14.0047 12.7534 14.0047 14.4068ZM13.4102 10.4394C13.4102 11.8824 11.1442 11.7134 10.4231 11.7143V9.16456C11.1451 9.16456 13.4111 8.93506 13.4102 10.4394Z" fill="#B1B5C3"></path>
                                            <path d="M8.20801 11.9639H8.39775V12.1039H8.20801V11.9639Z" fill="#B1B5C3"></path>
                                        </svg>
                                        <p>Balance</p>
                                        <h6 className="price">$2,509.75 <span>+9.77%</span></h6>
                                        <div className="button">
                                            <Link to="/register">Join Now</Link>
                                            <Link to="/contact">Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Services Section */}

            {/* Trading Steps Section - Our Values */}
            <section className="trading">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="trading__image">
                                <img src="/assets/images/trading-01.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="trading__content" data-aos="fade-up" data-aos-duration="1000">
                                <h3 className="heading">Our Values &amp; Principles</h3>
                                <p className="desc fs-20">
                                    At CopyTradeHome, we are committed to excellence, transparency, and continuous innovation.
                                </p>
                                <ul className="list-steps">
                                    <li>
                                        <img src="/assets/images/Cloud.png" alt="" />
                                        <div className="content">
                                            <p className="step">Value 1</p>
                                            <h6 className="title">Our Mission</h6>
                                            <p className="fs-16">
                                                At CopyTradeHome, our mission is to empower traders with innovative tools, expert guidance, and comprehensive support.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/assets/images/Wallet.png" alt="" />
                                        <div className="content">
                                            <p className="step">Value 2</p>
                                            <h6 className="title">Our Vision</h6>
                                            <p className="fs-16">
                                                To be the leading global forex trading platform, recognized for our commitment to innovation, education, and client success.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/assets/images/Mining.png" alt="" />
                                        <div className="content">
                                            <p className="step">Value 3</p>
                                            <h6 className="title">Our Expertise</h6>
                                            <p className="fs-16">
                                                CopyTradeHome combines expert forex professionals with cutting-edge technology for market insights.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Trading Steps Section */}

            {/* Testimonials Section */}
            <section className="testimonials-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12 left">
                            <div className="block-text center">
                                <h3 className="heading">What our Traders say</h3>
                                <p className="desc">
                                    Our traders from all over the world share their lovely words about us.
                                </p>
                            </div>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 5000 }}
                                pagination={{ clickable: true, el: '.testimonial-pagination' }}
                                navigation={{ nextEl: '.testimonial-next', prevEl: '.testimonial-prev' }}
                                className="swiper-testimonial-2"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonials-box-2">
                                            <div className="quote-icon">"</div>
                                            <h4 className="title">{testimonial.title}</h4>
                                            <p className="text">{testimonial.text}</p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src={testimonial.img} alt={testimonial.name} />
                                                    <div className="content">
                                                        <h6 className="name">{testimonial.name}</h6>
                                                        <p className="position">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                                <img src={testimonial.logo} alt="" className="brand-logo" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="testimonial-controls">
                                <div className="swiper-button-prev testimonial-prev">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12L5 12" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 19L5 12L12 5" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div className="swiper-pagination testimonial-pagination"></div>
                                <div className="swiper-button-next testimonial-next">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 5L19 12L12 19" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="map-testimonial">
                                <img className="map" src="/assets/images/testimonials.png" alt="" />
                                <div className="list-img-absolute">
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="avatar-point"
                                            style={{
                                                top: testimonial.top,
                                                left: testimonial.left,
                                                borderColor: testimonial.color
                                            }}
                                        >
                                            <img src={testimonial.img} alt={testimonial.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonials Section */}

            {/* Join Section */}
            <section className="join">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="join__images">
                                <img src="/assets/images/join.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="join__content" data-aos="fade-up" data-aos-duration="1000">
                                <h3 className="heading">Join our trading global community</h3>
                                <p className="desc">
                                    At CopyTradeHome, we are dedicated to providing a secure, transparent, and reliable trading environment that prioritizes our clients' success and financial growth.
                                </p>
                                <div className="join__content-buttons">
                                    <Link to="/register" className="btn-action">Join now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Join Section */}

            <Footer />
        </div>
    );
};

export default About;
