
import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {

  const {profileId} = useParams();

  return (
    <div className='text-white text-5xl py-10 px-36'>Profile Page {profileId}</div>
  )
}

export default ProfilePage