import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatsOverview from '../components/copy-trading/StatsOverview';
import StrategyFilter from '../components/copy-trading/StrategyFilter';
import StrategyCardList from '../components/copy-trading/StrategyCardList';
import HowItWorksSection from '../components/copy-trading/HowItWorksSection';

import api from '../utils/axios';
import { toast } from 'react-toastify';

const CopyExpertPage = () => {
    const [strategies, setStrategies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allStrategies, setAllStrategies] = useState([]); // Store full list for filtering

    const fetchExperts = async () => {
        try {
            const { data } = await api.get('/copy-trading/experts');
            if (data.success) {
                // Map backend data to StrategyCard format
                const mapped = data.data.map(expert => ({
                    id: expert._id,
                    name: expert.name,
                    handle: `@${expert.name.toLowerCase().replace(/\s/g, '')}`,
                    avatar: expert.avatar,
                    monthlyReturn: parseFloat(expert.profitShare),
                    risk: 4, // Default
                    investors: expert.copiers,
                    id: expert._id,
                    minInvestment: 100,
                    description: `Professional trader with ${expert.winRate}% win rate.`,
                    isPopular: expert.copiers > 50,
                    isNew: false,
                    // Mock fields for UI
                    leverage: '1:500',
                    fees: '15%',
                    duration: '2 Years',
                    activity: 'High',
                    totalFollowers: expert.copiers + 120,
                    chartData: [10, 15, 12, 25, 30, 28, 40] // Mock chart
                }));
                setStrategies(mapped);
                setAllStrategies(mapped);
            }
        } catch (error) {
            console.error(error);
            // Fallback to mock if API fails? Or just empty.
            // setStrategies(MOCK_STRATEGIES); 
            toast.error('Failed to load experts');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExperts();
    }, []);

    const handleFilterChange = (filters) => {
        let filtered = [...allStrategies]; // Filter from all fetched strategies

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

        setStrategies(filtered);
        setCurrentPage(1);
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
