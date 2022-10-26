import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import Loader from '../components/Loader'
import DetailsHeader from '../components/DetailsHeader'

import { setActiveSong, playSongToggle } from '../redux/features/playerSlice'

const SongDetails = () => {
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { id } = useParams()

  console.log(id)
  return (
    <section className='flex flex-col'>
      <DetailsHeader id='' data='' />
      <div className='mb-10'>
        <h2 className='text-3xl text-white font-bold'>Lyrics:</h2>
        <div className='mt-5'>
          <p className='text-base text-gray-400 m'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore tempora deserunt nisi in? Vitae
            eius asperiores et deserunt, illo officia nisi ipsa quasi nulla dolores iste praesentium dolore voluptate?
            Quisquam hic quia suscipit pariatur, expedita debitis atque voluptas! Quos, fugit cum error laboriosam eum
            in voluptates itaque suscipit est. Consequuntur excepturi facere suscipit. Repudiandae, suscipit saepe!
            Voluptatem, laborum repellat? Enim dicta nobis ipsam maxime eum blanditiis officiis, quaerat numquam
            assumenda saepe eligendi itaque sequi adipisci vitae facere exercitationem placeat quidem eveniet doloribus
            pariatur ipsa labore. Laboriosam aliquid consectetur libero? Explicabo ducimus non assumenda at et totam
            dolorem quidem reprehenderit, tempora necessitatibus, blanditiis, soluta id provident? Atque facere ea, quo
            animi, reiciendis eveniet quod eius deserunt, vel voluptatibus rerum dolorum! Eligendi ullam voluptatem
            minima rerum id odio non. Sit officiis enim aliquid nobis repudiandae modi voluptatibus. Natus aspernatur,
            numquam voluptates ea veritatis deleniti nostrum mollitia fugit doloribus sed eos? Sequi?
          </p>
        </div>
      </div>
    </section>
  )
}

export default SongDetails
