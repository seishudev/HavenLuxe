import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      if (index === -1) state.push({ ...payload, quantity: 1 });
    },
    addInstance: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      if (index !== -1) state[index].quantity += 1;
    },
    removeInstance: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      if (index !== -1) state[index].quantity -= 1;
    },
    removeFromCart: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload);
      if (index !== -1) state.splice(index, 1);
    },
    emptyCart: state => {
      state.splice(0, state.length);
    }
  }
});
export const cartReducer = cartSlice.reducer;
