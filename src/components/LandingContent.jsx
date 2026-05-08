import React from 'react'

function LandingContent() {
  return (
    <div className='flex flex-col items-center justify-center w-full text-center px-6 py-12'>
      <h1 className='text-[45px] font-black text-black mb-[10px]  '>
        Report Government Coruption
      </h1>
      
      <div className='max-w-3xl mb-6'>
        <p className='text-[18px] font-bold text-black'>
          Stand against corruption in villages. Report officials who abuse
        </p>
        <p className='text-[18px] font-bold text-black'>
          their power.
        </p>
        <p className='text-[18px] font-bold text-black'>
          Your identity is protected, your voice matters.
        </p>
      </div>
      
      <h3 className='font-bold text-[18px] text-black mb-15'>
        To Stands Against Village Coruption/கிராமத்தில் ஊழலுக்கு 
        <br />எதிராக நிற்க
      </h3>
      
      <div className='flex gap-[350px] p-[76px]'>
        <button className="relative px-20 py-3 font-bold text-[18px] rounded-lg border-2 border-[#e76000] min-w-[300px] bg-white text-[#e76000] shadow-md overflow-hidden group transition-all duration-300">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            File Complaints
          </span>
          <span className="absolute top-0 left-0 h-full w-0 bg-[#e76000] transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
        </button>
        
        <button className="relative px-20 py-3 font-bold text-[18px] rounded-lg border-2 border-[#0132c7] min-w-[300px] bg-white text-[#0132c7] shadow-md overflow-hidden group transition-all duration-300">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            File Tracking
          </span>
          <span className="absolute top-0 left-0 h-full w-0 bg-[#0132c7] transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
        </button>
      </div>
    </div>
  )
}

export default LandingContent
