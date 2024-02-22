

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='absolute  text-white w-full flex justify-center gap-20 text-xl my-10 '>
        <Link to='/' className=''>
            <li className='list-none hover:text-[#ccc]'>Home</li>
        </Link>
        <Link to='/profiles'>
            <li className='list-none hover:text-[#ccc]'>Profiles</li>
        </Link>
        <Link to='/services'>
            <li className='list-none hover:text-[#ccc]'>Services</li>
        </Link>
        <Link to='/about'>
            <li className='list-none hover:text-[#ccc]'>About us</li>
        </Link>
        
    </div>
  )
}

export default Header