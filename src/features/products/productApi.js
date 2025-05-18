import { mainApi } from "../../app/mainApi.js";



export const productApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({


    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      })

    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET'
      })
    }),
    createProduct: builder.mutation({

    }),
    updateProduct: builder.mutation({

    }),
    removeProduct: builder.mutation({

    })



  })
})