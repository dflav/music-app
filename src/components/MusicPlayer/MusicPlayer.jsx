import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const MusicPlayer = () => {
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.volume = 0.1
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [activeSong, isPlaying])

  return <audio ref={audioRef} src={activeSong?.hub?.actions?.[1]?.uri} type='audio/mpeg' />
}

export default MusicPlayer
