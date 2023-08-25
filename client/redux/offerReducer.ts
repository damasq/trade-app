import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {BooksState} from '../types';
import axios from 'axios';

const initialState = {
  data: [
    {
      id: 1,
      give: 'GIVE-1',
      want: 'WANT-1',
      date: new Date().toString(),
      user: 'USERNAME-1',
    },
    {
      id: 2,
      give: 'GIVE-2',
      want: 'WANT-2',
      date: new Date().toString(),
      user: 'USERNAME-2',
    },
    {
      id: 3,
      give: 'GIVE-3',
      want: 'WANT-3',
      date: new Date().toString(),
      user: 'USERNAME-3',
    },
  ],
  status: 'idle',
};

export const fetchOffers = createAsyncThunk('offer/fetchOffers', async () => {
  const response = await axios.get('/api/offer');
  return response.data;
});

const offerSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    rateBook() {},
    addBookToCart() {},
    // addBookToCart(){},
  },
  extraReducers: builder => {
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {rateBook, addBookToCart} = offerSlice.actions;

export default offerSlice.reducer;
