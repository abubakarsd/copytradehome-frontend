import React, { useState } from 'react';

const StrategyFilter = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        search: '',
        minReturn: '',
        maxCapital: '',
        sortBy: 'performance'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        if (onFilterChange) {
            onFilterChange(newFilters);
        }
    };

    return (
        <div className="row mb-4">
            <div className="col-xl-12">
                <div className="card custom-card currency-exchange-card border-0">
                    <div className="card-body p-sm-5 d-flex align-items-center justify-content-center">
                        {/* Background Image - replicating the style from HTML */}
                        <div className="crypto-currency-exchange-background">
                            <img src="/copy_expert_page_files/media-65.png" alt="" />
                        </div>
                        <div className="container position-relative">
                            <h3 className="text-center text-white">Find the Right Trader to Copy</h3>
                            <span className="d-block fs-16 text-center text-white-50 mb-4">
                                Filter strategies by performance, capital requirements and more, then start copying in a few clicks.
                            </span>

                            <div className="p-3 mb-4 rounded currency-exchange-area">
                                <div className="row gy-3 align-items-center justify-content-center">
                                    {/* Search */}
                                    <div className="col-xxl-3 col-12">
                                        <label className="form-label text-white-50 mb-1">Search Trader / Strategy</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white"><i className="ti ti-search"></i></span>
                                            <input
                                                type="text"
                                                className="form-control border-start-0"
                                                name="search"
                                                value={filters.search}
                                                onChange={handleChange}
                                                placeholder="e.g. Scalper, Swing, JohnFX"
                                            />
                                        </div>
                                    </div>

                                    {/* Min Return */}
                                    <div className="col-xxl-2 col-6">
                                        <label className="form-label text-white-50 mb-1">Min. Monthly Return</label>
                                        <select
                                            className="form-select"
                                            name="minReturn"
                                            value={filters.minReturn}
                                            onChange={handleChange}
                                        >
                                            <option value="">Any</option>
                                            <option value="5">5%+</option>
                                            <option value="10">10%+</option>
                                            <option value="15">15%+</option>
                                            <option value="20">20%+</option>
                                        </select>
                                    </div>

                                    {/* Max Min Investment */}
                                    <div className="col-xxl-2 col-6">
                                        <label className="form-label text-white-50 mb-1">Max Required Capital (USD)</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0 bg-white">$</span>
                                            <input
                                                type="number"
                                                className="form-control border-start-0"
                                                name="maxCapital"
                                                min="0"
                                                value={filters.maxCapital}
                                                onChange={handleChange}
                                                placeholder="e.g. 1000"
                                            />
                                        </div>
                                    </div>

                                    {/* Sort */}
                                    <div className="col-xxl-2 col-12">
                                        <label className="form-label text-white-50 mb-1">Sort By</label>
                                        <select
                                            className="form-select"
                                            name="sortBy"
                                            value={filters.sortBy}
                                            onChange={handleChange}
                                        >
                                            <option value="performance">Best Performance</option>
                                            <option value="popularity">Most Copied</option>
                                            <option value="newest">Newest First</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategyFilter;
