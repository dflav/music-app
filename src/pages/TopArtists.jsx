import React from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const TopArtists = () => {
  const { data: songs, error, isFetching } = useGetTopChartsQuery()

  if (isFetching) return <Loader title='Loading top charts...' />
  if (error) return <Error title={error.data.message} />
  return <div>TopArtists</div>
}

export default TopArtists
