import React, { useState } from 'react';
import { API_BASE_URL } from '../apiConfig';

export default function Tracking() {
  const [complaintId, setComplaintId] = useState('');
  const [loading, setLoading] = useState(false);
  const [complaintData, setComplaintData] = useState(null);

  const handleTrack = async () => {
    if (!complaintId) {
      alert('Please enter a complaint ID');
      return;
    }

    setLoading(true);
    setComplaintData(null);

    try {
      const response = await fetch(`${API_BASE_URL}/complaint/${complaintId}`);
      const data = await response.json();

      if (response.ok) {
        setComplaintData(data);
      } else {
        alert(data.message || 'Complaint not found');
      }
    } catch (error) {
      console.error('Error tracking complaint:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-[0_0_20px_rgba(4,8,255,0.15)] overflow-hidden p-8">
        {/* Card Header */}
        <div className="bg-[#0d47a1] p-6 text-center rounded-xl mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Track Your Complaint</h2>
          <p className="text-white/80 text-sm">Enter your complaint ID to check status</p>
        </div>

        {/* Card Body */}
        <div className="flex flex-col items-center">
          <label className="block text-gray-800 text-lg font-bold mb-4">
            Complaint ID
          </label>
          <input
            type="text"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            placeholder="Enter Complaint ID (e.g., CRT5)"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg mb-6 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleTrack}
            disabled={loading}
            className={`w-full bg-[#ffa000] hover:bg-[#ff8f00] text-white font-bold py-3 px-5 rounded-lg shadow-md transition-all duration-200 tracking-wide ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Tracking...' : 'Track Complaint'}
          </button>
        </div>

        {/* Status Display */}
        {complaintData && (
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">Complaint Status</h3>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Category:</span> {complaintData.category}</p>
              <p><span className="font-semibold">Status:</span> 
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${complaintData.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {complaintData.status || 'Pending'}
                </span>
              </p>
              <p><span className="font-semibold">Last Update:</span> {new Date(complaintData.updatedAt || complaintData.date).toLocaleDateString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
