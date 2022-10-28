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
      query: track_id => `/tracks/details?track_id=${track_id}`,
    }),
    getRelatedSongs: builder.query({
      query: track_id => `/tracks/related?track_id=${track_id}`,
    }),
    getArtistDetails: builder.query({
      query: artist_id => `/artists/details?artist_id=${artist_id}`,
    }),
    getChartsByCountry: builder.query({
      query: country_code => `/charts/country?country_code=${country_code}`,
    }),
    getChartsByGenre: builder.query({
      query: genre_code => `/charts/genre-world?genre_code=${genre_code}`,
    }),
    getChartsBySearch: builder.query({
      query: searchTerm => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetChartsByCountryQuery,
  useGetChartsByGenreQuery,
  useGetChartsBySearchQuery,
} = shazamCoreApi
