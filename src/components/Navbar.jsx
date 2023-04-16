import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO.</h1>
      <ul className='hidden md:flex whitespace-nowrap'>
        <li className='p-4'>Suaugusiems</li>
        <li className='p-4'>Vaikams</li>
        <li className='p-4'>Tvarkaraštis</li>
        <li className='p-4'>Kainos</li>
        <li className='p-4'>Stovykla</li>
        <li className='p-4'>Kitos paslaugos</li>
        <li className='p-4'>Kontaktai</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] md:hidden'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LOGO.</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Suaugusiems</li>
          <li className='p-4 border-b border-gray-600'>Vaikams</li>
          <li className='p-4 border-b border-gray-600'>Tvarkaraštis</li>
          <li className='p-4 border-b border-gray-600'>Kainos</li>
          <li className='p-4 border-b border-gray-600'>Stovykla</li>
          <li className='p-4 border-b border-gray-600'>Kitos paslaugos</li>
          <li className='p-4 border-b border-gray-600'>Kontaktai</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar