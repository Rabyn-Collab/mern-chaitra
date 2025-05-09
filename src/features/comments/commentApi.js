import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  // endpoints: (builder) => {
  //   return {

  //   }
  // }
  endpoints: (builder) => ({


    getComments: builder.query({
      query: () => ({
        url: '/comments',
        method: 'GET',
      })
    }),




  })



});

export const { useGetCommentsQuery, useLazyGetCommentsQuery } = commentApi;