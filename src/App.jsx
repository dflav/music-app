import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Discover from './pages/Discover'
import Searchbar from './components/Searchbar'
import MostPopular from './components/MostPopular'
import SongDetails from './pages/SongDetails'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import ArtistDetails from './pages/ArtistDetails'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex-col bg-gradient-to-br from-[#1A2A33] to-cyan-700'>
        <Searchbar />
        <div className='px-6 flex flex-col xl:flex-row-reverse overflow-y-auto hide-scrollbar h-[calc(100vh-72px)]'>
          <div className='xl:sticky top-0 h-fit'>
            <MostPopular />
          </div>
          <div className='flex-1 h-fit pb-40'>
            <Routes>
              <Route path='/' element={<Discover />} />
              <Route path='/top-artists' />
              <Route path='/top-charts' />
              <Route path='/around-you' />
              <Route path='/artists/:artist_id' element={<ArtistDetails />} />
              <Route path='/songs/:track_id' element={<SongDetails />} />
              <Route path='/search/:searchTerm' />
            </Routes>
          </div>
        </div>
      </div>

      <MusicPlayer />
    </div>
  )
}

export default App
