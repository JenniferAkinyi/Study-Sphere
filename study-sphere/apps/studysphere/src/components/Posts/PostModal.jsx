import React, { useState } from 'react'
import { MdClose, MdImage, MdLink } from 'react-icons/md'
import Avatar  from "../Authentication/Avatar"
import { useUser } from '../../context/userContext'

const PostModal = ({onClose}) => {
    const [postText, setPostText] = useState("")
    const { userData } = useUser()
    
    const handlePost = () =>{
        onClose()
    }
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
        <div className='relative w-full max-w-lg p-5 bg-white border border-gray-300 rounded-2xl'>
            <button
                className='absolute text-gray-600 top-3 right-3 hover:text-gray-900'
                onClick={onClose}
            >
                <MdClose size={24}/>
            </button>
            <div className='flex items-center gap-3 mb-4'>
                <Avatar 
                    username = {userData?.username || "Guest user"}
                    profileImage={userData?.profileImage}
                    size={32}
                />
                <h3 className='font-semibold text-gray-800'>{userData?.username || "Guest user"}</h3>
            </div>
            <textarea 
                className='w-full min-h-[120px] resize-none border-none focus:outline-none text-gray-700'
                placeholder='Share your thoughts'
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
            />
            <div className='flex items-center justify-between mt-4'>
                <div className='flex gap-3 text-gray-600'>
                    <button className='hover:text-indigo-600'>
                        <MdImage size={22}/>
                    </button>
                    <button className='hover:text-indigo-600'>
                        <MdLink size={22}/>
                    </button>
                </div>
                <button
                    onClick={handlePost}
                    className='px-5 text-white bg-indigo-600 py-1.5 rounded-full font-medium hover:bg-indigo-700 transition'
                >
                    Post
                </button>
            </div>
        </div>
    </div>
  )
}

export default PostModal