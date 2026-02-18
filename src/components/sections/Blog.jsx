import React from 'react';

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h3 className="heading">Latest News</h3>
                            <p className="desc">
                                Stay updated with the latest market news and trading insights.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="blog-box">
                            <div className="box-image">
                                <img src="/assets/images/2023-14006765661701533851.jpg" alt="UK Legislators urge caution in retail digital pound rollout" />
                            </div>
                            <div className="box-content">
                                <a href="#" className="title">UK Legislators urge caution in retail digital pound rollout</a>
                                <div className="meta">
                                    <a href="#" className="time">Dec 02, 2023</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-box">
                            <div className="box-image">
                                <img src="/assets/images/2022-2157804491661545278.jpg" alt="Coinbase Launches Voter Registration Tool Ahead of November Elections" />
                            </div>
                            <div className="box-content">
                                <a href="#" className="title">Coinbase Launches Voter Registration Tool Ahead of November Elections</a>
                                <div className="meta">
                                    <a href="#" className="time">Aug 26, 2022</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-box">
                            <div className="box-image">
                                <img src="/assets/images/news6.jpeg" alt="New Research Suggests Satoshi Nakamoto Lived in London Creating Bitcoin" />
                            </div>
                            <div className="box-content">
                                <a href="#" className="title">New Research Suggests Satoshi Nakamoto Lived in London Creating Bitcoin</a>
                                <div className="meta">
                                    <a href="#" className="time">Oct 21, 2021</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
