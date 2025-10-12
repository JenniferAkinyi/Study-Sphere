import React, { useState } from 'react'
import profilePic from '../../assets/profile.jpg'
import PostModal from './PostModal'

const PostComposer = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div 
        onClick={() => setModalOpen(true)}
        className='mx-auto mt-4 w-[50%] h-20 rounded-2xl bg-white border-gray-300 border
         cursor-pointer flex items-center gap-3 px-4 transition'>
        <img src={profilePic} alt="profile" className='object-cover w-10 h-10 rounded-full'/>
        <p className='text-gray-500'>Share your thoughts</p>
      </div>
      {isModalOpen && <PostModal onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default PostComposer