import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Discover from './pages/Discover'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex-col bg-gradient-to-br from-[#1A2A33] to-cyan-700  text-orange-400'>
        <div>Search bar</div>
        <div className='px-6 flex flex-col xl:flex-row-reverse overflow-y-auto hide-scrollbar h-[calc(100vh-72px)]'>
          <div className='xl:sticky relative top-0 h-fit'>TopPreview</div>
          <div className='flex-1 h-fit pb-40'>
            <Routes>
              <Route path='/' element={<Discover />} />
              <Route path='/top-artists' />
              <Route path='/top-charts' />
              <Route path='/around-you' />
              <Route path='/artists/:id' />
              <Route path='/songs/:id' />
              <Route path='/search/:searchTerm' />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
