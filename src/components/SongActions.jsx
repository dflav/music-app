import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const SongActions = ({ isPlaying, isActive }) => {
  const actionClasses = `text-gray-300 hover-transition group-hover:opacity-100 
${isActive ? 'opacity-100' : 'opacity-0'} `

  return isPlaying && isActive ? (
    <FaPauseCircle size={42} className={actionClasses} />
  ) : (
    <FaPlayCircle size={42} className={actionClasses} />
  )
}

export default SongActions
