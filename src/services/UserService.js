import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://luxehavenapi.onrender.com' }),
  endpoints: build => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: '/users'
      }),
      providesTags: ['Users']
    }),
    addUser: build.mutation({
      query: ({ email, passwordHash }) => ({
        url: '/users',
        method: 'POST',
        body: { email, passwordHash }
      }),
      invalidatesTags: ['Users']
    })
  })
});
export const { useFetchAllUsersQuery, useAddUserMutation } = userAPI;
