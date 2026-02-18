import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/contact.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        submitting: false,
        message: '',
        type: '' // 'success' or 'error'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ submitting: true, message: '', type: '' });

        // Simulate API call or replace with actual endpoint
        try {
            // Placeholder for API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success response simulation
            setSubmitStatus({
                submitting: false,
                message: 'Message submitted successfully!',
                type: 'success'
            });
            setFormData({
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                message: ''
            });

            setTimeout(() => {
                setSubmitStatus({ submitting: false, message: '', type: '' });
            }, 5000);

        } catch (error) {
            setSubmitStatus({
                submitting: false,
                message: 'An error occurred. Please try again.',
                type: 'error'
            });
        }
    };

    return (
        <div style={{ backgroundColor: 'var(--body-bg)' }}>
            <Header />

            {/* Banner Section */}
            <section className="banner banner-small">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <div className="banner__content text-center">
                                <h2 className="title">Get In Touch</h2>
                                <p className="fs-20 desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
                                    Let's collaborate and create powerful solutions together. We're here to help with any questions or concerns you may have.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Banner Section */}

            {/* Contact Info Cards */}
            <section className="crypto-stats contact-info-section" data-aos="fade-up" data-aos-duration="1000">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="stat-box contact-info-box">
                                <div className="stat-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#d96d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <h5 className="info-title">Contact Us</h5>
                                <p className="info-text">
                                    <a href="tel:+1 (747) 274 7485">+1 (747) 274 7485</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="stat-box contact-info-box">
                                <div className="stat-icon green">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M22 6L12 13L2 6" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <h5 className="info-title">Email Us</h5>
                                <p className="info-text">
                                    <a href="mailto:info@copytradehome.com">info@copytradehome.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="stat-box contact-info-box">
                                <div className="stat-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#d96d20" strokeWidth="2"></circle>
                                        <path d="M12 6V12L16 14" stroke="#d96d20" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </div>
                                <h5 className="info-title">Working Hours</h5>
                                <p className="info-text">
                                    Mon - Fri: 08AM - 10PM<br />
                                    Sat - Sun: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Info Cards */}

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form-card" data-aos="fade-up" data-aos-duration="1000">
                                <div className="block-text center mb-5" style={{ textAlign: 'center' }}>
                                    <h3 className="heading">Have Any Questions?</h3>
                                    <p className="fs-18 desc">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="firstname"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    required
                                                    value={formData.firstname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="lastname"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    required
                                                    value={formData.lastname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    rows="6"
                                                    placeholder="Write your message..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn-action w-100" disabled={submitStatus.submitting}>
                                                <span>{submitStatus.submitting ? 'Sending...' : 'Submit Message'}</span>
                                            </button>
                                            {submitStatus.message && (
                                                <div id="msgSubmit" className={submitStatus.type} style={{ display: 'block', marginTop: '15px', textAlign: 'center' }}>
                                                    {submitStatus.message}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Form Section */}

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="map-container" data-aos="fade-up" data-aos-duration="1000">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Map Section */}

            <Footer />
        </div>
    );
};

export default Contact;
