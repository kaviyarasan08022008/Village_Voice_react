import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const AdminPanel = () => {
    const navigate = useNavigate();
    const complaints = [
        { id: 'RPT19', title: 'PanchayatClerk', village: 'kandamanadi', date: '2026-04-07', status: 'Not Approved' },
        { id: 'RPT18', title: 'AgricultureOfficer', village: 'Janakipuram', date: '2024-04-07', status: 'In Progress' },
        { id: 'RPT5', title: 'EB', village: 'perungudi', date: '2026-03-03', status: 'Solved' },
        { id: 'RPT17', title: 'EB', village: 'pandrutti', date: '2026-03-12', status: 'Solved' },
        { id: 'RPT4', title: 'PoliceBribe', village: 'thiruvanmaiyur', date: '2026-03-04', status: 'Pending' },
        { id: 'RPT3', title: 'WaterDept', village: 'paramakudi', date: '2026-03-06', status: 'Solved' },
    ];

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className=" bg-gray-100 font-sans">
            {/* Header */}
            <header className="bg-[#1b25bd] h-30 flex items-center px-30 justify-between text-white shadow-md">
                <div className="flex items-center gap-4">
                    <Link to="/" className="bg-blue-400 p-1 rounded hover:bg-blue-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="h-16 w-16 rounded-full ml-60 bg-white" />
                        <h1 className="text-xl font-bold text-[34px] tracking-tight">VILLAGE VOICE | Collector Admin Panel</h1>
                    </div>
                </div>
                <button onClick={handleLogout}className="bg-red-600 px-7 py-2.5 rounded text-sm font-bold hover:bg-red-700 transition-colors">Logout</button>
            </header>

            <main className="p-6  mx-auto">
                <h2 className="text-[24px] font-bold mb-6 text-gray-800">Admin Summary (Dashboard)</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 grid-cols-3 gap-6 mb-12">
                    <div className="bg-[#cccccc] p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0.1)] border-[#212,211,212]">
                        <p className="text-gray-700 font-bold mb-2">Total Complaints</p>
                        <p className="text-[39px] font-extrabold">12</p>
                    </div>
                    <div className="bg-[#cccccc] p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0.1)] border-[#212,211,212]">
                        <p className="text-gray-700 font-bold mb-2">New / Pending</p>
                        <p className="text-[39px] font-extrabold">8</p>
                    </div>
                    <div className="bg-[#cccccc] p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0.1)] border-[#212,211,212]">
                        <p className="text-gray-700 font-bold mb-2">Resolved Complaints</p>
                        <p className="text-[39px] font-extrabold">4</p>
                    </div>
                </div>

                <h2 className="text-[26px] font-bold mb-6 text-gray-800">New and Pending Complaints</h2>

                {/* Complaints Table */}
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black text-white text-sm uppercase tracking-wider">
                                <th className="px-6 py-4">Complaint ID</th>
                                <th className="px-6 py-4">Grievance Title</th>
                                <th className="px-6 py-4">Village</th>
                                <th className="px-6 py-4">Date Filed</th>
                                <th className="px-6 py-4">Evidence</th>
                                <th className="px-6 py-4 text-center">Current Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {complaints.map((complaint, index) => (
                                <tr key={complaint.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{complaint.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{complaint.title}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{complaint.village}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{complaint.date}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="text-blue-600 hover:underline font-medium">View Evidence</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <select 
                                                className="border border-gray-300 rounded px-2 py-1 text-sm bg-white"
                                                defaultValue={complaint.status}>
                                                <option>Not Approved</option>
                                                <option>In Progress</option>
                                                <option>Solved</option>
                                                <option>Pending</option>
                                            </select>
                                            <button className="bg-green-500 text-white px-4 py-2 rounded text-xs font-bold hover:bg-green-600">
                                                Update
                                            </button>
                                            <button className="bg-red-500 text-white px-4 py-2 rounded text-xs font-bold hover:bg-red-600">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
