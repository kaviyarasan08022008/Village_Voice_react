import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../apiConfig';

export default function FileComplaint() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        officerName: '',
        designation: '',
        village: '',
        district: '',
        collectorId: '',
        date: '',
        description: '',
        contactName: '',
        contactPhone: '',
        contactEmail: ''
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const submitData = new FormData();
        Object.keys(formData).forEach(key => {
            submitData.append(key, formData[key]);
        });
        submitData.append('isAnonymous', isAnonymous);
        if (file) {
            submitData.append('evidence', file);
        }

        try {
            const response = await fetch(`${API_BASE_URL}/complaint`, {
                method: 'POST',
                // Don't set Content-Type header when sending FormData; fetch will set it with boundary
                body: submitData,
            });

            const data = await response.json();

            if (response.ok) {
                alert('Complaint submitted successfully!');
                navigate('/tracking');
            } else {
                alert(data.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Error submitting complaint:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" bg-blue-50 py-5 flex justify-center items-start font-sans">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="fixed top-6 left-6 bg-blue-500 text-white p-2 rounded-lg shadow-lg hover:bg-blue-600 z-50"
                aria-label="Go back"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>

            <div className=" bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mt-10 max-w-4xl w-full mx-4">
                {/* Blue Header Section */}
                <div className="bg-[#1b25bd] text-white p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-600 to-transparent opacity-30"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">File Corruption Complaint</h1>
                        <p className="text-blue-100 text-base text-lg opacity-90">
                            All information is encrypted and secure. Your identity is protected.
                        </p>
                    </div>
                </div>

                <form className="p-8 md:p-12 space-y-8" onSubmit={handleSubmit}>
                    {/* Corruption Category */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Corruption Category <span className="text-red-500">*</span>
                        </label>
                        <select 
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border-1 border-gray-200 rounded-xl transition-all bg-gray-50 text-gray-800 font-medium cursor-pointer"
                        >
                            <option value="">Select Category</option>
                            <option value="water">Water Supply Officer Bribe (தண்ணீர் விநியோகம் லஞ்சம்)</option>
                            <option value="panchayat">Panchayat Clerk Misconduct (பஞ்சாயத்து எழுத்தாளர் முறைகேடு)</option>
                            <option value="eb">EB Office Bribe (மின்சார வாரிய லஞ்சம்)</option>
                            <option value="agriculture">Agriculture Officer Bribe (வேளாண்மை அலுவலர் லஞ்சம்)</option>
                            <option value="police">Police Misconduct (காவல்துறை முறைகேடு)</option>
                            <option value="other">Other Corruption (இதர ஊழல்)</option>
                        </select>
                    </div>

                    {/* Officer Info Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                                Officer / Official Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="officerName"
                                value={formData.officerName}
                                onChange={handleChange}
                                required
                                placeholder="Enter official name"
                                className="w-full p-3 border-2 border-gray-200 rounded-[12px] bg-gray-50 placeholder-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                                Designation / Position <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                required
                                placeholder="Enter designation"
                                className="w-full p-3 border-2 border-gray-200 rounded-xl bg-gray-50 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Location Info Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                                Village / Location <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="village"
                                value={formData.village}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Kandamanadi"
                                className="w-full p-3 border-2 border-gray-200 rounded-xl  bg-gray-50 placeholder-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                                District <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Villupuram"
                                className="w-full p-3 border-2 border-gray-200 rounded-xl bg-gray-50 placeholder-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                                Collector ID <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="collectorId"
                                value={formData.collectorId}
                                onChange={handleChange}
                                required
                                placeholder="Enter ID"
                                className="w-full p-3 border-2 border-gray-200 rounded-xl  bg-gray-50 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Incident Date */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Incident Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border-2 border-gray-200 rounded-xl  bg-gray-50 cursor-pointer"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Detail Description of Corruption <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full p-3 border-2 border-gray-200 rounded-xl  bg-gray-50 resize-none placeholder-gray-400"
                            placeholder="Please provide as much detail as possible about the incident..."
                        ></textarea>
                    </div>

                    {/* Evidence Upload */}
                    <div className="space-y-3">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Upload Evidence File:
                        </label>
                        <div className="group relative border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50 hover:bg-gray-100 transition-all">
                            <input 
                                type="file" 
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                            />
                            <div className="space-y-2 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p className="text-sm font-semibold text-gray-600">
                                    {file ? file.name : 'Click to upload or drag and drop'}
                                </p>
                                <p className="text-xs text-gray-400">PNG, JPG, PDF (max 10MB)</p>
                            </div>
                        </div>
                    </div>

                    {/* Anonymous Checkbox */}
                    <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <input type="checkbox" id="anonymous" checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} className="w-6 h-6 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <label htmlFor="anonymous" className="text-base font-bold text-[#1b25bd] cursor-pointer">Submit Anonymously</label>
                    </div>

                    {/* Contact Info (Optional) */}
                    {!isAnonymous && (
                        <div className="transition-all duration-300">
                            <div className="bg-gray-100 p-8 rounded-2xl space-y-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    Contact Information (optional)
                                </h3>
                                <div className="space-y-4">
                                    <input 
                                        type="text" 
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleChange}
                                        placeholder="Your Name" 
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl  bg-white"
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input 
                                            type="tel" 
                                            name="contactPhone"
                                            value={formData.contactPhone}
                                            onChange={handleChange}
                                            placeholder="Phone Number" 
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl  bg-white"
                                        />
                                        <input 
                                            type="email" 
                                            name="contactEmail"
                                            value={formData.contactEmail}
                                            onChange={handleChange}
                                            placeholder="Email Address" 
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl  bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center pt-6">
                        <button 
                            type="submit" 
                            disabled={loading}
                            className={`w-full md:w-auto bg-[#ff8c00] hover:bg-[#e67e00] rounded-2xl text-white shadow-xl hover:shadow-2xl font-extrabold py-5 px-16 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Submitting...' : 'Submit Complaint Securely'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
