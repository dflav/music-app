import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import Loader from '../components/Loader'
import DetailsHeader from '../components/DetailsHeader'
import { useGetRelatedSongsQuery, useGetSongDetailsQuery } from '../redux/services/shazamCore'
import { useDispatch } from 'react-redux'
import { playSongToggle, setActiveSong } from '../redux/features/playerSlice'
// import RelatedSongCard from '../components/RelatedSongCard'

const SongDetails = () => {
  // const dispatch = useDispatch()
  const { track_id } = useParams()

  const { data: songData, isFetching: isFetchingSongdetails } = useGetSongDetailsQuery(track_id)
  const { data: relatedSongs, isFetching: isFetchingrelatedSongs, error } = useGetRelatedSongsQuery(track_id)

  const lyrics =
    songData?.sections[1].type === 'LYRICS' &&
    songData?.sections[1].text.map((line, i) => (
      <Fragment key={songData.key + i}>
        {line} <br />
      </Fragment>
    ))

  // const playSongHandler = (song, index) => dispatch(setActiveSong({ song, index, relatedSongs }))
  // const songActionsHandler = () => dispatch(playSongToggle())

  if (isFetchingSongdetails || isFetchingrelatedSongs) return <Loader title='Loading song details...' />
  if (error) return <Error />

  return (
    <section className='flex flex-col'>
      <DetailsHeader
        title={songData?.title}
        subtitle={songData?.subtitle}
        img={songData?.images?.coverart}
        genre={songData?.genres?.primary}
        id={songData?.artists[0].adamid}
      />
      <div className='mb-10'>
        <h2 className='text-3xl text-white font-bold'>Lyrics:</h2>
        <div className='mt-5'>
          <p className='text-base text-gray-400'>{lyrics || 'Sorry, no lyrics found!'}</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-white'>Related Songs:</h1>

        <div className='mt-6 w-full flex flex-col'>
          {/* {relatedSongs.map((song, index) => {
            console.log(song)
            return (
              <RelatedSongCard
                key={song?.key}
                song={song}
                index={index}
                // id={song?.artists[0]?.adamid}
                img={song?.images?.coverart}
                playSongHandler={() => playSongHandler(song, index)}
                songActionsHandler={songActionsHandler}
              />
            )
          })} */}
        </div>
      </div>
    </section>
  )
}

export default SongDetails
