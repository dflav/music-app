import React from 'react'
import { Link } from 'react-router-dom'

const DetailsHeader = ({ title, subtitle, img, genre, id }) => {
  return (
    <div className='w-full flex flex-col relative mb-10 mt-4 animate-slideright '>
      <div className='w-full bg-gradient-to-l from-transparent to-white/20 sm:h-48 h-28 rounded-tl-full rounded-bl-full' />
      <div className='absolute inset-0 flex items-center'>
        <img
          src={img}
          alt='coverart'
          className='sm:w-48 w-28 rounded-full border-2 object-cover shadow-xl shadow-gray-800'
        />
        <div className='ml-5 flex flex-col'>
          <span className='sm:text-3xl text-xl font-bold text-white'>{title}</span>
          {id && (
            <Link to={`/artists/${id}`} className='hover:underline text-base text-gray-300 mt-2'>
              {subtitle}
            </Link>
          )}

          <span className='text-base text-gray-300 mt-2'>{genre}</span>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader
