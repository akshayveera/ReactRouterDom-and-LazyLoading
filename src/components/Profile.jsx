
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {

  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className='w-[100vw] h-[100vh] bg-[#333] p-36 flex gap-20'>
      <div className='text-white text-3xl list-none flex flex-col gap-10'>
        {profiles.map((i)=>{
          return (<Link to={'/profiles/' + i} key={i}>
              <li>Profile {i}</li>
          </Link>)
        })}
        
      </div>

      <Outlet/>

    </div>
  )
}

export default Profile