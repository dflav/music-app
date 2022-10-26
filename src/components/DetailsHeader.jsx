import React from 'react'
import { Link } from 'react-router-dom'

const DetailsHeader = ({ id, data }) => {
  return (
    <div className='w-full flex flex-col relative'>
      <div className='w-full bg-gradient-to-l from-transparent to-white/20 sm:h-48 h-28 rounded-tl-full rounded-bl-full' />
      <div className='absolute inset-0 flex items-center'>
        <img
          src={
            'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-covers-d12ef0296af80b58363dc0deef077ecc-1552649680.jpg'
          }
          alt='coverart'
          className='sm:w-48 w-28 rounded-full border-2 object-cover shadow-xl shadow-gray-800'
        />
        <div className='ml-5'>
          <span className='sm:text-3xl text-xl font-bold text-white'>I'm Good</span>
          <span>
            <Link>
              <p>David Guetta</p>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader
