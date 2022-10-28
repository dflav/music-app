import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPlaylist: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreId: 'POP',
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song
      state.currentIndex = action.payload.index
      state.currentPlaylist = action.payload.playlist
      state.isActive = true
      state.isPlaying = true
    },
    playSongToggle: state => {
      state.isPlaying = !state.isPlaying
    },
    setGenreListId: (state, action) => {
      state.genreId = action.payload
    },
  },
})

export const { setActiveSong, playSongToggle, setGenreListId } = playerSlice.actions
export default playerSlice.reducer
