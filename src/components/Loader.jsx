import React from 'react'
import loader from '../assets/loader.svg'

const Loader = ({ title }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <img className='w-36 h-36' src={loader} alt='Loading...' />
      <h1 className='font-bold text-white text-2xl mt-2'>{title || 'Loading...'}</h1>
    </div>
  )
}

export default Loader
