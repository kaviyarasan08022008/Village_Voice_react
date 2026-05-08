import React from 'react';

export default function Tracking() {
  return (
    <div className="flex items-center justify-center  bg-gray-50 py-12">
      <div className="max-w-md w-400 h-[350px] bg-[#f0f0f0] rounded-2xl ml-[500px] shadow-[0_0_10px_10px_rgba(4,8,255,0.2)] overflow-hidden p-7">
        {/* Card Header */}
        <div className="bg-[#0d47a1] p-[20px] text-center rounded-[8px]">
          <h2 className="text-[20px] font-bold text-white mb-2">Track Your Complaint</h2>
          <p className="text-white/80 text-[15px]">Enter your complaint ID to check status</p>
        </div>

        {/* Card Body */}
        <div className="py-[8px] flex flex-col items-center">
          <label className="block text-gray-800 text-lg font-bold mb-4">
            Complaint ID
          </label>
          <input
            type="text"
            placeholder="Enter Complaint ID (e.g., CRT5)"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md  mb-4 text-center"
          />
          <button className="bg-[#ffa000] hover:bg-[#ff8f00] text-white font-bold py-2 px-5 rounded-md shadow-md transition-colors duration-200 tracking-wide">
            Track Complaints
          </button>
        </div>
      </div>
    </div>
  );
}
