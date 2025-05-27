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


    getUserProfile: builder.query({
      query: (token) => ({
        url: '/users/profile',
        method: "GET",
        headers: {
          Authorization: token
        }
      })
    }),

    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: '/users/profile',
        body: data.body,
        method: "PATCH",
        headers: {
          Authorization: data.token
        }
      })
    }),



  })




});

export const { useUserLoginMutation, useUserRegisterMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } = userApi;