import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://68229fc8b342dce8004ed8f9.mockapi.io' }),


  endpoints: (builder) => ({

    getTodos: builder.query({
      query: () => ({
        url: '/todos',
        method: 'GET'
      }),
      providesTags: ['Todos']
    }),

    addTodo: builder.mutation({
      query: (body) => ({
        url: '/todos',
        body: body,
        method: 'POST'
      }),
      invalidatesTags: ['Todos']
    }),

    updateTodo: builder.mutation({
      query: (query) => ({
        url: `/todos/${query.id}`,
        body: query.body,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'

        },
        method: 'PATCH'
      }),
      invalidatesTags: ['Todos']
    }),

    removeTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todos']
    })


  })

})


export const { useGetTodosQuery, useAddTodoMutation, useRemoveTodoMutation, useUpdateTodoMutation } = todoApi;