import React from 'react'

function LandingContent() {
  return (
    <div className='grow-1 text-center px-[24px] py-[40px] h-[74vh]'>
      <h1 className='text-4xl font-extrabold mt-[15px]'>Report Government Coruption</h1>
      <h3 className=' font-bold text-[1.15rem] mb-4 mt-5 leading-1.9'>Stand against corruption in villages.Report officials who abuse <br /> their power <br />
        Your identity is protected, your voice matters</h3><br />
      <h3 className='font-bold text-[1.15rem] mb-4'>To Stands Against Village Coruption/கிராமத்தில் ஊழலுக்கு எதிராக நிற்க</h3>
      <div className=' flex justify-evenly mt-[130px]'>
        <button className="relative px-10 py-3 font-bold text-[16px] rounded-lg border-2 border-[#e76000] min-w-[270px] bg-white text-[#e76000] shadow-md overflow-hidden group transition-all duration-200">
          <span className="relative z-10 group-hover:text-white transition-colors duration-30">
            File Complaints
          </span>
          <span className="absolute top-0 left-0 h-full w-0 bg-[#e76000] transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
        </button>
        <button className="relative  font-bold text-[16px] rounded-lg border-2 border-[#0132c7] min-w-[270px] bg-white text-[#0132c7] shadow-md overflow-hidden group transition-all duration-200">
          <span className="relative z-10 group-hover:text-white duration-30">
            File Tracking
          </span>
          <span className="absolute top-0 left-0 h-full w-0 bg-[#0132c7] transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
        </button>      </div>
    </div>
  )
}

export default LandingContent
