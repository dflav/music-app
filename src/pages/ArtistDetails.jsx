import React from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import Loader from '../components/Loader'
import DetailsHeader from '../components/DetailsHeader'
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore'
import RelatedSongCard from '../components/RelatedSongCard'

const ArtistDetails = () => {
  const { artist_id } = useParams()
  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(artist_id)

  const artist = artistData?.artists?.[artist_id]?.attributes

  if (isFetching) return <Loader title='Loading artist details...' />
  if (error) return <Error />

  return (
    <section className='flex flex-col'>
      <DetailsHeader title={artist?.name} img={artist?.artwork?.url} genre={artist?.genreNames[0]} />
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-white'>Related Songs:</h1>

        <div className='mt-6 w-full flex flex-col'>
          {Object.values(artistData?.songs)?.map((song, i) => (
            <RelatedSongCard
              key={artist_id + i}
              song={song}
              img={song?.attributes?.artwork?.url}
              title={song?.attributes?.name}
              subtitle={song?.attributes?.albumName}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArtistDetails
