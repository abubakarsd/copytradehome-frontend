import React, { useState, useEffect } from 'react';
import api from '../../utils/axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminUsers = () => {
    // Mock Data
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const { data } = await api.get('/admin/users');
            if (data.success) {
                // Map backend data to frontend format
                const mappedUsers = data.data.map(user => ({
                    id: user._id,
                    name: user.profile?.fullname || 'N/A',
                    email: user.email,
                    country: user.profile?.country || 'N/A',
                    balance: '---', // Balance requires separate fetch/aggregation
                    status: user.isBanned ? 'Banned' : (user.isVerified ? 'Active' : 'Unverified'),
                    joined: new Date(user.createdAt).toLocaleDateString()
                }));
                setUsers(mappedUsers);
            }
        } catch (error) {
            toast.error('Failed to load users');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAction = async (id, action) => {
        if (action === 'delete') {
            if (window.confirm('Delete functionality is currently disabled for safety.')) {
                // api.delete(...)
            }
        } else if (action === 'ban' || action === 'activate') {
            try {
                const { data } = await api.put(`/admin/users/${id}/toggle-ban`);
                if (data.success) {
                    toast.success(`User ${data.data.isBanned ? 'banned' : 'activated'} successfully`);
                    fetchUsers(); // Refresh list
                }
            } catch (error) {
                toast.error('Failed to update user status');
            }
        } else if (action === 'login') {
            toast.info('Impersonation is not yet implemented backend-side');
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
