import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setActiveSong, playSongToggle } from '../redux/features/playerSlice'
import SongActions from './SongActions'

function SongCard({ song, index, playlist }) {
  const dispatch = useDispatch()

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const playSongHandler = () => dispatch(setActiveSong({ song, index, playlist }))

  const songActionsHandler = () => dispatch(playSongToggle())

  const isActive = activeSong?.title === song.title

  const linkClick = e => e.stopPropagation()

  return (
    <div
      className='flex flex-col bg-white/[.08] hover:bg-white/20 shadow-lg w-[250px] p-4 rounded-lg cursor-pointer animate-slideup smooth-transition group'
      onClick={isActive ? songActionsHandler : playSongHandler}
    >
      <div className=' relative h-[218px] w-full'>
        <div
          className={`absolute bg-slate-900 inset-0 justify-center items-center group-hover:bg-opacity-50 smooth-transition flex ${
            isActive ? 'bg-opacity-70' : 'bg-opacity-0'
          }`}
        >
          <SongActions isPlaying={isPlaying} isActive={isActive} />
        </div>
        <img src={song.images?.coverart} alt={song.title} />
      </div>
      <div className='mt-4 flex flex-col '>
        <span className='text-lg text-white font-semibold truncate'>
          <Link to={`/songs/${song.key}`} title={song.title} onClick={linkClick}>
            {song.title}
          </Link>
        </span>
        <span className='mt-1 text-gray-300 text-sm truncate'>
          <Link
            to={`/artists/${song.artists?.[0].adamid}`}
            className='hover:underline'
            title={song.subtitle}
            onClick={linkClick}
          >
            {song.subtitle}
          </Link>
        </span>
      </div>
    </div>
  )
}

export default SongCard
