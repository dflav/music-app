import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SongActions from './SongActions'

const RelatedSongCard = ({ song, index, title, subtitle, img, songActionsHandler, playSongHandler }) => {
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const isActive = activeSong?.title === song?.title
  const isAlbum = !playSongHandler

  const linkClick = e => e.stopPropagation()

  const songInfo = isAlbum ? (
    <>
      <span className='text-xl font-bold text-white'>{title}</span>
      <span className='text-base text-gray-300 mt-1'>{subtitle}</span>
    </>
  ) : (
    <>
      <span className='text-xl font-bold text-white'>
        <Link to={`/songs/${song.key}`} title={title} onClick={linkClick}>
          {title}
        </Link>
      </span>

      <span className='text-base text-gray-300 mt-1'>
        <Link
          to={`/artists/${song?.artists?.[0]?.adamid}`}
          className='hover:underline'
          title={subtitle}
          onClick={linkClick}
        >
          {subtitle}
        </Link>
      </span>
    </>
  )

  return (
    <div
      className={`flex items-center w-full py-2 px-4 mb-2 rounded-lg cursor-pointer hover:bg-white/20 fast-transition ${
        isAlbum ? 'bg-transparent' : isActive ? 'bg-cyan-700' : 'bg-transparent'
      }`}
      onClick={isActive ? songActionsHandler : playSongHandler}
    >
      <h3 className='text-white font-bold text-base mr-3'>{index + 1}.</h3>
      <div className='flex flex-1 w-full items-center  justify-between '>
        <img src={img} alt={title} className='w-20 h-20 rounded-lg' />
        <div className='flex flex-1 flex-col justify-center mx-3'>{songInfo}</div>
        {isAlbum || <SongActions isActive={true} isPlaying={isActive && isPlaying} />}
      </div>
    </div>
  )
}

export default RelatedSongCard
