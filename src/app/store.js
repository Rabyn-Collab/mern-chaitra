import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../pages/users/userSlice";




export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer
  }
})