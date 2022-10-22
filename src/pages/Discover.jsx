import React from 'react'
import { genres } from '../assets/constants.js'
import SongCard from '../components/SongCard.jsx'

const Discover = () => {
  const genre = 'Pop'
  return (
    <section className='flex flex-col'>
      <div className='flex justify-between items-center w-full flex-col sm:flex-row mt-4 mb-10 '>
        <h2 className='text-3xl font-bold text-white text-left'>Discover {genre}</h2>
        <select
          name='genres'
          id='genres'
          className='bg-slate-900 text-gray-400 outline-none rounded-xl p-3 text-sm mt-5 sm:mt-0 border-r-8 border-r-slate-900'
        >
          {genres.map(genre => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-wrap justify-center sm:justify-start gap-8'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} song={song} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Discover
