import React from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import { useGetChartsBySearchQuery } from '../redux/services/shazamCore'

const Search = () => {
  const { searchTerm } = useParams()
  const { data, error, isFetching } = useGetChartsBySearchQuery(searchTerm)

  const songs = data?.tracks?.hits?.map(song => song.track)

  if (isFetching) return <Loader title='Loading top charts...' />
  if (error) return <Error title={error.data.message} />

  return (
    <section className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Showing results for <span className='font-black'>{searchTerm}</span>
      </h2>

      <div className='flex flex-wrap justify-center sm:justify-start gap-8'>
        {songs?.map((song, index) => (
          <SongCard key={song.key} song={song} index={index} playlist={songs} />
        ))}
      </div>
    </section>
  )
}

export default Search
