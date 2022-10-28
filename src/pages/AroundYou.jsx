import React, { useEffect, useState } from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import { useGetChartsByCountryQuery } from '../redux/services/shazamCore'

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [skip, setSkip] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const { data: songs, isFetching, error } = useGetChartsByCountryQuery(country, { skip })

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEO_API_KEY}`)

      const data = await response.json()
      setCountry(data.location.country)
      setSkip(false)
      setIsLoading(false)
    }

    fetchCountry().catch(err => {
      setIsError(true)
      console.log(err)
    })
  }, [])

  if (isError || error) return <Error />
  if (isLoading || isFetching) return <Loader title='Loading songs around you...' />

  return (
    <section className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Around you <span className='font-black'>{country}</span>
      </h2>

      <div className='flex flex-wrap justify-center sm:justify-start gap-8'>
        {songs?.map((song, index) => (
          <SongCard key={song.key} song={song} index={index} playlist={songs} />
        ))}
      </div>
    </section>
  )
}

export default AroundYou
