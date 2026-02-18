import React from 'react';
import StrategyCard from './StrategyCard';

const StrategyCardList = ({ strategies, currentPage, totalPages, onPageChange }) => {
    // Helper to generate page numbers
    const getPageNumbers = () => {
        const pages = [];
        // Show limited window of pages to avoid overcrowding
        // For simplicity and matching request "1 2 3", we can show a sliding window
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + 2);

        // Adjust if we are at the end
        if (endPage - startPage < 2) {
            startPage = Math.max(1, endPage - 2);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="vstack gap-6">
            <div className="row g-4">
                {strategies.map((strategy) => (
                    <div className="col-xxl-3 col-xl-6 col-lg-12" key={strategy.id}>
                        <StrategyCard strategy={strategy} />
                    </div>
                ))}
            </div>

            {/* Dynamic Pagination */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <ul className="pagination justify-content-center">
                        {/* Page Numbers */}
                        {pageNumbers.map(number => (
                            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                <a
                                    className="page-link"
                                    href="javascript:void(0);"
                                    onClick={() => onPageChange(number)}
                                >
                                    {number}
                                </a>
                            </li>
                        ))}

                        {/* Next Button (») */}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <a
                                className="page-link"
                                href="javascript:void(0);"
                                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                            >
                                »
                            </a>
                        </li>

                        {/* Last Button */}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <a
                                className="page-link"
                                href="javascript:void(0);"
                                onClick={() => onPageChange(totalPages)}
                            >
                                Last
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StrategyCardList;
