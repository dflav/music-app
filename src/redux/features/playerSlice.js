import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPlaylist: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreId: '',
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
})

export const playerActions = playerSlice.actions
export default playerSlice.reducer
