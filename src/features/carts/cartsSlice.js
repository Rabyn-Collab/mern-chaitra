import { createSlice } from "@reduxjs/toolkit";
import { clearCartsFromLocal, getCartsFromLocal, setCartsToLocal, } from "../local/local.js";





export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal()
  },
  reducers: {
    setToCarts: (state, action) => {
      const isExist = state.carts.find((cart) => cart._id === action.payload._id);

      if (isExist) {
        state.carts = state.carts.map((cart) => cart._id === isExist._id ? action.payload : cart);

      } else {
        state.carts.push(action.payload);
      }
      setCartsToLocal(state.carts);

    },
    removeFromCarts: (state, action) => {
      state.carts = state.carts.filter((cart) => cart._id !== action.payload._id);
      setCartsToLocal(state.carts);

    },
    clearCarts: (state, action) => {
      state.carts = [];
      clearCartsFromLocal();

    }
  }
});



export const { setToCarts, removeFromCarts, clearCarts } = cartSlice.actions;