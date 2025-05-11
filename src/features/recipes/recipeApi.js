import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({


    getAllRecipes: builder.query({
      query: () => ({
        url: '/recipes',
        method: 'GET'
      })
    }),

    searchRecipes: builder.query({
      query: (query) => ({
        url: '/recipes/search',
        params: {
          q: query
        },
        method: 'GET'
      })
    })


  })
})


export const { useGetAllRecipesQuery, useLazyGetAllRecipesQuery, useLazySearchRecipesQuery } = recipeApi;