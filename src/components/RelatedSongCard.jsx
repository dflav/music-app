import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SongActions from './SongActions'

const RelatedSongCard = ({ song, index, id, img, songActionsHandler, playSongHandler }) => {
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const isPlayable = !!playSongHandler
  const isActive = activeSong?.title === song?.title

  return (
    <div
      className={`flex items-center w-full py-2 px-4 mb-2 rounded-lg cursor-pointer hover:bg-white/20 fast-transition ${
        isActive ? 'bg-cyan-700' : 'bg-transparent'
      }`}
      // onClick={isActive ? songActionsHandler : playSongHandler}
    >
      <h3 className='text-white font-bold text-base mr-3'>{index + 1}.</h3>
      <div className='flex flex-1 w-full items-center  justify-between '>
        <img src={img} alt={song.title} className='w-20 h-20 rounded-lg' />
        <div className='flex flex-1 flex-col justify-center mx-3'>
          <span className='text-xl font-bold text-white'>
            <Link
              to={`/songs/${song.key}`}
              title={song.title}
              //  onClick={linkClick}
            >
              {song.title}
            </Link>
          </span>

          <span className='text-base text-gray-300 mt-1'>
            <Link
              to={`/artists/${song.artists[0].adamid}`}
              className='hover:underline'
              title={song.subtitle}
              // onClick={linkClick}
            >
              {song.subtitle}
            </Link>
          </span>
        </div>
      </div>
      <div>
        <SongActions isActive={true} isPlaying={isActive && isPlaying} />
      </div>
    </div>
  )
}

export default RelatedSongCard
