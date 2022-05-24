import React from 'react'
import Link from "next/link"

function Navbar() {
  return (
    <div className='text-white fixed top-0 w-screen flex justify-end items-center h-14 mx-[-100px]'>
      <Link href="/">
        <p className='px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300'>Home</p>
      </Link>
      <Link href="/about">
        <p className='px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300'>About</p>
      </Link>
      <Link href="/contact">
        <p className='px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300'>Contact</p>
      </Link>
    </div>
  )
}

export default Navbar