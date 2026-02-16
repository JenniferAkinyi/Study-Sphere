import React from 'react'
import { FaFire } from "react-icons/fa"
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const GoalCard = () => {
  const percentage = 66
  return (
    <>
      <div className='flex flex-row gap-2'>
        <div style={{width: 50, height: 50}}> 
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div>
          <div><h1>Daily Study Goal <span>4/5 hrs</span></h1></div>
          <div>
            <FaFire 
              size={20}
              className='text-red-500'
            />
            <p>5 Day Streak</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GoalCard