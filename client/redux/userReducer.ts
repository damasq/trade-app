import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';
import { User } from '../types';

type UserState = {
  data: User,
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState = {
  data: {},
  status: 'idle'
} as UserState;

export const fetchProfile = createAsyncThunk<User, number>('user/fetchProfile', async (id) => {
  const response = await axios.get(`/api/users/${id}`);
  return response.data;
});

export const removeOfferById = createAsyncThunk<any, number>('offers/removeOfferById', async (id, { dispatch, getState }) => {
  console.log("deleted")
  await axios.delete(`/api/offers/${id}`);
  console.log("deleted 2")
  return id;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(removeOfferById.fulfilled, (state, action) => {
      state.data.offers = state.data.offers.filter(offer => offer.id !== action.payload);
    });
  },
});

// export const {rateBook, addBookToCart} = userSlice.actions;

export default userSlice.reducer;
