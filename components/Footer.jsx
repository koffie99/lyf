"use client"
import React from 'react'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Footer = () => {
  return (
    <div className='min-h-[100%] px-24 pb-24 pt-6 px-24 flex items-center justify-between border-t-2 border-t-[#ccc]'>
        <div className='flex items-center gap-5'>
            <Link href={"/"}>Terms</Link>
            <Link href={"/"}>Policy</Link>
        </div>
        <div>
            <ArrowRightAltIcon className='ring-1 ring-[#ccc] rounded-full p-2 text-4xl'/>
        </div>
    </div>
  )
}

export default Footer