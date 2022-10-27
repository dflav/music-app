import React from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import Loader from '../components/Loader'
import DetailsHeader from '../components/DetailsHeader'
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore'

const ArtistDetails = () => {
  const { artist_id } = useParams()
  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(artist_id)

  const artist = artistData?.artists[artist_id].attributes

  if (isFetching) return <Loader title='Loading artist details...' />
  if (error) return <Error />
  return (
    <section className='flex flex-col'>
      <DetailsHeader title={artist?.name} img={artist?.artwork?.url} genre={artist?.genreNames[0]} />
    </section>
  )
}

export default ArtistDetails
