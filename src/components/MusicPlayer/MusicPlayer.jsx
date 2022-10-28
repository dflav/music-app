import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playNextSong } from '../../redux/features/playerSlice'

const MusicPlayer = () => {
  const dispatch = useDispatch()
  const { activeSong, isPlaying, currentIndex } = useSelector(state => state.player)
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.volume = 0.1
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [activeSong, isPlaying])

  const nextSong = () => dispatch(playNextSong(currentIndex + 1))

  return <audio ref={audioRef} src={activeSong?.hub?.actions?.[1]?.uri} type='audio/mpeg' onEnded={nextSong} />
}

export default MusicPlayer
