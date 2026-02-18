import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminUsers = () => {
    // Mock Data
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', country: 'USA', balance: '$12,450.00', status: 'Active', joined: '2026-01-15' },
        { id: 2, name: 'Alice Smith', email: 'alice@test.com', country: 'UK', balance: '$450.00', status: 'Pending', joined: '2026-02-10' },
        { id: 3, name: 'Robert Brown', email: 'rob@demo.com', country: 'Canada', balance: '$0.00', status: 'Banned', joined: '2025-12-05' },
        { id: 4, name: 'Michael Lee', email: 'lee@crypto.net', country: 'Singapore', balance: '$55,000.00', status: 'Active', joined: '2026-01-22' },
        { id: 5, name: 'Sarah Connor', email: 'sarah@sky.net', country: 'USA', balance: '$2,300.00', status: 'Active', joined: '2026-02-14' },
    ]);

    const handleAction = (id, action) => {
        if (action === 'delete') {
            if (window.confirm('Are you sure you want to delete this user?')) {
                setUsers(users.filter(u => u.id !== id));
                toast.success('User deleted successfully');
            }
        } else if (action === 'ban') {
            setUsers(users.map(u => u.id === id ? { ...u, status: 'Banned' } : u));
            toast.warning('User has been banned');
        } else if (action === 'activate') {
            setUsers(users.map(u => u.id === id ? { ...u, status: 'Active' } : u));
            toast.success('User activated successfully');
        } else if (action === 'login') {
            toast.info(`Logging in as ${users.find(u => u.id === id).name}...`);
            // Logic to impersonate user would go here
        }
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>User Management | Admin Dashboard</title>
            </Helmet>

            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">User Management</h1>
                        <p className="mb-0 text-muted fs-13">View and manage all registered users.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">All Users</div>
                            <div className="d-flex gap-2">
                                <input type="text" className="form-control form-control-sm" placeholder="Search Name or Email..." />
                                <button className="btn btn-sm btn-primary-light">Filter</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>Balance</th>
                                            <th>Status</th>
                                            <th>Joined</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs me-2 bg-primary-transparent rounded-circle">{user.name.charAt(0)}</span>
                                                        <span className="fw-medium">{user.name}</span>
                                                    </div>
                                                </td>
                                                <td>{user.email}</td>
                                                <td>{user.country}</td>
                                                <td>{user.balance}</td>
                                                <td>
                                                    <span className={`badge bg-${user.status === 'Active' ? 'success' : user.status === 'Banned' ? 'danger' : 'warning'}-transparent`}>
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td>{user.joined}</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-sm btn-icon btn-light" type="button" data-bs-toggle="dropdown">
                                                            <i className="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li><button className="dropdown-item" onClick={() => handleAction(user.id, 'login')}><i className="bx bx-log-in-circle me-2"></i>Login as User</button></li>
                                                            <li><button className="dropdown-item" onClick={() => toast.info('View Details')}><i className="bx bx-show me-2"></i>View Details</button></li>
                                                            {user.status !== 'Banned' ? (
                                                                <li><button className="dropdown-item text-danger" onClick={() => handleAction(user.id, 'ban')}><i className="bx bx-block me-2"></i>Ban User</button></li>
                                                            ) : (
                                                                <li><button className="dropdown-item text-success" onClick={() => handleAction(user.id, 'activate')}><i className="bx bx-check-circle me-2"></i>Activate User</button></li>
                                                            )}
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><button className="dropdown-item text-danger" onClick={() => handleAction(user.id, 'delete')}><i className="bx bx-trash me-2"></i>Delete</button></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-end mb-0">
                                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
