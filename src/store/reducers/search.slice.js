import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    changeSearch: (state, { payload }) => (state = payload)
  }
});
export const searchReducer = searchSlice.reducer;
