import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { API_BASE_URL } from '../apiConfig';

const AdminPanel = () => {
    const navigate = useNavigate();
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/complaints`);
            const data = await response.json();
            if (response.ok) {
                setComplaints(data);
            } else {
                alert('Failed to fetch complaints');
            }
        } catch (error) {
            console.error('Error fetching complaints:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateStatus = async (id, newStatus) => {
        try {
            const response = await fetch(`${API_BASE_URL}/complaint/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (response.ok) {
                alert('Status updated successfully');
                fetchComplaints();
            } else {
                alert('Failed to update status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this complaint?')) return;
        try {
            const response = await fetch(`${API_BASE_URL}/complaint/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                alert('Complaint deleted successfully');
                fetchComplaints();
            } else {
                alert('Failed to delete complaint');
            }
        } catch (error) {
            console.error('Error deleting complaint:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const stats = {
        total: complaints.length,
        pending: complaints.filter(c => c.status === 'Pending' || c.status === 'In Progress').length,
        resolved: complaints.filter(c => c.status === 'Solved' || c.status === 'Resolved').length
    };

    return (
        <div className=" bg-gray-100 font-sans min-h-screen">
            {/* Header */}
            <header className="bg-[#1b25bd] h-24 flex items-center px-8 justify-between text-white shadow-md">
                <div className="flex items-center gap-4">
                    <Link to="/" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full bg-white" />
                        <h1 className="text-xl font-bold tracking-tight md:text-2xl">Collector Admin Panel</h1>
                    </div>
                </div>
                <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors shadow-lg">Logout</button>
            </header>

            <main className="p-6 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Summary</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                        <p className="text-gray-500 font-semibold mb-2">Total Complaints</p>
                        <p className="text-4xl font-black text-blue-900">{stats.total}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                        <p className="text-gray-500 font-semibold mb-2">Pending / In Progress</p>
                        <p className="text-4xl font-black text-orange-600">{stats.pending}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                        <p className="text-gray-500 font-semibold mb-2">Resolved</p>
                        <p className="text-4xl font-black text-green-600">{stats.resolved}</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Complaints</h2>

                {/* Complaints Table */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">
                                    <th className="px-6 py-4 font-bold">ID</th>
                                    <th className="px-6 py-4 font-bold">Category</th>
                                    <th className="px-6 py-4 font-bold">Village</th>
                                    <th className="px-6 py-4 font-bold">Date</th>
                                    <th className="px-6 py-4 font-bold">Evidence</th>
                                    <th className="px-6 py-4 font-bold text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {loading ? (
                                    <tr><td colSpan="6" className="text-center py-12 text-gray-500 font-medium">Loading complaints...</td></tr>
                                ) : complaints.length === 0 ? (
                                    <tr><td colSpan="6" className="text-center py-12 text-gray-500 font-medium">No complaints found.</td></tr>
                                ) : complaints.map((complaint) => (
                                    <tr key={complaint._id || complaint.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{(complaint._id || complaint.id).substring(0, 8)}...</td>
                                        <td className="px-6 py-4 text-sm text-gray-800 font-semibold">{complaint.category || complaint.title}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{complaint.village}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{new Date(complaint.date).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-sm">
                                            {complaint.evidenceUrl ? (
                                                <a href={complaint.evidenceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">View File</a>
                                            ) : <span className="text-gray-400 italic">No File</span>}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-3">
                                                <select 
                                                    className="border border-gray-300 rounded-lg px-2 py-1.5 text-xs bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                                                    value={complaint.status}
                                                    onChange={(e) => handleUpdateStatus(complaint._id || complaint.id, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Solved">Solved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                                <button 
                                                    onClick={() => handleDelete(complaint._id || complaint.id)}
                                                    className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-100 transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
