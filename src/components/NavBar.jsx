import React from 'react'
import logImg from "../assets/logo.png"

export default function NavBar() {
  return (
    <div className='bg-[#1015aeea] h-[120px]'>
      <div className='flex px-[30px] p-[10px] gap-[15px] ]'>
      <img className='h-[50px] rounded-[50px] ' src={logImg} alt="" />
      <a className='font-black text-[34px] uppercase text-white text-h-[15px] leading-13 tracking-[1px] font-extrabold' href="">Village Voice</a>
      </div>
      <div className='flex list-none justify-around'>
        <a className='mt-[-20px] font-bold text-white py-[4px] px-[4px] hover:bg-[#e63946] mt-[10px] rounded-[8px]' href="">Home</a>
        <a className='mt-[-20px] font-bold text-white py-[4px] px-[4px] hover:bg-[#e63946] mt-[10px] rounded-[8px]' href="">File Complaints</a> 
        <a className='mt-[-20px] font-bold text-white py-[4px] px-[4px] hover:bg-[#e63946] mt-[10px] rounded-[8px]' href="">Track Complaints</a> 
        <a className='mt-[-20px] font-bold text-white py-[4px] px-[4px] hover:bg-[#e63946] mt-[10px] rounded-[8px]' href="">Login</a> 
        <a className='mt-[-20px] font-bold text-white py-[4px] px-[4px] hover:bg-[#e63946] mt-[10px] rounded-[8px]' href="">Register</a> 
        <a className='mt-[-20px] font-bold text-white py-[4px] px-[4px] hover:bg-[#e63946] mt-[10px] rounded-[8px]' href="">Contact</a>
      </div>
    </div>
  )
}
