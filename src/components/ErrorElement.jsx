

import React from 'react'
import { Link } from 'react-router-dom'

const ErrorElement = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#333] p-36'>
      <h1 className='text-white text-5xl'>Not Found Error</h1>
      <Link to='/' >
        <button className='text-2xl text-white py-10'>
        Go to Home
        </button>
        </Link>
    </div>
  )
}

export default ErrorElement