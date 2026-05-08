import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [loginType, setLoginType] = useState('Login');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginType === 'Collector Login') {
      navigate('/admin');
    } else {
      // For now, redirect to home or tracking for 'People Login'
      navigate('/tracking');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-[0_0_10px_10px_rgba(0,0,0,0.2)] p-6">
        {/* Header Section */}
        <div className="bg-[#0d47a1] rounded-t-lg p-4 mb-8  h-[100px] flex items-center relative">
          <Link to="/" className="absolute left-4 bg-[#4a90e2] p-1 rounded-sm text-white hover:bg-blue-1000 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <h2 className="w-full text-center text-[25px] font-bold text-white">Select Login Type</h2>
        </div>

        {/* Login Type Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setLoginType('Collector Login')}
            className={`px-6 py-2 rounded-md font-semibold text-sm transition-colors shadow-md ${loginType === 'Collector Login' ? 'bg-[#185abe] text-white' : 'bg-[#0d47a1] text-white hover:bg-blue-1000'}`}
          >
            Collector
          </button>
          <button 
            onClick={() => setLoginType('People Login')}
            className={`px-6 py-2 rounded-md font-semibold text-sm transition-colors shadow-md ${loginType === 'People Login' ? 'bg-[#185abe] text-white' : 'bg-[#0d47a1] text-white hover:bg-blue-1000'}`}
          >
            People
          </button>
        </div>

        {/* Login Form Title */}
        <h3 className="text-center text-lg font-bold text-black mb-6">{loginType}</h3>

        {/* Form Fields */}
        <form onSubmit={handleLogin} className="space-y-4 px-4">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-800">Username :</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-800">Password :</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div className="text-left">
            <a href="#" className="text-xs text-purple-600 hover:underline">Forgot Password?</a>
          </div>

          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <button type="submit" className="bg-[#ffa000] hover:bg-[#ff8f00] text-white font-bold py-2 px-10 rounded-md shadow-md transition-colors duration-200">
              Login
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="text-center mt-6 text-sm text-gray-700">
          Don't have an account? <Link to="/register" className="text-purple-400 font-bold hover:underline">Register here</Link>
        </div>
      </div>
    </div>
  );
}
