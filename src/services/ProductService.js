import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  tagTypes: ['Cosmetics'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://luxehavenapi.onrender.com' }),
  endpoints: build => ({
    fetchAllCosmetics: build.query({
      query: () => ({
        url: '/cosmetics'
      }),
      providesTags: ['Cosmetics']
    })
  })
});

export const { useFetchAllCosmeticsQuery } = productAPI;
