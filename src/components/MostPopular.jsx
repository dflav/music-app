import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper'
import { playSongToggle, setActiveSong } from '../redux/features/playerSlice'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import TopChartCard from './TopChartCard'

const Header = ({ title, link }) => (
  <div className='flex justify-between items-center'>
    <h2 className='font-bold text-2xl text-white'>{title}</h2>
    <Link to={link} className='text-gray-300 text-base'>
      See more
    </Link>
  </div>
)

const MostPopular = () => {
  const dispatch = useDispatch()

  const { data: songs } = useGetTopChartsQuery()

  const topCharts = songs?.slice(0, 5) || []

  const playSongHandler = (song, index) => dispatch(setActiveSong({ song, index, songs }))

  const songActionsHandler = () => dispatch(playSongToggle())

  return (
    <section className=' xl:mb-0 mb-6 xl:ml-6 flex flex-col xl:w-[500px] w-full '>
      <div className='w-full flex flex-col'>
        <Header title='Top Charts' link='/top-charts' />
        <div className='mt-4 flex flex-col gap-1'>
          {topCharts.map((song, index) => (
            <TopChartCard
              key={song.key}
              song={song}
              index={index}
              playSongHandler={() => playSongHandler(song, index)}
              songActionsHandler={songActionsHandler}
            />
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col mt-8'>
        <Header title='Top Artists' link='/top-artists' />
        <Swiper
          slidesPerView='auto'
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className='mt-4'
        >
          {topCharts.map(song => (
            <SwiperSlide
              key={song.key}
              style={{ width: '25% ', height: 'auto' }}
              className='shadow-lg rounded-full animate-slideright'
            >
              <Link to={`/artists/${song?.artists?.[0]?.adamid}`}>
                <img
                  src={song?.images?.background}
                  alt={song?.artists?.[0]?.alias}
                  className='rounded-full w-full object-fill'
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default MostPopular
