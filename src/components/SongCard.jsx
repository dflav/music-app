import React from 'react'
import { useSelector } from 'react-redux'

function SongCard({ song, index }) {
  const { activeSong } = useSelector(state => state.player)

  return (
    <div className='flex flex-col bg-white/5  w-[250px] p-4 rounded-lg cursor-pointer animate-slideup'>
      <div className=' relative h-56 group w-full'>
        <div className={`absolute bg-gray-900 inset-0 bg-opacity-50 justify-center items-center group-hover: `}>
          {/* <img src={song.images.coverart} alt='' className='' /> */}
        </div>
      </div>
    </div>
  )
}

export default SongCard
