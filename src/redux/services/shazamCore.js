import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_SHAZAM_CORE_RAPID_API_KEY)
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com')

      return headers
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongDetails: builder.query({
      query: track_id => `https://shazam-core.p.rapidapi.com/v1/tracks/details?track_id=${track_id}`,
    }),
  }),
})

export const { useGetTopChartsQuery, getSongDetails } = shazamCoreApi
