import { mainApi } from "../../app/mainApi.js";



const userApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (data) => ({
        url: '/users/login',
        body: data,
        method: 'POST'
      })
    }),


    userRegister: builder.mutation({
      query: (data) => ({
        url: '/users/register',
        body: data,
        method: 'POST'
      })
    }),


  })




});

export const { useUserLoginMutation, useUserRegisterMutation } = userApi;