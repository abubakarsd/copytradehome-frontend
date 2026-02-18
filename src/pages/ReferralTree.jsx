import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TreeNode = ({ node }) => {
    const [expanded, setExpanded] = useState(true);

    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="d-flex flex-column align-items-center mx-2">
            <div
                className={`card custom-card p-2 mb-2 border ${hasChildren ? 'cursor-pointer' : ''}`}
                style={{ width: '120px', minWidth: '120px', position: 'relative' }}
                onClick={() => hasChildren && setExpanded(!expanded)}
            >
                <div className="d-flex flex-column align-items-center text-center">
                    <span className="avatar avatar-sm bg-primary text-white mb-2 rounded-circle">
                        {node.name.charAt(0)}
                    </span>
                    <h6 className="fs-12 fw-semibold mb-0 text-truncate w-100">{node.name}</h6>
                    <span className="text-muted fs-10">{node.level}</span>
                </div>
                {hasChildren && (
                    <div
                        className="position-absolute start-50 translate-middle-x bg-white rounded-circle border d-flex align-items-center justify-content-center"
                        style={{ width: '20px', height: '20px', bottom: '-10px', fontSize: '10px' }}
                    >
                        <i className={`ps-1 bi bi-chevron-${expanded ? 'up' : 'down'}`}></i>
                    </div>
                )}
            </div>

            {hasChildren && expanded && (
                <div className="d-flex position-relative pt-3">
                    {/* Vertical connecting line from parent */}
                    <div className="position-absolute start-50 translate-middle-x" style={{ top: '-8px', width: '1px', height: '24px', backgroundColor: '#ddd' }}></div>

                    {node.children.map((child, index) => (
                        <div key={index} className="d-flex flex-column align-items-center position-relative">
                            {/* Horizontal connecting line logic */}
                            <div className="w-100 position-absolute top-0" style={{
                                height: '1px',
                                backgroundColor: '#ddd',
                                left: index === 0 ? '50%' : (index === node.children.length - 1 ? '-50%' : '0'),
                                width: index === 0 || index === node.children.length - 1 ? '50%' : '100%',
                                display: node.children.length === 1 ? 'none' : 'block'
                            }}></div>
                            {/* Vertical connecting line to child */}
                            <div className="position-absolute" style={{ top: '0', width: '1px', height: '16px', backgroundColor: '#ddd' }}></div>

                            <div className="mt-3">
                                <TreeNode node={child} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const ReferralTree = () => {
    // Mock Data
    const treeData = {
        name: "You",
        level: "Level 0",
        children: [
            {
                name: "John Doe",
                level: "Level 1",
                children: [
                    { name: "User A", level: "Level 2" },
                    { name: "User B", level: "Level 2" }
                ]
            },
            {
                name: "Jane Smith",
                level: "Level 1",
                children: [
                    {
                        name: "User C",
                        level: "Level 2",
                        children: [
                            { name: "User D", level: "Level 3" }
                        ]
                    }
                ]
            },
            {
                name: "Mike Ross",
                level: "Level 1"
            }
        ]
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Referral Tree</h1>
                        <p className="mb-0 text-muted fs-13">
                            Visualize your referral network hierarchy.
                        </p>
                    </div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                        <li className="breadcrumb-item"><Link to="/dashboard/referral">Referrals</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Tree</li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Network Visualization</div>
                        </div>
                        <div className="card-body overflow-auto" style={{ minHeight: '500px' }}>
                            <div className="d-flex justify-content-center pt-4">
                                <TreeNode node={treeData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralTree;
