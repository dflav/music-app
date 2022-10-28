import React from 'react'
import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ track }) => {
  const navigate = useNavigate()

  const artistClickHandler = () => navigate(`/artists/${track?.artists?.[0]?.adamid}`)
  return (
    <div
      className='flex flex-col bg-white/[.08] hover:bg-white/20 shadow-lg w-[250px] p-4 rounded-lg cursor-pointer animate-slideup smooth-transition group'
      onClick={artistClickHandler}
    >
      <img src={track?.images?.background} alt={track?.artists?.[0]?.alias} />
      <p className='text-lg mt-4 text-white font-semibold truncate' title={track?.subtitle}>
        {track?.subtitle}
      </p>
    </div>
  )
}

export default ArtistCard
