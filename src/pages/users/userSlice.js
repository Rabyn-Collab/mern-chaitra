import { createSlice } from "@reduxjs/toolkit";
import { getUsersFromLocal, removeFromLocal, setToLocal } from "../../local/local";


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
      state.users = state.users.map((user) => action.payload.id === user.id ? action.payload : user);
      setToLocal(state.users);

    },

    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
      setToLocal(state.users);
    },

    removeAll: (state, action) => {
      state.users = [];
      removeFromLocal();
    }


  }



});

export const { addUser, updateUser, removeUser, removeAll } = userSlice.actions;