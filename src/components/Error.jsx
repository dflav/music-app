import React from 'react'

const Error = ({ title }) => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h1 className='font-bold text-2xl text-white mt-2'>{title || 'Something went wrong. Please try again.'}</h1>
    </div>
  )
}

export default Error
