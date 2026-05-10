import React from 'react';

export default function Contact() {
  return (
    <div className="w-full flex-1 flex flex-col justify-center bg-white">
      {/* Page Title */}
      <div className="py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1a1a1a]">
          You Need Help? Contact us
        </h1>
      </div>

      {/* Contact Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-6 pb-12 max-w-7xl mx-auto">
        
        {/* Helpline Card */}
        <div className="group w-[400px] max-md:w-full h-[360px] bg-[#f4c56b] rounded-[24px] border-2 border-black flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 cursor-pointer">
          <div className="mb-10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-28 h-28 text-black" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m3.5-3.5a5.5 5.5 0 015.5 5.5" />
            </svg>
          </div>
          <div className="text-center space-y-3">
            <h3 className="text-[22px] font-bold text-black uppercase tracking-wide">24/7 Helpline</h3>
            <p className="text-[24px] font-black text-black">1800-111-555</p>
          </div>
        </div>

        {/* Email Support Card */}
        <div className="group w-[400px] max-md:w-full h-[360px] bg-[#f4c56b] rounded-[24px] border-2 border-black flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 cursor-pointer">
          <div className="mb-10 relative">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-28 h-28 text-black" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="absolute top-2 right-2 w-5 h-5 bg-black rounded-full border-[3px] border-[#f4c56b]"></div>
          </div>
          <div className="text-center space-y-3 px-6">
            <h3 className="text-[22px] font-bold text-black uppercase tracking-wide">Email Support</h3>
            <p className="text-[24px] font-black text-black break-all">help@anticorruption.gov.in</p>
          </div>
        </div>

      </div>
    </div>
  );
}
