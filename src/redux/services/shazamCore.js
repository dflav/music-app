// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '294a2980bamsh034baece2c0958fp1a2efcjsn308635db103a',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
//   },
// }

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err))

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', '294a2980bamsh034baece2c0958fp1a2efcjsn308635db103a')
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com')

      return headers
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
})

export const { useGetTopChartsQuery } = shazamCoreApi
