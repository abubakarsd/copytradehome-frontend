import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatsOverview from '../components/copy-trading/StatsOverview';
import StrategyFilter from '../components/copy-trading/StrategyFilter';
import StrategyCardList from '../components/copy-trading/StrategyCardList';

import { MOCK_STRATEGIES } from '../data/mockStrategies';

import HowItWorksSection from '../components/copy-trading/HowItWorksSection';

const CopyExpertPage = () => {
    const [strategies, setStrategies] = useState(MOCK_STRATEGIES);

    const handleFilterChange = (filters) => {
        // Basic client-side filtering logic
        let filtered = MOCK_STRATEGIES;

        if (filters.search) {
            const term = filters.search.toLowerCase();
            filtered = filtered.filter(s =>
                s.name.toLowerCase().includes(term) ||
                s.handle.toLowerCase().includes(term) ||
                s.description.toLowerCase().includes(term)
            );
        }

        if (filters.minReturn) {
            filtered = filtered.filter(s => s.monthlyReturn >= parseInt(filters.minReturn));
        }

        if (filters.maxCapital) {
            filtered = filtered.filter(s => s.minInvestment <= parseInt(filters.maxCapital));
        }

        // Sorting
        if (filters.sortBy === 'performance') {
            filtered.sort((a, b) => b.monthlyReturn - a.monthlyReturn);
        } else if (filters.sortBy === 'popularity') {
            filtered.sort((a, b) => b.investors - a.investors);
        }
        // "newest" would rely on a date field we don't strictly have in mock, ignoring for now

        setStrategies([...filtered]);
        setCurrentPage(1); // Reset to first page on filter change
    };

    // Pagination Logic
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStrategies = strategies.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(strategies.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container-fluid page-container main-body-container">
            {/* Page Header (Breadcrumb) */}
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <h1 className="page-title fw-medium fs-18 mb-0">Copy Trading Strategies</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Copy Trading</li>
                    </ol>
                </div>
            </div>

            {/* Main Content */}
            <div className="row">
                <div className="col-xl-12">

                    <StrategyFilter onFilterChange={handleFilterChange} />

                    <div className="mb-4 d-flex align-items-center justify-content-between">
                        <h5 className="fw-semibold mb-0">Market Overview</h5>
                        <Link to="#" className="btn btn-sm btn-light">View All Stats</Link>
                    </div>

                    <StatsOverview />

                    <div className="mb-4 d-flex align-items-center justify-content-between">
                        <h5 className="fw-semibold mb-0">Featured Strategies</h5>
                        <div className="d-flex gap-2">
                            {/* Optional list view/grid view toggles could go here */}
                        </div>
                    </div>

                    {currentStrategies.length > 0 ? (
                        <StrategyCardList
                            strategies={currentStrategies}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={paginate}
                        />
                    ) : (
                        <div className="alert alert-info text-center">
                            No strategies found matching your filters.
                        </div>
                    )}

                    <HowItWorksSection />

                </div>
            </div>
        </div>
    );
};

export default CopyExpertPage;
