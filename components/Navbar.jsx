"use client"
import React from 'react'
import Link from 'next/link'
import DragHandleIcon from '@mui/icons-material/DragHandle';

const Navbar = () => {
  return (
    <div className='h-[10vh] bg-white w-full p-10 flex items-center justify-between fixed top-0'>
        <Link href="/">
            <h1 className='font-semibold'>Lyf Insurance Service</h1>
        </Link>
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2 md:gap-3 hidden md:block'>
              <Link href="/" className='ring-1 ring-[#ccc] py-2 px-5 rounded-full m-1'>Login</Link>
              <Link href="/" className='bg-[#242424] text-white py-2 px-5 rounded-full'>Get Started</Link>
            </div>
            <DragHandleIcon />
        </div>
    </div>
  )
}

export default Navbar