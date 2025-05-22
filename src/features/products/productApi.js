import { mainApi } from "../../app/mainApi.js";



export const productApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({


    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      }),
      providesTags: ['Product']

    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET'
      }),
      providesTags: ['Product']
    }),
    createProduct: builder.mutation({
      query: (q) => ({
        url: '/products',
        method: 'POST',
        body: q.body,
        headers: {
          Authorization: q.token
        }
      }),
      invalidatesTags: ['Product']

    }),
    updateProduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q.id}`,
        method: 'PATCH',
        body: q.body,
        headers: {
          Authorization: q.token
        }
      }),
      invalidatesTags: ['Product']
    }),
    removeProduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q.id}`,
        method: 'DELETE',
        headers: {
          Authorization: q.token
        }
      }),
      invalidatesTags: ['Product']
    })



  })
});

export const { useGetProductsQuery, useGetProductQuery, useCreateProductMutation, useUpdateProductMutation, useRemoveProductMutation } = productApi;