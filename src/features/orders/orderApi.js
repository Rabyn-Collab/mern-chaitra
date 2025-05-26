import { mainApi } from "../../app/mainApi.js";




const orderApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    getOrders: builder.query({
      query: (token) => ({
        url: '/orders',
        method: 'GET',
        headers: {
          Authorization: token
        }
      }),
      providesTags: ['Order']
    }),

    getOrderDetail: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    createOrder: builder.mutation({
      query: (q) => ({
        url: '/orders',
        method: 'POST',
        body: q.body,
        headers: {
          Authorization: q.token
        }
      }),
      invalidatesTags: ['Order']
    }),



  }),
});

export const { useGetOrdersQuery, useGetOrderDetailQuery, useCreateOrderMutation } = orderApi;