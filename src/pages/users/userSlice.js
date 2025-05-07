import { createSlice } from "@reduxjs/toolkit";
import { getUsersFromLocal, setToLocal } from "../../local/local";


export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUsersFromLocal()
  },
  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
      setToLocal(state.users);
    },

    updateUser: (state, action) => {

    },

    removeUser: (state, action) => {

    }


  }



});

export const { addUser, updateUser, removeUser } = userSlice.actions;