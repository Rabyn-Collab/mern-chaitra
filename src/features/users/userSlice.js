import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeUserFromLocal, setUsertoLocal } from "../local/local.js";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal()
  },

  reducers: {

    setUser: (state, action) => {
      state.user = action.payload;
      setUsertoLocal(state.user);
    },
    removeUser: (state, action) => {
      state = null;
      removeUserFromLocal();

    }

  }

});

export const { setUser, removeUser } = userSlice.actions;