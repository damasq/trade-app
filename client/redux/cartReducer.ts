import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeBook() {},
    removeAllBooks() {},
    checkout() {},
  },
});

export const {removeBook, removeAllBooks, checkout} = cartSlice.actions;

export default cartSlice.reducer;
