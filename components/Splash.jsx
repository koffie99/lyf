"use client"
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const Splash = () => {
  
  const handleEmail = () => {
    alert("Email sent successfully!");
  }

  return (
    <div className='min-h-[100%] p-18 py-24 md:p-24 w-full bg-white flex flex-col items-center justify-center gap-4 mt-11'>
        <div className='flex flex-col items-center text-center gap-5'>
            <h1 className='font-bold text-3xl w-[80%] leading-[1.6em] lg:leading-[1.5em] lg:text-5xl'>Life Planning, Making Easy to Turn Dreams a Reality.</h1>
            <p className='text-xl font-normal mb-2'>Get Exclusive offers on purchase on any plans</p>
            <form action="" className='flex items-center gap-2'>
                <div className='flex items-center gap-2 md:gap-3 ring-1 ring-[#242424] rounded-full py-2 px-5 md:px-7 mb-3'>
                    <SendIcon />
                    <input type="email" placeholder='Your Email' className='outline-none placeholder-[#242424] font-bold'/>
                </div>
                <button onClick={handleEmail} className='bg-[#242424] text-white text-center rounded-full py-2 px-7 mb-3'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Splash