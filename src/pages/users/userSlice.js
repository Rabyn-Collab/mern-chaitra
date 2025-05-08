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
      state.users.splice(action.payload, 1);
      setToLocal(state.users);
    }


  }



});

export const { addUser, updateUser, removeUser } = userSlice.actions;