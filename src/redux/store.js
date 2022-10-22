import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/playerSlice'
import { shazamCoreApi } from './services/shazamCore'

export const store = configureStore({
  reducer: {
    playerReducer,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shazamCoreApi.middleware),
})
