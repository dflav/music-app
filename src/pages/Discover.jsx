import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { genres } from '../assets/constants.js'
import Error from '../components/Error.jsx'
import Loader from '../components/Loader.jsx'
import SongCard from '../components/SongCard.jsx'
import { setGenreListId } from '../redux/features/playerSlice.js'
import { useGetChartsByGenreQuery } from '../redux/services/shazamCore.js'

const selectGenre = genres.map(genre => (
  <option key={genre.value} value={genre.value}>
    {genre.title}
  </option>
))

const Discover = () => {
  const dispatch = useDispatch()
  const { genreId } = useSelector(state => state.player)

  const { data: songs, error, isFetching } = useGetChartsByGenreQuery(genreId)

  if (isFetching) return <Loader title='Loading songs...' />
  if (error) return <Error title={error.data.message} />

  const changeGenreHandler = e => dispatch(setGenreListId(e.target.value))

  const genre = genres.find(({ value }) => value === genreId).title

  return (
    <section className='flex flex-col'>
      <div className='flex justify-between items-center w-full flex-col sm:flex-row mt-4 mb-10 '>
        <h2 className='text-3xl font-bold text-white text-left'>Discover {genre}</h2>
        <select
          name='genres'
          id='genres'
          className='bg-cyan-400 text-gray-800 outline-none rounded-full p-3 text-sm mt-5 sm:mt-0 border-r-8 border-r-cyan-400 cursor-pointer'
          onChange={changeGenreHandler}
          value={genreId}
        >
          {selectGenre}
        </select>
      </div>

      <div className='flex flex-wrap justify-center sm:justify-start gap-8'>
        {songs?.map((song, index) => (
          <SongCard key={song.key} song={song} index={index} playlist={songs} />
        ))}
      </div>
    </section>
  )
}

export default Discover
