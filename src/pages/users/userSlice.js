import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: []
  },
  reducers: {

    addUser: (state, action) => {

    },

    updateUser: (state, action) => {

    },

    removeUser: (state, action) => {

    }


  }



});

export const { addUser, updateUser, removeUser } = userSlice.actions;